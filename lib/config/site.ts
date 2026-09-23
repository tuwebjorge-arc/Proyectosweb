const rawAppUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
export const APP_URL = rawAppUrl.replace(/\/$/, "");

export const siteConfig = {
  name: "AMW100 CARPENTRY",
  tagline: "Carpintería a medida y renovación de interiores",
  description: "Trabajamos en proyectos de carpintería a medida y renovación de interiores para villas privadas, residencias y apartamentos de alta gama en Marbella y la Costa del Sol.",
  
  business: {
    phone: process.env.NEXT_PUBLIC_BUSINESS_PHONE || "+34 687 46 67 74",
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "34687466774",
    city: process.env.NEXT_PUBLIC_BUSINESS_CITY || "Marbella",
    region: process.env.NEXT_PUBLIC_BUSINESS_REGION || "Costa del Sol",
    country: process.env.NEXT_PUBLIC_BUSINESS_COUNTRY || "España",
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://www.instagram.com/amw100carpentry",
    yearsOfExperience: "10+",
  },

  navigation: {
    main: [
      { name: "Inicio", href: "/" },
      { name: "Servicios", href: "/servicios" },
      { name: "Nosotros", href: "/sobre-nosotros" },
      { name: "Proyectos", href: "/proyectos" },
      { name: "Contacto", href: "/contacto" },
    ],
    legal: [
      { name: "Aviso Legal", href: "/aviso-legal" },
      { name: "Política de Privacidad", href: "/privacidad" },
      { name: "Política de Cookies", href: "/cookies" },
    ],
  },

  services: [
    {
      id: "01",
      slug: "cocinas-a-medida",
      title: "Cocinas a medida",
      shortDescription: "Cocinas personalizadas diseñadas según tu espacio, estilo de vida y preferencias estéticas.",
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1600&auto=format&fit=crop"
    },
    {
      id: "02",
      slug: "armarios-y-vestidores",
      title: "Armarios y vestidores",
      shortDescription: "Soluciones de almacenamiento, armarios y vestidores hechos a medida.",
      image: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: "03",
      slug: "carpinteria-a-medida",
      title: "Carpintería a medida",
      shortDescription: "Mobiliario personalizado, revestimientos de pared, muebles empotrados y trabajos de carpintería arquitectónica.",
      image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=1600&auto=format&fit=crop"
    },
    {
      id: "04",
      slug: "escaleras",
      title: "Escaleras",
      shortDescription: "Escaleras a medida diseñadas para complementar la arquitectura de la propiedad.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop"
    },
    {
      id: "05",
      slug: "banos-de-lujo",
      title: "Baños de lujo",
      shortDescription: "Renovaciones integrales de baños con materiales elegantes y acabados sofisticados.",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: "06",
      slug: "renovaciones-de-interiores",
      title: "Renovaciones de interiores",
      shortDescription: "Transformación de villas, casas y apartamentos, desde estancias individuales hasta interiores completos.",
      image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop"
    }
  ],

  processSteps: [
    {
      number: "01",
      title: "Consulta",
      description: "Conocemos tu propiedad y tus necesidades."
    },
    {
      number: "02",
      title: "Planificación",
      description: "Definimos el diseño, los materiales y el alcance del trabajo."
    },
    {
      number: "03",
      title: "Ejecución",
      description: "Fabricamos e instalamos cada elemento con precisión."
    },
    {
      number: "04",
      title: "Finalización",
      description: "Realizamos los últimos detalles y una revisión de calidad."
    }
  ],
  
  gallery: [
    "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1558997519-83ea9252edf8?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop"
  ]
};
