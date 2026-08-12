import { Programme } from "@/lib/server/programmes";

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://chartersunion.com"
).replace(/\/+$/, "");

export const SITE_NAME = "Charters' Union";
export const SITE_BRAND_NAME = "Charters' Union";
export const DEFAULT_LANGUAGE = "en-IN";
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const HOME_PAGE_ID = `${SITE_URL}/#homepage`;
export const SITE_PHONE_NUMBER = "+919836465083";

const DEFAULT_LOGO_URL = `${SITE_URL}/Chaters_Union.avif`;
const DEFAULT_EMAIL = "admissions@chartersunion.com";
const DEFAULT_PHONE = SITE_PHONE_NUMBER;

export const buildSiteUrl = (path = "") => {
  if (!path || path === "/") {
    return SITE_URL;
  }

  return `${SITE_URL}/${path.replace(/^\/+/, "")}`;
};

const normalizeText = (value?: string) =>
  value?.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();

const toIsoDuration = (value?: string) => {
  if (!value) return undefined;

  const normalized = value.trim();

  if (/^P(?:\d+Y)?(?:\d+M)?(?:\d+W)?(?:\d+D)?$/i.test(normalized)) {
    return normalized.toUpperCase();
  }

  const match = normalized.match(/^(\d+)\s+(year|years|month|months|week|weeks)$/i);
  if (!match) {
    return undefined;
  }

  const amount = Number(match[1]);
  const unit = match[2].toLowerCase();

  if (unit.startsWith("year")) {
    return `P${amount}Y`;
  }

  if (unit.startsWith("month")) {
    return `P${amount}M`;
  }

  if (unit.startsWith("week")) {
    return `P${amount}W`;
  }

  return undefined;
};

const getValidAggregateRating = (rating?: { score?: number; reviews?: number }) => {
  const ratingValue = Number(rating?.score);
  const reviewCount = Number(rating?.reviews);

  if (
    !Number.isFinite(ratingValue) ||
    ratingValue <= 0 ||
    ratingValue > 5 ||
    !Number.isInteger(reviewCount) ||
    reviewCount < 1
  ) {
    return undefined;
  }

  return {
    "@type": "AggregateRating",
    ratingValue: ratingValue.toFixed(1),
    reviewCount: reviewCount.toString(),
    bestRating: "5",
    worstRating: "1",
  };
};

// Base Organization Reference Schema (Lightweight pointer — used inside @graph, no @context)
export const organizationReferenceSchema = {
  "@type": "EducationalOrganization",
  "@id": ORGANIZATION_ID,
  name: SITE_NAME,
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: DEFAULT_LOGO_URL,
  },
};

