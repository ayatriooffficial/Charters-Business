"use client";

import { useEffect, useState, useCallback, memo } from "react";

const CONSENT_KEY = "cookie_consent_v1";

function CookieConsent() {
  const [show, setShow] = useState(false);
  const [openSettings, setOpenSettings] = useState(false);

  useEffect(() => {
    const existing = localStorage.getItem(CONSENT_KEY);
    if (!existing) {
      setShow(true);
    }
  }, []);

  const acceptAll = useCallback(() => {
    localStorage.setItem(CONSENT_KEY, "accepted");
    setShow(false);
    setOpenSettings(false);

    window.dispatchEvent(new Event("consent:accepted"));
  }, []);

  const essentialOnly = useCallback(() => {
    localStorage.setItem(CONSENT_KEY, "declined");
    setShow(false);
    setOpenSettings(false);

    window.dispatchEvent(new Event("consent:declined"));
  }, []);

  const openSettingsModal = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setOpenSettings(true);
  }, []);

  const closeSettings = useCallback(() => {
    setOpenSettings(false);
  }, []);

  if (!show) return null;

  return (
    <>
      {/* BAR */}
      <div className="fixed inset-x-0 bottom-0 z-[9999]">
        <div className="border-t border-black/10 bg-white">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
            {/* Left */}
            <div className="min-w-0">
              <p className="text-sm font-semibold text-gray-900">
                Cookie Preferences
              </p>
              <p className="mt-0.5 text-xs text-gray-600">
                Sharing your cookies helps us improve site functionality and
                optimize your experience.{" "}
                <a
                  href="/privacy-policy"
                  className="text-[#0B5FFF] hover:underline"
                >
                  Click Here
                </a>{" "}
                to read our cookie policy.
              </p>
            </div>

            {/* Right */}
            <div className="relative flex flex-shrink-0 items-center gap-4">
              <button
                type="button"
                className="cursor-pointer text-sm font-medium text-[#0B5FFF] hover:underline"
                onClick={openSettingsModal}
              >
                Manage Settings
              </button>

              <button
                type="button"
                onClick={acceptAll}
                className="rounded-full bg-[#0B5FFF] px-5 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-95 active:scale-[0.99]"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* SETTINGS MODAL */}
      {openSettings && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 z-[10000] bg-black/20"
            onClick={closeSettings}
          />

          {/* Popup */}
          <div className="fixed bottom-20 right-4 z-[10001] w-[320px] rounded-2xl border border-black/10 bg-white p-4 shadow-2xl sm:right-6">
            <p className="text-sm font-semibold text-gray-900">
              Cookie Settings
            </p>
            <p className="mt-1 text-xs text-gray-600">
              Choose how cookies are used. (Frontend consent only — no backend
              changes.)
            </p>

            <div className="mt-4 flex flex-col gap-2">
              <button
                type="button"
                onClick={essentialOnly}
                className="w-full rounded-xl border border-black/10 bg-white px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50"
              >
                Only essential cookies
              </button>

              <button
                type="button"
                onClick={acceptAll}
                className="w-full rounded-xl bg-[#0B5FFF] px-3 py-2 text-sm font-semibold text-white hover:opacity-95"
              >
                All cookies
              </button>
            </div>

            <button
              type="button"
              onClick={closeSettings}
              className="mt-3 w-full text-center text-xs font-medium text-gray-500 hover:text-gray-700"
            >
              Close
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default memo(CookieConsent);