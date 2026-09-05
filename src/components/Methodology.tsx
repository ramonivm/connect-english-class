import React from 'react';
import { METHODOLOGY_STEPS } from '../data/landingData';
import { Compass, Check, ArrowRight, PlayCircle } from 'lucide-react';

interface MethodologyProps {
  onOpenHowItWorks?: () => void;
}

export const Methodology: React.FC<MethodologyProps> = ({ onOpenHowItWorks }) => {
  return (
    <section id="metodologia" className="py-8 sm:py-10 md:py-12 bg-[#0B132B] text-white relative overflow-hidden">
      
      {/* Decorative Blur Effect */}
      <div className="absolute top-1/2 -right-20 w-80 h-80 bg-slate-blue/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-coral-500 text-xs font-semibold uppercase tracking-wider">
            <Compass className="w-4 h-4 text-coral-500" />
            <span>Nuestra Metodología</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Una metodología para comprender, incorporar y utilizar el inglés
          </h2>

          <p className="text-sm sm:text-base text-slate-300 font-sans max-w-2xl mx-auto">
            Un proceso iterativo de 6 pasos diseñado para transformar el conocimiento teórico en fluidez natural y seguridad al hablar.
          </p>
        </div>

        {/* Steps Grid Timeline */}
        <div className="mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {METHODOLOGY_STEPS.map((step) => (
            <div
              key={step.stepNumber}
              className="bg-[#1C2541]/90 rounded-xl p-4 sm:p-5 border border-slate-700/80 hover:border-coral-500/50 hover:shadow-xl hover:shadow-coral-500/10 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                {/* Step Number Badge */}
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-lg bg-coral-500 text-white font-display font-bold text-base flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                    {step.stepNumber}
                  </div>
                  <span className="text-[11px] uppercase tracking-widest text-slate-400 font-semibold">
                    Paso {step.stepNumber} de 6
                  </span>
                </div>

                <h3 className="font-display text-lg font-bold text-white mb-1.5 group-hover:text-coral-400 transition-colors leading-snug">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  {step.description}
                </p>
              </div>

              {/* Step indicator footer */}
              <div className="mt-4 pt-3 border-t border-slate-700/60 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400 font-medium text-[11px]">
                  <Check className="w-3.5 h-3.5" />
                  Estructura guiada
                </span>
                {step.stepNumber < 6 && (
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-coral-400 group-hover:translate-x-1 transition-all" />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Callout / Button to open "Cómo funciona" modal */}
        {onOpenHowItWorks && (
          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#1C2541]/70 rounded-2xl p-5 border border-slate-700/80">
            <div className="flex items-center gap-3.5 text-left">
              <div className="w-10 h-10 rounded-xl bg-coral-500/20 text-coral-400 flex items-center justify-center shrink-0">
                <PlayCircle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-display font-bold text-sm sm:text-base text-white">
                  ¿Quieres ver el proceso completo paso a paso?
                </h4>
                <p className="text-xs text-slate-300">
                  Conoce cómo se coordinan tus clases desde tu primera consulta hasta la evaluación continua.
                </p>
              </div>
            </div>

            <button
              type="button"
              id="btn-open-how-it-works"
              onClick={onOpenHowItWorks}
              className="w-full sm:w-auto shrink-0 bg-coral-500 hover:bg-coral-600 text-white font-semibold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-lg shadow-coral-500/20 transition-all transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
            >
              <span>Ver cómo funciona</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
