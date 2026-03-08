import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import dynamic from "next/dynamic";

import CookieConsent from "@/components/shared/CookieConsent";
import TrackingBootstrap from "@/components/shared/TrackingBootstrap";
import Providers from "./providers";
import ChatbotClient from "@/components/shared/chatBotClient";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
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

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700"],
  variable: "--font-fraunces",
  preload: false,
});

export const metadata: Metadata = {
  title: {
    default: "Charters union: Learn with companys in-class",
    template: "%s | Charters Business",
  },
  description:
    "Join Tetr where the world is your classroom. Apply for undergraduate and postgraduate business programs with scholarships up to 100%. Learn from CEOs, build real businesses, and study at top global institutions.",
  keywords: [
    "business school",
    "MBA program",
    "undergraduate business",
    "postgraduate business",
    "business education",
    "tetr program",
    "charters business",
    "scholarships",
    "business administration",
    "entrepreneurship",
    "global business education",
    "learn from CEOs",
  ],
  authors: [{ name: "Charters Business", url: "https://chartersbusiness.com" }],
  creator: "Charters Business",
  publisher: "Charters Business",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://chartersbusiness.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://chartersbusiness.com",
    title: "Charters Business - World-Class Business Education",
    description:
      "Join Tetr where the world is your classroom. Apply for business programs with scholarships up to 100%.",
    siteName: "Charters Business",
    images: [
      {
        url: "https://res.cloudinary.com/ducgcl4dg/image/upload/f_jpg,w_1200,h_630,c_fill/v1768578300/background_bvoits.webp",
        width: 1200,
        height: 630,
        alt: "Charters Business - Tetr Program",
        type: "image/webp",
      },
    ],
    determiner: "auto",
    countryName: "Global",
    emails: ["info@chartersbusiness.com"],
    phoneNumbers: ["+1-XXX-XXX-XXXX"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Charters Business - World-Class Business Education",
    description:
      "Join Tetr where the world is your classroom. Apply for business programs with scholarships up to 100%.",
    images: [
      "https://res.cloudinary.com/ducgcl4dg/image/upload/f_jpg,w_1200,h_630,c_fill/v1768578300/background_bvoits.webp",
    ],
    creator: "@chartersbusiness",
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
  verification: {
    google: "qyMtOb2Ta4fMjS7cgF_n28mNZmCnvVSqm7nDMaUEsQk",
  },
  category: "education",
  other: {
    "mobile-web-app-capable": "yes",
  },
  appleWebApp: {
    title: "Charters Business",
    statusBarStyle: "default",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`scroll-smooth ${fraunces.variable}`} data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />

        {/* Manual Preloading for LCP */}
        <link
          rel="preload"
          as="image"
          href="https://res.cloudinary.com/ducgcl4dg/image/upload/f_auto,q_auto,w_1920/charters-business/background"
          media="(min-width: 768px)"
        />
        <link
          rel="preload"
          as="image"
          href="https://res.cloudinary.com/ducgcl4dg/image/upload/f_auto,q_auto,w_750/charters-business/Background-M"
          media="(max-width: 767px)"
        />

        <meta name="theme-color" content="#B30437" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
      </head>

      <body className={`${inter.className} antialiased`}>
        
        <Script
          id="gtm-script"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KJ2D3MLL');`,
          }}
        />

        <Script
          id="gtag-base"
          strategy="lazyOnload"
          src="https://www.googletagmanager.com/gtag/js?id=G-FJRWDPGWBD"
        />
        <Script
          id="gtag-config"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-FJRWDPGWBD');
            `,
          }}
        />

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KJ2D3MLL"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <Providers>
          <TrackingBootstrap />
          <div className="flex flex-col min-h-screen">{children}</div>
          
          <ChatbotClient />
          
          <CookieConsent />
        </Providers>
      </body>
    </html>
  );
}