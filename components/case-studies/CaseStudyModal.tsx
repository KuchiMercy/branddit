"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { X } from "lucide-react";

export interface CaseStudyDetails {
  title: string;
  image: string;
  category: string;
  date: string;
  overview: string;
}

interface Props {
  details: CaseStudyDetails | null;
  open: boolean;
  onClose: () => void;
}

export default function CaseStudyModal({ details, open, onClose }: Props) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (open) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, handleKeyDown]);

  if (!open || !details) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white w-full max-w-3xl mx-4 my-8 rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-md transition"
        >
          <X size={20} className="text-[#071C2A]" />
        </button>

        {/* Hero image */}
        <div className="relative aspect-video w-full bg-gray-50">
          <Image
            src={details.image}
            alt={details.title}
            fill
            className="object-contain"
            quality={100}
          />
        </div>

        {/* Content */}
        <div className="p-8 sm:p-10">
          {/* Title */}
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#071C2A] leading-snug">
            {details.title}
          </h2>
          {/* Meta */}
          <p className="text-sm text-primary font-medium">
            {details.category} &bull; {details.date}
          </p>

          {/* Overview */}
          <div className="mt-8">
            <h3 className="text-lg font-bold text-[#071C2A]">Overview</h3>
            <p className="mt-2 text-slate-600 leading-7">{details.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
