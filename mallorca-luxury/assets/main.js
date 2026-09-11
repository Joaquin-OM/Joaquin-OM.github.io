/**
 * MALLORCA LUXURY — LÓGICA DE LA PLATAFORMA 3-EN-1
 */

const propertiesData = [
    {
        id: "son_vida_skyline",
        title: "Villa Son Vida Skyline",
        location: "Son Vida, Palma de Mallorca",
        price: "4.850.000 €",
        ref: "SV-402",
        specs: "6 Dormitorios • 7 Baños • 820 m² constr. • Parcela 2.400 m²",
        desc: "Arquitectura contemporánea con vistas panorámicas a la Bahía de Palma y a la Catedral. Piscina infinita de agua salada, ascensor interior, bodega climatizada y spa privado.",
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop",
        badge: "Exclusiva Son Vida"
    },
    {
        id: "finca_deia_olivos",
        title: "Finca Rústica Deià & Tramuntana",
        location: "Deià / Valldemossa, Mallorca",
        price: "3.200.000 €",
        ref: "TR-108",
        specs: "4 Dormitorios • 4 Baños • 460 m² constr. • Finca 14.000 m²",
        desc: "Piedra seca centenaria restaurada con estándares de máxima sostenibilidad. Olivar privado en producción, vigas vistas de roble, porches al atardecer y licencia turística histórica.",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
        badge: "Patrimonio UNESCO"
    },
    {
        id: "atico_andratx_marina",
        title: "Ático Waterfront Port d'Andratx",
        location: "Port d'Andratx, Mallorca",
        price: "2.450.000 €",
        ref: "PA-771",
        specs: "3 Dormitorios • 3 Baños • 210 m² constr. • Solárium 95 m²",
        desc: "Primera línea de mar en la marina más codiciada del Mediterráneo. Terraza solárium con jacuzzi exterior, cocina Boffi, domótica integral y amarre para yate disponible.",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
        badge: "Waterfront"
    }
];

const suitesData = [
    {
        id: "sea_view",
        title: "Grand Panoramic Sea View Suite",
        rate: 620,
        specs: "75 m² • Cama King Size • Terraza Privada con Vistas al Mar",
        desc: "Orientación suroeste con puesta de sol sobre el Mediterráneo. Baño abierto en piedra de Binissalem con bañera exenta y ducha lluvia.",
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: "garden_suite",
        title: "Deluxe Olive Garden Suite",
        rate: 420,
        specs: "55 m² • Cama King Size • Patio Privado de Naranjos",
        desc: "Refugio de serenidad rodeado de jardines mediterráneos aromáticos. Chimenea de leña para estancias de primavera y otoño, sábanas de lino orgánico.",
        image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: "pool_villa",
        title: "Private Plunge Pool Villa",
        rate: 980,
        specs: "110 m² • 2 Dormitorios • Piscina Privada de Piedra Natural",
        desc: "Máxima privacidad e independencia. Jardín exclusivo de 300 m², servicio de mayordomía dedicada y desayuno servido en porche privado.",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop"
    }
];

