import { MetadataRoute } from "next";
import { siteInfo } from "@/content/siteInfo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteInfo.siteURL}/sitemap.xml`,
  };
}
