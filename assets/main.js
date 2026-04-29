// Translations
const translations = {
    en: {
        "nav.work": "Work",
        "nav.about": "About",
        "nav.contact": "Contact",
        "hero.title": "I'm Joaquín Oses Monti <br><span class='gradient-text'>Full Stack Developer</span>",
        "hero.subtitle": "Specialized in Modern Responsive Interfaces & Technical Problem Solving.",
        "hero.viewWork": "View Portfolio",
        "hero.contact": "Contact Me",

        "projects.title": "Featured Projects",
        "projects.subtitle": "Real-world solutions and technical explorations.",

        "resume.experienceTitle": "Experience",
        "resume.educationTitle": "Education",
        "resume.date1": "Mar 2024 - Jun 2025",
        "resume.role1": "Microcomputer Technician",
        "resume.job1": "Technical support, network administration, and hardware maintenance.",
        "resume.date2": "Sept 2025 - Oct 2025",
        "resume.role2": "Computer Technician",
        "resume.job2": "IT Support and Systems Maintenance.",
        "resume.eduDate1": "2025 - 2027",
        "resume.edu1": "Higher Degree Web Development",
        "resume.school1": "Sant Josep Obrer College",
        "resume.eduDate2": "2023 - 2025",
        "resume.edu2": "Microinformatics & Networks",
        "resume.school2": "Sant Josep Obrer College",

        "about.title": "About Me",
        "about.desc": "I am a <strong>Junior Web Developer</strong> with a solid technical background in microinformatics and networks. My hybrid profile allows me to develop robust modular interfaces (React) while understanding the underlying system infrastructure. I am currently transitioning towards Full-Stack development.",
        "about.stat1": "Years Experience",
        "about.stat2": "Dedication",

        "footer.title": "Available for new opportunities",
        "footer.copyright": "© 2025 Joaquín Oses Monti. All rights reserved.",
        "btn.viewProject": "View Project"
    },
    es: {
        "nav.work": "Proyectos",
        "nav.about": "Sobre Mí",
        "nav.contact": "Contacto",
        "hero.title": "Soy Joaquín Oses Monti <br><span class='gradient-text'>Desarrollador Full Stack</span>",
        "hero.subtitle": "Especializado en Interfaces Modernas, React y resolución técnica de problemas.",
        "hero.viewWork": "Ver Portafolio",
        "hero.contact": "Contáctame",

        "projects.title": "Proyectos Destacados",
        "projects.subtitle": "Soluciones reales y exploraciones técnicas.",

        "resume.experienceTitle": "Experiencia Laboral",
        "resume.educationTitle": "Formación",
        "resume.date1": "Mar 2024 - Jun 2025",
        "resume.role1": "Técnico Informático",
        "resume.job1": "Soporte técnico, administración de redes y mantenimiento de hardware.",
        "resume.date2": "Sept 2025 - Oct 2025",
        "resume.role2": "Técnico Informático",
        "resume.job2": "Soporte informático y mantenimiento de sistemas.",
        "resume.eduDate1": "2025 - 2027",
        "resume.edu1": "FP Grado Superior en Desarrollo Web",
        "resume.school1": "Colegio Sant Josep Obrer",
        "resume.eduDate2": "2023 - 2025",
        "resume.edu2": "Sistemas Microinformáticos y Redes",
        "resume.school2": "Colegio Sant Josep Obrer",

        "about.title": "Sobre Mí",
        "about.desc": "Soy <strong>Desarrollador Web Junior</strong> con una sólida base técnica en sistemas microinformáticos. Mi perfil híbrido me permite desarrollar interfaces modulares robustas (React) entendiendo la infraestructura que las soporta. Actualmente enfocado en mi transición al desarrollo Full-Stack.",
        "about.stat1": "Años Experiencia",
        "about.stat2": "Dedicación",

        "footer.title": "Disponible para nuevas oportunidades",
        "footer.copyright": "© 2025 Joaquín Oses Monti. Todos los derechos reservados.",
        "btn.viewProject": "Ver Proyecto"
    }
};

