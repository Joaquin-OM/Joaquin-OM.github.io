/**
 * PORTFOLIO MINIMALISTA — JOAQUÍN OSES MONTI
 * Interactividad, traducciones (ES/EN), fondo interactivo en escala de grises y WhatsApp
 */

// Diccionario de Traducciones
const translations = {
    es: {
        "nav.services": "Servicios",
        "nav.projects": "Proyectos",
        "nav.about": "Conóceme",
        "nav.contact": "Contacto",
        "nav.contactMe": "Contactarme",
        "nav.exp": "Experiencia",
        "nav.edu": "Estudios",
        "nav.stack": "Stack Técnico",
        "nav.portfolioBadge": "Portfolio",
        "nav.servicesBadge": "Servicios Web",
        "nav.servicesBtn": "Servicios & Precios",
        "nav.backPersonal": "Sobre Mí / CV",

        "personal.heroTitle": "Joaquín Oses Monti",
        "personal.heroRole": "Desarrollador Web en W34 Marketing (FP Dual) &bull; Técnico en Sistemas (SMR / DAW)",
        "personal.heroDesc": "Desarrollo y maquetación web profesional (WordPress, Shopify, Odoo, Framer y código React), monitorización de flujos y automatizaciones con n8n, y soporte de sistemas. Modalidad FP Dual en Palma de Mallorca y disponibilidad para proyectos freelance remotos.",
        "personal.heroLocation": "Palma de Mallorca &bull; Modalidad FP Dual (Sant Josep Obrer)",
        "personal.ctaContact": "Contactar conmigo",
        "personal.ctaServices": "Ver Servicios Comerciales & Demos →",

        "exp.label": "Trayectoria",
        "exp.title": "Experiencia Laboral",
        "exp.desc": "Desarrollo web en agencia, herramientas internas de gestión documental, soporte de sistemas empresariales y proyectos freelance.",
        "exp.w34Date": "Marzo 2026 &bull; Actualidad",
        "exp.w34Role": "Desarrollador Web (FP Dual)",
        "exp.w34Company": "W34 Marketing &bull; Palma de Mallorca (Presencial)",
        "exp.w34Desc": "Maquetación y mantenimiento continuo de páginas web corporativas y tiendas online en múltiples plataformas: WordPress/WooCommerce, Odoo ERP & Web, Shopify, Framer y desarrollo con código limpio. Supervisión y monitorización de flujos de automatización con n8n y trato directo con clientes para resolver incidencias y evolucionar sus plataformas digitales.",
        "exp.freelanceDate": "2026 &bull; Actualidad",
        "exp.freelanceRole": "Desarrollador Web & Automatizaciones Freelance",
        "exp.freelanceCompany": "Remoto &bull; Proyectos Independientes",
        "exp.freelanceDesc": "Maquetación de landings y webs para profesionales y pymes (React, Node.js, Laravel, restdb.io, PostgreSQL, MariaDB con phpMyAdmin). Integración de flujos de trabajo automatizados con n8n (captación, sincronización de formularios, WhatsApp, email) orientados a acelerar la digitalización.",
        "exp.antforDate": "Septiembre 2025 &bull; Octubre 2025",
        "exp.antforRole": "Desarrollador de Software",
        "exp.antforCompany": "AntFor &bull; Palma de Mallorca",
        "exp.antforDesc": "Desarrollo y mantenimiento de soluciones de software empresarial trabajando con Java, consultas y manipulación de bases de datos SQL, y adaptación a programas internos propietarios de la compañía.",
        "exp.garciaDate": "Marzo 2024 &bull; Junio 2025",
        "exp.garciaRole": "Técnico en Sistemas & Desarrollo de Herramientas Internas",
        "exp.garciaCompany": "García Garriga Asesores &bull; Palma de Mallorca",
        "exp.garciaDesc": "Soporte técnico en entornos Windows y aplicativo de gestión A3. <strong>Diseño y desarrollo de un dashboard central con React y aplicaciones encapsuladas en Python</strong>: automatización de renombrado masivo de lotes documentales de clientes y cotejo automatizado contra hojas de Excel, reduciendo drásticamente horas de papeleo manual y facilitando las declaraciones tributarias trimestrales.",

        "edu.label": "Formación",
        "edu.title": "Estudios & Titulaciones",
        "edu.desc": "Formación técnica oficial y reglada en Desarrollo de Aplicaciones Web (DAW) y Sistemas Microinformáticos y Redes (SMR).",
        "edu.dawDate": "2025 &bull; 2027",
        "edu.dawRole": "Grado Superior en Desarrollo de Aplicaciones Web (DAW)",
        "edu.dawSchool": "Colegio Sant Josep Obrer &bull; En curso (2º año, Modalidad FP Dual)",
        "edu.dawDesc": "Formación avanzada en desarrollo frontend (React, JavaScript moderno), backend (PHP/Laravel, Java, Node.js), modelado y gestión de bases de datos relacionales (SQL/PostgreSQL), despliegue de aplicaciones web y seguridad en producción.",
        "edu.smrDate": "2023 &bull; 2025",
        "edu.smrRole": "Grado Medio en Sistemas Microinformáticos y Redes (SMR)",
        "edu.smrSchool": "Colegio Sant Josep Obrer &bull; Titulado (Modalidad FP Dual)",
        "edu.smrDesc": "Montaje y mantenimiento de hardware, redes locales (cableado estructurado, switches, routers, subredes), sistemas operativos monopuesto y en red (Windows Server, Linux), seguridad informática y servicios de red (DNS, DHCP, correo).",
        "edu.esoDate": "Completado",
        "edu.esoRole": "Educación Secundaria Obligatoria (ESO)",
        "edu.esoSchool": "Colegio Sant Josep Obrer &bull; Palma de Mallorca",
        "edu.esoDesc": "Graduado escolar con base formativa general superada con éxito y orientación científico-tecnológica.",

        "projects.crmBadge": "★ DESTACADO",
        "projects.crmCat": "Ventas & Pipeline",
        "projects.crmTech": "JavaScript ES6+ &bull; Modular State &bull; LocalStorage &bull; Pipeline Kanban",
        "projects.crmTitle": "CRM Ligero para Clientes y Oportunidades",
        "projects.crmSummary": "Sistema integral de gestión de clientes y embudo de ventas para profesionales y autónomos. Desarrollado con arquitectura modular de estado desacoplada, persistencia local de contactos, embudo kanban interactivo de oportunidades, simulador y motor de filtrado reactivo en tiempo real sin dependencias pesadas ni costes de suscripción.",
        "projects.crmLive": "Abrir CRM en vivo",
        "projects.demosHeading": "Demostraciones Interactivas en Vivo (Hostelería, Turismo & Gestión)",
        "projects.codeHeading": "Aplicaciones Web, PWA & Código Abierto",
        "projects.openDemo": "Abrir demo en vivo",

        "hero.ctaDemos": "Ver demos en vivo",
        "hero.threeHint": "Arrastra para rotar &bull; Click: Geometría",
        "demos.label": "Demostraciones",
        "demos.title": "Webs interactivas por sector",
        "demos.desc": "Prueba en vivo soluciones reales maquetadas y optimizadas para negocios de Baleares.",

        "hero.status": "Web Developer en W34 Marketing &bull; Freelance Remoto",
        "hero.title": "Maquetación y desarrollo web profesional a medida.",
        "hero.description": "Maqueto y creo páginas web rápidas, funcionales y adaptadas a móviles: landing pages de alta conversión, webs corporativas y tiendas online. Trabajo con código a medida (React), así como con plataformas líderes: WordPress, Shopify, Framer, Odoo y automatizaciones con n8n.",
        "hero.ctaPrimary": "Pedir presupuesto",
        "hero.ctaSecondary": "Ver proyectos",
        "hero.stackLabel": "Plataformas:",

        "services.label": "Servicios",
        "services.title": "Propuestas claras, precios fijos",
        "services.desc": "Sin costes ocultos. Soluciones enfocadas en generar resultados comerciales.",
        "services.oneTime": "pago único",
        "services.from": "Desde",
        "services.btnSelect": "Solicitar este pack",
        "services.btnQuote": "Pedir valoración",
        "services.recommended": "Recomendado",

        "services.s1Tag": "Web Rápida",
        "services.s1Title": "Landing Page",
        "services.s1Desc": "Ideal para promocionar un servicio específico, campaña publicitaria o captar contactos. Maquetada en Framer, WordPress o código limpio.",
        "services.s1F1": "Diseño y maquetación 100% móvil",
        "services.s1F2": "Botón directo a WhatsApp",
        "services.s1F3": "Carga ultra rápida (< 1.5s)",
        "services.s1F4": "Entrega en 3 a 5 días laborables",

        "services.s2Tag": "Empresarial",
        "services.s2Title": "Web Corporativa",
        "services.s2Desc": "Presencia profesional completa para que tu negocio transmita máxima credibilidad en Google. En WordPress, Framer o a medida.",
        "services.s2F1": "Hasta 5 páginas estructuradas y maquetadas",
        "services.s2F2": "Catálogo de servicios o tarifas",
        "services.s2F3": "SEO local y ficha de Google Maps",
        "services.s2F4": "Formularios y botón WhatsApp",
        "services.s2F5": "Dominio, hosting y SSL configurados",

        "services.s3Tag": "E-Commerce & Automatización",
        "services.s3Title": "Tienda Online, Odoo o n8n",
        "services.s3Desc": "Para negocios que necesitan e-commerce en Shopify/WooCommerce, portales integrados con Odoo ERP o automatizaciones de procesos con n8n.",
        "services.s3F1": "Tiendas Shopify o WooCommerce a medida",
        "services.s3F2": "Integración con Odoo ERP y flujos con n8n",
        "services.s3F3": "Desarrollo modular en React / JavaScript",
        "services.s3F4": "Panel privado y garantía técnica",

        "services.maint": "También ofrezco planes de modernización web y mantenimiento técnico mensual desde <strong>49 €/mes</strong>.",

        "projects.label": "Proyectos",
        "projects.title": "Trabajos y demostraciones",
        "projects.desc": "Herramientas orientadas a solucionar necesidades reales de oficina y negocios.",
        "projects.liveDemo": "Ver demo en vivo",
        "projects.liveApp": "Abrir app en vivo",
        "projects.consultDashboard": "Consultar similar",

        "projects.p1Cat": "Turismo & Movilidad",
        "projects.p1Title": "Moto-Rent: Plataforma de Alquiler de Vehículos",
        "projects.p1Summary": "Diseñado para el sector de alquiler turístico en Baleares. Cuenta con catálogo interactivo de flota, cálculo dinámico de precios por días de alquiler y confirmación instantánea por WhatsApp.",

        "projects.p2Cat": "Gestión Empresarial",
        "projects.p2Title": "Dashboard para Asesorías y Despachos",
        "projects.p2Summary": "Desarrollado para resolver cuellos de botella en asesorías reales. Integra renombrado masivo de archivos de clientes, cotejo automatizado con hojas de Excel y registro documental.",

        "projects.p3Cat": "Ventas & Clientes",
        "projects.p3Title": "CRM Ligero para Clientes y Oportunidades",
        "projects.p3Summary": "Sistema ágil para autónomos y pequeñas empresas que necesitan llevar el control de presupuestos y estados de contacto sin herramientas complejas ni costes recurrentes.",

        "projects.p4Cat": "Marketing",
        "projects.p4Title": "Constructor de Plantillas de Email",
        "projects.p4Summary": "Herramienta para diseñar boletines y comunicaciones por correo electrónico con previsualización en tiempo real y exportación de código limpio y compatible.",

        "projects.p5Cat": "I+D & Desarrollo Full-Stack",
        "projects.p5Title": "SmartCook: Asistente Culinario con IA",
        "projects.p5Summary": "Proyecto de ingeniería full-stack que combina backend en Python con IA generativa (Gemini API) y teoría de conjuntos para cruzar despensas y recetas. Persistencia estructurada CRUD y simulador experto.",

        "projects.purecookCat": "Aplicación Web PWA",
        "projects.purecookTitle": "PureCook: Gestor de Recetas Ultra-Minimalista",
        "projects.purecookSummary": "Aplicación Web Progresiva (PWA) real en producción con soporte offline. Diseñada con enfoque ultra-minimalista, tipografía suiza y rendimiento inmediato sin tiempos de carga.",

        "projects.luxuryCat": "Hostelería, Inmobiliaria & Gastronomía",
        "projects.luxuryTitle": "Mallorca Hospitality: Restaurante, Hotel & Inmobiliaria",
        "projects.luxurySummary": "Soluciones web de alta gama para el sector premium de Baleares. Demos independientes con motor de reservas directas sin comisiones de intermediarios:",

        "about.label": "Enfoque",
        "about.title": "Perfil técnico híbrido & resolución directa",
        "about.p1": "Soy <strong>Desarrollador Web</strong> en <strong>W34 Marketing</strong> y <strong>Técnico en Sistemas Microinformáticos y Redes</strong> afincado en Palma de Mallorca, cursando el 2º año de DAW en modalidad FP Dual con el Colegio Sant Josep Obrer.",
        "about.p2": "Combino el trabajo diario en agencia maquetando en WordPress, Odoo, Shopify y Framer, supervisando automatizaciones en n8n y atendiendo directamente a clientes, con una sólida base técnica en hardware, redes de oficina, soporte Windows y desarrollo de herramientas a medida (React, Python, Java, SQL).",
        "about.pt1Title": "Trato directo y agencia",
        "about.pt1Desc": "Experiencia en comunicación directa con clientes para maquetar cambios, resolver incidencias y coordinar proyectos sin intermediarios.",
        "about.pt2Title": "Código limpio & CMS",
        "about.pt2Desc": "Dominio de plataformas líderes (WP, Shopify, Odoo, Framer) y desarrollo a medida (React, Node, Laravel) con máxima velocidad y optimización móvil.",
        "about.pt3Title": "Sistemas y automatización",
        "about.pt3Desc": "Visión integral de infraestructura: redes, seguridad de datos, soporte de oficina y flujos automatizados con n8n para eliminar tareas repetitivas.",
        "about.langTitle": "Idiomas",
        "about.langEs": "Español",
        "about.langEsLevel": "Nativo",
        "about.langEn": "Inglés (EOI A2/B1)",
        "about.langEnLevel": "Técnico / Certificado",
        "about.langCa": "Catalán",
        "about.langCaLevel": "Comprensión oral",
        "about.stackTitle": "Plataformas, CMS y Stack Técnico",
        "about.framer": "Maquetación visual interactiva, diseño editorial de alta gama y publicaciones ultra-rápidas para landings y webs modernas.",
        "about.wp": "Maquetación y personalización de temas a medida, webs corporativas auto-gestionables, blogs y tiendas online seguras.",
        "about.shopify": "Creación y maquetación de tiendas online e-commerce orientadas a conversión, checkout fluido y gestión de catálogo.",
        "about.odoo": "Configuración de portal web, comercio electrónico, facturación y CRM integrado en el ecosistema ERP para pymes.",
        "about.n8n": "Conexión de flujos de trabajo, webhooks y APIs. Sincronización automática de formularios web con WhatsApp, Gmail, hojas de cálculo, Notion, CRM, Odoo y Shopify sin costes por tarea.",
        "about.react": "Desarrollo a medida con máxima velocidad de carga (< 1.5s), sin dependencias pesadas y maquetación 100% adaptable.",
        "about.backend": "Desarrollo de lógica de servidor, endpoints y APIs REST seguras con Node.js y Laravel (PHP). Autenticación, sesiones y lógica de negocio.",
        "about.db": "Modelado relacional y NoSQL con PostgreSQL, MySQL/MariaDB (gestión en phpMyAdmin) y restdb.io para bases de datos ágiles en la nube.",
        "about.ecosystemTitle": "Ecosistema, Integraciones & Herramientas Complementarias",

        "contact.label": "Contacto",
        "contact.headline": "Hablemos de tu proyecto",
        "contact.sub": "Cuéntame qué necesitas y te responderé en el mismo día con una valoración sin compromiso.",

        "form.name": "Nombre o empresa *",
        "form.phone": "WhatsApp o teléfono *",
        "form.email": "Email *",
        "form.service": "Servicio requerido",
        "form.details": "Breve descripción del proyecto",
        "form.submit": "Enviar mensaje por WhatsApp",
        "form.opt1": "Landing Page (390 €)",
        "form.opt2": "Web Corporativa (790 €)",
        "form.opt3": "Tienda Online (Shopify) / Odoo / App",
        "form.opt4": "Mantenimiento o Maquetación Web",
        "form.opt5": "Automatizaciones con n8n / Integraciones",

        "calc.badge": "HERRAMIENTA INTERACTIVA",
        "calc.title": "Calcula tu presupuesto estimado al instante",
        "calc.desc": "Transparencia total. Selecciona lo que necesita tu negocio y envíame la solicitud directa a WhatsApp con un solo clic.",
        "calc.step1": "1. Selecciona el tipo de solución",
        "calc.plan1Sub": "1 página enfocada a conversión (Framer, WP o código)",
        "calc.plan2Sub": "Hasta 5 páginas en WordPress, Framer o a medida",
        "calc.plan3Sub": "Shopify e-commerce, portal Odoo ERP o web app",
        "calc.step2": "2. Añade funcionalidades opcionales",
        "calc.addonWa": "Botón flotante directo a WhatsApp",
        "calc.addonWaSub": "Para recibir consultas inmediatas de clientes",
        "calc.free": "Incluido",
        "calc.addonSeo": "SEO Local & Ficha Google Maps",
        "calc.addonSeoSub": "Para aparecer cuando busquen tu negocio en Mallorca",
        "calc.addonCatalog": "Catálogo digital de productos / Carta de restaurante",
        "calc.addonCatalogSub": "Filtrable por categorías y fotos en alta resolución",
        "calc.addonLang": "Versión Bilingüe (Español + Inglés o Alemán)",
        "calc.addonLangSub": "Imprescindible para captar clientes extranjeros en Baleares",
        "calc.addonBooking": "Sistema de Reservas / Citas con confirmación",
        "calc.addonBookingSub": "Con calendario interactivo y aviso directo por WhatsApp",
        "calc.addonN8n": "Automatizaciones de procesos con n8n",
        "calc.addonN8nSub": "Conexión de formularios a WhatsApp, CRM, email y bases de datos",
        "calc.addonMaint": "Mantenimiento mensual, seguridad y copias",
        "calc.addonMaintSub": "Actualizaciones técnicas y soporte prioritario",
        "calc.summaryTitle": "Resumen de presupuesto",
        "calc.delivery": "Plazo de entrega estimado:",
        "calc.totalLabel": "Inversión estimada:",
        "calc.totalNote": "Presupuesto sin compromiso • Sin costes ocultos",
        "calc.btnSend": "Pedir este presupuesto por WhatsApp",
        "footer.dossier": "Descargar Dossier de Servicios (PDF)"
    },
    en: {
        "nav.services": "Services",
        "nav.projects": "Projects",
        "nav.about": "About Me",
        "nav.contact": "Contact",
        "nav.contactMe": "Contact Me",
        "nav.exp": "Experience",
        "nav.edu": "Education",
        "nav.stack": "Tech Stack",
        "nav.portfolioBadge": "Portfolio",
        "nav.servicesBadge": "Web Services",
        "nav.servicesBtn": "Services & Pricing",
        "nav.backPersonal": "About Me / CV",

        "personal.heroTitle": "Joaquín Oses Monti",
        "personal.heroRole": "Web Developer at W34 Marketing (FP Dual) &bull; IT Systems Technician (SMR / DAW)",
        "personal.heroDesc": "Professional web development and layout (WordPress, Shopify, Odoo, Framer, and custom React code), workflow automations monitoring with n8n, and IT systems support. FP Dual mode in Palma de Mallorca and open for remote freelance projects.",
        "personal.heroLocation": "Palma de Mallorca &bull; FP Dual Mode (Sant Josep Obrer)",
        "personal.ctaContact": "Get in touch",
        "personal.ctaServices": "View Commercial Services & Demos →",

        "exp.label": "Career",
        "exp.title": "Work Experience",
        "exp.desc": "Agency web development, document management internal tools, corporate IT systems support, and freelance projects.",
        "exp.w34Date": "March 2026 &bull; Present",
        "exp.w34Role": "Web Developer (FP Dual)",
        "exp.w34Company": "W34 Marketing &bull; Palma de Mallorca (In-person)",
        "exp.w34Desc": "Ongoing layout and maintenance of corporate websites and e-commerce stores across multiple platforms: WordPress/WooCommerce, Odoo ERP & Web, Shopify, Framer, and clean custom code. Monitoring workflow automations with n8n, and direct client communication to resolve support requests and evolve digital platforms.",
        "exp.freelanceDate": "2026 &bull; Present",
        "exp.freelanceRole": "Freelance Web Developer & Automations",
        "exp.freelanceCompany": "Remote &bull; Independent Projects",
        "exp.freelanceDesc": "Custom layout and development of landings and websites for businesses and professionals (React, Node.js, Laravel, restdb.io, PostgreSQL, MariaDB with phpMyAdmin). Implementing automated workflows with n8n (lead capture, form synchronization, WhatsApp, email) to streamline digital processes.",
        "exp.antforDate": "September 2025 &bull; October 2025",
        "exp.antforRole": "Software Developer",
        "exp.antforCompany": "AntFor &bull; Palma de Mallorca",
        "exp.antforDesc": "Software development and maintenance using Java and SQL on proprietary internal company tools. Database queries and technical support throughout the enterprise software lifecycle.",
        "exp.garciaDate": "March 2024 &bull; June 2025",
        "exp.garciaRole": "IT Systems Technician & Internal Tools Developer",
        "exp.garciaCompany": "García Garriga Asesores &bull; Palma de Mallorca",
        "exp.garciaDesc": "IT technical support in Windows environments and A3 business management software. <strong>Designed and developed a central dashboard with React and encapsulated Python applications</strong>: bulk client document renaming, automated Excel cross-checking, and file digitalization, eliminating manual paperwork hours and streamlining quarterly tax reporting.",

        "edu.label": "Education",
        "edu.title": "Academic Qualifications",
        "edu.desc": "Accredited vocational qualifications in Web Application Development (DAW) and Microcomputer Systems & Networks (SMR).",
        "edu.dawDate": "2025 &bull; 2027",
        "edu.dawRole": "Higher Vocational Degree in Web Application Development (DAW)",
        "edu.dawSchool": "Sant Josep Obrer College &bull; In progress (2nd Year, FP Dual)",
        "edu.dawDesc": "Advanced training in frontend engineering (React, modern JavaScript), backend development (PHP/Laravel, Java, Node.js), relational database modeling (SQL/PostgreSQL), web app deployment, and production security.",
        "edu.smrDate": "2023 &bull; 2025",
        "edu.smrRole": "Vocational Degree in Microcomputer Systems & Networks (SMR)",
        "edu.smrSchool": "Sant Josep Obrer College &bull; Graduated (FP Dual)",
        "edu.smrDesc": "Hardware assembly and maintenance, local computer networks (structured cabling, switching, routing, subnets), single-user and network OS (Windows Server, Linux), cybersecurity, and core network services (DNS, DHCP, mail).",
        "edu.esoDate": "Completed",
        "edu.esoRole": "Compulsory Secondary Education (ESO)",
        "edu.esoSchool": "Sant Josep Obrer College &bull; Palma de Mallorca",
        "edu.esoDesc": "Secondary education completed with a strong foundational focus in science and technology.",

        "projects.crmBadge": "★ FEATURED",
        "projects.crmCat": "Sales & Pipeline",
        "projects.crmTech": "JavaScript ES6+ &bull; Modular State &bull; LocalStorage &bull; Kanban Pipeline",
        "projects.crmTitle": "Lightweight CRM for Clients & Opportunities",
        "projects.crmSummary": "Comprehensive client and sales pipeline management system for professionals and freelancers. Engineered with decoupled state architecture, local contact persistence, interactive kanban sales funnel, conversion simulator, and reactive real-time filtering without framework dependencies or subscription fees.",
        "projects.crmLive": "Open live CRM demo",
        "projects.demosHeading": "Live Interactive Demonstrations (Hospitality, Tourism & Management)",
        "projects.codeHeading": "Web Applications, PWA & Open Source",
        "projects.openDemo": "Open live demo",

        "hero.ctaDemos": "View live demos",
        "hero.threeHint": "Drag to rotate &bull; Click: Geometry",
        "demos.label": "Demonstrations",
        "demos.title": "Interactive websites by sector",
        "demos.desc": "Test live solutions designed and optimized for Balearic businesses.",

        "hero.status": "Web Developer at W34 Marketing &bull; Available for Remote Freelance",
        "hero.title": "Professional web layout & custom website development.",
        "hero.description": "I design and build fast, responsive websites: high-converting landing pages, corporate websites, and e-commerce stores. Working with custom code (React), leading platforms (WordPress, Shopify, Framer, Odoo), and workflow automations with n8n.",
        "hero.ctaPrimary": "Request a quote",
        "hero.ctaSecondary": "View projects",
        "hero.stackLabel": "Platforms:",

        "services.label": "Services",
        "services.title": "Clear proposals, fixed prices",
        "services.desc": "No hidden costs. Solutions built to drive commercial results.",
        "services.oneTime": "one-time payment",
        "services.from": "From",
        "services.btnSelect": "Choose this pack",
        "services.btnQuote": "Request estimate",
        "services.recommended": "Recommended",

        "services.s1Tag": "Rapid Web",
        "services.s1Title": "Landing Page",
        "services.s1Desc": "Ideal for a specific product launch, ad campaign, or instant lead capture. Built on Framer, WordPress, or clean custom code.",
        "services.s1F1": "100% mobile-responsive layout",
        "services.s1F2": "Direct click-to-WhatsApp link",
        "services.s1F3": "Ultra-fast load times (< 1.5s)",
        "services.s1F4": "Delivery in 3-5 business days",

        "services.s2Tag": "Enterprise",
        "services.s2Title": "Corporate Website",
        "services.s2Desc": "Complete business presence designed to build maximum credibility on Google. Built with WordPress, Framer, or custom layout.",
        "services.s2F1": "Up to 5 structured pages & layouts",
        "services.s2F2": "Services catalog & price guide",
        "services.s2F3": "Local SEO & Google Maps optimization",
        "services.s2F4": "Contact forms & WhatsApp CTA",
        "services.s2F5": "Domain, hosting, and SSL included",

        "services.s3Tag": "E-Commerce & Automation",
        "services.s3Title": "Online Store, Odoo or n8n",
        "services.s3Desc": "For businesses requiring Shopify/WooCommerce e-commerce, Odoo ERP integration, or workflow automations with n8n.",
        "services.s3F1": "Tailor-made Shopify & WooCommerce stores",
        "services.s3F2": "Odoo ERP web integration & n8n workflows",
        "services.s3F3": "Modular React / JavaScript architecture",
        "services.s3F4": "Private administration & technical warranty",

        "services.maint": "I also offer website modernization and technical monthly maintenance starting at <strong>€49/month</strong>.",

        "projects.label": "Projects",
        "projects.title": "Work and demonstrations",
        "projects.desc": "Tools designed to solve real business and administrative office needs.",
        "projects.liveDemo": "View live demo",
        "projects.liveApp": "Open live app",
        "projects.consultDashboard": "Inquire similar",

        "projects.p1Cat": "Tourism & Mobility",
        "projects.p1Title": "Moto-Rent: Vehicle Rental Web Platform",
        "projects.p1Summary": "Built for the Balearic rental market: interactive vehicle catalog, dynamic price calculation per rental days, and instant WhatsApp booking confirmation.",

        "projects.p2Cat": "Business Management",
        "projects.p2Title": "Advisory & Firm Dashboard",
        "projects.p2Summary": "Engineered to resolve real office bottlenecks: bulk document renaming, automated Excel cross-checking, and document logging.",

        "projects.p3Cat": "Sales & Pipeline",
        "projects.p3Title": "Lightweight CRM for Clients & Leads",
        "projects.p3Summary": "Fast pipeline system for freelancers and small teams to manage quotes and inquiries without monthly software subscription fees.",

        "projects.p4Cat": "Marketing",
        "projects.p4Title": "Email Template Builder",
        "projects.p4Summary": "Drag-and-drop tool to compose responsive email templates with live preview and clean HTML code export.",

        "projects.p5Cat": "R&D & Full-Stack Engineering",
        "projects.p5Title": "SmartCook: AI Kitchen & Culinary System",
        "projects.p5Summary": "Full-stack project pairing a Python backend with generative AI (Gemini API) and set theory algorithms to cross-reference pantries and recipes. Includes persistent CRUD storage and expert simulation.",

        "projects.purecookCat": "Progressive Web App (PWA)",
        "projects.purecookTitle": "PureCook: Ultra-Minimalist Recipe Manager",
        "projects.purecookSummary": "Live production PWA engineered with an offline-first architecture, zero-friction Swiss UI, and instantaneous client-side performance.",

        "projects.luxuryCat": "Hospitality, Real Estate & Gastronomy",
        "projects.luxuryTitle": "Mallorca Hospitality: Restaurant, Hotel & Estates",
        "projects.luxurySummary": "Tailored luxury web solutions for Balearic premium businesses. Standalone interactive demos with direct commission-free booking engines:",

        "about.label": "Approach",
        "about.title": "Hybrid technical profile & direct resolution",
        "about.p1": "I am a <strong>Web Developer</strong> at <strong>W34 Marketing</strong> and <strong>Microcomputer Systems & Network Technician</strong> based in Palma de Mallorca, currently completing the 2nd year of DAW under FP Dual with Colegio Sant Josep Obrer.",
        "about.p2": "I combine day-to-day agency work building with WordPress, Odoo, Shopify, and Framer, supervising n8n automations, and directly assisting clients, with a rigorous technical foundation in hardware, office networks, Windows IT support, and custom software engineering (React, Python, Java, SQL).",
        "about.pt1Title": "Direct communication & agency",
        "about.pt1Desc": "Hands-on experience communicating directly with clients to gather requirements, implement layout changes, and resolve technical requests without middlemen.",
        "about.pt2Title": "Clean code & CMS",
        "about.pt2Desc": "Proficiency in leading platforms (WP, Shopify, Odoo, Framer) and custom engineering (React, Node, Laravel) focused on high performance and mobile UX.",
        "about.pt3Title": "Systems & automation",
        "about.pt3Desc": "Comprehensive infrastructure view: networks, data security, office IT support, and n8n automated workflows to eradicate repetitive tasks.",
        "about.langTitle": "Languages",
        "about.langEs": "Spanish",
        "about.langEsLevel": "Native",
        "about.langEn": "English (EOI A2/B1)",
        "about.langEnLevel": "Technical / Certified",
        "about.langCa": "Catalan",
        "about.langCaLevel": "Listening comprehension",
        "about.stackTitle": "Platforms, CMS & Tech Stack",
        "about.framer": "Interactive visual layout, high-end editorial design, and lightning-fast deployment for modern landing pages.",
        "about.wp": "Theme customization, auto-manageable corporate websites, blogs, and secure WooCommerce online shops.",
        "about.shopify": "High-converting e-commerce stores, smooth checkout experience, and product catalog management.",
        "about.odoo": "Web portal setup, e-commerce, invoicing, and CRM integration within the Odoo ERP ecosystem for businesses.",
        "about.n8n": "Workflow automations, webhooks, and API integrations. Automated synchronization of web forms with WhatsApp, Gmail, spreadsheets, Notion, CRM, Odoo, and Shopify without per-task subscription fees.",
        "about.react": "High-performance custom web development (< 1.5s), zero bloated libraries, and 100% responsive layout.",
        "about.backend": "Backend server logic, endpoints, and secure REST APIs with Node.js and Laravel (PHP). User authentication, sessions, and business logic.",
        "about.db": "Relational and NoSQL database modeling with PostgreSQL, MySQL/MariaDB (phpMyAdmin) and restdb.io for fast cloud data storage.",
        "about.ecosystemTitle": "Ecosystem, Integrations & Complementary Tools",

        "contact.label": "Contact",
        "contact.headline": "Let's discuss your project",
        "contact.sub": "Tell me what you need and I will reply today with an honest assessment.",

        "form.name": "Name or company *",
        "form.phone": "WhatsApp or phone *",
        "form.email": "Email *",
        "form.service": "Service required",
        "form.details": "Brief project description",
        "form.submit": "Send message via WhatsApp",
        "form.opt1": "Landing Page (€390)",
        "form.opt2": "Corporate Website (€790)",
        "form.opt3": "Online Store (Shopify) / Odoo / App",
        "form.opt4": "Website Maintenance & Layout",
        "form.opt5": "n8n Automations / Integrations",

        "calc.badge": "INTERACTIVE TOOL",
        "calc.title": "Calculate your estimated budget instantly",
        "calc.desc": "Complete transparency. Select what your business needs and send me a direct request on WhatsApp in one click.",
        "calc.step1": "1. Select your base solution",
        "calc.plan1Sub": "1 page focused on conversion (Framer, WP or code)",
        "calc.plan2Sub": "Up to 5 pages on WordPress, Framer or custom",
        "calc.plan3Sub": "Shopify e-commerce, Odoo ERP portal or web app",
        "calc.step2": "2. Add optional features",
        "calc.addonWa": "Floating direct WhatsApp button",
        "calc.addonWaSub": "Receive immediate inquiries from visitors",
        "calc.free": "Included",
        "calc.addonSeo": "Local SEO & Google Maps optimization",
        "calc.addonSeoSub": "Show up when potential clients search for you in Mallorca",
        "calc.addonCatalog": "Digital product catalog / Restaurant menu",
        "calc.addonCatalogSub": "Category filtering & high-res image showcase",
        "calc.addonLang": "Bilingual Version (Spanish + English or German)",
        "calc.addonLangSub": "Essential for foreign visitors and expats in the Balearics",
        "calc.addonBooking": "Online Booking / Appointment System",
        "calc.addonBookingSub": "Interactive calendar & instant WhatsApp alert",
        "calc.addonN8n": "Workflow automations with n8n",
        "calc.addonN8nSub": "Connect web forms to WhatsApp, CRM, email & spreadsheets",
        "calc.addonMaint": "Monthly maintenance, security & backups",
        "calc.addonMaintSub": "Technical upkeep, updates & priority support",
        "calc.summaryTitle": "Budget Summary",
        "calc.delivery": "Estimated delivery time:",
        "calc.totalLabel": "Estimated Investment:",
        "calc.totalNote": "No-obligation quotation • Zero hidden fees",
        "calc.btnSend": "Request this quote via WhatsApp",
        "footer.dossier": "Download Services Dossier (PDF)"
    }
};