// Base Organization Schema (full — used on homepage only)
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "@id": ORGANIZATION_ID,
  name: SITE_NAME,
  alternateName: [SITE_BRAND_NAME],
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: DEFAULT_LOGO_URL,
    width: 400,
    height: 400,
  },
  image: DEFAULT_LOGO_URL,
  description:
    "Kolkata's AI-first Job Ready training institute. 3 programs: Certified Business Accountant, Digital Growth & Marketing, Technology & Business Management. AICPA/ACCA/HBS/Google aligned. 4–6 month paid internship in 7 countries. Corporate English. AI interview coaching. Placement support. Book free democlass.",
  foundingDate: "2025",
  email: DEFAULT_EMAIL,
  telephone: DEFAULT_PHONE,
  sameAs: [
    "https://www.linkedin.com/company/chartersunion",
    "https://www.instagram.com/chartersunion",
    "https://www.facebook.com/chartersunion",
  ],
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 22.5432,
    longitude: 88.3518,
  },
  knowsAbout: [
    "AI-Powered Job-Ready Training Institute Kolkata",
    "AI-Powered Industry-led Curriculum",
    "Job Ready Training Institute Kolkata",
    "Best Career Development Institute Kolkata",
    "Industry Led Training Programs India",
    "AI Powered Career Institute India",
    "CBA™ (Certified Business Accountant)",
    "DGM™(Digital Growth & Marketing)",
    "TBM™(Technology & Business Management)",
    "Explore Business Culture Across 7 Countries",
    "In-class Paid Internship Guided by faculty",
    "AI-Powered Career Persona Development",
    "CareerPathx™ Career AI-Engine",
    "Placement Focused Training Institute",
    "Skill Development Institute Kolkata",
    "Corporate Training Institute India",
    "Future Ready Career Program",
    "Employment Focused Education Institute",
    "AI-Powered Learning Ecosystem",
    "Industry-Led Curriculum",
    "Live Corporate Projects",
    "Real Internship Experience",
    "Global Internship Opportunities",
    "Career Development Framework",
    "Interview Preparation Program",
    "Resume Building Program",
    "LinkedIn Personal Branding Program",
    "Soft Skills Development",
    "Communication Training",
    "Corporate Mentorship",
    "Placement Support",
    "Job Readiness Framework",
    "Portfolio Building",
    "Industry Certification",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Shantiniketan Building, 8 Camac St, Elgin",
    addressLocality: "Kolkata",
    addressRegion: "WB",
    postalCode: "700017",
    addressCountry: "IN",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "Admissions",
      telephone: DEFAULT_PHONE,
      email: DEFAULT_EMAIL,
      areaServed: "IN",
      availableLanguage: ["en", "hi", "bn"],
    },
  ],
};

// Website Schema — no SearchAction (no /search route exists)
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  name: SITE_NAME,
  alternateName: SITE_BRAND_NAME,
  url: SITE_URL,
  inLanguage: DEFAULT_LANGUAGE,
  publisher: {
    "@id": ORGANIZATION_ID,
  },
};

// Website Reference Schema (used inside @graph, no @context)
export const websiteReferenceSchema = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: SITE_URL,
  name: SITE_NAME,
};

// Home Page Schema
export const homePageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": HOME_PAGE_ID,
  name: "Charters' Union: Job-Ready Training Institute Kolkata | AI Curriculum | 100% Paid Internship 7 Countries | BCom BSc BBA BA Freshers",
  url: SITE_URL,
  description:
    "Kolkata's AI-first Job Ready training institute. 3 programs: Certified Business Accountant, Digital Growth & Marketing, Technology & Business Management. AICPA/ACCA/HBS/Google aligned. 4–6 month paid internship in 7 countries. Corporate English. AI interview coaching. Placement support. Book free democlass.",
  inLanguage: DEFAULT_LANGUAGE,
  isPartOf: {
    "@id": WEBSITE_ID,
  },
  about: {
    "@id": ORGANIZATION_ID,
  },
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: "https://res.cloudinary.com/ducgcl4dg/image/upload/f_jpg,w_1200,h_630,c_fill/v1768578300/background_bvoits.webp",
    width: 1200,
    height: 630,
  },
};

// Home Programmes ItemList Schema
export const generateHomeProgrammesItemListSchema = (
  programmes: Programme[],
) => {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "AI-Powered Industry-led Job-Ready Programmes - Charters' Union",
    itemListOrder: "https://schema.org/ItemListUnordered",
    numberOfItems: programmes.length,
    itemListElement: programmes.map((programme, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Course",
        name: programme.card.title,
        description: normalizeText(programme.card.description),
        url: buildSiteUrl(`/${programme.slug}`),
      },
    })),
  };
};

// Home Blogs ItemList Schema
export const generateHomeBlogsItemListSchema = (
  blogs: { title: string; description: string; url: string; image?: string; datePublished?: string }[]
) => {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Latest Insights & Articles - Charters' Union",
    itemListOrder: "https://schema.org/ItemListUnordered",
    numberOfItems: blogs.length,
    itemListElement: blogs.map((blog, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "BlogPosting",
        headline: blog.title,
        description: normalizeText(blog.description),
        url: blog.url,
        ...(blog.image && { image: blog.image }),
        ...(blog.datePublished && { datePublished: blog.datePublished }),
      },
    })),
  };
};

