import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllJobs, getAllInternships } from '@/lib/server/api';
import {
  generateBreadcrumbSchema,
  combineSchemas,
  websiteReferenceSchema,
  generateWebPageSchema,
} from '@/lib/schema';

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ type: string }>;
};

const SITE_URL = 'https://chartersunion.com';

async function getListingSchema(type: string) {
  const isJobs = type === 'jobs';

  let items: {
    _id: string;
    title: string;
    location: string;
    description?: string;
  }[] = [];

  try {
    const res = isJobs
      ? await getAllJobs({ limit: 100 })
      : await getAllInternships({ limit: 100 });
    const data = res?.data;
    items = isJobs
      ? (data?.jobs || data?.jobPostings || [])
      : (data?.internships || data?.internshipPostings || []);
  } catch {
    items = [];
  }

  const cleanText = (value?: string) =>
    value
      ?.replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
      .substring(0, 150) + '...';

  const collectionWebPageSchema = generateWebPageSchema({
      path: `/careers/${type}`,
      type: 'CollectionPage',
      name: isJobs
        ? "Job Openings at Charters' Union"
        : "Internship Opportunities at Charters' Union",
      description: isJobs
        ? "Browse all available job positions at Charters' Union"
        : "Explore internship opportunities at Charters' Union",
    });
  const collectionSchema = {
    ...collectionWebPageSchema,
    mainEntity: { '@id': `${SITE_URL}/careers/${type}#listing` },
  };
  delete (collectionSchema as Record<string, unknown>)["@context"];

  const itemListSchema = {
    '@type': 'ItemList',
    '@id': `${SITE_URL}/careers/${type}#listing`,
    name: isJobs
      ? 'Job Openings at Charters’ Union'
      : 'Internship Opportunities at Charters’ Union',
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'JobPosting',
        '@id': `${SITE_URL}/careers/${type}/${item._id}#job`,
        title: item.title,
        description: cleanText(item.description),
        hiringOrganization: {
          '@type': 'EducationalOrganization',
          '@id': `${SITE_URL}/#organization`,
          name: "Charters' Union",
        },
        jobLocation: {
          '@type': 'Place',
          address: {
            '@type': 'PostalAddress',
            addressLocality: item.location,
            addressCountry: 'IN',
          },
        },
        employmentType: isJobs ? 'FULL_TIME' : 'INTERNSHIP',
      },
    })),
  };

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: SITE_URL },
    { name: 'Careers', url: `${SITE_URL}/careers` },
    {
      name: isJobs ? 'Jobs' : 'Internships',
      url: `${SITE_URL}/careers/${type}`,
    },
  ]);

  return combineSchemas(
    websiteReferenceSchema,
    breadcrumbSchema,
    collectionSchema,
    itemListSchema,
  );
}

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  const { type } = await params;

  if (type !== 'jobs' && type !== 'internships') {
    return {};
  }

  const isJobs = type === 'jobs';

  const metadataConfig = {
    jobs: {
      title: "Jobs at Charters' Union | Full-Time Career Opportunities",
      description: "Explore exciting full-time job openings at Charters' Union and build your career in a dynamic educational environment.",
      canonical: 'https://chartersunion.com/careers/jobs',
    },
    internships: {
      title: "Internships at Charters' Union | Start Your Career Journey",
      description: "Launch your career with paid internships at Charters' Union and gain real-world industry experience.",
      canonical: 'https://chartersunion.com/careers/internships',
    },
  };

  const content = isJobs ? metadataConfig.jobs : metadataConfig.internships;

  const ogImage =
    "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784325608/Young_Charters_are_at_top_company_gncn4o_q7ifkq.avif";

  return {
    title: content.title,
    description: content.description,
    keywords: isJobs
      ? [
          "jobs at Charters Union",
          "full-time careers Kolkata",
          "education job openings",
          "career opportunities Charters Union",
          "apply for jobs Charters Union",
        ]
      : [
          "paid internships",
          "internship Kolkata",
          "Charters Union internships",
          "student internship opportunities",
          "apply for internship Charters Union",
        ],
    alternates: {
      canonical: content.canonical,
    },
    openGraph: {
      title: content.title,
      description: content.description,
      url: content.canonical,
      siteName: "Charters' Union",
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${isJobs ? 'Jobs' : 'Internships'} at Charters' Union`,
        },
      ],
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: content.title,
      description: content.description,
      images: [ogImage],
    },
  };
}

export default async function CareersTypeLayout({ children, params }: LayoutProps) {
  const { type } = await params;

  if (type !== 'jobs' && type !== 'internships') {
    notFound();
  }

  const listingSchema = await getListingSchema(type);

  return (
    <>
      <script
        id={`careers-${type}-listing-schema`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(listingSchema) }}
      />
      {children}
    </>
  );
}
