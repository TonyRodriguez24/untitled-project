export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-800 dark:text-gray-200 px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold dark:text-blue-400 mb-2">
          Privacy Policy
        </h1>

        <p className="mb-6 text-sm text-gray-600 dark:text-gray-400">
          Effective Date: July 2025
        </p>

        <section className="mb-8">
          <h2 className="text-xl mb-2">Introduction</h2>
          <p>
            This policy explains how we collect, use, and protect the personal
            information you share with us when visiting our website or using our
            services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl mb-2">What We Collect</h2>
          <p>We may collect basic contact information such as:</p>
          <ul className="list-disc pl-6 mt-2">
            <li>Name</li>
            <li>Email</li>
            <li>Phone number</li>
            <li>Address</li>
            <li>Service request details</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl mb-2">How We Use It</h2>
          <p>We use your information to:</p>
          <ul className="list-disc pl-6 mt-2">
            <li>Respond to inquiries and provide estimates</li>
            <li>Communicate about project details</li>
            <li>Improve our website and customer service</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl mb-2">Sharing Your Info</h2>
          <p>
            We don’t sell or rent your data. We only share it with third parties
            when necessary to deliver our services, like web hosting or email
            delivery platforms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl mb-2">Security</h2>
          <p>
            We take data protection seriously and use secure tools and practices
            to keep your information safe. While no website can guarantee
            complete security, we regularly maintain and monitor our systems to
            prevent unauthorized access or misuse.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl mb-2">Cookies</h2>
          <p>
            Our site currently does not use cookies to enhance your experience.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl mb-2">Your Rights</h2>
          <p>
            You can contact us anytime to ask what data we have or request it be
            updated or deleted.
          </p>
        </section>

        <p className="text-sm text-gray-500 dark:text-gray-400 mt-10">
          We may update this policy as needed. Changes will be posted here.
        </p>
      </div>
    </div>
  );
}