// Site Navigation Schema
export const generateSiteNavigationSchema = (
  navigationItems: { name: string; url: string; description?: string }[],
) => {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Site Navigation",
    numberOfItems: navigationItems.length,
    itemListElement: navigationItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "SiteNavigationElement",
        name: item.name,
        url: item.url,
        ...(item.description && { description: item.description }),
      },
    })),
  };
};

// Breadcrumb Schema Generator
export const generateBreadcrumbSchema = (
  items: { name: string; url: string }[],
) => {
  const validItems = items.filter(
    (item) => item?.name?.trim().length > 0 && item?.url?.trim().length > 0,
  );

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: validItems
      .map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name.trim(),
        item: item.url.trim(),
      })),
  };
};

export const generateWebPageSchema = ({
  path,
  name,
  description,
  type = "WebPage",
}: {
  path: string;
  name: string;
  description: string;
  type?: "WebPage" | "AboutPage" | "CollectionPage" | "ContactPage";
}) => {
  const pageUrl = buildSiteUrl(path);

  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name,
    description: normalizeText(description),
    inLanguage: DEFAULT_LANGUAGE,
    isPartOf: {
      "@id": WEBSITE_ID,
    },
    about: {
      "@id": ORGANIZATION_ID,
    },
  };
};

export const generateStandardPageSchemas = ({
  path,
  name,
  description,
  breadcrumbItems,
  type,
  additionalSchemas = [],
}: {
  path: string;
  name: string;
  description: string;
  breadcrumbItems: { name: string; url: string }[];
  type?: "WebPage" | "AboutPage" | "CollectionPage" | "ContactPage";
  additionalSchemas?: unknown[];
}) => {
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems);
  const pageSchema = generateWebPageSchema({
    path,
    name,
    description,
    type,
  });

  return combineSchemas(
    websiteReferenceSchema,
    pageSchema,
    breadcrumbSchema,
    ...additionalSchemas,
  );
};

// Course/Programme Schema Generator
export const generateCourseSchema = (programme: Programme) => {
  const courseUrl = buildSiteUrl(`/${programme.slug}`);
  const courseId = `${courseUrl}#course`;
  const duration = toIsoDuration(programme.card.duration.type);
  const aggregateRating = getValidAggregateRating(programme.card.rating);
  
  const title = programme.card.title;
  let courseCode = undefined;
  if (title.includes("Accountant") || title.includes("CBA")) courseCode = "CBA";
  else if (title.includes("Growth") || title.includes("DGM")) courseCode = "DGM";
  else if (title.includes("Technology") || title.includes("TBM")) courseCode = "TBM";

  return {
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": courseId,
    name: title,
    ...(courseCode ? { courseCode } : {}),
    description: normalizeText(programme.card.description),
    financialAidEligible: "Paid Internship (4-6 Months)",
    url: courseUrl,
    provider: {
      "@id": ORGANIZATION_ID,
    },
    educationalLevel: programme.card.level,
    educationalCredentialAwarded: programme.card.certificateType,
    ...(duration ? { timeRequired: duration } : {}),
    courseMode: programme.card.format.type,
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: programme.card.format.type,
      ...(duration ? { duration } : {}),
      instructor: {
        "@type": "Person",
        name: "Industry Experts",
        description: "Top 1% industry faculty",
      },
    },
    ...(aggregateRating ? { aggregateRating } : {}),
    occupationalCredentialAwarded: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: programme.card.certificateType,
    },
  };
};

// Admission HowTo Schema Generator
export const generateAdmissionHowToSchema = (programmeName: string) => {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `How to Apply for ${programmeName}`,
    description: `Follow these simple steps to enroll in the ${programmeName} at Charters' Union.`,
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Submit Your Interest",
        text: "Fill out the enquiry form on our website. Select your preferred city and centre.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Speak to our Academic Counsellor",
        text: "Discuss your background, goals, and best-fit program.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Confirm Your Batch",
        text: "Choose from our morning / evening / weekend batches that suit your schedule.",
      },
    ],
  };
};


