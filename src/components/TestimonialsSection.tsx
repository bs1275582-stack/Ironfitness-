import React from 'react';
import { Star, Quote, CheckCircle2, ShieldCheck, MessageSquare } from 'lucide-react';
import { TESTIMONIALS } from '../data/gymData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Trust Badges */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#111111] border border-white/10 text-[#CCFF00] text-xs font-black uppercase tracking-widest mb-3">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>COMMUNITY VOICES</span>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight">
              PROVEN BY OUR <br />
              <span className="text-[#CCFF00]">
                IRONFORGE MEMBERS
              </span>
            </h2>
          </div>

          {/* Google Review Badge Box */}
          <div className="p-4 rounded-2xl bg-[#111111] border border-white/10 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center font-black text-black text-xl shadow-md">
              G
            </div>
            <div>
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
                <span className="font-black text-white text-sm ml-1">4.9 / 5.0</span>
              </div>
              <div className="text-xs text-zinc-400 mt-0.5">
                Over 380+ Verified Google Reviews
              </div>
            </div>
          </div>
        </div>

        {/* 3 Client Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              id={`testimonial-card-${testimonial.id}`}
              className="rounded-3xl p-8 bg-[#111111] border border-white/10 flex flex-col justify-between group hover:border-[#CCFF00]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#CCFF00]/10"
            >
              <div>
                {/* Rating & Quote Icon */}
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center text-amber-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#CCFF00]/30 group-hover:text-[#CCFF00]/60 transition-colors" />
                </div>

                {/* Review Quote */}
                <p className="text-zinc-300 text-sm leading-relaxed mb-6 font-normal">
                  "{testimonial.review}"
                </p>
              </div>

              {/* User Profile Footer */}
              <div className="pt-5 border-t border-white/10 flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-[#CCFF00]/30"
                  loading="lazy"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-bold text-white text-sm">{testimonial.name}</h4>
                    {testimonial.verifiedMember && (
                      <ShieldCheck className="w-4 h-4 text-emerald-400" title="Verified Member" />
                    )}
                  </div>
                  <p className="text-xs text-zinc-400">{testimonial.role}</p>
                  <p className="text-[10px] text-[#CCFF00] font-bold mt-0.5">{testimonial.joinedDate}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