let currentLanguage = 'es';

function setLanguage(lang) {
    currentLanguage = lang;
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    const langToggleText = document.getElementById('currentLang');
    if (langToggleText) {
        langToggleText.textContent = lang === 'es' ? 'EN' : 'ES';
    }

    document.documentElement.lang = lang;

    const dossierLink = document.getElementById('dossierLink');
    if (dossierLink) {
        const isSubdir = window.location.pathname.includes('/servicios/') || window.location.pathname.includes('/crm/');
        const base = isSubdir ? '../assets/' : './assets/';
        dossierLink.href = lang === 'en'
            ? base + 'Dossier_Services_Joaquin_Oses_2026_EN.pdf'
            : base + 'Dossier_Servicios_Joaquin_Oses_2026.pdf';
    }

    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
}


/**
 * Router de Vistas SPA (Conóceme, Proyectos, Servicios)
 * Permite cambiar entre secciones mutuamente excluyentes sin recargar la página
 */
function switchView(viewName) {
    const validViews = ['conoceme', 'proyectos', 'servicios'];
    if (!validViews.includes(viewName)) {
        viewName = 'conoceme';
    }

    // 1. Mostrar/Ocultar secciones de vista
    validViews.forEach(v => {
        const viewEl = document.getElementById('view-' + v);
        if (viewEl) {
            if (v === viewName) {
                viewEl.style.display = 'block';
                viewEl.classList.add('active');
            } else {
                viewEl.style.display = 'none';
                viewEl.classList.remove('active');
            }
        }
    });

    // 2. Actualizar estado activo en enlaces de navegación
    const navLinks = document.querySelectorAll('.nav-menu .nav-link');
    navLinks.forEach(link => {
        if (link.getAttribute('data-view') === viewName) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // 3. Actualizar hash en la URL sin saltos bruscos
    if (window.location.hash !== '#' + viewName) {
        history.replaceState(null, '', '#' + viewName);
    }

    // 4. Subir scroll arriba suavemente
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // 5. Re-renderizar iconos de Lucide
    if (window.lucide) {
        window.lucide.createIcons();
    }

    // 6. Notificar a la escena Three.js del cambio de vista
    window.dispatchEvent(new CustomEvent('portfolioViewChanged', { detail: { view: viewName } }));
}

document.addEventListener('DOMContentLoaded', () => {
    // 1. Selector de Idioma
    const langBtn = document.getElementById('langToggle');
    if (langBtn) {
        langBtn.addEventListener('click', () => {
            setLanguage(currentLanguage === 'es' ? 'en' : 'es');
        });
    }

    // 2. Año actual
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 3. Menú móvil
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            if (navMenu.style.display === 'flex') {
                navMenu.style.display = '';
            } else {
                navMenu.style.display = 'flex';
                navMenu.style.flexDirection = 'column';
                navMenu.style.position = 'absolute';
                navMenu.style.top = '100%';
                navMenu.style.left = '0';
                navMenu.style.width = '100%';
                navMenu.style.background = '#090A0C';
                navMenu.style.padding = '20px';
                navMenu.style.borderBottom = '1px solid rgba(255,255,255,0.1)';
            }
        });

        navMenu.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 600) {
                    navMenu.style.display = '';
                }
            });
        });
    }

    // 4. Formulario de Contacto a WhatsApp
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('formName').value.trim();
            const contact = document.getElementById('formContact').value.trim();
            const email = document.getElementById('formEmail').value.trim();
            const service = document.getElementById('formService').value;
            const message = document.getElementById('formMessage').value.trim();

            if (!name || !contact || !email) {
                alert(currentLanguage === 'es' 
                    ? 'Por favor, completa los campos requeridos (*)' 
                    : 'Please fill in all required fields (*)');
                return;
            }

            const greeting = currentLanguage === 'es'
                ? `Hola Joaquín, soy *${name}* y me gustaría solicitar presupuesto:`
                : `Hello Joaquín, I am *${name}* and I would like to request a quote:`;
            
            const serviceLabel = currentLanguage === 'es' ? 'Servicio:' : 'Service:';
            const contactLabel = currentLanguage === 'es' ? 'Contacto:' : 'Contact:';
            const detailsLabel = currentLanguage === 'es' ? 'Detalles:' : 'Details:';

            const text = `${greeting}\n\n` +
                `• *${serviceLabel}* ${service}\n` +
                `• *${contactLabel}* ${contact} | ${email}\n` +
                (message ? `• *${detailsLabel}* ${message}` : '');

            window.open(`https://wa.me/34695267445?text=${encodeURIComponent(text)}`, '_blank');

            const submitBtn = document.getElementById('submitBtn');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = currentLanguage === 'es' ? '✓ Abriendo WhatsApp...' : '✓ Opening WhatsApp...';
            submitBtn.style.background = '#27272A';
            submitBtn.style.color = '#FFFFFF';

            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.style.background = '';
                submitBtn.style.color = '';
                contactForm.reset();
            }, 3500);
        });
    }

    // 5. Calculadora Interactiva de Presupuestos
    initBudgetCalculator();

    // Router de Vistas (Conóceme, Proyectos, Servicios)
    const initialHash = (window.location.hash || '').replace('#', '').toLowerCase();
    if (['conoceme', 'proyectos', 'servicios'].includes(initialHash)) {
        switchView(initialHash);
    } else {
        switchView('conoceme');
    }

    // Event listeners para botones y enlaces con [data-view]
    document.querySelectorAll('[data-view]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const targetView = btn.getAttribute('data-view');
            switchView(targetView);
            const navMenu = document.getElementById('navMenu');
            if (navMenu && window.innerWidth <= 600) {
                navMenu.style.display = '';
            }
        });
    });

    window.addEventListener('hashchange', () => {
        const hash = (window.location.hash || '').replace('#', '').toLowerCase();
        if (['conoceme', 'proyectos', 'servicios'].includes(hash)) {
            switchView(hash);
        }
    });


    // 6. Renderizar iconos de Lucide
    if (window.lucide) {
        window.lucide.createIcons();
    }

    // 7. Iniciar Escenario 3D de Fondo (Three.js) y Escultura 3D en el Hero
    initMinimalistBackground();
    initHero3DObject();
});

