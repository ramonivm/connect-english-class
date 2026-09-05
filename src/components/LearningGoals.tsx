import React from 'react';
import { LEARNING_GOALS } from '../data/landingData';
import {
  Plane,
  Briefcase,
  Award,
  GraduationCap,
  Building2,
  Globe,
  BookOpen,
  Sparkles,
  Target,
  ArrowRight,
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Plane: <Plane className="w-6 h-6" />,
  Briefcase: <Briefcase className="w-6 h-6" />,
  Award: <Award className="w-6 h-6" />,
  GraduationCap: <GraduationCap className="w-6 h-6" />,
  Building2: <Building2 className="w-6 h-6" />,
  Globe: <Globe className="w-6 h-6" />,
  BookOpen: <BookOpen className="w-6 h-6" />,
  Sparkles: <Sparkles className="w-6 h-6" />,
};

interface LearningGoalsProps {
  onSelectGoal: (goalTitle: string) => void;
}

export const LearningGoals: React.FC<LearningGoalsProps> = ({ onSelectGoal }) => {
  return (
    <section id="objetivos" className="py-8 sm:py-10 md:py-12 bg-white text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold uppercase tracking-wider">
            <Target className="w-4 h-4 text-coral-500" />
            <span>Objetivos de Aprendizaje</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B132B]">
            ¿Para qué necesitas aprender inglés?
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-sans">
            Ajustamos los contenidos, conversaciones y ejercicios para que respondan directamente a lo que necesitas en tu vida diaria o profesional.
          </p>
        </div>

        {/* Goals Grid */}
        <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
          {LEARNING_GOALS.map((goal) => {
            const icon = iconMap[goal.iconName] || <Sparkles className="w-5 h-5" />;
            return (
              <div
                key={goal.id}
                className="bg-slate-50 rounded-xl p-4 border border-slate-200 hover:border-coral-500 hover:bg-white hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="w-9 h-9 rounded-lg bg-[#0B132B] text-coral-500 flex items-center justify-center group-hover:bg-coral-500 group-hover:text-white transition-colors duration-200 shadow-sm">
                      {icon}
                    </div>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-200/70 text-slate-700 group-hover:bg-coral-50 group-hover:text-coral-600 transition-colors">
                      {goal.tag}
                    </span>
                  </div>

                  <h3 className="font-display text-base font-bold text-[#0B132B] mb-1 group-hover:text-coral-600 transition-colors leading-snug">
                    {goal.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed font-sans">
                    {goal.description}
                  </p>
                </div>

                <div className="mt-3 pt-2.5 border-t border-slate-200/60 flex items-center justify-between">
                  <button
                    onClick={() => onSelectGoal(goal.title)}
                    className="text-xs font-semibold text-coral-500 hover:text-coral-600 flex items-center gap-1 group/btn cursor-pointer"
                  >
                    <span>Elegir este objetivo</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
