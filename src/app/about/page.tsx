import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-purple-100 to-purple-50 py-12 px-4 flex flex-col items-center">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-purple-700">
            About Us
          </h1>
          
          <p className="text-center text-purple-600 mb-6">
            TypeScript Mock Generator Team
          </p>
        </div>

        <div className="bg-gradient-to-br from-white to-purple-50 rounded-xl shadow-md p-6 md:p-8 mb-8">
          <div className="prose max-w-none">
            <h2 className="text-xl font-semibold text-purple-700 mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-4">
              TypeScript Mock Generator was born from a simple idea: to provide developers with a fast and efficient tool that can generate realistic mock data based on TypeScript type definitions. Our mission is to simplify the development process, allowing frontend developers to work independently from backend development while improving testing and prototype design efficiency.
            </p>

            <h2 className="text-xl font-semibold text-purple-700 mb-4 mt-6">Our Story</h2>
            <p className="text-gray-700 mb-4">
              As developers, we often faced the challenge of how to efficiently conduct frontend development and testing when backend APIs were not yet ready. Manually creating complex mock data structures was not only time-consuming but also error-prone. TypeScript provided us with a powerful type system, and we realized we could leverage these type definitions to automatically generate compliant mock data.
            </p>
            <p className="text-gray-700 mb-4">
              In 2023, we began building this tool with the goal of creating a fully client-side, intuitive, and powerful TypeScript mock data generator. After multiple iterations and improvements, TypeScript Mock Generator has now become an indispensable part of many developers' workflows.
            </p>

            <h2 className="text-xl font-semibold text-purple-700 mb-4 mt-6">Core Features</h2>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li className="mb-2">Automatically generate mock data based on TypeScript interfaces and type definitions</li>
              <li className="mb-2">Support for complex type structures including nested objects, arrays, union types</li>
              <li className="mb-2">Completely client-side operation to protect your data privacy</li>
              <li className="mb-2">User-friendly interface with instant results</li>
              <li>Export generated data for development and testing</li>
            </ul>

            <h2 className="text-xl font-semibold text-purple-700 mb-4 mt-6">Open Source Spirit</h2>
            <p className="text-gray-700 mb-4">
              We believe in the power of open source and the value of sharing knowledge. TypeScript Mock Generator is developed as an open source project, and we welcome community contributions and improvements. We thank all the developers who support us, whether through code contributions, raising issues, or sharing our tool.
            </p>

            <h2 className="text-xl font-semibold text-purple-700 mb-4 mt-6">Future Outlook</h2>
            <p className="text-gray-700 mb-4">
              We will continue to improve TypeScript Mock Generator, planning to add more features such as saving templates, support for more complex types, more customization options, and more. We are committed to making this tool a powerful asset in every TypeScript developer's toolkit.
            </p>

            <h2 className="text-xl font-semibold text-purple-700 mb-4 mt-6">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions, suggestions, or feedback, please feel free to contact us at:
              <a href="mailto:turbo76.work@gmial.com" className="text-purple-600 hover:text-purple-800 ml-1">
                turbo76.work@gmial.com
              </a>
            </p>
            <p className="text-gray-700 mt-6">
              Thank you for using TypeScript Mock Generator!
            </p>
          </div>
        </div>

        <div className="flex justify-center mb-8">
          <Link href="/" className="btn bg-purple-600 hover:bg-purple-700 text-white border-0">
            Return to Home
          </Link>
        </div>
        
        <footer className="text-center py-4 border-t border-purple-200">
          <p className="text-gray-600">© {new Date().getFullYear()} TypeScript Mock Generator. All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  );
} 