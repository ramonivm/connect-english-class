import React, { useState, useEffect } from 'react';
import {
  X,
  Timer,
  CheckCircle2,
  AlertCircle,
  Award,
  ArrowRight,
  RotateCcw,
  Sparkles,
} from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    question: 'Hello. Where _____ you from?',
    options: ['is', 'are', 'do'],
    correctIndex: 1, // are
  },
  {
    id: 2,
    question: 'She _____ to the cinema yesterday.',
    options: ['go', 'goes', 'went'],
    correctIndex: 2, // went
  },
  {
    id: 3,
    question: 'I have never _____ to London.',
    options: ['be', 'been', 'was'],
    correctIndex: 1, // been
  },
  {
    id: 4,
    question: 'If it rains tomorrow, we _____ at home.',
    options: ['will stay', 'would stay', 'stayed'],
    correctIndex: 0, // will stay
  },
  {
    id: 5,
    question: 'The letter _____ by the manager yesterday.',
    options: ['is sent', 'was sent', 'sends'],
    correctIndex: 1, // was sent
  },
  {
    id: 6,
    question: 'I am looking forward _____ you.',
    options: ['to see', 'seeing', 'to seeing'],
    correctIndex: 2, // to seeing
  },
  {
    id: 7,
    question: 'By this time next year, I _____ my studies.',
    options: ['will finish', 'will have finished', 'have finished'],
    correctIndex: 1, // will have finished
  },
  {
    id: 8,
    question: 'He is used _____ up early for work.',
    options: ['to get', 'getting', 'to getting'],
    correctIndex: 2, // to getting
  },
  {
    id: 9,
    question: 'Hardly _____ arrived when the phone rang.',
    options: ['had I', 'I had', 'did I'],
    correctIndex: 0, // had I
  },
  {
    id: 10,
    question: 'The committee suggested that he _____ the project.',
    options: ['reconsiders', 'reconsider', 'is reconsidering'],
    correctIndex: 1, // reconsider
  },
];

