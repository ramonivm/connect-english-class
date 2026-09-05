import React, { useEffect } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Heart,
  Users,
  Sparkles,
  Award,
  CheckCircle2,
  Calendar,
  Compass,
  GraduationCap,
  MessageCircle,
} from 'lucide-react';

interface AboutUsViewProps {
  onBackToHome: () => void;
  onGoToContact: () => void;
  onGoToClasses: () => void;
}

export const AboutUsView: React.FC<AboutUsViewProps> = ({
  onBackToHome,
  onGoToContact,
  onGoToClasses,
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans pt-28 pb-20">
      {/* Top Header Hero Section */}
      <section className="relative bg-[#0B132B] text-white py-16 md:py-24 overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-coral-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-slate-blue/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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

          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-coral-400 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Nuestra Historia & Propósito</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.15]">
              Nosotros
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed">
              Una enseñanza personal, cercana y profundamente humana, diseñada para adaptarse a cómo aprende cada persona.
            </p>
          </div>
        </div>
      </section>

      {/* Main Narrative & Story Content */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20 space-y-12">
        
        {/* 1. El Origen: Historia Decisiva */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-xl shadow-slate-200/50 space-y-6">
          <div className="flex items-center gap-3 text-coral-500">
            <div className="w-10 h-10 rounded-xl bg-coral-50 flex items-center justify-center font-bold">
              <Compass className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-coral-600">
              El Origen
            </span>
          </div>

          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#0B132B] leading-snug">
            Una experiencia simple que cambió todo
          </h2>

          <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            <p>
              Connect Class nace de una experiencia muy simple pero decisiva: cuando su socio fundador tenía 13 años, una traductora de inglés-francés —amiga de su hermana— le enseñó inglés de forma particular. Esa forma de aprender, cercana, ordenada y centrada en él como estudiante, cambió por completo su manera de entender el idioma.
            </p>
            <p className="bg-slate-50 border-l-4 border-coral-500 p-5 rounded-r-2xl italic text-slate-700 font-medium">
              «Ahí surgió una idea que se mantuvo con el tiempo: cuando el aprendizaje tiene una estructura clara y un acompañamiento cercano, el progreso es mucho más sólido. En ese enfoque, la Incorporación Gramatical de Contenidos permite construir bases firmes y avanzar de forma natural, sin perder lo aprendido.»
            </p>
          </div>
        </div>

        {/* 2. El Equipo Multidisciplinario & Desarrollo */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-6 space-y-5 bg-[#1C2541] text-white rounded-3xl p-8 sm:p-10 border border-slate-700 shadow-xl">
            <div className="w-12 h-12 rounded-2xl bg-coral-500/20 text-coral-400 flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-display text-2xl font-bold text-white">
              De la experiencia al proyecto formal
            </h3>
            <p className="text-slate-300 text-base leading-relaxed">
              Años después, esa experiencia se transformó en proyecto. Junto a un equipo de profesores de inglés, psicólogos e ingenieros, se desarrolló una metodología para sistematizar esa forma de enseñar y llevarla a más personas.
            </p>
            <div className="pt-2 grid grid-cols-3 gap-2 text-center text-xs">
              <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                <GraduationCap className="w-4 h-4 text-coral-400 mx-auto mb-1" />
                <span className="font-semibold text-slate-200">Docentes</span>
              </div>
              <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                <Heart className="w-4 h-4 text-coral-400 mx-auto mb-1" />
                <span className="font-semibold text-slate-200">Psicólogos</span>
              </div>
              <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                <BookOpen className="w-4 h-4 text-coral-400 mx-auto mb-1" />
                <span className="font-semibold text-slate-200">Ingenieros</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-6 space-y-6 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-lg">
            <div className="w-12 h-12 rounded-2xl bg-slate-100 text-[#0B132B] flex items-center justify-center">
              <Award className="w-6 h-6 text-coral-500" />
            </div>
            <h3 className="font-display text-2xl font-bold text-[#0B132B]">
              Cómo lo organizamos hoy
            </h3>
            <p className="text-slate-600 text-base leading-relaxed">
              Hoy, Connect Class organiza el aprendizaje del inglés a través de una malla de progresión lógica, la Incorporación Gramatical de Contenidos, speaking personalizados, actividades de traducción y otras herramientas de la metodología, junto con un alto nivel de personalización, donde cada estudiante avanza a su ritmo, según sus objetivos e intereses, siempre acompañado por un profesor que actúa como guía en el proceso.
            </p>
          </div>
        </div>

        {/* 3. Coaching Educativo & Emoción al Aprender */}
        <div className="bg-gradient-to-br from-slate-900 to-[#1C2541] text-white rounded-3xl p-8 sm:p-12 border border-slate-700 shadow-xl relative overflow-hidden">
          <div className="max-w-3xl space-y-5 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-coral-500/20 text-coral-400 text-xs font-semibold uppercase tracking-wider">
              <Heart className="w-3.5 h-3.5" />
              <span>El factor humano</span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white leading-tight">
              Aprender un idioma no es solo cuestión de contenido. También importa cómo te sientes mientras aprendes.
            </h3>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Por eso, la metodología incorpora herramientas de coaching educativo que ayudan a mantener la motivación, entender el progreso y avanzar con confianza.
            </p>
          </div>
        </div>

        {/* 4. Trayectoria & Principio Rector (2016 a 2026) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-coral-50 text-coral-500 font-display font-bold flex items-center justify-center">
                2016
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Nuestra premisa fundamental
              </span>
            </div>
            <p className="text-slate-700 text-base sm:text-lg font-medium leading-relaxed">
              «Desde 2016, Connect Class se guía por una idea muy simple: no todos aprendemos igual, por lo tanto, no todos deberíamos aprender inglés de la misma forma.»
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 font-display font-bold flex items-center justify-center">
                2026
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Mejora continua
              </span>
            </div>
            <p className="text-slate-700 text-base sm:text-lg font-medium leading-relaxed">
              «Y desde 2026, la metodología sigue en un proceso constante de mejora continua, afinando su estructura y experiencia de aprendizaje.»
            </p>
          </div>
        </div>

        {/* 5. Misión Declarada */}
        <div className="bg-[#0B132B] text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl text-center space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-coral-500/20 text-coral-400 mx-auto flex items-center justify-center">
            <Sparkles className="w-8 h-8" />
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-coral-400">
              Nuestra Misión
            </span>
            <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-snug">
              «Crear la metodología más eficaz del mundo para aprender inglés, sin perder su esencia original: una enseñanza personal, cercana y profundamente humana.»
            </h3>
          </div>

          {/* Action Buttons */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onGoToClasses}
              className="w-full sm:w-auto bg-coral-500 hover:bg-coral-600 text-white font-semibold px-8 py-3.5 rounded-xl shadow-lg shadow-coral-500/20 transition-all transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2 cursor-pointer text-base"
            >
              <span>Ver planes y precios</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onGoToContact}
              className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-medium px-8 py-3.5 rounded-xl border border-slate-700 transition-all inline-flex items-center justify-center gap-2 cursor-pointer text-base"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Contáctanos</span>
            </button>

            <button
              onClick={onBackToHome}
              className="w-full sm:w-auto text-slate-400 hover:text-white font-medium px-4 py-3.5 transition-colors inline-flex items-center justify-center gap-2 text-sm cursor-pointer"
            >
              <span>← Volver al inicio</span>
            </button>
          </div>
        </div>

      </section>
    </div>
  );
};
