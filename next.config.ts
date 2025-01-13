import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['https://zoomii.vercel.app',"htttp://locahost:3000"], 
  },
  output: "standalone",
  reactStrictMode: false,
};

export default nextConfig;
