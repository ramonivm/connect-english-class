import React, { useState, useEffect } from 'react';
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
import { AboutUsView } from './components/AboutUsView';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'about-us'>(() => {
    return window.location.hash === '#quienes-somos' ? 'about-us' : 'home';
  });

  const [selectedGoal, setSelectedGoal] = useState<string>('');
  const [selectedFormat, setSelectedFormat] = useState<string>('');
  const [selectedModality, setSelectedModality] = useState<string>('');
  const [isTestModalOpen, setIsTestModalOpen] = useState<boolean>(false);

  // Sync hash routing
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#quienes-somos') {
        setCurrentView('about-us');
      } else if (currentView === 'about-us') {
        setCurrentView('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [currentView]);

  const navigateToAboutUs = () => {
    setCurrentView('about-us');
    window.location.hash = 'quienes-somos';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = () => {
    setCurrentView('home');
    if (window.location.hash === '#quienes-somos') {
      window.history.pushState(null, '', window.location.pathname);
    }
  };

  const scrollToContact = () => {
    if (currentView !== 'home') {
      setCurrentView('home');
      setTimeout(() => {
        const el = document.getElementById('contacto');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 80);
      return;
    }

    const el = document.getElementById('contacto');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToClasses = () => {
    if (currentView !== 'home') {
      setCurrentView('home');
      setTimeout(() => {
        const el = document.getElementById('clases');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 80);
      return;
    }

    const el = document.getElementById('clases');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToMethodology = () => {
    if (currentView !== 'home') {
      setCurrentView('home');
      setTimeout(() => {
        const el = document.getElementById('metodologia');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 80);
      return;
    }

    const el = document.getElementById('metodologia');
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
      <Navbar
        onCtaClick={scrollToContact}
        onNavigateAboutUs={navigateToAboutUs}
        onNavigateHome={navigateToHome}
        currentView={currentView}
      />

      {/* Main Content: Conditional rendering based on currentView */}
      {currentView === 'about-us' ? (
        <main className="flex-grow">
          <AboutUsView
            onBackToHome={navigateToHome}
            onGoToContact={scrollToContact}
            onGoToClasses={scrollToClasses}
          />
        </main>
      ) : (
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
      )}

      {/* 11. Pie de página (Footer) */}
      <Footer
        onNavigateAboutUs={navigateToAboutUs}
        onNavigateHome={navigateToHome}
      />

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
