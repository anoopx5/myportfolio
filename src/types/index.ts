export type ProjectCategory = 'All' | 'Real Estate' | 'Healthcare' | 'Ecommerce' | 'Restaurant' | 'Beauty';

export interface Project {
  id: string;
  number: string;
  name: string;
  category: string;
  filterCategory: 'Real Estate' | 'Healthcare' | 'Ecommerce' | 'Restaurant' | 'Beauty';
  description: string;
  url: string;
  image?: string;
  highlights: string[];
  accentColor: string;
  accentGlow: string;
  badgeColor: string;
  overview: {
    clientType: string;
    objective: string;
    deliverables: string[];
    techStack: string[];
  };
  previewVisual: {
    badge: string;
    headline: string;
    subheadline: string;
    ctaText: string;
    stats: { label: string; value: string }[];
    features: { title: string; subtitle: string; icon: string }[];
    imageGradient: string;
  };
}

export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName: string;
  deliverables: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  details: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface WhyPoint {
  number: string;
  title: string;
  description: string;
  iconName: string;
}