const menuData = {
    entrantes: [
        { name: "Carpaccio de Gamba Roja de Sóller", price: "28 €", desc: "Aceite de oliva virgen extra de Valldemossa, emulsión de cítricos de Sóller y flor de sal de Es Trenc.", tag: "Producto de Lonja" },
        { name: "Jamón Ibérico de Bellota 100% (5 Jotas)", price: "34 €", desc: "Cortado a mano al momento, acompañado de coca de cristal con tomate de ramellet mallorquín.", tag: "D.O. Jabugo" },
        { name: "Ostras Gillardeau Nº2 al Cava Balear", price: "32 €", desc: "Cuatro piezas servidas sobre granizado de cava rosado brut nature y perlas de lima.", tag: "Fresco" }
    ],
    principales: [
        { name: "Arroz Meloso de Bogavante del Cantábrico", price: "38 €/pp", desc: "Fondo marino intenso cocinado a fuego lento en cazuela de barro tradicional. Mínimo 2 personas.", tag: "Especialidad" },
        { name: "Lubina Salvaje a la Sal de Es Trenc", price: "36 €", desc: "Pescado entero de captura diaria asado a la costra de sal marina con verduras de temporada a la brasa.", tag: "Km 0" },
        { name: "Solomillo de Ternera Rubia con Salsa de Vino Binissalem", price: "34 €", desc: "Acompañado de milhojas de patata trufada y chalotas glaseadas a la manteca de hierbas.", tag: "Carnes Nobles" }
    ],
    postres: [
        { name: "Ensaimada Caramelizada con Helado de Almendra Mallorquina", price: "14 €", desc: "Hojaldrado tradicional relleno de crema quemada con helado artesano de almendra tostada de Marratxí.", tag: "Postre Tradicional" },
        { name: "Texturas de Chocolate Negro 72% y Naranja de Sóller", price: "15 €", desc: "Mousse aireada, tierra de cacao crujiente y reducción caliente de naranja sanguina.", tag: "Gourmet" }
    ]
};

let activeSuite = suitesData[0];
let activeMenuCategory = 'entrantes';

document.addEventListener('DOMContentLoaded', () => {
    if (window.lucide) window.lucide.createIcons();

    setupExperienceNavigation();
    renderVillas();
    renderSuites();
    renderMenu();
    setupHotelBooking();
    setupTableBooking();
    setupDossierModal();
});

function setupExperienceNavigation() {
    const expButtons = document.querySelectorAll('.exp-btn');
    const sections = document.querySelectorAll('.exp-section');
    const heroHeading = document.getElementById('dynamicHeroHeading');
    const heroLead = document.getElementById('dynamicHeroLead');

    const heroTexts = {
        villas: {
            h: "Propiedades y fincas de prestigio en las mejores ubicaciones de Mallorca.",
            p: "Diseñado para inmobiliarias de lujo y promotores que necesitan presentar activos millonarios con elegancia y captar inversores internacionales."
        },
        hotel: {
            h: "Suites de autor y hospitalidad mediterránea sin comisiones de Booking.",
            p: "Demostración de motor de reservas directas para agroturismos y hoteles boutique: ahorra hasta un 18% en intermediación y fideliza al cliente premium."
        },
        restaurante: {
            h: "Gastronomía balear, carta digital interactiva y reserva instantánea de mesas.",
            p: "Solución ágil para restaurantes, beach clubs y terrazas: carta de temporada con alérgenos y reservas directas a WhatsApp sin intermediarios."
        }
    };

    expButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            expButtons.forEach(b => b.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));

            btn.classList.add('active');
            const exp = btn.getAttribute('data-exp');
            const targetSection = document.getElementById(`exp-${exp}`);
            if (targetSection) targetSection.classList.add('active');

            if (heroTexts[exp]) {
                heroHeading.textContent = heroTexts[exp].h;
                heroLead.textContent = heroTexts[exp].p;
            }

            if (window.lucide) window.lucide.createIcons();
        });
    });
}

function renderVillas() {
    const grid = document.getElementById('villasGrid');
    if (!grid) return;

    grid.innerHTML = propertiesData.map(villa => `
        <article class="villa-card">
            <div class="villa-img-wrap">
                <img src="${villa.image}" alt="${villa.title}" class="villa-img" loading="lazy">
                <span class="villa-badge">${villa.badge}</span>
            </div>
            <div class="villa-body">
                <span class="villa-location">${villa.location}</span>
                <h3 class="villa-title">${villa.title}</h3>
                <div class="villa-features-row">
                    <span>${villa.specs}</span>
                </div>
                <p class="villa-desc">${villa.desc}</p>
                <div class="villa-footer">
                    <span class="villa-price">${villa.price}</span>
                    <button class="btn btn-luxury-primary btn-xs btn-open-dossier" data-id="${villa.id}">
                        Solicitar Dossier
                    </button>
                </div>
            </div>
        </article>
    `).join('');

    document.querySelectorAll('.btn-open-dossier').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-id');
            const prop = propertiesData.find(p => p.id === id);
            if (prop) openDossierModal(prop);
        });
    });
}

