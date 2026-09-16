import { SiteConfig } from "@/types";

/**
 * CONFIGURACIÓN CENTRAL DE AMW100 CARPENTRY
 *
 * NOTA IMPORTANTE:
 * La información de contacto (teléfono, email, whatsapp, dirección, etc.)
 * se alimenta prioritariamente de las variables de entorno o permanece 'undefined'
 * para no publicar datos ficticios hasta que el cliente los confirme.
 */

const rawAppUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
// Asegurar que no tenga barra final para URLs consistentes
export const APP_URL = rawAppUrl.replace(/\/$/, "");

export const siteConfig: SiteConfig = {
  name: "AMW100 CARPENTRY",
  tagline: "Carpintería y reformas con atención al detalle y acabados de autor",
  description:
    "Especialistas en carpintería a medida, reformas de interiores, soluciones arquitectónicas en madera y renovación integral de espacios residenciales y comerciales.",

  business: {
    phone: process.env.NEXT_PUBLIC_BUSINESS_PHONE || undefined,
    email: process.env.NEXT_PUBLIC_BUSINESS_EMAIL || undefined,
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || undefined,
    address: process.env.NEXT_PUBLIC_BUSINESS_ADDRESS || undefined,
    city: process.env.NEXT_PUBLIC_BUSINESS_CITY || undefined,
    region: process.env.NEXT_PUBLIC_BUSINESS_REGION || undefined,
    postalCode: process.env.NEXT_PUBLIC_BUSINESS_POSTAL_CODE || undefined,
    country: process.env.NEXT_PUBLIC_BUSINESS_COUNTRY || "España",
    hours: process.env.NEXT_PUBLIC_BUSINESS_HOURS || undefined,
    taxId: process.env.NEXT_PUBLIC_BUSINESS_TAX_ID || undefined, // NIF / CIF
    legalEntityName: process.env.NEXT_PUBLIC_LEGAL_ENTITY_NAME || "AMW100 CARPENTRY",
  },

  social: {
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || undefined,
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL || undefined,
    pinterest: process.env.NEXT_PUBLIC_PINTEREST_URL || undefined,
  },

  navigation: {
    main: [
      { name: "Inicio", href: "/" },
      { name: "Servicios", href: "/servicios" },
      { name: "Proyectos", href: "/proyectos" },
      { name: "Nosotros", href: "/sobre-nosotros" },
      { name: "Contacto", href: "/contacto" },
    ],
    legal: [
      { name: "Aviso Legal", href: "/aviso-legal" },
      { name: "Política de Privacidad", href: "/privacidad" },
      { name: "Política de Cookies", href: "/cookies" },
    ],
  },

  projectCategories: [
    { id: "todos", label: "Todos los proyectos" },
    { id: "carpinteria", label: "Carpintería" },
    { id: "reformas", label: "Reformas" },
    { id: "cocinas", label: "Cocinas" },
    { id: "banos", label: "Baños" },
    { id: "interiores", label: "Interiores" },
    { id: "mobiliario", label: "Mobiliario" },
  ],

  pillars: [
    {
      title: "Atención al detalle y rigor técnico",
      description:
        "Cada unión, bisel y ajuste se ejecuta con precisión milimétrica, garantizando durabilidad y pureza estética.",
      iconName: "Compass",
    },
    {
      title: "Materiales nobles y seleccionados",
      description:
        "Selección exhaustiva de maderas nobles, herrajes de alta gama y revestimientos sostenibles de primer nivel.",
      iconName: "Trees",
    },
    {
      title: "Soluciones 100% personalizadas",
      description:
        "Adaptación rigurosa a la volumetría de cada espacio, resolviendo desafíos técnicos con diseño funcional.",
      iconName: "PencilRuler",
    },
    {
      title: "Comunicación directa y transparente",
      description:
        "Trato cercano de profesional a cliente, con seguimiento continuo durante todas las fases de ejecución.",
      iconName: "MessageSquareCheck",
    },
    {
      title: "Compromiso con los acabados",
      description:
        "Supervisión estricta en el montaje y pulido final para entregar proyectos limpios, funcionales e impecables.",
      iconName: "ShieldCheck",
    },
    {
      title: "Coordinación integral de gremios",
      description:
        "Gestión fluida en reformas que involucran múltiples disciplinas constructivas para cumplir plazos.",
      iconName: "Layers",
    },
  ],

  processSteps: [
    {
      number: "01",
      title: "Contacto y toma de necesidades",
      description:
        "Conversamos sobre tu idea, los requerimientos técnicos y funcionales, y el alcance previsto del proyecto.",
      details: "Recopilación de planos, referencias e intenciones de diseño.",
    },
    {
      number: "02",
      title: "Valoración y estudio de viabilidad",
      description:
        "Evaluamos el espacio y las soluciones constructivas idóneas, preparando una propuesta detallada y transparente.",
      details: "Revisión técnica de dimensiones, materiales y fijaciones.",
    },
    {
      number: "03",
      title: "Diseño y planificación técnica",
      description:
        "Definición exacta de despieces, muestras de acabados, selección de herrajes y cronograma de trabajo.",
      details: "Validación de planos y muestras antes de taller.",
    },
    {
      number: "04",
      title: "Fabricación y ejecución en obra",
      description:
        "Elaboración minuciosa en taller y montaje limpio en el espacio final con ajuste y revisión de cada detalle.",
      details: "Entrega con comprobación minuciosa de funcionamiento y acabados.",
    },
  ],

  services: [
    {
      id: "carpinteria-a-medida",
      slug: "carpinteria-a-medida",
      title: "Carpintería a Medida",
      shortDescription:
        "Diseño, mecanizado y ensamblaje de puertas, armarios empotrados, panelados y carpintería arquitectónica.",
      fullDescription:
        "Creamos soluciones de carpintería que se integran a la perfección en la arquitectura de cada estancia. Desde puertas enrasadas y frentes alistonados hasta vestidores a medida y panelados acústicos o decorativos en maderas naturales.",
      benefits: [
        "Aprovechamiento integral del espacio útil",
        "Herrajes ocultos y mecanismos de cierre suave de alta gama",
        "Tratamientos protectores y barnizados a poro abierto o lacados mate",
        "Integración de iluminación LED lineal oculta",
      ],
      features: [
        "Puertas de paso y correderas de gran formato",
        "Armarios y vestidores configurados a medida",
        "Panelados alistonados y revestimientos de pared",
        "Rodapiés integrados y carpintería técnica",
      ],
      materials: ["Roble natural", "Nogal americano", "Fresno", "MDF hidrófugo lacado"],
      processSteps: [
        {
          title: "Medición láser en espacio real",
          description: "Comprobación de aplomes, cotas y encuentros con otros elementos.",
        },
        {
          title: "Despiece y mecanizado en taller",
          description: "Corte de precisión y preparación de ensambles tradicionales y modernos.",
        },
        {
          title: "Acabado superficial y lacado",
          description: "Aplicación de aceites naturales, barnices o lacas en cabina controlada.",
        },
        {
          title: "Montaje y ajuste fino",
          description: "Instalación en obra cuidando las juntas y el aplome general.",
        },
      ],
      heroImage:
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1600&auto=format&fit=crop",
      galleryImages: [
        "https://images.unsplash.com/photo-1540518614846-7ede433c4ef0?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=1200&auto=format&fit=crop",
      ],
      icon: "Hammer",
      isPlaceholder: true,
    },
    {
      id: "reformas-integrales",
      slug: "reformas-integrales",
      title: "Reformas y Renovación de Interiores",
      shortDescription:
        "Transformación de viviendas y locales comerciales con enfoque en materiales nobles y coherencia espacial.",
      fullDescription:
        "Ejecutamos reformas integrales y parciales donde la madera y los acabados constructivos de calidad son el eje vertebrador. Coordinamos los diferentes trabajos para garantizar transiciones limpias entre suelos, paredes, carpinterías y techos.",
      benefits: [
        "Coordinación técnica centralizada para evitar desajustes",
        "Cuidado riguroso del aislamiento térmico y acústico",
        "Uso de materiales resistentes y de fácil mantenimiento",
        "Control estricto de los tiempos de ejecución pactados",
      ],
      features: [
        "Redistribución de espacios y tabiquería seca",
        "Renovación de pavimentos de madera y tarimas",
        "Revestimientos murales y techos continuos",
        "Actualización completa de carpinterías interiores",
      ],
      materials: ["Tarimas macizas y multicapa", "Microcemento", "Maderas termotratadas", "Perfilerías ocultas"],
      processSteps: [
        {
          title: "Estudio del estado actual",
          description: "Análisis de instalaciones, niveles de forjado y condicionantes estructurales.",
        },
        {
          title: "Propuesta de redistribución",
          description: "Planificación de demoliciones, nuevos tabiques y pasos de instalaciones.",
        },
        {
          title: "Ejecución coordinada",
          description: "Trabajo secuencial de albañilería, fontanería, electricidad y carpintería.",
        },
        {
          title: "Revisión final y entrega",
          description: "Limpieza de obra y puesta en marcha de todos los elementos.",
        },
      ],
      heroImage:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
      galleryImages: [
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop",
      ],
      icon: "Home",
      isPlaceholder: true,
    },
    {
      id: "cocinas-y-banos",
      slug: "cocinas-y-banos",
      title: "Cocinas y Baños de Diseño",
      shortDescription:
        "Mobiliario de cocina y baño a medida con frentes nobles, encimeras continuas y optimización ergonómica.",
      fullDescription:
        "Proyectamos y fabricamos cocinas e islas funcionales, muebles de lavabo suspendidos y armarios de baño resistentes a la humedad. Combinamos madera natural tratada con porcelánicos, piedras técnicas y herrajes de extracción total.",
      benefits: [
        "Aprovechamiento milimétrico de esquinas y alturas",
        "Resistencia certificada frente al vapor y la humedad",
        "Módulos interiores optimizados con accesorios de orden",
        "Estética limpia sin tiradores visibles o con perfiles gola",
      ],
      features: [
        "Islas centrales y penínsulas integradas",
        "Columnas para electrodomésticos empotrados",
        "Muebles bajolavabo con cajones salva-sifón",
        "Encimeras en porcelánico, cuarzo y madera maciza",
      ],
      materials: ["Frentes alistonados en roble", "Lacas antihuellas", "Piedras sintetizadas", "Herrajes Blum / Hettich"],
      processSteps: [
        {
          title: "Planificación ergonómica",
          description: "Definición del triángulo de trabajo y tomas de agua y electricidad.",
        },
        {
          title: "Fabricación de módulos",
          description: "Montaje con tableros hidrófugos de alta densidad y canteado láser.",
        },
        {
          title: "Instalación de mobiliario",
          description: "Nivelación rigurosa y colocación de frentes, zócalos y golas.",
        },
        {
          title: "Colocación de encimera e iluminación",
          description: "Ajuste de juntas y sellados sanitarios de máxima estanqueidad.",
        },
      ],
      heroImage:
        "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1600&auto=format&fit=crop",
      galleryImages: [
        "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop",
      ],
      icon: "Utensils",
      isPlaceholder: true,
    },
    {
      id: "mobiliario-a-medida",
      slug: "mobiliario-a-medida",
      title: "Mobiliario Singular y de Autor",
      shortDescription:
        "Piezas exclusivas: mesas de comedor, librerías integradas, aparadores y escritorios con maderas seleccionadas.",
      fullDescription:
        "Diseñamos y fabricamos muebles únicos adaptados a la fisonomía de la estancia y al gusto particular del cliente. Cada pieza equilibra la belleza orgánica de la veta con la solidez de ensambles duraderos.",
      benefits: [
        "Piezas exclusivas no encontrables en catálogos comerciales",
        "Tratamiento artesanal de la veta y acabados al tacto de cera o aceite",
        "Estructuras robustas pensadas para perdurar generaciones",
        "Integración de pasacables y canalizaciones ocultas",
      ],
      features: [
        "Mesas de gran formato con tapas macizas",
        "Librerías de suelo a techo con escalas y módulos",
        "Muebles TV y aparadores con listones decorativos",
        "Cabeceros de cama integrados con mesillas",
      ],
      materials: ["Madera maciza de nogal", "Roble europeo", "Hierro termolacado", "Cristal templado"],
      processSteps: [
        {
          title: "Conceptualización formal",
          description: "Bocetos, proporciones volumétricas y selección de tablones.",
        },
        {
          title: "Cajeado y uniones",
          description: "Mecanizado de espigas, colas de milano y uniones ocultas reforzadas.",
        },
        {
          title: "Lijado y nutrición de la madera",
          description: "Proceso manual de lijado progresivo y acabado sedoso.",
        },
        {
          title: "Entrega e instalación",
          description: "Posicionamiento en el espacio y ajuste de apoyos niveladores.",
        },
      ],
      heroImage:
        "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=1600&auto=format&fit=crop",
      galleryImages: [
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1540518614846-7ede433c4ef0?q=80&w=1200&auto=format&fit=crop",
      ],
      icon: "Armchair",
      isPlaceholder: true,
    },
    {
      id: "acabados-y-revestimientos",
      slug: "acabados-y-revestimientos",
      title: "Revestimientos y Acabados Arquitectónicos",
      shortDescription:
        "Revestimientos de madera en paredes y techos, celosías divisorias, escaleras y detalles de alta carpintería.",
      fullDescription:
        "Elevamos el carácter de cualquier ambiente mediante el uso envolvente de la madera en planos verticales y horizontales. Diseñamos soluciones que aportan calidez visual, confort acústico y elegancia arquitectónica.",
      benefits: [
        "Notable mejora en la absorción acústica del espacio",
        "Aislamiento térmico natural y sensación de calidez inmediata",
        "Ocultación limpia de cuadros eléctricos, tuberías y registros",
        "Sensación de continuidad espacial y diseño contemporáneo",
      ],
      features: [
        "Celosías fijas y móviles para separación de ambientes",
        "Forrado de escaleras de hormigón o metal con peldaños macizos",
        "Falsos techos alistonados con integración de luminarias",
        "Vigas decorativas y enmarques arquitectónicos",
      ],
      materials: ["Listones de abeto y pino melis", "Chapas finas de roble", "Fieltros fonoabsorbentes", "Aceites ignífugos"],
      processSteps: [
        {
          title: "Replanteo de rastreles",
          description: "Instalación de subestructura nivelada y ventilada.",
        },
        {
          title: "Colocación de aislamiento acústico",
          description: "Inserción de paneles absorbentes entre rastreles si se requiere.",
        },
        {
          title: "Fijación oculta de lamas",
          description: "Anclaje invisible con clips de acero inoxidable y adhesivos técnicos.",
        },
        {
          title: "Remates perimetrales",
          description: "Ajuste de ingletes en esquinas y encuentros con suelos y techos.",
        },
      ],
      heroImage:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1600&auto=format&fit=crop",
      galleryImages: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200&auto=format&fit=crop",
      ],
      icon: "Layers",
      isPlaceholder: true,
    },
    {
      id: "proyectos-personalizados",
      slug: "proyectos-personalizados",
      title: "Proyectos Especiales y a Medida",
      shortDescription:
        "Soluciones no estandarizadas para locales comerciales, oficinas y residencias con requerimientos únicos.",
      fullDescription:
        "Desarrollamos proyectos singulares donde se requieren soluciones técnicas ad-hoc: mostradores de recepción escultóricos, carpintería para locales de hostelería, escaparates o elementos curvos en madera.",
      benefits: [
        "Capacidad de resolución de geometrías complejas",
        "Colaboración estrecha con arquitectos y diseñadores de interiores",
        "Prototipado previo de uniones y pruebas de esfuerzo",
        "Cumplimiento de normativas de uso intensivo y resistencia al fuego",
      ],
      features: [
        "Mostradores de recepción y barras de bar",
        "Mobiliario comercial para retail y boutiques",
        "Cabinas de trabajo insonorizadas en madera",
        "Estructuras curvas y elementos singulares",
      ],
      materials: ["Contrachapados curvables", "Compacto fenólico", "Maderas exóticas certificadas", "Resinas epoxi"],
      processSteps: [
        {
          title: "Estudio técnico del proyecto",
          description: "Revisión de planos de arquitectura y especificaciones de uso.",
        },
        {
          title: "Elaboración de muestras y prototipos",
          description: "Comprobación de acabados, ensambles y resistencia.",
        },
        {
          title: "Producción integral",
          description: "Mecanizado numérico y acabado manual.",
        },
        {
          title: "Implantación en obra",
          description: "Montaje especializado en horarios coordinados.",
        },
      ],
      heroImage:
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1600&auto=format&fit=crop",
      galleryImages: [
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=1200&auto=format&fit=crop",
      ],
      icon: "Sparkles",
      isPlaceholder: true,
    },
  ],

  projects: [
    {
      id: "armario-vestidor-roble",
      slug: "armario-vestidor-roble",
      title: "Vestidor a Medida en Roble y Cristal",
      category: "carpinteria",
      categoryLabel: "Carpintería a medida",
      description:
        "Vestidor abierto con estructura en roble europeo alistonado, iluminación LED empotrada de 2700K y puertas de cristal ahumado.",
      fullStory:
        "Este proyecto requería maximizar un espacio de dormitorio principal con techos a diferentes alturas. Se concibió una distribución simétrica con módulos de almacenamiento diferenciados para prendas cortas, largas y cajoneras con frentes de cristal y divisiones de madera maciza.",
      scope: [
        "Diseño volumétrico y despiece técnico",
        "Fabricación de módulos en roble natural",
        "Integración de iluminación LED oculta y sensor de apertura",
        "Instalación de perfiles de aluminio negro y cristal ahumado",
      ],
      materials: ["Roble natural europeo", "Cristal templado Parsol gris", "Herrajes Blum con freno"],
      coverImage:
        "https://images.unsplash.com/photo-1558997519-83ea9252edf8?q=80&w=1200&auto=format&fit=crop",
      gallery: [
        {
          url: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?q=80&w=1200&auto=format&fit=crop",
          alt: "Perspectiva general del vestidor a medida",
          caption: "Estructura en roble con iluminación lineal continua.",
        },
        {
          url: "https://images.unsplash.com/photo-1540518614846-7ede433c4ef0?q=80&w=1200&auto=format&fit=crop",
          alt: "Detalle de cajoneras y frentes",
          caption: "Cajones con guías de extracción total y frentes ingletados.",
        },
        {
          url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop",
          alt: "Detalle de acabado y veta",
          caption: "Veta continua en todo el frente del armario.",
        },
      ],
      isFeatured: true,
      isPlaceholder: true,
    },
    {
      id: "cocina-nogal-isla-porcelanico",
      slug: "cocina-nogal-isla-porcelanico",
      title: "Cocina Abierta en Nogal Americano",
      category: "cocinas",
      categoryLabel: "Cocinas de diseño",
      description:
        "Cocina integrada en salón con isla central revestida en nogal americano oscuro y encimera continua con fregadero bajo plano.",
      fullStory:
        "Proyecto de cocina abierta donde el objetivo era que el mobiliario dialogase visualmente con la zona de estar sin parecer una cocina convencional. Se ocultaron los electrodomésticos en una pared de columnas lisas y se convirtió la isla en el elemento escultórico central.",
      scope: [
        "Fabricación de frentes en nogal con acabado poro abierto",
        "Isla central con campana integrada de inducción",
        "Muebles altos con apertura abatible motorizada",
        "Alineación milimétrica con suelo de madera contiguo",
      ],
      materials: ["Chapa natural de nogal americano", "Encimera porcelánica calacatta", "Interiores antracita"],
      coverImage:
        "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1200&auto=format&fit=crop",
      gallery: [
        {
          url: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1200&auto=format&fit=crop",
          alt: "Vista principal de la isla y cocina en nogal",
          caption: "Isla multifunción con acabado en madera noble.",
        },
        {
          url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
          alt: "Integración de la cocina con el comedor",
          caption: "Fluidez espacial entre ambientes.",
        },
      ],
      isFeatured: true,
      isPlaceholder: true,
    },
    {
      id: "reforma-integral-vivienda-minimalista",
      slug: "reforma-integral-vivienda-minimalista",
      title: "Reforma Interior con Elementos de Madera y Luz",
      category: "reformas",
      categoryLabel: "Reformas de interiores",
      description:
        "Renovación completa de vivienda unifamiliar con suelos de tarima de roble, puertas enrasadas a techo y panelados divisorios.",
      fullStory:
        "Una vivienda con compartimentación excesiva fue reconvertida en un hogar diáfano y luminoso. La madera clara unifica todos los espacios y crea transiciones armónicas entre zonas privadas y sociales.",
      scope: [
        "Demolición y nueva distribución espacial",
        "Instalación de tarima multicapa de roble cepillado",
        "Puertas de suelo a techo con bisagras invisibles",
        "Panelados murales con puertas de paso integradas",
      ],
      materials: ["Roble cepillado mate", "Lacas blanco seda", "Perfilería oculta"],
      coverImage:
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop",
      gallery: [
        {
          url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop",
          alt: "Salón diáfano con tarima y panelado",
          caption: "Ambiente cálido con luz natural filtrada.",
        },
        {
          url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop",
          alt: "Detalle de paso entre salón y cocina",
          caption: "Puertas correderas ocultas en tabique.",
        },
      ],
      isFeatured: true,
      isPlaceholder: true,
    },
    {
      id: "panelado-alistonado-recibidor",
      slug: "panelado-alistonado-recibidor",
      title: "Panelado Alistonado y Puertas Enrasadas",
      category: "interiores",
      categoryLabel: "Interiores y revestimientos",
      description:
        "Revestimiento continuo de pared mediante listones verticales de roble macizo con puertas de paso y armarios completamente camuflados.",
      fullStory:
        "El recibidor de la vivienda presentaba múltiples accesos a dormitorios, baño y cuadro eléctrico. Se proyectó un revestimiento alistonado completo que absorbe visualmente todas las puertas sin romper la continuidad de la textura.",
      scope: [
        "Fabricación de paneles acústicos con listones calibrados",
        "Integración de cerraduras magnéticas y picaportes enrasados",
        "Tratamiento ignífugo superficial",
      ],
      materials: ["Listones de roble macizo", "Fieltro fonoabsorbente reciclado", "Cerraduras magnéticas AGB"],
      coverImage:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop",
      gallery: [
        {
          url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop",
          alt: "Panelado de madera alistonada en zona de entrada",
          caption: "Textura continua y absorción acústica.",
        },
      ],
      isFeatured: true,
      isPlaceholder: true,
    },
    {
      id: "bano-suite-madera-termo-tratada",
      slug: "bano-suite-madera-termo-tratada",
      title: "Mobiliario de Baño Suspendido en Madera Termotratada",
      category: "banos",
      categoryLabel: "Baños de autor",
      description:
        "Mueble de lavabo suspendido con doble seno sobre encimera, fabricado en madera termotratada resistente al agua con uñero oculto.",
      fullStory:
        "Diseñado especialmente para resistir condiciones de humedad sin alterar la belleza táctil de la madera. Cada cajón cuenta con distribución interior a medida para útiles de aseo personal.",
      scope: [
        "Mecanizado CNC de uñeros y cantos sellados",
        "Tratamiento hidrófugo con aceites de penetración profunda",
        "Soporte estructural reforzado para anclaje a tabique",
      ],
      materials: ["Fresno termotratado", "Lavabos de solid surface", "Grifería empotrada"],
      coverImage:
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop",
      gallery: [
        {
          url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop",
          alt: "Mueble de baño suspendido",
          caption: "Elegancia minimalista y calidez orgánica.",
        },
      ],
      isFeatured: false,
      isPlaceholder: true,
    },
    {
      id: "mesa-comedor-roble-macizo",
      slug: "mesa-comedor-roble-macizo",
      title: "Mesa de Comedor Singular en Roble Macizo",
      category: "mobiliario",
      categoryLabel: "Mobiliario singular",
      description:
        "Mesa de 280 cm con tapa maciza de 5 cm de espesor, cantos biselados a 45 grados y patas escultóricas entrelazadas.",
      fullStory:
        "Pieza central para un comedor de doble altura. Se seleccionaron dos tablones de roble francés emparejados a libro para resaltar la continuidad simétrica de la veta natural.",
      scope: [
        "Selección y secado controlado de madera maciza",
        "Unión en espiga oculta con alma de acero",
        "Acabado al aceite-cera ecológico mate",
      ],
      materials: ["Roble macizo francés", "Acabado Osmo Polyx mate"],
      coverImage:
        "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=1200&auto=format&fit=crop",
      gallery: [
        {
          url: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=1200&auto=format&fit=crop",
          alt: "Mesa de comedor de autor",
          caption: "Tapa maciza con acabado de poro abierto.",
        },
      ],
      isFeatured: false,
      isPlaceholder: true,
    },
  ],
};
