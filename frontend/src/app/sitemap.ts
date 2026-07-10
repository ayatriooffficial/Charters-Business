import { MetadataRoute } from "next";

import { buildSiteUrl } from "@/lib/schema";
import { getAllProgrammeSlugs } from "@/lib/server/programmes";
import { STATIC_BLOGS, slugify } from "@/data/staticBlogs";

const STATIC_ROUTES = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/about", changeFrequency: "monthly", priority: 0.8 },
  { path: "/careers", changeFrequency: "daily", priority: 0.8 },
  { path: "/careers/jobs", changeFrequency: "daily", priority: 0.7 },
  { path: "/careers/internships", changeFrequency: "daily", priority: 0.7 },
  { path: "/blogs", changeFrequency: "weekly", priority: 0.7 },
  { path: "/career-path", changeFrequency: "weekly", priority: 0.8 },
  { path: "/community", changeFrequency: "weekly", priority: 0.7 },
  { path: "/faculties", changeFrequency: "monthly", priority: 0.7 },
  { path: "/student-life", changeFrequency: "weekly", priority: 0.7 },
  { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.2 },
  { path: "/terms-and-conditions", changeFrequency: "yearly", priority: 0.2 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: buildSiteUrl(route.path),
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const programmeEntries: MetadataRoute.Sitemap = getAllProgrammeSlugs().map(
    (slug) => ({
      url: buildSiteUrl(`/${slug.replace(/&/g, "%26")}`),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    }),
  );

  const blogEntries: MetadataRoute.Sitemap = STATIC_BLOGS.map((blog) => ({
    url: buildSiteUrl(`/blogs/${slugify(blog.title)}`),
    lastModified,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...programmeEntries, ...blogEntries];
}
