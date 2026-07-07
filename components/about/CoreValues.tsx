const values = [
  {
    number: "1",
    title: "Radical Transparency",
    description:
      "No hidden agendas, just honest collaboration and real-time communication.",
  },
  {
    number: "2",
    title: "Creative Excellence",
    description:
      "Good isn't enough. We strive for work that demands attention and inspires awe.",
  },
  {
    number: "3",
    title: "True Partnership",
    description:
      "We don't work for you, we work with you. Your goals become our singular focus.",
  },
  {
    number: "4",
    title: "Global Perspective",
    description:
      "Localize roots with a universal perspective. We build brands for everywhere.",
  },
];

export default function CoreValues() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-center text-5xl font-bold text-[#071C2A]">
          Core Values
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {values.map((value) => (
            <div
              key={value.number}
              className="bg-[#071C2A] rounded-[28px] p-10 min-h-70 flex flex-col"
            >
              <span className="text-6xl font-bold text-primary">
                {value.number}
              </span>

              <h3 className="mt-10 text-2xl font-semibold text-white">
                {value.title}
              </h3>

              <p className="mt-5 text-slate-300 leading-7">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
