"use client";

import { useEffect, useRef, useState } from "react";

const processSteps = [
  {
    step: "1",
    title: "Discover",
    description:
      "We begin by understanding your business, goals, audience, and market. This helps us identify opportunities and define the foundation for your brand.",
  },
  {
    step: "2",
    title: "Define",
    description:
      "Using insights from our research, we develop a clear strategy including brand positioning, messaging, and design direction to guide the project.",
  },
  {
    step: "3",
    title: "Design",
    description:
      "Our team brings the strategy to life through creative design, building visual identities, digital experiences, and brand assets.",
  },
  {
    step: "4",
    title: "Deploy & Grow",
    description:
      "We launch your project and continuously optimize it using analytics and performance insights to ensure sustainable growth.",
  },
];

const stats = [
  {
    number: "200+",
    label: "Projects Delivered",
  },
  {
    number: "30+",
    label: "Happy Clients",
  },
  {
    number: "4+",
    label: "Years of Excellence",
  },
  {
    number: "100%",
    label: "Client Satisfaction",
  },
];

interface StrategicProcessProps {
  showStats?: boolean;
}

export default function StrategicProcess({
  showStats = true,
}: StrategicProcessProps) {
  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const targets = stats.map((stat) =>
            parseInt(stat.number.replace(/[^0-9]/g, ""), 10),
          );
          const duration = 1500;
          const steps = 60;
          const stepTime = duration / steps;
          let currentStep = 0;

          const timer = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;
            const eased = 1 - Math.pow(1 - progress, 3);

            setCounts(targets.map((target) => Math.round(target * eased)));

            if (currentStep >= steps) {
              clearInterval(timer);
              setCounts(targets);
            }
          }, stepTime);
        }
      },
      { threshold: 0.3 },
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section>
      {/* Process Section */}
      <div className="bg-[#071C2A] text-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold">
              Our Strategic Process
            </h2>

            <p className="mt-6 text-xl text-slate-300 leading-relaxed">
              Our structured process ensures that every project is strategically
              planned, creatively executed, and optimized for measurable
              results.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative mt-24">
            {/* Orange Line */}
            <div className="absolute top-10 left-0 right-0 h-0.5 bg-primary hidden lg:block" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 relative">
              {processSteps.map((item) => (
                <div
                  key={item.step}
                  className="flex flex-col items-center text-center"
                >
                  {/* Circle */}
                  <div className="relative z-10 w-20 h-20 rounded-full border-[6px] border-primary bg-[#071C2A] flex items-center justify-center">
                    <span className="text-3xl font-bold text-primary">
                      {item.step}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="mt-10 text-3xl font-bold">{item.title}</h3>

                  <p className="mt-5 text-slate-300 leading-8 text-lg">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Statistics */}
      {showStats && (
        <div ref={statsRef} className="bg-[#1446B4] py-20 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {stats.map((stat, index) => (
              <div key={stat.label}>
                <h3 className="text-6xl md:text-7xl font-bold text-white">
                  <span>{counts[index]}</span>
                  <span className="text-primary">{stat.number.slice(-1)}</span>
                </h3>

                <p className="mt-4 uppercase tracking-[0.2em] text-sm text-slate-300">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
