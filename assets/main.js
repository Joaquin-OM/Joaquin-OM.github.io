/**
 * PORTFOLIO MINIMALISTA — JOAQUÍN OSES MONTI
 * Interactividad, traducciones (ES/EN), fondo interactivo en escala de grises y WhatsApp
 */

// Diccionario de Traducciones
const translations = {
    es: {
        "nav.services": "Servicios",
        "nav.projects": "Proyectos",
        "nav.about": "Sobre mí",
        "nav.contact": "Contacto",

        "hero.status": "Disponible para proyectos • Palma de Mallorca & Remoto",
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
        "about.title": "Perfil técnico híbrido",
        "about.p1": "Soy <strong>Desarrollador Web</strong> y <strong>Técnico en Sistemas Microinformáticos y Redes</strong> afincado en Palma de Mallorca.",
        "about.p2": "A diferencia de quienes se limitan a montar plantillas prediseñadas, entiendo la estructura completa de un negocio: cómo se conectan los sistemas de oficina, la seguridad de los datos y cómo construir interfaces modernas con React y JavaScript que carguen al instante.",
        "about.pt1Title": "Trato directo",
        "about.pt1Desc": "Hablas directamente conmigo de principio a fin, sin comerciales ni demoras.",
        "about.pt2Title": "Código limpio",
        "about.pt2Desc": "Sin librerías pesadas. Máxima velocidad de carga y adaptación a móviles.",
        "about.pt3Title": "Cercanía local",
        "about.pt3Desc": "Reuniones presenciales en Mallorca o videollamada para el resto de España.",
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
        "nav.about": "About",
        "nav.contact": "Contact",

        "hero.status": "Available for projects • Palma de Mallorca & Remote",
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
        "about.title": "Hybrid technical profile",
        "about.p1": "I am a <strong>Web Developer</strong> and <strong>Microcomputer & Systems Technician</strong> based in Palma de Mallorca.",
        "about.p2": "Rather than relying on bloated templates, I understand the whole infrastructure: how office networks connect, data security, and how to build modern, instant-loading interfaces with React and JavaScript.",
        "about.pt1Title": "Direct communication",
        "about.pt1Desc": "You deal directly with me from start to finish. No salesmen or delays.",
        "about.pt2Title": "Clean code",
        "about.pt2Desc": "Zero bloat. Optimized for fast loading speed and mobile performance.",
        "about.pt3Title": "Local presence",
        "about.pt3Desc": "In-person meetings in Mallorca or video calls across Spain and Europe.",
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
        dossierLink.href = lang === 'en'
            ? './assets/Dossier_Services_Joaquin_Oses_2026_EN.pdf'
            : './assets/Dossier_Servicios_Joaquin_Oses_2026.pdf';
    }

    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
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

    // 6. Renderizar iconos de Lucide
    if (window.lucide) {
        window.lucide.createIcons();
    }

    // 7. Iniciar Fondo Interactivo Monocromático
    initMinimalistBackground();
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
 * Fondo Interactivo Monocromático (Escala de Grises y Blancos)
 * Malla sutil y elegante de partículas que reacciona limpiamente al paso del cursor
 */
function initMinimalistBackground() {
    const canvas = document.getElementById('interactive-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    let particles = [];
    const isMobile = window.innerWidth <= 768;
    const particleCount = isMobile ? 35 : 70;
    const maxDistance = isMobile ? 95 : 135;
    const mouseRadius = isMobile ? 110 : 160;

    let mouse = {
        x: width / 2,
        y: height / 3,
        targetX: width / 2,
        targetY: height / 3,
        active: true
    };

    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 0.45;
            this.vy = (Math.random() - 0.5) * 0.45;
            this.radius = Math.random() * 1.2 + 1.2;
            this.baseAlpha = Math.random() * 0.2 + 0.25;
            this.alpha = this.baseAlpha;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            if (this.x < 0) this.x = width;
            else if (this.x > width) this.x = 0;
            if (this.y < 0) this.y = height;
            else if (this.y > height) this.y = 0;

            if (mouse.active && mouse.x !== null) {
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < mouseRadius) {
                    const force = (mouseRadius - dist) / mouseRadius;
                    const angle = Math.atan2(dy, dx);
                    this.x -= Math.cos(angle) * force * 1.8;
                    this.y -= Math.sin(angle) * force * 1.8;
                    this.alpha = Math.min(0.9, this.baseAlpha + force * 0.5);
                } else {
                    this.alpha = this.baseAlpha;
                }
            }
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
            ctx.fill();
        }
    }

    function createParticles() {
        particles = [];
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }

    createParticles();

    window.addEventListener('mousemove', (e) => {
        mouse.targetX = e.clientX;
        mouse.targetY = e.clientY;
        mouse.active = true;
    });

    window.addEventListener('touchmove', (e) => {
        if (e.touches.length > 0) {
            mouse.targetX = e.touches[0].clientX;
            mouse.targetY = e.touches[0].clientY;
            mouse.active = true;
        }
    }, { passive: true });

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        createParticles();
    });

    function animate() {
        ctx.clearRect(0, 0, width, height);

        // Halo suave sutil en el cursor (blanco muy tenue)
        if (mouse.active) {
            mouse.x += (mouse.targetX - mouse.x) * 0.1;
            mouse.y += (mouse.targetY - mouse.y) * 0.1;

            const halo = ctx.createRadialGradient(
                mouse.x, mouse.y, 0,
                mouse.x, mouse.y, mouseRadius
            );
            halo.addColorStop(0, 'rgba(255, 255, 255, 0.05)');
            halo.addColorStop(0.5, 'rgba(255, 255, 255, 0.015)');
            halo.addColorStop(1, 'rgba(255, 255, 255, 0)');
            ctx.fillStyle = halo;
            ctx.beginPath();
            ctx.arc(mouse.x, mouse.y, mouseRadius, 0, Math.PI * 2);
            ctx.fill();
        }

        // Líneas sutiles entre partículas
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < maxDistance) {
                    const lineAlpha = (1 - dist / maxDistance) * 0.12;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(255, 255, 255, ${lineAlpha})`;
                    ctx.lineWidth = 0.75;
                    ctx.stroke();
                }
            }
        }

        // Conexión suave del cursor con partículas cercanas
        if (mouse.active && mouse.x !== null) {
            for (let i = 0; i < particles.length; i++) {
                const dx = mouse.x - particles[i].x;
                const dy = mouse.y - particles[i].y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < mouseRadius) {
                    const mouseLineAlpha = (1 - dist / mouseRadius) * 0.28;
                    ctx.beginPath();
                    ctx.moveTo(mouse.x, mouse.y);
                    ctx.lineTo(particles[i].x, particles[i].y);
                    ctx.strokeStyle = `rgba(255, 255, 255, ${mouseLineAlpha})`;
                    ctx.lineWidth = 0.9;
                    ctx.stroke();

                    // Partícula resaltada
                    ctx.beginPath();
                    ctx.arc(particles[i].x, particles[i].y, particles[i].radius * 1.3, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(255, 255, 255, 0.85)`;
                    ctx.fill();
                }
            }
        }

        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();
        }

        requestAnimationFrame(animate);
    }

    animate();
}
