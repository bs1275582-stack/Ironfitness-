import React, { useState, useEffect } from 'react';
import { MessageSquare, ArrowUp, Flame, Phone } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

interface FloatingActionsProps {
  onOpenVipModal: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenVipModal }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const openWhatsApp = () => {
    const text = encodeURIComponent("Hi IronForge Fitness! I am interested in membership details and booking a facility tour.");
    window.open(`https://wa.me/919876543210?text=${text}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      
      {/* Quick 3-Day Pass Pill (Floating) */}
      <button
        id="floating-vip-pill-btn"
        onClick={onOpenVipModal}
        className="pointer-events-auto group hidden md:flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#111111]/95 hover:bg-[#1a1a1a] border border-[#CCFF00]/40 text-white text-xs font-black uppercase tracking-wider shadow-2xl backdrop-blur-md transition-all hover:scale-105"
      >
        <span className="w-2 h-2 rounded-full bg-[#CCFF00] animate-ping" />
        <Flame className="w-4 h-4 text-[#CCFF00]" />
        <span>Get 3-Day Free VIP Pass</span>
      </button>

      {/* Floating Buttons Row */}
      <div className="flex items-center gap-3 pointer-events-auto">
        {/* WhatsApp Direct Chat Button */}
        <button
          id="floating-whatsapp-btn"
          onClick={openWhatsApp}
          className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-2xl shadow-emerald-500/40 flex items-center justify-center transition-all duration-300 transform hover:scale-110 active:scale-95 group relative"
          aria-label="Chat on WhatsApp with IronForge Concierge"
        >
          {/* Tooltip on hover */}
          <span className="absolute right-16 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-black/90 text-white text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-white/10 hidden sm:block">
            Chat on WhatsApp
          </span>
          <MessageSquare className="w-6 h-6 fill-current" />
        </button>

        {/* Scroll To Top Button */}
        {showScrollTop && (
          <button
            id="scroll-to-top-btn"
            onClick={scrollToTop}
            className="w-11 h-11 rounded-full bg-[#111111] hover:bg-[#CCFF00] hover:text-black text-zinc-300 border border-white/15 shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-105"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
};