// Programme WebPage Schema Generator
export const generateProgrammeWebPageSchema = (programme: Programme) => {
  const pageUrl = buildSiteUrl(`/${programme.slug}`);

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: `${programme.card.title} | ${SITE_NAME}`,
    description: normalizeText(programme.card.description),
    inLanguage: DEFAULT_LANGUAGE,
    isPartOf: {
      "@id": WEBSITE_ID,
    },
    about: {
      "@id": ORGANIZATION_ID,
    },
    mainEntity: {
      "@id": `${pageUrl}#course`,
    },
  };
};

// FAQ Schema Generator
export const generateFAQSchema = (
  faqs: { question: string; answer: string }[],
) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs
      .filter((faq) => faq.question?.trim() && faq.answer?.trim())
      .map((faq) => ({
        "@type": "Question",
        name: normalizeText(faq.question),
        acceptedAnswer: {
          "@type": "Answer",
          text: normalizeText(faq.answer),
        },
      })),
  };
};

// Job Posting Schema Generator
export const generateJobPostingSchema = (job: {
  title: string;
  description: string;
  location: string;
  employmentType: string;
  datePosted: string;
  validThrough?: string;
  salary?: {
    min: number;
    max: number;
    currency: string;
  };
  skills?: string;
  educationRequirements?: string;
}) => {
  const schema: any = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: normalizeText(job.description),
    datePosted: job.datePosted,
    hiringOrganization: {
      "@id": ORGANIZATION_ID,
      "@type": "EducationalOrganization",
      name: SITE_NAME,
      sameAs: SITE_URL,
      logo: DEFAULT_LOGO_URL,
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: job.location,
        addressCountry: "IN",
      },
    },
    employmentType: job.employmentType,
  };

  if (job.skills) {
    schema.skills = job.skills;
  }

  if (job.educationRequirements) {
    schema.educationRequirements = {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: job.educationRequirements,
    };
  }

  if (job.validThrough) {
    schema.validThrough = job.validThrough;
  }

  if (job.salary) {
    schema.baseSalary = {
      "@type": "MonetaryAmount",
      currency: job.salary.currency,
      value: {
        "@type": "QuantitativeValue",
        minValue: job.salary.min,
        maxValue: job.salary.max,
        unitText: "YEAR",
      },
    };
  }

  return schema;
};

// Article/Blog Post Schema Generator
export const generateArticleSchema = (article: {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  url: string;
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${article.url}#article`,
    headline: article.title,
    description: normalizeText(article.description),
    image: article.image,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: article.author
      ? {
        "@type": "Person",
        name: article.author,
      }
      : {
        "@id": ORGANIZATION_ID,
        "@type": "Organization",
        name: SITE_NAME,
        url: SITE_URL,
      },
    publisher: {
      "@id": ORGANIZATION_ID,
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: DEFAULT_LOGO_URL,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": article.url,
    },
  };
};

