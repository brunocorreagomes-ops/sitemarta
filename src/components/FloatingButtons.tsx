import React, { useState, useEffect } from 'react';
import { ArrowUp, CalendarHeart } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

export default function FloatingButtons() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-6 right-4 sm:right-6 z-50 flex flex-col items-end gap-3 pointer-events-none">
      {/* Scroll to top button */}
      <div 
        className={`transition-all duration-500 pointer-events-auto ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        aria-hidden={!isVisible}
      >
        <button
          onClick={scrollToTop}
          tabIndex={isVisible ? 0 : -1}
          aria-label="Voltar ao topo"
          className="bg-white/90 backdrop-blur-sm border border-rose-gold/30 text-bordeaux p-2.5 sm:p-3 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:bg-rose-gold/20 hover:text-bordeaux transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-gold"
        >
          <ArrowUp size={20} />
        </button>
      </div>

      {/* Schedule / WhatsApp button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto flex items-center gap-2 bg-bordeaux text-white px-4 py-3 sm:px-5 sm:py-3.5 rounded-full shadow-[0_4px_20px_rgba(84,24,37,0.3)] hover:bg-rose-gold hover:shadow-[0_4px_25px_rgba(202,156,143,0.4)] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-gold focus-visible:ring-offset-2"
        aria-label="Agendar Atendimento via WhatsApp"
      >
        <CalendarHeart size={20} className="sm:w-[22px] sm:h-[22px]" />
        <span className="font-sans text-[10px] sm:text-xs tracking-[0.2em] uppercase font-semibold">Agendar</span>
      </a>
    </div>
  );
}
