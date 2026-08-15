import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/landingData';
import { HelpCircle, ChevronDown, Timer } from 'lucide-react';

interface FaqProps {
  onOpenTest?: () => void;
}

export const Faq: React.FC<FaqProps> = ({ onOpenTest }) => {
  const [openId, setOpenId] = useState<string | null>('faq-level-test');

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const isLevelTestOpen = openId === 'faq-level-test';

  return (
    <section id="faq" className="py-20 md:py-28 bg-white text-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold uppercase tracking-wider">
            <HelpCircle className="w-4 h-4 text-coral-500" />
            <span>Resuelve tus Dudas</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B132B]">
            Preguntas Frecuentes
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-sans max-w-2xl mx-auto">
            Respuestas claras a las consultas más habituales sobre nuestras clases, metodología y modalidades.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {/* Static Level Test FAQ Item */}
          <div
            className={`rounded-2xl border transition-all duration-200 ${
              isLevelTestOpen
                ? 'border-coral-500/50 bg-slate-50/80 shadow-md'
                : 'border-slate-200 bg-white hover:border-slate-300'
            }`}
          >
            <button
              onClick={() => toggleItem('faq-level-test')}
              className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
            >
              <span className="font-display text-lg font-bold text-[#0B132B]">
                ¿Cómo puedo saber mi nivel actual de inglés de manera rápida?
              </span>
              <div
                className={`p-1.5 rounded-full transition-transform ${
                  isLevelTestOpen ? 'bg-coral-500 text-white rotate-180' : 'bg-slate-100 text-slate-600'
                }`}
              >
                <ChevronDown className="w-5 h-5" />
              </div>
            </button>

            {isLevelTestOpen && (
              <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 font-sans leading-relaxed border-t border-slate-200/50 space-y-4">
                <p>
                  Para conocer tu punto de partida, hemos diseñado una evaluación de diagnóstico breve que mide tu precisión y velocidad de respuesta.
                </p>
                <div>
                  <button
                    type="button"
                    onClick={onOpenTest}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-coral-50 hover:bg-coral-100 text-coral-500 font-bold text-sm border border-coral-200/80 transition-colors cursor-pointer"
                  >
                    <Timer className="w-4 h-4" />
                    <span>Realizar test de nivel</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Dynamic FAQ Items */}
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-200 ${
                  isOpen
                    ? 'border-coral-500/50 bg-slate-50/80 shadow-md'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                >
                  <span className="font-display text-lg font-bold text-[#0B132B]">
                    {item.question}
                  </span>
                  <div
                    className={`p-1.5 rounded-full transition-transform ${
                      isOpen ? 'bg-coral-500 text-white rotate-180' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 font-sans leading-relaxed border-t border-slate-200/50">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
