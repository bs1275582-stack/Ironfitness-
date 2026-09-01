import { Program, PricingPlan, Trainer, Transformation, Testimonial, FAQItem } from '../types';

export const GYM_INFO = {
  name: "IRONFORGE FITNESS",
  tagline: "BUILD THE STRONGEST VERSION OF YOU.",
  subTagline: "Train harder. Move better. Become unstoppable.",
  address: "Plot 42, IronForge High Street, Horizon Business Bay, Bangalore, KA 560103",
  phone: "+91 98765 43210",
  altPhone: "+91 80 4567 8900",
  email: "membership@ironforgefitness.com",
  supportEmail: "support@ironforgefitness.com",
  hours: {
    general: "Open 24/7 for All Access Keyholder Members",
    staffed: "Mon – Sat: 6:00 AM – 10:00 PM | Sun: 7:00 AM – 8:00 PM",
    steamSauna: "Mon – Sun: 6:00 AM – 11:00 PM",
  },
  stats: {
    members: "500+",
    workouts: "10,000+",
    satisfaction: "92%",
    access: "24/7",
    coaches: "15+",
    equipmentValuation: "₹3.5 Cr+",
  }
};

export const PROGRAMS: Program[] = [
  {
    id: "strength-conditioning",
    title: "Strength & Conditioning",
    category: "strength",
    tagline: "Build foundational power and elite physical resilience",
    description: "A periodized lifting curriculum combining Olympic barbell movements, progressive overload, and conditioning protocols to maximize muscle mass and functional force output.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
    intensity: "High",
    duration: "60 mins / session",
    caloriesBurn: "550 - 750 kcal",
    targetAudience: "Lifting enthusiasts, bodybuilders, and anyone seeking pure muscular power.",
    features: [
      "Barbell biomechanics coaching",
      "Progressive overload tracking",
      "Powerlifting & Olympic platforms",
      "Access to Eleiko calibrated plates"
    ],
    schedule: "Mon, Wed, Fri (6:30 AM, 5:30 PM, 7:00 PM)",
    leadCoach: "Arjun Mehta"
  },
  {
    id: "weight-loss",
    title: "Weight Loss & MetCon",
    category: "fat-loss",
    tagline: "Torch body fat while preserving lean athletic muscle",
    description: "High-metabolic resistance workouts, interval conditioning, and metabolic acceleration complexes engineered to elevate your EPOC (afterburn effect) for up to 36 hours.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
    intensity: "Extreme",
    duration: "45 mins / session",
    caloriesBurn: "650 - 900 kcal",
    targetAudience: "Individuals looking to drop stubborn fat, improve cardiovascular stamina, and tone.",
    features: [
      "Heart rate zone monitoring",
      "Metabolic conditioning circuits",
      "Macro & nutrition guidance",
      "Weekly body composition scans (InBody 770)"
    ],
    schedule: "Tue, Thu, Sat (7:00 AM, 9:00 AM, 6:00 PM)",
    leadCoach: "Simran Kaur"
  },
  {
    id: "personal-training",
    title: "Personal Training",
    category: "personal",
    tagline: "1-on-1 private coaching tailored entirely to your physiology",
    description: "Bespoke training architecture designed around your unique anatomy, lifestyle, and goals. Experience granular form corrections, custom nutrition regimens, and private accountability.",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80",
    intensity: "High",
    duration: "60 mins / 1-on-1",
    caloriesBurn: "500 - 800 kcal",
    targetAudience: "Busy executives, beginners needing guidance, and advanced athletes wanting peak optimization.",
    features: [
      "Dedicated senior coach assigned",
      "Complete postural & movement screening",
      "Weekly tailored nutrition adjustments",
      "Private VIP training suite access"
    ],
    schedule: "Flexible scheduling (6:00 AM - 10:00 PM Daily)",
    leadCoach: "Arjun Mehta & Rahul Sharma"
  },
  {
    id: "cross-training",
    title: "Cross Training & Functional",
    category: "performance",
    tagline: "Functional capacity for the unpredictable demands of life",
    description: "Unleash dynamic power with kettlebells, plyometrics, sled pushes, gymnastics rings, and battle ropes. Built to forge full-body athleticism, agility, and grit.",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
    intensity: "Extreme",
    duration: "55 mins / session",
    caloriesBurn: "600 - 850 kcal",
    targetAudience: "CrossFitters, functional fitness enthusiasts, and multi-sport competitors.",
    features: [
      "Turf sprint tracks and Prowler sleds",
      "Rogue rig suspension systems",
      "Plyometric box jumps & wall balls",
      "Active recovery & mobility drills"
    ],
    schedule: "Mon to Sat (7:30 AM, 6:30 PM)",
    leadCoach: "Rahul Sharma"
  },
  {
    id: "group-fitness",
    title: "Group Fitness",
    category: "group",
    tagline: "High-voltage collective energy with chart-topping beats",
    description: "Dynamic studio classes ranging from ForgeHIIT to PowerSpin and CoreSculpt. Immerse in state-of-the-art concert lighting, high-fidelity sound, and motivating community drive.",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200&q=80",
    intensity: "Medium",
    duration: "50 mins / session",
    caloriesBurn: "450 - 700 kcal",
    targetAudience: "Group workout lovers who thrive on community hype, music, and group motivation.",
    features: [
      "Concert grade acoustic studio",
      "Heart-rate synced visual leaderboards",
      "Certified master group instructors",
      "Inclusive scaling for all levels"
    ],
    schedule: "Daily slots: 6:00 AM, 8:30 AM, 5:30 PM, 7:30 PM",
    leadCoach: "Simran Kaur"
  },
  {
    id: "athlete-performance",
    title: "Athlete Performance",
    category: "performance",
    tagline: "Speed, explosive vertical, and competitive sports mastery",
    description: "Sport-specific strength, rotational power, sprint mechanics, and injury-prevention protocols crafted for competitive athletes across cricket, football, combat sports, and sprinting.",
    image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=1200&q=80",
    intensity: "Extreme",
    duration: "75 mins / session",
    caloriesBurn: "700 - 950 kcal",
    targetAudience: "Competitive athletes, martial artists, runners, and sport practitioners.",
    features: [
      "Force plate sprint velocity analysis",
      "Rotational power & med ball protocols",
      "Sport-specific agility drills",
      "Prehab and joint decompression routines"
    ],
    schedule: "Tue, Thu, Sat (4:00 PM, 6:30 PM)",
    leadCoach: "Rahul Sharma"
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "basic",
    name: "Basic",
    priceMonthly: 999,
    priceAnnual: 799,
    period: "month",
    description: "Ideal for self-driven lifters looking for uncompromised gym access and equipment.",
    features: [
      { included: true, text: "Full access to main gym floor & free weights" },
      { included: true, text: "Dedicated locker & shower access" },
      { included: true, text: "Standard workout starter plan & app logging" },
      { included: true, text: "Open 24/7 keycard entry" },
      { included: false, text: "Group fitness studio classes" },
      { included: false, text: "Personal training sessions" },
      { included: false, text: "Custom nutrition guidance & InBody scans" },
      { included: false, text: "Infrared sauna & ice bath access" },
    ],
    ctaText: "Get Started"
  },
  {
    id: "pro",
    name: "Pro",
    priceMonthly: 1999,
    priceAnnual: 1599,
    period: "month",
    isPopular: true,
    badge: "MOST POPULAR",
    description: "Our comprehensive package for maximum results, group workouts, and coaching guidance.",
    features: [
      { included: true, text: "Unlimited 24/7 gym access across all zones" },
      { included: true, text: "Personalized workout progression plan" },
      { included: true, text: "Unlimited group studio classes (Spin, HIIT, Yoga)" },
      { included: true, text: "Macro & nutrition guidance framework" },
      { included: true, text: "Monthly InBody 770 body composition analysis" },
      { included: true, text: "Locker, towel service & shower amenities" },
      { included: false, text: "Weekly 1-on-1 personal trainer sessions" },
      { included: false, text: "Private VIP recovery suite & massage gun lounge" },
    ],
    ctaText: "Claim Pro Membership"
  },
  {
    id: "elite",
    name: "Elite",
    priceMonthly: 3499,
    priceAnnual: 2799,
    period: "month",
    badge: "ULTIMATE PERFORMANCE",
    description: "The gold-standard concierge experience with 1-on-1 private training and full recovery suite.",
    features: [
      { included: true, text: "Everything in the Pro plan" },
      { included: true, text: "4x Monthly 1-on-1 Personal Trainer sessions" },
      { included: true, text: "Custom dynamic nutrition & supplement plan" },
      { included: true, text: "Bi-weekly 3D body scans & progress assessment" },
      { included: true, text: "Unlimited Infrared Sauna & Cold Plunge access" },
      { included: true, text: "Dedicated VIP locker & premium apparel pack" },
      { included: true, text: "Priority booking for workshops & events" },
      { included: true, text: "Guest pass (2 free guest visits/month)" },
    ],
    ctaText: "Join Elite Club"
  }
];

