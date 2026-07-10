import { Metadata } from 'next';
import { notFound } from 'next/navigation';

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ type: string }>;
};

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
      canonical: 'https://chartersbusiness.com/careers/jobs',
    },
    internships: {
      title: "Internships at Charters' Union | Start Your Career Journey",
      description: "Launch your career with paid internships at Charters' Union and gain real-world industry experience.",
      canonical: 'https://chartersbusiness.com/careers/internships',
    },
  };

  const content = isJobs ? metadataConfig.jobs : metadataConfig.internships;

  return {
    title: content.title,
    description: content.description,
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
          url: `https://chartersbusiness.com/og-${type}.jpg`,
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
      images: [`https://chartersbusiness.com/og-${type}.jpg`],
    },
  };
}

export default async function CareersTypeLayout({ children, params }: LayoutProps) {
  const { type } = await params;

  if (type !== 'jobs' && type !== 'internships') {
    notFound();
  }

  return (
    <>
      {children}
    </>
  );
}
