import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* other config options here */

  eslint: {
    // WARNING: This will ignore all ESLint errors during build
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
