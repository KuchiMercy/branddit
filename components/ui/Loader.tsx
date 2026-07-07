"use client";

import Image from "next/image";

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-white z-9999 flex items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        <div className="relative">
          <Image
            src="/assets/branddit-icon.png"
            alt="Branddit Logo"
            width={80}
            height={80}
            className="animate-pulse"
          />
        </div>
        <div className="flex gap-2">
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]" />
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]" />
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </div>
  );
}
