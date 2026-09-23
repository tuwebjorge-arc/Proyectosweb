export type Lang = "en" | "es";

export const translations = {
  en: {
    // Navigation
    nav: {
      home: "Home",
      services: "Services",
      about: "About",
      projects: "Projects",
      contact: "Contact",
      requestProject: "Request a project",
      location: "Marbella · Costa del Sol",
    },
    // Hero
    hero: {
      subtitle: "Bespoke carpentry & interior renovation",
      title: "Exceptional interiors, designed for you.",
      description:
        "We work on bespoke carpentry and interior renovation projects for private villas, residences and high-end apartments in Marbella and the Costa del Sol.",
      cta1: "Discover our services",
      cta2: "Request a project",
    },
    // Intro
    intro: {
      title: "Interiors designed to last",
      body: "Every project begins with a conversation, a property and a clear vision. We work closely with each client to understand their vision and turn it into a carefully designed space, where precision, quality materials and refined finishes make the difference.",
    },
    // Services
    services: {
      heading: "Our services",
      subheading: "Carpentry and interior design solutions tailored to each property.",
      readMore: "Read more",
      items: [
        {
          title: "Bespoke kitchens",
          shortDescription:
            "Custom kitchens designed according to your space, lifestyle and aesthetic preferences.",
        },
        {
          title: "Wardrobes & dressing rooms",
          shortDescription:
            "Custom storage solutions, wardrobes and walk-in dressing rooms made to measure.",
        },
        {
          title: "Bespoke carpentry",
          shortDescription:
            "Custom furniture, wall cladding, fitted furniture and architectural joinery.",
        },
        {
          title: "Staircases",
          shortDescription:
            "Bespoke staircases designed to complement the architecture of the property.",
        },
        {
          title: "Luxury bathrooms",
          shortDescription:
            "Full bathroom renovations with elegant materials and sophisticated finishes.",
        },
        {
          title: "Interior renovations",
          shortDescription:
            "Transformation of villas, houses and apartments, from individual rooms to complete interiors.",
        },
      ],
    },
    // Kitchen section
    kitchen: {
      title: "Designed for your lifestyle.",
      p1: "We create bespoke kitchens where functionality, materials and design come together.",
      p2: "Every element adapts to the space — from cabinetry and islands to storage, finishes and details.",
      p3: "Everything is designed specifically for your home.",
    },
    // Carpentry section
    carpentry: {
      title: "Made to measure.\nMade for your home.",
      p1: "We craft custom wardrobes, dressing rooms, furniture, wall cladding and fitted joinery.",
      p2: "Each piece is designed with the architecture of the property in mind, creating integrated and carefully considered interiors.",
    },
    // Renovation section
    renovation: {
      title: "We transform the way your home feels.",
      p1: "We carry out partial and full interior renovations for villas, houses and apartments.",
      p2: "Our work can include kitchens, bathrooms, staircases, carpentry, finishes and other interior elements, creating a harmonious result throughout the property.",
    },
    // About
    about: {
      label: "About us",
      title: "Over 10 years of experience",
      p1: "We are a company with more than 10 years of experience.",
      p2: "We combine traditional craftsmanship with contemporary design to create unique interiors.",
      p3: "We work closely with each client to understand their vision and transform it into a carefully designed space.",
      p4: "Our work is defined by precision, quality materials and refined finishes.",
    },
    // Process
    process: {
      heading: "Our process",
      steps: [
        { title: "Consultation", description: "We get to know your property and your needs." },
        { title: "Planning", description: "We define the design, materials and scope of work." },
        { title: "Execution", description: "We manufacture and install each element with precision." },
        { title: "Completion", description: "We carry out the finishing touches and a quality review." },
      ],
    },
    // Gallery
    gallery: {
      heading: "Projects",
    },
    // Contact section
    contact: {
      heading: "Let's talk about your project",
      subheading:
        "Tell us what you have in mind and we'll discuss how we can transform your space.",
      locationLabel: "Location",
      phoneLabel: "Phone / WhatsApp",
      instagramLabel: "Instagram",
    },
    // Contact form
    form: {
      nameLabel: "Name",
      namePlaceholder: "Your name",
      emailLabel: "Email",
      phoneLabel: "Phone",
      projectTypeLabel: "Project type",
      projectTypePlaceholder: "Select an option",
      messageLabel: "Message",
      messagePlaceholder: "Details about your project...",
      submit: "Send enquiry",
      sending: "Sending...",
      successTitle: "Message sent",
      successBody: "Thank you for contacting us. We will get back to you as soon as possible.",
      sendAnother: "Send another message",
      projectTypes: [
        "Kitchen",
        "Wardrobes / dressing room",
        "Bespoke carpentry",
        "Staircases",
        "Bathroom",
        "Full renovation",
        "Other",
      ],
      errors: {
        name: "Please enter your name.",
        email: "Please enter a valid email address.",
        projectType: "Please select a project type.",
        message: "Please describe your project.",
      },
    },
    // Footer
    footer: {
      tagline: "Bespoke carpentry · Interior renovation",
      navigation: "Navigation",
      contactLabel: "Contact",
      rights: "All rights reserved.",
      legal: [
        { name: "Legal Notice", href: "/aviso-legal" },
        { name: "Privacy Policy", href: "/privacidad" },
        { name: "Cookie Policy", href: "/cookies" },
      ],
    },
    // WhatsApp
    whatsapp: {
      message:
        "Hello, I would like to request information about a carpentry or interior renovation project.",
      ariaLabel: "Contact AMW100 Carpentry via WhatsApp",
    },
    // Language toggle
    lang: {
      switch: "ES",
      switchLabel: "Cambiar a Español",
    },
  },

  es: {
    nav: {
      home: "Inicio",
      services: "Servicios",
      about: "Nosotros",
      projects: "Proyectos",
      contact: "Contacto",
      requestProject: "Solicitar proyecto",
      location: "Marbella · Costa del Sol",
    },
    hero: {
      subtitle: "Carpintería a medida y renovación de interiores",
      title: "Interiores excepcionales, diseñados para ti.",
      description:
        "Trabajamos en proyectos de carpintería a medida y renovación de interiores para villas privadas, residencias y apartamentos de alta gama en Marbella y la Costa del Sol.",
      cta1: "Descubrir nuestros servicios",
      cta2: "Solicitar proyecto",
    },
    intro: {
      title: "Interiores diseñados para durar",
      body: "Cada proyecto nace de una conversación, una propiedad y una visión concreta. Trabajamos estrechamente con cada cliente para comprender su visión y transformarla en un espacio cuidadosamente diseñado, donde la precisión, los materiales de calidad y los acabados refinados marcan la diferencia.",
    },
    services: {
      heading: "Nuestros servicios",
      subheading: "Soluciones de carpintería e interiorismo adaptadas a cada propiedad.",
      readMore: "Leer más",
      items: [
        {
          title: "Cocinas a medida",
          shortDescription:
            "Cocinas personalizadas diseñadas según tu espacio, estilo de vida y preferencias estéticas.",
        },
        {
          title: "Armarios y vestidores",
          shortDescription: "Soluciones de almacenamiento, armarios y vestidores hechos a medida.",
        },
        {
          title: "Carpintería a medida",
          shortDescription:
            "Mobiliario personalizado, revestimientos de pared, muebles empotrados y trabajos de carpintería arquitectónica.",
        },
        {
          title: "Escaleras",
          shortDescription:
            "Escaleras a medida diseñadas para complementar la arquitectura de la propiedad.",
        },
        {
          title: "Baños de lujo",
          shortDescription:
            "Renovaciones integrales de baños con materiales elegantes y acabados sofisticados.",
        },
        {
          title: "Renovaciones de interiores",
          shortDescription:
            "Transformación de villas, casas y apartamentos, desde estancias individuales hasta interiores completos.",
        },
      ],
    },
    kitchen: {
      title: "Diseñadas para tu estilo de vida.",
      p1: "Creamos cocinas a medida donde se unen la funcionalidad, los materiales y el diseño.",
      p2: "Cada elemento se adapta al espacio, desde los muebles y las islas hasta el almacenamiento, los acabados y los detalles.",
      p3: "Todo se diseña específicamente para tu hogar.",
    },
    carpentry: {
      title: "Hecha a medida.\nHecha para tu hogar.",
      p1: "Creemos armarios, vestidores, muebles, revestimientos de pared y mobiliario empotrado personalizados.",
      p2: "Cada pieza se diseña teniendo en cuenta la arquitectura de la propiedad, creando interiores integrados y cuidadosamente concebidos.",
    },
    renovation: {
      title: "Transformamos la forma en que se siente tu hogar.",
      p1: "Realizamos renovaciones parciales e integrales de interiores para villas, casas y apartamentos.",
      p2: "Nuestro trabajo puede incluir cocinas, baños, escaleras, carpintería, acabados y otros elementos interiores, creando un resultado armonioso en toda la propiedad.",
    },
    about: {
      label: "Sobre nosotros",
      title: "Más de 10 años de experiencia",
      p1: "Somos una empresa con más de 10 años de trayectoria.",
      p2: "Combinamos la artesanía tradicional con el diseño contemporáneo para crear interiores únicos.",
      p3: "Trabajamos estrechamente con cada cliente para comprender su visión y transformarla en un espacio cuidadosamente diseñado.",
      p4: "Nuestro trabajo se define por la precisión, los materiales de calidad y los acabados refinados.",
    },
    process: {
      heading: "Nuestro proceso",
      steps: [
        { title: "Consulta", description: "Conocemos tu propiedad y tus necesidades." },
        {
          title: "Planificación",
          description: "Definimos el diseño, los materiales y el alcance del trabajo.",
        },
        {
          title: "Ejecución",
          description: "Fabricamos e instalamos cada elemento con precisión.",
        },
        {
          title: "Finalización",
          description: "Realizamos los últimos detalles y una revisión de calidad.",
        },
      ],
    },
    gallery: {
      heading: "Proyectos",
    },
    contact: {
      heading: "Hablemos de tu proyecto",
      subheading:
        "Cuéntanos qué tienes en mente y hablamos sobre cómo podemos transformar tu espacio.",
      locationLabel: "Ubicación",
      phoneLabel: "Teléfono / WhatsApp",
      instagramLabel: "Instagram",
    },
    form: {
      nameLabel: "Nombre",
      namePlaceholder: "Tu nombre",
      emailLabel: "Email",
      phoneLabel: "Teléfono",
      projectTypeLabel: "Tipo de proyecto",
      projectTypePlaceholder: "Selecciona una opción",
      messageLabel: "Mensaje",
      messagePlaceholder: "Detalles sobre tu proyecto...",
      submit: "Enviar consulta",
      sending: "Enviando...",
      successTitle: "Mensaje enviado",
      successBody: "Gracias por contactar con nosotros. Te responderemos lo antes posible.",
      sendAnother: "Enviar otro mensaje",
      projectTypes: [
        "Cocina",
        "Armarios / vestidor",
        "Carpintería a medida",
        "Escaleras",
        "Baño",
        "Renovación integral",
        "Otro",
      ],
      errors: {
        name: "Por favor, introduce tu nombre.",
        email: "Introduce una dirección de correo válida.",
        projectType: "Selecciona el tipo de proyecto.",
        message: "Por favor, describe tu proyecto.",
      },
    },
    footer: {
      tagline: "Carpintería a medida · Renovación de interiores",
      navigation: "Navegación",
      contactLabel: "Contacto",
      rights: "Todos los derechos reservados.",
      legal: [
        { name: "Aviso Legal", href: "/aviso-legal" },
        { name: "Política de Privacidad", href: "/privacidad" },
        { name: "Política de Cookies", href: "/cookies" },
      ],
    },
    whatsapp: {
      message:
        "Hola, me gustaría solicitar información sobre un proyecto de carpintería o renovación de interiores.",
      ariaLabel: "Contactar por WhatsApp con AMW100 Carpentry",
    },
    lang: {
      switch: "EN",
      switchLabel: "Switch to English",
    },
  },
} as const;

export type Translations = typeof translations.en;
