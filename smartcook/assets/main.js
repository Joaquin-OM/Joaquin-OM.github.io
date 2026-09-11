/**
 * SMARTCOOK — ASISTENTE CULINARIO CON IA
 */

const defaultIngredients = [
    { id: "arroz", name: "Arroz", selected: true },
    { id: "tomate", name: "Tomate", selected: true },
    { id: "aguacate", name: "Aguacate", selected: true },
    { id: "cebolla", name: "Cebolla", selected: true },
    { id: "aceite", name: "Aceite de Oliva y Sal", selected: true },
    { id: "pollo", name: "Pechuga de Pollo", selected: false },
    { id: "huevos", name: "Huevos", selected: false },
    { id: "pasta", name: "Pasta", selected: false },
    { id: "manzana", name: "Manzanas", selected: false },
    { id: "harina", name: "Harina de Trigo", selected: false },
    { id: "leche", name: "Leche", selected: false },
    { id: "queso", name: "Queso Parmesano", selected: false }
];

let userIngredients = [...defaultIngredients];

const recipesDatabase = [
    {
        id: "arroz_huerto",
        title: "Arroz del Huerto con Aguacate y Tomate",
        time: "20 min",
        difficulty: "Fácil",
        calories: "360 kcal",
        matchedTags: ["arroz", "tomate", "aguacate", "cebolla", "aceite"],
        ingredients: [
            { name: "Arroz", qty: "150g", tag: "arroz" },
            { name: "Aguacate", qty: "1 pieza", tag: "aguacate" },
            { name: "Tomate", qty: "2 piezas", tag: "tomate" },
            { name: "Cebolla", qty: "Media pieza", tag: "cebolla" },
            { name: "Aceite de Oliva y Sal", qty: "Al gusto", tag: "aceite" }
        ],
        instructions: [
            "Cocer el arroz en agua hirviendo con una pizca de sal durante 14 minutos. Escurrir y reservar a temperatura ambiente.",
            "Picar el tomate y la cebolla en dados muy finos (brunoise).",
            "Cortar el aguacate en cubos medianos justo antes de servir para evitar que se oxide.",
            "Integrar el arroz con las verduras frescas y aliñar con un buen chorro de aceite de oliva virgen extra y pimienta negra recién molida."
        ],
        chefAdvice: {
            gordon: "¡¡MUEVE ESA SARTÉN Y PRESTA ATENCIÓN!! Saltea el arroz cocido con una gota de aceite y ajo antes de juntarlo con el aguacate fresco para que gane textura crujiente. ¡Sin textura un plato no es nada!",
            teresa: "Hijo mío, un truquito de toda la vida: ponle unas gotitas de limón al aguacate para que no se ponga oscuro y añade una pizca de orégano seco al final. Verás qué frescura.",
            molecular: "La clave fisicoquímica reside en controlar la gelatinización del almidón. Al enfriar el arroz unos minutos, se forma almidón resistente tipo 3, mejorando el índice glucémico y la absorción de los ácidos grasos monoinsaturados del aguacate."
        }
    },
    {
        id: "pollo_salteado",
        title: "Salteado Rápido de Pollo al Ajo y Tomate",
        time: "15 min",
        difficulty: "Fácil",
        calories: "410 kcal",
        matchedTags: ["pollo", "tomate", "cebolla", "aceite"],
        ingredients: [
            { name: "Pechuga de Pollo", qty: "250g", tag: "pollo" },
            { name: "Tomate", qty: "2 piezas", tag: "tomate" },
            { name: "Cebolla", qty: "1 pieza", tag: "cebolla" },
            { name: "Aceite de Oliva y Sal", qty: "Al gusto", tag: "aceite" }
        ],
        instructions: [
            "Cortar la pechuga de pollo en tiras uniformes para garantizar una cocción idéntica.",
            "Calentar la sartén a fuego vivo con aceite de oliva. Dorar el pollo durante 4-5 minutos hasta que esté bien sellado.",
            "Añadir la cebolla en juliana y saltear durante 3 minutos más.",
            "Incorporar el tomate troceado, bajar el fuego y dejar que suelte sus jugos para crear una salsa natural."
        ],
        chefAdvice: {
            gordon: "¡La sartén tiene que humear antes de tirar el pollo! Si pones la carne en una sartén templada se va a cocer en sus propios jugos y quedará como goma. ¡Dóralo con fuerza!",
            teresa: "Pícalo todo con cariño, cariño. Y si tienes un culito de vino blanco que te haya sobrado en la nevera, échale un chorrito y déjalo evaporar.",
            molecular: "Buscamos inducir la Reacción de Maillard entre los aminoácidos y los azúcares reductores de la carne de pollo a 140°C-165°C para generar compuestos aromáticos de alta complejidad."
        }
    },
    {
        id: "bizcocho_manzana",
        title: "Bizcocho Esponjoso de Manzana Casero",
        time: "40 min",
        difficulty: "Media",
        calories: "290 kcal/porción",
        matchedTags: ["manzana", "harina", "huevos", "leche"],
        ingredients: [
            { name: "Manzanas", qty: "2 piezas", tag: "manzana" },
            { name: "Harina de Trigo", qty: "200g", tag: "harina" },
            { name: "Huevos", qty: "3 unidades", tag: "huevos" },
            { name: "Leche", qty: "100ml", tag: "leche" },
            { name: "Aceite de Oliva y Sal", qty: "60ml", tag: "aceite" }
        ],
        instructions: [
            "Precalentar el horno a 180°C con calor arriba y abajo.",
            "Batir los huevos enérgicamente hasta que blanqueen y doblen su volumen.",
            "Incorporar la harina tamizada y la leche poco a poco con movimientos envolventes.",
            "Cortar una manzana en láminas para la superficie y la otra en trocitos pequeños para mezclar dentro de la masa.",
            "Hornear durante 35-40 minutos hasta que al pinchar con un palillo salga completamente seco."
        ],
        chefAdvice: {
            gordon: "¡No abras el horno durante los primeros 25 minutos bajo ninguna circunstancia! Si dejas entrar aire frío el bizcocho colapsará en el centro y parecerá un cráter. Paciencia y técnica.",
            teresa: "El secreto de mi madre: espolvorea una cucharadita de canela y una pizca de azúcar sobre las láminas de manzana antes de meterlo al horno. Quedará caramelizado y delicioso.",
            molecular: "La retención de aire por desnaturalización mecánica de la ovoalbúmina en los huevos crea la matriz alveolar del bizcocho, mientras que la pectina de la manzana aporta humedad controlada sin apelmazar el gluten."
        }
    }
];

