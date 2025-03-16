interface MockOptions {
  stringLength?: number;
  minNumber?: number;
  maxNumber?: number;
}

type BasicType = 'string' | 'number' | 'boolean' | 'array' | 'object' | 'null' | 'undefined';

export function generateMockData(typeDefinition: string, options: MockOptions = {}) {
  const {
    stringLength = 10,
    minNumber = 0,
    maxNumber = 100,
  } = options;

  // Utility functions for random data generation
  const generateRandomString = (length: number) => {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
  };

  const generateRandomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const generateRandomBoolean = () => {
    return Math.random() > 0.5;
  };

  const generateRandomArray = (itemType: string, length: number = 3) => {
    return Array.from({ length }, (_, i) => generateValueForType(itemType, i));
  };

  const generateRandomEmail = () => {
    const domains = ['gmail.com', 'yahoo.com', 'outlook.com', 'example.com'];
    const username = generateRandomString(8).toLowerCase();
    return `${username}@${domains[Math.floor(Math.random() * domains.length)]}`;
  };

  const generateRandomDate = () => {
    const start = new Date(2000, 0, 1);
    const end = new Date();
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toISOString();
  };

  // Function to generate value based on type
  const generateValueForType = (type: string, index?: number): any => {
    type = type.trim();
    
    // Handle union types (e.g., string | number)
    if (type.includes('|')) {
      const types = type.split('|').map(t => t.trim());
      const randomType = types[Math.floor(Math.random() * types.length)];
      return generateValueForType(randomType);
    }

    // Handle array types (e.g., string[])
    if (type.endsWith('[]')) {
      const itemType = type.slice(0, -2);
      return generateRandomArray(itemType);
    }

    // Handle generics like Array<string>
    if (type.startsWith('Array<') && type.endsWith('>')) {
      const itemType = type.slice(6, -1);
      return generateRandomArray(itemType);
    }

    // Handle special types
    switch (type.toLowerCase()) {
      case 'string':
        return generateRandomString(stringLength);
      case 'number':
        return generateRandomNumber(minNumber, maxNumber);
      case 'boolean':
        return generateRandomBoolean();
      case 'date':
        return generateRandomDate();
      case 'email':
        return generateRandomEmail();
      case 'any':
      case 'unknown':
        const types: BasicType[] = ['string', 'number', 'boolean', 'array', 'object'];
        return generateValueForType(types[Math.floor(Math.random() * types.length)]);
      case 'null':
        return null;
      case 'undefined':
        return undefined;
      case 'object':
        return {
          id: index || generateRandomNumber(1, 1000),
          name: generateRandomString(8),
          value: generateRandomNumber(1, 100)
        };
      case 'array':
        return generateRandomArray('any');
      default:
        return `Unknown type: ${type}`;
    }
  };

  // Parse the type definition and generate mock data
  try {
    const parsedData: Record<string, any> = {};
    
    // Simple parser for interface properties
    const interfaceRegex = /interface\s+(\w+)\s*{([^}]*)}/gm;
    const typeRegex = /type\s+(\w+)\s*=\s*({[^}]*}|\S+)/gm;
    const propertyRegex = /(\w+)(\?)?:\s*([^;]*);?/gm;
    
    let interfaceMatch = interfaceRegex.exec(typeDefinition);
    let typeMatch = typeRegex.exec(typeDefinition);
    
    if (interfaceMatch) {
      const interfaceBody = interfaceMatch[2];
      let propertyMatch;
      
      while ((propertyMatch = propertyRegex.exec(interfaceBody)) !== null) {
        const [, propertyName, optional, propertyType] = propertyMatch;
        
        // Skip optional properties randomly
        if (optional && Math.random() > 0.7) {
          continue;
        }
        
        parsedData[propertyName] = generateValueForType(propertyType);
      }
      
      return {
        success: true,
        data: parsedData
      };
    } else if (typeMatch) {
      // Handle type aliases
      const typeName = typeMatch[1];
      const typeValue = typeMatch[2];
      
      if (typeValue.startsWith('{')) {
        // Handle object type aliases similar to interfaces
        const propertyMatches = Array.from(typeValue.matchAll(propertyRegex));
        
        for (const match of propertyMatches) {
          const [, propertyName, optional, propertyType] = match;
          
          // Skip optional properties randomly
          if (optional && Math.random() > 0.7) {
            continue;
          }
          
          parsedData[propertyName] = generateValueForType(propertyType);
        }
        
        return {
          success: true,
          data: parsedData
        };
      } else {
        // Handle simple type aliases
        return {
          success: true,
          data: generateValueForType(typeValue)
        };
      }
    } else {
      // If no interface or type alias is found, try to generate based on basic type
      return {
        success: true,
        data: generateValueForType(typeDefinition)
      };
    }
  } catch (error) {
    console.error('Error generating mock data:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to generate mock data'
    };
  }
} 