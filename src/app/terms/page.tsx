import Link from 'next/link';

export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-purple-100 to-purple-50 py-12 px-4 flex flex-col items-center">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-purple-700">
            Terms of Use
          </h1>
          
          <p className="text-center text-purple-600 mb-6">
            Last updated: {new Date().toLocaleDateString('en-US')}
          </p>
        </div>

        <div className="bg-gradient-to-br from-white to-purple-50 rounded-xl shadow-md p-6 md:p-8 mb-8">
          <div className="prose max-w-none">
            <h2 className="text-xl font-semibold text-purple-700 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 mb-4">
              By accessing or using TypeScript Mock Generator, you agree to be bound by these Terms of Use. If you do not agree to any part of these terms, please do not use our service.
            </p>

            <h2 className="text-xl font-semibold text-purple-700 mb-4 mt-6">2. Service Description</h2>
            <p className="text-gray-700 mb-4">
              TypeScript Mock Generator is an online tool for generating mock data based on TypeScript type definitions. Our service runs entirely in the client-side and does not transmit your type definitions or generated data to our servers.
            </p>

            <h2 className="text-xl font-semibold text-purple-700 mb-4 mt-6">3. Use Restrictions</h2>
            <p className="text-gray-700 mb-4">
              You agree not to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li className="mb-2">Use our service in any way that could damage, disable, or impair the service</li>
              <li className="mb-2">Attempt unauthorized access to our systems or networks</li>
              <li className="mb-2">Use the service for any illegal activities</li>
              <li>Excessively use our service resources through automated means</li>
            </ul>

            <h2 className="text-xl font-semibold text-purple-700 mb-4 mt-6">4. Intellectual Property</h2>
            <p className="text-gray-700 mb-4">
              All content, design, code, and functionality of TypeScript Mock Generator are protected by copyright, trademark, and other intellectual property laws. You may use the data generated by our service for your own projects, but you may not claim our service or any part of it as your own work.
            </p>

            <h2 className="text-xl font-semibold text-purple-700 mb-4 mt-6">5. Disclaimer</h2>
            <p className="text-gray-700 mb-4">
              This service is provided "as is" and "as available" without any warranties of any kind. We do not guarantee that the generated data will be suitable for specific purposes or fully meet your requirements. You assume full responsibility for your use of any data generated by this service.
            </p>

            <h2 className="text-xl font-semibold text-purple-700 mb-4 mt-6">6. Limitation of Liability</h2>
            <p className="text-gray-700 mb-4">
              In no event shall TypeScript Mock Generator and its administrators and maintainers be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use of or inability to use this service.
            </p>

            <h2 className="text-xl font-semibold text-purple-700 mb-4 mt-6">7. Modification of Terms</h2>
            <p className="text-gray-700 mb-4">
              We reserve the right to modify these terms at any time. Modified terms will be posted on this website and will be effective immediately upon posting. Your continued use of our service will be deemed acceptance of the modified terms.
            </p>

            <h2 className="text-xl font-semibold text-purple-700 mb-4 mt-6">8. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions or concerns about these terms, please contact us at:
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