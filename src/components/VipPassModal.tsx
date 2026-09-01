import React, { useState } from 'react';
import { X, Flame, ShieldCheck, QrCode, CheckCircle2, Download, Sparkles, Clock, Calendar } from 'lucide-react';
import confetti from 'canvas-confetti';
import { GYM_INFO } from '../data/gymData';

interface VipPassModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VipPassModal: React.FC<VipPassModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [fitnessLevel, setFitnessLevel] = useState('Intermediate');
  const [passGenerated, setPassGenerated] = useState(false);
  const [passCode, setPassCode] = useState('');

  if (!isOpen) return null;

  const handleGeneratePass = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) return;

    // Generate random pass code
    const code = `IF-VIP-${Math.floor(100000 + Math.random() * 900000)}`;
    setPassCode(code);
    setPassGenerated(true);

    confetti({
      particleCount: 80,
      spread: 90,
      origin: { y: 0.5 },
      colors: ['#FF3B30', '#CCFF00', '#FFFFFF', '#FFA500']
    });
  };

  const handleReset = () => {
    setPassGenerated(false);
    setName('');
    setEmail('');
    setPhone('');
  };

  const today = new Date();
  const expiryDate = new Date();
  expiryDate.setDate(today.getDate() + 7); // Valid for 7 days to activate

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg rounded-3xl bg-[#111111] border border-white/15 p-6 sm:p-8 shadow-2xl overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
          aria-label="Close VIP Pass Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!passGenerated ? (
          <div>
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#111111] border border-white/10 text-[#CCFF00] text-[11px] font-black uppercase tracking-widest mb-3 inline-flex">
              <Sparkles className="w-3.5 h-3.5" />
              <span>COMPLIMENTARY ACCESS</span>
            </div>

            <h3 className="font-heading text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
              GET YOUR 3-DAY VIP GUEST PASS
            </h3>
            <p className="text-zinc-300 text-xs sm:text-sm mt-1 leading-relaxed">
              Experience the full power of IronForge Fitness for 3 consecutive days with zero financial commitment.
            </p>

            <form onSubmit={handleGeneratePass} className="mt-6 space-y-4">
              <div>
                <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Arjun Kapoor"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-[#CCFF00]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. arjun@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-[#CCFF00]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1">
                    Mobile Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-[#CCFF00]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1">
                  Fitness Experience
                </label>
                <select
                  value={fitnessLevel}
                  onChange={(e) => setFitnessLevel(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white text-xs focus:outline-none focus:border-[#CCFF00]"
                >
                  <option value="Beginner">Beginner (Looking for guidance)</option>
                  <option value="Intermediate">Intermediate (Consistent lifter)</option>
                  <option value="Advanced">Advanced / Athlete</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-[#CCFF00] hover:bg-[#b8e600] text-black font-heading text-lg font-black uppercase tracking-wider shadow-xl shadow-[#CCFF00]/30 transition-all flex items-center justify-center gap-2 mt-2"
              >
                <Flame className="w-5 h-5 fill-current" />
                <span>Generate Instant VIP Pass</span>
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-zinc-400 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>No credit card required. Pass arrives instantly.</span>
              </div>
            </form>
          </div>
        ) : (
          /* Generated Digital VIP Pass Card */
          <div className="space-y-6 animate-fadeIn text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase">
              <CheckCircle2 className="w-4 h-4" />
              <span>VIP PASS ACTIVATED & READY</span>
            </div>

            {/* Realistic Digital Pass Badge */}
            <div className="rounded-3xl bg-black border-2 border-[#CCFF00] p-6 text-left relative overflow-hidden shadow-2xl">
              {/* Watermark / Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#CCFF00]/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex justify-between items-start border-b border-white/10 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#CCFF00] flex items-center justify-center text-black font-black text-sm">
                    <Flame className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <h4 className="font-heading text-lg font-black text-white tracking-wider">IRONFORGE</h4>
                    <span className="text-[9px] font-black uppercase tracking-widest text-[#CCFF00]">3-DAY VIP GUEST PASS</span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] font-mono text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    STATUS: ACTIVE
                  </span>
                </div>
              </div>

              {/* Pass Details */}
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-[10px] text-zinc-400 uppercase font-bold">Pass Holder</span>
                  <p className="font-bold text-white text-sm truncate">{name}</p>
                </div>
                <div>
                  <span className="text-[10px] text-zinc-400 uppercase font-bold">Pass Code</span>
                  <p className="font-mono font-bold text-[#CCFF00] text-sm">{passCode}</p>
                </div>
                <div>
                  <span className="text-[10px] text-zinc-400 uppercase font-bold">Access Level</span>
                  <p className="font-semibold text-zinc-200">All Zones + 1 Class</p>
                </div>
                <div>
                  <span className="text-[10px] text-zinc-400 uppercase font-bold">Valid Until</span>
                  <p className="font-semibold text-zinc-200">{expiryDate.toLocaleDateString()}</p>
                </div>
              </div>

              {/* Barcode Mockup */}
              <div className="mt-5 pt-4 border-t border-white/10 flex justify-between items-center bg-[#111111] p-3 rounded-xl">
                <div className="space-y-1">
                  <div className="flex gap-1 h-8 items-end">
                    {[3, 1, 4, 2, 5, 2, 1, 3, 2, 4, 1, 3, 5, 2, 4, 1, 2, 3, 5, 1, 4].map((h, i) => (
                      <div
                        key={i}
                        className="bg-white"
                        style={{
                          width: `${(i % 3 === 0 ? 3 : 1.5)}px`,
                          height: `${14 + h * 3}px`
                        }}
                      />
                    ))}
                  </div>
                  <span className="text-[9px] font-mono text-zinc-400 block tracking-widest">{passCode}</span>
                </div>
                <div className="w-12 h-12 rounded bg-white p-1 flex items-center justify-center">
                  <QrCode className="w-10 h-10 text-black" />
                </div>
              </div>
            </div>

            <p className="text-xs text-zinc-400 leading-relaxed">
              Show this screen or quote your pass code <span className="text-white font-mono font-bold">{passCode}</span> at the reception desk to claim your keycard.
            </p>

            <div className="flex gap-3">
              <button
                onClick={onClose}
                className="flex-1 py-3 rounded-xl bg-[#CCFF00] hover:bg-[#b8e600] text-black font-black text-xs uppercase tracking-wider transition-colors"
              >
                Done & Saved
              </button>
              <button
                onClick={handleReset}
                className="py-3 px-4 rounded-xl bg-white/5 text-zinc-300 font-bold text-xs uppercase tracking-wider hover:bg-white/10 transition-colors"
              >
                Generate Another
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
