"use client";

import { useEffect } from "react";
import usePageTracking from "@/hooks/usePageTracking";
import {
  getOrCreateAnonSession,
  clearAnonSession,
} from "@/lib/Tracking";

export default function TrackingBootstrap() {

  usePageTracking();

  useEffect(() => {

    const api = process.env.NEXT_PUBLIC_API_URL;

    // ⭐ clear anonymous data if user closes tab without login
    const handleUnload = () => {

      // adjust this based on your auth storage
      const isLoggedIn =
        document.cookie.includes("connect.sid") ||   // cookie session example
        localStorage.getItem("token");               // JWT example

      if (!isLoggedIn) {
        clearAnonSession();
      }
    };

    window.addEventListener("beforeunload", handleUnload);

    const interval = setInterval(async () => {

      if (!api) return;

      const session = getOrCreateAnonSession();

      if (!session) return;

      try {

        await fetch(`${api}/api/v1/users/heartbeat`, {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            sessionId: session.sessionId,
            deviceId: session.deviceId,
          }),
        });

      } catch {
        console.log("heartbeat failed");
      }

    }, 15000);

    return () => {
      clearInterval(interval);
      window.removeEventListener("beforeunload", handleUnload);
    };

  }, []);

  return null;
}