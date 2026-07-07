import { icons } from "@/public/icons/icons";
import Link from "next/link";

const services = [
  {
    title: "Brand Strategy",
    description:
      "We help businesses define their positioning, messaging, and audience to build a strong strategic foundation for growth.",
    icon: icons.brandStrategy,
  },
  {
    title: "Brand Identity & Design",
    description:
      "We design powerful visual identities that communicate your brand's personality and make your business instantly recognizable.",
    icon: icons.brandIdentity,
  },
  {
    title: "Product Design (Web/App/UI/UX)",
    description:
      "We create modern UI products and user experiences that are visually stunning, fast, and optimized for conversions.",
    icon: icons.productDesign,
  },
  {
    title: "Content & Marketing",
    description:
      "We develop creative content and marketing campaigns that attract attention, build trust, and drive engagement.",
    icon: icons.contentmrkt,
  },
  {
    title: "Growth & Optimization",
    description:
      "We use data, analytics, and optimization strategies to improve performance and scale your brand effectively.",
    icon: icons.growth,
  },
  {
    title: "Campaign & Launch Strategy",
    description:
      "We plan and execute strategic campaigns for product launches, promotions, and brand activations that drive real results.",
    icon: icons.capmpaign,
  },
];

export default function ServiceOverview() {
  return (
    <section className="bg-[#FAFBFF] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-slate-900">
            Service Overview
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            We help businesses build strong brands, create exceptional digital
            experiences, and implement marketing systems that drive real growth.
            Our services combine strategy, design, and technology to turn ideas
            into powerful brands that scale.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
          {services.map((service) => {
            return (
              <div
                key={service.title}
                className="bg-white rounded-3xl p-10 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center">
                  {service.icon}
                </div>

                <h3 className="mt-10 text-3xl font-bold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-5 text-slate-600 leading-7">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-20">
          <Link
            href="/services"
            className="group flex items-center gap-3 text-blue-700 text-2xl font-semibold hover:gap-5 transition-all"
          >
            Explore Services
            <svg
              className="w-8 h-8 transition-transform group-hover:translate-x-2"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
