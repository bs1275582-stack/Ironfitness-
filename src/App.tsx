import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsCounter } from './components/StatsCounter';
import { AboutSection } from './components/AboutSection';
import { ProgramsSection } from './components/ProgramsSection';
import { PricingSection } from './components/PricingSection';
import { TrainersSection } from './components/TrainersSection';
import { TransformationSection } from './components/TransformationSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FitnessCalculator } from './components/FitnessCalculator';
import { CtaBanner } from './components/CtaBanner';
import { ContactSection } from './components/ContactSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { VipPassModal } from './components/VipPassModal';
import { ProgramDetailModal } from './components/ProgramDetailModal';
import { FloatingActions } from './components/FloatingActions';
import { Program, PricingPlan } from './types';

export default function App() {
  const [isVipModalOpen, setIsVipModalOpen] = useState<boolean>(false);
  const [selectedProgramForModal, setSelectedProgramForModal] = useState<Program | null>(null);
  const [preselectedProgramOrPlan, setPreselectedProgramOrPlan] = useState<string>('General Consultation');

  const handleOpenVipModal = () => {
    setIsVipModalOpen(true);
  };

  const handleCloseVipModal = () => {
    setIsVipModalOpen(false);
  };

  const handleSelectProgram = (program: Program) => {
    setSelectedProgramForModal(program);
  };

  const handleCloseProgramModal = () => {
    setSelectedProgramForModal(null);
  };

  const scrollToContactWithPlan = (itemTitle?: string) => {
    if (itemTitle) {
      setPreselectedProgramOrPlan(itemTitle);
    }
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = contactSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToPrograms = () => {
    const programsSection = document.getElementById('programs');
    if (programsSection) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = programsSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleSelectPlan = (plan: PricingPlan, isAnnual: boolean) => {
    const cycle = isAnnual ? 'Annual' : 'Monthly';
    scrollToContactWithPlan(`${plan.name} Membership Plan (${cycle})`);
  };

  const handleBookTrainer = (trainerName: string) => {
    scrollToContactWithPlan(`1-on-1 Assessment with Coach ${trainerName}`);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100 flex flex-col selection:bg-[#CCFF00] selection:text-black">
      {/* Top Navbar */}
      <Navbar
        onOpenVipModal={handleOpenVipModal}
        onBookConsultation={scrollToContactWithPlan}
      />

      {/* Main Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenVipModal={handleOpenVipModal}
          onExplorePrograms={scrollToPrograms}
        />

        {/* Animated Stats Strip */}
        <StatsCounter />

        {/* About Section */}
        <AboutSection
          onOpenVipModal={handleOpenVipModal}
          onExplorePrograms={scrollToPrograms}
        />

        {/* Programs Section */}
        <ProgramsSection
          onSelectProgram={handleSelectProgram}
          onBookConsultation={scrollToContactWithPlan}
        />

        {/* Membership Pricing */}
        <PricingSection
          onSelectPlan={handleSelectPlan}
          onOpenVipModal={handleOpenVipModal}
        />

        {/* Trainers Section */}
        <TrainersSection
          onBookTrainer={handleBookTrainer}
        />

        {/* Real Results / Transformation Section */}
        <TransformationSection
          onOpenVipModal={handleOpenVipModal}
        />

        {/* Client Testimonials */}
        <TestimonialsSection />

        {/* Interactive Calorie & BMI Goal Calculator */}
        <FitnessCalculator
          onSelectRecommendedProgram={scrollToContactWithPlan}
        />

        {/* Dramatic CTA Banner */}
        <CtaBanner
          onOpenVipModal={handleOpenVipModal}
        />

        {/* Contact & Consultation Booking Section */}
        <ContactSection
          initialProgramOrPlan={preselectedProgramOrPlan}
        />

        {/* FAQ Accordion Section */}
        <FaqSection
          onOpenConsultation={() => scrollToContactWithPlan('General Inquiry')}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenVipModal={handleOpenVipModal}
      />

      {/* Floating Action Utilities (WhatsApp + VIP Pass + ScrollTop) */}
      <FloatingActions
        onOpenVipModal={handleOpenVipModal}
      />

      {/* Free 3-Day VIP Pass Generator Modal */}
      <VipPassModal
        isOpen={isVipModalOpen}
        onClose={handleCloseVipModal}
      />

      {/* Program Details Modal */}
      <ProgramDetailModal
        program={selectedProgramForModal}
        onClose={handleCloseProgramModal}
        onEnroll={scrollToContactWithPlan}
      />
    </div>
  );
}
