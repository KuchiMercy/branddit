import { Phone, MessageCircle } from "lucide-react";
import Link from "next/link";

interface ContactCardProps {
  showWhatsApp?: boolean;
  showButtonIcon?: boolean;
  heading?: string;
  description?: string;
  buttonText?: string;
  whatsappText?: string;
}

export default function ContactCard({
  showWhatsApp = true,
  showButtonIcon = true,
  heading = "Ready to build a brand that scales?",
  description = "First consultation is free. No commitment, no pressure, just a conversation about what's possible for your brand.",
  buttonText = "Book a free call",
  whatsappText = "Chat on Whatsapp",
}: ContactCardProps) {
  return (
    <section className="px-6 py-20">
      <div
        className="mx-auto max-w-7xl overflow-hidden rounded-4xl bg-white px-8 py-20 shadow-lg"
        style={{
          backgroundImage: `radial-gradient(circle at top left, #dbeafe, transparent 45%), radial-gradient(circle at bottom right, #fed7aa, transparent 45%)`,
        }}
      >
        <div className="mx-auto max-w-3xl text-center">
          {/* Heading */}
          <h2 className="text-4xl font-bold leading-tight text-slate-900 md:text-6xl">
            {heading}
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-700">
            {description}
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <Link
              href="tel:+2349020103175"
              className="flex w-full items-center justify-center gap-3 rounded-full bg-[#071C2A] px-10 py-4 font-semibold text-white transition hover:bg-[#0d2b3f] sm:w-auto sm:min-w-[260px]"
            >
              {showButtonIcon && <Phone size={18} />}
              {buttonText}
            </Link>

            {showWhatsApp && (
              <Link
                href="https://wa.me/2349020103175"
                target="_blank"
                className="flex w-full items-center justify-center gap-3 rounded-full bg-[#25D366] px-10 py-4 font-semibold text-white transition hover:bg-[#20bf5b] sm:w-auto sm:min-w-[260px]"
              >
                <MessageCircle size={18} />
                {whatsappText}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
