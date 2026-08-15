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
        <AboutConnect />

        {/* 4. Qué diferencia a Connect Class */}
        <Differentiators />

        {/* 5. Metodología */}
        <Methodology />

        {/* 6. Objetivos de aprendizaje */}
        <LearningGoals onSelectGoal={handleGoalSelect} />

        {/* 7. Tipos y modalidades de clases */}
        <ClassFormats onSelectFormat={handleFormatSelect} />

        {/* 8. Cómo funciona */}
        <HowItWorks onCtaClick={scrollToContact} />

        {/* 9. Preguntas Frecuentes */}
        <Faq onOpenTest={() => setIsTestModalOpen(true)} />

        {/* 10. Contacto Final */}
        <ContactForm
          initialGoal={selectedGoal}
          initialFormat={selectedFormat}
          initialModality={selectedModality}
          onOpenTest={() => setIsTestModalOpen(true)}
        />
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
