import React from 'react';
import {
  PlayCircle,
  ArrowRight,
  MessageCircle,
  User,
  Mic,
  Calendar,
  Settings,
  BookOpen,
  Sparkles,
  BarChart2,
  TrendingUp,
  Check,
} from 'lucide-react';

interface HowItWorksProps {
  onCtaClick: () => void;
}

interface StepItem {
  num: number;
  title: string;
  desc: string;
  renderIllustration: () => React.ReactNode;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onCtaClick }) => {
  const steps: StepItem[] = [
    {
      num: 1,
      title: 'Tus objetivos',
      desc: 'Cuéntanos qué necesitas lograr con el inglés.',
      renderIllustration: () => (
        <div className="relative w-full h-32 bg-[#1C2541] rounded-xl border border-slate-700/80 p-3 flex flex-col items-center justify-center overflow-hidden group-hover:border-coral-500/50 transition-colors">
          {/* Laptop Screen Frame */}
          <div className="w-24 h-16 bg-slate-900 rounded-t-lg border border-slate-700 p-2 relative flex flex-col justify-between shadow-md">
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            </div>
            <div className="w-full bg-slate-800 h-2 rounded" />
            <div className="w-2/3 bg-slate-800 h-2 rounded" />
          </div>
          {/* Laptop Keyboard Base */}
          <div className="w-28 h-1.5 bg-slate-700 rounded-b-md border-t border-slate-600 shadow-sm" />

          {/* Floating Chat Bubble with Bounce */}
          <div className="absolute top-3 right-6 bg-coral-500 text-white p-2 rounded-xl rounded-bl-none shadow-lg animate-bounce flex items-center justify-center">
            <MessageCircle className="w-4 h-4 fill-white/20" />
          </div>
        </div>
      ),
    },
    {
      num: 2,
      title: 'Conocemos tu nivel',
      desc: 'Breve charla de diagnóstico sin costo.',
      renderIllustration: () => (
        <div className="relative w-full h-32 bg-[#1C2541] rounded-xl border border-slate-700/80 p-3 flex items-center justify-center gap-3 overflow-hidden group-hover:border-coral-500/50 transition-colors">
          {/* Videocall Frame Left */}
          <div className="w-16 h-20 bg-slate-900 rounded-lg border border-slate-700 p-2 flex flex-col items-center justify-center gap-1 shadow-md">
            <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300">
              <User className="w-4 h-4" />
            </div>
            <span className="text-[9px] text-slate-400">Tú</span>
          </div>

          {/* Videocall Frame Right with Mic Pulse */}
          <div className="w-16 h-20 bg-slate-900 rounded-lg border border-coral-500/40 p-2 flex flex-col items-center justify-center gap-1 shadow-md relative">
            <div className="w-8 h-8 rounded-full bg-coral-500/20 text-coral-400 flex items-center justify-center relative">
              <Mic className="w-4 h-4 text-coral-400 animate-pulse" />
              <span className="absolute inset-0 rounded-full border border-coral-500/50 animate-ping" />
            </div>
            <span className="text-[9px] text-coral-400 font-medium">Docente</span>
          </div>
        </div>
      ),
    },
    {
      num: 3,
      title: 'Tu plan a medida',
      desc: 'Diseñamos formato, modalidad y horarios.',
      renderIllustration: () => (
        <div className="relative w-full h-32 bg-[#1C2541] rounded-xl border border-slate-700/80 p-3 flex items-center justify-center overflow-hidden group-hover:border-coral-500/50 transition-colors">
          {/* Calendar Card */}
          <div className="w-28 bg-slate-900 border border-slate-700 rounded-xl p-2.5 shadow-md space-y-2 relative">
            <div className="flex items-center justify-between border-b border-slate-800 pb-1.5">
              <Calendar className="w-4 h-4 text-coral-400" />
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-coral-500" />
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-1">
              <div className="h-2 rounded bg-coral-500/80" />
              <div className="h-2 rounded bg-slate-800" />
              <div className="h-2 rounded bg-blue-500/80" />
              <div className="h-2 rounded bg-slate-800" />
              <div className="h-2 rounded bg-coral-500/80" />
              <div className="h-2 rounded bg-slate-800" />
            </div>
          </div>

          {/* Rotating Settings Gear */}
          <div className="absolute bottom-2 right-4 bg-slate-800 text-coral-400 p-1.5 rounded-full border border-slate-700 shadow-md">
            <Settings className="w-4 h-4 animate-spin [animation-duration:8s]" />
          </div>
        </div>
      ),
    },
    {
      num: 4,
      title: 'Tu aprendizaje',
      desc: 'Inicias tus clases con una guía clara.',
      renderIllustration: () => (
        <div className="relative w-full h-32 bg-[#1C2541] rounded-xl border border-slate-700/80 p-3 flex items-center justify-center overflow-hidden group-hover:border-coral-500/50 transition-colors">
          {/* Open Book Base */}
          <div className="relative bg-slate-900 border border-slate-700 rounded-xl p-3 flex items-center justify-center shadow-md">
            <BookOpen className="w-10 h-10 text-coral-400" />

            {/* Rising Sparkles */}
            <div className="absolute -top-3 left-2 text-amber-300 animate-pulse">
              <Sparkles className="w-4 h-4" />
            </div>
            <div className="absolute -top-4 right-2 text-coral-400 animate-bounce [animation-duration:2s]">
              <Sparkles className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      ),
    },
    {
      num: 5,
      title: 'Revisamos tu evolución',
      desc: 'Evaluamos avances y ajustamos temas.',
      renderIllustration: () => (
        <div className="relative w-full h-32 bg-[#1C2541] rounded-xl border border-slate-700/80 p-3 flex items-center justify-center overflow-hidden group-hover:border-coral-500/50 transition-colors">
          {/* Chart Frame */}
          <div className="w-28 bg-slate-900 border border-slate-700 rounded-xl p-3 shadow-md flex flex-col justify-between h-20 relative">
            <div className="flex items-end justify-between gap-1.5 h-10 pt-2 border-b border-slate-800">
              <div className="w-3 bg-slate-700 rounded-t h-3" />
              <div className="w-3 bg-blue-500/60 rounded-t h-5" />
              <div className="w-3 bg-coral-500/80 rounded-t h-7" />
              <div className="w-3 bg-coral-500 rounded-t h-9 animate-pulse" />
            </div>
            <div className="flex items-center justify-between text-[9px] text-slate-400 pt-1">
              <span>Progreso</span>
              <TrendingUp className="w-3 h-3 text-emerald-400 animate-bounce" />
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="como-funciona" className="py-20 md:py-28 bg-[#0B132B] text-white relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-coral-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-coral-500 text-xs font-semibold uppercase tracking-wider">
            <PlayCircle className="w-4 h-4" />
            <span>Paso a Paso</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Comenzar es simple
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-sans max-w-2xl mx-auto">
            Cinco pasos sencillos desde tu inquietud inicial hasta ver avances reales en tu nivel de inglés.
          </p>
        </div>

        {/* TIMELINE CONTAINER */}
        <div className="mt-16 sm:mt-24 relative">
          
          {/* DESKTOP TIMELINE (md and up): Horizontal central line with zigzag alternating cards */}
          <div className="hidden md:block relative">
            {/* Horizontal Line passing through center */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-700/80 -translate-y-1/2 z-0" />

            <div className="grid grid-cols-5 gap-4 relative z-10">
              {steps.map((step, idx) => {
                const isTop = idx % 2 === 0;
                return (
                  <div key={step.num} className="flex flex-col items-center">
                    {/* Top Content Box if even index */}
                    <div className="w-full h-64 flex flex-col justify-end mb-6">
                      {isTop && (
                        <div className="bg-[#1C2541] rounded-2xl p-4 border border-slate-700/80 hover:border-coral-500/60 hover:bg-[#222c4d] transition-all duration-300 shadow-xl group flex flex-col justify-between h-full">
                          {step.renderIllustration()}
                          <div className="mt-3">
                            <h3 className="font-display font-bold text-base text-white leading-snug">
                              {step.num}. {step.title}
                            </h3>
                            <p className="text-xs text-slate-300 font-sans mt-1 leading-relaxed line-clamp-2">
                              {step.desc}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Central Circle Node on the timeline */}
                    <div className="w-12 h-12 rounded-full bg-coral-500 text-white font-display font-extrabold text-base flex items-center justify-center border-4 border-[#0B132B] shadow-lg shrink-0 z-20 transform hover:scale-110 transition-transform">
                      {step.num}
                    </div>

                    {/* Bottom Content Box if odd index */}
                    <div className="w-full h-64 flex flex-col justify-start mt-6">
                      {!isTop && (
                        <div className="bg-[#1C2541] rounded-2xl p-4 border border-slate-700/80 hover:border-coral-500/60 hover:bg-[#222c4d] transition-all duration-300 shadow-xl group flex flex-col justify-between h-full">
                          {step.renderIllustration()}
                          <div className="mt-3">
                            <h3 className="font-display font-bold text-base text-white leading-snug">
                              {step.num}. {step.title}
                            </h3>
                            <p className="text-xs text-slate-300 font-sans mt-1 leading-relaxed line-clamp-2">
                              {step.desc}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* MOBILE TIMELINE (< md): Vertical left line with stacked cards */}
          <div className="block md:hidden relative pl-6 space-y-8">
            {/* Vertical Left Line */}
            <div className="absolute top-4 bottom-4 left-6 w-1 bg-slate-700/80 -translate-x-1/2 z-0" />

            {steps.map((step) => (
              <div key={step.num} className="relative flex items-start gap-4">
                {/* Vertical Node Circle */}
                <div className="absolute -left-6 top-0 -translate-x-1/2 w-10 h-10 rounded-full bg-coral-500 text-white font-display font-bold text-sm flex items-center justify-center border-2 border-[#0B132B] shadow-lg shrink-0 z-10">
                  {step.num}
                </div>

                {/* Card */}
                <div className="ml-4 flex-1 bg-[#1C2541] rounded-2xl p-5 border border-slate-700/80 hover:border-coral-500/50 hover:bg-[#222c4d] transition-all shadow-lg group">
                  {step.renderIllustration()}
                  <div className="mt-4">
                    <h3 className="font-display font-bold text-lg text-white">
                      {step.num}. {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 font-sans mt-1 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Action Button */}
        <div className="mt-16 sm:mt-20 text-center">
          <button
            id="how-it-works-cta-btn"
            onClick={onCtaClick}
            className="bg-coral-500 hover:bg-coral-600 text-white font-semibold text-base px-8 py-4 rounded-xl shadow-xl shadow-coral-500/20 transition-all transform hover:-translate-y-0.5 inline-flex items-center gap-2.5 cursor-pointer"
          >
            <span>Quiero comenzar</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