interface LevelTestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LevelTestModal: React.FC<LevelTestModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<'intro' | 'playing' | 'results'>('intro');
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [timeElapsed, setTimeElapsed] = useState<number>(0);

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isOpen && step === 'playing') {
      interval = setInterval(() => {
        setTimeElapsed((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isOpen, step]);

  // Reset state when opening/closing
  const handleStart = () => {
    setStep('playing');
    setCurrentQuestion(0);
    setScore(0);
    setTimeElapsed(0);
  };

  const handleClose = () => {
    onClose();
    // Reset back to intro after animation
    setTimeout(() => {
      setStep('intro');
      setCurrentQuestion(0);
      setScore(0);
      setTimeElapsed(0);
    }, 200);
  };

  const handleOptionSelect = (optionIndex: number) => {
    const q = QUESTIONS[currentQuestion];
    const isCorrect = optionIndex === q.correctIndex;
    const newScore = isCorrect ? score + 1 : score;
    if (isCorrect) {
      setScore(newScore);
    }

    if (currentQuestion + 1 < QUESTIONS.length) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setStep('results');
    }
  };

  // Level calculation helper
  const getCalculatedLevel = () => {
    let levelName = 'A1';
    let levelDesc = 'Inicial / Principiante';

    // Base Level
    if (score <= 2) {
      levelName = 'A1';
      levelDesc = 'Inicial / Principiante';
    } else if (score <= 4) {
      levelName = 'A2';
      levelDesc = 'Principiante Alto';
    } else if (score <= 6) {
      levelName = 'B1';
      levelDesc = 'Intermedio';
    } else if (score <= 8) {
      levelName = 'B2';
      levelDesc = 'Intermedio Alto';
    } else {
      levelName = 'C1';
      levelDesc = 'Avanzado';
    }

    // Fluency / Time Penalty: Si timeElapsed > 180 (3 min) y está en el límite inferior (3, 5, 7, 9)
    let demoted = false;
    if (timeElapsed > 180) {
      if (score === 3) {
        levelName = 'A1';
        levelDesc = 'Inicial / Principiante';
        demoted = true;
      } else if (score === 5) {
        levelName = 'A2';
        levelDesc = 'Principiante Alto';
        demoted = true;
      } else if (score === 7) {
        levelName = 'B1';
        levelDesc = 'Intermedio';
        demoted = true;
      } else if (score === 9) {
        levelName = 'B2';
        levelDesc = 'Intermedio Alto';
        demoted = true;
      }
    }

    return { levelName, levelDesc, demoted };
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 sm:p-8 relative overflow-hidden text-slate-800 border border-slate-100">
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* STEP: INTRO */}
        {step === 'intro' && (
          <div className="space-y-6 pt-2">
            <div className="w-12 h-12 rounded-2xl bg-coral-500/10 text-coral-500 flex items-center justify-center">
              <Timer className="w-6 h-6" />
            </div>

            <div>
              <h3 className="font-display text-2xl font-bold text-[#0B132B]">
                Evaluación Rápida de Nivel
              </h3>
              <p className="text-sm text-slate-600 font-sans mt-2 leading-relaxed">
                Responde 10 preguntas breves de gramática y vocabulario. Mediremos tu precisión y tiempo para darte un estimado de tu nivel según el Marco Común Europeo (CEFR).
              </p>
            </div>

            {/* Disclaimer box */}
            <div className="bg-amber-50 border border-amber-200/80 rounded-xl p-3.5 flex items-start gap-3 text-amber-900 text-xs leading-relaxed">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold">Diagnóstico inicial:</span> Este test es una estimación rápida. En tu primera entrevista personalizada con Connect English Class realizaremos un diagnóstico integral hablado.
              </div>
            </div>

            <button
              onClick={handleStart}
              className="w-full py-3.5 px-6 rounded-xl bg-coral-500 hover:bg-coral-600 text-white font-semibold text-sm shadow-lg shadow-coral-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Comenzar evaluación</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* STEP: PLAYING */}
        {step === 'playing' && (
          <div className="space-y-6 pt-2">
            {/* Header / Progress bar & Timer */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
                <span className="uppercase tracking-wider">
                  Pregunta {currentQuestion + 1} de {QUESTIONS.length}
                </span>
                <span className="flex items-center gap-1 text-coral-500 font-mono text-sm font-bold bg-coral-50 px-2.5 py-1 rounded-lg border border-coral-200/60">
                  <Timer className="w-3.5 h-3.5" />
                  {formatTime(timeElapsed)}
                </span>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-coral-500 h-full transition-all duration-300"
                  style={{
                    width: `${((currentQuestion + 1) / QUESTIONS.length) * 100}%`,
                  }}
                />
              </div>
            </div>

            {/* Question Text */}
            <div className="py-2">
              <h4 className="font-display font-bold text-lg text-[#0B132B]">
                {QUESTIONS[currentQuestion].question}
              </h4>
            </div>

            {/* Options */}
            <div className="space-y-3">
              {QUESTIONS[currentQuestion].options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleOptionSelect(idx)}
                  className="w-full text-left p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-coral-50 hover:border-coral-500 hover:text-[#0B132B] font-medium text-sm transition-all duration-200 cursor-pointer flex items-center justify-between group"
                >
                  <span className="text-slate-800 font-sans group-hover:font-semibold">
                    {opt}
                  </span>
                  <div className="w-6 h-6 rounded-full border border-slate-300 group-hover:border-coral-500 group-hover:bg-coral-500 group-hover:text-white flex items-center justify-center transition-colors text-xs font-bold">
                    {String.fromCharCode(65 + idx)}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP: RESULTS */}
        {step === 'results' && (() => {
          const { levelName, levelDesc, demoted } = getCalculatedLevel();
          return (
            <div className="space-y-6 text-center pt-2">
              <div className="w-16 h-16 rounded-full bg-coral-500/10 text-coral-500 flex items-center justify-center mx-auto shadow-inner">
                <Award className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                  Tu nivel estimado
                </span>
                <h3 className="font-display text-4xl font-extrabold text-[#0B132B] mt-1">
                  Nivel {levelName}
                </h3>
                <p className="text-sm font-semibold text-coral-500 mt-1">
                  {levelDesc}
                </p>
              </div>

              {/* Stats Box */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 grid grid-cols-2 gap-4 text-center">
                <div>
                  <span className="block text-xs text-slate-400 font-semibold">Puntaje</span>
                  <span className="text-lg font-bold text-[#0B132B]">{score} / 10</span>
                </div>
                <div>
                  <span className="block text-xs text-slate-400 font-semibold">Tiempo</span>
                  <span className="text-lg font-bold text-[#0B132B]">{formatTime(timeElapsed)}</span>
                </div>
              </div>

              {demoted && (
                <div className="bg-amber-50 border border-amber-200 text-amber-800 text-xs p-3 rounded-xl text-left leading-relaxed">
                  <strong>Nota de agilidad:</strong> Tu tiempo superó los 3 minutos. Hemos ajustado ligeramente tu clasificación para garantizar una sólida fluidez conversacional.
                </div>
              )}

              <div className="pt-2 space-y-2">
                <button
                  onClick={handleClose}
                  className="w-full py-3.5 px-6 rounded-xl bg-[#0B132B] hover:bg-slate-800 text-white font-semibold text-sm transition-all shadow-lg cursor-pointer"
                >
                  Cerrar y continuar
                </button>
                <button
                  onClick={handleStart}
                  className="w-full py-2.5 px-4 text-xs font-semibold text-slate-500 hover:text-slate-700 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Repetir evaluación</span>
                </button>
              </div>
            </div>
          );
        })()}

      </div>
    </div>
  );
};