export const TRAINERS: Trainer[] = [
  {
    id: "arjun-mehta",
    name: "Arjun Mehta",
    role: "Head Strength & Hypertrophy Coach",
    specialty: "Powerlifting, Biomechanics & Hypertrophy",
    experience: "9+ Years",
    certifications: ["CSCS (NSCA)", "USAW Level 2", "Precision Nutrition L1"],
    bio: "Former national-level powerlifter specializing in periodized strength progression and corrective biomechanics. Arjun has trained 400+ clients to shatter PRs safely.",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=800&q=80",
    socials: {
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com"
    },
    achievements: ["Trained 45+ competitive athletes", "National Bench Press Record Holder 2021", "Speaker at National Fitness Expo"]
  },
  {
    id: "simran-kaur",
    name: "Simran Kaur",
    role: "Lead Fitness & Nutrition Coach",
    specialty: "Metabolic Conditioning & Sustainable Body Recomp",
    experience: "7+ Years",
    certifications: ["ISSA Master Trainer", "CISSN Sports Nutritionist", "ACE Group Specialist"],
    bio: "Dedicated to helping people build lean muscle and vibrant vitality through evidence-based dietary science and high-intensity metabolic conditioning without restrictive starvation.",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=800&q=80",
    socials: {
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com"
    },
    achievements: ["Featured in Men's & Women's Health India", "500+ Fat Loss Transformations", "Author of 'Eat For Power' eBook"]
  },
  {
    id: "rahul-sharma",
    name: "Rahul Sharma",
    role: "Athletic Performance & Mobility Coach",
    specialty: "Speed, Agility, Olympic Lifting & Injury Prevention",
    experience: "8+ Years",
    certifications: ["EXOS Performance Specialist", "FRC Mobility Specialist", "CrossFit L2"],
    bio: "Passionate about building durable human bodies that move with explosive grace. Rahul works with pro athletes, runners, and lifters to eliminate joint pain and optimize athletic power.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    socials: {
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com"
    },
    achievements: ["Strength Coach for State Football League", "CrossFit Regional Top 10", "Master of Functional Movement Screen (FMS)"]
  }
];

