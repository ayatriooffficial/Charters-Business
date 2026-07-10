"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface LazyMountProps {
  children: ReactNode;
  fallback?: ReactNode;
  rootMargin?: string;
}

export default function LazyMount({
  children,
  fallback = null,
  rootMargin = "200px", // Start loading slightly before it comes into view
}: LazyMountProps) {
  const [isMounted, setIsMounted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isMounted) return;

    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsMounted(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(currentRef);

    return () => {
      observer.disconnect();
    };
  }, [isMounted, rootMargin]);

  return (
    <div ref={ref} style={{ minHeight: isMounted ? "auto" : "300px" }}>
      {isMounted ? children : fallback}
    </div>
  );
}
