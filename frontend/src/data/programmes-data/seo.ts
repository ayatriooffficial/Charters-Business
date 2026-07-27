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
    title: "Certified Business Accountant Course Kolkata | USCMA ACCA Aligned | 4-Month Paid Internship | BCom/Freshers",
    description:
      "7-month Certified Business Accountant program in Kolkata. Built on AICPA, ACCA, CIMA, IMA & ICAI frameworks with Harvard-style case studies. AI-integrated curriculum. 4-month paid internship in 7 countries. AI-powered corporate English. Placement support. Apply Free Demo Class today!",
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
    title: "100% Job-Ready AI-powerd Digital Marketing Course Kolkata | HBS Google Meta Aligned | Paid Internship | BA/BBA/BCA/BCOM/Freshers",
    description:
      "7-month Certified Digital Growth Marketing program in Kolkata. Built on HBS, Google, Meta Blueprint, HubSpot & GrowthHackers frameworks. AI-powered tools embedded across every module. 4-month paid internship in 7 countries. Corporate English training. Placement support for BA/BBA/BCA/BCom graduates.",
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
    title: "PGP in Technology & Business Management Kolkata | HBS IIMA Aligned | 6-Month Global Internship | AI-Integrated",
    description:
      "12-month PGP in Technology & Business Management in Kolkata. Built on HBS, IIMA & Masters Union benchmark curriculum with Harvard-style case studies. AI-integrated across all modules. 6-month paid global internship in 7 countries. Corporate leadership and communication training. For BA/BBA/BCom graduates targeting business and technology leadership careers.",
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
