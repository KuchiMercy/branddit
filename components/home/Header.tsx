import Navbar from "../layout/Navbar";
import Button from "../ui/Button";
import Link from "next/link";
import BrandSlide from "./BrandSlide";

export default function Header() {
  return (
    <>
      <header
        className="min-h-screen bg-white"
        style={{
          backgroundImage: `radial-gradient(circle at top left, #dbeafe, transparent 40%), radial-gradient(circle at bottom right, #fed7aa, transparent 40%)`,
        }}
      >
        <Navbar />

        <section className="max-w-5xl mx-auto text-center mt-16 px-6">
          {/* Trust Badge */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 mb-8">
            <p className="font-semibold text-lg">
              Trusted by 20+ startup brands
            </p>

            <div className="flex -space-x-2">
              {["M", "B", "D", "H", "+20"].map((item) => (
                <div
                  key={item}
                  className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-sm border-2 border-white"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-8xl font-bold leading-tight text-slate-900">
            BUILDING <span className="text-primary">BRANDS</span>
            <br />
            THAT SCALE.
          </h1>

          {/* Description */}
          <p className="mt-8 text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
            We help startups, businesses, and institutions build strategic
            brands, digital experiences, and marketing systems that drive
            measurable growth.
          </p>

          {/* Buttons */}
          <div className="flex flex-col items-center md:flex-row justify-center  gap-4 mt-12">
            <Link href="/contact" className="w-full md:w-auto">
              <Button
                text="Start Your Project →"
                bgColor="bg-slate-900"
                textColor="text-white"
                className="w-full"
              />
            </Link>

            <Link href="/case-studies" className="w-full md:w-auto">
              <Button
                text="See Our Work"
                bgColor="bg-white"
                textColor="text-slate-900"
                border="border border-slate-900"
                className="w-full"
              />
            </Link>
          </div>
          {/* Clients Heading */}
          <div className="mt-24 text-center">
            <h2 className="text-3xl pb-6 font-bold">
              Trusted by <span className="text-primary">30+ Clients</span>
            </h2>
          </div>
        </section>
      </header>
      <BrandSlide />
    </>
  );
}
