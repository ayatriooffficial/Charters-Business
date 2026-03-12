"use client";

import { useEffect, useState } from "react";

export default function useInViewPlay<T extends HTMLElement>(
  ref: React.RefObject<HTMLElement | null>,
  rootMargin: string = "0px",
  threshold: number = 0.25
) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [ref, rootMargin, threshold]);

  return inView;
}