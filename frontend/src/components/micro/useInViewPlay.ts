'use client';
import { useEffect, useRef, useState } from 'react';

export default function useInViewPlay<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setPlay(true);
      },
      { root: null, threshold: 0.35, ...options }
    );
    io.observe(el);
    return () => io.unobserve(el);
  }, [options]);

  return { ref, play };
}
