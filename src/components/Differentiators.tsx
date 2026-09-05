import React from 'react';
import { DIFFERENTIATORS } from '../data/landingData';
import {
  UserCheck,
  TrendingUp,
  MessageSquare,
  Sliders,
  HeartHandshake,
  ShieldCheck,
  CheckCircle,
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  UserCheck: <UserCheck className="w-6 h-6" />,
  TrendingUp: <TrendingUp className="w-6 h-6" />,
  MessageSquare: <MessageSquare className="w-6 h-6" />,
  Sliders: <Sliders className="w-6 h-6" />,
  HeartHandshake: <HeartHandshake className="w-6 h-6" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6" />,
};

export const Differentiators: React.FC = () => {
  return (
    <section id="diferenciales" className="py-8 sm:py-10 md:py-12 bg-slate-100/70 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-coral-500/10 text-coral-500 text-xs font-semibold uppercase tracking-wider">
            <CheckCircle className="w-3.5 h-3.5" />
            <span>Factores Diferenciales</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B132B]">
            Tus objetivos definen tus clases
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-sans">
            Descubre los pilares que garantizan una experiencia de aprendizaje de inglés adaptada a tu vida real.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {DIFFERENTIATORS.map((diff) => {
            const icon = iconMap[diff.iconName] || <UserCheck className="w-5 h-5" />;
            return (
              <div
                key={diff.id}
                className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200/90 shadow-sm hover:shadow-md hover:border-coral-500/40 transition-all duration-200 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#0B132B] text-coral-500 flex items-center justify-center mb-3 group-hover:bg-coral-500 group-hover:text-white transition-colors duration-200 shadow-sm">
                    {icon}
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#0B132B] mb-1.5 leading-snug">
                    {diff.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                    {diff.description}
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
