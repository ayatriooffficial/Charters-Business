import ComprehensivePage from "@/components/faculties/ComprehensivePage";
import Script from "next/script";

import { generateStandardPageSchemas } from "@/lib/schema";
import { Metadata } from "next";
import { facultyMembers } from "@/data/faculty";

export const metadata: Metadata = {
  title: "Our Faculty | Charters' Union",
  description:
    "Meet our world-class faculty of industry leaders, CEOs, and experts who bring real-world experience to the classroom at Charters' Union.",
  alternates: {
    canonical: "https://chartersunion.com/faculties",
  },
  openGraph: {
    title: "Our Faculty | Charters' Union",
    description:
      "Meet our world-class faculty of industry leaders, CEOs, and experts who bring real-world experience to the classroom at Charters' Union.",
    url: "https://chartersunion.com/faculties",
    siteName: "Charters' Union",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/ducgcl4dg/image/upload/f_jpg,w_1200,h_630,c_fill/v1768578300/background_bvoits.webp",
        width: 1200,
        height: 630,
        alt: "Our Faculty | Charters' Union",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Faculty | Charters' Union",
    description:
      "Meet our world-class faculty of industry leaders, CEOs, and experts who bring real-world experience to the classroom at Charters' Union.",
    images: ["https://res.cloudinary.com/ducgcl4dg/image/upload/f_jpg,w_1200,h_630,c_fill/v1768578300/background_bvoits.webp"],
  },
};

export default function FacultiesPage() {
  // Use real faculty data — mapped to schema shape
  const normalizedFacultyPeople = facultyMembers
    .map((f) => ({
      name: f.name?.trim(),
      jobTitle: f.title?.trim(),
      worksFor: f.company?.trim(),
      image: f.imageSrc,
    }))
    .filter((f) => f.name.length > 0);

  const facultiesSchemaGraph = generateStandardPageSchemas({
    path: "/faculties",
    name: "Our Faculty | Charters' Union",
    description:
      "Meet our world-class faculty of industry leaders, CEOs, and experts who bring real-world experience to business education.",
    type: "CollectionPage",
    breadcrumbItems: [
      { name: "Home", url: "https://chartersunion.com" },
      { name: "Faculties", url: "https://chartersunion.com/faculties" },
    ],
    additionalSchemas: [
      {
        "@type": "ItemList",
        "@id": "https://chartersunion.com/faculties#faculty-list",
        name: "Faculty Members",
        itemListOrder: "https://schema.org/ItemListUnordered",
        numberOfItems: normalizedFacultyPeople.length,
        itemListElement: normalizedFacultyPeople.map((person, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "Person",
            name: person.name,
            jobTitle: person.jobTitle,
            image: person.image,
            worksFor: [
              {
                "@type": "Organization",
                name: person.worksFor,
              },
              {
                "@id": "https://chartersunion.com/#organization",
              },
            ],
          },
        })),
      },
    ],
  });

  return (
    <>
      <script
        id="faculties-schema-graph"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(facultiesSchemaGraph) }}
      />

      <ComprehensivePage />
    </>
  );
}
