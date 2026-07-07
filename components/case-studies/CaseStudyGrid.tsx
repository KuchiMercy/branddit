"use client";

import { useState } from "react";
import CaseStudyCard from "./CaseStudyCard";
import CaseStudyModal, { type CaseStudyDetails } from "./CaseStudyModal";

const projects: (CaseStudyDetails & { id: string })[] = [
  {
    id: "jacksons",
    title: "Jacksons Apparel Mobile App UI Design",
    image: "/assets/case-studies/jacksons.png",
    category: "Case Study",
    date: "March 22nd, 2025",
    overview:
      "For this project, we designed a modern and user-focused mobile shopping experience for Jacksons Apparel, created to make fashion discovery and online purchasing feel seamless, intuitive, and visually engaging. Our goal was to develop an interface that balances simplicity with functionality while giving users a smooth and enjoyable browsing experience across every touchpoint.Through a clean and minimal UI direction, we positioned the app to reflect convenience, accessibility, and modern retail culture. From the structured product layouts and intuitive navigation system to the soft visual aesthetic and mobile-first interactions, every design element was carefully crafted to enhance usability, improve customer engagement, and create a refined digital shopping experience for everyday fashion consumers.",
  },
  {
    id: "sisibole",
    title: "Sisi Bole Logo and Brand Identity Design",
    image: "/assets/case-studies/sistibole.png",
    category: "Case Study",
    date: "May 4th, 2025",

    overview:
      "For this project, we developed a bold and culturally inspired brand identity for Sisi Bole, designed to capture the energy, flavour, and street-food experience behind the brand. Our goal was to create a visual identity that felt memorable, expressive, and instantly recognizable while reflecting the warmth and excitement of local food culture. Through a vibrant and playful visual direction, we positioned the brand to communicate authenticity, confidence, and personality. From the custom typography and striking color palette to the modern logo applications and street-style branding approach, every design element was crafted to give Sisi Bole a strong visual presence that connects naturally with everyday customers and food lovers alike.",
  },
  {
    id: "metrohostels",
    title: "Metrohostels Web Design and Development",
    image: "/assets/case-studies/hotel-app.png",
    category: "Case Study",
    date: "February 2nd, 2025",

    overview:
      "For this project, we designed and developed a modern booking platform for MetroHostels, a shortlet apartment brand focused on helping users discover comfortable and affordable stays with ease. Our goal was to create a seamless digital experience that simplifies apartment browsing, booking, and property discovery while building trust and convenience for travelers and guests.Through a clean and user-friendly web experience, we positioned the brand to reflect comfort, accessibility, and reliability. From the intuitive property listing system and structured booking flow to the modern interface and responsive design approach, every element was carefully crafted to improve usability, enhance customer confidence, and deliver a smooth accommodation booking experience across all devices.",
  },
  {
    id: "lovepops",
    title: "Lovepops Premium Popcorn Packaging Design",
    image: "/assets/case-studies/lovepops-1.png",
    category: "Case Study",
    date: "May 7th, 2025",

    overview:
      "For this project, we developed a bold and eye-catching packaging identity for Lovepops Premium Popcorn, designed to stand out instantly on retail shelves and create a memorable first impression. Our goal was to communicate fun, flavour, freshness, and snack-time excitement through vibrant visuals and an energetic brand presence.Through a playful and modern visual direction, we positioned the brand to reflect its core personality: delivering a delicious popcorn experience that feels exciting, premium, and enjoyable for everyday consumers. From the expressive typography to the flavour-focused imagery and bright colour system, every design element was crafted to attract attention and make the product instantly recognizable.",
  },
  {
    id: "bodyfinance",
    title: "Body of Finance Visual Identity Design",
    image: "/assets/case-studies/bof.png",
    category: "Case Study",
    date: "February 2nd, 2025",
    overview:
      "For this project, we developed a purpose-driven identity for a financial brand focused on bridging the gap between complex financial solutions and everyday families. Our goal was to communicate accessibility, trust, and long-term security in a space often perceived as overwhelming.Through a strategic and modern visual direction, we positioned the brand to reflect its core mission: empowering individuals to move beyond paycheck-to-paycheck living and become architects of lasting financial stability and generational wealth.",
  },
  {
    id: "peanuts",
    title: "Coated Peanuts Label Design",
    image: "/assets/case-studies/peanuts.png",
    category: "Case Study",
    date: "May 4th, 2025",
    overview:
      "For this project, we developed a vibrant and market-ready packaging identity for Vee Treats Coated Peanuts, created to capture attention quickly and communicate flavour, crunch, and quality at first glance. Our goal was to design a visual experience that felt bold, appetizing, and memorable while helping the product stand out confidently in a competitive snack market.Through a clean and energetic visual direction, we positioned the brand to reflect its fun and flavorful personality. From the warm color palette and bold typography to the close-up product imagery and shelf-ready presentation, every design element was carefully crafted to enhance visibility, strengthen brand recognition, and create an irresistible appeal for everyday consumers.",
  },
  {
    id: "victoria",
    title: "Victoria's Foundation Web UI Design",
    image: "/assets/case-studies/victoria.png",
    category: "Case Study",
    date: "August 7th, 2025",
    overview:
      "For this project, we designed a modern and user-focused mobile shopping experience for Jacksons Apparel, created to make fashion discovery and online purchasing feel seamless, intuitive, and visually engaging. Our goal was to develop an interface that balances simplicity with functionality while giving users a smooth and enjoyable browsing experience across every touchpoint.Through a clean and minimal UI direction, we positioned the app to reflect convenience, accessibility, and modern retail culture. From the structured product layouts and intuitive navigation system to the soft visual aesthetic and mobile-first interactions, every design element was carefully crafted to enhance usability, improve customer engagement, and create a refined digital shopping experience for everyday fashion consumers.",
  },
  {
    id: "northarchitecture",
    title: "North Architecture Web UI Design",
    image: "/assets/case-studies/northarchitecture.png",
    category: "Case Study",
    date: "August 11th, 2025",
    overview:
      "For this project, we designed a modern and visually immersive website experience for North Architecture, a dynamic and innovative design firm focused on redefining contemporary architectural excellence. Our goal was to create a digital presence that reflects the brand’s sophistication, creativity, and forward-thinking approach while showcasing its projects in a clean and engaging way.Through a refined and minimal web design direction, we positioned the brand to communicate innovation, structure, and architectural elegance. From the spacious layouts and modern typography to the project-focused user experience and sleek visual presentation, every design element was carefully crafted to highlight the firm’s expertise and create a seamless browsing experience that resonates with clients, collaborators, and design enthusiasts alike",
  },
  {
    id: "payroute",
    title: "Payroute Web UI Design",
    image: "/assets/case-studies/payroute.png",
    category: "Case Study",
    date: "August 17th, 2025",
    overview:
      "For this project, we designed a modern and conversion-focused web interface for Payroute, a fintech platform focused on simplifying international payments and digital financial transactions. Our goal was to create a seamless user experience that communicates speed, trust, accessibility, and innovation while making complex financial processes feel simple and user-friendly.Through a clean and strategic UI direction, we positioned the brand to reflect reliability, efficiency, and modern financial technology. From the structured layouts and intuitive navigation to the vibrant interface elements and responsive design system, every detail was carefully crafted to enhance usability, improve customer confidence, and deliver a smooth digital payment experience for users across different markets.",
  },
  {
    id: "mapletrite",
    title: "Mapletrite Refer & Earn Campaign",
    image: "/assets/case-studies/mapletrite.png",
    category: "Case Study",
    date: "March 22nd, 2025",
    overview:
      "For this project, we developed a high-converting campaign design for Mapletrite’s “Refer and Earn” promotion, created to drive user engagement, increase referrals, and encourage app adoption through clear and compelling visual communication. Our goal was to design a campaign experience that felt exciting, rewarding, and easy to understand at first glance.Through a bold and modern marketing direction, we positioned the campaign to reflect simplicity, trust, and instant rewards. From the structured information layout and vibrant brand colors to the dynamic promotional visuals and mobile-focused presentation, every design element was carefully crafted to capture attention quickly, communicate the offer effectively, and motivate users to participate and share the platform with others.",
  },
  {
    id: "kch",
    title: "KCH 2025 Content & Marketing Campaign",
    image: "/assets/case-studies/kch.png",
    category: "Case Study",
    date: "March 30th, 2025",

    overview:
      "For this project, we developed a vibrant and community-driven marketing campaign for Kaduna Creative Hangout 2025, designed to promote creative collaboration, event participation, and audience engagement across multiple touchpoints. Our goal was to create visually compelling campaign materials that communicate energy, creativity, and the collective spirit of the creative community.Through a bold and expressive visual direction, we positioned the event to feel dynamic, modern, and culturally relevant. From the colorful layouts and structured speaker presentations to the engaging vendor campaign assets and branded event communication system, every design element was carefully crafted to attract attention, increase registrations, encourage partnerships, and build excitement around the event experience.",
  },
  {
    id: "northbridge",
    title: "Northbridge Capital Brand Identity",
    image: "/assets/case-studies/northbridge2.png",
    category: "Case Study",
    date: "August 17th, 2025",
    overview:
      "Northbridge Capital required a brand identity that reflects trust, sophistication, and long-term financial vision. Our approach focused on creating a modern visual system that communicates stability, clarity, and premium positioning across every brand touchpoint. From the logo structure and typography system to the digital brand applications, every element was intentionally designed to establish credibility while maintaining a refined contemporary aesthetic. The identity balances professionalism with modern simplicity, allowing the brand to stand confidently within the evolving financial landscape. Through strategic design direction, clean layouts, and a cohesive visual language, we positioned Northbridge Capital as a forward-thinking financial brand built for growth, recognition, and lasting impact.",
  },
];

export default function CaseStudyGrid() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[number] | null
  >(null);

  return (
    <>
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
            {projects.map((project) => (
              <CaseStudyCard
                key={project.id}
                image={project.image}
                title={project.title}
                category={project.category}
                date={project.date}
                onSeeMore={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </section>

      <CaseStudyModal
        details={selectedProject}
        open={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
