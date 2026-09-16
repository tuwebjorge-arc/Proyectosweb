export type ProjectCategory =
  | "todos"
  | "carpinteria"
  | "reformas"
  | "cocinas"
  | "banos"
  | "interiores"
  | "mobiliario"
  | "otros";

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  description: string;
  fullStory?: string;
  scope?: string[];
  materials?: string[];
  location?: string;
  year?: string;
  coverImage: string;
  gallery: {
    url: string;
    alt: string;
    caption?: string;
  }[];
  isFeatured?: boolean;
  isPlaceholder?: boolean;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  features: string[];
  materials: string[];
  processSteps: {
    title: string;
    description: string;
  }[];
  heroImage: string;
  galleryImages?: string[];
  icon: string;
  isPlaceholder?: boolean;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  details?: string;
}

export interface QualitativePillar {
  title: string;
  description: string;
  iconName: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  business: {
    // Configurable fields - only displayed when explicitly provided by client / env
    phone?: string;
    email?: string;
    whatsapp?: string;
    address?: string;
    city?: string;
    region?: string;
    postalCode?: string;
    country?: string;
    hours?: string;
    coordinates?: {
      lat: number;
      lng: number;
    };
    taxId?: string; // NIF / CIF for legal notices
    legalEntityName?: string;
  };
  social: {
    instagram?: string;
    facebook?: string;
    pinterest?: string;
    houzz?: string;
  };
  navigation: {
    main: { name: string; href: string }[];
    legal: { name: string; href: string }[];
  };
  projectCategories: {
    id: ProjectCategory;
    label: string;
  }[];
  pillars: QualitativePillar[];
  processSteps: ProcessStep[];
  services: Service[];
  projects: Project[];
}

export interface ContactFormData {
  name: string;
  lastName?: string;
  email: string;
  phone?: string;
  projectType: string;
  location?: string;
  message: string;
  privacyAccepted: boolean;
  _website_url?: string; // Honeypot field
}

export interface ContactResponse {
  success: boolean;
  message: string;
  isDevMode?: boolean;
  error?: string;
  fieldErrors?: Record<string, string>;
}
