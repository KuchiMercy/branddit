"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { icons } from "@/public/icons/icons";

const services = [
  "Brand Strategy",
  "Visual Identity",
  "Website Design",
  "UI/UX Design",
  "Social Media",
  "Content Creation",
  "Video Production",
  "Rebranding",
];

const companyLinks = [
  { name: "About Us", href: "/about" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

const socialLinks = [
  {
    icon: icons.instagram,
    href: "https://www.instagram.com/brandditcreativestudioltd/?hl=en",
  },
  {
    icon: icons.linkedIn,
    href: "https://www.linkedin.com/company/111143354",
  },
  {
    icon: icons.x,
    href: "https://x.com/Branddit_withus",
  },
  {
    icon: icons.facebook,
    href: "https://web.facebook.com/brandditcreativestudioltd/",
  },
  {
    icon: icons.tiktok,
    href: "https://www.tiktok.com/@branddit_creative_studio?is_from_webapp=1&sender_device=pc",
  },
];

const legalLinks = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms of Service", href: "/terms" },
  { name: "Cookie Policy", href: "/cookie-policy" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;

    setIsSubmitting(true);
    try {
      const res = await fetch("https://formspree.io/f/xvzezobn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("Submission failed");
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    } catch {
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-[#071C2A] text-white mt-24">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {/* Logo */}
          <div>
            <Image
              src="/assets/logo-white.png"
              alt="Branddit Logo"
              width={210}
              height={60}
            />

            <p className="mt-6 text-gray-400 leading-8 max-w-xs">
              Building brands that scale. Your end-to-end creative partner for
              strategy, identity, digital, and content.
            </p>

            <div className="flex gap-3 mt-8">
              {socialLinks.map((social, index) => {
                return (
                  <Link
                    key={index}
                    href={social.href}
                    className="w-11 h-11 border border-slate-700 rounded-lg flex items-center justify-center hover:bg-primary hover:border-primary transition"
                  >
                    {social.icon}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-8">Services</h3>

            <div className="flex flex-col gap-5">
              {services.map((service) => (
                <Link
                  key={service}
                  href="/services"
                  className="text-gray-400 hover:text-white transition"
                >
                  {service}
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl font-semibold mb-8">Company</h3>

            <div className="flex flex-col gap-5">
              {companyLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-8">Contact</h3>

            <div className="space-y-5 text-gray-400">
              <p>brandditcreativestudio@gmail.com</p>

              <p>
                +2349023103175 <br /> +2347046717678
              </p>
            </div>

            <div className="mt-10">
              <p className="text-sm text-gray-500 mb-3">Newsletter</p>

              <form
                onSubmit={handleNewsletterSubmit}
                className="flex overflow-hidden rounded-lg bg-[#10293A]"
              >
                <input
                  type="email"
                  placeholder={subscribed ? "Subscribed!" : "your@email.com"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-transparent px-4 py-3 text-sm outline-none placeholder:text-gray-500"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#5879C9] px-5 hover:bg-[#6b88cf] transition disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <svg
                      className="animate-spin"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="white"
                        strokeWidth="2"
                        strokeDasharray="31.4 31.4"
                        strokeLinecap="round"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 12H19M19 12L12 5M19 12L12 19"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-400 text-center text-sm">
            © 2026 Branddit Creative Studio. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-10">
            {legalLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:text-white text-sm transition"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
