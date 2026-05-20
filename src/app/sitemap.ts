import type { MetadataRoute } from "next";
import { cities } from "@/lib/cities";
import { regions } from "@/lib/regions";
import { siteConfig } from "@/lib/siteConfig";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  const cityPages = cities.map((city) => ({
    url: `${base}/car-recovery/${city.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const regionPages = regions.map((region) => ({
    url: `${base}/car-recovery/${region.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/24-hour-car-recovery`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/cheap-car-recovery-near-me`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/motorway-recovery`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/breakdown-recovery`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/accident-recovery`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/van-recovery`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/ev-car-recovery`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/car-recovery`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    ...regionPages,
    ...cityPages,
  ];
}
