import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};
module.exports = {
  output: 'standalone',
  images: {
    unoptimized: true
  }
}

export default nextConfig;
