import Navbar from "../layout/Navbar";

export default function ContactHero() {
  return (
    <section className="bg-[#041926] text-white pt-8 pb-24">
      <Navbar />
      <div className="max-w-3xl mx-auto text-center pt-10 px-6">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Let&apos;s Build Something
          <br />
          Remarkable Together
        </h1>

        <p className="mt-6 text-lg text-gray-300">
          Tell us about your project and we&apos;ll get back to you within 24
          hours.
        </p>
      </div>
    </section>
  );
}
