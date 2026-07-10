import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import { PreloadResources } from "./preload-resources";
const CookieConsent = dynamic(
  () => import("@/components/shared/CookieConsent"),
  { ssr: true }
);

const GoogleTagManager = dynamic(
  () => import("@/components/shared/GoogleTagManager"),
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
    template: "%s",
  },
  description:
    "Get placed in 7 months with practical accounting skills, internship experience, and placement support. 90% placement rate. ₹3.5 LPA average salary. Free counseling call.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://chartersunion.com"
  ),
  alternates: {
    canonical: "/",
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
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta httpEquiv="Cache-Control" content="no-store" />
        <script
          dangerouslySetInnerHTML={{
            __html: [
              "(function(){",
              "history.scrollRestoration='manual';",
              "window.addEventListener('beforeunload',function(){});",
              "var s=function(){window.scrollTo(0,0);document.documentElement.scrollTop=0};",
              "if(document.readyState==='complete')s();",
              "else window.addEventListener('load',s);",
              "window.addEventListener('pageshow',function(e){if(e.persisted)window.location.reload()});",
              "})();",
            ].join(""),
          }}
        />
      </head>

      <body className={`${inter.className} font-sans antialiased`}>
        <Providers>
          <GoogleTagManager />
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