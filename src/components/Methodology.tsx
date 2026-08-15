import React from 'react';
import { METHODOLOGY_STEPS } from '../data/landingData';
import { Compass, Check, ArrowRight } from 'lucide-react';

export const Methodology: React.FC = () => {
  return (
    <section id="metodologia" className="py-20 md:py-28 bg-[#0B132B] text-white relative overflow-hidden">
      
      {/* Decorative Blur Effect */}
      <div className="absolute top-1/2 -right-20 w-80 h-80 bg-slate-blue/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-coral-500 text-xs font-semibold uppercase tracking-wider">
            <Compass className="w-4 h-4 text-coral-500" />
            <span>Nuestra Metodología</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Una metodología para comprender, incorporar y utilizar el inglés
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-sans max-w-2xl mx-auto">
            Un proceso iterativo de 6 pasos diseñado para transformar el conocimiento teórico en fluidez natural y seguridad al hablar.
          </p>
        </div>

        {/* Steps Grid Timeline */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {METHODOLOGY_STEPS.map((step) => (
            <div
              key={step.stepNumber}
              className="bg-[#1C2541]/90 rounded-2xl p-7 border border-slate-700/80 hover:border-coral-500/50 hover:shadow-2xl hover:shadow-coral-500/10 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Step Number Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-coral-500 text-white font-display font-bold text-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    {step.stepNumber}
                  </div>
                  <span className="text-xs uppercase tracking-widest text-slate-400 font-semibold">
                    Paso {step.stepNumber} de 6
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-coral-400 transition-colors">
                  {step.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed font-sans">
                  {step.description}
                </p>
              </div>

              {/* Step indicator footer */}
              <div className="mt-6 pt-4 border-t border-slate-700/60 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                  <Check className="w-3.5 h-3.5" />
                  Estructura guiada
                </span>
                {step.stepNumber < 6 && (
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-coral-400 group-hover:translate-x-1 transition-all" />
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
