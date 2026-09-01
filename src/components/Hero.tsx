import React from 'react';
import { Play, Flame, ShieldCheck, ArrowRight, Star, Clock, Users, Award, ChevronDown } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

interface HeroProps {
  onOpenVipModal: () => void;
  onExplorePrograms: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenVipModal, onExplorePrograms }) => {
  return (
    <section id="home" className="relative min-h-[92vh] lg:min-h-[96vh] flex items-center justify-center overflow-hidden bg-[#050505]">
      {/* Background Image with Cinematic Darkness & Radial Gradients */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2000&q=85"
          alt="IronForge Gym training athletes"
          className="w-full h-full object-cover object-center transform scale-105 opacity-40"
          style={{ filter: 'brightness(0.35) contrast(1.2)' }}
        />
        {/* Cinematic Vignette & Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/85 to-transparent lg:w-3/4" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#CCFF00]/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#CCFF00]/5 rounded-full blur-[160px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="max-w-3xl">
          {/* Top Pill / Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111111] border border-white/10 backdrop-blur-md mb-6 shadow-inner">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#CCFF00] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#CCFF00]"></span>
            </span>
            <span className="text-xs font-black uppercase tracking-widest text-[#CCFF00]">
              ELITE STRENGTH & HIGH-PERFORMANCE FACILITY
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-heading text-5xl sm:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[0.92] uppercase">
            BUILD THE <br />
            <span className="text-white">
              STRONGEST
            </span> <br />
            <span className="text-[#CCFF00] drop-shadow-[0_4px_30px_rgba(204,255,0,0.35)]">
              VERSION OF YOU.
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="mt-6 text-lg sm:text-xl text-zinc-300 font-normal leading-relaxed max-w-2xl">
            Train harder. Move better. Become unstoppable. Experience world-class Olympic equipment, biomechanics-driven coaching, and an uncompromising atmosphere forged for peak results.
          </p>

          {/* Action CTAs */}
          <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              id="hero-start-free-trial-btn"
              onClick={onOpenVipModal}
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 text-xs font-black uppercase tracking-wider text-black bg-[#CCFF00] hover:bg-[#b8e600] rounded-xl shadow-xl shadow-[#CCFF00]/25 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 hover:scale-105"
            >
              <Flame className="w-4 h-4 text-black fill-current" />
              <span>Start Your Free Trial</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform stroke-[2.5]" />
            </button>

            <button
              id="hero-explore-programs-btn"
              onClick={onExplorePrograms}
              className="inline-flex items-center justify-center gap-2 px-7 py-4 text-xs font-bold uppercase tracking-wider text-zinc-200 hover:text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/20 hover:border-white/35 rounded-xl backdrop-blur-md transition-all duration-300"
            >
              <span>Explore Programs</span>
              <ChevronDown className="w-4 h-4 text-zinc-400 group-hover:text-white" />
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center gap-y-4 gap-x-8 text-xs font-semibold text-zinc-300">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <img
                  className="inline-block h-7 w-7 rounded-full ring-2 ring-[#050505] object-cover"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                  alt="Member"
                />
                <img
                  className="inline-block h-7 w-7 rounded-full ring-2 ring-[#050505] object-cover"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
                  alt="Member"
                />
                <img
                  className="inline-block h-7 w-7 rounded-full ring-2 ring-[#050505] object-cover"
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80"
                  alt="Member"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-current" />
                  ))}
                  <span className="ml-1 font-bold text-white text-xs">4.9/5</span>
                </div>
                <span className="text-[11px] text-zinc-400 font-normal">500+ Active Members</span>
              </div>
            </div>

            <div className="h-6 w-px bg-white/15 hidden sm:block"></div>

            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#CCFF00]/10 border border-[#CCFF00]/30 flex items-center justify-center text-[#CCFF00]">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <p className="text-white text-xs font-bold">Certified Elite Coaches</p>
                <p className="text-[11px] text-zinc-400 font-normal">NSCA, ISSA & EXOS Specialists</p>
              </div>
            </div>

            <div className="h-6 w-px bg-white/15 hidden md:block"></div>

            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#CCFF00]/10 border border-[#CCFF00]/30 flex items-center justify-center text-[#CCFF00]">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <p className="text-white text-xs font-bold">24/7 Keycard Entry</p>
                <p className="text-[11px] text-zinc-400 font-normal">Train on your schedule</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Bottom Quick Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center text-zinc-400 hover:text-white transition-colors cursor-pointer"
           onClick={onExplorePrograms}>
        <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-500 mb-1">Scroll to explore</span>
        <div className="w-5 h-8 rounded-full border-2 border-white/20 flex items-start justify-center p-1">
          <div className="w-1.5 h-2 bg-[#CCFF00] rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};
