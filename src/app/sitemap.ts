import type { MetadataRoute } from "next";

// NOTE: update this URL when a custom domain is connected
const BASE_URL = "https://emnex-3zko.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
