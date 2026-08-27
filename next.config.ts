import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // A static export has no server-side /_next/image endpoint. Serve portfolio
  // assets directly from public so they work on every static host.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
