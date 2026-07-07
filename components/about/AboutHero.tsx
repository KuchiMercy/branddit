import Image from "next/image";
import Navbar from "../layout/Navbar";

const stats = [
  {
    value: "2022",
    label: "Founded",
  },
  {
    value: "12+",
    label: "Team size",
  },
  {
    value: "5+",
    label: "Countries",
  },
];

export default function AboutHero() {
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
            We are the <span className="text-primary">creative</span>
            <br />
            partner your brand
            <br />
            <span className="text-primary">deserve</span>
          </h1>

          <p className="mt-8 max-w-lg text-lg text-slate-600 leading-relaxed">
            We build bold visual identities, strategic digital experiences, and
            creative systems that help ambitious brands stand out and scale
            confidently.
          </p>

          <div className="flex flex-wrap gap-8 md:gap-16 mt-14">
            {stats.map((item) => (
              <div key={item.label}>
                <h3 className="text-3xl md:text-5xl font-bold text-[#071C2A]">
                  {item.value}
                </h3>

                <p className="mt-2 text-sm md:text-base text-slate-600">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <Image
          src="/assets/images/about-hero.png"
          alt="Branddit Team"
          width={650}
          height={700}
          className="rounded-4xl w-full"
        />
      </div>
    </section>
  );
}
