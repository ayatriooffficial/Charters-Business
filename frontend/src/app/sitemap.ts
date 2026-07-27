import { MetadataRoute } from "next";

import { buildSiteUrl } from "@/lib/schema";
import { getAllProgrammeSlugs } from "@/lib/server/programmes";
import { API_BASE_URL } from "@/lib/server/api";

const STATIC_ROUTES = [
  { path: "", changeFrequency: "weekly" as const, priority: 1 },
  { path: "/about", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/careers", changeFrequency: "daily" as const, priority: 0.8 },
  { path: "/careers/jobs", changeFrequency: "daily" as const, priority: 0.7 },
  { path: "/careers/internships", changeFrequency: "daily" as const, priority: 0.7 },
  { path: "/career-path", changeFrequency: "weekly" as const, priority: 0.8 },
  { path: "/community", changeFrequency: "weekly" as const, priority: 0.7 },
  { path: "/faculties", changeFrequency: "monthly" as const, priority: 0.7 },
  { path: "/student-life", changeFrequency: "weekly" as const, priority: 0.7 },
  { path: "/privacy-policy", changeFrequency: "yearly" as const, priority: 0.2 },
  { path: "/terms-and-conditions", changeFrequency: "yearly" as const, priority: 0.2 },
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
      changeFrequency: "weekly",
      priority: 0.9,
    }),
  );

  let jobEntries: MetadataRoute.Sitemap = [];
  try {
    const res = await fetch(`${API_BASE_URL}/careers?type=job&status=active`, {
      signal: AbortSignal.timeout(5000),
    });
    if (res.ok) {
      const jobs = await res.json();
      jobEntries = (Array.isArray(jobs) ? jobs : []).map(
        (job: { _id?: string; updatedAt?: string }) => ({
          url: buildSiteUrl(`/careers/jobs/${job._id}`),
          lastModified: job.updatedAt ? new Date(job.updatedAt) : lastModified,
          changeFrequency: "daily" as const,
          priority: 0.7,
        }),
      );
    }
  } catch {
    // Backend unreachable — skip job entries
  }

  let internshipEntries: MetadataRoute.Sitemap = [];
  try {
    const res = await fetch(
      `${API_BASE_URL}/careers?type=internship&status=active`,
      { signal: AbortSignal.timeout(5000) },
    );
    if (res.ok) {
      const internships = await res.json();
      internshipEntries = (Array.isArray(internships) ? internships : []).map(
        (internship: { _id?: string; updatedAt?: string }) => ({
          url: buildSiteUrl(`/careers/internships/${internship._id}`),
          lastModified: internship.updatedAt
            ? new Date(internship.updatedAt)
            : lastModified,
          changeFrequency: "daily" as const,
          priority: 0.7,
        }),
      );
    }
  } catch {
    // Backend unreachable — skip internship entries
  }

  return [
    ...staticEntries,
    ...programmeEntries,
    ...jobEntries,
    ...internshipEntries,
  ];
}
