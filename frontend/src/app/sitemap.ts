import { MetadataRoute } from "next";

import { buildSiteUrl } from "@/lib/schema";
import { getAllProgrammeSlugs } from "@/lib/server/programmes";
import { STATIC_BLOGS, slugify } from "@/data/staticBlogs";
import { API_BASE_URL } from "@/lib/server/api";

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

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
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
      changeFrequency: "weekly" as const,
      priority: 0.9,
    }),
  );

  const blogEntries: MetadataRoute.Sitemap = STATIC_BLOGS.map((blog) => ({
    url: buildSiteUrl(`/blogs/${slugify(blog.title)}`),
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  let jobEntries: MetadataRoute.Sitemap = [];
  try {
    const res = await fetch(`${API_BASE_URL}/jobs`);
    if (res.ok) {
      const { data } = await res.json();
      const jobs = data?.jobPostings || data || [];
      if (Array.isArray(jobs)) {
        jobEntries = jobs.map((job: any) => ({
          url: buildSiteUrl(`/careers/jobs/${job._id}`),
          lastModified: job.updatedAt ? new Date(job.updatedAt) : lastModified,
          changeFrequency: "daily" as const,
          priority: 0.7,
        }));
      }
    }
  } catch {}

  let internshipEntries: MetadataRoute.Sitemap = [];
  try {
    const res = await fetch(`${API_BASE_URL}/internships`);
    if (res.ok) {
      const { data } = await res.json();
      const internships = data?.internshipPostings || data || [];
      if (Array.isArray(internships)) {
        internshipEntries = internships.map((i: any) => ({
          url: buildSiteUrl(`/careers/internships/${i._id}`),
          lastModified: i.updatedAt ? new Date(i.updatedAt) : lastModified,
          changeFrequency: "daily" as const,
          priority: 0.7,
        }));
      }
    }
  } catch {}

  return [...staticEntries, ...programmeEntries, ...blogEntries, ...jobEntries, ...internshipEntries];
}
