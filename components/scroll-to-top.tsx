'use client';

import { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-32 right-8 bg-primary hover:bg-primary/90 text-primary-foreground p-3 rounded-full shadow-lg transition-all duration-300 z-50 flex items-center justify-center ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      <ChevronUp size={24} />
    </button>
  );
}
