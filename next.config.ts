import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};
module.exports = {
  output: 'standalone', // or 'export' for static sites
  images: {
    unoptimized: true // Required for Netlify
  }
}

export default nextConfig;
