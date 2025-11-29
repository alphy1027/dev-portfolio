import type { MetadataRoute } from "next";
import { siteInfo } from "@/content/siteInfo";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteInfo.siteURL,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
  ];
}