function renderSuites() {
    const list = document.getElementById('suitesList');
    if (!list) return;

    list.innerHTML = suitesData.map(suite => `
        <div class="suite-card ${suite.id === activeSuite.id ? 'selected' : ''}" data-id="${suite.id}">
            <img src="${suite.image}" alt="${suite.title}" class="suite-img" loading="lazy">
            <div class="suite-content">
                <h4 class="suite-title">${suite.title}</h4>
                <div class="suite-specs">${suite.specs}</div>
                <p class="suite-desc">${suite.desc}</p>
                <div class="suite-foot">
                    <span class="suite-rate">${suite.rate} € <small>/ noche</small></span>
                    <span class="btn btn-luxury-outline btn-xs">
                        ${suite.id === activeSuite.id ? '✓ Seleccionada' : 'Elegir esta suite'}
                    </span>
                </div>
            </div>
        </div>
    `).join('');

    document.querySelectorAll('.suite-card').forEach(card => {
        card.addEventListener('click', () => {
            const id = card.getAttribute('data-id');
            const found = suitesData.find(s => s.id === id);
            if (found) {
                activeSuite = found;
                renderSuites();
                updateHotelPricing();
            }
        });
    });
}

function setupHotelBooking() {
    const checkInInput = document.getElementById('hotelCheckIn');
    const checkOutInput = document.getElementById('hotelCheckOut');
    const boardSelect = document.getElementById('hotelBoard');

    const today = new Date();
    const afterTomorrow = new Date();
    afterTomorrow.setDate(today.getDate() + 3);

    checkInInput.value = today.toISOString().split('T')[0];
    checkOutInput.value = afterTomorrow.toISOString().split('T')[0];
    checkInInput.min = today.toISOString().split('T')[0];

    [checkInInput, checkOutInput, boardSelect].forEach(el => {
        if (el) el.addEventListener('change', updateHotelPricing);
    });

    updateHotelPricing();

    const form = document.getElementById('hotelBookingForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const inDate = checkInInput.value;
            const outDate = checkOutInput.value;
            const guests = document.getElementById('hotelGuests').value;
            const boardName = boardSelect.options[boardSelect.selectedIndex].getAttribute('data-name');
            const total = document.getElementById('hpTotal').textContent;

            const text = `Hola Can Tramuntana Boutique Hotel, deseo solicitar reserva de estancia:\n\n` +
                `• *Suite:* ${activeSuite.title}\n` +
                `• *Fechas:* ${inDate} al ${outDate}\n` +
                `• *Huéspedes:* ${guests} personas\n` +
                `• *Régimen:* ${boardName}\n` +
                `• *Presupuesto estimado:* ${total}\n\n` +
                `¿Tienen disponibilidad en estas fechas?`;

            window.open(`https://wa.me/34695267445?text=${encodeURIComponent(text)}`, '_blank');
        });
    }
}

function updateHotelPricing() {
    const suiteNameEl = document.getElementById('selectedSuiteName');
    if (suiteNameEl) suiteNameEl.value = activeSuite.title;

    const inVal = document.getElementById('hotelCheckIn').value;
    const outVal = document.getElementById('hotelCheckOut').value;
    const boardFee = parseFloat(document.getElementById('hotelBoard').value || 0);

    let nights = 2;
    if (inVal && outVal) {
        const d1 = new Date(inVal);
        const d2 = new Date(outVal);
        nights = Math.max(1, Math.ceil((d2 - d1) / (1000 * 60 * 60 * 24)));
    }

    const basePrice = activeSuite.rate * nights;
    const boardPrice = boardFee * nights * 2; // para 2 huéspedes de base
    const total = basePrice + boardPrice;

    document.getElementById('hpDays').textContent = `${nights} noche${nights > 1 ? 's' : ''} (${activeSuite.rate} €/n)`;
    document.getElementById('hpBase').textContent = `${basePrice} €`;
    document.getElementById('hpBoard').textContent = `${boardPrice} €`;
    document.getElementById('hpTotal').textContent = `${total} €`;
}

