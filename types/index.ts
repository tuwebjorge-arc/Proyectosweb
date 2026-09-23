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
  image: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  business: {
    phone?: string;
    whatsapp?: string;
    city?: string;
    region?: string;
    country?: string;
    instagram?: string;
    yearsOfExperience?: string;
  };
  navigation: {
    main: { name: string; href: string }[];
    legal: { name: string; href: string }[];
  };
  services: Service[];
  processSteps: ProcessStep[];
  gallery: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  projectType: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
  error?: string;
}
