"use client";

import { useEffect } from "react";
import Script from "next/script";

const GTM_ID = "GTM-KJ2D3MLL";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: any[]) => void;
  }
}

export default function GoogleTagManager() {
  useEffect(() => {
    const handler = () => {
      if (typeof window.gtag === "function") {
        window.gtag("consent", "update", {
          ad_storage: "granted",
          ad_user_data: "granted",
          ad_personalization: "granted",
          analytics_storage: "granted",
          functionality_storage: "granted",
          personalization_storage: "granted",
          security_storage: "granted",
        });
      }
    };

    if (localStorage.getItem("cookie_consent_v1") === "accepted") {
      handler();
    }

    window.addEventListener("consent:accepted", handler);
    return () => window.removeEventListener("consent:accepted", handler);
  }, []);

  return (
    <>
      <Script
        id="gtm-consent-defaults"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            window.gtag = function gtag(){dataLayer.push(arguments);}
            var consent = localStorage.getItem('cookie_consent_v1');
            var defaults = consent === 'accepted'
              ? { ad_storage: 'granted', ad_user_data: 'granted', ad_personalization: 'granted', analytics_storage: 'granted', functionality_storage: 'granted', personalization_storage: 'granted', security_storage: 'granted' }
              : { ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied', analytics_storage: 'denied', functionality_storage: 'denied', personalization_storage: 'denied', security_storage: 'granted' };
            defaults.wait_for_update = 500;
            gtag('consent', 'default', defaults);
          `,
        }}
      />

      <Script
        id="gtm-script"
        src={`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`}
        strategy="afterInteractive"
      />

      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>
    </>
  );
}
