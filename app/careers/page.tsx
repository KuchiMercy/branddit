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
            Careers{" "}
          </h1>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto w-[90%] text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#FFB38A] mb-10">
            No Open Positions Right Now
          </h1>

          <div className="space-y-10 text-left text-lg md:text-xl leading-9 text-gray-800">
            <p>
              Thank you for your interest in joining Branddit. We currently
              don&apos;t have any open roles, but we&apos;re always interested
              in meeting talented individuals who are passionate about branding,
              design, and digital experiences.
            </p>

            <p>
              Feel free to send your resume and portfolio to{" "}
              <a
                href="mailto:brandditcreativestudioltd@gmail.com"
                className="font-semibold text-black hover:text-primary transition-colors"
              >
                brandditcreativestudioltd@gmail.com
              </a>{" "}
              and we&apos;ll reach out when a suitable opportunity becomes
              available.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
