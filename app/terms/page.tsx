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
            Terms of Service
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto w-[90%] text-[#1A1A1A]">
          <p className="text-lg leading-9">
            By accessing and using Branddit&apos;s website and services, you
            agree to comply with these Terms of Service.
          </p>

          {/* Services */}
          <div className="mt-12">
            <h2 className="text-3xl font-semibold mb-4">Services</h2>

            <p className="text-lg leading-9">
              Branddit provides branding, design, digital strategy, and related
              creative services. The scope, timeline, and deliverables for each
              project will be outlined in individual agreements.
            </p>
          </div>

          {/* Client Responsibilities */}
          <div className="mt-12">
            <h2 className="text-3xl font-semibold mb-4">
              Client Responsibilities
            </h2>

            <p className="mb-4 text-lg">Clients agree to:</p>

            <ul className="list-disc pl-8 space-y-3 text-lg">
              <li>Provide accurate project information.</li>
              <li>Supply necessary content and feedback promptly.</li>
              <li>Respect agreed payment schedules and project timelines.</li>
            </ul>
          </div>

          {/* Payments */}
          <div className="mt-12">
            <h2 className="text-3xl font-semibold mb-4">Payments</h2>

            <p className="text-lg leading-9">
              Payments are subject to the terms outlined in project agreements.
              Work may commence only after required deposits or initial payments
              have been received.
            </p>
          </div>

          {/* Intellectual Property */}
          <div className="mt-12">
            <h2 className="text-3xl font-semibold mb-4">
              Intellectual Property
            </h2>

            <p className="text-lg leading-9">
              Upon full payment, ownership of approved final deliverables may be
              transferred to the client unless otherwise specified in the
              project agreement. Branddit reserves the right to showcase
              completed work in portfolios, case studies, and promotional
              materials.
            </p>
          </div>

          {/* Revisions */}
          <div className="mt-12">
            <h2 className="text-3xl font-semibold mb-4">Revisions</h2>

            <p className="text-lg leading-9">
              Projects include revision rounds as stated in the service
              agreement. Additional revisions may attract extra charges.
            </p>
          </div>

          {/* Limitation of Liability */}
          <div className="mt-12">
            <h2 className="text-3xl font-semibold mb-4">
              Limitation of Liability
            </h2>

            <p className="text-lg leading-9">
              Branddit shall not be liable for indirect, incidental, or
              consequential damages arising from the use of our services or
              website.
            </p>
          </div>

          {/* Changes to Terms */}
          <div className="mt-12">
            <h2 className="text-3xl font-semibold mb-4">Changes to Terms</h2>

            <p className="text-lg leading-9">
              We reserve the right to update these Terms of Service at any time.
              Continued use of our website or services constitutes acceptance of
              any updates.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
