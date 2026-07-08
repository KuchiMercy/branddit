"use client";

import Image from "next/image";
import { useState } from "react";
import { Check, Download, BadgeCheck, Loader2 } from "lucide-react";

const guideFeatures = [
  "Brand evaluation checklist",
  "Common branding mistakes",
  "Positioning strategies",
  "Growth opportunities",
];

export default function BrandGuide() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const validateForm = () => {
    const newErrors: { name?: string; email?: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const downloadPdf = () => {
    // Download the PDF file
    const link = document.createElement("a");
    link.href = "/THE BRAND AUDIT GUIDE.pdf";
    link.download = "Branddit-Brand-Audit-Guide.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Download PDF
    downloadPdf();

    setIsSubmitting(false);
    setDownloadSuccess(true);
    setFormData({ name: "", email: "" });

    // Reset success message after 3 seconds
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <section className="bg-[#F7F9FC] py-24 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        {/* Left Content */}
        <div>
          {/* Heading */}
          <h2 className="text-5xl lg:text-6xl font-bold leading-tight text-[#071C2A]">
            Get Your Free <span className="text-primary">Brand Audit</span>{" "}
            Guide
          </h2>

          {/* Description */}
          <p className="mt-8 text-lg leading-relaxed text-slate-700 max-w-xl">
            Download our free Brand Audit Guide to discover how to evaluate your
            brand, improve your positioning, and build a stronger brand that
            attracts the right customers.
          </p>

          {/* Checklist */}
          <div className="grid sm:grid-cols-2 gap-y-8 gap-x-10 mt-12">
            {guideFeatures.map((feature) => (
              <div key={feature} className="flex items-center gap-4">
                <div className="w-7 h-7 rounded-full bg-[#1446B4] flex items-center justify-center">
                  <Check className="text-white" size={16} />
                </div>

                <span className="text-lg text-slate-900">{feature}</span>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="mt-14 bg-[#1446B4] rounded-[28px] p-10 max-w-xl">
            <form onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-white text-sm block mb-3">Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className={`w-full rounded-2xl bg-white px-5 py-4 outline-none text-slate-900 placeholder:text-gray-400 ${
                      errors.name ? "ring-2 ring-red-400" : ""
                    }`}
                  />
                  {errors.name && (
                    <p className="text-red-300 text-xs mt-2">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="text-white text-sm block mb-3">Email</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className={`w-full rounded-2xl bg-white px-5 py-4 outline-none text-slate-900 placeholder:text-gray-400 ${
                      errors.email ? "ring-2 ring-red-400" : ""
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-300 text-xs mt-2">{errors.email}</p>
                  )}
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-8 w-full bg-[#071C2A] hover:bg-[#0d2b3f] transition rounded-full py-5 text-white font-semibold text-lg flex justify-center items-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Preparing Download...
                  </>
                ) : downloadSuccess ? (
                  <>
                    <Check size={20} />
                    Downloaded!
                  </>
                ) : (
                  <>
                    Download Free Guide
                    <Download size={20} />
                  </>
                )}
              </button>
            </form>

            <p className="text-center text-white/80 text-sm mt-5">
              Join 5,000+ brands optimizing their strategy. No spam, ever.
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <div className="relative bg-white rounded-[36px] shadow-xl overflow-hidden p-10">
            <Image
              src="/assets/images/brand-audit.png"
              alt="Brand Audit Guide"
              width={650}
              height={700}
              className="w-full h-auto object-contain"
              priority
            />
          </div>

          {/* Floating Badge */}
          <div className="absolute bottom-0 right-0 translate-x-4 translate-y-4 bg-white rounded-full shadow-xl px-6 py-4 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#EEF3FF] flex items-center justify-center">
              <BadgeCheck className="text-[#1446B4]" size={22} />
            </div>

            <div>
              <p className="text-sm text-gray-500">Updated for</p>

              <p className="font-semibold text-lg text-[#071C2A]">2026 Trend</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
