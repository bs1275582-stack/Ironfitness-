import React from 'react';
import { X, Flame, Clock, Calendar, User, ShieldCheck, ArrowRight, CheckCircle2, Award } from 'lucide-react';
import { Program } from '../types';

interface ProgramDetailModalProps {
  program: Program | null;
  onClose: () => void;
  onEnroll: (programTitle: string) => void;
}

export const ProgramDetailModal: React.FC<ProgramDetailModalProps> = ({ program, onClose, onEnroll }) => {
  if (!program) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl rounded-3xl bg-[#111111] border border-white/15 overflow-hidden shadow-2xl max-h-[90vh] flex flex-col">
        
        {/* Header Image with close button */}
        <div className="relative h-60 w-full shrink-0 bg-black">
          <img
            src={program.image}
            alt={program.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-black/60" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/60 hover:bg-black text-zinc-300 hover:text-white border border-white/10 transition-colors z-20"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6">
            <span className="px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-wider bg-[#CCFF00] text-black">
              {program.category.toUpperCase()} PROTOCOL
            </span>
            <h3 className="font-heading text-3xl sm:text-4xl font-black text-white uppercase tracking-tight mt-1">
              {program.title}
            </h3>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 text-xs sm:text-sm">
          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-3 gap-3 p-3.5 rounded-2xl bg-black/40 border border-white/10 text-center">
            <div>
              <span className="text-[10px] text-zinc-400 font-bold uppercase">Duration</span>
              <div className="font-bold text-white mt-0.5">{program.duration}</div>
            </div>
            <div>
              <span className="text-[10px] text-zinc-400 font-bold uppercase">Calorie Burn</span>
              <div className="font-bold text-[#CCFF00] mt-0.5">{program.caloriesBurn}</div>
            </div>
            <div>
              <span className="text-[10px] text-zinc-400 font-bold uppercase">Intensity</span>
              <div className="font-bold text-amber-400 mt-0.5">{program.intensity}</div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2">
              Program Architecture
            </h4>
            <p className="text-zinc-300 leading-relaxed">
              {program.description}
            </p>
          </div>

          {/* Target Audience */}
          <div>
            <h4 className="text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1">
              Who is this designed for?
            </h4>
            <p className="text-zinc-400">
              {program.targetAudience}
            </p>
          </div>

          {/* Program Features */}
          <div>
            <h4 className="text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2">
              What's Included in Every Session:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {program.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/5 text-xs text-zinc-200">
                  <CheckCircle2 className="w-4 h-4 text-[#CCFF00] shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Schedule & Coach */}
          <div className="p-4 rounded-2xl bg-black border border-white/10 space-y-2">
            <div className="flex items-center gap-2 text-xs text-zinc-300">
              <Calendar className="w-4 h-4 text-[#CCFF00]" />
              <span className="font-bold text-white">Class Schedule:</span>
              <span>{program.schedule}</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-zinc-300">
              <User className="w-4 h-4 text-[#CCFF00]" />
              <span className="font-bold text-white">Lead Master Coach:</span>
              <span>{program.leadCoach}</span>
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-6 border-t border-white/10 bg-[#050505] flex items-center gap-4">
          <button
            onClick={onClose}
            className="px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white font-bold text-xs uppercase tracking-wider"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onEnroll(program.title);
            }}
            className="flex-1 py-3.5 px-6 rounded-xl bg-[#CCFF00] hover:bg-[#b8e600] text-black font-black text-xs uppercase tracking-wider shadow-lg shadow-[#CCFF00]/30 transition-all flex items-center justify-center gap-2"
          >
            <span>Enroll in {program.title}</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>
      </div>
    </div>
  );
};
