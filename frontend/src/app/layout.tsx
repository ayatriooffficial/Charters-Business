import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import CookieConsent from "@/components/shared/CookieConsent";
import Providers from "./providers";
import ClientOnlyComponents from "@/components/client/ClientOnlyComponents";

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
      className={`scroll-smooth ${fraunces.variable}`}
      data-scroll-behavior="smooth"
    >
      <head>
        {/* Faster external connections */}
        <link
          rel="preconnect"
          href="https://res.cloudinary.com"
          crossOrigin=""
        />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        {/* LCP Image Preload */}
        <link
          rel="preload"
          as="image"
          fetchPriority="high"
          href="https://res.cloudinary.com/ducgcl4dg/image/upload/f_auto,q_auto,w_1920/charters-business/background"
          media="(min-width: 768px)"
        />

        <link
          rel="preload"
          as="image"
          fetchPriority="high"
          href="https://res.cloudinary.com/ducgcl4dg/image/upload/f_auto,q_auto,w_750/charters-business/Background-M"
          media="(max-width: 767px)"
        />

        <meta name="theme-color" content="#B30437" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
      </head>

      <body className={`${inter.className} antialiased`}>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-KJ2D3MLL');
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
          {/* Client-only lazy components */}
          <ClientOnlyComponents />

          <div className="flex flex-col min-h-screen">{children}</div>

          <CookieConsent />
        </Providers>
      </body>
    </html>
  );
}