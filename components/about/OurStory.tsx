import Image from "next/image";

export default function OurStory() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Image
            src="/assets/images/aboutStory.png"
            alt="Branddit"
            width={600}
            height={600}
            className="rounded-[28px]"
          />

          <div>
            <h2 className="text-5xl font-bold mb-8">Our Story</h2>

            <div className="space-y-6 text-slate-700 leading-8">
              <p>
                Branddit Creative Studio LTD was built on a simple idea:
                <strong>
                  {" "}
                  great brands are created through intentional strategy,
                  compelling design, and meaningful execution.
                </strong>
              </p>

              <p>
                What began as a small creative studio has evolved into a
                borderless agency partnering with startups, businesses, and
                institutions across Nigeria, Ghana, Canada, the United Kingdom,
                and the United States.
              </p>

              <p>
                We help modern brands build clarity, strengthen perception, and
                scale through strategic branding, digital experiences, and
                creative systems.
              </p>

              <p>
                Our approach combines strategy, creativity, and technology to
                create work that is visually compelling, purposeful, scalable,
                and results-driven.
              </p>

              <p>
                At Branddit, we believe strong brands are built through
                consistency, collaboration, and intentional thinking.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 bg-white rounded-3xl shadow-sm py-8 px-10 text-center italic text-lg">
          &ldquo;Our mission is simple: to build world-class brands that do not
          just participate in the market, but redefine it.&rdquo;
        </div>
      </div>
    </section>
  );
}
