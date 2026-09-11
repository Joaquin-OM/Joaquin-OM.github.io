(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const h=[{id:"pmi",name:"Aeropuerto de Palma de Mallorca (PMI)",fee:0},{id:"palma_maritimo",name:"Palma — Paseo Marítimo",fee:0},{id:"alcudia",name:"Port d'Alcúdia / Can Picafort",fee:15},{id:"manacor",name:"Manacor / Cala Millor",fee:20},{id:"hotel",name:"Entrega en Hotel / Villa",fee:25}],f=[{id:1,brand:"Vespa",model:"GTS 300 Super",category:"scooters",license:"A2 / B (+3 años)",engine:"300cc • 24 CV",price:45,deposit:300,image:"https://images.unsplash.com/photo-1525160354320-d8e92641c563?q=80&w=1200&auto=format&fit=crop",tag:"Más popular en Palma",features:["Baúl para 2 cascos","Caja automática","Consumo 3.2L/100km","Cargador USB"]},{id:2,brand:"BMW",model:"R 1250 GS Adventure",category:"trail",license:"Carnet A",engine:"1254cc • 136 CV",price:135,deposit:900,image:"https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=1200&auto=format&fit=crop",tag:"Ideal Serra de Tramuntana",features:["Modos Pro de conducción","Maletas de aluminio","Puños calefactables","Navegador GPS"]},{id:3,brand:"Yamaha",model:"MT-07 Pure",category:"naked",license:"Carnet A2 / A",engine:"689cc • 74 CV",price:75,deposit:500,image:"https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?q=80&w=1200&auto=format&fit=crop",tag:"Ágil y divertida",features:["Motor CP2 bicilíndrico","Frenos ABS dobles","Peso pluma (184 kg)","Pantalla digital LCD"]},{id:4,brand:"Ducati",model:"Panigale V4 S",category:"sport",license:"Carnet A",engine:"1103cc • 214 CV",price:190,deposit:1200,image:"https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=1200&auto=format&fit=crop",tag:"Exclusividad y potencia",features:["Suspensión Öhlins Smart","Quick Shift bidireccional","Chasis monocasco","Frenos Brembo Stylema"]},{id:5,brand:"Triumph",model:"Bonneville T120 Black",category:"classic",license:"Carnet A",engine:"1200cc • 80 CV",price:95,deposit:600,image:"https://images.unsplash.com/photo-1508974239320-0a029497e820?q=80&w=1200&auto=format&fit=crop",tag:"Estilo retro elegante",features:["Par motor brutal a bajas rpm","Control de tracción","Embrague asistido","Acabado Dark Edition"]},{id:6,brand:"Harley-Davidson",model:"Iron 883 Sportster",category:"custom",license:"Carnet A2 / A",engine:"883cc • Evolution V-Twin",price:90,deposit:600,image:"https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1200&auto=format&fit=crop",tag:"Sonido icónico",features:["Asiento bajo accesible","Escape custom homologado","Posición cruiser relajada","Estilo bobber"]}];let r="all",l=null;function y(){const s=document.querySelector("#app");s.innerHTML=`
      <!-- Navbar Minimalista -->
      <nav class="navbar">
        <div class="container flex-between">
          <a href="#" class="logo-wrap">
            <span class="logo-badge">MALLORCA</span>
            <span class="logo-text">MOTO-RENT</span>
            <span class="logo-sub">| Flota Premium</span>
          </a>
          <div class="nav-actions">
            <a href="https://wa.me/34695267445?text=Hola%20Moto-Rent%2C%20quisiera%20consultar%20disponibilidad" target="_blank" class="btn btn-sm btn-outline">
              WhatsApp Directo
            </a>
            <a href="#flota" class="btn btn-sm btn-primary">
              Ver Flota
            </a>
          </div>
        </div>
      </nav>

      <!-- Hero -->
      <header class="hero">
        <div class="container">
          <div class="hero-pill">
            <span class="hero-pill-dot"></span>
            <span>Temporada 2026 • Entrega en Aeropuerto de Palma y Hoteles</span>
          </div>

          <h1 class="hero-title">
            Alquiler de motos y scooters de gama alta en Mallorca.
          </h1>

          <p class="hero-description">
            Recorre la Serra de Tramuntana y las mejores calas de la isla sin atascos. Flota revisada con seguro incluido, kilometraje ilimitado y reserva directa sin comisiones de intermediarios.
          </p>

          <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
            <a href="#flota" class="btn btn-primary">Explorar modelos</a>
            <a href="https://wa.me/34695267445?text=Hola%2C%20deseo%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20alquiler%20de%20motos" target="_blank" class="btn btn-outline">Consultar dudas</a>
          </div>

          <div class="hero-features-bar">
            <div class="hf-item">
              <svg class="hf-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
              <span>Kilometraje ilimitado</span>
            </div>
            <div class="hf-item">
              <svg class="hf-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              <span>Recogida exprés en aeropuerto (PMI)</span>
            </div>
            <div class="hf-item">
              <svg class="hf-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
              <span>Casco y candado de disco incluidos</span>
            </div>
          </div>
        </div>
      </header>

      <!-- Flota Section -->
      <section id="flota" class="fleet-section">
        <div class="container">
          <div class="section-header-wrap">
            <div>
              <h2 class="section-title">Nuestra Flota</h2>
              <p class="section-sub">Modelos verificados con mantenimiento oficial al día.</p>
            </div>

            <div class="category-tabs" id="catTabs">
              <button class="cat-btn ${r==="all"?"active":""}" data-cat="all">Todos</button>
              <button class="cat-btn ${r==="scooters"?"active":""}" data-cat="scooters">Scooters</button>
              <button class="cat-btn ${r==="trail"?"active":""}" data-cat="trail">Trail / Aventura</button>
              <button class="cat-btn ${r==="naked"?"active":""}" data-cat="naked">Naked</button>
              <button class="cat-btn ${r==="sport"?"active":""}" data-cat="sport">Deportivas</button>
              <button class="cat-btn ${r==="classic"?"active":""}" data-cat="classic">Clásicas & Custom</button>
            </div>
          </div>

          <div class="bike-grid" id="bikeGrid">
            <!-- Inyectado dinámicamente -->
          </div>
        </div>
      </section>

      <!-- Modal de Reserva Interactiva -->
      <div id="bookingModal" class="modal-backdrop hidden">
        <div class="modal-box">
          <button id="closeModal" class="close-btn" aria-label="Cerrar modal">&times;</button>
          
          <div class="modal-header">
            <h3 class="modal-title" id="modalBikeName">Reservar Moto</h3>
            <p class="modal-subtitle" id="modalBikeDetails">Configura los días y extras de tu alquiler.</p>
          </div>

          <form id="bookingForm">
            <div class="form-group">
              <label class="form-label">Punto de Recogida / Devolución</label>
              <select id="pickupLocation" class="form-select">
                ${h.map(n=>`
                  <option value="${n.id}" data-fee="${n.fee}">${n.name} ${n.fee>0?`(+${n.fee} €)`:"(Sin coste)"}</option>
                `).join("")}
              </select>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label class="form-label">Fecha de Inicio</label>
                <input type="date" id="startDate" class="form-input" required>
              </div>
              <div class="form-group">
                <label class="form-label">Fecha de Fin</label>
                <input type="date" id="endDate" class="form-input" required>
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">Nombre y Apellidos</label>
              <input type="text" id="clientName" class="form-input" placeholder="Ej: Carlos Gómez" required>
            </div>

            <div class="form-group">
              <label class="form-label">Extras Opcionales</label>
              <div class="extras-wrap">
                <label class="extra-checkbox-card">
                  <div class="extra-left">
                    <input type="checkbox" id="extraHelmet" value="5">
                    <div>
                      <div class="extra-info">Casco de Pasajero Adicional</div>
                      <div class="extra-sub">Homologado ECE 22.06</div>
                    </div>
                  </div>
                  <span class="extra-price">+5 €/día</span>
                </label>

                <label class="extra-checkbox-card">
                  <div class="extra-left">
                    <input type="checkbox" id="extraInsurance" value="12">
                    <div>
                      <div class="extra-info">Seguro Premium Todo Riesgo</div>
                      <div class="extra-sub">Cero franquicia y asistencia en carretera 24h</div>
                    </div>
                  </div>
                  <span class="extra-price">+12 €/día</span>
                </label>

                <label class="extra-checkbox-card">
                  <div class="extra-left">
                    <input type="checkbox" id="extraGps" value="4">
                    <div>
                      <div class="extra-info">Soporte Móvil Antivibración + USB</div>
                      <div class="extra-sub">Para navegación GPS en ruta</div>
                    </div>
                  </div>
                  <span class="extra-price">+4 €/día</span>
                </label>
              </div>
            </div>

            <div class="total-summary-card">
              <div class="ts-row">
                <span>Días de alquiler:</span>
                <span id="sumDays">1 día</span>
              </div>
              <div class="ts-row">
                <span>Tarifa base:</span>
                <span id="sumBase">0 €</span>
              </div>
              <div class="ts-row">
                <span>Suplementos y Extras:</span>
                <span id="sumExtras">0 €</span>
              </div>
              <div class="ts-row" style="font-size: 0.8rem; color: #71717A;">
                <span>Fianza reembolsable (se bloquea en tarjeta):</span>
                <span id="sumDeposit">0 €</span>
              </div>
              <div class="ts-total-row">
                <span>Total Estimado:</span>
                <span id="sumTotal">0 €</span>
              </div>
            </div>

            <button type="submit" class="btn btn-primary btn-block" style="padding: 0.9rem;">
              Confirmar y Enviar Reserva a WhatsApp
            </button>
          </form>
        </div>
      </div>

      <!-- Footer -->
      <footer class="footer">
        <div class="container">
          <p>Moto-Rent Mallorca &bull; Demostración desarrollada por Joaquín Oses Monti.</p>
        </div>
      </footer>
    `,E(),g()}function g(){const s=document.getElementById("bikeGrid");if(!s)return;const n=f.filter(a=>r==="all"?!0:r==="scooters"?a.category==="scooters":r==="trail"?a.category==="trail":r==="naked"?a.category==="naked":r==="sport"?a.category==="sport":r==="classic"?a.category==="classic"||a.category==="custom":!0);s.innerHTML=n.map(a=>`
        <article class="bike-card">
          <div class="card-img-wrap">
            <img src="${a.image}" alt="${a.brand} ${a.model}" class="card-img" loading="lazy">
            <span class="card-tag">${a.tag}</span>
          </div>

          <div class="card-body">
            <div class="card-header-row">
              <span class="bike-brand">${a.brand}</span>
              <span class="chip" style="font-size: 0.7rem;">${a.license}</span>
            </div>
            
            <h3 class="bike-model">${a.model}</h3>
            <div class="bike-engine">${a.engine}</div>

            <div class="features-chips">
              ${a.features.map(o=>`<span class="chip">${o}</span>`).join("")}
            </div>

            <div class="card-footer">
              <div class="price-box">
                <span class="price-num">${a.price} €</span>
                <span class="price-unit">/día</span>
              </div>
              <button class="btn btn-primary btn-sm btn-open-modal" data-id="${a.id}">
                Reservar
              </button>
            </div>
          </div>
        </article>
    `).join(""),document.querySelectorAll(".btn-open-modal").forEach(a=>{a.addEventListener("click",()=>{const o=parseInt(a.getAttribute("data-id")),e=f.find(t=>t.id===o);e&&x(e)})})}function x(s){l=s;const n=document.getElementById("bookingModal"),a=document.getElementById("modalBikeName"),o=document.getElementById("modalBikeDetails");a.textContent=`${s.brand} ${s.model}`,o.textContent=`${s.engine} • ${s.price} €/día • Fianza: ${s.deposit} €`;const e=new Date,t=new Date;t.setDate(e.getDate()+2);const i=document.getElementById("startDate"),c=document.getElementById("endDate");i.value=e.toISOString().split("T")[0],c.value=t.toISOString().split("T")[0],i.min=e.toISOString().split("T")[0],c.min=e.toISOString().split("T")[0],b(),n.classList.remove("hidden")}function b(){if(!l)return;const s=document.getElementById("startDate").value,n=document.getElementById("endDate").value,a=document.getElementById("pickupLocation"),o=a.options[a.selectedIndex],e=parseFloat(o?.getAttribute("data-fee")||0);let t=1;if(s&&n){const p=new Date(s),v=new Date(n)-p;t=Math.max(1,Math.ceil(v/(1e3*60*60*24)))}let i=0;document.getElementById("extraHelmet").checked&&(i+=5),document.getElementById("extraInsurance").checked&&(i+=12),document.getElementById("extraGps").checked&&(i+=4);const c=l.price*t,m=i*t+e,u=c+m;document.getElementById("sumDays").textContent=`${t} día${t>1?"s":""}`,document.getElementById("sumBase").textContent=`${c} € (${l.price} €/d)`,document.getElementById("sumExtras").textContent=`${m} €`,document.getElementById("sumDeposit").textContent=`${l.deposit} €`,document.getElementById("sumTotal").textContent=`${u} €`}function E(){document.querySelectorAll(".cat-btn").forEach(o=>{o.addEventListener("click",()=>{document.querySelectorAll(".cat-btn").forEach(e=>e.classList.remove("active")),o.classList.add("active"),r=o.getAttribute("data-cat"),g()})});const s=document.getElementById("bookingModal"),n=document.getElementById("closeModal");n&&n.addEventListener("click",()=>s.classList.add("hidden")),window.addEventListener("click",o=>{o.target===s&&s.classList.add("hidden")}),["startDate","endDate","pickupLocation","extraHelmet","extraInsurance","extraGps"].forEach(o=>{const e=document.getElementById(o);e&&e.addEventListener("change",b)});const a=document.getElementById("bookingForm");a&&a.addEventListener("submit",o=>{if(o.preventDefault(),!l)return;const e=document.getElementById("clientName").value.trim(),t=document.getElementById("startDate").value,i=document.getElementById("endDate").value,c=document.getElementById("pickupLocation"),m=c.options[c.selectedIndex].text,u=document.getElementById("sumTotal").textContent,p=document.getElementById("sumDays").textContent,d=[];document.getElementById("extraHelmet").checked&&d.push("Casco extra"),document.getElementById("extraInsurance").checked&&d.push("Seguro todo riesgo"),document.getElementById("extraGps").checked&&d.push("Soporte GPS");const v=`Hola Moto-Rent Mallorca, deseo solicitar la reserva de una moto:

• *Modelo:* ${l.brand} ${l.model}
• *Cliente:* ${e}
• *Periodo:* ${t} al ${i} (${p})
• *Lugar recogida:* ${m}
`+(d.length>0?`• *Extras:* ${d.join(", ")}
`:"")+`• *Total estimado:* ${u}
• *Fianza:* ${l.deposit} €

¿Tienen disponibilidad para estas fechas?`;window.open(`https://wa.me/34695267445?text=${encodeURIComponent(v)}`,"_blank"),s.classList.add("hidden")})}document.addEventListener("DOMContentLoaded",y);
