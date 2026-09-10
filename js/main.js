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
    tag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20.6 13.4 12 22l-9-9V3h10l7.6 7.6a2 2 0 0 1 0 2.8z"/><circle cx="7.5" cy="7.5" r="1.5"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>',
    chevL: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>',
    chevR: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
    truck: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M1 3h15v13H1zM16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>',
    shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5z"/><path d="m9 12 2 2 4-4"/></svg>',
    medal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="9" r="6"/><path d="M8.2 13.9 7 22l5-3 5 3-1.2-8.1"/></svg>',
    chat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
    share: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4"/></svg>',
    filter: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 3H2l8 9.5V19l4 2v-8.5z"/></svg>',
    box: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8 12 3 3 8v8l9 5 9-5z"/><path d="M3 8l9 5 9-5M12 13v8"/></svg>',
    ret: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/></svg>',
    fb: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 9h3l.5-3H14V4.5c0-.9.3-1.5 1.6-1.5H17V.2C16.7.1 15.6 0 14.4 0 11.9 0 10 1.5 10 4.3V6H7v3h3v9h4z"/></svg>',
    ig: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>',
    tk: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 2c.3 2.3 1.9 4.1 4 4.4v3c-1.5 0-2.9-.4-4-1.2v6.6A6.4 6.4 0 1 1 9.6 8.4v3.1a3.3 3.3 0 1 0 3.3 3.3V2z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 6 10-6"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    help: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>',
    play: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>',
  };

  /* ---------- Utilidades ---------- */
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
  const money = (n) => `${LUCMAR.currency} ${n.toLocaleString("es-BO")}`;
  /* Las fichas generadas viven en /p/, un nivel por debajo del resto del sitio.
     LUCMAR_PID solo lo define una ficha, así que delata en qué nivel estamos.
     Sin esto, una ruta como img/productos/x.webp se buscaría en /p/img/... */
  const RAIZ = window.LUCMAR_PID ? "../" : "";
  const esRutaLocal = (v) => !!v && !/^(https?:|\/\/|\/|data:)/.test(v);

  // Acepta IDs de Unsplash (empiezan por número) o rutas locales del proyecto.
  const uImgSafe = (id, w) =>
    (id && /^\d/.test(id)) ? uImg(id, w) : (esRutaLocal(id) ? RAIZ + id : id);

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
    // encodeURIComponent deja pasar la comilla simple, y el SVG las usa en sus
    // atributos (xmlns='http://...'). Como este data URI acaba dentro de un
    // onerror="...src='AQUI'", esa comilla cerraba el string y rompia el script.
    return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg).replace(/'/g, "%27");
  }
  function imgTag(id, alt, w, cls = "") {
    const src = uImgSafe(id, w);
    const ph = placeholder(alt).replace(/"/g, "&quot;");
    return `<img src="${src}" alt="${alt}" loading="lazy" decoding="async" ${cls ? `class="${cls}"` : ""} onerror="this.onerror=null;this.src='${ph}'">`;
  }

  // Media de una tarjeta de categoría: video en bucle si la categoría lo define,
  // si no (o si el usuario pidió menos movimiento) la imagen de siempre.
  // Sin "poster" a propósito: evita el parpadeo de una foto distinta antes del
  // video. Aparece con fundido al tener datos (ver catVideoSetup).
  function catMedia(c) {
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!c.video || reduced) return imgTag(c.img, c.name, 500);
    // La URL viaja en data-src, no en src: así el navegador no descarga nada
    // hasta que la tarjeta se acerca a la pantalla (ver catVideoSetup). Antes,
    // con preload="auto", se bajaban los nueve videos enteros de entrada.
    return `<video data-src="${esRutaLocal(c.video) ? RAIZ + c.video : c.video}" data-img="${c.img}" aria-label="${escHtml(c.name)}"
      autoplay muted loop playsinline preload="none"></video>`;
  }

  // Fundido al cargar y respaldo a la imagen si el video falla (CDN caído, 403...).
  function catVideoSetup(root) {
    const vids = $$("video[data-img]", root);

    const cargar = (v) => {
      if (v.dataset.loaded) return;
      v.dataset.loaded = "1";
      v.src = v.dataset.src;
      // play() puede rechazar si el navegador bloquea la reproducción automática;
      // no es un fallo que deba romper nada, el video simplemente queda quieto.
      const intento = v.play();
      if (intento && intento.catch) intento.catch(() => {});
    };

    vids.forEach((v) => {
      v.addEventListener("loadeddata", () => v.classList.add("is-ready"));
      v.addEventListener("error", () => {
        v.outerHTML = imgTag(v.dataset.img, v.getAttribute("aria-label"), 500);
      });
    });

    // Sin IntersectionObserver (navegadores antiguos) se cargan todos, como antes.
    if (!("IntersectionObserver" in window)) { vids.forEach(cargar); return; }

    // rootMargin adelanta la carga medio pantalla, para que el video ya esté
    // andando cuando la tarjeta se ve de verdad.
    const io = new IntersectionObserver((entradas) => {
      entradas.forEach((e) => {
        if (!e.isIntersecting) return;
        cargar(e.target);
        io.unobserve(e.target);
      });
    }, { rootMargin: "50% 0px" });

    vids.forEach((v) => io.observe(v));
  }

  /* ---------- WhatsApp ---------- */
  function waLink(message) {
    return `https://wa.me/${LUCMAR.whatsapp}?text=${encodeURIComponent(message)}`;
  }
  /* ---------- Disponibilidad ----------
     En js/products.js, el campo "stock" es opcional:
       sin campo  → disponible          stock: 0  → agotado
       stock: 1-3 → últimas unidades    stock: 20 → disponible                */
  const agotado = (p) => p.stock === 0;
  const pocasUnidades = (p) => typeof p.stock === "number" && p.stock > 0 && p.stock <= 3;

  // Código interno del producto (campo "sku" en products.js). Es opcional.
  const skuLine = (p) => (p.sku ? `🔖 Código: ${p.sku}\n` : "");
  // brandName devuelve "" si el producto no tiene marca, o si apunta a una que
  // ya no existe: en ese caso la línea se omite en vez de quedar a medias.
  const marcaLine = (p) => { const m = brandName(p.brand); return m ? `🏷️ Marca: ${m}\n` : ""; };

  /* ---------- Descuento ----------
     La etiqueta se calcula sola a partir de oldPrice y price, los dos en Bs.
     Así nunca puede contradecir al precio: no hay un texto que actualizar a
     mano cuando cambia una cifra. Devuelve null si el producto no está rebajado. */
  const ahorroBs = (p) =>
    p.oldPrice && p.oldPrice > p.price ? p.oldPrice - p.price : null;
  // En la etiqueta la moneda va al final ("-269 Bs"): con el signo menos delante,
  // el formato normal de precio ("-Bs 269") se lee mal y ocupa más.
  const descuentoLabel = (p) => {
    const a = ahorroBs(p);
    return a === null ? null : `-${a.toLocaleString("es-BO")} ${LUCMAR.currency}`;
  };

  /* Navegar por el sitio usa siempre producto.html?id=..., que arma la ficha
     leyendo el catálogo y por tanto funciona con cualquier producto recién
     cargado, sin depender de ACTUALIZAR-FICHAS.bat. Las páginas de /p/ existen
     para lo que producto.html no puede dar: que WhatsApp y Google vean la foto
     y el precio sin ejecutar JavaScript. Por eso solo se usan al compartir
     (ver productUrl). */
  const fichaHref = (id) => `${RAIZ}producto.html?id=${encodeURIComponent(id)}`;

  // Enlace público del producto, para compartir o para citarlo en un mensaje.
  const productUrl = (p) => `${location.origin}/p/${p.id}.html`;

  /* ---------- Compartir el producto con un amigo ----------
     Ojo: aquí NO se usa waLink(), que apunta al WhatsApp de Lucmar. Un enlace
     wa.me sin número abre la lista de contactos para que la persona elija a
     quién enviárselo.                                                        */
  // Sin el enlace: navigator.share ya lo manda aparte en su campo "url" y, si se
  // repitiera aquí, varias apps lo pegan dos veces en el mensaje.
  function shareText(p) {
    const a = ahorroBs(p);
    // La marca va en su propia línea, entre el nombre y el precio. Si el
    // producto no la tuviera, la línea desaparece y el mensaje queda como antes.
    const marca = brandName(p.brand);
    return (
      (a ? `Mira esta oferta en ${LUCMAR.brand} 🔥\n\n` : `Mira este producto de ${LUCMAR.brand} 👀\n\n`) +
      `*${p.name}*\n` +
      (marca ? `${marca}\n` : "") +
      (a ? `~${money(p.oldPrice)}~  →  *${money(p.price)}*  (ahorras ${money(a)})`
         : `${money(p.price)}`)
    );
  }

  /* Descarga la foto del producto y la deja lista para adjuntarla al compartir.

     Se convierte a JPG aunque ya sea una imagen buena: las fotos del catálogo
     son .webp y WhatsApp no lo trata como una foto normal (lo toma por sticker
     o directamente lo rechaza). La conversión se hace aquí, en el navegador de
     quien comparte, así que no hace falta guardar una copia de cada foto.

     Devuelve null ante cualquier problema — la foto es un extra, y quedarse sin
     ella nunca debe impedir compartir. */
  async function fotoParaCompartir(p) {
    if (!p.img || typeof createImageBitmap !== "function") return null;
    const nombre = `${p.id || "producto"}.jpg`;
    try {
      const resp = await fetch(uImgSafe(p.img, 1200));
      if (!resp.ok) return null;
      const blob = await resp.blob();
      if (blob.type === "image/jpeg") return new File([blob], nombre, { type: "image/jpeg" });

      const bitmap = await createImageBitmap(blob);
      const lienzo = document.createElement("canvas");
      lienzo.width = bitmap.width;
      lienzo.height = bitmap.height;
      const ctx = lienzo.getContext("2d");
      // JPG no guarda transparencia: sin este fondo, las zonas transparentes
      // de un PNG o un WebP saldrían negras en el chat.
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, lienzo.width, lienzo.height);
      ctx.drawImage(bitmap, 0, 0);
      bitmap.close && bitmap.close();

      const jpg = await new Promise((r) => lienzo.toBlob(r, "image/jpeg", 0.9));
      return jpg ? new File([jpg], nombre, { type: "image/jpeg" }) : null;
    } catch (err) {
      return null;
    }
  }

  // WhatsApp no tiene campo aparte para el enlace: va dentro del propio texto.
  const shareWhatsApp = (p) =>
    `https://wa.me/?text=${encodeURIComponent(`${shareText(p)}\n\n${productUrl(p)}`)}`;

  function waProduct(p) {
    const url = productUrl(p);
    if (agotado(p)) {
      return waLink(
        `¡Hola ${LUCMAR.brand}! 👋 Vi que este producto está agotado:\n\n` +
        `🛒 *${p.name}*\n` +
        marcaLine(p) +
        skuLine(p) +
        `🔗 ${url}\n\n` +
        `¿Cuándo vuelve a estar disponible? ¿Me avisan cuando llegue?`
      );
    }
    return waLink(
      `¡Hola ${LUCMAR.brand}! 👋 Me interesa este producto:\n\n` +
      `🛒 *${p.name}*\n` +
      marcaLine(p) +
      skuLine(p) +
      `💲 Precio: ${money(p.price)}\n` +
      `🔗 ${url}\n\n` +
      `¿Está disponible? ¿Me pueden dar más información?`
    );
  }

  const catName = (slug) => (CATEGORIES.find((c) => c.slug === slug) || {}).name || "";
  const brandOf = (slug) => BRANDS.find((b) => b.slug === slug) || null;
  const brandName = (slug) => (brandOf(slug) || {}).name || "";
  const brandCount = (slug) => PRODUCTS.filter((p) => p.brand === slug).length;

  /* Logotipo de marca: imagen si existe, si no el nombre en tipografía.
     Si la marca trae "watermark", se pinta atenuado de fondo en el cuadro
     (decorativo: sin alt y oculto a lectores de pantalla). */
  function brandMark(b) {
    const wm = b.watermark
      ? `<img class="brand-tile__wm" src="${uImgSafe(b.watermark)}" alt="" aria-hidden="true" loading="lazy" decoding="async">`
      : "";
    const mark = b.logo
      ? `<img src="${uImgSafe(b.logo)}" alt="${b.name}" loading="lazy" decoding="async">`
      : `<span class="brand-tile__word">${b.name}</span>`;
    return wm + mark;
  }

  /* ---------- Estrellas ---------- */
  function stars(rating, reviews) {
    const p = (rating / 5) * 100;
    return `<span class="rating"><span class="stars" style="--p:${p}%"><i></i></span>
      <span>${rating.toFixed(1)}${reviews != null ? ` (${reviews})` : ""}</span></span>`;
  }

  /* ---------- Novedades ----------
     "Nuevo" ya no se guarda en cada ficha. Lo llevaban los 87 productos a la vez,
     así que había dejado de significar nada y la sección de la portada mostraba
     los últimos del archivo, según dónde se pegara cada producto al editarlo.
     Ahora son novedad los NOVEDADES_N productos con la fecha de alta más reciente:
     la lista se renueva sola según cargas mercadería y los viejos salen sin tocar
     nada. Un producto sin fecha cuenta como antiguo. */
  const NOVEDADES_N = 12;
  const novedades = [...PRODUCTS]
    .filter((p) => p.alta)
    .sort((a, b) => String(b.alta).localeCompare(String(a.alta)))
    .slice(0, NOVEDADES_N);
  const idsNovedad = new Set(novedades.map((p) => p.id));
  const esNovedad = (p) => idsNovedad.has(p.id);

  /* ---------- Tarjeta de producto ---------- */
  function productCard(p) {
    const out = agotado(p);
    // con la cinta de agotado, la etiqueta de descuento sobra y estorba
    const off = descuentoLabel(p);
    // el descuento manda sobre "Nuevo": vende más y dos etiquetas cargan la foto
    const badge = out ? ""
      : off ? `<span class="product-card__badge">${off}</span>`
      : esNovedad(p) ? `<span class="product-card__badge new">Nuevo</span>`
      : p.badge ? `<span class="product-card__badge">${p.badge}</span>`
      : "";
    // solo se tacha si de verdad hay rebaja (un oldPrice igual o menor no lo es)
    const was = off ? `<span class="was">${money(p.oldPrice)}</span>` : "";
    return `<article class="product-card${out ? " is-out" : ""}">
      <div class="product-card__media">
        ${badge}
        ${out ? `<span class="sold-out">Agotado</span>` : ""}
        <button class="product-card__wish" aria-label="Añadir a favoritos">${ICON.heart}</button>
        <a href="${fichaHref(p.id)}" aria-label="Ver ${p.name}">${imgTag(p.img, p.name, 500)}</a>
      </div>
      <div class="product-card__body">
        <div class="product-card__meta">
          <span class="product-card__cat">${catName(p.cat)}</span>
          ${p.brand ? `<a class="brand-chip" href="${RAIZ}catalogo.html?marca=${p.brand}">${brandName(p.brand)}</a>` : ""}
        </div>
        <h3 class="product-card__name"><a href="${fichaHref(p.id)}">${p.name}</a></h3>
        ${p.sku ? `<p class="product-card__sku">Cód. ${escHtml(p.sku)}</p>` : ""}
        ${stars(p.rating, p.reviews)}
        <div class="product-card__price"><span class="now">${money(p.price)}</span>${was}</div>
        <a class="btn ${out ? "btn-primary" : "btn-wa"} btn-block product-card__cta" href="${waProduct(p)}"
           target="_blank" rel="noopener" data-wa
           aria-label="${out ? `Consultar cuándo llega ${p.name}` : `Pedir ${p.name} por WhatsApp`}"
           >${ICON.wa} ${out ? "Consultar cuándo llega" : "Pedir por WhatsApp"}</a>
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
    /* threshold 0: basta con que asome un borde. Antes se pedía un 12% del
       bloque visible, y en el móvil eso dejaba secciones enteras invisibles:
       la cuadrícula de 8 productos se apila en una columna de unos 4.400 px y
       en una pantalla de 600 px nunca se ve ese 12%, así que las tarjetas se
       quedaban en opacity 0 para siempre. El margen inferior negativo es el
       que decide cuándo entra: al asomar unos 60 px, no al rozar el borde. */
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const el = e.target;
        if (el.hasAttribute("data-reveal-stagger")) {
          $$(":scope > *", el).forEach((c, i) => { c.style.transitionDelay = `${Math.min(i * 70, 500)}ms`; });
        }
        el.classList.add("in"); io.unobserve(el);
      });
    }, { threshold: 0, rootMargin: "0px 0px -60px 0px" });
    els.forEach((e) => io.observe(e));

    /* Red de seguridad: si pasados unos segundos un bloque sigue oculto estando
       ya en pantalla, se muestra igualmente. Se comprueba que esté visible para
       no revelar de golpe el resto de la página y cargarse sus animaciones. */
    setTimeout(() => {
      els.forEach((e) => {
        if (e.classList.contains("in")) return;
        const r = e.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) e.classList.add("in");
      });
    }, 2500);
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
    if ($("#hero-slides") || $("#cats-grid")) renderHomeContent();

    // categorías
    const cg = $("#cats-grid");
    if (cg) {
      cg.innerHTML = CATEGORIES.map((c) =>
        `<a class="cat-card" href="${RAIZ}catalogo.html?cat=${c.slug}">${catMedia(c)}<span>${c.name}</span></a>`
      ).join("");
      catVideoSetup(cg);
    }

    // marcas (las que ya tienen productos primero; las demás quedan "Próximamente")
    const bg = $("#brands-grid");
    if (bg) {
      const list = [...BRANDS].sort((a, b) => brandCount(b.slug) - brandCount(a.slug));
      bg.innerHTML = list.map((b) => {
        const n = brandCount(b.slug);
        return n
          ? `<a class="brand-tile" href="${RAIZ}catalogo.html?marca=${b.slug}" aria-label="Ver productos ${b.name}">
               ${brandMark(b)}<span class="brand-tile__tag">${b.tagline}</span>
               <span class="brand-tile__n">${n} producto${n > 1 ? "s" : ""}</span></a>`
          : `<span class="brand-tile is-soon" aria-label="${b.name}, próximamente">
               ${brandMark(b)}<span class="brand-tile__tag">${b.tagline}</span>
               <span class="brand-tile__n">Próximamente</span></span>`;
      }).join("");
    }

    // Destacados: manda la lista manual de HOME.destacados (ids, en su orden).
    // Si está vacía o no existe, se vuelve al criterio anterior (mejor valorados).
    // Los ids que no correspondan a ningún producto se ignoran, para que un
    // id mal escrito no deje un hueco ni rompa la sección.
    const fg = $("#featured-grid");
    if (fg) {
      const elegidos = (HOME.destacados || [])
        .map((id) => PRODUCTS.find((p) => p.id === id))
        .filter(Boolean);
      const feat = elegidos.length
        ? elegidos
        : [...PRODUCTS].sort((a, b) => b.rating - a.rating).slice(0, 8);
      fg.innerHTML = feat.map(productCard).join("");
    }

    // novedades: los más recientes por fecha de alta (ver arriba)
    const ng = $("#novedades-grid");
    if (ng) ng.innerHTML = novedades.map(productCard).join("");

    initCarousel();
    bindWaToast();
  }

  /* ==========================================================================
     CONTENIDO EDITABLE DEL INICIO (objeto HOME de js/products.js)
     ========================================================================== */
  const escHtml = (s) => String(s == null ? "" : s)
    .replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  // *texto* → <em>texto</em>
  const rich = (s) => escHtml(s).replace(/\*([^*]+)\*/g, "<em>$1</em>");

  // "whatsapp" → enlace al chat de ventas
  function ctaAttrs(href) {
    if (String(href).trim().toLowerCase() === "whatsapp") {
      return `href="${waLink(`¡Hola ${LUCMAR.brand}! 👋 Quisiera información sobre sus productos.`)}" target="_blank" rel="noopener" data-wa`;
    }
    return `href="${escHtml(href)}"`;
  }

  function heroImg(id, alt, eager) {
    const src = uImgSafe(id, 1100);
    const ph = placeholder(alt).replace(/"/g, "&quot;");
    return `<img src="${src}" alt="${escHtml(alt)}" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'}
      onerror="this.onerror=null;this.src='${ph}'">`;
  }

  function sectionHead(key) {
    const s = (HOME.sections || {})[key];
    const box = $(`.section-head[data-head="${key}"] > div:first-child`);
    if (!s || !box) return;
    box.innerHTML = `${s.eyebrow ? `<span class="eyebrow">${escHtml(s.eyebrow)}</span>` : ""}
      <h2>${rich(s.title)}</h2>
      ${s.sub ? `<p class="sub">${escHtml(s.sub)}</p>` : ""}`;
  }

  function renderHomeContent() {
    if (typeof HOME === "undefined") return;

    // barra promocional superior
    const tb = $("[data-home-topbar]");
    if (tb && HOME.topbar) tb.innerHTML = escHtml(HOME.topbar);

    // diapositivas del hero
    const hs = $("#hero-slides");
    if (hs && HOME.slides) {
      hs.innerHTML = HOME.slides.map((s, k) => `
        <div class="hero-slide${k === 0 ? " active" : ""}">
          <div class="wrap hero-inner">
            <div class="hero-copy"${k === 0 ? " data-reveal" : ""}>
              ${s.eyebrow ? `<span class="eyebrow">${escHtml(s.eyebrow)}</span>` : ""}
              <h1>${rich(s.title)}</h1>
              ${s.text ? `<p>${escHtml(s.text)}</p>` : ""}
              <div class="hero-cta">
                ${s.cta1 && s.cta1.text ? `<a class="btn btn-amber btn-lg" ${ctaAttrs(s.cta1.href)}>${escHtml(s.cta1.text)}</a>` : ""}
                ${s.cta2 && s.cta2.text ? `<a class="btn btn-ghost btn-lg" ${ctaAttrs(s.cta2.href)}>${escHtml(s.cta2.text)}</a>` : ""}
              </div>
            </div>
            <div class="hero-media"${k === 0 ? " data-reveal" : ""}>
              ${heroImg(s.img, s.alt || s.title, k === 0)}
              ${s.badgeN ? `<div class="hero-badge"><span class="n">${escHtml(s.badgeN)}</span><span class="t">${escHtml(s.badgeT || "")}</span></div>` : ""}
            </div>
          </div>
        </div>`).join("");
    }

    // franja de confianza
    const tg = $("#trust-grid");
    if (tg && HOME.trust) {
      tg.innerHTML = HOME.trust.map((t) =>
        `<div class="trust-item"><span class="ic">${ICON[t.icon] || ICON.check}</span>
          <div><strong>${escHtml(t.title)}</strong><span>${escHtml(t.text)}</span></div></div>`).join("");
    }

    // encabezados de sección
    ["cats", "brands", "featured", "news"].forEach(sectionHead);

    // banner promocional
    const pb = $("#promo-banner"), pr = HOME.promo;
    if (pb && pr) {
      pb.innerHTML = `<span class="glow"></span>
        <div class="wrap">
          <div>
            ${pr.eyebrow ? `<span class="eyebrow" style="color:var(--amber-400)">${escHtml(pr.eyebrow)}</span>` : ""}
            <h2>${rich(pr.title)}</h2>
            ${pr.text ? `<p>${escHtml(pr.text)}</p>` : ""}
            <div class="hero-cta" style="margin-top:1.4rem">
              ${pr.cta1 && pr.cta1.text ? `<a class="btn btn-amber btn-lg" ${ctaAttrs(pr.cta1.href)}>${escHtml(pr.cta1.text)}</a>` : ""}
              ${pr.cta2 && pr.cta2.text ? `<a class="btn btn-wa btn-lg" ${ctaAttrs(pr.cta2.href)}>${ICON.wa} ${escHtml(pr.cta2.text)}</a>` : ""}
            </div>
          </div>
          <div class="promo-media">${imgTag(pr.img, pr.alt || pr.title, 900)}</div>
        </div>`;
    }

    // newsletter
    const nl = $("#newsletter-copy");
    if (nl && HOME.newsletter) {
      nl.innerHTML = `<h3>${escHtml(HOME.newsletter.title)}</h3><p>${escHtml(HOME.newsletter.text)}</p>`;
    }
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
      brands: new Set(params.get("marca") ? [params.get("marca")] : []),
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

    // Filtros de marca (solo las que tienen productos, ordenadas alfabéticamente)
    const brandFilters = $("#filter-brands");
    if (brandFilters) {
      brandFilters.innerHTML = BRANDS
        .filter((b) => brandCount(b.slug) > 0)
        .sort((a, b) => a.name.localeCompare(b.name, "es"))
        .map((b) => {
          const checked = state.brands.has(b.slug) ? "checked" : "";
          return `<label class="filter-opt"><input type="checkbox" value="${b.slug}" data-f="brand" ${checked}>
            <span>${b.name}</span><span class="count">${brandCount(b.slug)}</span></label>`;
        }).join("");
    }

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
      const f = e.target.dataset.f;
      const set = { cat: state.cats, brand: state.brands, price: state.prices, rating: state.ratings }[f];
      const val = (f === "cat" || f === "brand") ? e.target.value : Number(e.target.value);
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
      if (state.brands.size && !state.brands.has(p.brand)) return false;
      if (state.prices.size) {
        const ok = [...state.prices].some((k) => p.price >= PRICE_RANGES[k].min && p.price < PRICE_RANGES[k].max);
        if (!ok) return false;
      }
      if (state.ratings.size) {
        const min = Math.min(...state.ratings);
        if (p.rating < min) return false;
      }
      if (state.q) {
        const q = state.q.trim().toLowerCase();
        const campos = [p.name, p.sku, catName(p.cat), brandName(p.brand), p.desc]
          .filter(Boolean).join(" ").toLowerCase();
        // Los códigos mezclan guiones y espacios ("FVR-1012", "DM40 PRO", "13906-9")
        // y quien los copia de la caja del producto no suele respetarlos. Por eso,
        // si no hay coincidencia literal, se reintenta sin separadores.
        const sinSep = (x) => x.replace(/[\s\-_.]+/g, "");
        if (!campos.includes(q) && !sinSep(campos).includes(sinSep(q))) return false;
      }
      return true;
    }
    function sortList(list) {
      const s = state.sort;
      if (s === "precio-asc") return list.sort((a, b) => a.price - b.price);
      if (s === "precio-desc") return list.sort((a, b) => b.price - a.price);
      if (s === "valoracion") return list.sort((a, b) => b.rating - a.rating);
      if (s === "novedades") return list.sort((a, b) => String(b.alta || "").localeCompare(String(a.alta || "")));
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
      if (t) {
        if (state.brands.size === 1 && state.cats.size === 0) t.textContent = brandName([...state.brands][0]);
        else if (state.cats.size === 1) t.textContent = catName([...state.cats][0]);
      }
    }

    render();
  }

  /* ==========================================================================
     PÁGINA: FICHA DE PRODUCTO
     ========================================================================== */
  function initProduct() {
    const root = $("#pdp");
    if (!root) return;
    // Las fichas de /p/<id>.html declaran su id en LUCMAR_PID (lo escribe el
    // generador). WhatsApp y Google necesitan esas paginas sueltas porque no
    // ejecutan JavaScript: leen las etiquetas og: del HTML tal cual llega.
    // producto.html?id=... se mantiene para los enlaces ya compartidos.
    const id = window.LUCMAR_PID || new URLSearchParams(location.search).get("id");
    const p = PRODUCTS.find((x) => x.id === id) || PRODUCTS[0];

    document.title = `${p.name} — Lucmar`;
    const md = $('meta[name="description"]'); if (md) md.setAttribute("content", p.desc.slice(0, 155));

    // Quien entre por producto.html?id=... ve lo mismo que en /p/<id>.html. El
    // canonical le dice a Google cual de las dos direcciones es la buena, para
    // que no las cuente como dos paginas con el mismo contenido. En las fichas
    // generadas ya viene escrito en el HTML, asi que aqui solo hace falta para
    // la pagina antigua.
    if (!window.LUCMAR_PID) {
      let can = $('link[rel="canonical"]');
      if (!can) { can = document.createElement("link"); can.rel = "canonical"; document.head.appendChild(can); }
      can.href = productUrl(p);
    }

    // breadcrumbs
    $("#pdp-breadcrumbs").innerHTML =
      `<a href="${RAIZ || "/"}">Inicio</a><span class="sep">/</span>
       <a href="${RAIZ}catalogo.html?cat=${p.cat}">${catName(p.cat)}</a><span class="sep">/</span>
       <span>${p.name}</span>`;

    const gallery = (p.gallery && p.gallery.length ? p.gallery : [p.img]);
    const off = descuentoLabel(p);

    root.innerHTML = `
      <div class="pdp-gallery">
        <div class="pdp-gallery__main" id="pdp-main">${imgTag(gallery[0], p.name, 900)}</div>
        <div class="pdp-thumbs" id="pdp-thumbs">
          ${gallery.map((g, k) => `<button class="${k === 0 ? "active" : ""}" data-full="${uImgSafe(g, 900)}" aria-label="Vista ${k + 1}">${imgTag(g, p.name, 160)}</button>`).join("")}
          ${p.youtube ? `<button class="is-video" data-yt="${p.youtube}" aria-label="Reproducir video">
            <img src="https://i.ytimg.com/vi/${p.youtube}/default.jpg" alt="Video de ${p.name}" loading="lazy">
            <span class="pdp-thumb-play">${ICON.play}</span>
          </button>` : ""}
        </div>
      </div>
      <div class="pdp-info">
        <div class="product-card__meta">
          <span class="product-card__cat">${catName(p.cat)}</span>
          ${p.brand ? `<a class="brand-chip" href="${RAIZ}catalogo.html?marca=${p.brand}">${brandName(p.brand)}</a>` : ""}
        </div>
        <h1>${p.name}</h1>
        ${p.sku ? `<p class="pdp-sku">Cód. ${p.sku}</p>` : ""}
        ${stars(p.rating, p.reviews)}
        <div class="pdp-price" style="margin-top:1rem">
          <span class="now">${money(p.price)}</span>
          ${off ? `<span class="was">${money(p.oldPrice)}</span><span class="off">${off}</span>` : ""}
        </div>
        <p class="pdp-stock${agotado(p) ? " is-out" : pocasUnidades(p) ? " is-low" : ""}"><span class="dot"></span> ${
          agotado(p) ? "Agotado · consúltanos cuándo llega"
          : pocasUnidades(p) ? `¡Últimas ${p.stock} unidad${p.stock === 1 ? "" : "es"}!`
          : "En stock · listo para entrega"
        }</p>
        <p class="pdp-desc">${p.desc}</p>
        <ul class="pdp-features">
          ${p.features.map((f) => `<li>${ICON.check}<span>${f}</span></li>`).join("")}
        </ul>
        <div class="pdp-actions">
          <a class="btn ${agotado(p) ? "btn-primary" : "btn-wa"} btn-lg btn-block" href="${waProduct(p)}"
             target="_blank" rel="noopener" data-wa>
            ${ICON.wa} ${agotado(p) ? "Consultar cuándo llega" : "Pedir por WhatsApp"}
          </a>
          <div class="row">
            <a class="btn btn-ghost btn-block" id="pdp-share" href="${shareWhatsApp(p)}"
               target="_blank" rel="noopener">
              ${ICON.share} Compartir
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

    /* Compartir: en el móvil abre el menú del sistema (WhatsApp, Telegram, copiar
       enlace…). Si el navegador no lo soporta —el caso de casi todo escritorio—
       no se toca el clic y el href lleva a WhatsApp, que ya es el respaldo.    */
    const shareBtn = $("#pdp-share");
    if (shareBtn && navigator.share) {
      shareBtn.addEventListener("click", async (e) => {
        e.preventDefault();
        const texto = `${shareText(p)}

${productUrl(p)}`;

        // 1) Lo ideal: la foto va adjunta de verdad, como cuando se manda una
        //    imagen de la galería. Así se ve siempre, sin depender de que
        //    WhatsApp lea la vista previa del enlace (que tarda en refrescarse).
        //    Solo lo permiten los móviles; en un ordenador canShare da false.
        try {
          const foto = await fotoParaCompartir(p);
          if (foto && navigator.canShare && navigator.canShare({ files: [foto] })) {
            await navigator.share({ files: [foto], text: texto });
            return;
          }
        } catch (err) {
          if (err && err.name === "AbortError") return;   // cerró el menú
          // cualquier otro fallo (foto que no carga, permiso denegado...) cae
          // al reparto de siempre, que nunca deja al usuario sin compartir
        }

        // 2) Sin foto adjunta: el texto con el enlace y su vista previa.
        try {
          await navigator.share({ title: p.name, text: shareText(p), url: productUrl(p) });
        } catch (err) {
          if (err && err.name === "AbortError") return;
          window.open(shareBtn.href, "_blank", "noopener");
        }
      });
    }

    // galería: cambiar imagen/video principal
    const mainBox = $("#pdp-main");
    $$("#pdp-thumbs button").forEach((b) => b.addEventListener("click", () => {
      $$("#pdp-thumbs button").forEach((x) => x.classList.remove("active"));
      b.classList.add("active");
      if (b.dataset.yt) {
        // video de YouTube: el iframe solo se crea al hacer clic (evita cargar YouTube de entrada)
        mainBox.innerHTML = `<iframe src="https://www.youtube.com/embed/${b.dataset.yt}?autoplay=1"
          title="Video de ${p.name}" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen loading="lazy"></iframe>`;
      } else {
        mainBox.innerHTML = `<img src="${b.dataset.full}" alt="${p.name}" loading="lazy">`;
      }
    }));

    // relacionados
    const rel = $("#related-grid");
    if (rel) {
      // primero misma marca, luego misma categoría, luego lo que falte
      const same = (fn) => PRODUCTS.filter((x) => x.id !== p.id && fn(x));
      const list = [...same((x) => x.brand === p.brand)];
      same((x) => x.cat === p.cat && !list.includes(x)).forEach((x) => list.push(x));
      list.splice(4);
      const fill = list.length < 4 ? same((x) => !list.includes(x)).slice(0, 4 - list.length) : [];
      rel.innerHTML = [...list, ...fill].map(productCard).join("");
    }

    // URL canónica + Open Graph dinámicos (para buscadores y redes)
    const SITE = "https://www.lucmar.net/";
    const canonUrl = `${SITE}producto.html?id=${encodeURIComponent(p.id)}`;
    const imgUrl900 = uImgSafe(p.img, 900);
    const setMeta = (sel, attr, val) => {
      let el = document.head.querySelector(sel);
      if (!el) { el = document.createElement("meta"); const [k, v] = sel.replace(/[[\]"]/g, "").split("="); el.setAttribute(k, v); document.head.appendChild(el); }
      el.setAttribute(attr, val);
    };
    let canon = document.head.querySelector('link[rel="canonical"]');
    if (!canon) { canon = document.createElement("link"); canon.rel = "canonical"; document.head.appendChild(canon); }
    canon.href = canonUrl;
    setMeta('meta[property="og:title"]', "content", `${p.name} — Lucmar`);
    setMeta('meta[property="og:description"]', "content", p.desc.slice(0, 200));
    setMeta('meta[property="og:image"]', "content", imgUrl900);
    setMeta('meta[property="og:url"]', "content", canonUrl);

    // JSON-LD dinámico del producto
    const ld = {
      "@context": "https://schema.org", "@type": "Product", name: p.name, description: p.desc,
      image: imgUrl900, brand: { "@type": "Brand", name: brandName(p.brand) || "Lucmar" },
      ...(p.sku ? { sku: p.sku } : {}),
      offers: {
        "@type": "Offer", price: p.price, priceCurrency: "BOB", url: canonUrl,
        availability: agotado(p) ? "https://schema.org/OutOfStock" : "https://schema.org/InStock",
        seller: { "@type": "Organization", name: "Lucmar" },
      },
    };
    // aggregateRating solo si hay reseñas reales (Google rechaza reviewCount 0)
    if (p.reviews > 0) ld.aggregateRating = { "@type": "AggregateRating", ratingValue: p.rating, reviewCount: p.reviews };
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
