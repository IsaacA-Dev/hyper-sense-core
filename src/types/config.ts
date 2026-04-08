export interface SiteConfig {
  brand: {
    name: string;
    logo: string;
    slogan: string;
    email: string;
  };
  assets: {
    cloudinary?: CloudinaryConfig;
    fallbackImage: string;
  };
  author: {

    name: string;
    role: string;
    avatar?: string;
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
  socials: {
    platform: 'github' | 'twitter' | 'linkedin' | 'instagram';
    url: string;
  }[];
  layout: Section[];
}


export type Section = 
  | { type: 'hero'; id: string; data: HeroData }
  | { type: 'bento-grid'; id: string; data: BentoData }
  | { type: 'metrics-pulse'; id: string; data: MetricsData }
  | { type: 'identity-stack'; id: string; data: IdentityData }
  | { type: 'process-timeline'; id: string; data: TimelineData }
  | { type: 'tech-carousel'; id: string; data: TechCarouselData };

export interface TechCarouselData {
  title?: string;
  technologies: { name: string; icon: string }[];
}


export interface CloudinaryConfig {
  cloudName: string;
  baseUrl?: string;
  folder?: string;
}

export interface HeroData {

  title: string;
  highlight: string;
  description: string;
  cta?: { text: string; url: string; secondaryText?: string; secondaryUrl?: string };
}

export interface BentoData {
  title: string;
  items: { title: string; description: string; size: 'large' | 'small'; icon: string }[];
}

export interface MetricsData {
  title: string;
  stats: { label: string; value: string; suffix?: string; progress: number }[];
}

export interface IdentityData {
  title: string;
  subtitle: string;
  content: string;
  image: string;
}

export interface TimelineData {
  title: string;
  steps: { title: string; date: string; description: string }[];
}
