/* ==========================================================================
   LUCMAR — Lógica del sitio (HTML/CSS/JS puro)
   ========================================================================== */
(function () {
  "use strict";

  /* ---------- Iconos SVG inline ---------- */
  const ICON = {
    wa: '<svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true"><path d="M16 3C9.4 3 4 8.3 4 14.9c0 2.4.7 4.6 1.9 6.5L4 29l7-1.8c1.8 1 3.9 1.5 6 1.5 6.6 0 12-5.3 12-11.9S22.6 3 16 3zm0 21.7c-1.9 0-3.7-.5-5.3-1.4l-.4-.2-4.1 1.1 1.1-4-.3-.4a9.6 9.6 0 01-1.5-5.1c0-5.4 4.4-9.8 9.9-9.8 5.4 0 9.9 4.4 9.9 9.8s-4.5 9.9-9.9 9.9zm5.5-7.4c-.3-.2-1.8-.9-2-1-.3-.1-.5-.2-.7.1-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.5-.6c.2-.2.2-.3.3-.5.1-.2.1-.4 0-.6l-1-2.3c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.3 5.2 4.6.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.1-.3-.2-.6-.4z"/></svg>',
    cart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/></svg>',
    user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
    heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>',
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>',
    menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>',
    chevL: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>',
    chevR: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
    truck: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M1 3h15v13H1zM16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>',
    shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5z"/><path d="m9 12 2 2 4-4"/></svg>',
    medal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="9" r="6"/><path d="M8.2 13.9 7 22l5-3 5 3-1.2-8.1"/></svg>',
    chat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
    filter: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 3H2l8 9.5V19l4 2v-8.5z"/></svg>',
    box: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8 12 3 3 8v8l9 5 9-5z"/><path d="M3 8l9 5 9-5M12 13v8"/></svg>',
    ret: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/></svg>',
    fb: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 9h3l.5-3H14V4.5c0-.9.3-1.5 1.6-1.5H17V.2C16.7.1 15.6 0 14.4 0 11.9 0 10 1.5 10 4.3V6H7v3h3v9h4z"/></svg>',
    ig: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>',
    tk: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 2c.3 2.3 1.9 4.1 4 4.4v3c-1.5 0-2.9-.4-4-1.2v6.6A6.4 6.4 0 1 1 9.6 8.4v3.1a3.3 3.3 0 1 0 3.3 3.3V2z"/></svg>',
  };

  /* ---------- Utilidades ---------- */
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
  const money = (n) => `${LUCMAR.currency} ${n.toLocaleString("es-BO")}`;
  const uImgSafe = (id, w) => (id && /^\d/.test(id)) ? uImg(id, w) : id; // acepta IDs Unsplash o rutas locales

  // Placeholder branded (data URI) por si una imagen no carga
  function placeholder(label) {
    const t = (label || "Lucmar").slice(0, 26);
    const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='600' height='600'>
      <rect width='600' height='600' fill='#eef2f7'/>
      <rect x='0' y='0' width='600' height='600' fill='url(#g)' opacity='.5'/>
      <defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
        <stop offset='0' stop-color='#f6f8fb'/><stop offset='1' stop-color='#dde5ef'/></linearGradient></defs>
      <text x='50%' y='46%' font-family='Segoe UI, sans-serif' font-size='40' font-weight='800' fill='#1f4272' text-anchor='middle'>Lucmar</text>
      <text x='50%' y='55%' font-family='Segoe UI, sans-serif' font-size='20' fill='#64748b' text-anchor='middle'>${t}</text>
    </svg>`;
    return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
  }
  function imgTag(id, alt, w, cls = "") {
    const src = uImgSafe(id, w);
    const ph = placeholder(alt).replace(/"/g, "&quot;");
    return `<img src="${src}" alt="${alt}" loading="lazy" decoding="async" ${cls ? `class="${cls}"` : ""} onerror="this.onerror=null;this.src='${ph}'">`;
  }

  /* ---------- WhatsApp ---------- */
  function waLink(message) {
    return `https://wa.me/${LUCMAR.whatsapp}?text=${encodeURIComponent(message)}`;
  }
  function waProduct(p) {
    const url = `${location.origin}${location.pathname.replace(/[^/]*$/, "")}producto.html?id=${p.id}`;
    return waLink(
      `¡Hola ${LUCMAR.brand}! 👋 Me interesa este producto:\n\n` +
      `🛒 *${p.name}*\n` +
      `💲 Precio: ${money(p.price)}\n` +
      `🔗 ${url}\n\n` +
      `¿Está disponible? ¿Me pueden dar más información?`
    );
  }

  const catName = (slug) => (CATEGORIES.find((c) => c.slug === slug) || {}).name || "";

  /* ---------- Estrellas ---------- */
  function stars(rating, reviews) {
    const p = (rating / 5) * 100;
    return `<span class="rating"><span class="stars" style="--p:${p}%"><i></i></span>
      <span>${rating.toFixed(1)}${reviews != null ? ` (${reviews})` : ""}</span></span>`;
  }

  /* ---------- Tarjeta de producto ---------- */
  function productCard(p) {
    const badge = p.badge
      ? `<span class="product-card__badge ${p.badge === "Nuevo" ? "new" : ""}">${p.badge}</span>` : "";
    const was = p.oldPrice ? `<span class="was">${money(p.oldPrice)}</span>` : "";
    return `<article class="product-card">
      <div class="product-card__media">
        ${badge}
        <button class="product-card__wish" aria-label="Añadir a favoritos">${ICON.heart}</button>
        <a href="producto.html?id=${p.id}" aria-label="Ver ${p.name}">${imgTag(p.img, p.name, 500)}</a>
      </div>
      <div class="product-card__body">
        <span class="product-card__cat">${catName(p.cat)}</span>
        <h3 class="product-card__name"><a href="producto.html?id=${p.id}">${p.name}</a></h3>
        ${stars(p.rating, p.reviews)}
        <div class="product-card__price"><span class="now">${money(p.price)}</span>${was}</div>
        <a class="btn btn-wa btn-block product-card__cta" href="${waProduct(p)}" target="_blank" rel="noopener"
           data-wa aria-label="Pedir ${p.name} por WhatsApp">${ICON.wa} Pedir por WhatsApp</a>
      </div>
    </article>`;
  }

  /* ---------- Toast ---------- */
  let toastTimer;
  function toast(msg) {
    let el = $(".toast");
    if (!el) { el = document.createElement("div"); el.className = "toast"; document.body.appendChild(el); }
    el.innerHTML = `${ICON.wa}<span>${msg}</span>`;
    requestAnimationFrame(() => el.classList.add("show"));
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove("show"), 3200);
  }
  function bindWaToast(scope = document) {
    $$("[data-wa]", scope).forEach((a) => {
      if (a.dataset.bound) return; a.dataset.bound = "1";
      a.addEventListener("click", () => toast("Abriendo WhatsApp con el equipo de ventas…"));
    });
  }

  /* ---------- Reveal on scroll ---------- */
  function initReveal() {
    const els = $$("[data-reveal], [data-reveal-stagger]");
    if (!("IntersectionObserver" in window) || !els.length) { els.forEach((e) => e.classList.add("in")); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const el = e.target;
        if (el.hasAttribute("data-reveal-stagger")) {
          $$(":scope > *", el).forEach((c, i) => { c.style.transitionDelay = `${Math.min(i * 70, 500)}ms`; });
        }
        el.classList.add("in"); io.unobserve(el);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });
    els.forEach((e) => io.observe(e));
  }

  /* ---------- Header / drawer móvil ---------- */
  function initChrome() {
    // rellenar iconos por data-icon
    $$("[data-icon]").forEach((el) => { el.innerHTML = ICON[el.dataset.icon] || ""; });

    // WhatsApp flotante
    const float = $(".wa-float");
    if (float) float.href = waLink(`¡Hola ${LUCMAR.brand}! 👋 Quisiera información sobre sus productos de oficina.`);

    // Drawer
    const burger = $(".burger");
    const drawer = $(".drawer");
    const backdrop = $(".drawer-backdrop");
    const openD = () => { drawer.classList.add("open"); backdrop.classList.add("open"); document.body.style.overflow = "hidden"; };
    const closeD = () => { drawer.classList.remove("open"); backdrop.classList.remove("open"); document.body.style.overflow = ""; };
    if (burger) burger.addEventListener("click", openD);
    if (backdrop) backdrop.addEventListener("click", closeD);
    $$("[data-close-drawer]").forEach((b) => b.addEventListener("click", closeD));

    // Búsqueda → catálogo
    $$("form[data-search]").forEach((f) => {
      f.addEventListener("submit", (e) => {
        e.preventDefault();
        const q = f.querySelector("input").value.trim();
        location.href = "catalogo.html" + (q ? `?q=${encodeURIComponent(q)}` : "");
      });
    });

    // año footer
    const y = $("[data-year]"); if (y) y.textContent = new Date().getFullYear();
  }

  /* ==========================================================================
     PÁGINA: HOME
     ========================================================================== */
  function initHome() {
    // categorías
    const cg = $("#cats-grid");
    if (cg) cg.innerHTML = CATEGORIES.map((c) =>
      `<a class="cat-card" href="catalogo.html?cat=${c.slug}">${imgTag(c.img, c.name, 500)}<span>${c.name}</span></a>`
    ).join("");

    // destacados (8 primeros con mejor rating)
    const fg = $("#featured-grid");
    if (fg) {
      const feat = [...PRODUCTS].sort((a, b) => b.rating - a.rating).slice(0, 8);
      fg.innerHTML = feat.map(productCard).join("");
    }

    // ofertas (con oldPrice)
    const og = $("#offers-grid");
    if (og) og.innerHTML = PRODUCTS.filter((p) => p.oldPrice).slice(0, 4).map(productCard).join("");

    initCarousel();
    bindWaToast();
  }

  /* ---------- Carrusel hero ---------- */
  function initCarousel() {
    const root = $("#hero-carousel");
    if (!root) return;
    const slides = $$(".hero-slide", root);
    const dotsWrap = $(".hero-dots", root);
    let i = 0, timer;
    dotsWrap.innerHTML = slides.map((_, k) => `<button aria-label="Ir a la diapositiva ${k + 1}"></button>`).join("");
    const dots = $$("button", dotsWrap);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function go(n) {
      slides[i].classList.remove("active"); dots[i].classList.remove("active");
      i = (n + slides.length) % slides.length;
      slides[i].classList.add("active"); dots[i].classList.add("active");
    }
    function auto() { if (reduce) return; clearInterval(timer); timer = setInterval(() => go(i + 1), 6000); }
    dots.forEach((d, k) => d.addEventListener("click", () => { go(k); auto(); }));
    $(".hero-arrow.next", root).addEventListener("click", () => { go(i + 1); auto(); });
    $(".hero-arrow.prev", root).addEventListener("click", () => { go(i - 1); auto(); });
    go(0); auto();
  }

  /* ==========================================================================
     PÁGINA: CATÁLOGO
     ========================================================================== */
  function initCatalog() {
    const grid = $("#catalog-grid");
    if (!grid) return;

    const params = new URLSearchParams(location.search);
    const state = {
      cats: new Set(params.get("cat") ? [params.get("cat")] : []),
      prices: new Set(),
      ratings: new Set(),
      q: params.get("q") || "",
      sort: "relevancia",
    };

    // Construir filtros de categoría
    const catFilters = $("#filter-cats");
    catFilters.innerHTML = CATEGORIES.map((c) => {
      const n = PRODUCTS.filter((p) => p.cat === c.slug).length;
      const checked = state.cats.has(c.slug) ? "checked" : "";
      return `<label class="filter-opt"><input type="checkbox" value="${c.slug}" data-f="cat" ${checked}>
        <span>${c.name}</span><span class="count">${n}</span></label>`;
    }).join("");

    // Filtros de precio
    $("#filter-prices").innerHTML = PRICE_RANGES.map((r, k) =>
      `<label class="filter-opt"><input type="checkbox" value="${k}" data-f="price"><span>${r.label}</span></label>`
    ).join("");

    // Filtros de valoración
    $("#filter-ratings").innerHTML = [4, 3, 2].map((r) =>
      `<label class="filter-opt"><input type="checkbox" value="${r}" data-f="rating">
        <span class="stars" style="--p:${(r / 5) * 100}%"><i></i></span><span>y más</span></label>`
    ).join("");

    // Buscador (si viene ?q)
    const searchInput = $("#catalog-search");
    if (searchInput) {
      searchInput.value = state.q;
      searchInput.addEventListener("input", (e) => { state.q = e.target.value; render(); });
    }

    // Listeners de filtros
    $$("input[data-f]").forEach((inp) => inp.addEventListener("change", (e) => {
      const set = { cat: state.cats, price: state.prices, rating: state.ratings }[e.target.dataset.f];
      const val = e.target.dataset.f === "cat" ? e.target.value : Number(e.target.value);
      e.target.checked ? set.add(val) : set.delete(val);
      render();
    }));

    // Orden
    $("#sort").addEventListener("change", (e) => { state.sort = e.target.value; render(); });

    // Filtros móvil (drawer)
    const filtersEl = $("#filters");
    $("#filter-open")?.addEventListener("click", () => { filtersEl.classList.add("open"); document.body.style.overflow = "hidden"; });
    $("#filter-close")?.addEventListener("click", () => { filtersEl.classList.remove("open"); document.body.style.overflow = ""; });

    function match(p) {
      if (state.cats.size && !state.cats.has(p.cat)) return false;
      if (state.prices.size) {
        const ok = [...state.prices].some((k) => p.price >= PRICE_RANGES[k].min && p.price < PRICE_RANGES[k].max);
        if (!ok) return false;
      }
      if (state.ratings.size) {
        const min = Math.min(...state.ratings);
        if (p.rating < min) return false;
      }
      if (state.q) {
        const t = (p.name + " " + catName(p.cat) + " " + p.desc).toLowerCase();
        if (!t.includes(state.q.toLowerCase())) return false;
      }
      return true;
    }
    function sortList(list) {
      const s = state.sort;
      if (s === "precio-asc") return list.sort((a, b) => a.price - b.price);
      if (s === "precio-desc") return list.sort((a, b) => b.price - a.price);
      if (s === "valoracion") return list.sort((a, b) => b.rating - a.rating);
      if (s === "novedades") return list.sort((a, b) => (b.badge === "Nuevo") - (a.badge === "Nuevo"));
      return list;
    }

    function render() {
      const list = sortList(PRODUCTS.filter(match));
      $("#result-count").textContent = list.length;
      if (!list.length) {
        grid.innerHTML = `<div class="empty-state">${ICON.search}
          <h3>Sin resultados</h3><p>Prueba con otros filtros o términos de búsqueda.</p></div>`;
      } else {
        grid.innerHTML = list.map(productCard).join("");
      }
      bindWaToast(grid);
      // sincronizar título
      const t = $("#catalog-title");
      if (t && state.cats.size === 1) t.textContent = catName([...state.cats][0]);
    }

    render();
  }

  /* ==========================================================================
     PÁGINA: FICHA DE PRODUCTO
     ========================================================================== */
  function initProduct() {
    const root = $("#pdp");
    if (!root) return;
    const id = new URLSearchParams(location.search).get("id");
    const p = PRODUCTS.find((x) => x.id === id) || PRODUCTS[0];

    document.title = `${p.name} — Lucmar`;
    const md = $('meta[name="description"]'); if (md) md.setAttribute("content", p.desc.slice(0, 155));

    // breadcrumbs
    $("#pdp-breadcrumbs").innerHTML =
      `<a href="index.html">Inicio</a><span class="sep">/</span>
       <a href="catalogo.html?cat=${p.cat}">${catName(p.cat)}</a><span class="sep">/</span>
       <span>${p.name}</span>`;

    const gallery = (p.gallery && p.gallery.length ? p.gallery : [p.img]);
    const off = p.oldPrice ? Math.round((1 - p.price / p.oldPrice) * 100) : 0;

    root.innerHTML = `
      <div class="pdp-gallery">
        <div class="pdp-gallery__main" id="pdp-main">${imgTag(gallery[0], p.name, 900)}</div>
        <div class="pdp-thumbs" id="pdp-thumbs">
          ${gallery.map((g, k) => `<button class="${k === 0 ? "active" : ""}" data-full="${uImgSafe(g, 900)}" aria-label="Vista ${k + 1}">${imgTag(g, p.name, 160)}</button>`).join("")}
        </div>
      </div>
      <div class="pdp-info">
        <span class="product-card__cat">${catName(p.cat)}</span>
        <h1>${p.name}</h1>
        ${stars(p.rating, p.reviews)}
        <div class="pdp-price" style="margin-top:1rem">
          <span class="now">${money(p.price)}</span>
          ${p.oldPrice ? `<span class="was">${money(p.oldPrice)}</span><span class="off">-${off}%</span>` : ""}
        </div>
        <p class="pdp-stock"><span class="dot"></span> En stock · listo para entrega</p>
        <p class="pdp-desc">${p.desc}</p>
        <ul class="pdp-features">
          ${p.features.map((f) => `<li>${ICON.check}<span>${f}</span></li>`).join("")}
        </ul>
        <div class="pdp-actions">
          <a class="btn btn-wa btn-lg btn-block" href="${waProduct(p)}" target="_blank" rel="noopener" data-wa>
            ${ICON.wa} Pedir por WhatsApp
          </a>
          <div class="row">
            <a class="btn btn-ghost btn-block" href="${waLink(`¡Hola ${LUCMAR.brand}! Tengo una consulta sobre *${p.name}*.`)}" target="_blank" rel="noopener" data-wa>
              ${ICON.chat} Hacer una consulta
            </a>
          </div>
          <p class="pdp-note">${ICON.shield} Te atiende directamente el equipo de ventas de Lucmar.</p>
        </div>
        <div class="pdp-perks">
          <div class="pdp-perk">${ICON.truck}<strong>Envío rápido</strong><span>A todo el país</span></div>
          <div class="pdp-perk">${ICON.medal}<strong>Garantía</strong><span>Productos originales</span></div>
          <div class="pdp-perk">${ICON.ret}<strong>Devoluciones</strong><span>Cambios sencillos</span></div>
        </div>
      </div>`;

    // galería: cambiar principal
    const mainImg = $("#pdp-main img");
    $$("#pdp-thumbs button").forEach((b) => b.addEventListener("click", () => {
      $$("#pdp-thumbs button").forEach((x) => x.classList.remove("active"));
      b.classList.add("active");
      mainImg.src = b.dataset.full;
    }));

    // relacionados
    const rel = $("#related-grid");
    if (rel) {
      const list = PRODUCTS.filter((x) => x.cat === p.cat && x.id !== p.id).slice(0, 4);
      const fill = list.length < 4 ? PRODUCTS.filter((x) => x.id !== p.id && !list.includes(x)).slice(0, 4 - list.length) : [];
      rel.innerHTML = [...list, ...fill].map(productCard).join("");
    }

    // JSON-LD dinámico del producto
    const ld = {
      "@context": "https://schema.org", "@type": "Product", name: p.name, description: p.desc,
      image: uImgSafe(p.img, 900), brand: { "@type": "Brand", name: "Lucmar" },
      aggregateRating: { "@type": "AggregateRating", ratingValue: p.rating, reviewCount: p.reviews },
      offers: { "@type": "Offer", price: p.price, priceCurrency: "BOB", availability: "https://schema.org/InStock" },
    };
    const s = document.createElement("script"); s.type = "application/ld+json"; s.textContent = JSON.stringify(ld);
    document.head.appendChild(s);

    bindWaToast(root);
  }

  /* ---------- Init ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    initChrome();
    initHome();
    initCatalog();
    initProduct();
    initReveal();
  });
})();
