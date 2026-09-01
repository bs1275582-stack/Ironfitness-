import React, { useState } from 'react';
import { Calculator, Flame, Activity, ArrowRight, Sparkles, CheckCircle2, RotateCcw } from 'lucide-react';
import confetti from 'canvas-confetti';

interface FitnessCalculatorProps {
  onSelectRecommendedProgram: (programName: string) => void;
}

export const FitnessCalculator: React.FC<FitnessCalculatorProps> = ({ onSelectRecommendedProgram }) => {
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [age, setAge] = useState<number>(28);
  const [heightCm, setHeightCm] = useState<number>(175);
  const [weightKg, setWeightKg] = useState<number>(76);
  const [activity, setActivity] = useState<number>(1.55); // moderate activity
  const [goal, setGoal] = useState<'fat_loss' | 'muscle_gain' | 'performance'>('muscle_gain');
  const [calculated, setCalculated] = useState<boolean>(true);

  // Math Calculations
  const heightM = heightCm / 100;
  const bmi = Number((weightKg / (heightM * heightM)).toFixed(1));

  // Mifflin-St Jeor Equation for BMR
  const bmr = gender === 'male'
    ? Math.round(10 * weightKg + 6.25 * heightCm - 5 * age + 5)
    : Math.round(10 * weightKg + 6.25 * heightCm - 5 * age - 161);

  const tdee = Math.round(bmr * activity);

  let targetCalories = tdee;
  let proteinGrams = Math.round(weightKg * 2.0); // 2g per kg
  let recommendedProgram = 'Strength & Conditioning';
  let recommendedPlan = 'Pro Plan (₹1,999/mo)';

  if (goal === 'fat_loss') {
    targetCalories = Math.round(tdee * 0.80); // 20% deficit
    proteinGrams = Math.round(weightKg * 2.2);
    recommendedProgram = 'Weight Loss & MetCon';
    recommendedPlan = 'Pro Plan (₹1,999/mo)';
  } else if (goal === 'muscle_gain') {
    targetCalories = Math.round(tdee * 1.10); // 10% surplus
    proteinGrams = Math.round(weightKg * 2.0);
    recommendedProgram = 'Strength & Conditioning';
    recommendedPlan = 'Pro Plan or Elite Plan';
  } else {
    targetCalories = tdee;
    proteinGrams = Math.round(weightKg * 1.8);
    recommendedProgram = 'Cross Training & Functional';
    recommendedPlan = 'Pro Plan (₹1,999/mo)';
  }

  const getBmiCategory = (val: number) => {
    if (val < 18.5) return { text: 'Underweight', color: 'text-amber-400' };
    if (val < 24.9) return { text: 'Optimal Fitness Range', color: 'text-emerald-400' };
    if (val < 29.9) return { text: 'Overweight / Muscle Density', color: 'text-amber-400' };
    return { text: 'High Body Composition', color: 'text-[#FF3B30]' };
  };

  const bmiInfo = getBmiCategory(bmi);

  const handleRecalculate = () => {
    setCalculated(true);
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#FF3B30', '#CCFF00', '#FFFFFF']
    });
  };

  return (
    <section id="calculator" className="py-20 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-[#111111] border border-white/10 p-6 sm:p-10 shadow-2xl">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10 pb-6 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111111] border border-white/10 text-[#CCFF00] text-xs font-black uppercase tracking-widest mb-2">
                <Calculator className="w-3.5 h-3.5" />
                <span>INTERACTIVE FITNESS INTELLIGENCE</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight">
                CALCULATE YOUR TARGET CALORIES & PLAN
              </h2>
            </div>
            <p className="text-zinc-400 text-xs sm:text-sm max-w-md">
              Input your current baseline to receive a personalized metabolic breakdown and the exact IronForge training protocol suited for your genetics.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Input Controls */}
            <div className="lg:col-span-6 space-y-5">
              {/* Gender & Goal Toggle */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1.5">
                    Gender
                  </label>
                  <div className="grid grid-cols-2 gap-2 bg-black/40 p-1 rounded-xl border border-white/10">
                    <button
                      type="button"
                      onClick={() => setGender('male')}
                      className={`py-2 text-xs font-bold uppercase rounded-lg transition-all ${
                        gender === 'male' ? 'bg-[#CCFF00] text-black font-black' : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      Male
                    </button>
                    <button
                      type="button"
                      onClick={() => setGender('female')}
                      className={`py-2 text-xs font-bold uppercase rounded-lg transition-all ${
                        gender === 'female' ? 'bg-[#CCFF00] text-black font-black' : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      Female
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1.5">
                    Age ({age} yrs)
                  </label>
                  <input
                    type="range"
                    min="16"
                    max="75"
                    value={age}
                    onChange={(e) => setAge(Number(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#CCFF00] mt-3"
                  />
                </div>
              </div>

              {/* Height & Weight Sliders */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-black/40 border border-white/10">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold text-zinc-300 uppercase">Height</span>
                    <span className="text-xs font-mono font-bold text-[#CCFF00]">{heightCm} cm</span>
                  </div>
                  <input
                    type="range"
                    min="140"
                    max="215"
                    value={heightCm}
                    onChange={(e) => setHeightCm(Number(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#CCFF00]"
                  />
                </div>

                <div className="p-4 rounded-xl bg-black/40 border border-white/10">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold text-zinc-300 uppercase">Weight</span>
                    <span className="text-xs font-mono font-bold text-[#CCFF00]">{weightKg} kg</span>
                  </div>
                  <input
                    type="range"
                    min="40"
                    max="140"
                    value={weightKg}
                    onChange={(e) => setWeightKg(Number(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#CCFF00]"
                  />
                </div>
              </div>

              {/* Fitness Goal */}
              <div>
                <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2">
                  Primary Transformation Objective
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setGoal('fat_loss')}
                    className={`p-3 rounded-xl border text-xs font-bold uppercase tracking-wider transition-all text-center ${
                      goal === 'fat_loss'
                        ? 'bg-[#CCFF00] text-black font-black border-[#CCFF00] shadow-md shadow-[#CCFF00]/30'
                        : 'bg-black/40 border-white/10 text-zinc-300 hover:text-white'
                    }`}
                  >
                    Fat Loss / MetCon
                  </button>
                  <button
                    type="button"
                    onClick={() => setGoal('muscle_gain')}
                    className={`p-3 rounded-xl border text-xs font-bold uppercase tracking-wider transition-all text-center ${
                      goal === 'muscle_gain'
                        ? 'bg-[#CCFF00] text-black font-black border-[#CCFF00] shadow-md shadow-[#CCFF00]/30'
                        : 'bg-black/40 border-white/10 text-zinc-300 hover:text-white'
                    }`}
                  >
                    Lean Hypertrophy
                  </button>
                  <button
                    type="button"
                    onClick={() => setGoal('performance')}
                    className={`p-3 rounded-xl border text-xs font-bold uppercase tracking-wider transition-all text-center ${
                      goal === 'performance'
                        ? 'bg-[#CCFF00] text-black font-black border-[#CCFF00] shadow-md shadow-[#CCFF00]/30'
                        : 'bg-black/40 border-white/10 text-zinc-300 hover:text-white'
                    }`}
                  >
                    Athletic Power
                  </button>
                </div>
              </div>
            </div>

            {/* Live Calculated Results Box */}
            <div className="lg:col-span-6 bg-black/60 rounded-2xl border border-white/15 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                    PERSONALIZED TARGET BLUEPRINT
                  </span>
                  <span className="px-2.5 py-1 rounded bg-[#CCFF00]/20 text-[#CCFF00] text-[10px] font-black uppercase">
                    Calculated Live
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-[10px] text-zinc-400 font-bold uppercase">Daily Calories</div>
                    <div className="font-heading text-3xl font-black text-white mt-1">
                      {targetCalories.toLocaleString()} <span className="text-xs font-sans text-zinc-400">kcal</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-[10px] text-zinc-400 font-bold uppercase">Protein Target</div>
                    <div className="font-heading text-3xl font-black text-[#CCFF00] mt-1">
                      {proteinGrams} <span className="text-xs font-sans text-zinc-400">g/day</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 col-span-2 sm:col-span-1">
                    <div className="text-[10px] text-zinc-400 font-bold uppercase">BMI Score</div>
                    <div className="font-heading text-3xl font-black text-white mt-1">
                      {bmi}
                    </div>
                    <div className={`text-[10px] font-bold ${bmiInfo.color} mt-0.5 truncate`}>
                      {bmiInfo.text}
                    </div>
                  </div>
                </div>

                {/* Recommended Protocol */}
                <div className="p-4 rounded-xl bg-[#CCFF00]/10 border border-[#CCFF00]/30 mb-6">
                  <div className="flex items-center gap-2 text-xs font-black text-[#CCFF00] uppercase mb-1">
                    <Sparkles className="w-4 h-4" />
                    <span>RECOMMENDED IRONFORGE PROTOCOL</span>
                  </div>
                  <div className="font-heading text-2xl font-black text-white uppercase">
                    {recommendedProgram}
                  </div>
                  <p className="text-xs text-zinc-300 mt-1">
                    Best matched with our <span className="text-white font-bold">{recommendedPlan}</span> for maximum progression & coach oversight.
                  </p>
                </div>
              </div>

              <button
                id="apply-calculated-plan-btn"
                onClick={() => {
                  handleRecalculate();
                  onSelectRecommendedProgram(recommendedProgram);
                }}
                className="w-full py-3.5 rounded-xl bg-[#CCFF00] hover:bg-[#b8e600] text-black font-black text-xs uppercase tracking-wider shadow-lg shadow-[#CCFF00]/25 transition-all flex items-center justify-center gap-2 hover:scale-105"
              >
                <span>Enroll in {recommendedProgram}</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
