import Image from "next/image";
import Link from "next/link";
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
    href: "#",
  },
  {
    icon: icons.linkedIn,
    href: "#",
  },
  {
    icon: icons.x,
    href: "#",
  },
  {
    icon: icons.facebook,
    href: "#",
  },
  {
    icon: icons.tiktok,
    href: "#",
  },
];

const legalLinks = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms of Service", href: "/terms" },
  { name: "Cookie Policy", href: "/cookie-policy" },
];

export default function Footer() {
  return (
    <footer className="bg-[#071C2A] text-white mt-24">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {/* Logo */}
          <div>
            <Image
              src="/assets/branddit-logo-white.png"
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
                  href="#"
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

              <p>+234 902 010 3175, +234 704 671 7678</p>
            </div>

            <div className="mt-10">
              <p className="text-sm text-gray-500 mb-3">Newsletter</p>

              <div className="flex overflow-hidden rounded-lg bg-[#10293A]">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 bg-transparent px-4 py-3 text-sm outline-none placeholder:text-gray-500"
                />

                <button className="bg-[#5879C9] px-5 hover:bg-[#6b88cf] transition">
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
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-400 text-sm">
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
