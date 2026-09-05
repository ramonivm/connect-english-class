import {
  DifferentiatorCard,
  MethodologyStep,
  LearningGoal,
  ClassFormat,
  ClassPlan,
  ClassModality,
  HowItWorksStep,
  FAQItem,
} from '../types';

export const HERO_DATA = {
  brand: 'Connect English Class',
  title: 'Clases de inglés diseñadas para ti',
  supportText:
    'Aprende a tu ritmo, trabaja en tus propios objetivos y recibe el acompañamiento necesario para incorporar realmente lo aprendido. Clases individuales 100% online interactivas.',
  primaryCta: 'Ver planes y valores',
  secondaryCta: 'Conocer la metodología',
};

export const ABOUT_DATA = {
  title: 'Una forma más personal de aprender inglés',
  description:
    'Connect Class ofrece clases de inglés personalizadas, diseñadas según el nivel, ritmo, objetivos e intereses de cada estudiante. Desde 2016, su metodología combina una estructura progresiva de aprendizaje con la flexibilidad necesaria para adaptar los contenidos a situaciones reales.',
  indicators: [
    {
      value: 'Desde 2016',
      label: 'Experiencia y trayectoria',
      subtext: 'Acompañando a estudiantes en su proceso de aprendizaje.',
    },
    {
      value: '1 estudiante',
      label: 'Atención 1 a 1',
      subtext: 'Atención 100% focalizada y máxima participación verbal.',
    },
    {
      value: 'Contenidos personalizados',
      label: 'Adaptación 100%',
      subtext: 'Enfocado en tus contextos, industria e intereses.',
    },
  ],
};

export const DIFFERENTIATORS: DifferentiatorCard[] = [
  {
    id: 'atencion',
    title: 'Atención personalizada',
    description:
      'Cada clase se adapta a tus conocimientos previos, ritmo de aprendizaje y necesidades específicas.',
    iconName: 'UserCheck',
  },
  {
    id: 'progresivo',
    title: 'Aprendizaje progresivo',
    description:
      'Avanzas con metas claras, secuenciales y alcanzables para construir una base sólida y confiable.',
    iconName: 'TrendingUp',
  },
  {
    id: 'practica',
    title: 'Aplicación práctica',
    description:
      'Practicas la conversación y gramática en situaciones cotidianas, laborales y de la vida real.',
    iconName: 'MessageSquare',
  },
  {
    id: 'flexibilidad',
    title: 'Flexibilidad',
    description:
      'Ajustes dinámicos en los contenidos e itinerarios según los desafíos emergentes de tu agenda.',
    iconName: 'Sliders',
  },
  {
    id: 'acompanamiento',
    title: 'Acompañamiento cercano',
    description:
      'Retroalimentación constante, guía continua y corrección constructiva en cada etapa de tu proceso.',
    iconName: 'HeartHandshake',
  },
  {
    id: 'confianza',
    title: 'Ambiente de confianza',
    description:
      'Un espacio libre de juicio donde cometer errores es parte natural de soltar la lengua y ganar fluidez.',
    iconName: 'ShieldCheck',
  },
];

export const METHODOLOGY_STEPS: MethodologyStep[] = [
  {
    stepNumber: 1,
    title: 'Conocer tu punto de partida',
    description:
      'Evaluamos tus conocimientos actuales, experiencias previas y fortalezas comunicativas sin presiones.',
  },
  {
    stepNumber: 2,
    title: 'Definir prioridades',
    description:
      'Establecemos juntos tus metas principales (viajes, reuniones, presentaciones, exámenes u otros).',
  },
  {
    stepNumber: 3,
    title: 'Aprender con una estructura clara',
    description:
      'Desarrollamos sesiones con bloques de gramática, vocabulario relevante y fonética aplicada.',
  },
  {
    stepNumber: 4,
    title: 'Practicar en contextos reales',
    description:
      'Simulamos escenarios reales donde utilizas de forma activa las herramientas aprendidas.',
  },
  {
    stepNumber: 5,
    title: 'Comprobar la incorporación',
    description:
      'Verificamos que el vocabulario y las estructuras se hayan fijado de manera natural y duradera.',
  },
  {
    stepNumber: 6,
    title: 'Ajustar el proceso',
    description:
      'Reforzamos aspectos débiles y modulamos la dificultad a medida que ganas fluidez y soltura.',
  },
];

