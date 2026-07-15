import { CheckCircle } from "lucide-react";

const services = [
  "Brand strategy & positioning",
  "Brand research & audits",
  "Brand identity design",
  "Logo design",
  "Visual identity systems",
  "Brand guidelines & styles guides",
  "Brand naming & taglines",
  "Brand messaging and voice",
  "Graphic design (print & digital)",
  "Marketing collateral design",
  "Packaging design",
  "Illustration & art direction",
  "Motion graphics & animation",
  "Website design & development",
  "UI/UX design",
  "Landing page design",
  "Social media branding & content design",
  "Content creation & copywriting",
  "Digital marketing campaigns",
  "Social media management",
  "Paid advertising (social & search)",
  "Email marketing design",
  "SEO & web optimization",
  "Photography & creative shoots",
  "Video production & editing",
  "Event & experiment branding",
  "Environmental & signage branding",
  "Internal & corporate branding",
  "Rebranding services",
  "Brand monitoring & analytics",
];

export default function ServicesList() {
  const left = services.slice(0, 15);
  const right = services.slice(15);

  return (
    <section className="bg-[#1747B8] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-5xl font-bold text-white">Our Services</h2>

          <p className="mt-5 text-white/80 text-lg">
            A holistic approach to digital evolution, from the first spark of an
            idea to global market dominance.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-0 lg:gap-20 mt-20">
          {[left, right].map((column, index) => (
            <div key={index} className="space-y-6">
              {column.map((service) => (
                <div key={service} className="flex items-start gap-4">
                  <CheckCircle
                    size={18}
                    className="text-primary mt-1 shrink-0"
                    fill="black"
                  />

                  <p className="text-white text-lg">{service}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
