import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import Script from "next/script";
import { PreloadResources } from "./preload-resources";
const CookieConsent = dynamic(
  () => import("@/components/shared/CookieConsent"),
  { ssr: true }
);

const GoogleTagManager = dynamic(
  () => import("@/components/shared/GoogleTagManager"),
  { ssr: true }
);

const GoogleAnalytics = dynamic(
  () => import("@/components/shared/GoogleAnalytics"),
  { ssr: true }
);

const ClientOnlyComponents = dynamic(
  () => import("@/components/client/ClientOnlyComponents"),
  { ssr: true }
);

const PageLayout = dynamic(
  () => import("@/components/shared/PageLayout"),
  { ssr: true }
);

import Providers from "./providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "optional",
  preload: true,
  fallback: [
    "system-ui",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Arial",
    "sans-serif",
  ],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "Job-ready Accounting Course | 92% Placement Rate | 7 Months | Charter's Union",
    template: "%s | Charters' Union",
  },
  description:
    "Get placed in 7 months with practical accounting skills, internship experience, and placement support. 90% placement rate. ₹3.5 LPA average salary. Free counseling call.",
  keywords: [
    "accounting course",
    "job-ready accounting",
    "chartered accounting program",
    "finance certification",
    "accounting internship",
    "placement guarantee course",
    "accounting career",
    "professional accounting training",
    "accounting certification online",
    "finance career path",
  ],
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://chartersunion.com"
  ),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Job-ready Accounting Course | 92% Placement Rate | 7 Months | Charter's Union",
    description:
      "Get placed in 7 months with practical accounting skills, internship experience, and placement support. 90% placement rate. ₹3.5 LPA average salary.",
    url: "/",
    siteName: "Charter's Union",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1744989695/og-image_e73ple.jpg",
        width: 1200,
        height: 630,
        alt: "Charter's Union — Job-ready Accounting Course",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Job-ready Accounting Course | 92% Placement Rate | 7 Months | Charter's Union",
    description:
      "Get placed in 7 months with practical accounting skills, internship experience, and placement support. 90% placement rate. ₹3.5 LPA average salary.",
    images: [
      "https://res.cloudinary.com/ducgcl4dg/image/upload/v1744989695/og-image_e73ple.jpg",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} scroll-smooth`}
      data-scroll-behavior="smooth"
    >
      <head>
        <PreloadResources />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <meta name="theme-color" content="#B30437" />
        {process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION && (
          <meta
            name="google-site-verification"
            content={process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION}
          />
        )}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>

      <body className={`${inter.className} font-sans antialiased`}>
        <Providers>
          <GoogleTagManager />
          <GoogleAnalytics />
          <ClientOnlyComponents />

          <div className="flex flex-col min-h-screen px-2 sm:px-4 md:px-0">
            <PageLayout>{children}</PageLayout>
          </div>

          <CookieConsent />
        </Providers>
      </body>
    </html>
  );
}