let selectedChef = 'gordon';
let timerInterval = null;
let timerSeconds = 0;

document.addEventListener('DOMContentLoaded', () => {
    if (window.lucide) window.lucide.createIcons();

    renderIngredientsCloud();
    setupChefSelector();
    setupCustomIngredient();

    const btnGenerate = document.getElementById('btnGenerateRecipe');
    if (btnGenerate) {
        btnGenerate.addEventListener('click', generateRecipe);
    }

    const btnTimer = document.getElementById('btnStartTimer');
    if (btnTimer) {
        btnTimer.addEventListener('click', toggleTimer);
    }
});

function renderIngredientsCloud() {
    const cloud = document.getElementById('ingredientsCloud');
    if (!cloud) return;

    cloud.innerHTML = userIngredients.map((item, idx) => `
        <button class="ing-chip ${item.selected ? 'active' : ''}" data-idx="${idx}">
            ${item.selected ? '✓ ' : '+ '} ${item.name}
        </button>
    `).join('');

    const countEl = document.getElementById('activePantryCount');
    const selectedCount = userIngredients.filter(i => i.selected).length;
    if (countEl) countEl.textContent = selectedCount;

    document.querySelectorAll('.ing-chip').forEach(chip => {
        chip.addEventListener('click', () => {
            const idx = parseInt(chip.getAttribute('data-idx'));
            userIngredients[idx].selected = !userIngredients[idx].selected;
            renderIngredientsCloud();
        });
    });
}

function setupChefSelector() {
    const cards = document.querySelectorAll('.chef-card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            cards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            selectedChef = card.getAttribute('data-chef');
        });
    });
}

function setupCustomIngredient() {
    const input = document.getElementById('customIngredient');
    const btn = document.getElementById('btnAddIngredient');

    function add() {
        const val = input.value.trim();
        if (!val) return;
        const id = val.toLowerCase().replace(/\s+/g, '_');
        userIngredients.push({ id, name: val, selected: true });
        input.value = '';
        renderIngredientsCloud();
    }

    if (btn) btn.addEventListener('click', add);
    if (input) {
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') add();
        });
    }
}