function renderMenu() {
    const grid = document.getElementById('menuItemsGrid');
    const catButtons = document.querySelectorAll('.m-cat-btn');
    if (!grid) return;

    catButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            catButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeMenuCategory = btn.getAttribute('data-mcat');
            renderMenuItems();
        });
    });

    renderMenuItems();
}

function renderMenuItems() {
    const grid = document.getElementById('menuItemsGrid');
    const items = menuData[activeMenuCategory] || [];

    grid.innerHTML = items.map(dish => `
        <div class="menu-dish-card">
            <div class="dish-main">
                <h4 class="dish-name">${dish.name}</h4>
                <p class="dish-desc">${dish.desc}</p>
                <span class="dish-tag">${dish.tag}</span>
            </div>
            <div class="dish-price">${dish.price}</div>
        </div>
    `).join('');
}

function setupTableBooking() {
    const form = document.getElementById('tableBookingForm');
    const dateInput = document.getElementById('tableDate');

    const today = new Date();
    dateInput.value = today.toISOString().split('T')[0];
    dateInput.min = today.toISOString().split('T')[0];

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const date = dateInput.value;
            const time = document.getElementById('tableTime').value;
            const guests = document.getElementById('tableGuests').value;
            const area = document.getElementById('tableArea').value;
            const name = document.getElementById('tableName').value.trim();

            const text = `Hola Mirador & Can Tramuntana Restaurant, deseo solicitar reserva de mesa:\n\n` +
                `• *Nombre:* ${name}\n` +
                `• *Fecha:* ${date} a las ${time}h\n` +
                `• *Comensales:* ${guests} personas\n` +
                `• *Zona preferida:* ${area}\n\n` +
                `¿Es posible confirmar esta reserva?`;

            window.open(`https://wa.me/34695267445?text=${encodeURIComponent(text)}`, '_blank');
        });
    }
}

let activeModalProp = null;

function setupDossierModal() {
    const modal = document.getElementById('dossierModal');
    const closeBtn = document.getElementById('closeDossierModal');
    const form = document.getElementById('dossierForm');

    if (closeBtn) closeBtn.addEventListener('click', () => modal.classList.add('hidden'));
    window.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.add('hidden');
    });

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            if (!activeModalProp) return;

            const name = document.getElementById('dossierName').value.trim();
            const contact = document.getElementById('dossierContact').value.trim();
            const interest = document.getElementById('dossierInterest').value;

            const text = `Hola Can Tramuntana Real Estate, me interesa recibir información confidencial:\n\n` +
                `• *Propiedad:* ${activeModalProp.title} (${activeModalProp.price})\n` +
                `• *Referencia:* ${activeModalProp.ref}\n` +
                `• *Interesado:* ${name}\n` +
                `• *Contacto:* ${contact}\n` +
                `• *Solicitud:* ${interest}`;

            window.open(`https://wa.me/34695267445?text=${encodeURIComponent(text)}`, '_blank');
            modal.classList.add('hidden');
        });
    }
}

function openDossierModal(prop) {
    activeModalProp = prop;
    document.getElementById('dossierPropTitle').textContent = prop.title;
    document.getElementById('dossierPropPrice').textContent = `${prop.price} • Ref. ${prop.ref}`;
    document.getElementById('dossierModal').classList.remove('hidden');
}
