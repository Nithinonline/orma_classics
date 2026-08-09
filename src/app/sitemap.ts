import type { MetadataRoute } from "next";
import camerasData from "@/data/cameras.json";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const cameraEntries: MetadataRoute.Sitemap = camerasData.cameras.map(
    (camera) => ({
      url: `${siteConfig.url}/cameras/${camera.id}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    }),
  );

  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/cameras`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...cameraEntries,
  ];
}
