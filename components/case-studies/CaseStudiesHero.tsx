import Navbar from "../layout/Navbar";

export default function CaseStudiesHero() {
  return (
    <section className="bg-[#071C2A] pt-8 pb-24">
      <Navbar />
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-5xl lg:text-6xl pt-10 font-bold text-white">
          Some of Our Work
        </h1>

        <p className="mt-8 text-lg text-white/80 leading-8 max-w-3xl mx-auto">
          We bridge the gap between intuition and digital precision. Explore our
          curated selection of high impact visual identities and digital
          experiences.
        </p>
      </div>
    </section>
  );
}
