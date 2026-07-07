import { Sparkles, Blocks, Move } from "lucide-react";

const philosophy = [
  {
    title: "Strategy First",
    description:
      "Every pixel has a purpose. We dive deep into the 'why' before we touch the 'what'. Data drives our intuition.",
    icon: Sparkles,
  },
  {
    title: "Design With Intention",
    description:
      "Aesthetic excellence backed by data. We create visuals that aren't just beautiful but strategically built to perform.",
    icon: Blocks,
  },
  {
    title: "Results Driven",
    description:
      "We measure success by your growth. If it doesn't move the needle for your business, we haven't done our job.",
    icon: Move,
  },
];

export default function Philosophy() {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-5xl font-bold mb-20">Our Philosophy</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {philosophy.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="bg-white border border-slate-200 rounded-3xl p-10 hover:shadow-lg transition"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center">
                  <Icon className="text-blue-700" size={26} />
                </div>

                <h3 className="mt-8 text-2xl font-bold">{item.title}</h3>

                <p className="mt-4 text-slate-600 leading-7">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
