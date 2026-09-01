import React, { useState } from 'react';
import { Dumbbell, Zap, Flame, Shield, Award, CheckCircle2, ArrowRight, HeartPulse, Sparkles } from 'lucide-react';
import { FACILITY_FEATURES } from '../data/gymData';

interface AboutSectionProps {
  onOpenVipModal: () => void;
  onExplorePrograms: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenVipModal, onExplorePrograms }) => {
  const [activeTab, setActiveTab] = useState<'weights' | 'cardio' | 'recovery' | 'coaching'>('weights');

  const facilityHighlights = [
    {
      id: 'weights',
      title: 'Olympic Lifting & Heavy Iron',
      tag: 'ZONE 01',
      description: 'Custom-built power cages, deadlift platforms with sound-dampening acoustic drop zones, calibrated Eleiko discs, and dumbbells ranging from 2.5 kg up to 60 kg.',
      image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1000&q=80',
      specs: ['8 Olympic Barbell Racks', 'Calibrated Steel Plates', 'Competition Benches', 'Chalk Stations Available']
    },
    {
      id: 'cardio',
      title: 'High-Performance Cardio Deck',
      tag: 'ZONE 02',
      description: 'Engineered for conditioning without joint destruction. Features curved non-motorized Woodway treadmills, SkiErgs, Concept2 rowers, and air-resistance assault bikes.',
      image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=1000&q=80',
      specs: ['Woodway Curve Treadmills', 'Concept2 Rowers & SkiErgs', 'Assault Air Bikes', 'Heart-Rate Sync Displays']
    },
    {
      id: 'recovery',
      title: 'Infrared Sauna & Cold Plunge Suite',
      tag: 'ZONE 03',
      description: 'Accelerate muscular repair and reduce systemic inflammation with our 4°C chilled ice tubs, cedarwood infrared sauna, and dedicated massage gun recovery lounge.',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80',
      specs: ['Twin 4°C Ice Baths', 'Finnish Dry Sauna', 'Hyperice Massage Guns', 'Private Shower Suites']
    },
    {
      id: 'coaching',
      title: 'Biomechanics & Assessment Lab',
      tag: 'ZONE 04',
      description: 'Science over guesswork. Get full-body InBody 770 impedance scans, digital posture assessments, and periodic mobility screenings with our master coaches.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1000&q=80',
      specs: ['InBody 770 Segmental Scan', 'Postural Screening', 'Custom Macro Architecture', 'Grip & Force Testing']
    }
  ];

  const currentHighlight = facilityHighlights.find(h => h.id === activeTab) || facilityHighlights[0];

  return (
    <section id="about" className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Background Lighting Elements */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-[#CCFF00]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -left-40 w-96 h-96 bg-[#CCFF00]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#111111] border border-white/10 text-[#CCFF00] text-xs font-black uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>WHO WE ARE</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight">
            NOT JUST A GYM. <br />
            <span className="text-[#CCFF00]">
              A TEMPLE OF HUMAN TRANSFORMATION.
            </span>
          </h2>
          <p className="mt-5 text-zinc-300 text-base sm:text-lg leading-relaxed">
            IronForge was founded with a singular conviction: to eliminate fitness gimmicks and provide an uncompromising training ground where ambition meets science, elite coaching, and world-class equipment. We empower people of all fitness levels to build strength, resilience, and lifelong vitality.
          </p>
        </div>

        {/* 3 Core Feature Cards (Explicitly requested by user) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {/* Card 1: Expert Personal Trainers */}
          <div
            id="feature-card-trainers"
            className="glass-card glass-card-hover rounded-2xl p-8 border border-white/10 relative group overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#CCFF00]/5 rounded-full blur-2xl group-hover:bg-[#CCFF00]/15 transition-all duration-300" />
            <div className="w-14 h-14 rounded-2xl bg-[#CCFF00] flex items-center justify-center text-black shadow-lg shadow-[#CCFF00]/25 mb-6 group-hover:scale-110 transition-transform duration-300">
              <Dumbbell className="w-7 h-7 stroke-[2.5]" />
            </div>
            <div className="text-xs font-black uppercase tracking-widest text-[#CCFF00] mb-2">01 / WORLD-CLASS MENTORSHIP</div>
            <h3 className="font-heading text-2xl font-bold text-white uppercase tracking-wide mb-3">
              Expert Personal Trainers
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              Certified by internationally accredited boards (NSCA, ISSA, EXOS). Our coaches don't just count reps; they analyze biomechanics, adjust movement patterns, and build customized roadmaps tailored to your physiological blueprint.
            </p>
            <ul className="space-y-2 text-xs text-zinc-300 font-medium border-t border-white/10 pt-4">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#CCFF00]" />
                <span>1-on-1 Biomechanics & posture correction</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#CCFF00]" />
                <span>Continuous progression tracking & accountability</span>
              </li>
            </ul>
          </div>

          {/* Card 2: State-of-the-Art Equipment */}
          <div
            id="feature-card-equipment"
            className="glass-card glass-card-hover rounded-2xl p-8 border border-white/10 relative group overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#CCFF00]/10 rounded-full blur-2xl group-hover:bg-[#CCFF00]/20 transition-all duration-300" />
            <div className="w-14 h-14 rounded-2xl bg-[#CCFF00] flex items-center justify-center text-black shadow-lg shadow-[#CCFF00]/25 mb-6 group-hover:scale-110 transition-transform duration-300">
              <Zap className="w-7 h-7 stroke-[2.5]" />
            </div>
            <div className="text-xs font-black uppercase tracking-widest text-[#CCFF00] mb-2">02 / UNCOMPROMISED GEAR</div>
            <h3 className="font-heading text-2xl font-bold text-white uppercase tracking-wide mb-3">
              State-of-the-Art Equipment
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              Fitted with over ₹3.5 Cr+ worth of top-tier commercial machinery. Eleiko competition barbells, Rogue power rigs, Keiser pneumatic resistance, and specialized strength machines that minimize joint strain while maximizing tension.
            </p>
            <ul className="space-y-2 text-xs text-zinc-300 font-medium border-t border-white/10 pt-4">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#CCFF00]" />
                <span>Eleiko IPF-certified Olympic bars & plates</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#CCFF00]" />
                <span>Woodway non-motorized high-speed cardio</span>
              </li>
            </ul>
          </div>

          {/* Card 3: Results-Driven Programs */}
          <div
            id="feature-card-programs"
            className="glass-card glass-card-hover rounded-2xl p-8 border border-white/10 relative group overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#CCFF00]/5 rounded-full blur-2xl group-hover:bg-[#CCFF00]/15 transition-all duration-300" />
            <div className="w-14 h-14 rounded-2xl bg-[#CCFF00] flex items-center justify-center text-black shadow-lg shadow-[#CCFF00]/25 mb-6 group-hover:scale-110 transition-transform duration-300">
              <Flame className="w-7 h-7 stroke-[2.5]" />
            </div>
            <div className="text-xs font-black uppercase tracking-widest text-[#CCFF00] mb-2">03 / SCIENTIFIC PROTOCOLS</div>
            <h3 className="font-heading text-2xl font-bold text-white uppercase tracking-wide mb-3">
              Results-Driven Programs
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              No generic cookie-cutter routines. Every program blends progressive resistance, metabolic acceleration, and nutritional guidance calibrated to deliver measurable fat loss, hypertrophy, and unstoppable functional endurance.
            </p>
            <ul className="space-y-2 text-xs text-zinc-300 font-medium border-t border-white/10 pt-4">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#CCFF00]" />
                <span>Periodic InBody 770 composition scans</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#CCFF00]" />
                <span>Periodized training phases & deload weeks</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Facility Showcase Tabs & Virtual Tour Component */}
        <div className="rounded-3xl bg-[#111111] border border-white/10 p-6 sm:p-10 shadow-2xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8 border-b border-white/10 pb-6">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-[#CCFF00]">FACILITY SPOTLIGHT</span>
              <h3 className="font-heading text-3xl sm:text-4xl font-extrabold text-white uppercase mt-1">
                DESIGNED FOR UNCOMPROMISED PERFORMANCE
              </h3>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap gap-2">
              {facilityHighlights.map((tab) => (
                <button
                  key={tab.id}
                  id={`tab-facility-${tab.id}`}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-[#CCFF00] text-black shadow-lg shadow-[#CCFF00]/30 font-black'
                      : 'bg-white/5 text-zinc-300 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {tab.tag}: {tab.id.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content Display */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-block px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono font-semibold text-[#CCFF00]">
                {currentHighlight.tag} SPECIFICATION
              </div>
              <h4 className="font-heading text-3xl font-extrabold text-white uppercase">
                {currentHighlight.title}
              </h4>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                {currentHighlight.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {currentHighlight.specs.map((spec, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-3 rounded-lg bg-black/40 border border-white/5 text-xs text-zinc-200">
                    <CheckCircle2 className="w-4 h-4 text-[#CCFF00] shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap gap-3">
                <button
                  id="about-claim-pass-btn"
                  onClick={onOpenVipModal}
                  className="px-6 py-3 rounded-xl bg-[#CCFF00] hover:bg-[#b8e600] text-black font-black text-xs uppercase tracking-wider transition-all shadow-lg shadow-[#CCFF00]/25 hover:scale-105"
                >
                  Experience In Person (Free Pass)
                </button>
                <button
                  id="about-view-programs-btn"
                  onClick={onExplorePrograms}
                  className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-200 hover:text-white font-bold text-xs uppercase tracking-wider border border-white/10 transition-all"
                >
                  View Training Programs
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 relative group overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
              <img
                src={currentHighlight.image}
                alt={currentHighlight.title}
                className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 text-white flex justify-between items-center">
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-300">Live Facility Walkthrough</span>
                <span className="text-xs font-semibold text-[#CCFF00] flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-[#CCFF00] animate-pulse"></span>
                  Open 24 Hours
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
