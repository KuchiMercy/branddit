import Navbar from "@/components/layout/Navbar";
import PageLayout from "@/components/layout/PageLayout";

export default function Page() {
  return (
    <PageLayout showNavbar={false}>
      {/* Hero */}
      <section className="bg-[#041926] text-white pt-8 pb-24">
        <Navbar />
        <div className="max-w-7xl mx-auto pt-20 w-[90%]">
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            Privacy Policy
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto w-[90%] text-[#1A1A1A]">
          <p className="text-lg leading-9">
            At Branddit, we respect your privacy and are committed to protecting
            the personal information you share with us. This Privacy Policy
            explains how we collect, use, store, and safeguard your information
            when you visit our website or engage with our services.
          </p>

          {/* Information We Collect */}
          <div className="mt-12">
            <h2 className="text-3xl font-semibold mb-4">
              Information We Collect
            </h2>

            <p className="mb-4 text-lg">We may collect:</p>

            <ul className="list-disc pl-8 space-y-3 text-lg">
              <li>
                Name and contact information (email address, phone number)
              </li>
              <li>Business information provided during consultations</li>
              <li>Website usage data and analytics</li>
              <li>
                Information submitted through forms, inquiries, or project
                requests
              </li>
            </ul>
          </div>

          {/* How We Use */}
          <div className="mt-12">
            <h2 className="text-3xl font-semibold mb-4">
              How We Use Your Information
            </h2>

            <p className="mb-4 text-lg">We use collected information to:</p>

            <ul className="list-disc pl-8 space-y-3 text-lg">
              <li>Provide branding and design services</li>
              <li>Respond to inquiries and support requests</li>
              <li>Improve our website and user experience</li>
              <li>Send relevant updates and communications</li>
              <li>Maintain security and prevent unauthorized activities</li>
            </ul>
          </div>

          {/* Information Sharing */}
          <div className="mt-12">
            <h2 className="text-3xl font-semibold mb-4">Information Sharing</h2>

            <p className="text-lg leading-9">
              Branddit does not sell, rent, or trade your personal information.
              We may share information with trusted service providers when
              necessary to deliver our services or comply with legal
              obligations.
            </p>
          </div>

          {/* Data Security */}
          <div className="mt-12">
            <h2 className="text-3xl font-semibold mb-4">Data Security</h2>

            <p className="text-lg leading-9">
              We implement reasonable security measures to protect your
              information from unauthorized access, disclosure, or misuse.
            </p>
          </div>

          {/* Your Rights */}
          <div className="mt-12">
            <h2 className="text-3xl font-semibold mb-4">Your Rights</h2>

            <p className="text-lg leading-9">
              You may request access to, correction of, or deletion of your
              personal information by contacting us directly.
            </p>
          </div>

          {/* Contact */}
          <div className="mt-12">
            <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>

            <p className="text-lg leading-9">
              If you have questions regarding this Privacy Policy, please
              contact us through our official communication channels.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
