import type { MetadataRoute } from "next";
import {
  featuredProjects,
  navigation,
  newsPosts,
  programs,
  siteConfig,
} from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = navigation.map(({ href }) => ({
    url: `${siteConfig.url}${href}`,
    lastModified: now,
    changeFrequency: href === "/" ? "weekly" : "monthly",
    priority: href === "/" ? 1 : 0.8,
  }));

  const projectRoutes: MetadataRoute.Sitemap = featuredProjects.map((project) => ({
    url: `${siteConfig.url}/projects/${project.slug}`,
    lastModified: now,
    changeFrequency: project.current ? "weekly" : "monthly",
    priority: project.current ? 0.9 : 0.7,
  }));

  const workRoutes: MetadataRoute.Sitemap = programs.map((program) => ({
    url: `${siteConfig.url}/our-work/${program.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const newsRoutes: MetadataRoute.Sitemap = newsPosts.map((post) => ({
    url: `${siteConfig.url}/news/${post.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...projectRoutes, ...workRoutes, ...newsRoutes];
}
