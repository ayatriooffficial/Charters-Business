"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const TrackingBootstrap = dynamic(
  () => import("@/components/shared/TrackingBootstrap"),
  { ssr: false }
);

const ChatbotClient = dynamic(
  () => import("@/components/shared/chatBotClient"),
  { ssr: false }
);

export default function ClientOnlyComponents() {
  const [loadChatbot, setLoadChatbot] = useState(false);

  useEffect(() => {
    // === CACHE BUSTER: Detect & kill stale service workers ===
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      navigator.serviceWorker.getRegistrations().then((registrations) => {
        if (registrations.length > 0) {
          console.log(
            `[CacheFix] Found ${registrations.length} stale service worker(s). Cleaning up...`
          );
          const unregisterAll = registrations.map((r) =>
            r.unregister().then((ok) => {
              if (ok) console.log("[CacheFix] Service worker unregistered.");
            })
          );

          Promise.all(unregisterAll).then(() => {
            // Purge all Cache Storage entries left behind by old SW
            if ("caches" in window) {
              caches.keys().then((keys) => {
                Promise.all(keys.map((k) => caches.delete(k))).then(() => {
                  console.log("[CacheFix] Cache Storage cleared. Reloading...");
                  window.location.reload();
                });
              });
            } else {
              (window as any).location.reload();
            }
          });
        }
      });
    }

    // Load chatbot after idle
    if ("requestIdleCallback" in window) {
      requestIdleCallback(() => {
        setLoadChatbot(true);
      });
    } else {
      setTimeout(() => {
        setLoadChatbot(true);
      }, 3000);
    }
  }, []);

  return (
    <>
      <TrackingBootstrap />

      {loadChatbot && <ChatbotClient />}

    </>
  );
}