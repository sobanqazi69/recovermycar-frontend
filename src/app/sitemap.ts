import type { MetadataRoute } from "next";
import { cities } from "@/lib/cities";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://cheapcarsrecovery.co.uk";
  const now = new Date();

  const cityPages = cities.map((city) => ({
    url: `${base}/car-recovery-${city.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: base,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${base}/24-hour-car-recovery`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/cheap-car-recovery-near-me`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...cityPages,
  ];
}
