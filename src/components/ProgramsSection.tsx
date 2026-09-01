import React, { useState } from 'react';
import { Flame, Dumbbell, Zap, Clock, ArrowRight, ShieldCheck, UserCheck, Activity } from 'lucide-react';
import { PROGRAMS } from '../data/gymData';
import { Program } from '../types';

interface ProgramsSectionProps {
  onSelectProgram: (program: Program) => void;
  onBookConsultation: (programTitle?: string) => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({ onSelectProgram, onBookConsultation }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Programs' },
    { id: 'strength', label: 'Strength' },
    { id: 'fat-loss', label: 'Weight Loss' },
    { id: 'personal', label: '1-on-1 Coaching' },
    { id: 'performance', label: 'Performance' },
    { id: 'group', label: 'Group Classes' },
  ];

  const filteredPrograms = selectedCategory === 'all'
    ? PROGRAMS
    : PROGRAMS.filter(p => p.category === selectedCategory);

  return (
    <section id="programs" className="py-24 bg-[#050505] relative">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-3/4 h-96 bg-[#CCFF00]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#111111] border border-white/10 text-[#CCFF00] text-xs font-black uppercase tracking-widest mb-3">
              <Dumbbell className="w-3.5 h-3.5" />
              <span>ELITE TRAINING MATRIX</span>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight">
              WORLD-CLASS <br />
              <span className="text-[#CCFF00]">
                TRAINING PROGRAMS
              </span>
            </h2>
          </div>

          <p className="max-w-md text-zinc-400 text-sm sm:text-base leading-relaxed">
            From raw barbell power to high-intensity metabolic conditioning, every program is built on biomechanical science and coached by industry veterans.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              id={`filter-program-${cat.id}`}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-200 ${
                selectedCategory === cat.id
                  ? 'bg-[#CCFF00] text-black font-black shadow-lg shadow-[#CCFF00]/30 scale-105'
                  : 'bg-[#111111] text-zinc-400 hover:text-white hover:bg-white/5 border border-white/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Programs Grid (6 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrograms.map((program) => {
            const intensityColor =
              program.intensity === 'Extreme' ? 'text-[#CCFF00] bg-[#CCFF00]/10 border-[#CCFF00]/30' :
              program.intensity === 'High' ? 'text-amber-400 bg-amber-400/10 border-amber-400/30' :
              'text-emerald-400 bg-emerald-400/10 border-emerald-400/30';

            return (
              <div
                key={program.id}
                id={`program-card-${program.id}`}
                className="glass-card rounded-2xl overflow-hidden border border-white/10 flex flex-col group transition-all duration-300 hover:border-[#CCFF00]/50 hover:shadow-2xl hover:shadow-[#CCFF00]/10 hover:-translate-y-1 bg-[#111111]"
              >
                {/* Image Container with Badges */}
                <div className="relative h-56 w-full overflow-hidden bg-black">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-black/40" />

                  {/* Top Badges */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex justify-between items-center">
                    <span className={`px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-wider border backdrop-blur-md ${intensityColor}`}>
                      {program.intensity} Intensity
                    </span>
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-black/60 text-zinc-300 border border-white/10 backdrop-blur-md flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#CCFF00]" />
                      {program.duration}
                    </span>
                  </div>

                  {/* Burn metric */}
                  <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-md border border-white/10 text-xs font-bold text-zinc-200 flex items-center gap-1.5">
                    <Flame className="w-3.5 h-3.5 text-[#CCFF00]" />
                    <span>{program.caloriesBurn}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-[11px] font-bold text-[#CCFF00] uppercase tracking-wider mb-1">
                      Coach Lead: {program.leadCoach}
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-white uppercase tracking-wide group-hover:text-[#CCFF00] transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-zinc-400 text-xs mt-2 leading-relaxed line-clamp-2">
                      {program.description}
                    </p>

                    {/* Features list */}
                    <div className="mt-4 space-y-1.5">
                      {program.features.slice(0, 2).map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-[11px] text-zinc-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#CCFF00]"></div>
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-3">
                    <button
                      id={`learn-more-btn-${program.id}`}
                      onClick={() => onSelectProgram(program)}
                      className="flex-1 py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/15 text-white font-bold text-xs uppercase tracking-wider border border-white/10 transition-all flex items-center justify-center gap-1.5 group-hover:border-[#CCFF00]/40"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#CCFF00] group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button
                      id={`enroll-btn-${program.id}`}
                      onClick={() => onBookConsultation(program.title)}
                      className="py-2.5 px-4 rounded-xl bg-[#CCFF00] hover:bg-[#b8e600] text-black font-black text-xs uppercase tracking-wider shadow-md shadow-[#CCFF00]/30 transition-all"
                    >
                      Enroll
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
