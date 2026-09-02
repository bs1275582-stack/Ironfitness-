import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, ShieldCheck, ExternalLink, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { GYM_INFO } from '../data/gymData';

interface ContactSectionProps {
  initialProgramOrPlan?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialProgramOrPlan }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    goal: initialProgramOrPlan || 'General Strength & Conditioning',
    preferredTime: 'Morning (6 AM - 10 AM)',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      confetti({
        particleCount: 70,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#FF3B30', '#CCFF00', '#FFFFFF']
      });
    }, 800);
  };

  return (
    <section id="contact" className="py-24 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#111111] border border-white/10 text-[#CCFF00] text-xs font-black uppercase tracking-widest mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>CONNECT WITH THE FORGE</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight">
            BOOK A FREE <br />
            <span className="text-[#CCFF00]">
              COACHING CONSULTATION
            </span>
          </h2>
          <p className="mt-4 text-zinc-300 text-sm sm:text-base leading-relaxed">
            Visit the facility, test the Olympic equipment, and receive a 1-on-1 body composition assessment with our senior coaches.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Information & Map Placeholder */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl p-6 sm:p-8 border border-white/10 space-y-6 bg-[#111111]">
              <h3 className="font-heading text-2xl font-bold text-white uppercase tracking-wide">
                FACILITY DETAILS
              </h3>

              <div className="space-y-4 text-xs text-zinc-300">
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#CCFF00]/15 border border-[#CCFF00]/30 flex items-center justify-center text-[#CCFF00] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white uppercase text-xs">Gym Address</h4>
                    <p className="text-zinc-400 mt-0.5 leading-relaxed">{GYM_INFO.address}</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#CCFF00]/15 border border-[#CCFF00]/30 flex items-center justify-center text-[#CCFF00] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white uppercase text-xs">Phone Support</h4>
                    <p className="text-zinc-400 mt-0.5">
                      <a href={`tel:${GYM_INFO.phone.replace(/\s+/g, '')}`} className="text-zinc-200 hover:text-[#CCFF00] font-mono transition-colors">
                        {GYM_INFO.phone}
                      </a>
                      <span className="mx-1.5 text-zinc-600">/</span>
                      <a href={`tel:${GYM_INFO.altPhone.replace(/\s+/g, '')}`} className="text-zinc-400 hover:text-white font-mono transition-colors">
                        {GYM_INFO.altPhone}
                      </a>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#CCFF00]/15 border border-[#CCFF00]/30 flex items-center justify-center text-[#CCFF00] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white uppercase text-xs">Email Concierge</h4>
                    <p className="text-zinc-400 mt-0.5">{GYM_INFO.email}</p>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white uppercase text-xs">Access Hours</h4>
                    <p className="text-emerald-400 font-semibold mt-0.5">{GYM_INFO.hours.general}</p>
                    <p className="text-zinc-400 text-[11px] mt-0.5">Staffed: {GYM_INFO.hours.staffed}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Stylized Map Placeholder */}
            <div className="rounded-3xl border border-white/10 overflow-hidden bg-[#111111] p-5 relative shadow-xl">
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-300">
                  Location & Transit
                </span>
                <span className="text-[10px] font-mono text-[#CCFF00]">100+ Free Parking Slots</span>
              </div>

              {/* Styled interactive dark canvas map mockup */}
              <div className="h-48 rounded-2xl bg-black relative overflow-hidden border border-white/5 flex items-center justify-center group">
                {/* Map Grid Graphic */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
                
                {/* Road representation lines */}
                <div className="absolute w-full h-2 bg-white/10 top-1/2 -translate-y-1/2 transform -rotate-12" />
                <div className="absolute h-full w-2 bg-white/10 left-1/2 -translate-x-1/2 transform rotate-6" />

                {/* Central Pin */}
                <div className="relative z-10 flex flex-col items-center animate-bounce">
                  <div className="px-3 py-1 rounded-full bg-[#CCFF00] text-black text-[11px] font-black uppercase shadow-lg shadow-[#CCFF00]/50 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>IRONFORGE HQ</span>
                  </div>
                  <div className="w-2 h-2 bg-[#CCFF00] rotate-45 -mt-1" />
                </div>

                <div className="absolute bottom-2 right-2">
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-black/80 hover:bg-[#CCFF00] hover:text-black text-white text-[10px] font-black uppercase tracking-wider border border-white/10 flex items-center gap-1 transition-colors"
                  >
                    <span>Get Directions</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Consultation Booking Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl p-8 sm:p-10 border border-white/10 shadow-2xl bg-[#111111]">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading text-3xl font-extrabold text-white uppercase">
                    CONSULTATION REQUEST RECEIVED!
                  </h3>
                  <p className="text-zinc-300 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-white font-bold">{formData.name}</span>. Our Head Strength Coach will contact you at <span className="text-[#CCFF00] font-mono font-bold">{formData.phone}</span> within 2 hours to confirm your session.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold uppercase tracking-wider text-white"
                    >
                      Book Another Session
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="font-heading text-2xl sm:text-3xl font-black text-white uppercase tracking-wide">
                      SCHEDULE YOUR VISIT
                    </h3>
                    <p className="text-zinc-400 text-xs mt-1">
                      Fill out the details below. Our concierge will prepare your visitor badge.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Verma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-[#CCFF00] focus:ring-1 focus:ring-[#CCFF00] transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. rahul@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-[#CCFF00] focus:ring-1 focus:ring-[#CCFF00] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-[#CCFF00] focus:ring-1 focus:ring-[#CCFF00] transition-colors"
                      />
                    </div>

                    {/* Preferred Slot */}
                    <div>
                      <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1.5">
                        Preferred Tour Slot
                      </label>
                      <select
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white text-xs focus:outline-none focus:border-[#CCFF00] transition-colors"
                      >
                        <option value="Morning (6 AM - 10 AM)">Morning (6 AM - 10 AM)</option>
                        <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
                        <option value="Evening (5 PM - 9 PM)">Evening (5 PM - 9 PM)</option>
                        <option value="Weekend Special">Weekend Special</option>
                      </select>
                    </div>
                  </div>

                  {/* Goal / Interest */}
                  <div>
                    <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1.5">
                      Primary Fitness Goal or Program Interest
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Strength & Conditioning / 1-on-1 Personal Training"
                      value={formData.goal}
                      onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-[#CCFF00] transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1.5">
                      Message / Special Requests (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your fitness history, injury concerns, or questions..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-[#CCFF00] transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-[#CCFF00] hover:bg-[#b8e600] text-black font-heading text-lg font-black uppercase tracking-wider shadow-xl shadow-[#CCFF00]/30 hover:scale-105 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
                        <span>Securing Your Slot...</span>
                      </span>
                    ) : (
                      <>
                        <span>Book a Free Consultation</span>
                        <Send className="w-4 h-4 stroke-[2.5]" />
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-zinc-400 pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Your contact information is strictly confidential. No spam guaranteed.</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
