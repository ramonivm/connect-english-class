import React from 'react';
import { ABOUT_DATA } from '../data/landingData';
import { Calendar, Users, SlidersHorizontal, Sparkles } from 'lucide-react';

export const AboutConnect: React.FC = () => {
  return (
    <section id="que-es" className="py-20 md:py-28 bg-white text-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-coral-500" />
            <span>Qué es Connect Class</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B132B] tracking-tight">
            {ABOUT_DATA.title}
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-sans pt-2">
            {ABOUT_DATA.description}
          </p>
        </div>

        {/* Indicators Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Indicator 1 */}
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200/80 hover:border-coral-500/30 hover:shadow-lg transition-all group text-center flex flex-col items-center">
            <div className="w-14 h-14 rounded-2xl bg-coral-500/10 text-coral-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Calendar className="w-7 h-7" />
            </div>
            <h3 className="font-display text-3xl sm:text-4xl font-bold text-[#0B132B] mb-2">
              {ABOUT_DATA.indicators[0].value}
            </h3>
            <p className="text-sm font-semibold text-slate-800 uppercase tracking-wide mb-1">
              {ABOUT_DATA.indicators[0].label}
            </p>
            <p className="text-sm text-slate-500 max-w-xs">
              {ABOUT_DATA.indicators[0].subtext}
            </p>
          </div>

          {/* Indicator 2 */}
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200/80 hover:border-coral-500/30 hover:shadow-lg transition-all group text-center flex flex-col items-center">
            <div className="w-14 h-14 rounded-2xl bg-[#1C2541]/10 text-[#1C2541] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Users className="w-7 h-7" />
            </div>
            <h3 className="font-display text-3xl sm:text-4xl font-bold text-[#0B132B] mb-2">
              {ABOUT_DATA.indicators[1].value}
            </h3>
            <p className="text-sm font-semibold text-slate-800 uppercase tracking-wide mb-1">
              {ABOUT_DATA.indicators[1].label}
            </p>
            <p className="text-sm text-slate-500 max-w-xs">
              {ABOUT_DATA.indicators[1].subtext}
            </p>
          </div>

          {/* Indicator 3 */}
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200/80 hover:border-coral-500/30 hover:shadow-lg transition-all group text-center flex flex-col items-center">
            <div className="w-14 h-14 rounded-2xl bg-slate-blue/10 text-slate-blue flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <SlidersHorizontal className="w-7 h-7" />
            </div>
            <h3 className="font-display text-3xl sm:text-4xl font-bold text-[#0B132B] mb-2">
              {ABOUT_DATA.indicators[2].value}
            </h3>
            <p className="text-sm font-semibold text-slate-800 uppercase tracking-wide mb-1">
              {ABOUT_DATA.indicators[2].label}
            </p>
            <p className="text-sm text-slate-500 max-w-xs">
              {ABOUT_DATA.indicators[2].subtext}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
