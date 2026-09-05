export interface DifferentiatorCard {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface MethodologyStep {
  stepNumber: number;
  title: string;
  description: string;
}

export interface LearningGoal {
  id: string;
  title: string;
  description: string;
  iconName: string;
  tag: string;
}

export interface ClassFormat {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  capacity: string;
  recommendedFor: string;
  iconName: string;
  badge?: string;
}

export interface ClassPlan {
  id: string;
  name: string;
  duration: string;
  durationPedagogical: string;
  durationMinutes: number;
  price: string;
  priceNumeric: number;
  description: string;
  recommendedFor: string;
  badge?: string;
  popular?: boolean;
  features: string[];
}

export interface ClassModality {
  id: string;
  title: string;
  description: string;
  features: string[];
  iconName: string;
}

export interface HowItWorksStep {
  stepNumber: number;
  title: string;
  description: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface ContactFormData {
  nombre: string;
  correo: string;
  telefono: string;
  nivelAproximado: string;
  objetivoPrincipal: string;
  planInteres?: string;
  objetivos: string[];
  enfoques: string[];
  mensaje: string;
}
