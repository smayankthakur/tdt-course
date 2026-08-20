import type { MetadataRoute } from "next";
import { courses } from "@/lib/courses";

const siteUrl = "https://mystic-arts.example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, lastModified: new Date(), priority: 1 },
    ...courses.map((c) => ({
      url: `${siteUrl}/courses/${c.slug}`,
      lastModified: new Date(),
      priority: 0.8,
    })),
  ];
}
