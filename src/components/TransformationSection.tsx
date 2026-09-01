import React, { useState } from 'react';
import { Sparkles, Trophy, ArrowRight, Quote, Flame, Activity, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import { TRANSFORMATIONS } from '../data/gymData';
import { Transformation } from '../types';

interface TransformationSectionProps {
  onOpenVipModal: () => void;
}

export const TransformationSection: React.FC<TransformationSectionProps> = ({ onOpenVipModal }) => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [activeTransformationIdx, setActiveTransformationIdx] = useState<number>(0);

  const activeTrans: Transformation = TRANSFORMATIONS[activeTransformationIdx];

  const handleSliderMove = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <section id="results" className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-[#CCFF00]/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#CCFF00]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#111111] border border-white/10 text-[#CCFF00] text-xs font-black uppercase tracking-widest mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>REAL ATHLETES • REAL NUMBERS</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight">
            TRANSFORMATION <br />
            <span className="text-[#CCFF00]">
              HALL OF FAME
            </span>
          </h2>
          <p className="mt-4 text-zinc-300 text-sm sm:text-base leading-relaxed">
            Witness the tangible power of progressive overload, metabolic conditioning, and relentless consistency. No quick-fix gimmicks — just pure forged results.
          </p>
        </div>

        {/* Member Select Tabs */}
        <div className="flex justify-center gap-3 mb-10 overflow-x-auto pb-2">
          {TRANSFORMATIONS.map((trans, idx) => (
            <button
              key={trans.id}
              id={`select-trans-tab-${trans.id}`}
              onClick={() => {
                setActiveTransformationIdx(idx);
                setSliderPosition(50);
              }}
              className={`px-5 py-2.5 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 whitespace-nowrap ${
                activeTransformationIdx === idx
                  ? 'bg-[#CCFF00] text-black font-black shadow-lg shadow-[#CCFF00]/30 scale-105'
                  : 'bg-[#111111] text-zinc-400 hover:text-white border border-white/5'
              }`}
            >
              <span>{trans.name}</span>
              <span className="text-[10px] opacity-80">({trans.duration})</span>
            </button>
          ))}
        </div>

        {/* Interactive Before / After Split Visualizer Card */}
        <div className="glass-card rounded-3xl border border-white/10 p-6 sm:p-10 shadow-2xl bg-[#111111]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Interactive Image Split Container */}
            <div className="lg:col-span-7 flex flex-col items-center">
              <div className="relative w-full h-80 sm:h-[420px] rounded-2xl overflow-hidden select-none border border-white/10 shadow-2xl bg-black">
                {/* AFTER IMAGE (Background) */}
                <img
                  src={activeTrans.afterImage}
                  alt={`${activeTrans.name} After Transformation`}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
                
                {/* AFTER BADGE */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-md bg-[#CCFF00] text-black text-xs font-black uppercase tracking-wider shadow-lg">
                  AFTER ({activeTrans.duration})
                </div>

                {/* BEFORE IMAGE (Clipped on top) */}
                <div
                  className="absolute inset-0 overflow-hidden border-r-2 border-[#CCFF00]"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <img
                    src={activeTrans.beforeImage}
                    alt={`${activeTrans.name} Before Transformation`}
                    className="absolute inset-0 w-full h-full object-cover object-center max-w-none"
                    style={{ width: '100%', height: '100%' }}
                  />
                  {/* BEFORE BADGE */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-md bg-black/80 text-zinc-300 text-xs font-black uppercase tracking-wider border border-white/20">
                    BEFORE DAY 1
                  </div>
                </div>

                {/* Drag Handle Indicator */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-[#CCFF00] cursor-ew-resize pointer-events-none"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#CCFF00] text-black flex items-center justify-center shadow-2xl shadow-black font-black text-xs">
                    ↔
                  </div>
                </div>

                {/* Hidden interactive range input over the top */}
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPosition}
                  onChange={handleSliderMove}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                  aria-label="Drag to compare before and after transformation"
                />
              </div>

              <div className="mt-3 text-xs text-zinc-400 flex items-center gap-2">
                <span>← Slide or drag across image to reveal before and after →</span>
              </div>
            </div>

            {/* Transformation Story & Metrics */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-[#CCFF00] uppercase mb-2">
                  {activeTrans.program}
                </div>
                <h3 className="font-heading text-3xl sm:text-4xl font-extrabold text-white uppercase">
                  {activeTrans.name}, {activeTrans.age}
                </h3>
                <p className="text-xs text-zinc-400 mt-1">Transformed in {activeTrans.duration}</p>
              </div>

              {/* 3 Metric Pills */}
              <div className="grid grid-cols-3 gap-3">
                <div className="p-3.5 rounded-xl bg-black/50 border border-white/10 text-center">
                  <div className="text-[10px] text-zinc-400 font-bold uppercase">Weight</div>
                  <div className="font-heading text-xl sm:text-2xl font-black text-[#CCFF00] mt-0.5">
                    {activeTrans.stats.weightChange}
                  </div>
                </div>
                <div className="p-3.5 rounded-xl bg-black/50 border border-white/10 text-center">
                  <div className="text-[10px] text-zinc-400 font-bold uppercase">Body Fat</div>
                  <div className="font-heading text-xl sm:text-2xl font-black text-amber-400 mt-0.5">
                    {activeTrans.stats.bodyFatChange}
                  </div>
                </div>
                <div className="p-3.5 rounded-xl bg-black/50 border border-white/10 text-center">
                  <div className="text-[10px] text-zinc-400 font-bold uppercase">Strength</div>
                  <div className="font-heading text-xl sm:text-2xl font-black text-emerald-400 mt-0.5">
                    {activeTrans.stats.strengthGain}
                  </div>
                </div>
              </div>

              {/* Quote */}
              <div className="p-4 rounded-xl bg-white/[0.03] border-l-2 border-[#CCFF00] text-zinc-300 text-xs italic leading-relaxed relative">
                <Quote className="w-5 h-5 text-[#CCFF00]/30 absolute top-2 right-2" />
                "{activeTrans.testimonial}"
              </div>

              {/* Action */}
              <div className="pt-2">
                <button
                  id="trans-start-journey-btn"
                  onClick={onOpenVipModal}
                  className="w-full py-3.5 px-6 rounded-xl bg-[#CCFF00] hover:bg-[#b8e600] text-black font-black text-xs uppercase tracking-wider shadow-lg shadow-[#CCFF00]/25 transition-all flex items-center justify-center gap-2 hover:scale-105"
                >
                  <span>Start Your Transformation</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
