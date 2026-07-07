"use client";

import { useState, useEffect } from "react";
import { icons } from "@/public/icons/icons";
import { Quote, Star, ArrowRight, ArrowLeft } from "lucide-react";

const testimonials = [
  {
    name: "Emmanuel Ariwodo",
    role: "Founder, Mapletrit INC",
    review:
      "Working with Branddit was one of the best decisions we made for our business. They transformed our brand into something professional, memorable, and trusted. We've seen increased customer confidence and stronger market visibility since the rebrand.",
  },
  {
    name: "Esther Thompson",
    role: "Founder, Body Of Finance",
    review:
      "The team at Branddit exceeded our expectations. They didn't just design a logo; they built a complete brand experience that resonates with our audience. Their creativity and professionalism were outstanding.",
  },
  {
    name: "Faith Omoke",
    role: "Founder, Faithful Catering Services",
    review:
      "From the first consultation to the final delivery, Branddit demonstrated excellence. They understood our vision and translated it into a brand identity that has strengthened our credibility and customer engagement.",
  },
  {
    name: "Joshua Talena",
    role: "Founder, Shepherd's House",
    review:
      "Branddit helped us bring clarity and consistency to our brand. Their strategic approach and attention to detail made the entire process seamless. The new identity truly reflects who we are and where we're headed.",
  },
  {
    name: "Peter Precious",
    role: "Founder, Lovepops Global LTD",
    review:
      "Branddit gave our company a fresh and modern identity that immediately elevated our image. The process was collaborative, efficient, and results-driven. I highly recommend them to any growing business.",
  },
  {
    name: "Michael Ojebunmi",
    role: "Founder, House Of Vessels",
    review:
      "Our rebranding journey with Branddit was remarkable. They helped us position our brand more effectively and communicate our value with confidence. The impact has been evident across all our marketing channels.",
  },
  {
    name: "Joshua Damilola",
    role: "Founder, Feastro",
    review:
      "Branddit's expertise and creativity helped us stand out in a competitive market. Their team took the time to understand our goals and delivered a brand identity that perfectly represents our business.",
  },
  {
    name: "Victor Orinya Ikwebe",
    role: "Founder, House of Chessy",
    review:
      "The transformation Branddit delivered was beyond aesthetics, it changed how customers perceive our business. Their strategic branding approach has given us a stronger presence and greater confidence in the market.",
  },
];

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  useEffect(() => {
    const updateCardsPerView = () => {
      setCardsPerView(window.innerWidth < 768 ? 1 : 3);
    };
    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - cardsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const translatePercent = (currentIndex * 100) / cardsPerView;

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [maxIndex]);

  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            What Our Clients Say
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            Hear from businesses and organizations that have partnered with us
            to build stronger brands and digital experiences.
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="relative mt-20">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${translatePercent}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.name}
                  className="w-full md:w-1/3 shrink-0 px-3"
                >
                  <div className="bg-[#F7F9FC] rounded-3xl p-8 flex flex-col justify-between h-full">
                    {/* Quote Icon */}
                    <Quote
                      className="text-indigo-200"
                      size={60}
                      strokeWidth={1.5}
                    />

                    {/* Review */}
                    <p className="text-slate-600 text-sm italic leading-7 mt-4 flex-1">
                      &ldquo;{testimonial.review}&rdquo;
                    </p>

                    {/* User */}
                    <div className="flex items-center gap-4 mt-8">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                        {icons.user}
                      </div>

                      <div>
                        <h4 className="font-semibold text-lg text-slate-900">
                          {testimonial.name}
                        </h4>

                        <p className="text-sm text-gray-500">
                          {testimonial.role}
                        </p>

                        <div className="flex gap-1 mt-2">
                          {[...Array(5)].map((_, index) => (
                            <Star
                              key={index}
                              size={14}
                              fill="#F59E0B"
                              className="text-amber-500"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition shadow-lg"
          >
            <ArrowLeft size={20} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition shadow-lg"
          >
            <ArrowRight size={20} />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(Math.min(index, maxIndex))}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-primary w-8"
                  : "bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
