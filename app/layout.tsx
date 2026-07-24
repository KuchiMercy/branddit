import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Branddit Creative Studio",
  description:
    "Branddit Creative Studio is a forward thinking branding and creative agency dedicated to helping businesses stand out and grow with confidence. We work with ambitious brands that want more than just design. They want clarity, consistency, and a strong presence in their industry.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,700,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