// Event Schema Generator
export const generateEventSchema = (event: {
  name: string;
  description: string;
  startDate: string;
  endDate?: string;
  location: string;
  image?: string;
  url: string;
}) => {
  const schema: any = {
    "@context": "https://schema.org",
    "@type": "Event",
    "@id": `${event.url}#event`,
    name: event.name,
    description: normalizeText(event.description),
    startDate: event.startDate,
    location: {
      "@type": "Place",
      name: event.location,
      address: {
        "@type": "PostalAddress",
        addressLocality: event.location,
      },
    },
    organizer: {
      "@id": ORGANIZATION_ID,
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    url: event.url,
  };

  if (event.endDate) {
    schema.endDate = event.endDate;
  }

  if (event.image) {
    schema.image = event.image;
  }

  return schema;
};

// Person/Faculty Schema Generator
export const generatePersonSchema = (person: {
  name: string;
  jobTitle: string;
  description?: string;
  image?: string;
  url?: string;
  sameAs?: string[];
}) => {
  const schema: any = {
    "@context": "https://schema.org",
    "@type": "Person",
    ...(person.url ? { "@id": `${person.url}#person` } : {}),
    name: person.name,
    jobTitle: person.jobTitle,
    worksFor: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };

  if (person.description) {
    schema.description = normalizeText(person.description);
  }

  if (person.image) {
    schema.image = person.image;
  }

  if (person.url) {
    schema.url = person.url;
  }

  if (person.sameAs && person.sameAs.length > 0) {
    schema.sameAs = person.sameAs;
  }

  return schema;
};

// Video Schema Generator
export const generateVideoSchema = (video: {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  duration?: string;
  contentUrl?: string;
  embedUrl?: string;
}) => {
  const schema: any = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: video.name,
    description: normalizeText(video.description),
    thumbnailUrl: video.thumbnailUrl,
    uploadDate: video.uploadDate,
  };

  if (video.duration) {
    schema.duration = video.duration;
  }

  if (video.contentUrl) {
    schema.contentUrl = video.contentUrl;
  }

  if (video.embedUrl) {
    schema.embedUrl = video.embedUrl;
  }

  return schema;
};

// Local Business Schema (if you have physical locations)
export const generateLocalBusinessSchema = (location: {
  name: string;
  address: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
  phone?: string;
  geo?: {
    latitude: number;
    longitude: number;
  };
  openingHours?: string[];
}) => {
  const schema: any = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#localbusiness`,
    name: location.name,
    url: SITE_URL,
    image: DEFAULT_LOGO_URL,
    priceRange: "$$",
    parentOrganization: {
      "@id": ORGANIZATION_ID,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: location.address.street,
      addressLocality: location.address.city,
      addressRegion: location.address.state,
      postalCode: location.address.postalCode,
      addressCountry: location.address.country,
    },
  };

  if (location.phone) {
    schema.telephone = location.phone;
  }

  if (location.geo) {
    schema.geo = {
      "@type": "GeoCoordinates",
      latitude: location.geo.latitude,
      longitude: location.geo.longitude,
    };
  }

  if (location.openingHours) {
    schema.openingHoursSpecification = location.openingHours.map((hours) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      opens: hours.split("-")[0]?.trim() || "09:00",
      closes: hours.split("-")[1]?.trim() || "18:00",
    }));
  }

  return schema;
};

// BlogPosting Schema Generator (for blog detail pages)
export const generateBlogPostingSchema = (blog: {
  title: string;
  description: string;
  url: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
}) => {
  return {
    "@type": "BlogPosting",
    "@id": `${blog.url}#blogposting`,
    headline: blog.title,
    description: normalizeText(blog.description),
    image: {
      "@type": "ImageObject",
      url: blog.image,
      width: 1200,
      height: 630,
    },
    datePublished: blog.datePublished,
    dateModified: blog.dateModified || blog.datePublished,
    author: blog.author
      ? { "@type": "Person", name: blog.author }
      : { "@id": ORGANIZATION_ID },
    publisher: {
      "@id": ORGANIZATION_ID,
      "@type": "EducationalOrganization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: DEFAULT_LOGO_URL,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": blog.url,
    },
    isPartOf: { "@id": WEBSITE_ID },
  };
};

// Helper: strips @context from a schema node (for use inside @graph)
const stripContext = (schema: any): any => {
  if (schema && typeof schema === "object" && !Array.isArray(schema)) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { "@context": _ctx, ...rest } = schema as Record<string, unknown>;
    return rest;
  }
  return schema;
};

// Helper function to combine multiple schemas into a single @graph
export const combineSchemas = (...schemas: any[]) => {
  return {
    "@context": "https://schema.org",
    "@graph": schemas.flat().filter(Boolean).map(stripContext),
  };
};
