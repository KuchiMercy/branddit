import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CaseStudies() {
  return (
    <section className="bg-[#EEF2FF] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-[#071C2A]">
            Featured Case Studies
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            Showcasing how we help businesses transform their brands and achieve
            measurable growth through strategy, design, and digital experiences.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-20">
          {/* Row 1 */}
          <div className="lg:col-span-2 group overflow-hidden rounded-[28px] bg-white shadow-sm">
            <Image
              src="/assets/case-studies/lovepops-1.png"
              alt="LovePops Packaging"
              width={900}
              height={600}
              className="w-full h-auto object-contain transition duration-500 group-hover:scale-105"
              quality={100}
            />
          </div>
          <div className="group overflow-hidden rounded-[28px] bg-white shadow-sm">
            <Image
              src="/assets/case-studies/hotel-app.png"
              alt="Hotel Booking UI"
              width={600}
              height={600}
              className="w-full h-auto object-contain transition duration-500 group-hover:scale-105"
              quality={100}
            />
          </div>

          {/* Row 2 */}
          <div className="group overflow-hidden rounded-[28px] bg-white shadow-sm">
            <Image
              src="/assets/case-studies/sistibole.png"
              alt="Sisti Bole Branding"
              width={600}
              height={600}
              className="w-full h-auto object-contain transition duration-500 group-hover:scale-105"
              quality={100}
            />
          </div>
          <div className="lg:col-span-2 group overflow-hidden rounded-[28px] bg-white shadow-sm">
            <Image
              src="/assets/case-studies/mobile-ui.png"
              alt="Mobile App"
              width={900}
              height={600}
              className="w-full h-auto object-contain transition duration-500 group-hover:scale-105"
              quality={100}
            />
          </div>

          {/* Row 3 */}
          <div className="lg:col-span-3 group overflow-hidden rounded-[28px] bg-white shadow-sm">
            <Image
              src="/assets/case-studies/northbridge.png"
              alt="Northbridge Capital"
              width={1200}
              height={600}
              className="w-full h-auto object-contain transition duration-500 group-hover:scale-105"
              quality={100}
            />
          </div>

          {/* Row 4 */}
          <div className="lg:col-span-3 group overflow-hidden rounded-[28px] bg-white shadow-sm">
            <Image
              src="/assets/case-studies/social-media.png"
              alt="Social Media Designs"
              width={1200}
              height={600}
              className="w-full h-auto object-contain transition duration-500 group-hover:scale-105"
              quality={100}
            />
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-16">
          <Link
            href="/case-studies"
            className="group flex items-center gap-3 text-[#1B4CC9] font-semibold text-lg"
          >
            View all case studies
            <ArrowRight
              size={20}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
