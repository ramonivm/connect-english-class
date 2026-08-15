import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutConnect } from './components/AboutConnect';
import { Differentiators } from './components/Differentiators';
import { Methodology } from './components/Methodology';
import { LearningGoals } from './components/LearningGoals';
import { ClassFormats } from './components/ClassFormats';
import { HowItWorks } from './components/HowItWorks';
import { Faq } from './components/Faq';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { LevelTestModal } from './components/LevelTestModal';
import { ScrollToTop } from './components/ScrollToTop';
import { RevealOnScroll } from './components/RevealOnScroll';

export default function App() {
  const [selectedGoal, setSelectedGoal] = useState<string>('');
  const [selectedFormat, setSelectedFormat] = useState<string>('');
  const [selectedModality, setSelectedModality] = useState<string>('');
  const [isTestModalOpen, setIsTestModalOpen] = useState<boolean>(false);

  const scrollToContact = () => {
    const el = document.getElementById('contacto');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToMethodology = () => {
    const el = document.getElementById('metodologia');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToClasses = () => {
    const el = document.getElementById('clases');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGoalSelect = (goalTitle: string) => {
    setSelectedGoal(goalTitle);
    scrollToContact();
  };

  const handleFormatSelect = (formatTitle: string, modalityTitle: string) => {
    setSelectedFormat(formatTitle);
    setSelectedModality(modalityTitle);
    scrollToContact();
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 flex flex-col antialiased">
      {/* 1. Header Fijo (Sticky Navbar) */}
      <Navbar onCtaClick={scrollToContact} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 2. Hero (Portada) */}
        <Hero
          onConsultClassesClick={scrollToClasses}
          onMethodologyClick={scrollToMethodology}
        />

        {/* 3. Qué es Connect Class */}
        <RevealOnScroll direction="up">
          <AboutConnect />
        </RevealOnScroll>

        {/* 4. Qué diferencia a Connect Class */}
        <RevealOnScroll direction="up">
          <Differentiators />
        </RevealOnScroll>

        {/* 5. Metodología */}
        <RevealOnScroll direction="up">
          <Methodology />
        </RevealOnScroll>

        {/* 6. Objetivos de aprendizaje */}
        <RevealOnScroll direction="up">
          <LearningGoals onSelectGoal={handleGoalSelect} />
        </RevealOnScroll>

        {/* 7. Tipos y modalidades de clases */}
        <RevealOnScroll direction="up">
          <ClassFormats onSelectFormat={handleFormatSelect} />
        </RevealOnScroll>

        {/* 8. Cómo funciona */}
        <RevealOnScroll direction="up">
          <HowItWorks onCtaClick={scrollToContact} />
        </RevealOnScroll>

        {/* 9. Preguntas Frecuentes */}
        <RevealOnScroll direction="up">
          <Faq onOpenTest={() => setIsTestModalOpen(true)} />
        </RevealOnScroll>

        {/* 10. Contacto Final */}
        <RevealOnScroll direction="up">
          <ContactForm
            initialGoal={selectedGoal}
            initialFormat={selectedFormat}
            initialModality={selectedModality}
            onOpenTest={() => setIsTestModalOpen(true)}
          />
        </RevealOnScroll>
      </main>

      {/* 11. Pie de página (Footer) */}
      <Footer />

      {/* Level Test Modal */}
      <LevelTestModal
        isOpen={isTestModalOpen}
        onClose={() => setIsTestModalOpen(false)}
      />

      {/* Floating Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}
