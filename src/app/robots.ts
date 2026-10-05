import type { MetadataRoute } from "next";

// NOTE: update the URLs when a custom domain is connected
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://emnex-3zko.vercel.app/sitemap.xml",
  };
}
