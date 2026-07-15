import { Mail, Phone, MapPin } from "lucide-react";

import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaTiktok,
  FaXTwitter,
} from "react-icons/fa6";

const socials = [
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/brandditcreativestudioltd/?hl=en",
  },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/company/111143354",
  },
  {
    icon: FaXTwitter,
    href: "https://x.com/Branddit_withus",
  },
  {
    icon: FaFacebook,
    href: "https://web.facebook.com/brandditcreativestudioltd/",
  },
  {
    icon: FaTiktok,
    href: "https://www.tiktok.com/@branddit_creative_studio?is_from_webapp=1&sender_device=pc",
  },
];

export default function ContactInfo() {
  return (
    <div className="space-y-10">
      <div>
        <h2 className="text-2xl font-semibold mb-8">Direct Contact</h2>

        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="flex items-start gap-5">
            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
              <Mail size={20} />
            </div>

            <div>
              <h3 className="font-semibold">Email</h3>
              <p className="text-gray-500 text-sm">
                brandditcreativestudioltd@gmail.com
              </p>
            </div>
          </div>

          <div className="flex items-start gap-5">
            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
              <Phone size={20} />
            </div>

            <div>
              <h3 className="font-semibold">Phone</h3>
              <p className="text-gray-500 text-sm">
                +23490203103175, +2347046717678
              </p>
            </div>
          </div>

          <div className="flex items-start gap-5">
            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
              <MapPin size={20} />
            </div>

            <div>
              <h3 className="font-semibold">Location</h3>
              <p className="text-gray-500 text-sm">Kaduna State, Nigeria.</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-5">Social Media</h2>

        <div className="flex gap-4">
          {socials.map(({ icon: Icon, href }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-gray-100 hover:bg-primary hover:text-white transition flex items-center justify-center"
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Response Time</h2>

        <p className="text-gray-600 leading-7">
          We typically respond to all inquiries within 24 hours. For urgent
          projects, feel free to call us directly.
        </p>
      </div>

      <div className="rounded-2xl bg-gray-50 p-4 border">
        <h3 className="font-semibold text-lg mb-2">Current Availability</h3>

        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-green-500"></span>

          <span className="text-gray-600">
            We are Available for new projects
          </span>
        </div>
      </div>
    </div>
  );
}
