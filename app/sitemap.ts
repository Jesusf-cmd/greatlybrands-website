import type { MetadataRoute } from "next";
import { indexablePages, canonicalUrl } from "@/lib/pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return indexablePages.map((page) => ({
    url: canonicalUrl(page.path),
    lastModified,
    changeFrequency: page.path === "/" ? "weekly" : "monthly",
    priority: page.path === "/" ? 1 : page.path === "/suppliers" ? 0.9 : 0.8,
  }));
}
