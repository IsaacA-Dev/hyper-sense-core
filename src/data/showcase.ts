export interface ShowcaseConfig {
  brand: {
    name: string;
    logo: string;
    slogan: string;
  };
  theme: {
    colors: {
      primary: string;
      secondary: string;
      accent: string;
      surface: string;
      background: string;
      text: string;
    };
    fonts: {
      display: string;
      body: string;
    };
  };
  sections: Section[];
}

export type Section = 
  | { type: 'hero'; id: string; data: any }
  | { type: 'bento-grid'; id: string; data: BentoData }
  | { type: 'metrics-pulse'; id: string; data: MetricsData }
  | { type: 'identity-stack'; id: string; data: IdentityData }
  | { type: 'process-timeline'; id: string; data: TimelineData };

interface BentoData {
  title: string;
  items: { title: string; description: string; size: 'large' | 'small'; icon: string }[];
}

interface MetricsData {
  title: string;
  stats: { label: string; value: string; suffix?: string; progress: number }[];
}

interface IdentityData {
  title: string;
  subtitle: string;
  content: string;
  image: string;
}

interface TimelineData {
  title: string;
  steps: { title: string; date: string; description: string }[];
}

export const showcaseData: ShowcaseConfig = {
  brand: {
    name: "HYPER-SENSE-CORE",
    logo: "/logo.svg",
    slogan: "High-Precision Interface Showcase"
  },
  theme: {
    colors: {
      primary: "#E11D48", // Rose 600
      secondary: "#0F172A", // Slate 900
      accent: "#38BDF8",    // Sky 400
      surface: "#1E293B",   // Slate 800
      background: "#020617", // Slate 950
      text: "#F8FAFC"
    },
    fonts: {
      display: "'Inter', sans-serif",
      body: "'Outfit', sans-serif"
    }
  },
  sections: [
    {
      type: 'hero',
      id: 'main-hero',
      data: {
        title: "HYPER",
        highlight: "SHOWCASE",
        description: "Explora la convergencia entre diseño táctico y rendimiento extremo. Una plataforma construida para visualizar el futuro de las interfaces empresariales.",
      }
    },
    {
      type: 'bento-grid',
      id: 'features-bento',
      data: {
        title: "High Performance Engine",
        items: [
          { title: "Arquitectura Atómica", description: "Componentes desacoplados que garantizan un escalado infinito sin degradación técnica.", size: "large", icon: "atom" },
          { title: "Tailwind v4", description: "Inyección dinámica de tokens de diseño en tiempo real.", size: "small", icon: "zap" },
          { title: "Astro Core", description: "SSR y Shipped JS minimalista para una velocidad de carga instantánea.", size: "small", icon: "cpu" },
          { title: "View Transitions", description: "Navegación nativa fluida entre estados de la aplicación.", size: "small", icon: "box" }
        ]
      }
    },
    {
      type: 'metrics-pulse',
      id: 'stats-pulse',
      data: {
        title: "Impacto en Tiempo Real",
        stats: [
          { label: "Tiempo de Respuesta", value: "99", suffix: "ms", progress: 99 },
          { label: "Optimización SEO", value: "100", suffix: "%", progress: 100 },
          { label: "Reducción de Latencia", value: "45", suffix: "%", progress: 45 }
        ]
      }
    },
    {
      type: 'identity-stack',
      id: 'about-identity',
      data: {
        title: "Nuestra Identidad",
        subtitle: "Precisión, Rigor y Vanguardia",
        content: "No solo construimos sitios web; arquitectamos experiencias digitales donde cada píxel tiene un propósito técnico y estético definido. Nuestra metodología asegura que cada interacción sea significativa.",
        image: "/images/carousel-2.png"
      }
    },
    {
      type: 'process-timeline',
      id: 'implementation-flow',
      data: {
        title: "Flujo de Ejecución",
        steps: [
          { date: "Fase 01", title: "Análisis Táctico", description: "Auditamos los requerimientos y definimos la estrategia de visualización." },
          { date: "Fase 02", title: "Arquitectura de Datos", description: "Modelamos el showcase.ts para reflejar la identidad de marca." },
          { date: "Fase 03", title: "Despliegue Core", description: "Implementación de los módulos atómicos con optimización de assets." }
        ]
      }
    }
  ]
};
