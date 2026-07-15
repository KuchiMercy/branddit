import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.google.com",
      },
      {
        protocol: "https",
        hostname: "drive.google.com",
      },
    ],
    qualities: [75, 100],
  },
};

export default nextConfig;
