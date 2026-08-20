import React, { useEffect } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Star,
  Quote,
  CheckCircle2,
  ExternalLink,
  Sparkles,
  Calendar,
  Award,
  MessageCircle,
} from 'lucide-react';

interface TestimonialsViewProps {
  onBackToHome: () => void;
  onGoToContact: () => void;
}

interface TestimonialItem {
  id: string;
  name: string;
  avatarColor: string;
  role?: string;
  stars: number;
  text: string;
  highlight?: string;
  verified?: boolean;
}

export const TestimonialsView: React.FC<TestimonialsViewProps> = ({
  onBackToHome,
  onGoToContact,
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const testimonials: TestimonialItem[] = [
    {
      id: 'paulina',
      name: 'Paulina',
      avatarColor: 'bg-coral-500',
      role: 'Estudiante Connect',
      stars: 5,
      text: 'Excelente profesor, muy dedicado, prepara material según lo que necesitas...',
      highlight: 'Material personalizado',
      verified: true,
    },
    {
      id: 'ignacio',
      name: 'Ignacio',
      avatarColor: 'bg-blue-600',
      role: 'Estudiante Connect',
      stars: 5,
      text: 'Profesor con mucha paciencia y pedagogía. Me ayudó a soltarme mucho al momento de hablar, y además me dio muchos tips...',
      highlight: 'Fluidez y confianza al hablar',
      verified: true,
    },
    {
      id: 'macarena',
      name: 'Macarena',
      avatarColor: 'bg-emerald-600',
      role: 'Preparación laboral',
      stars: 5,
      text: 'Clases muy dinámicas y personalizadas, te ayudan con lo que realmente necesitas. Me sirvió mucho para preparar una entrevista laboral. Lo recomiendo totalmente.',
      highlight: 'Entrevista laboral exitosa',
      verified: true,
    },
    {
      id: 'fabi',
      name: 'Fabi',
      avatarColor: 'bg-purple-600',
      role: 'Estudiante Connect',
      stars: 5,
      text: 'Diego es un profe muy dedicado y profesional. Prepara las clases según tus necesidades y con material súper entretenido. Es súper paciente y claro para explicar.',
      highlight: 'Clases entretenidas y claras',
      verified: true,
    },
    {
      id: 'jose',
      name: 'Jose',
      avatarColor: 'bg-indigo-600',
      role: 'Estudiante Connect',
      stars: 5,
      text: 'Diego es un profesor que te hace sentir muy cómodo, se adapta al nivel y necesidades, las clases son súper dinámicas e interactivas. Lo recomiendo 100%.',
      highlight: 'Dinámico e interactivo 100%',
      verified: true,
    },
    {
      id: 'javiera',
      name: 'Javiera',
      avatarColor: 'bg-rose-500',
      role: 'Estudiante continuo',
      stars: 5,
      text: 'Tomé clases con Diego por harto tiempo y la verdad fue la mejor decisión. Es un excelente profesor, muy paciente, claro para explicar y muy dedicado.',
      highlight: 'La mejor decisión de aprendizaje',
      verified: true,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans pt-28 pb-20">
      {/* 1. Header (Hero de la página de Testimonios) */}
      <section className="relative bg-[#0B132B] text-white py-16 md:py-24 overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-coral-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb and Back Action */}
          <div className="flex items-center justify-between gap-4 mb-8">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 text-sm font-medium transition-all duration-200 cursor-pointer shadow-sm group"
            >
              <ArrowLeft className="w-4 h-4 text-coral-400 group-hover:-translate-x-1 transition-transform" />
              <span>Volver a la página principal</span>
            </button>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-coral-400 text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Testimonios de Estudiantes</span>
              </div>

              <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.15]">
                Lo que dicen nuestros estudiantes
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed">
                Más de 185 opiniones y recomendaciones verificadas
              </p>
            </div>

            {/* Prominent Visual Rating Element */}
            <div className="bg-slate-900/90 border border-slate-700/80 rounded-2xl p-6 shadow-xl flex items-center gap-5 backdrop-blur-sm self-start lg:self-auto">
              <div className="w-16 h-16 rounded-2xl bg-coral-500/10 border border-coral-500/30 flex flex-col items-center justify-center text-coral-400 shrink-0">
                <span className="text-2xl font-display font-extrabold text-white">5.0</span>
                <span className="text-[10px] uppercase font-bold tracking-wider text-coral-400">Excelente</span>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm font-semibold text-white">
                  Calificación perfecta 5.0
                </p>
                <p className="text-xs text-slate-400">
                  Opiniones 100% verificadas en Superprof
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Grid de Reseñas */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20 space-y-10">
        
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-lg shadow-slate-200/40 hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Header card with stars and quote icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-slate-300 group-hover:text-coral-400 transition-colors" />
                </div>

                {/* Testimonial Text */}
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic">
                  "{item.text}"
                </p>
              </div>

              {/* Author info */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${item.avatarColor} text-white font-bold flex items-center justify-center text-sm shadow-sm`}>
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-slate-900 text-base leading-tight">
                      {item.name}
                    </h4>
                    <span className="text-xs text-slate-500">
                      {item.role || 'Estudiante'}
                    </span>
                  </div>
                </div>

                {item.verified && (
                  <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verificado</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Verificación Externa Superprof Banner */}
        <div className="bg-gradient-to-r from-slate-900 to-[#0B132B] rounded-2xl p-6 sm:p-8 text-white border border-slate-800 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-coral-500/20 border border-coral-500/40 text-coral-400 flex items-center justify-center shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-white">
                ¿Quieres revisar todas las opiniones en detalle?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Diego cuenta con más de 11 años de trayectoria y perfil verificado en Superprof.
              </p>
            </div>
          </div>

          <a
            href="https://www.superprof.cl/mas-anos-impartiendo-clases-ingles-estudiantes-desde-los-anos-sin-limite-edad-clases-particulares-online.html"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-coral-500 hover:bg-coral-600 text-white font-semibold text-sm shadow-md transition-all group shrink-0"
          >
            <span>Ver perfil completo en Superprof</span>
            <ExternalLink className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* 3. Cierre / Call To Action */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl text-center space-y-6">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-coral-50 text-coral-500 mx-auto">
            <Calendar className="w-7 h-7" />
          </div>

          <div className="max-w-2xl mx-auto space-y-3">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#0B132B]">
              Comienza hoy tu camino hacia la fluidez
            </h3>
            <p className="text-slate-600 text-base sm:text-lg">
              Diseñamos cada clase según tus objetivos personales y tu ritmo de aprendizaje.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onGoToContact}
              className="w-full sm:w-auto bg-coral-500 hover:bg-coral-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-coral-500/25 transition-all transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2 cursor-pointer text-base"
            >
              <span>Agenda tu clase hoy</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onBackToHome}
              className="w-full sm:w-auto bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium px-6 py-4 rounded-xl transition-colors inline-flex items-center justify-center gap-2 cursor-pointer text-sm"
            >
              <span>Volver al inicio</span>
            </button>
          </div>
        </div>

      </section>
    </div>
  );
};
