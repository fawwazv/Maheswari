import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    // fallback remote for any remaining external URLs during transition
    remotePatterns: [
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
      { protocol: "https", hostname: "maheswarienterprise.com" },
    ],
  },
};

export default nextConfig;