export const TRANSFORMATIONS: Transformation[] = [
  {
    id: "trans-1",
    name: "Rohan Kapoor",
    age: 29,
    program: "Strength & Conditioning + Nutrition",
    duration: "16 Weeks",
    stats: {
      weightChange: "-18 kg",
      bodyFatChange: "28% → 12%",
      strengthGain: "+55 kg Deadlift"
    },
    beforeImage: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80",
    testimonial: "I spent 4 years in commercial gyms with zero results. 16 weeks at IronForge completely changed my physique, posture, and energy levels. The coaching discipline here is unmatched."
  },
  {
    id: "trans-2",
    name: "Priya Sharma",
    age: 33,
    program: "Weight Loss & MetCon",
    duration: "12 Weeks",
    stats: {
      weightChange: "-12 kg",
      bodyFatChange: "32% → 18%",
      strengthGain: "+30 kg Squat"
    },
    beforeImage: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&w=800&q=80",
    testimonial: "As a working mother of two, finding time was tough. IronForge's structured MetCon classes and Simran's macro blueprint made fat loss effortless without crazy fasting."
  },
  {
    id: "trans-3",
    name: "Vikram Deshmukh",
    age: 41,
    program: "Elite Personal Training",
    duration: "24 Weeks",
    stats: {
      weightChange: "+7 kg Lean Mass",
      bodyFatChange: "22% → 13%",
      strengthGain: "+40 kg Bench"
    },
    beforeImage: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?auto=format&fit=crop&w=800&q=80",
    testimonial: "At 40+, I thought joint stiffness was permanent. The trainers re-engineered my lifting form, and I am in the best shape of my life with zero lower back ache."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Karan Singhal",
    role: "Tech Entrepreneur & Lifter",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    rating: 5,
    review: "IronForge is in a league of its own. Eleiko barbells, clean locker rooms, air filtration that actually works, and zero equipment hoarding. The 24/7 keycard access allows me to lift whenever inspiration strikes.",
    joinedDate: "Member since Jan 2024",
    verifiedMember: true
  },
  {
    id: "test-2",
    name: "Dr. Ananya Roy",
    role: "Orthopedic Surgeon & Marathoner",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
    rating: 5,
    review: "As a surgeon, I inspect anatomy and training safety deeply. The coaches here understand kinetic chains, joint mechanics, and proper periodization. Best gym in the country, period.",
    joinedDate: "Member since May 2023",
    verifiedMember: true
  },
  {
    id: "test-3",
    name: "Devendra Verma",
    role: "National Level Swimmer",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    rating: 5,
    review: "The Olympic platforms, cold plunge tubs, and Rahul's athletic performance sessions helped me shave 1.4 seconds off my 100m freestyle. The community drives you to push beyond your limits.",
    joinedDate: "Member since Nov 2023",
    verifiedMember: true
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    category: "Trials & Membership",
    question: "What is included in the Free 3-Day Trial Pass?",
    answer: "Your Free Trial includes full access to the gym floor, cardio zone, all Olympic weightlifting platforms, locker amenities, and 1 complimentary group fitness class of your choice. You also receive an optional free 15-minute body composition assessment with a coach."
  },
  {
    id: "faq-2",
    category: "Beginners",
    question: "I am a total beginner. Will I feel overwhelmed at IronForge?",
    answer: "Absolutely not! Over 40% of our members started with zero gym experience. Every new member receives a 1-on-1 gym orientation and fundamental safety walkthrough. Our coaches are always on the floor ready to help you with form, setup, and questions."
  },
  {
    id: "faq-3",
    category: "Access & Hours",
    question: "How does 24/7 access work?",
    answer: "Active members receive a secure digital barcode & keycard for RFID entry doors. The facility is equipped with 24/7 CCTV surveillance, emergency call points, and automated lighting for a safe, world-class experience at any hour."
  },
  {
    id: "faq-4",
    category: "Amenities",
    question: "What amenities and recovery facilities are available?",
    answer: "We offer private showers, digital lockers, Finnish dry sauna, cold plunge ice tubs, towel service, high-speed Wi-Fi, filtered water refill stations, and the Forge Fuel juice & protein shake bar."
  },
  {
    id: "faq-5",
    category: "Plans & Cancellations",
    question: "Can I freeze or cancel my membership if I travel?",
    answer: "Yes! All Pro and Elite annual memberships include up to 30 days of complimentary membership freeze per year for travel or medical reasons. We have a transparent, hassle-free policy with no hidden cancellation traps."
  },
  {
    id: "faq-6",
    category: "Personal Training",
    question: "How are personal training sessions scheduled?",
    answer: "You are matched with a dedicated specialist coach based on your specific goals (strength, weight loss, mobility). You book sessions at times that suit your schedule via our mobile member portal or WhatsApp concierge."
  }
];

export const FACILITY_FEATURES = [
  {
    icon: "Dumbbell",
    title: "Heavy Iron & Olympic Platforms",
    description: "Eleiko competition bars, bumper plates, power racks, and deadlift platforms."
  },
  {
    icon: "HeartPulse",
    title: "Cardio & Conditioning Deck",
    description: "Woodway treadmills, Concept2 rowers, SkiErgs, and assault air bikes."
  },
  {
    icon: "Flame",
    title: "Recovery Spa & Cold Plunge",
    description: "Sub-zero ice baths and infrared cedarwood sauna for rapid muscle recovery."
  },
  {
    icon: "Apple",
    title: "Forge Nutrition & Fuel Bar",
    description: "Artisanal pre-workout espressos, electrolyte hydration, and whey protein shakes."
  }
];
