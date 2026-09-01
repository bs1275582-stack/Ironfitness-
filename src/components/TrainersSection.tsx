import React, { useState } from 'react';
import { Award, Instagram, Twitter, Linkedin, Calendar, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import { TRAINERS } from '../data/gymData';
import { Trainer } from '../types';

interface TrainersSectionProps {
  onBookTrainer: (trainerName: string) => void;
}

export const TrainersSection: React.FC<TrainersSectionProps> = ({ onBookTrainer }) => {
  const [selectedTrainer, setSelectedTrainer] = useState<Trainer | null>(null);

  return (
    <section id="trainers" className="py-24 bg-[#050505] relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#CCFF00]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#111111] border border-white/10 text-[#CCFF00] text-xs font-black uppercase tracking-widest mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>THE FORGE MASTERS</span>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight">
              WORLD-CLASS <br />
              <span className="text-[#CCFF00]">
                FITNESS COACHES
              </span>
            </h2>
          </div>

          <p className="max-w-md text-zinc-400 text-sm sm:text-base leading-relaxed">
            Our elite trainers hold internationally accredited sports science certifications and have transformed hundreds of lifters, athletes, and professionals.
          </p>
        </div>

        {/* Trainers Grid (3 Coaches) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TRAINERS.map((trainer) => (
            <div
              key={trainer.id}
              id={`trainer-card-${trainer.id}`}
              className="glass-card rounded-3xl overflow-hidden border border-white/10 flex flex-col group transition-all duration-300 hover:border-[#CCFF00]/50 hover:shadow-2xl hover:shadow-[#CCFF00]/10 bg-[#111111]"
            >
              {/* Trainer Portrait with gradient overlay */}
              <div className="relative h-96 w-full overflow-hidden bg-[#151824]">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/20 to-transparent" />

                {/* Experience Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-black/70 text-zinc-200 border border-white/10 backdrop-blur-md">
                    {trainer.experience} Experience
                  </span>
                </div>

                {/* Social Links on Hover / Always visible on mobile */}
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  <a
                    href={trainer.socials.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-full bg-black/60 hover:bg-[#CCFF00] text-zinc-300 hover:text-black border border-white/10 flex items-center justify-center backdrop-blur-md transition-colors"
                    aria-label={`${trainer.name} Instagram`}
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href={trainer.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-full bg-black/60 hover:bg-[#CCFF00] text-zinc-300 hover:text-black border border-white/10 flex items-center justify-center backdrop-blur-md transition-colors"
                    aria-label={`${trainer.name} LinkedIn`}
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>

                {/* Role and Name Overlay */}
                <div className="absolute bottom-4 left-6 right-6">
                  <div className="text-xs font-bold text-[#CCFF00] uppercase tracking-wider mb-1">
                    {trainer.role}
                  </div>
                  <h3 className="font-heading text-3xl font-black text-white uppercase tracking-wide">
                    {trainer.name}
                  </h3>
                </div>
              </div>

              {/* Trainer Details & Bio */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {trainer.certifications.map((cert, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-zinc-300 font-semibold"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>

                  <p className="text-zinc-300 text-xs leading-relaxed mb-4">
                    {trainer.bio}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-1.5 pt-3 border-t border-white/5">
                    {trainer.achievements.slice(0, 2).map((ach, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-[11px] text-zinc-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#CCFF00] shrink-0" />
                        <span className="truncate">{ach}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Book Session CTA */}
                <div className="mt-6 pt-4 border-t border-white/10">
                  <button
                    id={`book-trainer-${trainer.id}-btn`}
                    onClick={() => onBookTrainer(trainer.name)}
                    className="w-full py-3 rounded-xl bg-white/5 hover:bg-[#CCFF00] text-zinc-200 hover:text-black font-black text-xs uppercase tracking-wider border border-white/10 hover:border-[#CCFF00] transition-all flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-[#CCFF00]/20"
                  >
                    <Calendar className="w-4 h-4 text-[#CCFF00] group-hover:text-black" />
                    <span>Book 1-on-1 Assessment</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
