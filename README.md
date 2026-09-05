# Connect English Class

> **Clases de inglés diseñadas para ti**  
> Sitio web oficial y plataforma web SPA de Connect English Class para la presentación, diagnóstico y coordinación de clases personalizadas de inglés individuales (100% online).

---

## 🎯 Propósito del Proyecto

Connect English Class ofrece un modelo de enseñanza personalizada enfocado en las necesidades reales del estudiante (laborales, académicas, de viajes o crecimiento personal). La aplicación web funciona como la principal vitrina y canal de contacto, permitiendo a los potenciales alumnos:

1. **Conocer la propuesta pedagógica**: Metodología secuencial de 6 pasos desarrollada desde 2016.
2. **Evaluar formatos, planes y precios**:
   - **Clase Normal**: 1 hr. Pedagógica (45 min.) · $ 27.000 (Plan estándar recomendado).
   - **Quick class**: 30 min. · $ 21.000 (Sesión ágil y dinámica de práctica activa).
   - **Clase Doble**: 2 hrs. Pedagógicas (90 min.) · $ 45.000 (Doble duración de clase, no para más personas; 100% individual).
3. **Realizar un test de nivel interactivo**: Diagnóstico rápido de 12 preguntas con evaluación en tiempo real alineado al marco CEFR (A1 a C1).
4. **Revisar testimonios verificados**: Acceso a opiniones reales con calificación 5.0/5.0 y más de 185 recomendaciones verificadas.
5. **Contactar y agendar**: Formulario dinámico conectado con selección directa de objetivos de aprendizaje.

---

## 🗂️ Archivos Críticos y Arquitectura

```
├── metadata.json                 # Metadatos del applet de AI Studio
├── index.html                    # Entrada HTML, fuentes Google (Oswald, Open Sans, Roboto Condensed)
├── src/
│   ├── main.tsx                  # Punto de montaje React 18
│   ├── App.tsx                   # Enrutamiento de vistas SPA (home, about-us, testimonials), modal de nivel y estado
│   ├── index.css                 # Import de Tailwind CSS, tokens de color y clases de utilidad tipográfica
│   ├── types/
│   │   └── index.ts              # Tipos TypeScript para objetivos, formatos, metodología, testimonios y formularios
│   ├── data/
│   │   └── landingData.ts        # Fuente centralizada de verdad (copy, textos, pasos, FAQs y opciones comerciales)
│   └── components/
│       ├── Navbar.tsx            # Navegación responsive con soporte multiruta (#quienes-somos, #testimonios)
│       ├── Hero.tsx              # Sección principal con badge de experiencia, CTAs y franja compacta de testimonios
│       ├── AboutConnect.tsx      # Presentación de la academia y 3 indicadores clave de trayectoria
│       ├── Differentiators.tsx   # Cuadrícula con 6 factores diferenciadores
│       ├── Methodology.tsx       # Timeline con los 6 pasos del método formativo
│       ├── LearningGoals.tsx     # Selector de 8 objetivos de aprendizaje vinculados al formulario
│       ├── ClassFormats.tsx      # Formatos (Individual vs. Dúo) y Modalidad (100% Online)
│       ├── HowItWorks.tsx        # Proceso paso a paso interactivo con botón directo al test de nivel
│       ├── LevelTestModal.tsx    # Modal interactivo de diagnóstico CEFR (A1 a C1) con cálculo de puntaje
│       ├── TestimonialsView.tsx  # Vista dedicada de testimonios y calificaciones verificadas
│       ├── AboutUsView.tsx       # Vista dedicada sobre la historia, enfoque pedagógico y valores
│       ├── Faq.tsx               # Acordeón de preguntas frecuentes organizadas por categoría
│       ├── ContactForm.tsx       # Formulario de consulta con tarjeta de presentación del profesor Diego
│       ├── Footer.tsx            # Pie de página con enlaces institucionales, contacto y accesos directos
│       ├── RevealOnScroll.tsx    # Hook y contenedor para animaciones de entrada suaves
│       └── ScrollToTop.tsx       # Botón flotante para retorno rápido a la parte superior
```

---

## 🎨 Identidad Visual y Tokens de Diseño

### Paleta de Colores
- **Navy Dark (Fondo y contraste principal):** `#0B132B`
- **Navy Main (Superficies secundarias y tarjetas oscuras):** `#1C2541`
- **Slate Blue (Bordes y elementos de soporte):** `#3A506B`
- **Coral Main (Acento principal y CTAs primarios):** `#FF5A5F`
- **Coral Hover (Interacción y estados activos):** `#E0484D`
- **Slate Light (Fondo claro de lectura):** `#F8FAFC` (`slate-50`)

### Tipografía
- **Títulos y Encabezados (`font-display`):** `Oswald`, `Roboto Condensed`, `sans-serif` (tracking sutil de `0.02em`).
- **Cuerpo y Lectura (`font-sans`):** `Open Sans`, `system-ui`, `-apple-system`, `sans-serif`.

### Jerarquía y Densidad
- **Espaciados controlados:** Contenedores compactos (`py-10 sm:py-12 md:py-14`) para optimizar el espacio vertical.
- **Botones y Controles:** Una sola línea (`whitespace-nowrap`), padding proporcional `py-2.5 px-5` a `py-4 px-8`.
- **Accesibilidad:** Contraste WCAG AA, focus states visibles y respetando `prefers-reduced-motion`.

---

## 🚀 Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo local en Vite en el puerto 3000.
- `npm run build`: Compila la aplicación para producción en `dist/`.
- `npm run lint`: Ejecuta la validación de tipos e integridad con `tsc --noEmit`.
