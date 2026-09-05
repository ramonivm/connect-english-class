import React from 'react';
import { CLASS_PLANS } from '../data/landingData';
import {
  User,
  CheckCircle2,
  Clock,
  ArrowRight,
  Sparkles,
  Zap,
  Tag,
} from 'lucide-react';

interface ClassFormatsProps {
  onSelectPlan?: (planName: string) => void;
  onConsultClick?: () => void;
}

export const ClassFormats: React.FC<ClassFormatsProps> = ({
  onSelectPlan,
  onConsultClick,
}) => {
  const handlePlanClick = (planName: string) => {
    if (onSelectPlan) {
      onSelectPlan(planName);
    } else if (onConsultClick) {
      onConsultClick();
    }
  };

  return (
    <section id="clases" className="py-12 sm:py-16 md:py-20 bg-slate-100/90 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-coral-500/10 text-coral-600 text-xs font-semibold uppercase tracking-wider">
            <Tag className="w-3.5 h-3.5" />
            <span>Planes de Clases & Valores</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B132B]">
            Elige el plan ideal para tu ritmo
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
            Tres alternativas claras con valores transparentes según la duración que necesitas. Todas las clases son <strong className="text-slate-800 font-semibold">100% individuales (1 a 1)</strong> y en <strong className="text-slate-800 font-semibold">modalidad online interactiva</strong>.
          </p>
        </div>

        {/* 3 Pricing Cards Display */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch max-w-6xl mx-auto">
          {CLASS_PLANS.map((plan) => {
            const isNormal = plan.popular;
            const isDoble = plan.id === 'clase-doble';
            const isQuick = plan.id === 'quick-class';

            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl transition-all duration-300 flex flex-col justify-between ${
                  isNormal
                    ? 'bg-white border-2 border-coral-500 shadow-xl shadow-coral-500/10 md:-translate-y-2 ring-4 ring-coral-500/10'
                    : 'bg-white border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md'
                } p-6 sm:p-7`}
              >
                {/* Popular / Recommended Badge */}
                {isNormal && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-coral-500 text-white text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full shadow-md flex items-center gap-1.5 whitespace-nowrap">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Plan Más Elegido</span>
                  </div>
                )}

                <div>
                  {/* Card Header & Badge */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span
                      className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md ${
                        isNormal
                          ? 'bg-coral-50 text-coral-600'
                          : isDoble
                          ? 'bg-indigo-50 text-indigo-700'
                          : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {plan.badge}
                    </span>
                    <span className="text-xs text-slate-500 font-semibold flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-slate-400" />
                      1 estudiante
                    </span>
                  </div>

                  {/* Plan Name */}
                  <h3 className="font-display text-2xl font-bold text-[#0B132B] tracking-tight">
                    {plan.name}
                  </h3>

                  {/* Duration Tag */}
                  <div className="mt-2.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 text-slate-800 text-xs font-semibold">
                    <Clock className="w-3.5 h-3.5 text-coral-500" />
                    <span>{plan.duration}</span>
                  </div>

                  {/* Price Display */}
                  <div className="mt-5 pb-5 border-b border-slate-100">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-3xl sm:text-4xl font-extrabold text-[#0B132B] font-display tracking-tight">
                        {plan.price}
                      </span>
                      <span className="text-xs text-slate-500 font-medium">/ clase</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">
                      {plan.durationPedagogical}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 mt-4 leading-relaxed font-sans min-h-[3.25rem]">
                    {plan.description}
                  </p>

                  {/* Features List */}
                  <div className="mt-6 space-y-3">
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Incluye:
                    </p>
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            isNormal ? 'text-coral-500' : 'text-emerald-600'
                          }`}
                        />
                        <span>
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <div className="mt-8 pt-5 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => handlePlanClick(plan.name)}
                    className={`w-full py-3 px-4 rounded-xl font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
                      isNormal
                        ? 'bg-coral-500 hover:bg-coral-600 text-white shadow-md shadow-coral-500/20'
                        : 'bg-[#0B132B] hover:bg-slate-800 text-white'
                    }`}
                  >
                    <span>Consultar {plan.name}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-[11px] text-center text-slate-400 mt-2">
                    Coordina horario y diagnóstico sin costo
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};


