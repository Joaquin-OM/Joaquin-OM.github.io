# 👨‍💻 Joaquín Oses Monti - Developer Portfolio

A modern, responsive, and bilingual developer portfolio to showcase my work as a Junior Full Stack Developer. Built with performance and aesthetics in mind, using **Vanilla JavaScript** and **CSS** for a lightweight yet dynamic experience.

🔗 **Live Demo**: [https://joaquin-om.github.io/](https://joaquin-om.github.io/)

## ✨ Features

- **🎨 Cyber Professional Aesthetic**: Dark mode by default, glassmorphism effects, and smooth gradients.
- **🌍 Internationalization (i18n)**: One-click toggle between **English** and **Spanish** for all content (Hero, Projects, Resume, etc.).
- **⚡ Performance First**: Pure Javascript and CSS. No heavy frameworks for the landing page.
- **📱 Fully Responsive**: Adapts perfectly to Mobile, Tablet, and Desktop.
- **💼 Dynamic Resume**: Experience and Education sections presented in a clean timeline format.
- **🚀 Project Gallery**: Data-driven project rendering from a JSON-like structure, making it easy to add new work.

## 🛠️ Tech Stack

- **HTML5**: Semantic structure.
- **CSS3**: Variables, Flexbox, Grid, and Animations.
- **JavaScript (ES6+)**: Logic for DOM manipulation, i18n, and animations (`IntersectionObserver`).
- **Lucide Icons**: For lightweight, crisp SVG icons.

## 📂 Project Structure

```bash
developer-portfolio/
├── index.html          # Main entry point (Structure & Data Keys)
├── README.md           # This file
└── assets/
    ├── style.css       # All styles (Variables, Layout, Responsive)
    └── main.js         # Logic (Translations, Project Data, Event Listeners)
```

## 🚀 How to Run Locally

You don't need `npm` or complex build tools to run this. It works natively in the browser!

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/Joaquin-OM/developer-portfolio.git
    cd developer-portfolio
    ```

2.  **Open `index.html`**:
    *   Simply double-click `index.html` to open it in your browser.
    *   OR use VS Code's **Live Server** extension for the best experience.

## ⚙️ Customization

### Adding a New Project
Open `assets/main.js` and add a new object to the `projects` array:

```javascript
{
    title: { en: "New Project", es: "Nuevo Proyecto" },
    description: {
        en: "Description in English.",
        es: "Descripción en Español."
    },
    tags: ["React", "CSS"],
    icon: "code", // Lucide icon name
    link: "https://github.com/your-username/project"
}
```

### Editing Translations
Modify the `translations` object in `assets/main.js`. Each key (e.g., `hero.title`) maps to text in `index.html` via the `data-key` attribute.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

