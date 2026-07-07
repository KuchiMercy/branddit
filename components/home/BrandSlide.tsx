"use client";

import Image from "next/image";

const logos = [
  { src: "/assets/logo-frame/agora.png", alt: "Agora" },
  { src: "/assets/logo-frame/alivra.png", alt: "Alivra" },
  { src: "/assets/logo-frame/apex.png", alt: "Apex" },
  { src: "/assets/logo-frame/asie.png", alt: "Asie" },
  { src: "/assets/logo-frame/blacknova.png", alt: "Blacknova" },
  { src: "/assets/logo-frame/bof.png", alt: "BOF" },
  { src: "/assets/logo-frame/brewhaven.png", alt: "Brewhaven" },
  { src: "/assets/logo-frame/byama.png", alt: "Byama" },
  { src: "/assets/logo-frame/diana-miya.png", alt: "Diana Miya" },
  { src: "/assets/logo-frame/groxi.png", alt: "Groxi" },
  { src: "/assets/logo-frame/ignite.png", alt: "Ignite" },
  { src: "/assets/logo-frame/mapletrite.png", alt: "Mapletrite" },
  { src: "/assets/logo-frame/metaledger.png", alt: "Metaledger" },
  { src: "/assets/logo-frame/northbridge.png", alt: "Northbridge" },
  { src: "/assets/logo-frame/sheep-pasture.png", alt: "Sheep Pasture" },
  { src: "/assets/logo-frame/sisi-bole.png", alt: "Sisi Bole" },
  { src: "/assets/logo-frame/spiretech.png", alt: "Spiretech" },
  { src: "/assets/logo-frame/victoria.png", alt: "Victoria" },
  { src: "/assets/logo-frame/zeus.png", alt: "Zeus" },
  { src: "/assets/logo-frame/zobo.png", alt: "Zobo" },
];

export default function BrandSlide() {
  return (
    <>
      {/* Logo Slider */}
      <div
        className="w-full overflow-hidden py-4"
        style={{ backgroundColor: "#001626" }}
      >
        <style jsx>{`
          @keyframes slideLeft {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-slide {
            animation: slideLeft 30s linear infinite;
          }
          .animate-slide:hover {
            animation-play-state: paused;
          }
        `}</style>
        <div className="flex animate-slide w-max">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="shrink-0 mx-8 flex items-center justify-center"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={60}
                className="object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
