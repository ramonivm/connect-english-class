import React, { useEffect } from 'react';
import {
  X,
  MessageCircle,
  Mic,
  Calendar,
  BookOpen,
  TrendingUp,
} from 'lucide-react';

interface HowItWorksModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCtaClick?: () => void;
}

interface StepItem {
  num: number;
  title: string;
  desc: string;
  icon: React.ReactNode;
}

export const HowItWorksModal: React.FC<HowItWorksModalProps> = ({
  isOpen,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const steps: StepItem[] = [
    {
      num: 1,
      title: 'Tus objetivos',
      desc: 'Cuéntanos qué necesitas lograr con el inglés (laboral, viajes, entrevistas o fluidez).',
      icon: <MessageCircle className="w-5 h-5 text-coral-400" />,
    },
    {
      num: 2,
      title: 'Diagnóstico inicial sin costo',
      desc: 'Breve charla online personalizada para conocer tu nivel real y necesidades de aprendizaje.',
      icon: <Mic className="w-5 h-5 text-coral-400" />,
    },
    {
      num: 3,
      title: 'Tu plan a medida y horarios',
      desc: 'Definimos el plan ideal (30, 45 o 90 min) y coordinamos los días según tu disponibilidad.',
      icon: <Calendar className="w-5 h-5 text-coral-400" />,
    },
    {
      num: 4,
      title: 'Clases individuales en vivo',
      desc: 'Sesiones 1 a 1 online por videollamada, con material dinámico y conversación guiada.',
      icon: <BookOpen className="w-5 h-5 text-coral-400" />,
    },
    {
      num: 5,
      title: 'Seguimiento y avance continuo',
      desc: 'Evaluamos periódicamente tus logros y adaptamos los contenidos según tu evolución.',
      icon: <TrendingUp className="w-5 h-5 text-emerald-400" />,
    },
  ];

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 md:p-6"
      onClick={onClose}
    >
      <div
        className="bg-[#0B132B] text-white border border-slate-700/80 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[92vh] flex flex-col relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="how-it-works-modal-title"
      >
        {/* Background glow */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-coral-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Modal Header: Sólo el título y el botón de cerrar */}
        <div className="px-5 py-4 sm:px-6 sm:py-4.5 border-b border-slate-800 relative z-10 flex items-center justify-between gap-4 shrink-0">
          <h3
            id="how-it-works-modal-title"
            className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight"
          >
            ¿Cómo funciona Connect Class?
          </h3>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 sm:p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer shrink-0"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Cuadro ampliado con los 5 pasos optimizados */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-2.5 sm:space-y-3 relative z-10 flex-1">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-[#1C2541]/90 rounded-xl p-3 sm:p-3.5 border border-slate-700/70 hover:border-coral-500/40 hover:bg-[#222c4d] transition-colors flex items-center justify-between gap-3.5"
            >
              {/* Left: Step number and text */}
              <div className="flex items-center gap-3 sm:gap-3.5 min-w-0">
                <div className="w-8 h-8 rounded-lg bg-coral-500 text-white font-display font-bold text-sm flex items-center justify-center shrink-0 shadow-xs">
                  {step.num}
                </div>
                <div className="min-w-0">
                  <h4 className="font-display font-bold text-sm sm:text-base text-white leading-snug">
                    {step.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 font-sans mt-0.5 leading-snug">
                    {step.desc}
                  </p>
                </div>
              </div>

              {/* Right: Compact Icon */}
              <div className="shrink-0 flex items-center justify-center w-9 h-9 rounded-lg bg-slate-800/80 border border-slate-700/70">
                {step.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
