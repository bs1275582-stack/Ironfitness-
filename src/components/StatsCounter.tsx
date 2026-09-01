import React, { useState, useEffect } from 'react';
import { Users, Dumbbell, Trophy, Clock, Sparkles, CheckCircle2 } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

export const StatsCounter: React.FC = () => {
  const [counts, setCounts] = useState({
    members: 0,
    workouts: 0,
    satisfaction: 0,
    coaches: 0
  });

  useEffect(() => {
    // Simple smooth animation counter
    const duration = 1800;
    const steps = 60;
    const intervalTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setCounts({
        members: Math.floor(500 * easeOut),
        workouts: Math.floor(10000 * easeOut),
        satisfaction: Math.floor(92 * easeOut),
        coaches: Math.floor(15 * easeOut)
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounts({
          members: 500,
          workouts: 10000,
          satisfaction: 92,
          coaches: 15
        });
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  const statItems = [
    {
      id: "stat-members",
      icon: Users,
      value: `${counts.members.toLocaleString()}+`,
      label: "Active Members",
      detail: "Driven, passionate fitness community"
    },
    {
      id: "stat-workouts",
      icon: Dumbbell,
      value: `${counts.workouts.toLocaleString()}+`,
      label: "Workouts Completed",
      detail: "Tracked and logged this year"
    },
    {
      id: "stat-satisfaction",
      icon: Trophy,
      value: `${counts.satisfaction}%`,
      label: "Member Satisfaction",
      detail: "Certified Google & in-house survey"
    },
    {
      id: "stat-access",
      icon: Clock,
      value: "24/7",
      label: "Gym Access",
      detail: "Biometric & RFID entry anytime"
    }
  ];

  return (
    <div className="relative z-20 -mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="rounded-2xl p-6 sm:p-8 border border-white/10 shadow-2xl shadow-black/90 bg-[#111111] backdrop-blur-xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {statItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className={`flex flex-col items-center text-center ${
                  index !== 0 ? 'pt-6 sm:pt-0 sm:pl-6' : ''
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-[#CCFF00]/10 border border-[#CCFF00]/30 flex items-center justify-center text-[#CCFF00] mb-3">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                  {item.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-zinc-200 uppercase tracking-wider mt-1">
                  {item.label}
                </div>
                <div className="text-[11px] text-zinc-400 font-normal mt-0.5 hidden sm:block">
                  {item.detail}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
