import type { SiteConfig } from '../../types/config';

export const siteConfig: SiteConfig = {
  brand: {
    name: "HYPER-SENSE-CORE",
    logo: "/logo.svg",
    slogan: "High-Precision Interface Showcase",
    email: "isaaca.dev.net@gmail.com"
  },
  assets: {
    cloudinary: {
      cloudName: "hyper-sense-cloud",
      folder: "showcase"
    },
    fallbackImage: "/images/fallback.png"
  },
  author: {

    name: "Isaac Gonzalez",
    role: "Full-Stack Architect & UI Engineer"
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
  socials: [
    { platform: 'github', url: 'https://github.com/IsaacA-Dev' },
  ],
  layout: [
    {
      type: 'hero',

      id: 'main-hero',
      data: {
        title: "HYPER",
        highlight: "SHOWCASE",
        description: "Explora la convergencia entre diseño táctico y rendimiento extremo. Una plataforma construida para visualizar el futuro de las interfaces empresariales.",
        cta: { text: "Explorar Sistema", url: "/features-bento", secondaryText: "Especificaciones", secondaryUrl: "/implementation-flow" }
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
          { label: "Tiempo de Respuesta", value: "18", suffix: "ms", progress: 99 },
          { label: "Rendimiento Core", value: "100", suffix: "%", progress: 100 },
          { label: "Velocidad de Carga", value: "0.8", suffix: "s", progress: 96 }
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
      type: 'tech-carousel',
      id: 'stack-carousel',
      data: {
        title: "Tecnologías de Alto Rendimiento",
        technologies: [
          { name: "Astro", icon: "https://cdn.simpleicons.org/astro/E11D48" },
          { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
          { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
          { name: "Dokploy", icon: "https://dokploy.com/favicon.ico" },
          { name: "Cloudflare", icon: "https://cdn.simpleicons.org/cloudflare/F38020" },
          { name: "Github", icon: "https://cdn.simpleicons.org/github" }
        ]
      }
    },
    {
      type: 'process-timeline',

      id: 'implementation-flow',
      data: {
        title: "Flujo de Ejecución",
        steps: [
          { date: "Fase 01", title: "Análisis Táctico", description: "Auditamos los requerimientos y definimos la estrategia de visualización." },
          { date: "Fase 02", title: "Arquitectura de Datos", description: "Modelamos el site-config.ts para reflejar la identidad de marca." },
          { date: "Fase 03", title: "Despliegue Core", description: "Implementación de los módulos atómicos con optimización de assets." }
        ]
      }
    }
  ]
};


