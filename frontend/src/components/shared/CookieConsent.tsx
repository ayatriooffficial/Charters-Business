"use client";

import { useEffect, useState, useCallback } from "react";
import { X } from "lucide-react";

const CONSENT_KEY = "cookie_consent_v1";

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(CONSENT_KEY)) setShow(true);
  }, []);

  const acceptAll = useCallback(() => {
    localStorage.setItem(CONSENT_KEY, "accepted");
    setShow(false);
    window.dispatchEvent(new Event("consent:accepted"));
  }, []);

  const essentialOnly = useCallback(() => {
    localStorage.setItem(CONSENT_KEY, "declined");
    setShow(false);
    window.dispatchEvent(new Event("consent:declined"));
  }, []);

  if (!show) return null;

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/10 backdrop-blur-[1px] z-[9998]" aria-hidden="true" />

      {/* Card */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-title"
        className="fixed z-[9999] left-8 bottom-8 w-[360px] sm:w-[400px] bg-white border border-black/10 shadow-[0_20px_60px_rgba(0,0,0,0.12)] rounded-sm p-6"
      >
        <button
          onClick={essentialOnly}
          aria-label="Dismiss and use essential cookies only"
          className="absolute top-4 right-4 text-gray-400 hover:text-black transition"
        >
          <X size={16} aria-hidden="true" />
        </button>

        <h3 id="cookie-title" className="text-[15px] font-semibold text-gray-900 tracking-tight">
          We respect your Privacy
        </h3>

        <p className="mt-3 text-[13.5px] leading-[1.65] text-gray-600">
          We use cookies to improve your experience on our website. By clicking
          &ldquo;Accept all cookies&rdquo;, you consent to the use of cookies to enhance
          site navigation, analyze site usage, and support our services, as outlined in
          our{" "}
          <a href="/privacy-policy" className="underline text-black font-medium">
            Privacy Policy
          </a>.
        </p>

        <div className="mt-5 flex items-center gap-3">
          <button
            onClick={acceptAll}
            className="bg-[#0339F8] text-white px-5 py-2.5 text-[13.5px] font-medium rounded-sm hover:bg-[#022fcc] transition"
          >
            Accept all cookies
          </button>

          <button
            onClick={essentialOnly}
            className="border border-gray-300 px-5 py-2.5 text-[13.5px] font-medium rounded-sm hover:bg-gray-50 transition"
          >
            Essential only
          </button>
        </div>
      </div>
    </>
  );
}