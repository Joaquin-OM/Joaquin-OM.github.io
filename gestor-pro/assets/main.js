/**
 * GESTOR-PRO — LÓGICA INTERACTIVA DEL DASHBOARD
 */

const mockClients = [
    { name: "Construcciones Balear SL", nif: "B57123456", regime: "General (SL)", trim: "1T 2026", base: "18.450 €", status: "al-dia", statusLabel: "Al día" },
    { name: "Restaurante Ca'n Toni", nif: "E07889912", regime: "Módulos", trim: "1T 2026", base: "12.800 €", status: "al-dia", statusLabel: "Al día" },
    { name: "Laura Martínez (Diseño)", nif: "43219876X", regime: "Autónomo (EDS)", trim: "1T 2026", base: "6.900 €", status: "revision", statusLabel: "En revisión" },
    { name: "Rent-a-Scooter Mallorca", nif: "B57990011", regime: "General (SL)", trim: "1T 2026", base: "24.100 €", status: "al-dia", statusLabel: "Al día" },
    { name: "Fincas & Villas Tramuntana", nif: "B57443322", regime: "General (SL)", trim: "1T 2026", base: "31.200 €", status: "pendiente", statusLabel: "Falta doc." },
    { name: "Clínica Dental Ponent", nif: "B57881122", regime: "Exento Sanidad", trim: "1T 2026", base: "14.500 €", status: "al-dia", statusLabel: "Al día" }
];

const mockRawFiles = [
    { raw: "scan_0041_factura.pdf", size: "1.4 MB", type: "pdf", nif: "B57123456", cat: "PROVEEDOR", target: "2026_T1_B57123456_FACT_PROV_01.pdf" },
    { raw: "recibo repsol diesel marzo.jpg", size: "840 KB", type: "jpg", nif: "B57123456", cat: "COMBUSTIBLE", target: "2026_T1_B57123456_COMB_MARZO.pdf" },
    { raw: "nomina_feb2026_firmada.pdf", size: "320 KB", type: "pdf", nif: "B57123456", cat: "NOMINAS", target: "2026_T1_B57123456_NOM_FEB.pdf" },
    { raw: "extracto_cuenta_santander_q1.xlsx", size: "45 KB", type: "xlsx", nif: "B57123456", cat: "BANCO", target: "2026_T1_B57123456_EXTRACTO_BANCO.xlsx" },
    { raw: "alquiler_local_marzo.pdf", size: "512 KB", type: "pdf", nif: "B57123456", cat: "ALQUILER", target: "2026_T1_B57123456_MOD115_ARREND.pdf" }
];

document.addEventListener('DOMContentLoaded', () => {
    // 1. Inicializar Iconos Lucide
    if (window.lucide) {
        window.lucide.createIcons();
    }

    // 2. Control de Pestañas
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            btn.classList.add('active');
            const target = btn.getAttribute('data-tab');
            const targetContent = document.getElementById(`tab-${target}`);
            if (targetContent) targetContent.classList.add('active');

            if (window.lucide) window.lucide.createIcons();
        });
    });

    // 3. Renderizar Tabla de Clientes
    renderClientsTable(mockClients);

    // Búsqueda en tiempo real
    const searchInput = document.getElementById('clientSearch');
    const statusSelect = document.getElementById('statusFilter');

    function filterClients() {
        const query = (searchInput?.value || '').toLowerCase().trim();
        const status = statusSelect?.value || 'all';

        const filtered = mockClients.filter(c => {
            const matchesQuery = c.name.toLowerCase().includes(query) || c.nif.toLowerCase().includes(query) || c.regime.toLowerCase().includes(query);
            const matchesStatus = status === 'all' || c.status === status;
            return matchesQuery && matchesStatus;
        });

        renderClientsTable(filtered);
    }

    if (searchInput) searchInput.addEventListener('input', filterClients);
    if (statusSelect) statusSelect.addEventListener('change', filterClients);

    // 4. Herramienta de Renombrado Masivo
    initSorterTool();

    // 5. Calculadora Fiscal
    initFiscalCalculator();

    // 6. Botón recarga datos
    const btnReload = document.getElementById('btnReloadData');
    if (btnReload) {
        btnReload.addEventListener('click', () => {
            if (searchInput) searchInput.value = '';
            if (statusSelect) statusSelect.value = 'all';
            renderClientsTable(mockClients);
            initSorterTool();
            alert('Datos restaurados al estado inicial.');
        });
    }
});

