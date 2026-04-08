import type { SiteConfig } from '../../types/config';

export const siteConfig: SiteConfig = {
  brand: {
    name: "NEBULA-PULSE",
    logo: "/logo.svg",
    slogan: "Deep-Space Interface Analytics",
    email: "contact@nebula-pulse.io"
  },
  assets: {
    cloudinary: {
      cloudName: "nebula-cloud",
      folder: "pulse"
    },
    fallbackImage: "/images/nebula-fallback.png"
  },
  author: {

    name: "Isaac Gonzalez",
    role: "Lead Systems Architect"
  },
  theme: {
    colors: {
      primary: "#06B6D4", // Cyan 500
      secondary: "#1E1B4B", // Indigo 950
      accent: "#A855F7",    // Purple 500
      surface: "#0F172A",   // Slate 900
      background: "#020617", // Black
      text: "#E2E8F0"
    },
    fonts: {
      display: "'Outfit', sans-serif",
      body: "'Inter', sans-serif"
    }
  },
  socials: [
    { platform: 'github', url: 'https://github.com/IsaacA-Dev' },
  ],
  layout: [
    {
      type: 'hero',
      id: 'nebula-hero',
      data: {
        title: "NEBULA",
        highlight: "PULSE",
        description: "La próxima frontera de la visualización de datos espaciales. Diseñado para arquitectos del mañana.",
        cta: { text: "Iniciar Despegue", url: "#", secondaryText: "Protocolos", secondaryUrl: "#" }
      }
    },
    {
      type: 'identity-stack',
      id: 'vision-nebula',
      data: {
        title: "Visión del Vacío",
        subtitle: "Exploración Digital Profunda",
        content: "En Nebula Pulse, descendemos al núcleo de los datos para extraer interfaces que respiran. Nuestra estética es gélida, precisa y espacial.",
        image: "/images/carousel-2.png"
      }
    },
    {
      type: 'process-timeline',
      id: 'nebula-timeline',
      data: {
        title: "Protocolo Estelar",
        steps: [
          { date: "Orion", title: "Mapeo de Constelación", description: "Definimos los puntos clave de la interfaz." },
          { date: "Cygnus", title: "Ignición de Núcleo", description: "Desarrollo de los módulos críticos de visualización." },
          { date: "Lyra", title: "Transmisión Final", description: "Optimización y despliegue en la red de borde." }
        ]
      }
    },
    {
      type: 'metrics-pulse',
      id: 'nebula-metrics',
      data: {
        title: "Telemetría de Red",
        stats: [
          { label: "Sync Rate", value: "99.9", suffix: "%", progress: 99.9 },
          { label: "Data Flow", value: "2.4", suffix: "GB/s", progress: 85 },
          { label: "Neural Load", value: "12", suffix: "ms", progress: 12 }
        ]
      }
    },
    {
      type: 'bento-grid',
      id: 'nebula-bento',
      data: {
        title: "Tecnología de Borde",
        items: [
          { title: "Nodos Cuánticos", description: "Procesamiento distribuido de alta fidelidad.", size: "large", icon: "zap" },
          { title: "Ether Core", description: "Comunicación sin latencia entre capas.", size: "small", icon: "cpu" },
          { title: "Void Space", description: "Espaciado negativo optimizado para claridad mental.", size: "small", icon: "box" }
        ]
      }
    },
    {

      type: 'tech-carousel',
      id: 'nebula-stack',
      data: {
        title: "Nebula Core Infrastructure",
        technologies: [
          { name: "Astro", icon: "https://cdn.simpleicons.org/astro/06B6D4" },
          { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
          { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
          { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
          { name: "Dokploy", icon: "https://dokploy.com/logo.svg" },
          { name: "Cloudflare", icon: "https://cdn.simpleicons.org/cloudflare/F38020" }

        ]
      }
    }
  ]
};

