import { generateBreadcrumbSchema, organizationReferenceSchema, combineSchemas } from "@/lib/schema";
import SectionWrapper from "@/components/shared/SectionWrapper";
import LifeAtCharters from "@/components/student-life/LifeAtCharters";
import Diversity from "@/components/student-life/Diversity";
import TrustedCompanies from "@/components/student-life/TrustedCompanies";
import HeroSection from "@/components/student-life/Herosection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Student Life | Charters' Union",
  description:
    "Discover student life at Charters' Union. Join a vibrant community, participate in events, and build your professional network.",
  alternates: {
    canonical: "https://chartersunion.com/student-life",
  },
  openGraph: {
    title: "Student Life | Charters' Union",
    description:
      "Discover student life at Charters' Union. Join a vibrant community, participate in events, and build your professional network.",
    url: "https://chartersunion.com/student-life",
    siteName: "Charters' Union",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/ducgcl4dg/image/upload/f_jpg,w_1200,h_630,c_fill/v1768578300/background_bvoits.webp",
        width: 1200,
        height: 630,
        alt: "Student Life | Charters' Union",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Student Life | Charters' Union",
    description:
      "Discover student life at Charters' Union. Join a vibrant community, participate in events, and build your professional network.",
    images: ["https://res.cloudinary.com/ducgcl4dg/image/upload/f_jpg,w_1200,h_630,c_fill/v1768578300/background_bvoits.webp"],
  },
};



export default function ApplyPage() {
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: "https://chartersunion.com" },
        { name: "Student Life", url: "https://chartersunion.com/student-life" },
    ]);

    // Define WebPage schema
    const studentLifePageSchema = {
      "@type": "WebPage",
      "@id": "https://chartersunion.com/student-life#webpage",
      url: "https://chartersunion.com/student-life",
      name: "Student Life | Charters' Union",
      description: "Discover student life at Charters' Union. Join a vibrant community, participate in events, and build your professional network.",
      inLanguage: "en-IN",
      isPartOf: {
        "@id": "https://chartersunion.com/#website",
      },
      about: {
        "@id": "https://chartersunion.com/#organization",
      },
    };

    const consolidatedSchema = combineSchemas(organizationReferenceSchema, breadcrumbSchema, studentLifePageSchema);

    return (
        <>
            {/* Consolidated Page Schema */}
            <script
                id="student-life-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(consolidatedSchema) }}
            />
            <HeroSection />
            <div className="md:border-x border-gray-200 max-w-[85rem] w-full md:w-[90%] mx-auto overflow-x-clip md:overflow-x-visible">
                <SectionWrapper
                    corners={{
                        tl: { variant: "icon", src: "/sparkle-icon.svg" },
                        tr: { variant: "icon", src: "/sparkle-icon.svg" },
                    }}
                    hideCorners={["bl", "br"]}
                >
                    <Diversity />
                </SectionWrapper>
                <SectionWrapper hideCorners={"all"}>
                    <LifeAtCharters />
                </SectionWrapper>
                <SectionWrapper hideCorners={"all"}>
                    <TrustedCompanies />
                </SectionWrapper>
            </div>
        </>
    );
}
