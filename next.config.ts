import type { NextConfig } from "next";

// const allowedDevOrigins = process.env.ALLOWED_DEV_ORIGINS?.split(",")
//   .map((origin) => origin.trim())
//   .filter(Boolean);

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