/**
 * Calculadora Interactiva de Presupuestos
 * Calcula precio, plazos y genera mensaje directo para WhatsApp
 */
function initBudgetCalculator() {
    const calc = document.getElementById('calculadora');
    if (!calc) return;

    const planOptions = calc.querySelectorAll('.plan-option');
    const addonItems = calc.querySelectorAll('.addon-item');
    const breakdownEl = document.getElementById('calcBreakdown');
    const totalNumberEl = document.getElementById('calcTotalNumber');
    const recurrentNumberEl = document.getElementById('calcRecurrentNumber');
    const deliveryTimeEl = document.getElementById('calcDeliveryTime');
    const whatsappBtn = document.getElementById('calcWhatsappBtn');

    function updateCalculation() {
        const activeRadio = calc.querySelector('input[name="planType"]:checked');
        const planParent = activeRadio ? activeRadio.closest('.plan-option') : null;
        const planKey = activeRadio ? activeRadio.value : 'landing';
        const planPrice = planParent ? parseInt(planParent.getAttribute('data-price') || '390', 10) : 390;
        const planTime = planParent 
            ? (currentLanguage === 'es' ? planParent.getAttribute('data-time') : planParent.getAttribute('data-time-en')) 
            : '3 a 5 días laborables';

        let planName = 'Landing Page';
        if (planKey === 'corporate') planName = currentLanguage === 'es' ? 'Web Corporativa' : 'Corporate Website';
        else if (planKey === 'custom') planName = currentLanguage === 'es' ? 'App & Dashboard a Medida' : 'Custom App & Dashboard';
        else planName = currentLanguage === 'es' ? 'Landing Page' : 'Landing Page';

        // Actualizar clase activa en selector de planes
        planOptions.forEach(p => {
            const radio = p.querySelector('input[type="radio"]');
            if (radio && radio.checked) {
                p.classList.add('active');
            } else {
                p.classList.remove('active');
            }
        });

        // Sumar complementos
        let total = planPrice;
        let recurrent = 0;
        const breakdownItems = [
            { name: planName, price: `${planPrice} €`, isBase: true }
        ];

        addonItems.forEach(item => {
            const checkbox = item.querySelector('input[type="checkbox"]');
            if (!checkbox) return;

            if (checkbox.checked) {
                item.classList.add('addon-item-checked');
                const price = parseInt(checkbox.getAttribute('data-price') || '0', 10);
                const isRecurrent = checkbox.getAttribute('data-recurrent') === 'true';
                const name = currentLanguage === 'es' 
                    ? checkbox.getAttribute('data-name-es') 
                    : checkbox.getAttribute('data-name-en');

                if (isRecurrent) {
                    recurrent += price;
                    breakdownItems.push({ name, price: `+${price} €/mes` });
                } else if (price > 0) {
                    total += price;
                    breakdownItems.push({ name, price: `+${price} €` });
                } else {
                    breakdownItems.push({ name, price: currentLanguage === 'es' ? 'Incluido' : 'Included' });
                }
            } else {
                item.classList.remove('addon-item-checked');
            }
        });

        // Actualizar desglose en HTML
        if (breakdownEl) {
            breakdownEl.innerHTML = breakdownItems.map(b => `
                <div class="breakdown-row ${b.isBase ? 'base-row' : ''}">
                    <span>&bull; ${b.name}</span>
                    <span><strong>${b.price}</strong></span>
                </div>
            `).join('');
        }

        // Actualizar tiempos y totales
        if (deliveryTimeEl) deliveryTimeEl.textContent = planTime;
        if (totalNumberEl) totalNumberEl.textContent = total;

        if (recurrentNumberEl) {
            if (recurrent > 0) {
                recurrentNumberEl.style.display = 'inline';
                recurrentNumberEl.textContent = ` + ${recurrent} €/mes`;
            } else {
                recurrentNumberEl.style.display = 'none';
            }
        }

        // Construir enlace directo de WhatsApp
        if (whatsappBtn) {
            const greeting = currentLanguage === 'es'
                ? 'Hola Joaquín, he configurado este presupuesto en tu web:'
                : 'Hello Joaquín, I configured this quote on your website:';

            const summaryList = breakdownItems.map(b => `  • ${b.name}: ${b.price}`).join('\n');
            const totalText = currentLanguage === 'es'
                ? `Inversión total: ${total} €${recurrent > 0 ? ` (+ ${recurrent} €/mes)` : ''}\nPlazo aproximado: ${planTime}`
                : `Total estimated: €${total}${recurrent > 0 ? ` (+ €${recurrent}/mo)` : ''}\nEstimated time: ${planTime}`;

            const closing = currentLanguage === 'es'
                ? '¿Podemos comentar los detalles para empezar?'
                : 'Can we discuss the details to get started?';

            const msg = `${greeting}\n\n${summaryList}\n\n${totalText}\n\n${closing}`;
            whatsappBtn.href = `https://wa.me/34695267445?text=${encodeURIComponent(msg)}`;
        }
    }

    // Listeners de clics
    planOptions.forEach(p => {
        p.addEventListener('click', () => {
            const radio = p.querySelector('input[type="radio"]');
            if (radio) {
                radio.checked = true;
                updateCalculation();
            }
        });
    });

    addonItems.forEach(item => {
        item.addEventListener('click', (e) => {
            const checkbox = item.querySelector('input[type="checkbox"]');
            if (!checkbox || checkbox.disabled) return;
            if (e.target !== checkbox) {
                checkbox.checked = !checkbox.checked;
            }
            updateCalculation();
        });
    });

    window.addEventListener('languageChanged', updateCalculation);
    updateCalculation();
}

