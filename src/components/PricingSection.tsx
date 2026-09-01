import React, { useState } from 'react';
import { Check, X, Flame, Shield, Sparkles, Zap, ArrowRight, HelpCircle } from 'lucide-react';
import { PRICING_PLANS } from '../data/gymData';
import { PricingPlan } from '../types';

interface PricingSectionProps {
  onSelectPlan: (plan: PricingPlan, isAnnual: boolean) => void;
  onOpenVipModal: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan, onOpenVipModal }) => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [showComparison, setShowComparison] = useState(false);

  return (
    <section id="pricing" className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-[#CCFF00]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 -left-32 w-96 h-96 bg-[#CCFF00]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#111111] border border-white/10 text-[#CCFF00] text-xs font-black uppercase tracking-widest mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>MEMBERSHIP TIERS</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight">
            INVEST IN YOUR <br />
            <span className="text-[#CCFF00]">
              GREATEST ASSET
            </span>
          </h2>
          <p className="mt-4 text-zinc-300 text-sm sm:text-base leading-relaxed">
            Transparent pricing with zero hidden maintenance charges. Every tier includes keycard access, clean locker amenities, and our dedicated coaching environment.
          </p>

          {/* Billing Cycle Switcher */}
          <div className="mt-8 inline-flex items-center p-1.5 rounded-2xl bg-[#111111] border border-white/10 shadow-lg">
            <button
              id="billing-monthly-btn"
              onClick={() => setIsAnnual(false)}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                !isAnnual
                  ? 'bg-[#CCFF00] text-black font-black shadow-md shadow-[#CCFF00]/30'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Monthly Billing
            </button>
            <button
              id="billing-annual-btn"
              onClick={() => setIsAnnual(true)}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all ${
                isAnnual
                  ? 'bg-[#CCFF00] text-black font-black shadow-md shadow-[#CCFF00]/30'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <span>Annual Billing</span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-white text-black uppercase">
                SAVE 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid (3 Plans: Basic, Pro [MOST POPULAR], Elite) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const price = isAnnual ? plan.priceAnnual : plan.priceMonthly;
            const isPro = plan.id === 'pro';

            return (
              <div
                key={plan.id}
                id={`pricing-card-${plan.id}`}
                className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  isPro
                    ? 'bg-[#161616] border-2 border-[#CCFF00] shadow-2xl shadow-[#CCFF00]/20 lg:-translate-y-3'
                    : 'bg-[#111111] border border-white/10 hover:border-white/25 shadow-xl'
                }`}
              >
                {/* Popular Pill */}
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full text-[11px] font-black uppercase tracking-widest bg-[#CCFF00] text-black shadow-lg shadow-[#CCFF00]/30 flex items-center gap-1.5">
                      <Flame className="w-3.5 h-3.5 fill-current" />
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Plan Name & Tag */}
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h3 className="font-heading text-3xl font-extrabold text-white uppercase">
                        {plan.name}
                      </h3>
                      <p className="text-zinc-400 text-xs mt-1">{plan.description}</p>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="my-6 pb-6 border-b border-white/10">
                    <div className="flex items-baseline gap-1">
                      <span className="text-zinc-400 text-lg font-bold">₹</span>
                      <span className="font-heading text-5xl sm:text-6xl font-black text-white tracking-tight">
                        {price.toLocaleString()}
                      </span>
                      <span className="text-zinc-400 text-sm font-semibold">/ month</span>
                    </div>
                    <p className="text-[11px] text-zinc-400 mt-1">
                      {isAnnual ? 'Billed annually (₹' + (price * 12).toLocaleString() + '/yr)' : 'Billed monthly. Cancel anytime.'}
                    </p>
                  </div>

                  {/* Included Features */}
                  <div className="space-y-3 mb-8">
                    <div className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider">
                      Included in {plan.name}:
                    </div>
                    {plan.features.map((feat, idx) => (
                      <div
                        key={idx}
                        className={`flex items-start gap-3 text-xs ${
                          feat.included ? 'text-zinc-200' : 'text-zinc-500 opacity-60'
                        }`}
                      >
                        {feat.included ? (
                          <div className="w-4 h-4 rounded-full bg-[#CCFF00]/20 text-[#CCFF00] flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </div>
                        ) : (
                          <div className="w-4 h-4 rounded-full bg-white/5 text-zinc-500 flex items-center justify-center shrink-0 mt-0.5">
                            <X className="w-3 h-3" />
                          </div>
                        )}
                        <span className={feat.included ? 'font-medium' : 'line-through'}>
                          {feat.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Plan CTA Button */}
                <div className="space-y-3 pt-4">
                  <button
                    id={`select-plan-${plan.id}-btn`}
                    onClick={() => onSelectPlan(plan, isAnnual)}
                    className={`w-full py-4 rounded-xl font-heading text-lg font-black uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 ${
                      isPro
                        ? 'bg-[#CCFF00] hover:bg-[#b8e600] text-black shadow-xl shadow-[#CCFF00]/25 hover:scale-105'
                        : 'bg-white/10 hover:bg-white/20 text-white border border-white/15'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </button>

                  <div className="text-center">
                    <button
                      onClick={onOpenVipModal}
                      className="text-[11px] text-zinc-400 hover:text-[#CCFF00] underline underline-offset-4 transition-colors"
                    >
                      Or test with a Free 3-Day Trial Pass
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison Table Toggle */}
        <div className="mt-14 text-center">
          <button
            id="toggle-comparison-btn"
            onClick={() => setShowComparison(!showComparison)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold uppercase tracking-wider text-zinc-300 hover:text-white transition-all"
          >
            <span>{showComparison ? 'Hide Full Tier Comparison' : 'Compare All Features Side-by-Side'}</span>
            <HelpCircle className="w-4 h-4 text-[#CCFF00]" />
          </button>
        </div>

        {/* Detailed Comparison Matrix */}
        {showComparison && (
          <div className="mt-8 rounded-2xl bg-[#111111] border border-white/10 p-6 overflow-x-auto shadow-2xl animate-fadeIn">
            <table className="w-full text-left text-xs min-w-[600px]">
              <thead>
                <tr className="border-b border-white/10 text-zinc-400 uppercase tracking-wider">
                  <th className="py-4 px-4 font-bold">Feature</th>
                  <th className="py-4 px-4 font-bold text-center">Basic (₹999)</th>
                  <th className="py-4 px-4 font-bold text-center text-[#CCFF00]">Pro (₹1,999)</th>
                  <th className="py-4 px-4 font-bold text-center">Elite (₹3,499)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-zinc-300">
                <tr>
                  <td className="py-3 px-4 font-medium">24/7 Access to Gym Floor & Free Weights</td>
                  <td className="py-3 px-4 text-center"><Check className="w-4 h-4 text-emerald-400 mx-auto" /></td>
                  <td className="py-3 px-4 text-center"><Check className="w-4 h-4 text-emerald-400 mx-auto" /></td>
                  <td className="py-3 px-4 text-center"><Check className="w-4 h-4 text-emerald-400 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Locker & Hot Shower Access</td>
                  <td className="py-3 px-4 text-center"><Check className="w-4 h-4 text-emerald-400 mx-auto" /></td>
                  <td className="py-3 px-4 text-center"><Check className="w-4 h-4 text-emerald-400 mx-auto" /></td>
                  <td className="py-3 px-4 text-center"><Check className="w-4 h-4 text-emerald-400 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Group Fitness Studio Classes (HIIT, Spin, Yoga)</td>
                  <td className="py-3 px-4 text-center"><X className="w-4 h-4 text-zinc-600 mx-auto" /></td>
                  <td className="py-3 px-4 text-center"><Check className="w-4 h-4 text-emerald-400 mx-auto" /></td>
                  <td className="py-3 px-4 text-center"><Check className="w-4 h-4 text-emerald-400 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Macro & Nutrition Coaching Blueprint</td>
                  <td className="py-3 px-4 text-center"><X className="w-4 h-4 text-zinc-600 mx-auto" /></td>
                  <td className="py-3 px-4 text-center"><Check className="w-4 h-4 text-emerald-400 mx-auto" /></td>
                  <td className="py-3 px-4 text-center"><Check className="w-4 h-4 text-emerald-400 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">1-on-1 Dedicated Personal Trainer</td>
                  <td className="py-3 px-4 text-center"><X className="w-4 h-4 text-zinc-600 mx-auto" /></td>
                  <td className="py-3 px-4 text-center"><X className="w-4 h-4 text-zinc-600 mx-auto" /></td>
                  <td className="py-3 px-4 text-center"><span className="text-[#CCFF00] font-bold">4x / Mo Included</span></td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Infrared Sauna & Cold Plunge Spa</td>
                  <td className="py-3 px-4 text-center"><X className="w-4 h-4 text-zinc-600 mx-auto" /></td>
                  <td className="py-3 px-4 text-center"><span className="text-zinc-400">Discounted Drop-in</span></td>
                  <td className="py-3 px-4 text-center"><Check className="w-4 h-4 text-emerald-400 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Monthly InBody 770 Scans</td>
                  <td className="py-3 px-4 text-center"><X className="w-4 h-4 text-zinc-600 mx-auto" /></td>
                  <td className="py-3 px-4 text-center"><Check className="w-4 h-4 text-emerald-400 mx-auto" /></td>
                  <td className="py-3 px-4 text-center"><Check className="w-4 h-4 text-emerald-400 mx-auto" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
};
