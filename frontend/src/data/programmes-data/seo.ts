import type { ProgramKey } from "./types";

// SEO metadata for each course page — title, description, keywords.
// These are hand-crafted for search engine optimisation (titles <60 chars,
// descriptions <160 chars). Centralised here so all course data lives in
// programmes-data/ and page.tsx stays free of raw data.

export interface CourseSeoData {
  title: string;
  description: string;
  keywords: string[];
}

export const courseSeoMetadata: Record<ProgramKey, CourseSeoData> = {
  "certified-business-accountant": {
    title: "Certified Business Accountant (CBA) Course | Charters' Union",
    description:
      "Master corporate accounting, USCMA, and ACCA with Harvard-style case studies and a 4-month paid internship at Charters' Union. Apply today!",
    keywords: [
      "business accounting course",
      "CBA certification",
      "corporate accounting training",
      "finance FP&A roles",
      "US-CMA CPA training",
      "ACCA training Kolkata",
      "Charters' Union CBA",
    ],
  },
  "digital-growth-&-marketing": {
    title: "Digital Growth & Marketing (DGM) Course | Charters' Union",
    description:
      "Accelerate your growth marketing career with HBS case studies, Google/Meta frameworks, and a 4-month paid internship at Charters' Union.",
    keywords: [
      "digital marketing course",
      "DGM certification",
      "growth marketing training",
      "SEO SEM course",
      "brand management training",
      "marketing analytics course",
      "Charters' Union DGM",
    ],
  },
  "technology-&-business-management": {
    title: "Technology & Business Management (TBM) | Charters' Union",
    description:
      "Join our PGP in Technology & Business Management with HBS alignment, AI integrations, and a 6-month global internship at Charters' Union.",
    keywords: [
      "technology management course",
      "TBM certification",
      "business technology training",
      "product management course",
      "IT leadership program",
      "tech MBA training",
      "Charters' Union TBM",
    ],
  },
};