/**
 * Escenario 3D de Fondo con Three.js (Monocromático & Editorial con acentos sutiles)
 * Malla topográfica arquitectónica en 3D + campo de partículas espaciales y poliedros flotantes.
 * Reacciona al ratón, al scroll vertical y al cambio entre vistas (Conóceme / Proyectos / Servicios).
 */
function initMinimalistBackground() {
    const canvas = document.getElementById('interactive-canvas');
    if (!canvas) return;

    // Si Three.js no está disponible por cualquier motivo, evitar errores
    if (typeof THREE === 'undefined') return;

    let renderer;
    try {
        renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            alpha: true,
            antialias: true,
            powerPreference: 'high-performance'
        });
    } catch (e) {
        return;
    }

    const isMobile = window.innerWidth <= 768;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x090a0c, 0.038);

    const camera = new THREE.PerspectiveCamera(
        55,
        window.innerWidth / window.innerHeight,
        0.1,
        120
    );
    camera.position.set(0, 1.2, 11);

    // Textura circular suave generada por canvas para partículas limpias
    function createSoftDotTexture() {
        const c = document.createElement('canvas');
        c.width = 64;
        c.height = 64;
        const g = c.getContext('2d');
        const grad = g.createRadialGradient(32, 32, 0, 32, 32, 32);
        grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
        grad.addColorStop(0.35, 'rgba(255, 255, 255, 0.65)');
        grad.addColorStop(1, 'rgba(255, 255, 255, 0)');
        g.fillStyle = grad;
        g.fillRect(0, 0, 64, 64);
        return new THREE.CanvasTexture(c);
    }

    // 1. Malla Topográfica Arquitectónica 3D (Plano inferior/fondo en perspectiva)
    const gridCols = isMobile ? 28 : 46;
    const gridRows = isMobile ? 20 : 30;
    const waveGeo = new THREE.PlaneGeometry(36, 24, gridCols, gridRows);
    const waveMat = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        wireframe: true,
        transparent: true,
        opacity: 0.048
    });
    const waveMesh = new THREE.Mesh(waveGeo, waveMat);
    waveMesh.rotation.x = -Math.PI * 0.41;
    waveMesh.position.set(0, -3.6, -2.5);
    scene.add(waveMesh);

    // Guardar posiciones base de la malla para deformación armónica
    const wavePosAttr = waveGeo.attributes.position;
    const baseWaveXY = new Float32Array(wavePosAttr.count * 2);
    for (let i = 0; i < wavePosAttr.count; i++) {
        baseWaveXY[i * 2] = wavePosAttr.getX(i);
        baseWaveXY[i * 2 + 1] = wavePosAttr.getY(i);
    }

    // 2. Campo de Partículas 3D con Profundidad Espacial
    const particleCount = isMobile ? 240 : 520;
    const positions = new Float32Array(particleCount * 3);
    const basePositions = new Float32Array(particleCount * 3);
    const speeds = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
        const px = (Math.random() - 0.5) * 32;
        const py = (Math.random() - 0.5) * 22;
        const pz = (Math.random() - 0.6) * 22;

        positions[i * 3] = px;
        positions[i * 3 + 1] = py;
        positions[i * 3 + 2] = pz;

        basePositions[i * 3] = px;
        basePositions[i * 3 + 1] = py;
        basePositions[i * 3 + 2] = pz;

        speeds[i] = 0.25 + Math.random() * 0.65;
    }

    const particlesGeo = new THREE.BufferGeometry();
    particlesGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const particlesMat = new THREE.PointsMaterial({
        color: 0xf4f4f5,
        size: isMobile ? 0.16 : 0.14,
        map: createSoftDotTexture(),
        transparent: true,
        opacity: 0.58,
        depthWrite: false,
        blending: THREE.AdditiveBlending
    });

    const particleSystem = new THREE.Points(particlesGeo, particlesMat);
    scene.add(particleSystem);

    // 3. Poliedros Wireframe Flotantes en el Espacio Profundo
    const floatingGroup = new THREE.Group();
    scene.add(floatingGroup);
    const floatingShapes = [];
    const shapeCount = isMobile ? 3 : 6;

    for (let i = 0; i < shapeCount; i++) {
        const radius = 0.45 + Math.random() * 0.55;
        const baseGeo = i % 2 === 0
            ? new THREE.OctahedronGeometry(radius, 0)
            : new THREE.IcosahedronGeometry(radius, 0);
        const edgesGeo = new THREE.EdgesGeometry(baseGeo);
        const lineMat = new THREE.LineBasicMaterial({
            color: 0xffffff,
            transparent: true,
            opacity: 0.09
        });
        const wireObj = new THREE.LineSegments(edgesGeo, lineMat);

        wireObj.position.set(
            (Math.random() - 0.5) * 24,
            (Math.random() - 0.5) * 14,
            -2 - Math.random() * 10
        );

        floatingGroup.add(wireObj);
        floatingShapes.push({
            mesh: wireObj,
            rotSpeedX: (Math.random() - 0.5) * 0.004,
            rotSpeedY: (Math.random() - 0.5) * 0.005,
            floatOffset: Math.random() * Math.PI * 2,
            baseY: wireObj.position.y
        });
    }

    // Estado de interacción (Cursor, Scroll y Vista activa)
    const pointer = { x: 0, y: 0, targetX: 0, targetY: 0 };
    let scrollY = window.scrollY || 0;

    // Parámetros dinámicos según la vista SPA (Conóceme, Proyectos, Servicios)
    const viewConfigs = {
        conoceme: {
            camZ: 11.0,
            camY: 1.2,
            camRotZ: 0.0,
            waveAmp: 0.42,
            waveOpacity: 0.048,
            color: new THREE.Color(0xffffff)
        },
        proyectos: {
            camZ: 9.3,
            camY: 1.75,
            camRotZ: -0.045,
            waveAmp: 0.65,
            waveOpacity: 0.068,
            color: new THREE.Color(0xdbeafe) // Acento plata-hielo sutil
        },
        servicios: {
            camZ: 10.1,
            camY: 0.65,
            camRotZ: 0.04,
            waveAmp: 0.52,
            waveOpacity: 0.056,
            color: new THREE.Color(0xe4e4e7) // Acento platino editorial
        }
    };

    let currentViewTarget = viewConfigs.conoceme;
    let activeWaveAmp = currentViewTarget.waveAmp;
    let impulseSpin = 0;

    window.addEventListener('portfolioViewChanged', (e) => {
        const view = (e.detail && e.detail.view) || 'conoceme';
        currentViewTarget = viewConfigs[view] || viewConfigs.conoceme;
        impulseSpin = 0.045; // Impulso cinético suave al cambiar de sección
    });

    window.addEventListener('mousemove', (e) => {
        pointer.targetX = (e.clientX / window.innerWidth) * 2 - 1;
        pointer.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    }, { passive: true });

    window.addEventListener('touchmove', (e) => {
        if (e.touches.length > 0) {
            pointer.targetX = (e.touches[0].clientX / window.innerWidth) * 2 - 1;
            pointer.targetY = -(e.touches[0].clientY / window.innerHeight) * 2 + 1;
        }
    }, { passive: true });

    window.addEventListener('scroll', () => {
        scrollY = window.scrollY || 0;
    }, { passive: true });

    window.addEventListener('resize', () => {
        const w = window.innerWidth;
        const h = window.innerHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
    });

    const clock = new THREE.Clock();

    function animate() {
        requestAnimationFrame(animate);

        const elapsed = clock.getElapsedTime();

        // Suavizado de cursor (lerp)
        pointer.x += (pointer.targetX - pointer.x) * 0.06;
        pointer.y += (pointer.targetY - pointer.y) * 0.06;

        // Disipar impulso de cambio de vista
        impulseSpin *= 0.94;

        // Transición suave de parámetros de vista
        activeWaveAmp += (currentViewTarget.waveAmp - activeWaveAmp) * 0.04;
        waveMat.opacity += (currentViewTarget.waveOpacity - waveMat.opacity) * 0.04;
        waveMat.color.lerp(currentViewTarget.color, 0.04);
        particlesMat.color.lerp(currentViewTarget.color, 0.04);

        // Desplazamiento por scroll y paralaje de cámara
        const scrollFactor = Math.min(scrollY * 0.0018, 3.5);
        const targetCamX = pointer.x * 1.15;
        const targetCamY = currentViewTarget.camY + pointer.y * 0.65 - scrollFactor * 0.45;
        const targetCamZ = currentViewTarget.camZ - scrollFactor * 0.55;

        camera.position.x += (targetCamX - camera.position.x) * 0.05;
        camera.position.y += (targetCamY - camera.position.y) * 0.05;
        camera.position.z += (targetCamZ - camera.position.z) * 0.05;
        camera.rotation.z += (currentViewTarget.camRotZ - pointer.x * 0.025 - camera.rotation.z) * 0.05;

        // Actualizar ondas topográficas 3D con respuesta al cursor
        const cursorWorldX = pointer.x * 11;
        const cursorWorldY = pointer.y * 6;

        for (let i = 0; i < wavePosAttr.count; i++) {
            const bx = baseWaveXY[i * 2];
            const by = baseWaveXY[i * 2 + 1];

            const dx = bx - cursorWorldX;
            const dy = by - cursorWorldY;
            const distSq = dx * dx + dy * dy;
            const cursorRipple = Math.exp(-distSq * 0.08) * 0.85 * Math.cos(Math.sqrt(distSq) * 1.4 - elapsed * 2.5);

            const waveZ =
                Math.sin(bx * 0.28 + elapsed * 0.55) * activeWaveAmp +
                Math.cos(by * 0.32 + elapsed * 0.45) * (activeWaveAmp * 0.7) +
                cursorRipple;

            wavePosAttr.setZ(i, waveZ);
        }
        wavePosAttr.needsUpdate = true;

        // Actualizar campo de partículas 3D
        const posAttr = particlesGeo.attributes.position;
        for (let i = 0; i < particleCount; i++) {
            const ix = i * 3;
            const iy = ix + 1;
            const iz = ix + 2;

            const sp = speeds[i];
            let px = basePositions[ix] + Math.sin(elapsed * 0.35 * sp + i) * 0.45;
            let py = basePositions[iy] + Math.cos(elapsed * 0.28 * sp + i * 0.5) * 0.45 + scrollFactor * 0.6;
            let pz = basePositions[iz] + Math.sin(elapsed * 0.22 * sp + i * 0.3) * 0.35;

            // Repulsión sutil en torno al rayo del cursor
            const dx = px - pointer.x * 9;
            const dy = py - pointer.y * 6;
            const dSq = dx * dx + dy * dy;
            if (dSq < 12) {
                const f = (1 - dSq / 12) * 0.55;
                px += dx * f * 0.25;
                py += dy * f * 0.25;
            }

            posAttr.setXYZ(i, px, py, pz);
        }
        posAttr.needsUpdate = true;
        particleSystem.rotation.y = elapsed * 0.018 + pointer.x * 0.08;

        // Rotar poliedros wireframe flotantes
        for (let i = 0; i < floatingShapes.length; i++) {
            const item = floatingShapes[i];
            item.mesh.rotation.x += item.rotSpeedX + impulseSpin;
            item.mesh.rotation.y += item.rotSpeedY + impulseSpin;
            item.mesh.position.y = item.baseY + Math.sin(elapsed * 0.6 + item.floatOffset) * 0.35;
        }

        renderer.render(scene, camera);
    }

    animate();
}

