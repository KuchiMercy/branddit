import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";
import Navbar from "../layout/Navbar";

export default function ServicesHero() {
  return (
    <section
      className="bg-white pt-8 pb-24"
      style={{
        backgroundImage: `radial-gradient(circle at top left, #dbeafe, transparent 45%), radial-gradient(circle at bottom right, #fed7aa, transparent 45%)`,
      }}
    >
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center mt-16">
        <div>
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-[#071C2A]">
            Strategic Branding
            <br />
            & Digital Solutions
            <br />
            That Drive <span className="text-primary">Growth</span>
          </h1>

          <p className="mt-8 text-lg text-slate-600 leading-relaxed max-w-xl">
            We don&apos;t just design, we build strategic digital experiences
            that help ambitious brands grow, scale, and stand out through
            intentional branding, technology, and creative execution.
          </p>

          <div className="flex flex-col items-center md:items-start md:flex-row justify-center md:justify-start gap-4 mt-10">
            <Link href="/contact" className="w-full md:w-auto">
              <Button
                text="Start Your Project"
                bgColor="bg-[#071C2A]"
                textColor="text-white"
                className="w-full"
              />
            </Link>

            <Link href="/contact" className="w-full md:w-auto">
              <Button
                text="Book a Strategy Call"
                bgColor="bg-transparent"
                textColor="text-[#071C2A]"
                border="border border-[#071C2A]"
                className="w-full"
              />
            </Link>
          </div>
        </div>

        <Image
          src="/assets/images/serviceHero.png"
          alt="Services"
          width={650}
          height={650}
          className="rounded-[30px] w-full"
        />
      </div>
    </section>
  );
}