function generateRecipe() {
    const placeholder = document.getElementById('recipePlaceholder');
    const loading = document.getElementById('recipeLoading');
    const display = document.getElementById('recipeDisplay');
    const thinkingText = document.getElementById('thinkingText');

    if (placeholder) placeholder.classList.add('hidden');
    if (display) display.classList.add('hidden');
    if (loading) loading.classList.remove('hidden');

    const chefNames = {
        gordon: "Chef Gordon",
        teresa: "la Abuela Teresa",
        molecular: "el Dr. Molecular"
    };

    if (thinkingText) {
        thinkingText.textContent = `Consultando despensa con ${chefNames[selectedChef]}...`;
    }

    setTimeout(() => {
        if (loading) loading.classList.add('hidden');
        if (display) display.classList.remove('hidden');

        // Elegir la receta que más coincida con los ingredientes seleccionados
        const activeTags = userIngredients.filter(i => i.selected).map(i => i.id);
        
        let bestRecipe = recipesDatabase[0];
        let maxMatches = -1;

        recipesDatabase.forEach(recipe => {
            const matches = recipe.matchedTags.filter(tag => activeTags.includes(tag)).length;
            if (matches > maxMatches) {
                maxMatches = matches;
                bestRecipe = recipe;
            }
        });

        renderRecipeDetails(bestRecipe);
    }, 650);
}

function renderRecipeDetails(recipe) {
    document.getElementById('recipeTitle').textContent = recipe.title;
    document.getElementById('recipeTime').innerHTML = `<i data-lucide="clock" class="badge-icon"></i> ${recipe.time}`;
    document.getElementById('recipeDifficulty').innerHTML = `<i data-lucide="award" class="badge-icon"></i> ${recipe.difficulty}`;
    document.getElementById('recipeCalories').innerHTML = `<i data-lucide="zap" class="badge-icon"></i> ${recipe.calories}`;

    const authorMap = {
        gordon: "Receta elaborada por Chef Gordon (Exigencia & Sabor)",
        teresa: "Receta casera de la Abuela Teresa (Aprovechamiento & Tradición)",
        molecular: "Fórmula gastronómica del Dr. Molecular (Química & Precisión)"
    };
    document.getElementById('recipeChefAuthor').textContent = authorMap[selectedChef];

    const avatarMap = { gordon: "🔥", teresa: "👵", molecular: "🧪" };
    document.getElementById('adviceAvatar').textContent = avatarMap[selectedChef];
    document.getElementById('adviceTitle').textContent = `Consejo de ${selectedChef === 'gordon' ? 'Chef Gordon' : selectedChef === 'teresa' ? 'Abuela Teresa' : 'Dr. Molecular'}:`;
    document.getElementById('adviceText').textContent = recipe.chefAdvice[selectedChef];

    // Cruzar ingredientes
    const activeTags = userIngredients.filter(i => i.selected).map(i => i.id);
    const ingList = document.getElementById('recipeIngList');
    
    ingList.innerHTML = recipe.ingredients.map(ing => {
        const inPantry = activeTags.includes(ing.tag);
        return `
            <li class="recipe-ing-item ${inPantry ? 'in-pantry' : 'missing'}">
                <span class="ing-check">${inPantry ? '✓' : '○'}</span>
                <span><strong>${ing.name}</strong>: ${ing.qty} ${inPantry ? '' : '<small style="color: #71717A;">(Falta comprar)</small>'}</span>
            </li>
        `;
    }).join('');

    // Pasos
    const stepsList = document.getElementById('recipeStepsList');
    stepsList.innerHTML = recipe.instructions.map(step => `
        <li>${step}</li>
    `).join('');

    if (window.lucide) window.lucide.createIcons();
}

function toggleTimer() {
    const btnText = document.getElementById('timerText');
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
        btnText.textContent = "Reanudar Temporizador";
    } else {
        if (timerSeconds === 0) timerSeconds = 15 * 60; // 15 minutos
        timerInterval = setInterval(() => {
            timerSeconds--;
            const mins = Math.floor(timerSeconds / 60);
            const secs = timerSeconds % 60;
            btnText.textContent = `⏱ ${mins}:${secs < 10 ? '0' : ''}${secs}`;

            if (timerSeconds <= 0) {
                clearInterval(timerInterval);
                timerInterval = null;
                btnText.textContent = "¡Tiempo cumplido!";
                alert("🔔 ¡El tiempo de cocción ha finalizado!");
            }
        }, 1000);
    }
}
