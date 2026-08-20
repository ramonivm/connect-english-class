import React, { useState } from 'react';
import { CLASS_FORMATS, CLASS_MODALITIES } from '../data/landingData';
import {
  User,
  Users,
  UsersRound,
  Laptop,
  MapPin,
  CheckCircle2,
  Clock,
  HelpCircle,
  ArrowRight,
  Info,
} from 'lucide-react';

const formatIconMap: Record<string, React.ReactNode> = {
  User: <User className="w-6 h-6" />,
  Users: <Users className="w-6 h-6" />,
  UsersRound: <UsersRound className="w-6 h-6" />,
};

const modalityIconMap: Record<string, React.ReactNode> = {
  Laptop: <Laptop className="w-6 h-6" />,
  MapPin: <MapPin className="w-6 h-6" />,
};

interface ClassFormatsProps {
  onSelectFormat: (formatTitle: string, modalityTitle: string) => void;
}

export const ClassFormats: React.FC<ClassFormatsProps> = ({ onSelectFormat }) => {
  const [selectedFormat, setSelectedFormat] = useState('Clase individual');
  const [selectedModality, setSelectedModality] = useState('Modalidad Online');

  return (
    <section id="clases" className="py-20 md:py-28 bg-slate-100/80 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-coral-500/10 text-coral-500 text-xs font-semibold uppercase tracking-wider">
            <Clock className="w-4 h-4" />
            <span>Formatos & Modalidades</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B132B]">
            Encuentra un formato que se adapte a ti
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-sans">
            Elige la cantidad de participantes y la modalidad de cursada que mejor se ajuste a tus tiempos y preferencias.
          </p>
        </div>

        {/* Commercial Notice Card with Marker explicitly matching prompt */}
        <div className="mt-10 max-w-4xl mx-auto bg-amber-500/10 border border-amber-500/30 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-700 shrink-0 mt-0.5 sm:mt-0">
              <Info className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-sm text-slate-900 uppercase tracking-wider">
                  Información Comercial & Disponibilidad
                </span>
                <span className="text-xs px-2 py-0.5 rounded bg-amber-200 text-amber-900 font-mono font-semibold">
                  [PENDIENTE: indicar duración de las clases, precios y horarios]
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                La duración exacta de las sesiones, cuadro de precios y horarios disponibles se coordinan en forma personalizada según tus metas y disponibilidad horaria.
              </p>
            </div>
          </div>
          
          <a
            href="#contacto"
            onClick={() => onSelectFormat(selectedFormat, selectedModality)}
            className="shrink-0 bg-[#0B132B] hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-xl transition-all flex items-center gap-2"
          >
            <span>Consultar propuestas</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* SUBSECTION 1: Group Size Options */}
        <div className="mt-16">
          <div className="flex items-center gap-3 mb-8 pb-3 border-b border-slate-300">
            <h3 className="font-display text-2xl font-bold text-[#0B132B]">
              1. Por cantidad de integrantes
            </h3>
            <span className="text-xs text-slate-500 font-medium">(Selecciona tu preferencia)</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CLASS_FORMATS.map((fmt) => {
              const icon = formatIconMap[fmt.iconName] || <User className="w-6 h-6" />;
              const isSelected = selectedFormat === fmt.title;
              return (
                <div
                  key={fmt.id}
                  onClick={() => setSelectedFormat(fmt.title)}
                  className={`relative rounded-2xl p-8 transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-white border-2 border-coral-500 shadow-xl ring-2 ring-coral-500/20'
                      : 'bg-white border border-slate-200 hover:border-slate-400 hover:shadow-md'
                  }`}
                >
                  {fmt.badge && (
                    <span className="absolute -top-3 right-6 bg-coral-500 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                      {fmt.badge}
                    </span>
                  )}

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                          isSelected ? 'bg-coral-500 text-white' : 'bg-slate-100 text-[#0B132B]'
                        }`}
                      >
                        {icon}
                      </div>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700">
                        {fmt.capacity}
                      </span>
                    </div>

                    <h4 className="font-display text-2xl font-bold text-[#0B132B] mb-1">
                      {fmt.title}
                    </h4>

                    <p className="text-xs font-semibold text-coral-600 mb-3">
                      {fmt.subtitle}
                    </p>

                    <p className="text-sm text-slate-600 leading-relaxed font-sans mb-4">
                      {fmt.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <p className="text-xs text-slate-500">
                      <strong className="text-slate-700">Ideal para:</strong> {fmt.recommendedFor}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* SUBSECTION 2: Modality Options */}
        <div className="mt-16">
          <div className="flex items-center gap-3 mb-8 pb-3 border-b border-slate-300">
            <h3 className="font-display text-2xl font-bold text-[#0B132B]">
              2. Por modalidad de cursada
            </h3>
            <span className="text-xs text-slate-500 font-medium">(Elige según tu ubicación)</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CLASS_MODALITIES.map((mod) => {
              const icon = modalityIconMap[mod.iconName] || <Laptop className="w-6 h-6" />;
              const isSelected = selectedModality === mod.title;
              return (
                <div
                  key={mod.id}
                  onClick={() => setSelectedModality(mod.title)}
                  className={`rounded-2xl p-8 transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-white border-2 border-coral-500 shadow-xl ring-2 ring-coral-500/20'
                      : 'bg-white border border-slate-200 hover:border-slate-400 hover:shadow-md'
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                          isSelected ? 'bg-coral-500 text-white' : 'bg-slate-100 text-[#0B132B]'
                        }`}
                      >
                        {icon}
                      </div>
                      <div>
                        <h4 className="font-display text-2xl font-bold text-[#0B132B]">
                          {mod.title}
                        </h4>
                        <span className="text-xs text-slate-500 font-medium">
                          {mod.id === 'online' ? 'Sin límites geográficos' : 'Sujeto a zona de cobertura'}
                        </span>
                      </div>
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed font-sans mb-6">
                      {mod.description}
                    </p>

                    <div className="space-y-2.5 mb-6">
                      {mod.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-coral-500 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span>
                      {mod.id === 'online' ? 'Plataformas interactivas' : 'En tu domicilio o punto acordado'}
                    </span>
                    <span className="font-semibold text-coral-600">
                      {isSelected ? 'Modalidad Seleccionada' : 'Haz clic para seleccionar'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA to Consult */}
        <div className="mt-12 text-center">
          <a
            href="#contacto"
            onClick={() => onSelectFormat(selectedFormat, selectedModality)}
            className="inline-flex items-center gap-2 bg-coral-500 hover:bg-coral-600 text-white font-semibold text-base px-8 py-3.5 rounded-xl shadow-lg transition-all cursor-pointer"
          >
            <span>Consultar disponibilidad para {selectedFormat} ({selectedModality})</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

      </div>
    </section>
  );
};