function renderClientsTable(clients) {
    const tbody = document.getElementById('clientsTableBody');
    if (!tbody) return;

    if (clients.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" style="text-align: center; color: var(--text-muted); padding: 2rem;">No se encontraron clientes con esos criterios.</td></tr>`;
        return;
    }

    tbody.innerHTML = clients.map(client => {
        let badgeClass = 'badge-ok';
        if (client.status === 'revision') badgeClass = 'badge-warn';
        if (client.status === 'pendiente') badgeClass = 'badge-danger';

        return `
            <tr>
                <td class="client-name-cell">${client.name}</td>
                <td><code>${client.nif}</code></td>
                <td>${client.regime}</td>
                <td>${client.trim}</td>
                <td style="font-weight: 600; color: var(--text-white);">${client.base}</td>
                <td><span class="badge-status ${badgeClass}">${client.statusLabel}</span></td>
                <td>
                    <button class="btn btn-outline btn-xs btn-view-client" data-name="${client.name}">
                        Expediente
                    </button>
                </td>
            </tr>
        `;
    }).join('');

    document.querySelectorAll('.btn-view-client').forEach(btn => {
        btn.addEventListener('click', () => {
            const name = btn.getAttribute('data-name');
            alert(`Expediente de "${name}":\n\n• Documentación 1T 2026 vinculada.\n• Asesor asignado: Joaquín Oses.\n• Conexión directa a AEAT simulada.`);
        });
    });
}

function initSorterTool() {
    const rawBox = document.getElementById('rawFileList');
    const renamedBox = document.getElementById('renamedFileList');
    const btnProcess = document.getElementById('btnProcessBatch');
    const statusBox = document.getElementById('processStatus');
    const countTag = document.getElementById('processedCount');
    const btnLoad = document.getElementById('btnLoadMockBatch');

    function renderRaw() {
        if (!rawBox) return;
        rawBox.innerHTML = mockRawFiles.map(f => `
            <div class="file-item">
                <div class="file-item-left">
                    <i data-lucide="file" class="file-icon"></i>
                    <span>${f.raw}</span>
                </div>
                <span style="color: var(--text-muted); font-size: 0.72rem;">${f.size}</span>
            </div>
        `).join('');

        if (renamedBox) {
            renamedBox.className = 'file-list-box empty-state';
            renamedBox.innerHTML = `<p>Haz clic en "Ejecutar Renombrado Inteligente" para ver el resultado normalizado.</p>`;
        }
        if (countTag) countTag.textContent = '0 procesados';
        if (window.lucide) window.lucide.createIcons();
    }

    renderRaw();

    if (btnLoad) {
        btnLoad.addEventListener('click', renderRaw);
    }

    if (btnProcess) {
        btnProcess.addEventListener('click', () => {
            if (!statusBox || !renamedBox) return;

            statusBox.classList.remove('hidden');
            btnProcess.disabled = true;

            setTimeout(() => {
                statusBox.classList.add('hidden');
                btnProcess.disabled = false;

                renamedBox.className = 'file-list-box';
                renamedBox.innerHTML = mockRawFiles.map(f => `
                    <div class="file-item renamed">
                        <div class="file-item-left">
                            <i data-lucide="check" class="file-icon" style="color: #34D399;"></i>
                            <span>${f.target}</span>
                        </div>
                        <span style="color: #A1A1AA; font-size: 0.72rem;">Listo</span>
                    </div>
                `).join('');

                if (countTag) countTag.textContent = `${mockRawFiles.length} archivos organizados`;
                if (window.lucide) window.lucide.createIcons();
            }, 750);
        });
    }
}

function initFiscalCalculator() {
    const ingresosInput = document.getElementById('calcIngresos');
    const gastosInput = document.getElementById('calcGastos');
    const irpfSelect = document.getElementById('calcTipoIrpf');

    const resIvaRep = document.getElementById('resIvaRep');
    const resIvaSop = document.getElementById('resIvaSop');
    const resMod303 = document.getElementById('resMod303');
    const resIrpfSufrido = document.getElementById('resIrpfSufrido');
    const resRendimiento = document.getElementById('resRendimiento');

    function updateCalculations() {
        const ingresos = parseFloat(ingresosInput?.value || 0);
        const gastos = parseFloat(gastosInput?.value || 0);
        const irpfPct = parseFloat(irpfSelect?.value || 15);

        const ivaRepercutido = ingresos * 0.21;
        const ivaSoportado = gastos * 0.21;
        const resultadoMod303 = ivaRepercutido - ivaSoportado;

        const retencionIrpf = ingresos * (irpfPct / 100);
        const rendimientoNeto = ingresos - gastos;

        const fmt = (num) => new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(num);

        if (resIvaRep) resIvaRep.textContent = `+${fmt(ivaRepercutido)}`;
        if (resIvaSop) resIvaSop.textContent = `-${fmt(ivaSoportado)}`;
        if (resMod303) resMod303.textContent = fmt(resultadoMod303);
        if (resIrpfSufrido) resIrpfSufrido.textContent = `-${fmt(retencionIrpf)}`;
        if (resRendimiento) resRendimiento.textContent = fmt(rendimientoNeto);
    }

    [ingresosInput, gastosInput, irpfSelect].forEach(el => {
        if (el) el.addEventListener('input', updateCalculations);
    });

    updateCalculations();
}
