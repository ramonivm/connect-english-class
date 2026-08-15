import React, { useState, useEffect } from 'react';
import { ContactFormData } from '../types';
import {
  Mail,
  Phone,
  User,
  MessageSquare,
  Send,
  CheckCircle2,
  Sparkles,
  Plane,
  Briefcase,
  GraduationCap,
  Globe,
  Mic,
  Headphones,
  PenTool,
  Brain,
  Settings,
  ArrowRight,
  ArrowLeft,
  Check,
  ClipboardCheck,
} from 'lucide-react';

interface ContactFormProps {
  initialGoal?: string;
  initialFormat?: string;
  initialModality?: string;
  onOpenTest?: () => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  initialGoal = '',
  initialFormat = '',
  initialModality = '',
  onOpenTest,
}) => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  const [formData, setFormData] = useState<ContactFormData>({
    nombre: '',
    correo: '',
    telefono: '',
    nivelAproximado: 'Inicial / Principiante (A1-A2)',
    objetivoPrincipal: initialGoal || 'Inglés para el trabajo',
    objetivos: initialGoal ? [initialGoal] : [],
    enfoques: [],
    mensaje: '',
    modalidadPreferida: initialModality || 'Modalidad Online',
    tamanoGrupo: initialFormat || 'Clase individual',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (initialGoal) {
      setFormData((prev) => ({
        ...prev,
        objetivoPrincipal: initialGoal,
        objetivos: prev.objetivos.length === 0 ? [initialGoal] : prev.objetivos,
      }));
    }
  }, [initialGoal]);

  useEffect(() => {
    if (initialFormat) {
      setFormData((prev) => ({ ...prev, tamanoGrupo: initialFormat }));
    }
  }, [initialFormat]);

  useEffect(() => {
    if (initialModality) {
      setFormData((prev) => ({ ...prev, modalidadPreferida: initialModality }));
    }
  }, [initialModality]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleObjetivo = (title: string) => {
    setFormData((prev) => {
      const exists = prev.objetivos.includes(title);
      if (exists) {
        return { ...prev, objetivos: prev.objetivos.filter((item) => item !== title) };
      }
      if (prev.objetivos.length >= 3) {
        return prev;
      }
      return { ...prev, objetivos: [...prev.objetivos, title] };
    });
  };

  const toggleEnfoque = (title: string) => {
    setFormData((prev) => {
      const exists = prev.enfoques.includes(title);
      if (exists) {
        return { ...prev, enfoques: prev.enfoques.filter((item) => item !== title) };
      }
      return { ...prev, enfoques: [...prev.enfoques, title] };
    });
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate response timeout
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setSubmitted(false);
    setCurrentStep(1);
    setFormData({
      nombre: '',
      correo: '',
      telefono: '',
      nivelAproximado: 'Inicial / Principiante (A1-A2)',
      objetivoPrincipal: initialGoal || 'Inglés para el trabajo',
      objetivos: initialGoal ? [initialGoal] : [],
      enfoques: [],
      mensaje: '',
      modalidadPreferida: initialModality || 'Modalidad Online',
      tamanoGrupo: initialFormat || 'Clase individual',
    });
  };

  // Step 1 Options
  const objetivosOptions = [
    { title: 'Viajes y Turismo', icon: Plane, desc: 'Para moverte por el mundo con libertad' },
    { title: 'Trabajo y Negocios', icon: Briefcase, desc: 'Reuniones, correos y entrevistas' },
    { title: 'Estudios y Exámenes', icon: GraduationCap, desc: 'Certificaciones y nivel académico' },
    { title: 'Crecimiento y Cultura', icon: Globe, desc: 'Lectura, entretenimiento y superación' },
  ];

  // Step 2 Options
  const enfoquesOptions = [
    { title: 'Hablar con fluidez', icon: Mic, desc: 'Perder el miedo y ganar agilidad' },
    { title: 'Entender mejor', icon: Headphones, desc: 'Comprensión auditiva en conversaciones reales' },
    { title: 'Leer y Escribir', icon: PenTool, desc: 'Redacción profesional y lectura de textos' },
    { title: 'Bases sólidas', icon: Brain, desc: 'Gramática estructurada y vocabulario clave' },
    { title: 'Inglés Técnico', icon: Settings, desc: 'Vocabulario específico de tu industria' },
  ];

  return (
    <section id="contacto" className="py-20 md:py-28 bg-slate-100 text-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column Text Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-coral-500/10 text-coral-500 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Inicia tu Aprendizaje</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B132B] leading-tight">
              Diseñamos tus clases de inglés a medida
            </h2>

            <p className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
              Completa este breve formulario interactivo para conocer tu perfil y coordinar tu propuesta personalizada.
            </p>

            {/* Benefit Bullets */}
            <div className="pt-4 space-y-4">
              <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-coral-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-display font-bold text-sm text-[#0B132B]">Diagnóstico inicial sin costo</h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Evaluamos tu nivel actual en una breve conversación informal.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-coral-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-display font-bold text-sm text-[#0B132B]">Propuesta a tu medida</h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Diseñamos un plan de clases con tu frecuencia y temarios ideales.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-coral-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-display font-bold text-sm text-[#0B132B]">Respuesta rápida</h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Te contactamos en menos de 24 horas hábiles.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Multi-step Quiz Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-xl relative overflow-hidden">
              
              {/* Progress Bar Container */}
              {!submitted && (
                <div className="mb-8">
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wider">
                    <span>Paso {currentStep} de 3</span>
                    <span>
                      {currentStep === 1 && 'Objetivos'}
                      {currentStep === 2 && 'Enfoque'}
                      {currentStep === 3 && 'Contacto'}
                    </span>
                  </div>
                  <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-coral-500 transition-all duration-300 ease-in-out ${
                        currentStep === 1 ? 'w-1/3' : currentStep === 2 ? 'w-2/3' : 'w-full'
                      }`}
                    />
                  </div>
                </div>
              )}

              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-[#0B132B]">
                    ¡Consulta recibida con éxito!
                  </h3>
                  <p className="text-slate-600 max-w-md mx-auto text-sm font-sans leading-relaxed">
                    Muchas gracias por contactar a <strong>Connect English Class</strong>. Guardamos tus preferencias y te contactaremos en menos de 24 hs para coordinar tu propuesta.
                  </p>
                  <button
                    onClick={handleReset}
                    className="mt-4 bg-[#0B132B] text-white text-xs font-semibold px-6 py-2.5 rounded-xl hover:bg-slate-800 transition-colors"
                  >
                    Enviar otra consulta
                  </button>
                </div>
              ) : (
                <div>
                  {/* STEP 1: OBJETIVOS */}
                  {currentStep === 1 && (
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-display text-xl sm:text-2xl font-bold text-[#0B132B]">
                          ¿Cuál es tu objetivo principal con el inglés?
                        </h3>
                        <p className="text-xs text-slate-500 mt-1">
                          Selecciona de 1 a 3 opciones para personalizar tu programa.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {objetivosOptions.map((opt) => {
                          const IconComp = opt.icon;
                          const isSelected = formData.objetivos.includes(opt.title);
                          return (
                            <button
                              key={opt.title}
                              type="button"
                              onClick={() => toggleObjetivo(opt.title)}
                              className={`p-4 sm:p-5 rounded-xl border text-left flex items-start gap-3.5 transition-all cursor-pointer hover:-translate-y-1 hover:shadow-md ${
                                isSelected
                                  ? 'border-coral-500 bg-coral-50 ring-1 ring-coral-500 text-[#0B132B]'
                                  : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300 hover:bg-white'
                              }`}
                            >
                              <div
                                className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                                  isSelected
                                    ? 'bg-coral-500 text-white'
                                    : 'bg-white border border-slate-200 text-slate-500'
                                }`}
                              >
                                <IconComp className="w-5 h-5" />
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center justify-between">
                                  <h4 className="font-display font-bold text-sm text-[#0B132B]">
                                    {opt.title}
                                  </h4>
                                  {isSelected && (
                                    <div className="w-5 h-5 rounded-full bg-coral-500 text-white flex items-center justify-center shrink-0">
                                      <Check className="w-3 h-3 stroke-[3]" />
                                    </div>
                                  )}
                                </div>
                                <p className="text-xs text-slate-500 mt-1 leading-snug">
                                  {opt.desc}
                                </p>
                              </div>
                            </button>
                          );
                        })}
                      </div>

                      <div className="pt-4 flex justify-end">
                        <button
                          type="button"
                          onClick={handleNext}
                          disabled={formData.objetivos.length === 0}
                          className={`w-full sm:w-auto px-7 py-3 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2 ${
                            formData.objetivos.length === 0
                              ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                              : 'bg-coral-500 hover:bg-coral-600 text-white shadow-lg shadow-coral-500/20 cursor-pointer'
                          }`}
                        >
                          <span>Siguiente</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* STEP 2: ENFOQUE */}
                  {currentStep === 2 && (
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-display text-xl sm:text-2xl font-bold text-[#0B132B]">
                          ¿En qué te gustaría enfocarte más?
                        </h3>
                        <p className="text-xs text-slate-500 mt-1">
                          Selecciona una o varias habilidades prioritarias.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {enfoquesOptions.map((opt) => {
                          const IconComp = opt.icon;
                          const isSelected = formData.enfoques.includes(opt.title);
                          return (
                            <button
                              key={opt.title}
                              type="button"
                              onClick={() => toggleEnfoque(opt.title)}
                              className={`p-4 sm:p-5 rounded-xl border text-left flex items-start gap-3.5 transition-all cursor-pointer hover:-translate-y-1 hover:shadow-md ${
                                isSelected
                                  ? 'border-coral-500 bg-coral-50 ring-1 ring-coral-500 text-[#0B132B]'
                                  : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300 hover:bg-white'
                              }`}
                            >
                              <div
                                className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                                  isSelected
                                    ? 'bg-coral-500 text-white'
                                    : 'bg-white border border-slate-200 text-slate-500'
                                }`}
                              >
                                <IconComp className="w-5 h-5" />
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center justify-between">
                                  <h4 className="font-display font-bold text-sm text-[#0B132B]">
                                    {opt.title}
                                  </h4>
                                  {isSelected && (
                                    <div className="w-5 h-5 rounded-full bg-coral-500 text-white flex items-center justify-center shrink-0">
                                      <Check className="w-3 h-3 stroke-[3]" />
                                    </div>
                                  )}
                                </div>
                                <p className="text-xs text-slate-500 mt-1 leading-snug">
                                  {opt.desc}
                                </p>
                              </div>
                            </button>
                          );
                        })}
                      </div>

                      <div className="pt-4 flex items-center justify-between gap-4">
                        <button
                          type="button"
                          onClick={handleBack}
                          className="px-5 py-3 rounded-xl font-semibold text-sm bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors flex items-center gap-2 cursor-pointer"
                        >
                          <ArrowLeft className="w-4 h-4" />
                          <span>Atrás</span>
                        </button>
                        <button
                          type="button"
                          onClick={handleNext}
                          className="px-7 py-3 rounded-xl font-semibold text-sm bg-coral-500 hover:bg-coral-600 text-white shadow-lg shadow-coral-500/20 transition-all flex items-center gap-2 cursor-pointer"
                        >
                          <span>Siguiente</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* STEP 3: DATOS DE CONTACTO */}
                  {currentStep === 3 && (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <h3 className="font-display text-xl sm:text-2xl font-bold text-[#0B132B]">
                          Déjanos tus datos para coordinar
                        </h3>
                        <p className="text-xs text-slate-500 mt-1">
                          Completa tus datos de contacto para enviarte la información completa.
                        </p>
                      </div>

                      {/* Field: Nombre */}
                      <div>
                        <label htmlFor="nombre" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                          Nombre completo <span className="text-coral-500">*</span>
                        </label>
                        <div className="relative">
                          <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                          <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            required
                            value={formData.nombre}
                            onChange={handleChange}
                            placeholder="Ej. María García"
                            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-coral-500 focus:bg-white transition-all"
                          />
                        </div>
                      </div>

                      {/* Grid 2 Cols: Correo y Teléfono */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="correo" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                            Correo electrónico <span className="text-coral-500">*</span>
                          </label>
                          <div className="relative">
                            <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                            <input
                              type="email"
                              id="correo"
                              name="correo"
                              required
                              value={formData.correo}
                              onChange={handleChange}
                              placeholder="maria@ejemplo.com"
                              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-coral-500 focus:bg-white transition-all"
                            />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="telefono" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                            Teléfono / WhatsApp <span className="text-coral-500">*</span>
                          </label>
                          <div className="relative">
                            <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                            <input
                              type="tel"
                              id="telefono"
                              name="telefono"
                              required
                              value={formData.telefono}
                              onChange={handleChange}
                              placeholder="+54 9 11 1234-5678"
                              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-coral-500 focus:bg-white transition-all"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Grid 2 Cols: Nivel Aprox. y Objetivo principal */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <div className="flex items-center justify-between mb-1.5">
                            <label htmlFor="nivelAproximado" className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                              Nivel aproximado
                            </label>
                            {onOpenTest && (
                              <button
                                type="button"
                                onClick={onOpenTest}
                                className="text-coral-500 hover:text-coral-600 font-semibold text-xs flex items-center gap-1 cursor-pointer transition-colors"
                              >
                                <ClipboardCheck className="w-3.5 h-3.5" />
                                <span>Conocer mi nivel</span>
                              </button>
                            )}
                          </div>
                          <select
                            id="nivelAproximado"
                            name="nivelAproximado"
                            value={formData.nivelAproximado}
                            onChange={handleChange}
                            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-coral-500 focus:bg-white transition-all"
                          >
                            <option value="Inicial / Principiante (A1-A2)">Inicial / Principiante (A1-A2)</option>
                            <option value="Intermedio (B1-B2)">Intermedio (B1-B2)</option>
                            <option value="Avanzado (C1-C2)">Avanzado (C1-C2)</option>
                            <option value="No estoy seguro/a">No estoy seguro/a (Deseo evaluar)</option>
                          </select>
                        </div>

                        <div>
                          <label htmlFor="tamanoGrupo" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                            Integrantes
                          </label>
                          <select
                            id="tamanoGrupo"
                            name="tamanoGrupo"
                            value={formData.tamanoGrupo}
                            onChange={handleChange}
                            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-coral-500 focus:bg-white transition-all"
                          >
                            <option value="Clase individual">Clase individual (1 persona)</option>
                            <option value="Clase para dos personas">Clase para dos personas (Dúo)</option>
                            <option value="Clase para tres personas">Clase para tres personas (Trío)</option>
                          </select>
                        </div>
                      </div>

                      {/* Modalidad Preferida */}
                      <div>
                        <label htmlFor="modalidadPreferida" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                          Modalidad preferida
                        </label>
                        <select
                          id="modalidadPreferida"
                          name="modalidadPreferida"
                          value={formData.modalidadPreferida}
                          onChange={handleChange}
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-coral-500 focus:bg-white transition-all"
                        >
                          <option value="Modalidad Online">Modalidad Online</option>
                          <option value="Modalidad Presencial">Modalidad Presencial (sujeta a zona)</option>
                        </select>
                      </div>

                      {/* Field: Mensaje */}
                      <div>
                        <label htmlFor="mensaje" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                          Mensaje o consulta adicional
                        </label>
                        <div className="relative">
                          <MessageSquare className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                          <textarea
                            id="mensaje"
                            name="mensaje"
                            rows={3}
                            value={formData.mensaje}
                            onChange={handleChange}
                            placeholder="Cuéntanos tus horarios preferidos, inquietudes o fecha proyectada de inicio..."
                            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-coral-500 focus:bg-white transition-all"
                          />
                        </div>
                      </div>

                      {/* Submit Action Buttons */}
                      <div className="pt-2 flex items-center justify-between gap-4">
                        <button
                          type="button"
                          onClick={handleBack}
                          className="px-5 py-3 rounded-xl font-semibold text-sm bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors flex items-center gap-2 cursor-pointer"
                        >
                          <ArrowLeft className="w-4 h-4" />
                          <span>Atrás</span>
                        </button>

                        <button
                          type="submit"
                          id="submit-contact-form-btn"
                          disabled={loading}
                          className="px-7 py-3.5 bg-coral-500 hover:bg-coral-600 text-white font-semibold rounded-xl shadow-lg shadow-coral-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer text-sm"
                        >
                          {loading ? (
                            <span>Procesando...</span>
                          ) : (
                            <>
                              <span>Enviar consulta</span>
                              <Send className="w-4 h-4" />
                            </>
                          )}
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
