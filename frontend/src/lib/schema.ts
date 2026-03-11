import { Programme } from "@/lib/server/programmes";

// Base Organization Schema
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "@id": "https://chartersbusiness.com/#organization",
  name: "Charters Business",
  alternateName: ["Tetr Program", "Charters Union"],
  url: "https://chartersbusiness.com",
  logo: {
    "@type": "ImageObject",
    url: "https://chartersbusiness.com/logo.png",
    width: 250,
    height: 60,
  },
  description:
    "Join Tetr where the world is your classroom. Apply for undergraduate and postgraduate business programs with scholarships up to 100%. Learn from CEOs, build real businesses, and study at top global institutions.",
  foundingDate: "2020",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
    addressLocality: "India",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-XXX-XXX-XXXX",
    contactType: "Admissions",
    email: "info@chartersbusiness.com",
    availableLanguage: ["English", "Hindi"],
  },
  sameAs: [
    "https://twitter.com/chartersbusiness",
    "https://linkedin.com/company/chartersbusiness",
    "https://instagram.com/chartersbusiness",
    "https://facebook.com/chartersbusiness",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "495",
    bestRating: "5",
    worstRating: "1",
  },
};

// Website Schema with Search Action
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://chartersbusiness.com/#website",
  name: "Charters Business",
  url: "https://chartersbusiness.com",
  publisher: {
    "@id": "https://chartersbusiness.com/#organization",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://chartersbusiness.com/search?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

// Home Page Schema
export const homePageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://chartersbusiness.com/#homepage",
  name: "Professional Accountant Training in Kolkata with 100% Paid Internship | Charter's Union",
  url: "https://chartersbusiness.com/",
  description:
    "Learn professional accounting in Kolkata with a 3-month foundation and 4-month paid internship. Train for global roles with top companies.",
  inLanguage: "en-IN",
  isPartOf: {
    "@id": "https://chartersbusiness.com/#website",
  },
  about: {
    "@id": "https://chartersbusiness.com/#organization",
  },
};

// Home Programmes ItemList Schema
export const generateHomeProgrammesItemListSchema = (
  programmes: Programme[],
) => {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Professional Accounting Programmes",
    itemListOrder: "https://schema.org/ItemListUnordered",
    numberOfItems: programmes.length,
    itemListElement: programmes.map((programme, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Course",
        name: programme.card.title,
        description: programme.card.description,
        url: `https://chartersbusiness.com/${programme.slug}`,
        provider: {
          "@id": "https://chartersbusiness.com/#organization",
        },
        educationalLevel: programme.card.level,
        courseMode: programme.card.format.type,
        timeRequired: programme.card.duration.type,
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
    itemListElement: navigationItems.map((item) => ({
      "@type": "SiteNavigationElement",
      name: item.name,
      url: item.url,
      ...(item.description && { description: item.description }),
    })),
  };
};

// Breadcrumb Schema Generator
export const generateBreadcrumbSchema = (
  items: { name: string; url: string }[],
) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items
      .map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item?.name?.trim() || `Step ${index + 1}`,
        item: item?.url?.trim() || "https://chartersbusiness.com",
      }))
      .filter((item) => item.name.length > 0),
  };
};

// Course/Programme Schema Generator
export const generateCourseSchema = (programme: Programme) => {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": `https://chartersbusiness.com/${programme.slug}#course`,
    name: programme.card.title,
    description: programme.card.description,
    url: `https://chartersbusiness.com/${programme.slug}`,
    provider: {
      "@id": "https://chartersbusiness.com/#organization",
    },
    educationalLevel: programme.card.level,
    educationalCredentialAwarded: programme.card.certificateType,
    timeRequired: programme.card.duration.type,
    courseMode: programme.card.format.type,
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: programme.card.format.type,
      duration: programme.card.duration.type,
      instructor: {
        "@type": "Person",
        name: "Industry Experts",
        description: "Top 1% industry faculty",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: programme.card.rating.score.toString(),
      reviewCount: programme.card.rating.reviews.toString(),
      bestRating: "5",
      worstRating: "1",
    },
    offers: {
      "@type": "Offer",
      category: "Educational",
      availability: "https://schema.org/InStock",
      validFrom: new Date().toISOString(),
    },
    occupationalCredentialAwarded: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: programme.card.certificateType,
    },
  };
};

// Programme WebPage Schema Generator
export const generateProgrammeWebPageSchema = (programme: Programme) => {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `https://chartersbusiness.com/${programme.slug}#webpage`,
    url: `https://chartersbusiness.com/${programme.slug}`,
    name: `${programme.card.title} - Charter's Union`,
    description: programme.card.description,
    isPartOf: {
      "@id": "https://chartersbusiness.com/#website",
    },
    about: {
      "@id": "https://chartersbusiness.com/#organization",
    },
    mainEntity: {
      "@id": `https://chartersbusiness.com/${programme.slug}#course`,
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
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
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
}) => {
  const schema: any = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: job.description,
    datePosted: job.datePosted,
    hiringOrganization: {
      "@type": "Organization",
      name: "Charters Business",
      sameAs: "https://chartersbusiness.com",
      logo: "https://chartersbusiness.com/logo.png",
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
    headline: article.title,
    description: article.description,
    image: article.image,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: {
      "@type": "Organization",
      name: article.author || "Charters Business",
      url: "https://chartersbusiness.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Charters Business",
      logo: {
        "@type": "ImageObject",
        url: "https://chartersbusiness.com/logo.png",
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
    name: event.name,
    description: event.description,
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
      "@type": "Organization",
      name: "Charters Business",
      url: "https://chartersbusiness.com",
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
    name: person.name,
    jobTitle: person.jobTitle,
    worksFor: {
      "@type": "Organization",
      name: "Charters Business",
      url: "https://chartersbusiness.com",
    },
  };

  if (person.description) {
    schema.description = person.description;
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
    description: video.description,
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
    name: location.name,
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
      dayOfWeek: hours,
    }));
  }

  return schema;
};

// Helper function to combine multiple schemas
export const combineSchemas = (...schemas: any[]) => {
  return schemas;
};
