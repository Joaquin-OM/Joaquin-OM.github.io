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
        "hero.title": "Desarrollo web y soluciones digitales a medida.",
        "hero.description": "Creo páginas web rápidas, funcionales y adaptadas a móviles que ayudan a empresas locales, pymes y autónomos a captar clientes y optimizar su trabajo diario.",
        "hero.ctaPrimary": "Pedir presupuesto",
        "hero.ctaSecondary": "Ver proyectos",

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
        "services.s1Desc": "Ideal para promocionar un servicio específico, campaña publicitaria o captar reservas directas.",
        "services.s1F1": "Diseño 100% adaptado a móviles",
        "services.s1F2": "Botón directo a WhatsApp",
        "services.s1F3": "Carga ultra rápida (< 1.5s)",
        "services.s1F4": "Entrega en 3 a 5 días laborables",

        "services.s2Tag": "Empresarial",
        "services.s2Title": "Web Corporativa",
        "services.s2Desc": "Presencia profesional completa para que tu negocio transmita máxima credibilidad en Google.",
        "services.s2F1": "Hasta 5 páginas estructuradas",
        "services.s2F2": "Catálogo de servicios o tarifas",
        "services.s2F3": "SEO local y ficha de Google Maps",
        "services.s2F4": "Formularios y botón WhatsApp",
        "services.s2F5": "Dominio, hosting y SSL configurados",

        "services.s3Tag": "A Medida",
        "services.s3Title": "App & Dashboard",
        "services.s3Desc": "Para negocios que necesitan portales de reservas, gestión interna o automatización de tareas.",
        "services.s3F1": "Desarrollo modular en React / JavaScript",
        "services.s3F2": "Sistemas de reservas o pedidos",
        "services.s3F3": "Automatización con hojas de cálculo / Excel",
        "services.s3F4": "Panel privado y garantía técnica",

        "services.maint": "También ofrezco planes de modernización web y mantenimiento técnico mensual desde <strong>49 €/mes</strong>.",

        "projects.label": "Proyectos",
        "projects.title": "Trabajos y demostraciones",
        "projects.desc": "Herramientas orientadas a solucionar necesidades reales de oficina y negocios.",
        "projects.liveDemo": "Ver demo en vivo",
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
        "form.opt3": "App / Dashboard a Medida",
        "form.opt4": "Mantenimiento o Mejora Web"
    },
    en: {
        "nav.services": "Services",
        "nav.projects": "Projects",
        "nav.about": "About",
        "nav.contact": "Contact",

        "hero.status": "Available for projects • Palma de Mallorca & Remote",
        "hero.title": "Tailor-made web development & digital solutions.",
        "hero.description": "I build fast, responsive websites and internal tools that help local companies, SMEs, and professionals acquire clients and streamline daily workflows.",
        "hero.ctaPrimary": "Request a quote",
        "hero.ctaSecondary": "View projects",

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
        "services.s1Desc": "Ideal for a specific product launch, ad campaigns, or instant direct bookings.",
        "services.s1F1": "100% mobile-responsive layout",
        "services.s1F2": "Direct click-to-WhatsApp link",
        "services.s1F3": "Ultra-fast load times (< 1.5s)",
        "services.s1F4": "Delivery in 3-5 business days",

        "services.s2Tag": "Enterprise",
        "services.s2Title": "Corporate Website",
        "services.s2Desc": "Complete business presence designed to build maximum credibility on Google.",
        "services.s2F1": "Up to 5 structured pages",
        "services.s2F2": "Services catalog & price guide",
        "services.s2F3": "Local SEO & Google Maps optimization",
        "services.s2F4": "Contact forms & WhatsApp CTA",
        "services.s2F5": "Domain, hosting, and SSL included",

        "services.s3Tag": "Tailor-made",
        "services.s3Title": "App & Dashboard",
        "services.s3Desc": "For businesses requiring booking engines, client areas, or task automation.",
        "services.s3F1": "Modular React / JavaScript architecture",
        "services.s3F2": "Booking or order tracking engines",
        "services.s3F3": "Excel & spreadsheet task automation",
        "services.s3F4": "Private administration & technical warranty",

        "services.maint": "I also offer website modernization and technical monthly maintenance starting at <strong>€49/month</strong>.",

        "projects.label": "Projects",
        "projects.title": "Work and demonstrations",
        "projects.desc": "Tools designed to solve real business and administrative office needs.",
        "projects.liveDemo": "View live demo",
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
        "form.opt3": "Custom App / Dashboard",
        "form.opt4": "Website Maintenance or Upgrades"
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

    if (window.lucide) {
        window.lucide.createIcons();
    }
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

    // 5. Renderizar iconos de Lucide
    if (window.lucide) {
        window.lucide.createIcons();
    }

    // 6. Iniciar Fondo Interactivo Monocromático
    initMinimalistBackground();
});

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
