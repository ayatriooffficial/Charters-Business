"use client";

import React, { useEffect } from "react";
import { AuthProvider } from "@/context/AuthContext";

export default function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    history.scrollRestoration = 'manual';
    window.addEventListener('beforeunload', function(){});
    const s = function(){window.scrollTo(0,0);document.documentElement.scrollTop=0};
    if(document.readyState === 'complete') s();
    else window.addEventListener('load', s);
    
    const pageShowHandler = function(e: PageTransitionEvent){if(e.persisted) window.location.reload()};
    window.addEventListener('pageshow', pageShowHandler);
    
    return () => {
      window.removeEventListener('load', s);
      window.removeEventListener('pageshow', pageShowHandler);
    };
  }, []);

  return <AuthProvider>{children}</AuthProvider>;
}