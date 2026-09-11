/**
 * PORTFOLIO FREELANCE - JOAQUÍN OSES MONTI
 * Interactividad, i18n (ES/EN) y Generador de Solicitudes WhatsApp
 */

// Diccionario de Traducciones
const translations = {
    es: {
        "topbar.status": "Disponible para nuevos proyectos en Palma de Mallorca & Remoto",
        "topbar.action": "Presupuesto en 24h por WhatsApp →",
        "nav.services": "Servicios",
        "nav.projects": "Proyectos",
        "nav.whyMe": "Por qué elegirme",
        "nav.contact": "Contacto",
        "hero.badge": "Desarrollo Web & Digitalización de Negocios",
        "hero.title": "Creo webs modernas y soluciones digitales que hacen <span class='gradient-text'>crecer tu negocio</span>.",
        "hero.description": "Ayudo a empresas locales, autónomos y pymes a destacar online con páginas web ultra rápidas, adaptadas a móviles y herramientas a medida que automatizan tus tareas diarias.",
        "hero.ctaPrimary": "Pedir Presupuesto Sin Compromiso",
        "hero.ctaSecondary": "Ver Proyectos Reales",
        "hero.trust1": "Entrega rápida (3 a 10 días)",
        "hero.trust2": "Sin intermediarios ni costes ocultos",
        "hero.trust3": "Soporte directo en Mallorca",
        "hero.cardTag": "Especialista en Soluciones Prácticas",
        "hero.cardTitle": "¿Qué problema quieres resolver hoy?",
        "hero.feat1Title": "Landing Page de Alta Conversión",
        "hero.feat1Desc": "Perfecta para captar reservas y clientes desde Google o redes.",
        "hero.feat2Title": "Web Corporativa Completa",
        "hero.feat2Desc": "Tu negocio 100% visible, creíble y posicionado en tu zona.",
        "hero.feat3Title": "Aplicaciones y Automatización",
        "hero.feat3Desc": "Dashboards, gestión de reservas o conexión con Excel.",
        "hero.callDirect": "¿Hablamos directamente?",
        
        "services.tag": "Servicios & Paquetes",
        "services.title": "Precios Claros, Entregas Rápidas, Cero Sorpresas",
        "services.subtitle": "Soluciones diseñadas específicamente para pymes, comercios locales y profesionales independientes que necesitan resultados tangibles.",
        "services.oneTime": "pago único",
        "services.fromPrice": "Desde",
        "services.btnChoose": "Elegir Este Pack",
        "services.btnQuote": "Solicitar Valoración",
        "services.bestValue": "Opción Recomendada",
        
        "services.p1Type": "Más Popular para Empezar",
        "services.p1Title": "Pack Landing Page",
        "services.p1Desc": "Ideal para promocionar un producto, servicio específico o campaña de anuncios en Mallorca.",
        "services.p1F1": "Diseño moderno 100% adaptado a móviles",
        "services.p1F2": "Botón de contacto directo a WhatsApp",
        "services.p1F3": "Carga ultra rápida (< 1.5s)",
        "services.p1F4": "Estructura persuasiva enfocada en ventas",
        "services.p1F5": "Entrega garantizada en 3-5 días hábiles",

        "services.p2Type": "Negocio Completo",
        "services.p2Title": "Pack Web Corporativa",
        "services.p2Desc": "La web definitiva para que tu negocio transmita máxima confianza y domine tu sector local.",
        "services.p2F1": "Hasta 5 secciones/páginas a medida",
        "services.p2F2": "Catálogo de servicios, tarifas o menús",
        "services.p2F3": "SEO local básico para salir en Google Maps",
        "services.p2F4": "Formularios de presupuesto y reserva",
        "services.p2F5": "Dominio, hosting y SSL configurados",
        "services.p2F6": "1 mes de soporte técnico incluido",

        "services.p3Type": "Digitalización a Medida",
        "services.p3Title": "Pack App & Dashboard",
        "services.p3Desc": "Para empresas que necesitan sistemas de reservas, áreas de clientes o automatizar procesos internos.",
        "services.p3F1": "Desarrollo modular en React y JavaScript",
        "services.p3F2": "Sistema de reservas o gestión de pedidos",
        "services.p3F3": "Automatización de tareas con Excel / bases de datos",
        "services.p3F4": "Panel de administración privado para empleados",
        "services.p3F5": "Formación de uso y garantía técnica de 3 meses",

        "services.maintTitle": "¿Ya tienes web pero está desactualizada o no te da resultados?",
        "services.maintDesc": "Ofrezco planes de modernización, optimización de velocidad y mantenimiento mensual desde <strong>49 €/mes</strong> para que nunca te preocupes por caídas ni seguridad.",
        "services.maintBtn": "Consultar Mantenimiento",

        "projects.tag": "Casos Reales & Demos",
        "projects.title": "Soluciones que Resuelven Problemas Reales",
        "projects.subtitle": "No solo creo código bonito; diseño herramientas que ahorran tiempo y generan dinero a las empresas.",
        "projects.liveDemo": "Ver Demo en Vivo 🚀",
        "projects.wantSimilar": "Quiero algo similar",
        "projects.requestAutomation": "Automatizar mi oficina",
        "projects.p1Title": "Moto-Rent: Plataforma de Alquiler de Vehículos",
        "projects.p1Desc": "Diseñado pensando en el sector turístico de Baleares: interfaz para selección de flotas de motos/scooters, cálculo dinámico de tarifas según días de alquiler y confirmación instantánea por WhatsApp.",
        "projects.p2Title": "Dashboard Centralizado para Asesorías y Empresas",
        "projects.p2Desc": "Desarrollado con base en la experiencia real en Garcia Garriga Asesores. Centraliza 4 herramientas críticas: renombrado masivo de archivos de clientes, comparación automatizada con Excel y registro de entrada/salida documental.",
        "projects.p3Title": "CRM Ligero para Clientes y Oportunidades",
        "projects.p3Desc": "Sistema ágil para que autónomos y pequeños equipos lleven el control de sus clientes, cotizaciones y estados de contacto sin la complejidad ni el coste mensual de herramientas pesadas como HubSpot o Salesforce.",
        "projects.p4Title": "Constructor Visual de Plantillas de Email",
        "projects.p4Desc": "Herramienta intuitiva para estructurar emails comerciales responsive con vista previa en tiempo real y generación de código compatible con todos los clientes de correo habituales.",

        "advantages.tag": "La Diferencia",
        "advantages.title": "El Valor de un Perfil Técnico Híbrido",
        "advantages.subtitle": "Muchos solo saben maquetar páginas con plantillas de WordPress. Mi formación técnica como <strong>Técnico Microinformático</strong> y desarrollador te aporta soluciones completas de verdad.",
        "advantages.a1Title": "Entendimiento de Sistemas Reales",
        "advantages.a1Desc": "No solo creo la web: sé cómo se conectan tus ordenadores, servidores, correos corporativos y redes de oficina. Resuelvo problemas técnicos de raíz.",
        "advantages.a2Title": "Código Limpio y Ultra Rápido",
        "advantages.a2Desc": "Utilizo HTML5, CSS moderno y React modular. Tu web cargará en un parpadeo, mejorando tu posición en Google y la tasa de conversión.",
        "advantages.a3Title": "Trato Directo Sin Intermediarios",
        "advantages.a3Desc": "Hablas siempre conmigo. Sin comerciales que te vendan humo ni gestores de cuenta que retrasen los cambios. Máxima agilidad y comunicación transparente.",
        "advantages.a4Title": "Presencia Local en Mallorca",
        "advantages.a4Desc": "Si tu negocio está en Mallorca, podemos reunirnos en persona, entender tu operativa in situ y adaptar la solución a tu mercado local.",

        "process.tag": "Paso a Paso",
        "process.title": "¿Cómo trabajaremos juntos?",
        "process.subtitle": "Un método claro para que sepas en todo momento qué estamos haciendo.",
        "process.s1Title": "Llamada de 15 minutos",
        "process.s1Desc": "Analizamos tus objetivos, tu competencia y qué tipo de web o sistema necesitas exactamente.",
        "process.s2Title": "Propuesta & Maqueta",
        "process.s2Desc": "En 24-48h recibes un presupuesto cerrado y una vista previa interactiva sin sorpresas.",
        "process.s3Title": "Desarrollo Rápido",
        "process.s3Desc": "Programo la solución con revisiones contigo para asegurar que cada detalle queda perfecto.",
        "process.s4Title": "Lanzamiento & Soporte",
        "process.s4Desc": "Publicamos tu web en tu dominio, te enseño cómo usarla y te acompaño con soporte continuo.",

        "contact.tag": "Hablemos Hoy Mismo",
        "contact.title": "¿Listo para impulsar la presencia digital de tu negocio?",
        "contact.text": "Escríbeme por WhatsApp o rellena el formulario para contarte cómo podemos enfocar tu proyecto y darte un presupuesto exacto en menos de 24 horas.",
        "form.title": "Cuéntame sobre tu proyecto",
        "form.subtitle": "Sin compromiso. Te responderé el mismo día.",
        "form.nameLabel": "Tu nombre o empresa *",
        "form.contactLabel": "Teléfono o WhatsApp *",
        "form.emailLabel": "Email *",
        "form.serviceLabel": "¿Qué servicio necesitas?",
        "form.opt1": "Pack Landing Page / Web Rápida (390€)",
        "form.opt2": "Pack Web Corporativa Completa (790€)",
        "form.opt3": "Pack App & Dashboard / Reserva a Medida",
        "form.opt4": "Modernización o Mantenimiento de Web Actual",
        "form.msgLabel": "Detalles del proyecto",
        "form.submit": "Enviar Solicitud por WhatsApp",
        "form.notice": "También se enviará una copia por correo. Tus datos solo se usarán para responder a tu consulta.",
        "footer.desc": "Desarrollador Web Freelance & Especialista en Soluciones Digitales. Palma de Mallorca, Islas Baleares.",
        "footer.rights": "Todos los derechos reservados."
    },
    en: {
        "topbar.status": "Available for new projects in Palma de Mallorca & Remote worldwide",
        "topbar.action": "Quote within 24h via WhatsApp →",
        "nav.services": "Services",
        "nav.projects": "Projects",
        "nav.whyMe": "Why Me",
        "nav.contact": "Contact",
        "hero.badge": "Web Development & Business Digitalization",
        "hero.title": "I build modern websites and digital solutions that <span class='gradient-text'>grow your business</span>.",
        "hero.description": "Helping local companies, freelancers, and SMEs stand out online with ultra-fast, mobile-friendly websites and tailor-made tools that automate daily tasks.",
        "hero.ctaPrimary": "Request a Free Quote",
        "hero.ctaSecondary": "View Real Projects",
        "hero.trust1": "Fast delivery (3 to 10 days)",
        "hero.trust2": "No intermediaries or hidden fees",
        "hero.trust3": "Direct local support in Mallorca",
        "hero.cardTag": "Practical Solutions Specialist",
        "hero.cardTitle": "What problem do you want to solve today?",
        "hero.feat1Title": "High-Converting Landing Page",
        "hero.feat1Desc": "Perfect to capture bookings and leads from Google or social ads.",
        "hero.feat2Title": "Full Business Website",
        "hero.feat2Desc": "Make your company 100% visible, credible, and top-ranked in your area.",
        "hero.feat3Title": "Web Apps & Automation",
        "hero.feat3Desc": "Internal dashboards, booking flows, or Excel sheet automation.",
        "hero.callDirect": "Want to talk directly?",
        
        "services.tag": "Services & Packages",
        "services.title": "Clear Pricing, Fast Turnarounds, Zero Surprises",
        "services.subtitle": "Solutions engineered specifically for SMEs, local stores, and independent professionals looking for tangible business results.",
        "services.oneTime": "one-time payment",
        "services.fromPrice": "From",
        "services.btnChoose": "Select This Package",
        "services.btnQuote": "Request Valuation",
        "services.bestValue": "Recommended Option",
        
        "services.p1Type": "Most Popular to Start",
        "services.p1Title": "Landing Page Package",
        "services.p1Desc": "Ideal for showcasing a specific product, service, or ad campaign in Mallorca.",
        "services.p1F1": "Modern design, 100% mobile-responsive",
        "services.p1F2": "Direct WhatsApp click-to-chat button",
        "services.p1F3": "Ultra-fast loading speed (< 1.5s)",
        "services.p1F4": "Persuasive sales-driven structure",
        "services.p1F5": "Guaranteed delivery in 3-5 business days",

        "services.p2Type": "Complete Business Solution",
        "services.p2Title": "Corporate Website Package",
        "services.p2Desc": "The definitive website to build trust and dominate your local industry.",
        "services.p2F1": "Up to 5 custom pages/sections",
        "services.p2F2": "Services catalog, rate card, or menus",
        "services.p2F3": "Basic Local SEO to appear on Google Maps",
        "services.p2F4": "Inquiry and booking forms",
        "services.p2F5": "Domain, hosting, and SSL setup included",
        "services.p2F6": "1 month of technical support included",

        "services.p3Type": "Tailored Digitalization",
        "services.p3Title": "App & Dashboard Package",
        "services.p3Desc": "For companies needing booking engines, client portals, or internal process automation.",
        "services.p3F1": "Modular React and JavaScript architecture",
        "services.p3F2": "Online booking or order tracking system",
        "services.p3F3": "Task automation with Excel / databases",
        "services.p3F4": "Private administration dashboard for staff",
        "services.p3F5": "User onboarding and 3-month technical warranty",

        "services.maintTitle": "Already have a website but it's outdated or not converting?",
        "services.maintDesc": "I offer website modernization, speed upgrades, and monthly maintenance starting at <strong>€49/month</strong> so you never worry about downtime or security.",
        "services.maintBtn": "Inquire Maintenance",

        "projects.tag": "Real Cases & Demos",
        "projects.title": "Solutions Solving Real Business Needs",
        "projects.subtitle": "I don't just write pretty code; I build tools that save hours and generate revenue.",
        "projects.liveDemo": "Live Demo 🚀",
        "projects.wantSimilar": "I want something similar",
        "projects.requestAutomation": "Automate my office",
        "projects.p1Title": "Moto-Rent: Vehicle Rental Web Platform",
        "projects.p1Desc": "Engineered for the Balearic tourism sector: interactive scooter/bike fleet catalog, dynamic price calculation per rental days, and instant WhatsApp booking confirmation.",
        "projects.p2Title": "Centralized Dashboard for Advisory & Business Firms",
        "projects.p2Desc": "Developed based on real-world enterprise experience at Garcia Garriga Asesores. Integrates 4 critical tools: bulk document renamer, automated Excel cross-check, and document registry.",
        "projects.p3Title": "Lightweight CRM for Clients & Sales Leads",
        "projects.p3Desc": "Fast pipeline system for freelancers and small teams to manage inquiries and quotes without the overhead or subscription fees of HubSpot or Salesforce.",
        "projects.p4Title": "Visual Email Template Builder",
        "projects.p4Desc": "Intuitive drag-and-drop tool to compose responsive marketing newsletters with live preview and clean HTML export for email software.",

        "advantages.tag": "The Advantage",
        "advantages.title": "The Power of a Hybrid Technical Background",
        "advantages.subtitle": "Many can build basic WordPress templates. My solid background as a <strong>Microcomputer & Systems Technician</strong> plus web developer delivers real end-to-end technical solutions.",
        "advantages.a1Title": "Real Systems Understanding",
        "advantages.a1Desc": "I don't just write frontend code: I know how office networks, corporate email servers, and hardware interact. I solve issues at the root.",
        "advantages.a2Title": "Clean & Ultra-Fast Code",
        "advantages.a2Desc": "Built using modern HTML5, clean CSS, and React. Your website will load instantly, boosting SEO rankings and user conversions.",
        "advantages.a3Title": "Direct Contact Without Middlemen",
        "advantages.a3Desc": "You speak directly with me. No pushy salesmen or account managers slowing down updates. Pure agility and clear communication.",
        "advantages.a4Title": "Local Presence in Mallorca",
        "advantages.a4Desc": "If your business is in Mallorca, we can meet face-to-face, observe your operations on-site, and tailor the exact solution you need.",

        "process.tag": "Step by Step",
        "process.title": "How do we work together?",
        "process.subtitle": "A transparent process so you always know what we are building.",
        "process.s1Title": "15-minute Discovery Call",
        "process.s1Desc": "We review your goals, competitors, and the exact website or software you require.",
        "process.s2Title": "Proposal & Interactive Mockup",
        "process.s2Desc": "Within 24-48h you receive a fixed quote and interactive preview with zero surprises.",
        "process.s3Title": "Agile Development",
        "process.s3Desc": "I code the solution with regular checkpoints to ensure every single detail meets expectations.",
        "process.s4Title": "Launch & Ongoing Support",
        "process.s4Desc": "We deploy the website to your domain, I show you how it works, and provide ongoing technical backing.",

        "contact.tag": "Let's Talk Today",
        "contact.title": "Ready to elevate your business's digital presence?",
        "contact.text": "Send me a message via WhatsApp or submit the form to receive expert advice and a firm quote within 24 hours.",
        "form.title": "Tell me about your project",
        "form.subtitle": "No obligations. I will get back to you today.",
        "form.nameLabel": "Your Name or Company *",
        "form.contactLabel": "Phone or WhatsApp *",
        "form.emailLabel": "Email *",
        "form.serviceLabel": "Which service do you need?",
        "form.opt1": "Landing Page / Rapid Web Package (€390)",
        "form.opt2": "Full Corporate Website Package (€790)",
        "form.opt3": "Custom App & Dashboard / Booking System",
        "form.opt4": "Website Modernization or Monthly Maintenance",
        "form.msgLabel": "Project details",
        "form.submit": "Submit Request via WhatsApp",
        "form.notice": "A copy will also be sent via email. Your information is only used to respond to your inquiry.",
        "footer.desc": "Freelance Web Developer & Digital Solutions Specialist. Palma de Mallorca, Balearic Islands (Spain).",
        "footer.rights": "All rights reserved."
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

    // Refresh icons
    if (window.lucide) {
        window.lucide.createIcons();
    }
}

// Inicialización cuando carga el DOM
document.addEventListener('DOMContentLoaded', () => {
    // 1. Selector de idioma
    const langBtn = document.getElementById('langToggle');
    if (langBtn) {
        langBtn.addEventListener('click', () => {
            const newLang = currentLanguage === 'es' ? 'en' : 'es';
            setLanguage(newLang);
        });
    }

    // 2. Año actual en el footer
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
                navMenu.style.background = '#0B0F17';
                navMenu.style.padding = '20px';
                navMenu.style.borderBottom = '1px solid rgba(255,255,255,0.1)';
            }
        });

        // Cerrar menú al hacer click en un enlace
        navMenu.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 640) {
                    navMenu.style.display = '';
                }
            });
        });
    }

    // 4. Manejo del Formulario de Contacto (Redirección a WhatsApp & Mailto)
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
                    ? 'Por favor, rellena todos los campos obligatorios (*)' 
                    : 'Please fill in all required fields (*)');
                return;
            }

            // Construir mensaje de WhatsApp
            const waGreeting = currentLanguage === 'es'
                ? `Hola Joaquín, mi nombre es *${name}* y me gustaría solicitar presupuesto:`
                : `Hello Joaquín, my name is *${name}* and I would like to request a quote:`;
            
            const waService = currentLanguage === 'es' ? `Servicio:` : `Service:`;
            const waContact = currentLanguage === 'es' ? `Contacto:` : `Contact:`;
            const waDetails = currentLanguage === 'es' ? `Detalles:` : `Details:`;

            const fullText = `${waGreeting}\n\n` +
                `📌 *${waService}* ${service}\n` +
                `📞 *${waContact}* ${contact} | ${email}\n` +
                (message ? `📝 *${waDetails}* ${message}` : '');

            const encodedWa = encodeURIComponent(fullText);
            const waUrl = `https://wa.me/34695267445?text=${encodedWa}`;

            // Abrir WhatsApp en una pestaña nueva
            window.open(waUrl, '_blank');

            // Feedback al usuario
            const submitBtn = document.getElementById('submitBtn');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = currentLanguage === 'es' ? '✓ ¡Abriendo WhatsApp...!' : '✓ Opening WhatsApp...!';
            submitBtn.style.background = '#10B981';

            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.style.background = '';
                contactForm.reset();
            }, 4000);
        });
    }

    // Renderizar iconos de Lucide
    if (window.lucide) {
        window.lucide.createIcons();
    }

    // 5. Inicializar Fondo Interactivo Corporativo
    initInteractiveBackground();
});

