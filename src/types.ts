export interface Program {
  id: string;
  title: string;
  category: 'strength' | 'fat-loss' | 'performance' | 'group' | 'personal';
  tagline: string;
  description: string;
  image: string;
  intensity: 'Medium' | 'High' | 'Extreme';
  duration: string;
  caloriesBurn: string;
  targetAudience: string;
  features: string[];
  schedule: string;
  leadCoach: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  priceMonthly: number;
  priceAnnual: number;
  period: string;
  isPopular?: boolean;
  badge?: string;
  description: string;
  features: {
    included: boolean;
    text: string;
  }[];
  ctaText: string;
}

export interface Trainer {
  id: string;
  name: string;
  role: string;
  specialty: string;
  experience: string;
  certifications: string[];
  bio: string;
  image: string;
  socials: {
    instagram?: string;
    twitter?: string;
    linkedin?: string;
  };
  achievements: string[];
}

export interface Transformation {
  id: string;
  name: string;
  age: number;
  program: string;
  duration: string;
  stats: {
    weightChange: string;
    bodyFatChange: string;
    strengthGain: string;
  };
  beforeImage: string;
  afterImage: string;
  testimonial: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  review: string;
  joinedDate: string;
  verifiedMember: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}