const projects = [
    {
        title: { en: "Python Apps Collection", es: "Colección de Apps Python" },
        description: {
            en: "A comprehensive collection of desktop applications built with Python and Flet. Includes Moto Rent, CRM, Email Builder, and Habit Tracker.",
            es: "Una colección completa de aplicaciones de escritorio construidas con Python y Flet. Incluye Moto Rent, CRM, Editor de Emails y Tracker de Hábitos."
        },
        tags: ["Python", "Flet", "Open Source", "Collection"],
        icon: "code",
        link: "https://github.com/Joaquin-OM/python-apps.git"
    },
    {
        title: { en: "Moto Rent Platform", es: "Plataforma Moto Rent" },
        description: {
            en: "Premium motorcycle booking system recreated in Python (Flet). Features dark mode, responsive grid, and booking modals.",
            es: "Sistema de reservas recreado en Python (Flet). Interfaz moderna oscura, grid responsivo y modales de reserva."
        },
        tags: ["Python", "Flet", "UI/UX", "Desktop"],
        icon: "bike",
        link: "https://github.com/Joaquin-OM/Moto-Rent.git"
    },
    {
        title: { en: "Nexus CRM Dashboard", es: "Nexus CRM" },
        description: {
            en: "Enterprise dashboard with sidebar navigation, complex data tables, and interactive analytics charts.",
            es: "Dashboard empresarial con navegación lateral, tablas de datos complejas y gráficos analíticos interactivos."
        },
        tags: ["Flet", "Data Viz", "Dashboard"],
        icon: "bar-chart-2",
        link: "https://github.com/Joaquin-OM/CRM-Clients.git"
    },
    {
        title: { en: "Email Builder Studio", es: "Editor de Emails" },
        description: {
            en: "Drag-and-drop tool to design HTML emails visually. Demonstrates advanced DOM manipulation.",
            es: "Herramienta 'Drag-and-drop' para diseñar emails visualmente. Demuestra manipulación avanzada del DOM."
        },
        tags: ["Drag & Drop", "Tooling", "Canvas"],
        icon: "mail",
        link: "https://github.com/Joaquin-OM/Email-Builder.git"
    },
    {
        title: { en: "Daily Habit Tracker", es: "Tracker de Hábitos" },
        description: {
            en: "Minimalist productivity tool with local data persistence. Focuses on user retention through gamification elements.",
            es: "Herramienta de productividad minimalista con persistencia de datos local. Enfocada en la retención mediante gamificación."
        },
        tags: ["Productivity", "Local Storage", "Minimalism"],
        icon: "check-circle",
        link: "https://github.com/Joaquin-OM/Habit-Tracker.git"
    }
];

let currentLang = 'es'; // Default to Spanish as requested by profile context

let observer; // Global observer

function setupObserver() {
    observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
}

function renderProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    projectsGrid.innerHTML = ''; // Clear existing

    projects.forEach((project, index) => {
        const card = document.createElement('div');
        card.classList.add('project-card');
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        // Re-apply animation delay
        card.style.transition = `all 0.6s ease ${index * 0.1}s`;

        // Create tags HTML
        const tagsHtml = project.tags.map(tag => `<span class="tag">${tag}</span>`).join('');

        const btnText = translations[currentLang]["btn.viewProject"];

        card.innerHTML = `
            <div class="project-icon">
                <i data-lucide="${project.icon}"></i>
            </div>
            <h3 class="project-title">${project.title[currentLang]}</h3>
            <p class="project-desc">${project.description[currentLang]}</p>
            <div class="project-tags">
                ${tagsHtml}
            </div>
            <a href="${project.link}" class="project-link">
                ${btnText} <i data-lucide="arrow-right" style="width: 16px;"></i>
            </a>
        `;

        projectsGrid.appendChild(card);
        observer.observe(card);
    });

    if (window.lucide) {
        window.lucide.createIcons();
    }
}

function updateTexts() {
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[currentLang][key]) {
            el.innerHTML = translations[currentLang][key];
        }
    });
}

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'es' : 'en';
    const langBtn = document.getElementById('lang-toggle');
    langBtn.textContent = currentLang === 'en' ? 'ES' : 'EN';

    updateTexts();
    renderProjects();
}

// Update Footer Email
function updateContactInfo() {
    const emailLink = document.querySelector('.email-link');
    if (emailLink) {
        emailLink.href = "mailto:osesjoa@gmail.com";
        emailLink.textContent = "osesjoa@gmail.com";
    }
}

// Particle Animation
function initParticles() {
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];

    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
    }

    window.addEventListener('resize', resize);
    resize();

    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.radius = Math.random() * 1.5 + 0.5;
        }
        update() {
            this.x += this.vx;
            this.y += this.vy;
            if (this.x < 0 || this.x > width) this.vx = -this.vx;
            if (this.y < 0 || this.y > height) this.vy = -this.vy;
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
            ctx.fill();
        }
    }

    for (let i = 0; i < 50; i++) {
        particles.push(new Particle());
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        
        // Draw lines between close particles
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 150) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 - dist/1500})`;
                    ctx.stroke();
                }
            }
        }
        requestAnimationFrame(animate);
    }
    animate();
}

// Initial Render
document.addEventListener('DOMContentLoaded', () => {
    // Setup event listener
    document.getElementById('lang-toggle').addEventListener('click', toggleLanguage);

    // Set initial text for button based on default lang (ES)
    document.getElementById('lang-toggle').textContent = "EN";

    setupObserver();
    updateTexts(); // Initial text update for Spanish default
    renderProjects();
    updateContactInfo();
    initParticles();
});
