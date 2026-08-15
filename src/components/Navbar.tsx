import React, { useState, useEffect } from 'react';
import { Menu, X, BookOpen, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onCtaClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onCtaClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Metodología', href: '#metodologia' },
    { name: 'Clases', href: '#clases' },
    { name: 'Cómo funciona', href: '#como-funciona' },
    { name: 'Preguntas frecuentes', href: '#faq' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header
      id="top-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
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
            className="flex items-center gap-2.5 group focus:outline-none"
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
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl sm:text-2xl text-white tracking-wide leading-none">
                Connect English Class
              </span>
              <span className="text-[10px] uppercase tracking-widest text-slate-300 font-semibold mt-0.5">
                Clases Personalizadas
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
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
              <span>Quiero comenzar</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-200 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B132B] border-b border-slate-800 px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-md text-base font-medium text-slate-200 hover:text-white hover:bg-slate-800/80 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-2">
            <button
              id="mobile-header-cta-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onCtaClick();
              }}
              className="w-full bg-coral-500 hover:bg-coral-600 text-white font-semibold text-center py-3 rounded-lg shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Quiero comenzar</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
