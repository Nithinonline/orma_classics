import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Smaller deploy footprint on Railway — only ships runtime deps
  output: "standalone",
  images: {
    // Editorial photos are static assets in /public. Skipping runtime Sharp
    // optimization avoids large in-memory decode/cache spikes on small hosts.
    unoptimized: true,
  },
};

export default nextConfig;
