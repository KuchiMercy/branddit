"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does a full brand identity project take?",
    answer:
      "A comprehensive identity project typically spans 8 to 12 weeks, ensuring adequate time for deep discovery, conceptual exploration, and refinement across all deliverables",
  },
  {
    question: "Do you work with early stage startups?",
    answer:
      "A comprehensive identity project typically spans 8 to 12 weeks, ensuring adequate time for deep discovery, conceptusal exploration, through refinement across all deliverables",
  },
  {
    question: "What kind of documentation will I receive?",
    answer:
      "You'll receive a comprehensive strategy document outlining your brand positioning, target audience, messaging framework, brand voice, key insights, and actionable recommendations. All deliverables are organized and easy to implement across your business and marketing efforts.",
  },
  {
    question: "Are revisions included in the strategy phase?",
    answer:
      "Yes. We include revision rounds to ensure the final strategy accurately reflects your business goals and vision. The number of revisions depends on the scope of the project and will be outlined in your proposal.",
  },
  {
    question: "What is your approach to digital development?",
    answer:
      "Our approach combines strategy, user experience, and modern design principles. We start by understanding your business objectives and user needs, then create digital solutions that are intuitive, scalable, visually engaging, and optimized for performance.",
  },
  {
    question: "Can we hire you for a single service like content creation?",
    answer:
      "Yes. While we often deliver integrated solutions, we also offer standalone services. Whether you need content creation, branding, UI/UX design, or a specific marketing campaign, we can tailor our services to meet your needs.",
  },
  {
    question: "How long does the strategy process take?",
    answer:
      "Most brand strategy projects take between 1–3 weeks, depending on the project's complexity, scope, and stakeholder involvement. We'll provide a clear timeline before the project begins..",
  },
];

export default function FAQ() {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-center text-5xl font-bold text-[#071C2A] mb-16">
          FAQ
        </h2>

        <Accordion className="space-y-5">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-0 rounded-2xl bg-white px-8 shadow-sm"
            >
              <AccordionTrigger className="text-left text-lg font-medium hover:no-underline py-7">
                {faq.question}
              </AccordionTrigger>

              <AccordionContent className="text-slate-600 leading-7 pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
