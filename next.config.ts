import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      'i.travelapi.com', // Add the hostname here
      'cdn.tourismcloudservice.com',
    ],
  },
};

export default nextConfig;
