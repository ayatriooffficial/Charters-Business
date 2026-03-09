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
    if (!api) return;

    let interval: NodeJS.Timeout;

    // Detect login state
    const isLoggedIn = () => {
      return (
        document.cookie.includes("connect.sid") ||
        localStorage.getItem("token")
      );
    };

    // Clear anonymous session if user leaves without login
    const handleUnload = () => {
      if (!isLoggedIn()) {
        clearAnonSession();
      }
    };

    // Heartbeat function
    const sendHeartbeat = async () => {
      try {
        if (document.hidden) return;

        const session = getOrCreateAnonSession();
        if (!session) return;

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
      } catch (error) {
        console.debug("Heartbeat failed", error);
      }
    };

    // Start heartbeat
    interval = setInterval(sendHeartbeat, 30000);

    // Event listeners
    window.addEventListener("beforeunload", handleUnload);

    return () => {
      clearInterval(interval);
      window.removeEventListener("beforeunload", handleUnload);
    };
  }, []);

  return null;
}