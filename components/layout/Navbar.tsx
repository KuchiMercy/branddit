"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronRight } from "lucide-react";
import Button from "../ui/Button";

const links = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Case Studies", href: "/case-studies" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="w-full flex justify-center pt-6 md:pt-8">
        <div className="w-[92%] max-w-7xl bg-white/70 backdrop-blur-md rounded-full px-4 md:px-8 py-2 flex items-center justify-between shadow-sm">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/assets/branddit-logo.png"
              alt="Branddit Logo"
              width={150}
              height={50}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-12">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-slate-800 hover:text-primary transition"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            <Link href="/contact">
              <Button
                className="hidden md:flex"
                text="Contact Us"
                bgColor="bg-primary"
                textColor="text-white"
              />
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 z-50 h-screen w-[85%] max-w-sm bg-white transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col h-full">
          {/* Header */}
          <div className="flex justify-between items-center">
            <Image
              src="/assets/branddit-logo.png"
              alt="Branddit Logo"
              width={160}
              height={50}
            />

            <button
              onClick={() => setOpen(false)}
              className="w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center"
            >
              <X />
            </button>
          </div>

          {/* Links */}
          <div className="mt-12 flex-1">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex justify-between items-center py-6 border-b border-gray-100 text-2xl font-medium text-slate-900"
              >
                {link.name}

                <ChevronRight className="text-slate-500" />
              </Link>
            ))}
          </div>

          {/* CTA */}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-10"
          >
            <button className="w-full rounded-full bg-primary py-4 text-white text-lg font-medium hover:bg-primary/90 transition">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