export const LEARNING_GOALS: LearningGoal[] = [
  {
    id: 'viajar',
    title: 'Inglés para viajar',
    description:
      'Desenvolverte en aeropuertos, hoteles, restaurantes y conversaciones con nativos al viajar.',
    iconName: 'Plane',
    tag: 'Viajes & Turismo',
  },
  {
    id: 'trabajo',
    title: 'Inglés para el trabajo',
    description:
      'Redactar correos profesionales, expresarte en llamadas y participar en videoconferencias.',
    iconName: 'Briefcase',
    tag: 'Laboral',
  },
  {
    id: 'desarrollo',
    title: 'Desarrollo profesional',
    description:
      'Preparar entrevistas de trabajo, mejorar tu CV y optar a mejores puestos o promociones.',
    iconName: 'Award',
    tag: 'Carrera',
  },
  {
    id: 'estudiar',
    title: 'Para estudiar',
    description:
      'Comprender bibliografía académica, asistir a conferencias o aplicar a intercambios y postgrados.',
    iconName: 'GraduationCap',
    tag: 'Académico',
  },
  {
    id: 'negocios',
    title: 'Para negocios',
    description:
      'Negociar con clientes internacionales, realizar presentaciones e interactuar con socios.',
    iconName: 'Building2',
    tag: 'Business',
  },
  {
    id: 'vivir-fuera',
    title: 'Para vivir en otro país',
    description:
      'Adaptarte a la cultura local, realizar trámites cotidianos y hacer amigos en el extranjero.',
    iconName: 'Globe',
    tag: 'Relocalización',
  },
  {
    id: 'informacion',
    title: 'Para acceder a información',
    description:
      'Consumir libros, podcasts, artículos especializados y contenido de actualidad sin traducción.',
    iconName: 'BookOpen',
    tag: 'Conocimiento',
  },
  {
    id: 'crecimiento',
    title: 'Crecimiento personal',
    description:
      'Superar el bloqueo al hablar, disfrutar de películas en idioma original y desafiar tu mente.',
    iconName: 'Sparkles',
    tag: 'Desarrollo Personal',
  },
];

export const CLASS_FORMATS: ClassFormat[] = [
  {
    id: 'individual',
    title: 'Clase Individual 100% Online',
    subtitle: 'Atención exclusiva y 100% personalizada',
    description:
      'El profesor enfocado únicamente en ti mediante videollamada interactiva. Ideal si buscas un ritmo hiper-personalizado, preparar metas urgentes o resolver bloqueos específicos.',
    capacity: '1 estudiante',
    recommendedFor: 'Quienes buscan atención exclusiva, flexibilidad máxima y resultados eficientes.',
    iconName: 'User',
    badge: 'Formato Exclusivo',
  }
];

