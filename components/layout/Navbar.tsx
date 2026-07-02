import Link from "next/link";
import Button from "../ui/Button";

export default function Navbar() {
  const links = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Case Studies", href: "/case-studies" },
  ];
  return (
    <main>
      {/* Logo */}
      <img src="../assets/branddit-logo.png" alt="Branddit Logo" />
      {/* Navigation */}
      <div className="flex items-center justify-center gap-2">
        {links.map((link, index) => (
          <Link key={index} href={link.href}>
            {link.name}
          </Link>
        ))}
      </div>
      {/* Contact */}
      <Button text="Contact Us" bgColor="bg-black" textColor="text-white" />
    </main>
  );
}
