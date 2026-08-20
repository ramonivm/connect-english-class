import React from 'react';
import { HERO_DATA } from '../data/landingData';
import { ArrowRight, CheckCircle2, Users, Monitor, MapPin, Star, ExternalLink } from 'lucide-react';

interface HeroProps {
  onConsultClassesClick: () => void;
  onMethodologyClick: () => void;
  onNavigateTestimonials?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onConsultClassesClick,
  onMethodologyClick,
  onNavigateTestimonials,
}) => {
  const miniTestimonials = [
    {
      quote: 'Excelente profesor, prepara material según lo que necesitas.',
      author: 'Paulina',
    },
    {
      quote: 'Clases súper dinámicas e interactivas. Lo recomiendo 100%.',
      author: 'Jose',
    },
    {
      quote: 'Muy paciente y claro para explicar.',
      author: 'Javiera',
    },
  ];

  return (
    <section
      id="inicio"
      className="relative pt-[92px] pb-16 md:pt-[124px] md:pb-20 bg-[#0B132B] text-white overflow-hidden"
    >
      {/* Background Glow Accents */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-coral-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-slate-blue/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Logotipo */}
        <div className="flex justify-center mb-10 md:mb-14">
          <img
            src="/logoca.webp"
            alt="Connect English Class"
            className="w-[260px] h-auto object-contain"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Hero Text Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Title */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
              {HERO_DATA.title}
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-sans">
              {HERO_DATA.supportText}
            </p>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#clases"
                id="hero-primary-cta"
                onClick={onConsultClassesClick}
                className="w-full sm:w-auto bg-coral-500 hover:bg-coral-600 text-white font-semibold px-8 py-3.5 rounded-xl shadow-xl shadow-coral-500/20 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2.5 text-base cursor-pointer"
              >
                <span>{HERO_DATA.primaryCta}</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="#metodologia"
                id="hero-secondary-cta"
                onClick={onMethodologyClick}
                className="w-full sm:w-auto bg-slate-800/90 hover:bg-slate-700 text-slate-200 hover:text-white font-medium px-7 py-3.5 rounded-xl border border-slate-700 transition-all flex items-center justify-center gap-2 text-base cursor-pointer"
              >
                <span>{HERO_DATA.secondaryCta}</span>
              </a>
            </div>

            {/* Feature Highlights List */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-coral-500 shrink-0" />
                <span>100% Personalizado</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-coral-500 shrink-0" />
                <span>1 o 2 estudiantes</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-coral-500 shrink-0" />
                <span>Online / Presencial</span>
              </div>
            </div>

          </div>

          {/* Hero Visual Card / Presentation Box */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-2xl bg-gradient-to-b from-slate-800/90 to-[#1C2541] p-6 sm:p-8 border border-slate-700 shadow-2xl">
              
              {/* Header Badge in Card */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-700/80">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-slate-blue/40 border border-slate-600 flex items-center justify-center text-coral-500">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-white">Connect Class</h3>
                    <p className="text-xs text-slate-400">Desde 2016 creando experiencias de aprendizaje</p>
                  </div>
                </div>
              </div>

              {/* Interactive Format Preview */}
              <div className="mt-6 space-y-4">
                <div className="p-4 rounded-xl bg-[#0B132B]/80 border border-slate-700/60 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-coral-500/20 text-coral-500 mt-0.5">
                    <Monitor className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Modalidad Online Interactiva</h4>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Clases en vivo adaptadas a tu horario con material digital directo.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#0B132B]/80 border border-slate-700/60 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Modalidad Presencial</h4>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Atención directa cara a cara en zonas con cobertura confirmada.
                    </p>
                  </div>
                </div>
              </div>

              {/* Footer Indicator in Card */}
              <div className="mt-6 pt-4 border-t border-slate-700/60 flex items-center justify-between text-xs text-slate-400">
                <span>Atención focalizada</span>
                <span className="font-semibold text-coral-500">1 o 2 alumnos</span>
              </div>

            </div>
          </div>

        </div>

        {/* Mini Testimonials Strip */}
        <div className="mt-12 pt-8 border-t border-slate-800/80">
          <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-5 sm:p-6 backdrop-blur-sm">
            <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-6">
              
              {/* Testimonials Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-1">
                {miniTestimonials.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/50 flex flex-col justify-between"
                  >
                    <div className="flex items-center gap-0.5 mb-2 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-xs sm:text-[13px] text-slate-200 italic leading-snug mb-2">
                      "{item.quote}"
                    </p>
                    <span className="text-[11px] font-semibold text-coral-400 tracking-wide uppercase">
                      – {item.author}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Link to Testimonials Page */}
              <div className="shrink-0 flex items-center justify-center xl:justify-end xl:pl-4 xl:border-l xl:border-slate-800">
                {onNavigateTestimonials ? (
                  <button
                    onClick={onNavigateTestimonials}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-coral-500/10 hover:bg-coral-500/20 text-coral-400 hover:text-coral-300 border border-coral-500/30 text-xs sm:text-sm font-semibold transition-all group shadow-sm text-center cursor-pointer"
                  >
                    <span>Leer las más de 185 opiniones -&gt;</span>
                    <ArrowRight className="w-4 h-4 text-coral-400 group-hover:translate-x-1 transition-transform" />
                  </button>
                ) : (
                  <a
                    href="#testimonios"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-coral-500/10 hover:bg-coral-500/20 text-coral-400 hover:text-coral-300 border border-coral-500/30 text-xs sm:text-sm font-semibold transition-all group shadow-sm text-center"
                  >
                    <span>Leer las más de 185 opiniones -&gt;</span>
                    <ArrowRight className="w-4 h-4 text-coral-400 group-hover:translate-x-1 transition-transform" />
                  </a>
                )}
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
