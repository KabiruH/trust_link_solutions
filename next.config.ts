import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // 🚫 ESLint won’t block production builds
  },
};

export default nextConfig;
