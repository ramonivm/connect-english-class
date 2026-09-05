import React from 'react';
import { Mail, MapPin, Info } from 'lucide-react';

interface FooterProps {
  onNavigateAboutUs?: () => void;
  onNavigateTestimonials?: () => void;
  onNavigateHome?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigateAboutUs,
  onNavigateTestimonials,
  onNavigateHome,
}) => {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    isAboutUs?: boolean,
    isTestimonials?: boolean
  ) => {
    if (isAboutUs) {
      e.preventDefault();
      if (onNavigateAboutUs) {
        onNavigateAboutUs();
      }
      return;
    }

    if (isTestimonials) {
      e.preventDefault();
      if (onNavigateTestimonials) {
        onNavigateTestimonials();
      }
      return;
    }

    if (onNavigateHome) {
      onNavigateHome();
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
  };

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Nosotros', href: '#quienes-somos', isAboutUs: true },
    { name: 'Metodología', href: '#metodologia' },
    { name: 'Precios', href: '#clases' },
    { name: 'Testimonios', href: '#testimonios', isTestimonials: true },
    { name: '¿Preguntas?', href: '#faq' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <footer className="bg-[#0B132B] text-slate-300 border-t border-slate-800 pt-16 pb-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Logo & Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <a
              href="#inicio"
              onClick={(e) => handleLinkClick(e, '#inicio')}
              className="flex items-center gap-2.5 inline-block cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-full bg-coral-500 flex items-center justify-center shadow-md group-hover:scale-105 group-hover:bg-coral-600 transition-all duration-300 shrink-0">
                <svg
                  className="w-[28px] h-[28px] text-white shrink-0"
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
              <span className="font-display font-bold text-2xl text-white tracking-wide">
                Connect English Class
              </span>
            </a>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Clases de inglés personalizadas individuales (1 estudiante) en modalidad 100% online interactiva.
            </p>

            <p className="text-xs text-slate-500">
              Acompañando estudiantes desde el año 2016.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-display font-bold text-base text-white uppercase tracking-wider">
              Navegación
            </h4>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href, link.isAboutUs, link.isTestimonials)}
                    className="hover:text-white hover:underline transition-colors text-slate-400 cursor-pointer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Marker */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-display font-bold text-base text-white uppercase tracking-wider">
              Información de Contacto
            </h4>

            <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-coral-400 font-semibold font-mono">
                <Info className="w-4 h-4 shrink-0" />
                <span>[PENDIENTE: datos de contacto]</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Los números directos de teléfono y correo institucional se asignan al formalizar la propuesta.
              </p>
            </div>

            <div className="space-y-2 text-xs text-slate-400 pt-1">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-slate-500" />
                <span>Consultas vía formulario en sitio web</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-slate-500" />
                <span>Atención 100% Online Global</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {currentYear} Connect English Class. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            <a
              href="#inicio"
              onClick={(e) => handleLinkClick(e, '#inicio')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Volver arriba ↑
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
