import type { NextConfig } from "next";

const allowedDevOrigins = process.env.ALLOWED_DEV_ORIGINS?.split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

const nextConfig: NextConfig = {
  // Smaller deploy footprint on Railway — only ships runtime deps
  output: "standalone",
  // Hide the default Next.js "N" / triangle dev indicator
  devIndicators: false,
  images: {
    // Editorial photos are static assets in /public. Skipping runtime Sharp
    // optimization avoids large in-memory decode/cache spikes on small hosts.
    unoptimized: true,
  },
  ...(allowedDevOrigins && allowedDevOrigins.length > 0
    ? { allowedDevOrigins }
    : {}),
};

export default nextConfig;
