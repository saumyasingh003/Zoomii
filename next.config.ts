import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["https://zoomii.vercel.app"], 
  },
  remotePatterns: [

    {
      protocol: "https",
      // hostname: "multikartall-eta.vercel.app",
      hostname: "zoomii.vercel.app",
    },
    {
      protocol: "http",
      hostname: "127.0.0.1",
    },
    {
      protocol: "http",
      hostname: "localhost",
    },
  ],
  unoptimized: true,
};

export default nextConfig;
