import Link from 'next/link';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-purple-100 to-purple-50 py-12 px-4 flex flex-col items-center">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-purple-700">
            Privacy Policy
          </h1>
          
          <p className="text-center text-purple-600 mb-6">
            Last updated: {new Date().toLocaleDateString('en-US')}
          </p>
        </div>

        <div className="bg-gradient-to-br from-white to-purple-50 rounded-xl shadow-md p-6 md:p-8 mb-8">
          <div className="prose max-w-none">
            <h2 className="text-xl font-semibold text-purple-700 mb-4">1. Information Collection</h2>
            <p className="text-gray-700 mb-4">
              TypeScript Mock Generator is a tool that runs entirely in the client-side. We do not collect, store, or transmit any type definitions you input or data that is generated. All processing is done locally in your browser.
            </p>

            <h2 className="text-xl font-semibold text-purple-700 mb-4 mt-6">2. Use of Cookies</h2>
            <p className="text-gray-700 mb-4">
              Our website may use cookies and similar technologies to enhance your browsing experience. These cookies do not contain personally identifiable information and are only used to remember your preferences and provide basic usage analytics.
            </p>

            <h2 className="text-xl font-semibold text-purple-700 mb-4 mt-6">3. Third-Party Services</h2>
            <p className="text-gray-700 mb-4">
              Our website may contain links to third-party websites or use third-party services (such as analytics tools). These third parties may have their own privacy policies, and we recommend reviewing these policies to understand how they handle your information.
            </p>

            <h2 className="text-xl font-semibold text-purple-700 mb-4 mt-6">4. Data Security</h2>
            <p className="text-gray-700 mb-4">
              While we do not collect your personal data, we still take reasonable security measures to protect our website from unauthorized access and malicious attacks.
            </p>

            <h2 className="text-xl font-semibold text-purple-700 mb-4 mt-6">5. Privacy Policy Updates</h2>
            <p className="text-gray-700 mb-4">
              We may update this privacy policy from time to time. Any changes will be posted on this page and, when necessary, we will notify you via the website.
            </p>

            <h2 className="text-xl font-semibold text-purple-700 mb-4 mt-6">6. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions or concerns about our privacy policy, please contact us at:
              <a href="mailto:turbo76.work@gmial.com" className="text-purple-600 hover:text-purple-800 ml-1">
                turbo76.work@gmial.com
              </a>
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