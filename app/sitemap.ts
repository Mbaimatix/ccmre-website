import type { MetadataRoute } from "next";
import { NEWS_ITEMS } from "@/lib/constants";

const BASE_URL = "https://ccmre.spu.ac.ke";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "/",
    "/about/our-story",
    "/about/vision-mission",
    "/about/team",
    "/about/partners",
    "/programmes",
    "/programmes/ma-icmr",
    "/programmes/community-dialogue",
    "/programmes/ccisa",
    "/programmes/procmura",
    "/impact",
    "/events",
    "/news",
    "/contact",
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "/" ? 1 : 0.8,
  }));

  const newsRoutes = NEWS_ITEMS.map((item) => ({
    url: `${BASE_URL}/news/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...newsRoutes];
}
