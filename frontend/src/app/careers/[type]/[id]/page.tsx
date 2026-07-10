import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CareerDetailPageClient from './CareerDetailClient';
import { getJobById, getInternshipById } from '@/lib/server/api';
import { generateBreadcrumbSchema, generateJobPostingSchema, combineSchemas } from '@/lib/schema';

interface Props {
  params: Promise<{ type: string; id: string }>;
}

async function getItemData(type: string, id: string) {
  const isJobs = type === 'jobs';
  try {
    const response = isJobs ? await getJobById(id) : await getInternshipById(id);
    if (response && response.success && response.data) {
      return response.data;
    }
  } catch (error) {
    console.error('Error fetching career item data:', error);
  }
  return null;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { type, id } = await params;

  if (type !== 'jobs' && type !== 'internships') {
    return {};
  }

  const item = await getItemData(type, id);
  const isJobs = type === 'jobs';

  const cleanDescription = item?.description
    ? item.description.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim().substring(0, 150) + "..."
    : `Apply for the ${item?.title || 'position'} position at Charters' Union.`;

  const title = item 
    ? `${item.title} | ${isJobs ? 'Jobs' : 'Internships'} at Charters' Union`
    : `Career Opportunity | ${isJobs ? 'Jobs' : 'Internships'} at Charters' Union`;

  const description = `Apply for the ${item?.title || 'role'} ${isJobs ? 'job' : 'internship'} at Charters' Union. ${cleanDescription}`;
  const canonicalUrl = `https://chartersunion.com/careers/${type}/${id}`;
  const imageUrl = `https://chartersunion.com/og-${type}.jpg`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "Charters' Union",
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export default async function CareerDetailPage({ params }: Props) {
  const { type, id } = await params;

  if (type !== 'jobs' && type !== 'internships') {
    notFound();
  }

  const item = await getItemData(type, id);

  if (!item) {
    notFound();
  }

  // Generate breadcrumb schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://chartersunion.com' },
    { name: 'Careers', url: 'https://chartersunion.com/careers' },
    { name: type === 'jobs' ? 'Jobs' : 'Internships', url: `https://chartersunion.com/careers/${type}` },
    { name: item.title, url: `https://chartersunion.com/careers/${type}/${id}` },
  ]);

  // Generate JobPosting schema
  const jobSchema = generateJobPostingSchema({
    title: item.title,
    description: item.description,
    location: item.location,
    employmentType: type === 'jobs' ? 'FULL_TIME' : 'INTERNSHIP',
    datePosted: item.createdAt,
    skills: Array.isArray(item.skills) ? item.skills.join(', ') : (item.skills || undefined),
    educationRequirements: item.requirements || undefined,
  });

  const consolidatedSchema = combineSchemas(breadcrumbSchema, jobSchema);

  return (
    <>
      {/* Consolidated Page Schema */}
      <script
        id={`career-detail-page-schema-${id}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(consolidatedSchema) }}
      />

      <CareerDetailPageClient type={type} id={id} initialItem={item} />
    </>
  );
}
