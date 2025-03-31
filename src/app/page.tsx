"use client";

import { useState } from "react";
import { generateMockData } from "../utils/mockGenerator";

export default function Home() {
  const [typeInput, setTypeInput] = useState(`interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
  createdAt: Date;
  tags?: string[];
}`);
  const [mockOutput, setMockOutput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>("");

  const handleGenerateMockData = async () => {
    setIsLoading(true);
    setError("");

    try {
      const result = generateMockData(typeInput);
      if (result.success) {
        setMockOutput(JSON.stringify(result.data, null, 2));
      } else {
        setError(result.error || "Failed to generate mock data");
      }
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unexpected error occurred"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-white py-12 px-4 flex flex-col items-center">
      <div className="max-w-5xl w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-purple-700">
            TypeScript Mock Data Generator
          </h1>

          <p className="text-center text-purple-600 mb-10 text-lg">
            Enter your TypeScript type definition below and get mock data
            generated instantly.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-16 border border-purple-100">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-4 md:p-6 border-b md:border-b-0 md:border-r border-purple-100">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-purple-100 rounded-lg px-3 py-1 text-purple-700 font-medium">
                  Type Definition
                </div>
              </div>
              <textarea
                className="w-full h-80 p-3 font-mono text-sm border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
                value={typeInput}
                placeholder={`interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
  createdAt: Date;
  tags?: string[];
}
                  `}
                onChange={(e) => setTypeInput(e.target.value)}
              ></textarea>
            </div>

            <div className="p-4 md:p-6 bg-gradient-to-br from-purple-50 to-white">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-purple-100 rounded-lg px-3 py-1 text-purple-700 font-medium">
                  Generated Mock
                </div>
              </div>
              <div className="w-full h-80 p-3 font-mono text-sm bg-white border border-purple-200 rounded-lg overflow-auto shadow-inner">
                {mockOutput ? (
                  <pre>{mockOutput}</pre>
                ) : (
                  <div className="text-gray-400 flex items-center justify-center h-full">
                    Mock data will appear here
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="p-6 flex justify-center bg-gradient-to-r from-purple-50 to-purple-100 border-t border-purple-100">
            <button
              onClick={handleGenerateMockData}
              disabled={isLoading || !typeInput}
              className="btn bg-purple-600 border-0 text-white gap-2 px-10 hover:bg-purple-700"
            >
              {isLoading ? "Generating..." : "Generate Mock Data"}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>

          {error && (
            <div className="px-6 pb-4">
              <div className="bg-red-50 text-red-600 p-3 rounded-lg">
                {error}
              </div>
            </div>
          )}
        </div>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center text-purple-700">
            Frequently Asked Questions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card bg-gradient-to-br from-white to-purple-50 shadow-md border border-purple-100">
              <div className="card-body">
                <h3 className="card-title text-lg text-purple-700">
                  What is TypeScript type mocking?
                </h3>
                <p className="text-gray-700">
                  TypeScript type mocking is the process of generating realistic
                  sample data that conforms to TypeScript type definitions. It's
                  useful for development, testing, and documentation purposes,
                  allowing developers to visualize how data structures will look
                  at runtime.
                </p>
              </div>
            </div>

            <div className="card bg-gradient-to-br from-white to-purple-50 shadow-md border border-purple-100">
              <div className="card-body">
                <h3 className="card-title text-lg text-purple-700">
                  Why would I need to generate mock data from TypeScript types?
                </h3>
                <p className="text-gray-700">
                  Mock data generation is essential for frontend development
                  without a ready backend, testing UI components with various
                  data shapes, creating API documentation examples, and setting
                  up realistic test scenarios for unit and integration tests.
                </p>
              </div>
            </div>

            <div className="card bg-gradient-to-br from-white to-purple-50 shadow-md border border-purple-100">
              <div className="card-body">
                <h3 className="card-title text-lg text-purple-700">
                  What TypeScript types are supported?
                </h3>
                <p className="text-gray-700">
                  Our TypeScript mock generator supports primitive types
                  (string, number, boolean), arrays, objects, interfaces, type
                  aliases, union types, and complex nested structures. It also
                  handles special types like Date, null, and optional properties
                  with the "?" modifier.
                </p>
              </div>
            </div>

            <div className="card bg-gradient-to-br from-white to-purple-50 shadow-md border border-purple-100">
              <div className="card-body">
                <h3 className="card-title text-lg text-purple-700">
                  How can I customize the generated mock data?
                </h3>
                <p className="text-gray-700">
                  You can customize mock data by using more specific type
                  declarations or JSDoc comments. For example, you can use
                  string literal types, numeric ranges, or specialized types
                  like "email" or "date" to get more realistic and
                  domain-specific mock values.
                </p>
              </div>
            </div>

            <div className="card bg-gradient-to-br from-white to-purple-50 shadow-md border border-purple-100">
              <div className="card-body">
                <h3 className="card-title text-lg text-purple-700">
                  Can I use this with existing TypeScript projects?
                </h3>
                <p className="text-gray-700">
                  Yes! This tool works with any valid TypeScript type
                  definitions. Simply copy your interfaces or types from your
                  existing TypeScript projects and paste them into the
                  generator. The tool will analyze your type structure and
                  generate appropriate mock data.
                </p>
              </div>
            </div>

            <div className="card bg-gradient-to-br from-white to-purple-50 shadow-md border border-purple-100">
              <div className="card-body">
                <h3 className="card-title text-lg text-purple-700">
                  How does TypeScript mock data help with testing?
                </h3>
                <p className="text-gray-700">
                  TypeScript mock data provides consistent test fixtures that
                  match your actual data models. This ensures your tests are
                  reliable and closely simulate real application data. It also
                  makes it easier to test edge cases by quickly generating
                  variations of your data structures.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Information Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center text-purple-700">
            How to Use TypeScript Mock Generator
          </h2>

          <div className="bg-gradient-to-br from-white to-purple-50 rounded-lg p-6 shadow-md border border-purple-100">
            <ol className="list-decimal pl-5 space-y-4 text-gray-700">
              <li>
                <strong className="text-purple-700">
                  Define your TypeScript interface or type
                </strong>{" "}
                - Start by entering your TypeScript type definition in the left
                panel. This can be an interface, type alias, or any valid
                TypeScript type declaration.
              </li>
              <li>
                <strong className="text-purple-700">
                  Click "Generate Mock Data"
                </strong>{" "}
                - Once your type is defined, click the button to analyze your
                type structure and generate appropriate mock data.
              </li>
              <li>
                <strong className="text-purple-700">
                  View and use your mock data
                </strong>{" "}
                - The generated JSON will appear in the right panel. You can
                copy this data for use in your development, testing, or
                documentation.
              </li>
            </ol>

            <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg border border-purple-100">
              <h4 className="font-bold text-purple-700">Pro Tip</h4>
              <p className="text-gray-700">
                For advanced use cases, you can create complex nested types that
                combine interfaces, unions, and generics. The mock generator
                will recursively create appropriate mock values for each level
                of your type hierarchy.
              </p>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="mt-16 pt-8">
          <div className="bg-gradient-to-br from-white to-purple-50 rounded-xl shadow-md border border-purple-100 p-8 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 rounded-full p-2 mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-purple-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-purple-700">
                    About Tool
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  TypeScript Mock Generator helps developers create realistic
                  test data from TypeScript interfaces, enhancing development
                  workflow and testing efficiency.
                </p>
              </div>

              <div>
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 rounded-full p-2 mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-purple-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-purple-700">
                    Resources
                  </h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-purple-500 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <a
                      href="/privacy"
                      className="text-purple-600 hover:text-purple-800 transition-colors"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-purple-500 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <a
                      href="/terms"
                      className="text-purple-600 hover:text-purple-800 transition-colors"
                    >
                      Terms of Use
                    </a>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-purple-500 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <a
                      href="/about"
                      className="text-purple-600 hover:text-purple-800 transition-colors"
                    >
                      About Us
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 rounded-full p-2 mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-purple-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-purple-700">
                    Contact
                  </h3>
                </div>
                <p className="text-gray-600 mb-3">
                  Have questions or feedback? We'd love to hear from you:
                </p>
                <a
                  href="mailto:turbo76.work@gmial.com"
                  className="flex items-center text-purple-600 hover:text-purple-800 transition-colors mb-6"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  turbo76.work@gmial.com
                </a>
              </div>
            </div>
          </div>

          <div className="text-center py-4 border-t border-purple-200">
            <p className="text-gray-600">
              © {new Date().getFullYear()} TypeScript Mock Generator. All Rights
              Reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
