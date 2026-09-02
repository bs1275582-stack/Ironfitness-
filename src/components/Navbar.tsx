import React, { useState, useEffect } from 'react';
import { Dumbbell, Menu, X, Flame, Phone, ArrowRight, ShieldCheck } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

interface NavbarProps {
  onOpenVipModal: () => void;
  onBookConsultation: (planOrProgram?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenVipModal, onBookConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check current section
      const sections = ['home', 'about', 'programs', 'pricing', 'trainers', 'results', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Programs', href: '#programs', id: 'programs' },
    { label: 'Membership', href: '#pricing', id: 'pricing' },
    { label: 'Trainers', href: '#trainers', id: 'trainers' },
    { label: 'Results', href: '#results', id: 'results' },
    { label: 'Reviews', href: '#testimonials', id: 'testimonials' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Top Banner Ribbon */}
      <div id="top-announcement-bar" className="bg-[#0A0A0A] border-b border-white/5 py-1.5 px-4 text-xs font-medium text-zinc-400 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-black bg-[#CCFF00] text-black tracking-wider uppercase">
              LIMITED OFFER
            </span>
            <span>Get 3-Day VIP Access & Free Fitness Assessment this week</span>
          </div>
          <div className="flex items-center gap-6 text-zinc-400">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#CCFF00] animate-pulse"></span>
              <span className="text-zinc-300">Open 24/7 (Keycard Access)</span>
            </span>
            <a href={`tel:${GYM_INFO.phone.replace(/\s+/g, '')}`} className="hover:text-white flex items-center gap-1 transition-colors">
              <Phone className="w-3 h-3 text-[#CCFF00]" />
              <span>{GYM_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <header
        id="main-navbar"
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#050505]/95 backdrop-blur-md border-b border-white/10 shadow-2xl shadow-black/90 py-3'
            : 'bg-gradient-to-b from-[#050505] to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a
              id="brand-logo-link"
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-2.5 group focus:outline-none"
            >
              <div className="w-8 h-8 bg-[#CCFF00] rounded-sm flex items-center justify-center shadow-lg shadow-[#CCFF00]/25 group-hover:scale-105 transition-transform duration-300">
                <div className="w-4 h-4 bg-black rotate-45 flex items-center justify-center">
                  <Flame className="w-3 h-3 text-[#CCFF00] -rotate-45" />
                </div>
              </div>
              <div className="flex items-baseline gap-0.5">
                <span className="text-2xl font-black tracking-tighter text-white font-sans">
                  IRONFORGE<span className="text-[#CCFF00]">FITNESS</span>
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav id="desktop-nav" className="hidden lg:flex items-center gap-1 bg-white/[0.04] border border-white/10 px-3 py-1.5 rounded-full backdrop-blur-md">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    id={`nav-link-${link.id}`}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                      isActive
                        ? 'bg-[#CCFF00] text-black shadow-md shadow-[#CCFF00]/30 font-black'
                        : 'text-zinc-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                id="navbar-vip-pass-btn"
                onClick={onOpenVipModal}
                className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-zinc-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/15 rounded-xl transition-all duration-200"
              >
                Free 3-Day Pass
              </button>
              <button
                id="navbar-join-now-btn"
                onClick={() => onBookConsultation()}
                className="group relative inline-flex items-center gap-2 px-6 py-2 text-xs font-black uppercase tracking-wider text-black bg-[#CCFF00] hover:bg-[#b8e600] rounded-full shadow-lg shadow-[#CCFF00]/25 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span>Join Now</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform stroke-[2.5]" />
              </button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                id="mobile-vip-cta-btn"
                onClick={onOpenVipModal}
                className="sm:hidden px-3 py-1.5 text-[11px] font-black uppercase tracking-wider bg-[#CCFF00] text-black rounded-full"
              >
                Free Pass
              </button>
              <button
                id="mobile-menu-toggle-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-zinc-200 hover:text-white focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            id="mobile-nav-drawer"
            className="lg:hidden mt-3 mx-4 p-5 rounded-3xl bg-[#111111] border border-white/10 shadow-2xl backdrop-blur-xl animate-fadeIn"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  id={`mobile-nav-link-${link.id}`}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-3 rounded-2xl text-sm font-bold uppercase tracking-wider flex items-center justify-between ${
                    activeSection === link.id
                      ? 'bg-[#CCFF00] text-black font-black'
                      : 'text-zinc-400 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-4 h-4 opacity-70" />
                </a>
              ))}
            </div>

            <div className="mt-5 pt-4 border-t border-white/10 flex flex-col gap-3">
              <button
                id="mobile-drawer-vip-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenVipModal();
                }}
                className="w-full py-3 rounded-2xl text-center font-bold text-sm text-white bg-white/10 hover:bg-white/15 border border-white/15 uppercase tracking-wider"
              >
                Claim Free 3-Day VIP Pass
              </button>
              <button
                id="mobile-drawer-join-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookConsultation();
                }}
                className="w-full py-3.5 rounded-2xl text-center font-black text-sm text-black bg-[#CCFF00] hover:bg-[#b8e600] uppercase tracking-wider shadow-lg shadow-[#CCFF00]/30"
              >
                Book Free Consultation
              </button>
            </div>

            <div className="mt-4 pt-3 flex items-center justify-center gap-2 text-xs text-zinc-400">
              <ShieldCheck className="w-4 h-4 text-[#CCFF00]" />
              <span>No credit card required for 3-Day Trial</span>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
