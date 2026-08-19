import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ChevronRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  onCtaClick: () => void;
  onNavigateAboutUs?: () => void;
  onNavigateHome?: () => void;
  currentView?: 'home' | 'about-us';
}

export const Navbar: React.FC<NavbarProps> = ({
  onCtaClick,
  onNavigateAboutUs,
  onNavigateHome,
  currentView = 'home',
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Handle escape key to close drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const handleNavLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    isAboutUsLink?: boolean
  ) => {
    setMobileMenuOpen(false);

    if (isAboutUsLink) {
      e.preventDefault();
      if (onNavigateAboutUs) {
        onNavigateAboutUs();
      }
      return;
    }

    if (currentView === 'about-us') {
      e.preventDefault();
      if (onNavigateHome) {
        onNavigateHome();
        // Allow state switch to render home before scrolling to element
        setTimeout(() => {
          const targetId = href.replace('#', '');
          const el = document.getElementById(targetId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }, 80);
      }
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setMobileMenuOpen(false);
    if (currentView === 'about-us' && onNavigateHome) {
      e.preventDefault();
      onNavigateHome();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Nosotros', href: '#quienes-somos', isAboutUs: true },
    { name: 'Metodología', href: '#metodologia' },
    { name: 'Clases', href: '#clases' },
    { name: 'Cómo funciona', href: '#como-funciona' },
    { name: '¿Preguntas?', href: '#faq' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <>
      <header
        id="top-header"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0B132B]/95 backdrop-blur-md border-b border-slate-700/50 shadow-xl py-3'
            : 'bg-[#0B132B] py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#inicio"
              id="nav-logo"
              onClick={handleLogoClick}
              className="flex items-center gap-2.5 group focus:outline-none cursor-pointer"
              aria-label="Connect English Class"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-coral-500 flex items-center justify-center shadow-md group-hover:scale-105 group-hover:bg-coral-600 transition-all duration-300 shrink-0">
                <svg
                  className="w-[30px] h-[30px] text-white shrink-0"
                  style={{ width: '30px', height: '30px' }}
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Isotipo Connect English Class"
                >
                  {/* Left N Ribbon */}
                  <path d="M22 23 H31 V77 H22 Z" fill="currentColor" />
                  <polygon points="22,23 31,23 63,77 54,77" fill="currentColor" />
                  <polygon points="54,23 63,23 63,45 54,33" fill="currentColor" />

                  {/* Right N Ribbon */}
                  <path d="M69 23 H78 V77 H69 Z" fill="currentColor" />
                  <polygon points="38,23 47,23 78,77 69,77" fill="currentColor" />
                  <polygon points="38,55 47,67 47,77 38,77" fill="currentColor" />
                </svg>
              </div>
              <span className="font-display font-bold text-xl sm:text-2xl text-white tracking-wide leading-none">
                Connect English Class
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavLinkClick(e, link.href, link.isAboutUs)}
                  className="px-3 py-2 rounded-md text-sm font-medium text-slate-200 hover:text-white hover:bg-slate-800/60 transition-all"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Desktop Call To Action */}
            <div className="hidden lg:flex items-center">
              <button
                id="header-cta-btn"
                onClick={onCtaClick}
                className="bg-coral-500 hover:bg-coral-600 text-white font-semibold text-sm px-5 py-2.5 rounded-lg shadow-lg hover:shadow-coral-500/20 transition-all transform hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer"
              >
                <span>Comenzar</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile menu toggle button */}
            <div className="lg:hidden flex items-center">
              <button
                id="mobile-menu-toggle-btn"
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 rounded-lg text-slate-200 hover:text-white hover:bg-slate-800/80 focus:outline-none cursor-pointer transition-colors"
                aria-label="Abrir menú"
                aria-expanded={mobileMenuOpen}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Slide-out Drawer Menu for Mobile View */}
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-50 transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-[#0B132B] border-l border-slate-700/60 shadow-2xl z-50 flex flex-col justify-between p-6 transform transition-transform duration-300 ease-in-out lg:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Menú de navegación móvil"
      >
        {/* Drawer Header */}
        <div>
          <div className="flex items-center justify-between pb-5 border-b border-slate-800">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-coral-500 flex items-center justify-center shadow-md shrink-0">
                <svg
                  className="w-6 h-6 text-white"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22 23 H31 V77 H22 Z" fill="currentColor" />
                  <polygon points="22,23 31,23 63,77 54,77" fill="currentColor" />
                  <polygon points="54,23 63,23 63,45 54,33" fill="currentColor" />
                  <path d="M69 23 H78 V77 H69 Z" fill="currentColor" />
                  <polygon points="38,23 47,23 78,77 69,77" fill="currentColor" />
                  <polygon points="38,55 47,67 47,77 38,77" fill="currentColor" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg text-white leading-tight">
                  Connect English
                </span>
                <span className="text-[9px] uppercase tracking-widest text-slate-400 font-semibold">
                  Menú Principal
                </span>
              </div>
            </div>

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none cursor-pointer"
              aria-label="Cerrar menú"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Nav Items */}
          <nav className="mt-6 flex flex-col space-y-1.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavLinkClick(e, link.href, link.isAboutUs)}
                className="flex items-center justify-between px-3.5 py-3 rounded-xl font-medium text-base text-slate-200 hover:text-white hover:bg-slate-800/80 transition-colors group"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-coral-400 group-hover:translate-x-0.5 transition-all" />
              </a>
            ))}
          </nav>
        </div>

        {/* Drawer Footer & CTA */}
        <div className="pt-6 border-t border-slate-800 space-y-4">
          <div className="bg-slate-900/80 rounded-xl p-3 border border-slate-800 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-coral-500/10 text-coral-400 flex items-center justify-center shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div className="text-xs">
              <p className="font-semibold text-white">Clases 100% a medida</p>
              <p className="text-slate-400">Online & Presencial</p>
            </div>
          </div>

          <button
            id="drawer-cta-btn"
            onClick={() => {
              setMobileMenuOpen(false);
              onCtaClick();
            }}
            className="w-full bg-coral-500 hover:bg-coral-600 text-white font-semibold py-3.5 px-4 rounded-xl shadow-lg shadow-coral-500/20 flex items-center justify-center gap-2 cursor-pointer transition-all transform active:scale-[0.98]"
          >
            <span>Comenzar</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </>
  );
};
