import React, { useState } from 'react';
import { Flame, Instagram, Youtube, Twitter, Linkedin, Mail, Phone, MapPin, ArrowRight, CheckCircle2, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';
import { GYM_INFO } from '../data/gymData';

interface FooterProps {
  onOpenVipModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenVipModal }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSubscribed(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.85 },
      colors: ['#FF3B30', '#FFFFFF']
    });
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer id="main-footer" className="bg-[#050505] text-zinc-400 border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#CCFF00]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Column (5 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-[#CCFF00] flex items-center justify-center text-black shadow-lg shadow-[#CCFF00]/30 font-black">
                <Flame className="w-6 h-6 fill-current" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-2xl tracking-wider text-white font-extrabold flex items-center gap-1.5 leading-none">
                  IRONFORGE
                  <span className="text-[#CCFF00] text-xl font-sans font-black">.</span>
                </span>
                <span className="text-[10px] tracking-[0.25em] text-zinc-500 font-bold uppercase -mt-0.5">
                  FITNESS CLUB
                </span>
              </div>
            </a>

            <p className="text-xs text-zinc-400 leading-relaxed pr-4">
              Bangalore's premier high-performance strength facility. Forged on scientific biomechanics, Olympic standard equipment, and an unyielding culture of discipline and growth.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#CCFF00] hover:text-black text-zinc-300 border border-white/10 flex items-center justify-center transition-colors"
                aria-label="IronForge Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#CCFF00] hover:text-black text-zinc-300 border border-white/10 flex items-center justify-center transition-colors"
                aria-label="IronForge YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#CCFF00] hover:text-black text-zinc-300 border border-white/10 flex items-center justify-center transition-colors"
                aria-label="IronForge Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#CCFF00] hover:text-black text-zinc-300 border border-white/10 flex items-center justify-center transition-colors"
                aria-label="IronForge LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading text-lg font-bold text-white uppercase tracking-wider">Explore</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="hover:text-white transition-colors">About Facility</a></li>
              <li><a href="#programs" onClick={(e) => scrollToSection(e, 'programs')} className="hover:text-white transition-colors">Training Programs</a></li>
              <li><a href="#pricing" onClick={(e) => scrollToSection(e, 'pricing')} className="hover:text-white transition-colors">Membership Pricing</a></li>
              <li><a href="#trainers" onClick={(e) => scrollToSection(e, 'trainers')} className="hover:text-white transition-colors">Elite Trainers</a></li>
              <li><a href="#results" onClick={(e) => scrollToSection(e, 'results')} className="hover:text-white transition-colors">Transformations</a></li>
              <li><a href="#calculator" onClick={(e) => scrollToSection(e, 'calculator')} className="hover:text-white transition-colors">Calorie Calculator</a></li>
            </ul>
          </div>

          {/* Training Programs (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading text-lg font-bold text-white uppercase tracking-wider">Programs</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#programs" onClick={(e) => scrollToSection(e, 'programs')} className="hover:text-white transition-colors">Strength & Conditioning</a></li>
              <li><a href="#programs" onClick={(e) => scrollToSection(e, 'programs')} className="hover:text-white transition-colors">Weight Loss & MetCon</a></li>
              <li><a href="#programs" onClick={(e) => scrollToSection(e, 'programs')} className="hover:text-white transition-colors">1-on-1 Personal Training</a></li>
              <li><a href="#programs" onClick={(e) => scrollToSection(e, 'programs')} className="hover:text-white transition-colors">Cross Training & Turf</a></li>
              <li><a href="#programs" onClick={(e) => scrollToSection(e, 'programs')} className="hover:text-white transition-colors">Group Fitness Studio</a></li>
              <li><a href="#programs" onClick={(e) => scrollToSection(e, 'programs')} className="hover:text-white transition-colors">Athlete Performance</a></li>
            </ul>
          </div>

          {/* Newsletter Signup (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-heading text-lg font-bold text-white uppercase tracking-wider">
              THE IRONFORGE DISPATCH
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Subscribe for weekly science-backed training protocols, nutrition breakdowns, and priority workshop invitations.
            </p>

            {newsletterSubscribed ? (
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>You're in! Welcome to the IronForge inner circle.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-1 px-4 py-2.5 rounded-xl bg-[#111111] border border-white/10 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-[#CCFF00]"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 rounded-xl bg-[#CCFF00] hover:bg-[#b8e600] text-black font-black text-xs uppercase tracking-wider transition-colors shrink-0"
                >
                  Join
                </button>
              </form>
            )}

            <div className="pt-2">
              <button
                onClick={onOpenVipModal}
                className="w-full py-2.5 px-4 rounded-xl bg-white/5 hover:bg-[#CCFF00] hover:text-black text-white text-xs font-bold uppercase tracking-wider border border-white/10 text-center transition-all"
              >
                Claim Free 3-Day VIP Pass
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-zinc-500">
          <div>
            © {new Date().getFullYear()} IRONFORGE FITNESS CLUB. All rights reserved.
          </div>
          <div className="flex gap-6">
            <span className="hover:text-zinc-300 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-zinc-300 cursor-pointer">Terms of Membership</span>
            <span className="hover:text-zinc-300 cursor-pointer">Facility Guidelines</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
