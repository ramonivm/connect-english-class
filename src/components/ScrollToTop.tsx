import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 350px
      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Volver al inicio de la página"
      className={`fixed bottom-6 right-6 z-40 p-3 rounded-full bg-[#0B132B] text-white hover:bg-coral-500 border border-slate-700/60 shadow-xl transition-all duration-300 transform cursor-pointer flex items-center justify-center group focus:outline-none focus:ring-2 focus:ring-coral-400 focus:ring-offset-2 ${
        isVisible
          ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
          : 'opacity-0 translate-y-4 scale-90 pointer-events-none'
      }`}
    >
      <ChevronUp className="w-5 h-5 transition-transform group-hover:-translate-y-0.5 text-slate-200 group-hover:text-white" />
    </button>
  );
};