/**
 * Escultura 3D Interactiva en el Hero (Three.js)
 * Núcleo cristalino facetado en grafito/obsidiana con jaula wireframe de plata,
 * núcleo lumínico interior y anillos giroscópicos orbitales.
 * Permite arrastrar para rotar con inercia y cambiar entre 3 geometrías al hacer clic.
 */
function initHero3DObject() {
    const canvas = document.getElementById('hero-3d-canvas');
    const stage = document.getElementById('hero3dStage');
    const shapeBtn = document.getElementById('hero3dShapeBtn');
    const shapeLabel = document.getElementById('hero3dShapeLabel');

    if (!canvas || !stage || typeof THREE === 'undefined') return;

    let renderer;
    try {
        renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            alpha: true,
            antialias: true,
            powerPreference: 'high-performance'
        });
    } catch (e) {
        return;
    }

    const width = stage.clientWidth || 400;
    const height = stage.clientHeight || 400;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(width, height);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(0, 0, 6.2);

    // Iluminación de estudio monocromática (destellos especulares limpios)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.65);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.9);
    keyLight.position.set(4, 5, 5);
    scene.add(keyLight);

    const rimLight = new THREE.PointLight(0xa1a1aa, 2.1, 16);
    rimLight.position.set(-4, -3, -3);
    scene.add(rimLight);

    const cursorLight = new THREE.PointLight(0xffffff, 2.4, 12);
    cursorLight.position.set(0, 0, 4);
    scene.add(cursorLight);

    // Grupo maestro de la escultura
    const sculptureGroup = new THREE.Group();
    scene.add(sculptureGroup);

    // Subgrupo del núcleo central intercambiable
    const coreGroup = new THREE.Group();
    sculptureGroup.add(coreGroup);

    // Materiales editoriales
    const darkFacetedMat = new THREE.MeshStandardMaterial({
        color: 0x15161a,
        metalness: 0.82,
        roughness: 0.22,
        flatShading: true
    });

    const wireCageMat = new THREE.LineBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.52
    });

    const innerCoreMat = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        wireframe: true,
        transparent: true,
        opacity: 0.32
    });

    // 3 Modos Geométricos para el Núcleo
    const shapeModes = [
        {
            label: '01 / CORE',
            createGeo: () => new THREE.IcosahedronGeometry(1.18, 1)
        },
        {
            label: '02 / KNOT',
            createGeo: () => new THREE.TorusKnotGeometry(0.76, 0.22, 88, 14)
        },
        {
            label: '03 / MATRIX',
            createGeo: () => new THREE.OctahedronGeometry(1.22, 2)
        }
    ];

    let currentModeIndex = 0;
    let coreMesh = null;
    let wireCage = null;
    let targetCoreScale = 1;
    let currentCoreScale = 1;

    function buildCoreGeometry(modeIndex) {
        if (coreMesh) {
            coreGroup.remove(coreMesh);
            coreMesh.geometry.dispose();
        }
        if (wireCage) {
            coreGroup.remove(wireCage);
            wireCage.geometry.dispose();
        }

        const geo = shapeModes[modeIndex].createGeo();
        coreMesh = new THREE.Mesh(geo, darkFacetedMat);
        coreGroup.add(coreMesh);

        const edges = new THREE.EdgesGeometry(geo);
        wireCage = new THREE.LineSegments(edges, wireCageMat);
        wireCage.scale.setScalar(1.02);
        coreGroup.add(wireCage);

        if (shapeLabel) {
            shapeLabel.textContent = shapeModes[modeIndex].label;
        }
    }

    buildCoreGeometry(0);

    // Núcleo interior energético en contra-rotación
    const innerCoreGeo = new THREE.OctahedronGeometry(0.52, 0);
    const innerCore = new THREE.Mesh(innerCoreGeo, innerCoreMat);
    coreGroup.add(innerCore);

    // Anillos Giroscópicos Concéntricos
    const ringsGroup = new THREE.Group();
    sculptureGroup.add(ringsGroup);

    // Anillo 1: Aro interior continuo
    const ring1Geo = new THREE.TorusGeometry(1.78, 0.008, 16, 100);
    const ring1Mat = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.28
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI * 0.32;
    ring1.rotation.y = Math.PI * 0.12;
    ringsGroup.add(ring1);

    // Anillo 2: Corona orbital de puntos de precisión
    const ring2Count = 72;
    const ring2Positions = new Float32Array(ring2Count * 3);
    const ring2Radius = 2.05;
    for (let i = 0; i < ring2Count; i++) {
        const angle = (i / ring2Count) * Math.PI * 2;
        ring2Positions[i * 3] = Math.cos(angle) * ring2Radius;
        ring2Positions[i * 3 + 1] = Math.sin(angle) * ring2Radius;
        ring2Positions[i * 3 + 2] = 0;
    }
    const ring2Geo = new THREE.BufferGeometry();
    ring2Geo.setAttribute('position', new THREE.BufferAttribute(ring2Positions, 3));
    const ring2Mat = new THREE.PointsMaterial({
        color: 0xd4d4d8,
        size: 0.04,
        transparent: true,
        opacity: 0.65
    });
    const ring2 = new THREE.Points(ring2Geo, ring2Mat);
    ring2.rotation.x = -Math.PI * 0.28;
    ring2.rotation.y = -Math.PI * 0.22;
    ringsGroup.add(ring2);

    // Anillo 3: Aro exterior con nodos satélites
    const ring3 = new THREE.Group();
    const ring3TorusGeo = new THREE.TorusGeometry(2.28, 0.005, 12, 100);
    const ring3TorusMat = new THREE.MeshBasicMaterial({
        color: 0xa1a1aa,
        transparent: true,
        opacity: 0.16
    });
    ring3.add(new THREE.Mesh(ring3TorusGeo, ring3TorusMat));

    const satGeo = new THREE.OctahedronGeometry(0.055, 0);
    const satMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    for (let i = 0; i < 4; i++) {
        const sat = new THREE.Mesh(satGeo, satMat);
        const a = (i / 4) * Math.PI * 2;
        sat.position.set(Math.cos(a) * 2.28, Math.sin(a) * 2.28, 0);
        ring3.add(sat);
    }
    ring3.rotation.x = Math.PI * 0.44;
    ringsGroup.add(ring3);

    // Función para cambiar de geometría con rebote elástico
    function cycleShapeMode() {
        currentModeIndex = (currentModeIndex + 1) % shapeModes.length;
        currentCoreScale = 0.72;
        targetCoreScale = 1.0;
        rotVelocity.y += 0.06;
        buildCoreGeometry(currentModeIndex);
    }

    if (shapeBtn) {
        shapeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            cycleShapeMode();
        });
    }

    // Interacción: Arrastrar para rotar con inercia + Hover + Click
    let isDragging = false;
    let dragDistance = 0;
    let prevPointer = { x: 0, y: 0 };
    let rotVelocity = { x: 0.003, y: 0.006 };
    let localHover = { x: 0, y: 0 };
    let isHovered = false;

    canvas.addEventListener('pointerdown', (e) => {
        isDragging = true;
        dragDistance = 0;
        prevPointer.x = e.clientX;
        prevPointer.y = e.clientY;
        canvas.setPointerCapture(e.pointerId);
    });

    canvas.addEventListener('pointermove', (e) => {
        const rect = stage.getBoundingClientRect();
        localHover.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        localHover.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
        isHovered = true;

        if (!isDragging) return;

        const dx = e.clientX - prevPointer.x;
        const dy = e.clientY - prevPointer.y;
        dragDistance += Math.abs(dx) + Math.abs(dy);

        sculptureGroup.rotation.y += dx * 0.011;
        sculptureGroup.rotation.x += dy * 0.011;

        rotVelocity.y = dx * 0.008;
        rotVelocity.x = dy * 0.008;

        prevPointer.x = e.clientX;
        prevPointer.y = e.clientY;
    });

    canvas.addEventListener('pointerup', (e) => {
        if (isDragging && dragDistance < 6) {
            cycleShapeMode();
        }
        isDragging = false;
        try {
            canvas.releasePointerCapture(e.pointerId);
        } catch (_) {}
    });

    canvas.addEventListener('pointerleave', () => {
        isHovered = false;
    });

    // Redimensionado reactivo del contenedor Hero
    function handleStageResize() {
        const w = stage.clientWidth;
        const h = stage.clientHeight;
        if (w > 0 && h > 0) {
            camera.aspect = w / h;
            camera.updateProjectionMatrix();
            renderer.setSize(w, h);
        }
    }

    window.addEventListener('resize', handleStageResize);
    if (typeof ResizeObserver !== 'undefined') {
        const ro = new ResizeObserver(handleStageResize);
        ro.observe(stage);
    }

    const clock = new THREE.Clock();

    function animateHero() {
        requestAnimationFrame(animateHero);

        const t = clock.getElapsedTime();

        // Levitación suave
        sculptureGroup.position.y = Math.sin(t * 1.4) * 0.08;

        if (!isDragging) {
            // Inercia rotacional amortiguada hacia velocidad base
            rotVelocity.x += (0.002 - rotVelocity.x) * 0.04;
            rotVelocity.y += (0.0055 - rotVelocity.y) * 0.04;

            sculptureGroup.rotation.x += rotVelocity.x;
            sculptureGroup.rotation.y += rotVelocity.y;

            if (isHovered) {
                sculptureGroup.rotation.y += localHover.x * 0.008;
                sculptureGroup.rotation.x += -localHover.y * 0.008;
            }
        }

        // Luz puntual siguiendo el cursor sobre las facetas del cristal
        cursorLight.position.x += (localHover.x * 3.5 - cursorLight.position.x) * 0.1;
        cursorLight.position.y += (localHover.y * 3.5 - cursorLight.position.y) * 0.1;

        // Escala elástica al cambiar de modo
        currentCoreScale += (targetCoreScale - currentCoreScale) * 0.12;
        coreGroup.scale.setScalar(currentCoreScale);

        // Brillo dinámico del wireframe al hacer hover
        const targetWireOpacity = isHovered ? 0.78 : 0.48;
        wireCageMat.opacity += (targetWireOpacity - wireCageMat.opacity) * 0.08;

        // Contra-rotación del núcleo interior y los anillos giroscópicos
        innerCore.rotation.x = -t * 0.7;
        innerCore.rotation.y = -t * 0.9;

        ring1.rotation.z = t * 0.35;
        ring2.rotation.z = -t * 0.24;
        ring3.rotation.z = t * 0.18;
        ring3.rotation.y = Math.sin(t * 0.4) * 0.35;

        renderer.render(scene, camera);
    }

    animateHero();
}