/**
 * Fondo Interactivo Corporativo
 * Constelación visible y reactiva con líneas dinámicas, halo y repulsión elástica al cursor
 */
function initInteractiveBackground() {
    const canvas = document.getElementById('interactive-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    let particles = [];
    const isMobile = window.innerWidth <= 768;
    const particleCount = isMobile ? 45 : 95;
    const maxDistance = isMobile ? 105 : 145;
    const mouseRadius = isMobile ? 120 : 185;

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
            this.vx = (Math.random() - 0.5) * 0.65;
            this.vy = (Math.random() - 0.5) * 0.65;
            this.radius = Math.random() * 1.5 + 1.8;
            this.baseAlpha = Math.random() * 0.25 + 0.35;
            this.alpha = this.baseAlpha;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            if (this.x < 0) this.x = width;
            else if (this.x > width) this.x = 0;
            if (this.y < 0) this.y = height;
            else if (this.y > height) this.y = 0;

            // Interacción suave con el cursor
            if (mouse.active && mouse.x !== null) {
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < mouseRadius) {
                    const force = (mouseRadius - dist) / mouseRadius;
                    const angle = Math.atan2(dy, dx);
                    this.x -= Math.cos(angle) * force * 2.5;
                    this.y -= Math.sin(angle) * force * 2.5;
                    this.alpha = Math.min(0.95, this.baseAlpha + force * 0.55);
                } else {
                    this.alpha = this.baseAlpha;
                }
            }
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(148, 163, 184, ${this.alpha})`;
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

        // Suave seguimiento del cursor
        if (mouse.active) {
            mouse.x += (mouse.targetX - mouse.x) * 0.12;
            mouse.y += (mouse.targetY - mouse.y) * 0.12;

            // Halo de luz sutil en el cursor
            const halo = ctx.createRadialGradient(
                mouse.x, mouse.y, 0,
                mouse.x, mouse.y, mouseRadius
            );
            halo.addColorStop(0, 'rgba(37, 99, 235, 0.15)');
            halo.addColorStop(0.45, 'rgba(37, 99, 235, 0.05)');
            halo.addColorStop(1, 'rgba(37, 99, 235, 0)');
            ctx.fillStyle = halo;
            ctx.beginPath();
            ctx.arc(mouse.x, mouse.y, mouseRadius, 0, Math.PI * 2);
            ctx.fill();
        }

        // Conexiones entre partículas
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < maxDistance) {
                    const lineAlpha = (1 - dist / maxDistance) * 0.22;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(148, 163, 184, ${lineAlpha})`;
                    ctx.lineWidth = 0.85;
                    ctx.stroke();
                }
            }
        }

        // Conexiones dinámicas del cursor con partículas cercanas
        if (mouse.active && mouse.x !== null) {
            for (let i = 0; i < particles.length; i++) {
                const dx = mouse.x - particles[i].x;
                const dy = mouse.y - particles[i].y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < mouseRadius) {
                    const mouseLineAlpha = (1 - dist / mouseRadius) * 0.45;
                    ctx.beginPath();
                    ctx.moveTo(mouse.x, mouse.y);
                    ctx.lineTo(particles[i].x, particles[i].y);
                    ctx.strokeStyle = `rgba(96, 165, 250, ${mouseLineAlpha})`;
                    ctx.lineWidth = 1.2;
                    ctx.stroke();

                    // Partícula destacada cerca del cursor
                    ctx.beginPath();
                    ctx.arc(particles[i].x, particles[i].y, particles[i].radius * 1.5, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(96, 165, 250, 0.9)`;
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
