import Image from "next/image";

export default function Team() {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#071C2A]">
            The Creative Leadership Behind Branddit
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Miracle Isenyo Ikwebe{" "}
            <span className="text-primary">
              {" "}
              - Founder and Creative Director
            </span>
          </p>
        </div>

        {/* body */}
        <div className="flex flex-col justify-between items-center  md:flex-row">
          {/* text */}
          <div className="w-full md:w-1/2">
            <p className="text-md my-2 text-slate-600 md:text-lg">
              Miracle Isenyo Ikwebe is a brand and marketing professional with
              about a decade of experience helping businesses build stronger
              brands, communicate their value, and connect with the right
              audiences. <br /> <br />
              His approach goes beyond aesthetics, focusing on brand
              positioning, communication, marketing, and business growth. He
              believes strong brands are built by understanding what a business
              stands for, who it serves, and how it should be perceived in the
              market. <br /> <br />
              Across Nigeria, Canada, and the UK, Miracle has led brand
              development, marketing campaigns, creative strategy, and brand
              communication initiatives for businesses across different
              industries. <br /> <br />
              Through Branddit Creative Studio, he has led projects for over 30
              businesses, while also managing creative teams, collaborating with
              business and marketing stakeholders, and mentoring over 50
              aspiring creatives. <br /> <br />
              Today, Miracle continues to lead Branddit with a focus on helping
              businesses build brands that are clear, relevant, memorable, and
              positioned for growth. <br /> <br /> At Branddit, he leads with
              one core belief:{" "}
              <span className="font-bold">
                A strong brand is more than how a business looks. It is how the
                business is understood, remembered, and experienced.
              </span>{" "}
              <br /> <br />{" "}
              <span className="text-primary">Building Brands That Scale.</span>
            </p>
          </div>
          {/* image */}
          <div className="flex">
            <Image
              src="/assets/images/team/Isenyo.png"
              alt="Miracle Isenyo Ikwebe"
              className="hidden md:block"
              width={500}
              height={500}
            />
            <Image
              src="/assets/images/team/MI.png"
              alt="Miracle Isenyo Ikwebe"
              className="block md:hidden"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import { ArrowRight, ArrowLeft } from "lucide-react";

// const teamMembers = [
//   {
//     name: "Miracle Isenyo Ikwebe",
//     role: "Founder/Creative Director",
//     image: "/assets/images/team/Miracle.png",
//   },
//   {
//     name: "Peter Kingsley",
//     role: "COO/Operational Lead",
//     image: "/assets/images/team/Peter.png",
//   },
//   {
//     name: "Ruth Joseph",
//     role: "Administrative Officer",
//     image: "/assets/images/team/Ruth.png",
//   },
//   {
//     name: "Dorcas Benjamin",
//     role: "Social Media Lead",
//     image: "/assets/images/team/Dorcas.png",
//   },
//   {
//     name: "Mercy Duru",
//     role: "Lead Developer",
//     image: "/assets/images/team/Mercy.png",
//   },
//   {
//     name: "Fatima Aliyu",
//     role: "Product Designer",
//     image: "/assets/images/team/Fatima.png",
//   },
//   {
//     name: "Salem Musa",
//     role: "Video & Motion Lead",
//     image: "/assets/images/team/Salem.png",
//   },
// ];

// export default function Team() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [cardsPerView, setCardsPerView] = useState(4);

//   useEffect(() => {
//     const updateCardsPerView = () => {
//       if (window.innerWidth < 768) {
//         setCardsPerView(1);
//       } else if (window.innerWidth < 1024) {
//         setCardsPerView(2);
//       } else {
//         setCardsPerView(4);
//       }
//     };
//     updateCardsPerView();
//     window.addEventListener("resize", updateCardsPerView);
//     return () => window.removeEventListener("resize", updateCardsPerView);
//   }, []);

//   const maxIndex = Math.max(0, teamMembers.length - cardsPerView);

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
//   };

//   const translatePercent = (currentIndex * 100) / cardsPerView;

//   // Auto-slide
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [maxIndex]);

//   return (
//     <section className="py-24 bg-[#F8FAFC]">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Heading */}
//         <div className="text-center max-w-3xl mx-auto">
//           <h2 className="text-5xl font-bold text-[#071C2A]">Meet Our Team</h2>

//           <p className="mt-4 text-lg text-slate-600">
//             A hybrid collective of global creators working together to bring
//             your vision to life.
//           </p>
//         </div>

//         {/* Team Cards Slider */}
//         <div className="relative mt-16">
//           <div className="overflow-hidden">
//             <div
//               className="flex transition-transform duration-500 ease-in-out"
//               style={{ transform: `translateX(-${translatePercent}%)` }}
//             >
//               {teamMembers.map((member) => (
//                 <div
//                   key={member.name}
//                   className="w-full md:w-1/2 lg:w-1/4 flex-shrink-0 px-3"
//                 >
//                   <div className="relative rounded-[28px] overflow-hidden group h-107.5">
//                     <Image
//                       src={member.image}
//                       alt={member.name}
//                       fill
//                       className="object-cover transition duration-500 group-hover:scale-105"
//                     />

//                     <div className="absolute inset-0 bg-linear-to-t from-[#071C2A] via-[#071C2A]/40 to-transparent" />

//                     <div className="absolute bottom-6 left-6 right-6 text-white">
//                       <h3 className="text-2xl font-semibold">{member.name}</h3>

//                       <p className="text-gray-300 mt-2">{member.role}</p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Navigation Buttons */}
//           <button
//             onClick={prevSlide}
//             className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition shadow-lg"
//           >
//             <ArrowLeft size={20} />
//           </button>

//           <button
//             onClick={nextSlide}
//             className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition shadow-lg"
//           >
//             <ArrowRight size={20} />
//           </button>
//         </div>

//         {/* Dots Indicator */}
//         <div className="flex justify-center gap-2 mt-8">
//           {Array.from({ length: maxIndex + 1 }).map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentIndex(Math.min(index, maxIndex))}
//               className={`w-2 h-2 rounded-full transition-all ${
//                 index === currentIndex
//                   ? "bg-primary w-8"
//                   : "bg-slate-300 hover:bg-slate-400"
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
