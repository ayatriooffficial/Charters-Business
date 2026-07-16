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
            <section className="mx-[0%] border-gray-300 bg-white text-black relative">
                {/* Top Strip */}
                <div className="flex flex-row">
                    <div className="flex-1 bg-gray-200 h-13 hidden md:block">
                        <div className="flex-1 bg-white rounded-br-xl h-13 hidden md:block" />
                    </div>
                    <div className="hidden md:block md:w-[90%] max-w-[85rem] h-13 bg-gray-200 relative">
                        <div className="absolute left-0 top-0 h-full w-[1px] bg-gradient-to-b from-gray-50 to-gray-200" />
                        <div className="absolute right-0 top-0 h-full w-[1px] bg-gradient-to-b from-gray-50 to-gray-200" />
                        <div className="flex-1 bg-white rounded-bl-xl rounded-br-xl h-13 hidden md:block" />
                    </div>
                    <div className="flex-1 bg-gray-200 h-13 hidden md:block">
                        <div className="flex-1 bg-white rounded-bl-xl h-13 hidden md:block" />
                    </div>
                </div>

                {/* Content Area */}
                <div className="flex flex-row w-full">
                    {/* Left Track */}
                    <div className="flex-1 bg-gray-200 hidden md:block">
                        <div className="relative bg-white w-full h-full rounded-tr-xl">
                            <div className="absolute top-0 -right-[4px] w-[calc(100%+4px)] h-[1px] bg-gradient-to-r from-gray-50 to-gray-200 rounded-tr-xl" />
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="md:w-[90%] max-w-[85rem] w-full">
                        <div className="w-full border-t border-gray-200" />
                        <div className="md:border-x border-gray-200 w-full">
                            <div className="bg-gray-200 w-full">
                                <div className="w-full bg-white rounded-t-xl relative z-[5] overflow-hidden">
                                    
                                    <SectionWrapper hideCorners={"all"}>
                                        <Diversity />
                                    </SectionWrapper>
                                    <SectionWrapper hideCorners={"all"}>
                                        <LifeAtCharters />
                                    </SectionWrapper>
                                    <SectionWrapper hideCorners={"all"}>
                                        <TrustedCompanies />
                                    </SectionWrapper>

                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Track */}
                    <div className="flex-1 bg-gray-200 hidden md:block">
                        <div className="relative bg-white w-full h-full rounded-tl-xl">
                            <div className="absolute top-0 -left-[4px] w-[calc(100%+4px)] h-[1px] bg-gradient-to-l from-gray-50 to-gray-200 rounded-tr-xl" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
