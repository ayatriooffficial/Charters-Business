import type { Metadata } from "next";
import { Inter} from "next/font/google";
import "./globals.css";

import CookieConsent from "@/components/shared/CookieConsent";
import GoogleTagManager from "@/components/shared/GoogleTagManager";
import Providers from "./providers";
import ClientOnlyComponents from "@/components/client/ClientOnlyComponents";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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


export const metadata: Metadata = {
  title: {
    default: "Charters union: Learn with companys in-class",
    template: "%s | Charters Business",
  },
  description:
    "Join Tetr where the world is your classroom. Apply for undergraduate and postgraduate business programs with scholarships up to 100%. Learn from CEOs, build real businesses, and study at top global institutions.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://chartersbusiness.com"
  ),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      // className={`scroll-smooth ${fraunces.variable}`}
      className={`${inter.variable} scroll-smooth`}
      data-scroll-behavior="smooth"
    >
      <head>
        {/* DNS Prefetch + Preconnect */}
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="" />

        {/* PWA + Theme */}
        <meta name="theme-color" content="#B30437" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>

      <body className="font-sans antialiased">
        <Providers>
          <GoogleTagManager />
          <ClientOnlyComponents />

          <div className="flex flex-col min-h-screen">
            {children}
          </div>

          <CookieConsent />
        </Providers>
      </body>
    </html>
  );
}
