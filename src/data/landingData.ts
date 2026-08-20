import {
  DifferentiatorCard,
  MethodologyStep,
  LearningGoal,
  ClassFormat,
  ClassModality,
  HowItWorksStep,
  FAQItem,
} from '../types';

export const HERO_DATA = {
  brand: 'Connect English Class',
  title: 'Clases de inglés diseñadas para ti',
  supportText:
    'Aprende a tu ritmo, trabaja en tus propios objetivos y recibe el acompañamiento necesario para incorporar realmente lo aprendido. Clases personalizadas para una o dos personas, disponibles en modalidad online y presencial según cobertura.',
  primaryCta: 'Consultar clases',
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
      value: '1 o 2 personas',
      label: 'Grupos hiper-reducidos',
      subtext: 'Atención focalizada y máxima participación verbal.',
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
    title: 'Clase individual',
    subtitle: '100% personalizada para 1 persona',
    description:
      'El profesor enfocado únicamente en ti. Ideal si buscas un ritmo hiper-personalizado, preparar metas urgentes o resolver bloqueos específicos.',
    capacity: '1 estudiante',
    recommendedFor: 'Quienes buscan atención exclusiva y flexibilidad máxima.',
    iconName: 'User',
    badge: 'Más popular',
  },
  {
    id: 'duo',
    title: 'Clase para dos personas',
    subtitle: 'Formato Dúo (2 personas)',
    description:
      'Aprende en pareja con un amigo, familiar o colega de nivel similar. Combina dinamismo conversacional con atención cercana.',
    capacity: '2 estudiantes',
    recommendedFor: 'Parejas de estudio con objetivos afines o compañeros de trabajo.',
    iconName: 'Users',
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
  {
    id: 'presencial',
    title: 'Modalidad Presencial',
    description:
      'Sesiones cara a cara con el profesor en ubicaciones convenientes según disponibilidad de cobertura.',
    features: [
      'Contacto humano directo e interacción presencial.',
      'Ambiente cómodo e inmersivo.',
      'Sujeto a cobertura geográfica confirmada previa consulta.',
      'Ideal para quienes prefieren la dinámica tradicional.',
    ],
    iconName: 'MapPin',
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
      'Diseñamos una propuesta personalizada especificando formato (1 o 2 personas), modalidad y propuesta horaria.',
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
    id: 'faq-2',
    category: 'Modalidad',
    question: '¿Cuál es la diferencia entre clases Online y Presenciales?',
    answer:
      'Las clases Online se imparten por videollamada interactiva sin importar dónde te encuentres. Las clases Presenciales se dictan cara a cara según la cobertura geográfica acordada.',
  },
  {
    id: 'faq-3',
    category: 'Grupos',
    question: '¿Puedo tomar clases con un amigo o compañero de trabajo?',
    answer:
      '¡Sí! Ofrecemos modalidades individuales y para 2 personas (formato Dúo). Lo ideal es que ambos tengan un nivel similar o un objetivo común.',
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
    question: '¿Dónde puedo consultar la duración, precios y horarios?',
    answer:
      'La duración de las clases, la grilla de precios y los horarios disponibles se coordinan en forma personalizada según el formato (1 o 2 personas) e intensidades deseadas.',
  },
];
