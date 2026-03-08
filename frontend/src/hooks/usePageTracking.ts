"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { trackPage, clearAnonSession } from "@/lib/Tracking";

export default function usePageTracking() {
  const pathname = usePathname();

  useEffect(() => {
    trackPage(pathname);
  }, [pathname]);

  useEffect(() => {
    const onDecline = () => clearAnonSession();
    window.addEventListener("consent:declined", onDecline);
    return () => window.removeEventListener("consent:declined", onDecline);
  }, []);
}