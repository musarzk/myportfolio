'use client';

import { useEffect, useRef, useState } from 'react';

export function useRevealOnScroll(options: {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
} = {}) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const once = options.once ?? false;

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        if (once) {
          observer.unobserve(entry.target);
        }
      } else {
        if (!once) {
          setIsVisible(false);
        }
      }
    }, {
      threshold: options.threshold || 0.1,
      rootMargin: options.rootMargin || '0px',
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options.threshold, options.rootMargin, once]);

  return { ref, isVisible };
}
