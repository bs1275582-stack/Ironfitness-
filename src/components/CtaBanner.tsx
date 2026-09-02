import React from 'react';
import { Flame, ArrowRight, ShieldCheck, Clock, Award } from 'lucide-react';

interface CtaBannerProps {
  onOpenVipModal: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenVipModal }) => {
  return (
    <section id="cta-banner" className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl overflow-hidden border border-[#CCFF00]/30 p-8 sm:p-16 text-center shadow-2xl bg-[#111111]">
          
          {/* Background image & gradient lighting */}
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
            <img
              src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1600&q=80"
              alt="Gym Athlete Training"
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#CCFF00]/10 rounded-full blur-[140px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#CCFF00]/10 border border-[#CCFF00]/30 text-[#CCFF00] text-xs font-black uppercase tracking-widest mb-6">
              <Flame className="w-3.5 h-3.5 fill-current animate-pulse" />
              <span>THE MOMENT OF DECISION</span>
            </div>

            <h2 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight leading-[0.95]">
              YOUR NEXT LEVEL <br />
              <span className="text-[#CCFF00]">
                STARTS TODAY.
              </span>
            </h2>

            <p className="mt-6 text-base sm:text-xl text-zinc-300 font-normal leading-relaxed max-w-xl mx-auto">
              Stop waiting for motivation. Start building momentum. Take the first step into Jalandhar's premier strength sanctuary.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                id="cta-claim-trial-btn"
                onClick={onOpenVipModal}
                className="w-full sm:w-auto px-9 py-4 rounded-xl bg-[#CCFF00] hover:bg-[#b8e600] text-black font-heading font-black text-xl uppercase tracking-wider shadow-2xl shadow-[#CCFF00]/30 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-3 active:scale-95"
              >
                <span>Claim Your Free Trial</span>
                <ArrowRight className="w-5 h-5 stroke-[2.5]" />
              </button>
            </div>

            {/* Micro guarantees */}
            <div className="mt-8 flex flex-wrap justify-center items-center gap-y-2 gap-x-6 text-xs text-zinc-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Zero Credit Card Required</span>
              </span>
              <span className="w-1 h-1 rounded-full bg-zinc-700 hidden sm:inline-block"></span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#CCFF00]" />
                <span>Instant Digital Pass Issued</span>
              </span>
              <span className="w-1 h-1 rounded-full bg-zinc-700 hidden sm:inline-block"></span>
              <span className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-amber-400" />
                <span>Complimentary Form Assessment</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
