import Navbar from "@/components/layout/Navbar";
import PageLayout from "@/components/layout/PageLayout";

export default function Page() {
  return (
    <PageLayout showNavbar={false}>
      {/* Hero */}
      <section className="bg-[#041926] text-white pt-8 pb-24">
        <Navbar />
        <div className="max-w-7xl mx-auto pt-10 w-[90%]">
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            Cookie Policy
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto w-[90%] text-[#1A1A1A]">
          <p className="text-lg leading-9">
            Branddit uses cookies and similar technologies to improve your
            browsing experience, understand website performance, and provide
            relevant content.
          </p>

          {/* What Are Cookies */}
          <div className="mt-12">
            <h2 className="text-3xl font-semibold mb-4">What Are Cookies?</h2>

            <p className="text-lg leading-9">
              Cookies are small text files stored on your device when you visit
              a website. They help websites remember user preferences and
              improve functionality.
            </p>
          </div>

          {/* How We Use Cookies */}
          <div className="mt-12">
            <h2 className="text-3xl font-semibold mb-4">How We Use Cookies</h2>

            <p className="mb-4 text-lg">We use cookies to:</p>

            <ul className="list-disc pl-8 space-y-3 text-lg">
              <li>Improve website performance</li>
              <li>Analyze visitor behavior and traffic</li>
              <li>Remember user preferences</li>
              <li>Enhance website security and functionality</li>
            </ul>
          </div>

          {/* Types of Cookies */}
          <div className="mt-12">
            <h2 className="text-3xl font-semibold mb-6">
              Types of Cookies We Use
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-2">
                  Essential Cookies
                </h3>
                <p className="text-lg leading-9">
                  Required for basic website functionality and security.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-2">
                  Analytics Cookies
                </h3>
                <p className="text-lg leading-9">
                  Help us understand how visitors interact with our website,
                  enabling us to improve user experience.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-2">
                  Preference Cookies
                </h3>
                <p className="text-lg leading-9">
                  Remember settings and preferences to provide a more
                  personalized experience.
                </p>
              </div>
            </div>
          </div>

          {/* Managing Cookies */}
          <div className="mt-12">
            <h2 className="text-3xl font-semibold mb-4">Managing Cookies</h2>

            <p className="text-lg leading-9">
              You can manage or disable cookies through your browser settings.
              Please note that disabling certain cookies may affect website
              functionality.
            </p>
          </div>

          {/* Updates */}
          <div className="mt-12">
            <h2 className="text-3xl font-semibold mb-4">
              Updates to This Policy
            </h2>

            <p className="text-lg leading-9">
              We may update this Cookie Policy periodically to reflect changes
              in technology, legal requirements, or business practices.
            </p>
          </div>

          {/* Contact */}
          <div className="mt-12">
            <h2 className="text-3xl font-semibold mb-4">Contact</h2>

            <p className="text-lg leading-9">
              For questions regarding our use of cookies, please contact
              Branddit through our official communication channels.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