export const CLASS_PLANS: ClassPlan[] = [
  {
    id: 'quick-class',
    name: 'Quick class',
    duration: '30 min.',
    durationPedagogical: '30 minutos cronológicos',
    durationMinutes: 30,
    price: '$ 21.000',
    priceNumeric: 21000,
    badge: 'Ágil & Dinámica',
    popular: false,
    description:
      'Sesión ágil y concentrada de alta intensidad. Diseñada para mantener constancia, practicar conversación frecuente o resolver dudas puntuales con flexibilidad horaria.',
    recommendedFor: 'Personas con agendas acotadas o que buscan práctica verbal continua.',
    features: [
      '100% Individual (1 estudiante)',
      '30 min. de práctica activa',
      'Modalidad 100% online en vivo',
      'Ideal para agendas apretadas',
      'Corrección y feedback en tiempo real',
    ],
  },
  {
    id: 'clase-normal',
    name: 'Clase Normal',
    duration: '1 hr. Pedagógica (45 min.)',
    durationPedagogical: '1 hora pedagógica (45 minutos)',
    durationMinutes: 45,
    price: '$ 27.000',
    priceNumeric: 27000,
    badge: 'Más Elegida',
    popular: true,
    description:
      'El formato estándar balanceado para un avance integral. Permite desarrollar gramática contextualizada, vocabulario relevante y conversación guiada en cada sesión.',
    recommendedFor: 'Quienes buscan un avance equilibrado y constante en todas las habilidades.',
    features: [
      '100% Individual (1 estudiante)',
      '1 hr. Pedagógica (45 min.)',
      'Modalidad 100% online en vivo',
      'Estructura integral y progresiva',
      'Material digital adaptado a tus metas',
      'Seguimiento y tareas recomendadas',
    ],
  },
  {
    id: 'clase-doble',
    name: 'Clase Doble',
    duration: '2 hrs. Pedagógicas (90 min.)',
    durationPedagogical: '2 horas pedagógicas (90 minutos)',
    durationMinutes: 90,
    price: '$ 45.000',
    priceNumeric: 45000,
    badge: 'Inmersión Intensiva',
    popular: false,
    description:
      'Sesión de duración extendida (el doble de tiempo que la clase normal) para inmersión profunda. Permite avanzar el doble en cada encuentro manteniendo siempre la atención 1 a 1.',
    recommendedFor: 'Metas urgentes, preparación intensiva de entrevistas, viajes o presentaciones.',
    features: [
      '100% Individual (1 estudiante)',
      '2 hrs. Pedagógicas (90 min.)',
      'Sesión extendida para inmersión profunda',
      'Modalidad 100% online en vivo',
      'Inmersión y práctica conversacional guiada',
      'Progreso acelerado por sesión',
    ],
  },
];

export const CLASS_MODALITIES: ClassModality[] = [
  {
    id: 'online',
    title: 'Modalidad Online',
    description:
      'Clases en vivo mediante videollamada interactiva desde la comodidad de tu hogar u oficina.',
    features: [
      'Sin desplazamientos ni pérdida de tiempo.',
      'Material digital compartido en tiempo real.',
      'Grabaciones o pizarras dinámicas para repasar.',
      'Disponible desde cualquier ubicación con conexión.',
    ],
    iconName: 'Laptop',
  },
];

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    stepNumber: 1,
    title: 'Cuéntanos tus objetivos',
    description:
      'Completa nuestro formulario o escríbenos contándonos qué necesitas lograr con el inglés.',
  },
  {
    stepNumber: 2,
    title: 'Conocemos tu nivel',
    description:
      'Realizamos una breve charla de diagnóstico sin costo ni compromiso para evaluar tu punto de partida.',
  },
  {
    stepNumber: 3,
    title: 'Definimos tus clases',
    description:
      'Diseñamos una propuesta personalizada especificando la modalidad online y la propuesta horaria.',
  },
  {
    stepNumber: 4,
    title: 'Comienzas tu aprendizaje',
    description:
      'Inicias tus clases con materiales a tu medida y una guía clara enfocada en resultados reales.',
  },
  {
    stepNumber: 5,
    title: 'Revisamos y reforzamos',
    description:
      'Evaluamos periódicamente tu progreso y adaptamos los temas según tus nuevos avances e inquietudes.',
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'General',
    question: '¿Desde qué nivel puedo comenzar las clases?',
    answer:
      'Puedes comenzar desde cualquier nivel, incluso desde cero absoluto. Adaptamos el ritmo y los materiales según tus conocimientos previos.',
  },
  {
    id: 'faq-3',
    category: 'Grupos',
    question: '¿Ofrecen clases grupales?',
    answer:
      'Nos especializamos exclusivamente en clases individuales (1 estudiante). De esta manera, garantizamos una atención personalizada y el progreso al ritmo único de cada alumno.',
  },
  {
    id: 'faq-4',
    category: 'Metodología',
    question: '¿Qué pasa si necesito cancelar o reprogramar una clase?',
    answer:
      'Contamos con políticas flexibles de aviso previo para que no pierdas tus sesiones por compromisos eventuales.',
  },
  {
    id: 'faq-5',
    category: 'Comercial',
    question: '¿Cuáles son los valores y duración de las clases?',
    answer:
      'Ofrecemos 3 planes con valores transparentes: Quick class de 30 min ($ 21.000), Clase Normal de 1 hr. Pedagógica / 45 min ($ 27.000) y Clase Doble de 2 hrs. Pedagógicas / 90 min ($ 45.000). Todas son individuales y 100% online.',
  },
];
