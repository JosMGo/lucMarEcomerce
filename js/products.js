/* ==========================================================================
   LUCMAR — Datos de catálogo
   --------------------------------------------------------------------------
   PLACEHOLDERS: las imágenes provienen de Unsplash y son temporales.
   Para usar tus fotos reales, reemplaza el valor "img" (y "gallery") de cada
   producto por la ruta a tu imagen, por ejemplo: "img/productos/organizador.jpg"
   ========================================================================== */

/* ---- Configuración global editable ---- */
const LUCMAR = {
  // WhatsApp del encargado de ventas (formato internacional, solo dígitos)
  whatsapp: "59177072715",
  brand: "Lucmar",
  currency: "Bs",          // Bolivianos
  freeShippingFrom: 350,   // Bs
};

/* ---- Categorías ----
   "video" es opcional: si lo pones (ruta local o URL .mp4), la tarjeta reproduce
   ese video en bucle y sin sonido, usando "img" como imagen de respaldo.       */
const CATEGORIES = [
  { slug: "escritorio",     name: "Organización de escritorio", img: "1497215728101-856f4ea42174",
    video: "video/oficina.mp4"
   },
  { slug: "ergonomia",      name: "Ergonomía y confort",        img: "1600585154340-be6161a56a0c",
    video: "video/ergonomiadt3.mp4" },
  { slug: "energia",        name: "Energía y respaldo",         img: "1621905251189-08b45d6a269e",
    video: "video/ups.mp4" },
  { slug: "iluminacion",    name: "Iluminación de oficina",     img: "1507003211169-0a1dd7228f2d",
    video: "video/iluminacion.mp4"
   },
  { slug: "tecnologia",     name: "Accesorios tecnológicos",    img: "1517336714731-489689fd1ca8",
    video: "video/centralportatil.mp4" },
  { slug: "almacenamiento", name: "Almacenamiento",             img: "1558618666-fcd25c85cd64",
    video: "video/almacenamiento.mp4"},
  { slug: "audio-video",    name: "Audio y video",              img: "1519389950473-47ba0277781c",
    video: "video/boyamini.mp4" },
  { slug: "redes",          name: "Redes y conectividad",       img: "1498050108023-c5249f4df085",
    video: "video/switch-ubiquiti.mp4" },
  { slug: "domotica",       name: "Domótica",                   img: "1503602642458-232111445657",
    video: "video/shellly4pm.mp4" },
];

/* ---- Marcas ----
   "logo" es opcional: déjalo vacío ("") y se muestra el nombre en tipografía.
   Cuando tengas los logos, guárdalos en img/marcas/ y pon la ruta, por ejemplo:
   logo: "img/marcas/ugreen.png"                                              */
const BRANDS = [
  { slug: "ugreen",   name: "UGREEN",   tagline: "Conectividad y carga",        logo: "img/marcas/ugreen-logo.png" },
  { slug: "totto",    name: "TOTTO",    tagline: "Papelería y mochilas",        logo: "img/marcas/totto-logo.png" },
  { slug: "trupper",  name: "TRUPPER",  tagline: "Herramienta y mobiliario",    logo: "img/marcas/trupper-logo.png" },
  { slug: "shelly",   name: "SHELLY",   tagline: "Automatización del hogar",    logo: "img/marcas/shelly-logo.png" },
  { slug: "jbl",      name: "JBL",      tagline: "Audio profesional",           logo: "img/marcas/jbl-logo.png" },
  { slug: "amazon",   name: "AMAZON",   tagline: "Esenciales para tu setup",    logo: "img/marcas/amazon-logo.png" },
  { slug: "boya",     name: "BOYA",     tagline: "Micrófonos y grabación",      logo: "img/marcas/boya-logo.png" },
  { slug: "dt3",      name: "DT3",      tagline: "Sillas y ergonomía",          logo: "img/marcas/dt3-logo.png" },
  { slug: "elsys",    name: "ELSYS",    tagline: "Electrónica y señal",         logo: "img/marcas/elsys-logo.jpg" },
  { slug: "enersafe", name: "ENERSAFE", tagline: "UPS y protección eléctrica",  logo: "img/marcas/enersafe-logo.png" },
  { slug: "forza",    name: "FORZA",    tagline: "Energía y respaldo",          logo: "img/marcas/forza-logo.png" },
  { slug: "kingsons", name: "KINGSONS", tagline: "Mochilas y organización",     logo: "img/marcas/kingsons-logo.png" },
  { slug: "maono",    name: "MAONO",    tagline: "Micrófonos y streaming",      logo: "img/marcas/maono-logo.png" },
  { slug: "netac",    name: "NETAC",    tagline: "Almacenamiento y memorias",   logo: "img/marcas/netac-logo.png" },
  { slug: "tapo",     name: "TAPO",     tagline: "Cámaras y hogar inteligente", logo: "img/marcas/tapo-logo.png" },
  { slug: "targus",   name: "TARGUS",   tagline: "Accesorios para laptop",      logo: "img/marcas/targus-logo.png" },
  { slug: "pretul",   name: "PRETUL",   tagline: "Práctico y resistente",       logo: "img/marcas/pretul-logo.jpg" },
  { slug: "volteck",  name: "VOLTECK",  tagline: "Iluminación y eléctrico",     logo: "img/marcas/volteck-logo.png" },
  { slug: "tp-link",  name: "TP-LINK",  tagline: "Redes y wifi",                logo: "img/marcas/tp-link-logo.png" },
  { slug: "yaber",    name: "YABER",    tagline: "Proyectores",                 logo: "img/marcas/yaber-logo.png" },
  /* "watermark" es opcional: pinta un segundo logo atenuado de fondo en el
     cuadro de la marca (p. ej. el sello de la distribuidora). */
  { slug: "tupperware", name: "TUPPERWARE", tagline: "Contenedores y almacenamiento", logo: "img/marcas/tupperware-logo.png", watermark: "img/marcas/eiresa.jpeg" },
  { slug: "salud-bienestar", name: "SALUD Y BIENESTAR", tagline: "Cuidado personal y bienestar", logo: "img/marcas/bem-estar-life-logo.png" },

];

/* Helper para construir URL de Unsplash */
function uImg(id, w = 900) {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;
}

/* ---- Productos ----
   "youtube" es opcional: si lo pones (solo el ID del video, ej. "dQw4w9WgXcQ",
   la parte que va después de "watch?v=" en la URL de YouTube), la ficha de
   producto muestra un video embebido (con carga diferida) debajo de la galería. */
const PRODUCTS = [
  /* {
    id: "organizador-modular-roble",
    name: "Organizador modular de escritorio en roble",
    cat: "escritorio", brand: "totto",
    price: 189, oldPrice: 249, rating: 4.8, reviews: 128, badge: "-24%",
    img: "1524758631624-e2822e304c36",
    gallery: ["1524758631624-e2822e304c36", "1497215728101-856f4ea42174", "1526170375885-4d8ecf77b99f"],
    desc: "Mantén cada elemento en su lugar con este organizador modular de madera de roble. Compartimentos ajustables para lápices, notas, cables y accesorios, con un acabado cálido que eleva cualquier escritorio.",
    features: ["Madera de roble maciza", "Compartimentos reconfigurables", "Base antideslizante", "Acabado resistente a rayones"],
  }, */
  /* {
    id: "silla-ergonomica-lumbar",
    name: "Silla ergonómica con soporte lumbar ajustable",
    cat: "ergonomia", brand: "dt3",
    price: 1290, oldPrice: 1590, rating: 4.9, reviews: 213, badge: "-19%",
    img: "1600585154340-be6161a56a0c",
    gallery: ["1600585154340-be6161a56a0c", "1503602642458-232111445657", "1541140532154-b024d705b90a"],
    desc: "Diseñada para largas jornadas: malla transpirable, soporte lumbar dinámico y reposabrazos 3D. La postura correcta, sin fatiga, durante todo el día.",
    features: ["Soporte lumbar dinámico", "Malla transpirable", "Reposabrazos 3D ajustables", "Reclinable hasta 135°", "Base de aluminio pulido"],
  }, */
  /* {
    id: "lampara-led-arco",
    name: "Lámpara LED de escritorio con brazo articulado",
    cat: "iluminacion", brand: "volteck",
    price: 275, oldPrice: null, rating: 4.7, reviews: 96, badge: "Nuevo",
    img: "1507003211169-0a1dd7228f2d",
    gallery: ["1507003211169-0a1dd7228f2d", "1513542789411-b6a5d4f31634", "1516035069371-29a1b244cc32"],
    desc: "Ilumina sin reflejos ni sombras. Tres temperaturas de color, control táctil de intensidad y puerto USB de carga integrado. Luz que cuida tu vista.",
    features: ["3 temperaturas de color", "Atenuación táctil", "Puerto USB de carga", "Brazo articulado 180°", "Bajo consumo LED"],
  }, */
  /* {
    id: "set-cuadernos-premium",
    name: "Set de 3 cuadernos premium tapa dura A5",
    cat: "escritorio", brand: "totto",
    price: 95, oldPrice: 129, rating: 4.6, reviews: 74, badge: "-26%",
    img: "1531297484001-80022131f5a1",
    gallery: ["1531297484001-80022131f5a1", "1544816155-12df9643f363", "1517245386807-bb43f82c33c4"],
    desc: "Papel de 120 g/m² que no traspasa la tinta, cierre elástico y marcador de cinta. Tres cuadernos de tapa dura para reuniones, ideas y planificación.",
    features: ["Papel 120 g/m²", "Tapa dura resistente", "Cierre elástico", "Marcador de cinta", "Bolsillo interior"],
  }, */
  /* {
    id: "soporte-laptop-aluminio",
    name: "Soporte de laptop en aluminio ajustable",
    cat: "ergonomia", brand: "targus",
    price: 165, oldPrice: 210, rating: 4.8, reviews: 152, badge: "-21%",
    img: "1527864550417-7fd91fc51a46",
    gallery: ["1527864550417-7fd91fc51a46", "1544816155-12df9643f363", "1498050108023-c5249f4df085"],
    desc: "Eleva tu portátil a la altura de los ojos y mejora tu postura. Aluminio anodizado, altura regulable y ventilación que mantiene el equipo fresco.",
    features: ["Aluminio anodizado", "Altura y ángulo regulables", "Ventilación pasiva", "Compatible 11\"–17\"", "Plegable y portátil"],
  }, */
  /* {
    id: "hub-usb-c-7en1",
    name: "Hub USB-C 7 en 1 con HDMI 4K",
    cat: "tecnologia", brand: "ugreen",
    price: 210, oldPrice: null, rating: 4.7, reviews: 118, badge: null,
    img: "1517336714731-489689fd1ca8",
    gallery: ["1517336714731-489689fd1ca8", "1587829741301-dc798b83add3", "1519389950473-47ba0277781c"],
    desc: "Convierte un puerto USB-C en siete: HDMI 4K, USB 3.0, lector SD/microSD y carga PD de 100 W. Todo tu setup conectado con un solo cable.",
    features: ["HDMI 4K@30Hz", "3× USB 3.0", "Carga PD 100 W", "Lector SD / microSD", "Carcasa de aluminio"],
  }, */
  /* {
    id: "caja-archivadora-tela",
    name: "Cajas archivadoras de tela (pack de 2)",
    cat: "almacenamiento", brand: "kingsons",
    price: 120, oldPrice: 150, rating: 4.5, reviews: 63, badge: "-20%",
    img: "1558618666-fcd25c85cd64",
    gallery: ["1558618666-fcd25c85cd64", "1526170375885-4d8ecf77b99f", "1583394838336-acd977736f90"],
    desc: "Orden que se ve bien. Cajas plegables de tela con etiqueta frontal y asas reforzadas para documentos, cables o material de oficina.",
    features: ["Tela resistente lavable", "Estructura plegable", "Etiqueta frontal", "Asas reforzadas", "Pack de 2 unidades"],
  }, */
  /* {
    id: "teclado-mecanico-silencioso",
    name: "Teclado mecánico silencioso inalámbrico",
    cat: "tecnologia", brand: "amazon",
    price: 340, oldPrice: 420, rating: 4.8, reviews: 187, badge: "-19%",
    img: "1587829741301-dc798b83add3",
    gallery: ["1587829741301-dc798b83add3", "1517336714731-489689fd1ca8", "1541140532154-b024d705b90a"],
    desc: "Switches silenciosos, conexión Bluetooth para tres dispositivos y batería de larga duración. La sensación mecánica sin molestar a la oficina.",
    features: ["Switches silenciosos", "Bluetooth multi-dispositivo", "Batería recargable", "Distribución en español", "Retroiluminación tenue"],
  }, */
  /* {
    id: "portalapices-metal",
    name: "Portalápices de malla metálica",
    cat: "escritorio", brand: "pretul",
    price: 45, oldPrice: null, rating: 4.4, reviews: 51, badge: null,
    img: "1526170375885-4d8ecf77b99f",
    gallery: ["1526170375885-4d8ecf77b99f", "1524758631624-e2822e304c36", "1531297484001-80022131f5a1"],
    desc: "Clásico y práctico. Malla metálica con recubrimiento anticorrosión y base estable para lápices, tijeras y accesorios.",
    features: ["Malla metálica robusta", "Recubrimiento anticorrosión", "Base estable", "Diseño ventilado"],
  }, */
  /* {
    id: "reposapies-ergonomico",
    name: "Reposapiés ergonómico con inclinación",
    cat: "ergonomia", brand: "dt3",
    price: 135, oldPrice: 175, rating: 4.6, reviews: 88, badge: "-23%",
    img: "1541140532154-b024d705b90a",
    gallery: ["1541140532154-b024d705b90a", "1600585154340-be6161a56a0c", "1503602642458-232111445657"],
    desc: "Alivia la presión en piernas y espalda. Superficie con masaje texturizado e inclinación ajustable para una postura sentada más saludable.",
    features: ["Inclinación ajustable", "Superficie de masaje", "Antideslizante", "Soporta hasta 120 kg"],
  }, */
  /* {
    id: "boligrafos-gel-set",
    name: "Set de 12 bolígrafos de gel de secado rápido",
    cat: "escritorio", brand: "totto",
    price: 38, oldPrice: 52, rating: 4.7, reviews: 142, badge: "-27%",
    img: "1544816155-12df9643f363",
    gallery: ["1544816155-12df9643f363", "1531297484001-80022131f5a1", "1517245386807-bb43f82c33c4"],
    desc: "Trazo suave y uniforme, tinta de secado rápido que no mancha y grip ergonómico. Doce colores para notas que se disfrutan.",
    features: ["Tinta de secado rápido", "Punta 0.5 mm", "Grip ergonómico", "12 colores", "Antimanchas"],
  }, */
  /* {
    id: "lampara-pie-oficina",
    name: "Lámpara de pie regulable para oficina",
    cat: "iluminacion", brand: "volteck",
    price: 420, oldPrice: null, rating: 4.6, reviews: 47, badge: "Nuevo",
    img: "1513542789411-b6a5d4f31634",
    gallery: ["1513542789411-b6a5d4f31634", "1507003211169-0a1dd7228f2d", "1516035069371-29a1b244cc32"],
    desc: "Luz ambiental cálida y funcional a la vez. Regulador continuo, cabezal orientable y base de peso ligero para reubicarla con facilidad.",
    features: ["Regulador continuo", "Cabezal orientable", "Luz cálida antifatiga", "Base estable", "Bajo consumo"],
  }, */
  /* {
    id: "mousepad-xl-cuero",
    name: "Alfombrilla XL de cuero sintético",
    cat: "escritorio", brand: "ugreen",
    price: 75, oldPrice: 99, rating: 4.7, reviews: 109, badge: "-24%",
    img: "1516035069371-29a1b244cc32",
    gallery: ["1516035069371-29a1b244cc32", "1497215728101-856f4ea42174", "1519389950473-47ba0277781c"],
    desc: "Protege tu escritorio y unifica tu setup. Superficie de cuero sintético con doble cara y bordes cosidos que no se deshilachan.",
    features: ["Cuero sintético premium", "Doble cara reversible", "Bordes cosidos", "80 × 40 cm", "Base antideslizante"],
  }, */
  {
    id: "regulador-automatico-voltaje-1000va-500w",
    name: "Regulador automático voltaje 1000VA/500W",
    sku: "FVR-1012",
    cat: "energia", brand: "forza",
    price: 280, oldPrice: null, rating: 4.8, reviews: 0, badge: "Nuevo",
    img: "img/productos/fvr1012-forza.png",
    gallery: ["img/productos/fvr1012-forza.png"],
    // youtube: "ID_DEL_VIDEO_DE_YOUTUBE", // opcional: agrega este campo para mostrar un video del producto en la ficha
    desc: "El Regulador Automático de Voltaje de Forza (o acondicionador de línea) es la solución fiable que ofrece la protección adecuada para sus equipos y electrónicos delicados contra los efectos nocivos de irregularidades en el suministro eléctrico",
    features: ["Capacidad: 1000VA/500W", "Voltage: 220V", "VA de salida: 1000 VA", "Receptáculo: 4 x NEMA 5-15R"],
  },
  /* {
    id: "archivador-cajones",
    name: "Archivador de 3 cajones con ruedas",
    cat: "almacenamiento", brand: "trupper",
    price: 560, oldPrice: 690, rating: 4.7, reviews: 72, badge: "-19%",
    img: "1583394838336-acd977736f90",
    gallery: ["1583394838336-acd977736f90", "1558618666-fcd25c85cd64", "1526170375885-4d8ecf77b99f"],
    desc: "Almacenamiento móvil y seguro. Tres cajones con cerradura, ruedas silenciosas y acabado metálico resistente para documentos y material.",
    features: ["3 cajones con cerradura", "Ruedas silenciosas", "Estructura metálica", "Cierre suave", "Fácil montaje"],
  }, */
  /* {
    id: "notas-adhesivas-set",
    name: "Set de notas adhesivas y marcadores de página",
    cat: "escritorio", brand: "totto",
    price: 28, oldPrice: null, rating: 4.5, reviews: 65, badge: null,
    img: "1517245386807-bb43f82c33c4",
    gallery: ["1517245386807-bb43f82c33c4", "1544816155-12df9643f363", "1531297484001-80022131f5a1"],
    desc: "Organiza ideas y prioridades de un vistazo. Notas de colores con adhesivo reposicionable y banderitas para marcar lo importante.",
    features: ["Adhesivo reposicionable", "Colores surtidos", "Banderitas incluidas", "No dejan residuo"],
  }, */
  /* {
    id: "monitor-stand-cajon",
    name: "Elevador de monitor con cajón organizador",
    cat: "escritorio", brand: "targus",
    price: 230, oldPrice: 289, rating: 4.8, reviews: 121, badge: "-20%",
    img: "1497215728101-856f4ea42174",
    gallery: ["1497215728101-856f4ea42174", "1524758631624-e2822e304c36", "1516035069371-29a1b244cc32"],
    desc: "Sube el monitor a la altura ideal y gana espacio de guardado. Cajón deslizante y hueco inferior para teclado y accesorios.",
    features: ["Altura ergonómica", "Cajón organizador", "Espacio para teclado", "Madera resistente", "Montaje sin herramientas"],
  }, */
  /* {
    id: "webcam-full-hd",
    name: "Webcam Full HD 1080p con micrófono",
    cat: "tecnologia", brand: "tapo",
    price: 185, oldPrice: 235, rating: 4.6, reviews: 98, badge: "-21%",
    img: "1587829741301-dc798b83add3",
    gallery: ["1587829741301-dc798b83add3", "1519389950473-47ba0277781c", "1498050108023-c5249f4df085"],
    desc: "Videollamadas nítidas con enfoque automático, micrófono con reducción de ruido y cubierta de privacidad. Conéctala y listo.",
    features: ["Full HD 1080p", "Enfoque automático", "Micrófono con reducción de ruido", "Cubierta de privacidad", "Plug & play USB"],
  }, */

  /* ---- JBL · Audio profesional ---- */
  {
    id: "jbl-grip-ai-sound-boost-negro",
    name: "JBL GRIP AI SOUND BOOST NEGRO",
    sku: "JBLGRIPBLKAM",
    cat: "audio-video", brand: "jbl",
    price: 1637, oldPrice: null, rating: 4.3, reviews: 0, badge: "Nuevo",
    img: "img/productos/jbl-gripblkam.png",
    gallery: ["img/productos/jbl-gripblkam.png"],
    desc: "JBL GRIP AI SOUND BOOST NEGRO*SONIDO JBL ORIGINAL PRO+AI SOUND BOOST*ILUMINACION DINAMICA TRASERA*14 DE BATERIA*RESISTENCIA IP68*COMPACTO Y ERGONOMICO*16W",
    features: ["JBL Original Pro Sound + AI Sound Boost", "Graves potentes y agudos claros optimizados automáticamente para un sonido más envolvente.", "Iluminación ambiental dinámica", "Luz trasera que se adapta al ambiente para crear la atmósfera perfecta.", "Hasta 14 horas de reproducción", "Disfruta tu música todo el día con Playtime Boost.", "Resistencia total IP68", "Impermeable", "A prueba de polvo", "Resistente a caídas", "Diseño compacto y ergonómico", "Fácil de sujetar y llevar a cualquier lugar.", "Rendimiento de audio", "Potencia: 16W", "Respuesta de frecuencia: 70 Hz – 20 kHz", "Relación señal/ruido: > 80 dB"],
  },
  {
    id: "jbl-grip-ai-sound-boost-azul",
    name: "JBL GRIP AI SOUND BOOST AZUL",
    sku: "JBLGRIPBLUAM",
    cat: "audio-video", brand: "jbl",
    price: 1635, oldPrice: null, rating: 4.3, reviews: 0, badge: "Nuevo",
    img: "img/productos/jblgripbluam-jbl.png",
    gallery: ["img/productos/jblgripbluam-jbl.png"],
    desc: "JBL GRIP AI SOUND BOOST AZUL*SONIDO JBL ORIGINAL PRO+AI SOUND BOOST*ILUMINACION DINAMICA TRASERA*14 DE BATERIA*RESISTENCIA IP68*COMPACTO Y ERGONOMICO*16W",
    features: ["JBL Original Pro Sound + AI Sound Boost", "Graves potentes y agudos claros optimizados automáticamente para un sonido más envolvente.", "Iluminación ambiental dinámica", "Luz trasera que se adapta al ambiente para crear la atmósfera perfecta.", "Hasta 14 horas de reproducción", "Disfruta tu música todo el día con Playtime Boost.", "Resistencia total IP68", "Impermeable", "A prueba de polvo", "Resistente a caídas", "Diseño compacto y ergonómico", "Fácil de sujetar y llevar a cualquier lugar.", "Rendimiento de audio", "Potencia: 16W", "Respuesta de frecuencia: 70 Hz – 20 kHz", "Relación señal/ruido: > 80 dB", "Conectividad avanzada", "Bluetooth 5.4", "Conexión más rápida, estable y eficiente.", "Auracast™", "Conecta múltiples altavoces para una experiencia de sonido envolvente.", "App compatible (iOS & Android)", "Controla funciones y personaliza tu experiencia.", "Batería y carga", "Tipo: Li-ion 10.01 Wh", "Tiempo de carga: 3 horas", "Autonomía: hasta 14 horas", "Diseño y dimensiones", "Tamaño: 6.4 × 15.3 × 6.5 cm", "Peso: 0.385 kg", "Contenido de la caja", "1 × JBL Grip", "1 × Guía rápida", "1 × Tarjeta de garantía y seguridad", "Conectividad avanzada", "Bluetooth 5.4", "Conexión más rápida, estable y eficiente.", "Auracast™", "Conecta múltiples altavoces para una experiencia de sonido envolvente.", "App compatible (iOS & Android)", "Controla funciones y personaliza tu experiencia.", "Batería y carga", "Tipo: Li-ion 10.01 Wh", "Tiempo de carga: 3 horas", "Autonomía: hasta 14 horas", "Diseño y dimensiones", "Tamaño: 6.4 × 15.3 × 6.5 cm", "Peso: 0.385 kg", "Contenido de la caja", "1 × JBL Grip", "1 × Guía rápida", "1 × Tarjeta de garantía y seguridad"],
  },

  // ---- BOYA · Micrófonos y grabación ---- (marca comentada / próximamente)
  /* {
    id: "boya-microfono-solapa-dual",
    name: "Micrófono de solapa inalámbrico dual",
    cat: "audio-video", brand: "boya",
    price: 520, oldPrice: 650, rating: 4.6, reviews: 71, badge: "-20%",
    img: "1590602847861-f357a9332bbc",
    gallery: ["1590602847861-f357a9332bbc", "1478737270239-2f02b77fc618"],
    desc: "Dos transmisores y un receptor para grabar entrevistas o contenido a dos voces sin cables. Se conecta a cámara, celular o laptop.",
    features: ["Dos transmisores incluidos", "Alcance de 50 m", "Cancelación de ruido ambiente", "8 h de batería", "Estuche de carga"],
  }, */
  /* {
    id: "boya-microfono-canon",
    name: "Micrófono de cañón direccional para cámara",
    cat: "audio-video", brand: "boya",
    price: 380, oldPrice: null, rating: 4.5, reviews: 48, badge: null,
    img: "1520170350707-b2da59970118",
    gallery: ["1520170350707-b2da59970118", "1478737270239-2f02b77fc618"],
    desc: "Capta la voz de quien está delante y deja fuera el ruido de los lados. Montaje antivibración y espuma antiviento incluidos.",
    features: ["Patrón supercardioide", "Montaje antivibración", "Espuma antiviento", "No necesita batería", "Aluminio ligero"],
  }, */

  // ---- MAONO · Micrófonos y streaming ---- (marca comentada / próximamente)
  /* {
    id: "maono-microfono-usb",
    name: "Micrófono USB de condensador para streaming",
    cat: "audio-video", brand: "maono",
    price: 340, oldPrice: null, rating: 4.7, reviews: 0, badge: "Nuevo",
    img: "1590602847861-f357a9332bbc",
    gallery: ["1590602847861-f357a9332bbc", "1487215078519-e21cc028cb29"],
    desc: "Voz clara en reuniones, cursos y transmisiones sin instalar nada. Control de ganancia y salida de auriculares para escucharte en tiempo real.",
    features: ["Condensador de 16 mm", "Monitoreo sin retardo", "Control de ganancia y silencio", "Trípode de escritorio", "Compatible con PC y Mac"],
  }, */
  /* {
    id: "maono-brazo-microfono",
    name: "Brazo articulado para micrófono con filtro antipop",
    cat: "audio-video", brand: "maono",
    price: 165, oldPrice: 210, rating: 4.6, reviews: 54, badge: "-21%",
    img: "1487215078519-e21cc028cb29",
    gallery: ["1487215078519-e21cc028cb29", "1590602847861-f357a9332bbc"],
    desc: "Acerca el micrófono a la boca y libera el escritorio. Muelles internos silenciosos y guía para ocultar el cable.",
    features: ["Alcance de 75 cm", "Pinza para tableros de 5,5 cm", "Filtro antipop incluido", "Guía interna de cable", "Rosca universal 5/8\""],
  }, */

  // ---- YABER · Proyectores ---- (marca comentada / próximamente)
  /* {
    id: "yaber-proyector-fullhd",
    name: "Proyector Full HD 1080p con WiFi y Bluetooth",
    cat: "audio-video", brand: "yaber",
    price: 1450, oldPrice: 1790, rating: 4.7, reviews: 83, badge: "-19%",
    img: "1626379953822-baec19c3accd",
    gallery: ["1626379953822-baec19c3accd", "1618410320928-25228d811631"],
    desc: "Convierte cualquier pared en la pantalla de la sala de reuniones. Proyecta desde laptop, celular o USB, con corrección de imagen automática.",
    features: ["Resolución nativa 1080p", "Corrección trapezoidal automática", "WiFi y Bluetooth", "HDMI y USB", "Parlantes integrados"],
  }, */
  /* {
    id: "yaber-pantalla-proyeccion",
    name: "Pantalla de proyección portátil de 100\"",
    cat: "audio-video", brand: "yaber",
    price: 295, oldPrice: null, rating: 4.4, reviews: 37, badge: null,
    img: "img/productos/yaber-pantalla-proyeccion.jpg",
    gallery: ["img/productos/yaber-pantalla-proyeccion.jpg"],
    desc: "Superficie mate que evita reflejos y se monta en minutos. Se pliega en su bolsa para llevarla a presentaciones fuera de la oficina.",
    features: ["100 pulgadas en 16:9", "Tela mate antirreflejo", "Se pliega sin marcas", "Ganchos y cuerdas incluidos", "Bolsa de transporte"],
  }, */

  // ---- TP-LINK · Redes y wifi ---- (marca comentada / próximamente)
  /* {
    id: "tp-link-router-wifi6",
    name: "Router WiFi 6 de doble banda AX1500",
    cat: "redes", brand: "tp-link",
    price: 480, oldPrice: 599, rating: 4.7, reviews: 128, badge: "-20%",
    img: "1544197150-b99a580bb7a8",
    gallery: ["1544197150-b99a580bb7a8", "1558494949-ef010cbdcc31"],
    desc: "Más velocidad y más dispositivos conectados a la vez sin que la oficina se caiga. Configuración desde el celular en pocos minutos.",
    features: ["WiFi 6 AX1500", "Cuatro antenas de alta ganancia", "Control parental y red de invitados", "4 puertos LAN gigabit", "Configuración por app"],
  }, */
  /* {
    id: "tp-link-repetidor-wifi",
    name: "Repetidor WiFi de doble banda AC1200",
    cat: "redes", brand: "tp-link",
    price: 185, oldPrice: null, rating: 4.5, reviews: 96, badge: null,
    img: "1558494949-ef010cbdcc31",
    gallery: ["1558494949-ef010cbdcc31", "1544197150-b99a580bb7a8"],
    desc: "Lleva la señal al almacén o a la sala del fondo. Se enchufa a la pared y un indicador te dice cuál es el mejor lugar para ponerlo.",
    features: ["Cobertura extra de 90 m²", "Doble banda AC1200", "Indicador de señal", "Puerto ethernet", "Instalación con un botón"],
  }, */

  // ---- ELSYS · Electrónica y señal ---- (marca comentada / próximamente)
  /* {
    id: "elsys-amplificador-4g",
    name: "Amplificador de señal celular 4G para oficina",
    cat: "redes", brand: "elsys",
    price: 890, oldPrice: null, rating: 4.4, reviews: 29, badge: null,
    img: "1562408590-e32931084e23",
    gallery: ["1562408590-e32931084e23", "1544197150-b99a580bb7a8"],
    desc: "Soluciona las llamadas que se cortan en oficinas de planta baja o con paredes gruesas. Antena exterior, amplificador interior y listo.",
    features: ["Cobertura de hasta 300 m²", "Compatible con las tres operadoras", "Antena exterior incluida", "Instalación sin obra", "Indicador de ganancia"],
  }, */
  /* {
    id: "elsys-antena-exterior",
    name: "Antena WiFi exterior de largo alcance",
    cat: "redes", brand: "elsys",
    price: 340, oldPrice: 420, rating: 4.3, reviews: 24, badge: "-19%",
    img: "1516192518150-0d8fee5425e3",
    gallery: ["1516192518150-0d8fee5425e3", "1562408590-e32931084e23"],
    desc: "Conecta el depósito o el patio a la red de la oficina. Carcasa resistente a la lluvia y al sol, pensada para quedarse fuera todo el año.",
    features: ["Resistencia a la intemperie IP65", "Alcance de hasta 500 m", "Soporte de montaje incluido", "Alimentación por cable de red", "Doble polarización"],
  }, */

  /* ---- SHELLY · Automatización del hogar ---- */
  {
    id: "shelly-1-gen3",
    name: "Interruptor WiFi empotrable Shelly 1 Gen3",
    cat: "domotica", brand: "shelly",
    price: 398, oldPrice: null, rating: 4.8, reviews: 0, badge: "Nuevo",
    img: "img/productos/shelly-1-gen3.png",
    gallery: ["img/productos/shelly-1-gen3.png"],
    desc: "Convierte en inteligente cualquier luz o equipo que ya tengas. Se instala detrás del interruptor de pared y mantiene el pulsador funcionando como siempre.",
    youtube: "UR3ZiNVbrFs",
    features: ["Se instala detrás del interruptor", "Funciona con 110-240 V y 12-48 V", "Carga de hasta 16 A", "Compatible con Alexa y Google Home", "Funciona sin nube si lo prefieres"],
  },

  {
    id: "shelly-plus-i4",
    name: "SHELLY PLUS I4",
    sku: "SHELLY PLUS I4",
    cat: "domotica", brand: "shelly",
    price: 323, oldPrice: null, rating: 4.7, reviews: 0, badge: "Nuevo",
    img: "img/productos/shelly-plus-i4.png",
    gallery: ["img/productos/shelly-plus-i4.png"],
    youtube: "",
    desc: "Controlador de 4 entradas digitales operado por Wi-Fi que \nle permite activar o desactivar manualmente cualquier \nescena creada, ejecutar acciones sincronizadas o ejecutar \nescenarios de activación complejos",
    features: [],
  },
  {
    id: "shelly-blu-button-white",
    name: "SHELLY BLU BUTTON WHITE",
    sku: "SHELLY BLU BUTTON WHITE",
    cat: "domotica", brand: "shelly",
    price: 358, oldPrice: null, rating: 4.7, reviews: 0, badge: "Nuevo",
    img: "img/productos/shelly-blu-button.png",
    gallery: ["img/productos/shelly-blu-button.png"],
    desc: "Botón Bluetooth para acciones y activación de escenas. Controla tus dispositivos inteligentes con un solo clic: apaga las luces, ajusta las persianas, abre la puerta del garaje y mucho más.\n*Para usar este dispositivo con la aplicación Shelly Smart Control, se necesita una puerta de enlace. Las puertas de enlace compatibles son Shelly BLU Gateway o cualquier dispositivo Shelly Plus, Pro o Gen3 (excepto sensores).",
    features: ["Funcionalidad de scripting para acciones ilimitadas basadas en la ubicación.", "Compatibilidad total con Home Assistant y cualquier otro dispositivo compatible con el protocolo BTHome.", "Utiliza tecnología BLE", "Permite encender/apagar electrodomésticos, atenuar la luz y activar escenas.", "Cifrado", "Tiene alerta sonora y luminosa; modo \"Silencio\" para silenciar los sonidos.", "Función \"Encuéntrame\" activada por el modo baliza.", "Alcance de 10 m en interiores y 30 m en exteriores.", "Funciona con dispositivos Plus, Pro y Gen3."],
  },
  {
    id: "shelly-1-mini-gen3",
    name: "SHELLY 1 MINI GEN3",
    sku: "SHELLY 1 MINI GEN3",
    cat: "domotica", brand: "shelly",
    price: 336, oldPrice: null, rating: 4.7, reviews: 0, badge: "Nuevo",
    img: "img/productos/shelly-plus-1-mini-gen-3.png",
    gallery: ["img/productos/shelly-plus-1-mini-gen-3.png"],
    youtube: "yjXxljucoWU",
    desc: "El interruptor de relé Wi-Fi más pequeño del mundo.\n Automatiza y controla luces, garaje, riego y pequeños \nelectrodomésticos en menos de 10 minutos. Equipado con \nchip Shelly y todas las funciones Gen3",
    features: ["Certificado por New Matter*. *Disponible tras actualizar al firmware más reciente.", "Equipado con un nuevo procesador y mayor memoria flash - ESP Shelly", "Mayor durabilidad de los terminales.", "Admite hasta 8 A a 240 V CA y 5 A a 30 V CC.", "Contactos secos (libres de potencial): opción para el control de contactores.", "Extensor de alcance Wi-Fi y puerta de enlace Bluetooth", "¡No requiere hub! Control sencillo a través de la aplicación Shelly Smart Control, compatible con la mayoría de plataformas y protocolos, así como con asistentes de voz. Úsalo con Alexa, Home Assistant o tu sistema de automatización preferido.", "Admite scripting, webhooks, MQTT, WebSocket, HTTPS, UDP, TLS y certificados personalizados.", "Admite comunicación KNXnet/IP."],
  },

   {
    id: "shelly-1-gen4",
    name: "SHELLY 1 GEN4",
    sku: "SHELLY 1 GEN4",
    cat: "domotica", brand: "shelly",
    price: 406, oldPrice: null, rating: 4.7, reviews: 0, badge: "Nuevo",
    img: "img/productos/shelly-1-gen4.png",
    gallery: ["img/productos/shelly-1-gen4.png"],
    desc: "Interruptor inteligente de un canal con contactos secos para controlar luces y electrodomésticos. Disfrute de un rendimiento más rápido y compatibilidad con múltiples protocolos (Wi-Fi, Zigbee, Matter, Bluetooth).",
    features: ["Novedad : conectividad multiprotocolo: elige entre Bluetooth, Wi-Fi o Zigbee.", "Nuevo - Certificado como materia.", "Nuevo : funciona con Apple HomeKit: controla los dispositivos conectados usando la app Casa de Apple o Siri a través de Matter.", "Contactos secos (libres de potencial): opción para el control de contactores. Permite encender y apagar dispositivos de baja tensión.", "Soporte de baja y alta tensión", "Ideal para instalar detrás de interruptores y enchufes existentes.", "Admite horarios, escenas y acciones locales.", "Admite scripting, HTTPS, MQTTS y Web Sockets entrantes y salientes.", "Admite componentes virtuales", "Admite comunicación KNXnet/IP.", "Sensor de temperatura interno para protección contra sobrecalentamiento", "¡No requiere hub! Control sencillo a través de la aplicación Shelly Smart Control, compatible con la mayoría de plataformas y protocolos, así como con asistentes de voz. Úsalo con Alexa, Sir, Home Assistant, Apple HomeKit o tu plataforma de automatización preferida."],
  },

  {
    id: "shelly-blu-button-tough-1",
    name: "SHELLY BLU BUTTON TOUGH 1",
    sku: "SHELLY BLU BUTTON TOUGH 1",
    cat: "domotica", brand: "shelly",
    price: 397, oldPrice: null, rating: 4.7, reviews: 0, badge: "Nuevo",
    img: "img/productos/shelly-blu-button-tough.png",
    gallery: ["img/productos/shelly-blu-button-tough.png"],
    desc: "Controla al instante tus dispositivos inteligentes con un solo clic: iluminación, electrodomésticos, escenas, etc. Es resistente al polvo, a las salpicaduras y a los impactos, lo que garantiza su fiabilidad tanto en interiores como en exteriores.\n*Para utilizar este dispositivo con la aplicación Shelly Smart Control, es necesario un gateway. Los gateways compatibles son Shelly BLU Gateway o cualquier dispositivo Shelly Plus, Pro o Gen3 (a excepción de los sensores).",
    features: ["Permite encender y apagar dispositivos, regular la intensidad de la luz y activar escenas", "Resistente a golpes, salpicaduras y polvo (clasificación IP54)", "Funcionalidad de scripting para una variedad ilimitada de acciones basadas en la ubicación", "Compatibilidad total con Home Assistant y cualquier otro dispositivo compatible con el protocolo BTHome (sin necesidad de configuración adicional)", "Utiliza tecnología BLE", "Cifrado (alto nivel de seguridad)", "Alertas sonoras y modo \"Silencio\" (sin sonido)", "Función \"Buscar\" activada mediante el modo baliza (beacon)", "Alcance de 10 m en interiores y 30 m en exteriores", "Compatible con dispositivos Plus, Pro y Gen3"],
  },

  {
    id: "shelly-pro-4pm",
    name: "SHELLY PRO 4PM",
    sku: "SHELLY PRO 4PM",
    cat: "domotica", brand: "shelly",
    price: 1376, oldPrice: null, rating: 4.7, reviews: 0, badge: "Nuevo",
    img: "img/productos/shelly-pro-4pm.png",
    gallery: ["img/productos/shelly-pro-4pm.png"],
    desc: "Interruptor inteligente profesional de 4 canales para carril \nDIN con medición de potencia, compatible con hasta 16 A \npor canal. Controla y monitoriza el consumo de cada canal \npor separado.",
    features: ["Conexión LAN, Wi-Fi y Bluetooth", "4 salidas, 16 A cada una. Corriente máxima total del dispositivo: 40 A.", "Medición precisa de la potencia", "Protección contra sobrecarga y sobretensión de la carga.", "Se puede montar en riel DIN.", "Pantalla a color de 1,8 pulgadas con teclas de navegación.", "Control de 1 fase", "Control sencillo a través de la aplicación Shelly, diversos protocolos y plataformas, así como asistente de voz.", "Admite comunicación KNXnet/IP."],
  },

  {
    id: "shelly-pro-1",
    name: "Shelly Pro 1",
    sku: "Shelly Pro 1",
    cat: "domotica", brand: "shelly",
    price: 876, oldPrice: null, rating: 4.7, reviews: 0, badge: "Nuevo",
    img: "img/productos/shelly-pro1.jpg",
    gallery: ["img/productos/shelly-pro1.jpg"],
    desc: "Relé monofásico, 1 canal, con salidas libres de potencial \n(contactos secos), que admite hasta 16 A para \nautomatización profesional de luces y electrodomésticos \npara uso residencial o comercial.",
    features: ["Conexión LAN, Wi-Fi y Bluetooth", "1 salida, 16 A", "Contactos secos", "Control sencillo a través de la aplicación Shelly, diversos protocolos y plataformas, así como asistentes de voz.", "Admite comunicación KNXnet/IP."],
  },

  {
    id: "shelly-blu-door-window-white",
    name: "SHELLY BLU DOOR/WINDOW WHITE",
    sku: "SHELLY BLU DOOR/WINDOW WHITE",
    cat: "domotica", brand: "shelly",
    price: 375, oldPrice: null, rating: 4.7, reviews: 0, badge: "Nuevo",
    img: "img/productos/shelly-blu-door-window.png",
    gallery: ["img/productos/shelly-blu-door-window.png"],
    desc: "Diseñado para detectar la apertura o el cierre de puertas y \nventanas e informar de ello inmediatamente, activando \nescenarios de domótica según corresponda. También \npuede medir el ángulo de inclinación y la luminosidad.\n*Para usar este dispositivo con la app Shelly Smart Control, \nse necesita una puerta de enlace. Las puertas de enlace \ncompatibles son Shelly BLU Gateway o cualquier \ndispositivo Shelly Plus, Pro o Gen3 (excepto los sensores)",
    features: ["Conectividad dual: Bluetooth 5.0 y conectividad Zigbee.", "Larga duración de la batería: hasta 5 años con la batería CR2032 de 3V incluida.", "Detección de eventos de apertura y cierre de puertas/ventanas.", "Medición del ángulo: Del ángulo de inclinación de puertas/ventanas de tipo oscilobatiente.", "Sensor de luz: Capacidad de medición de iluminación (luz).", "Comunicación cifrada: cifrado AES (modo CCM) para una comunicación inalámbrica segura.", "Compacto y ligero: para una instalación versátil.", "Modo baliza: Para la transmisión periódica del estado."],
  },
  {
    id: "shelly-blu-motion",
    name: "SHELLY BLU MOTION",
    sku: "SHELLY BLU MOTION",
    cat: "domotica", brand: "shelly",
    price: 432, oldPrice: null, rating: 4.7, reviews: 0, badge: "Nuevo",
    img: "img/productos/shelly-blu-motion.png",
    gallery: ["img/productos/shelly-blu-motion.png"],
    desc: "Un sensor de movimiento con respuesta instantánea y batería de larga duración. Las alertas rápidas te mantendrán informado de cualquier movimiento en tiempo real, mientras que su batería duradera te garantiza tranquilidad a largo plazo.\n*Para usar este dispositivo con la aplicación Shelly Smart Control, se necesita una puerta de enlace. Las puertas de enlace compatibles son Shelly BLU Gateway o cualquier dispositivo Shelly Plus, Pro o Gen3 (excepto sensores).",
    features: ["Batería: CR2477 3V (incluida)", "Duración de la batería: hasta 5 años.", "Adhesivo de pared incluido.", "Sensor LUX para acciones basadas en la luminosidad de la habitación.", "Sensibilidad ajustable para adaptarse a sus necesidades.", "Cifrado", "Modo baliza", "Puede integrarse en escenarios y escenas de automatización con otros dispositivos."],
  },
  {
    id: "shelly-blu-gateway",
    name: "Shelly BLU Gateway",
    sku: "Shelly BLU Gateway",
    cat: "domotica", brand: "shelly",
    price: 371, oldPrice: null, rating: 4.7, reviews: 0, badge: "Nuevo",
    img: "img/productos/shelly-blu-gateway.png",
    gallery: ["img/productos/shelly-blu-gateway.png"],
    desc: "Un adaptador que funciona como puente entre tus dispositivos Shelly BLU y el ecosistema Shelly. Recibe señales Bluetooth y las envía a la nube o localmente a otro dispositivo sin Bluetooth.",
    features: ["Enchufe USB tipo A", "Programación de scripts para control local", "Admite MQTT, WebSocket o cualquier otro sistema de automatización del hogar compatible, como Home Assistant.", "extensor de alcance Wi-Fi", "Puede escanear la red Bluetooth y encontrar todos los demás dispositivos Bluetooth; puede activar acciones en dispositivos de terceros mediante scripts."],
  },

  {
    id: "shelly-2pm-gen3",
    name: "SHELLY 2PM GEN3",
    sku: "SHELLY 2PM GEN3",
    cat: "domotica", brand: "shelly",
    price: 582, oldPrice: null, rating: 4.7, reviews: 0, badge: "Nuevo",
    img: "img/productos/shelly-2pm-gen3.png",
    gallery: ["img/productos/shelly-2pm-gen3.png"],
    desc: "Controla y supervisa de forma remota dos circuitos eléctricos diferentes, o persianas enrollables, estores y otros motores bidireccionales desde cualquier lugar. Incluye monitorización de potencia.",
    features: ["Certificado por New Matter*. *Disponible tras actualizar al firmware más reciente.", "2 canales en la misma fase", "Medición de potencia en cada canal", "Control de cubiertas (enrollables): automatiza y ajusta la posición de persianas enrollables, estores, puertas, cortinas, toldos, puertas correderas y otros motores bidireccionales.", "Control del ángulo de las lamas: utilícelo con sus persianas venecianas y controle la posición de inclinación (ángulo) de las lamas para ajustar la cantidad de luz en una habitación.", "Nuevo procesador: chip ESP-Shelly-C38F con memoria aumentada a 8 MB.", "Mayor durabilidad de los terminales.", "Componentes virtuales", "Extensor de alcance Wi-Fi y puerta de enlace Bluetooth", "Admite scripting, webhooks, MQTT, WebSocket, HTTPS, UDP, TLS y certificados personalizados.", "¡No se necesita HUB! Control sencillo a través de la aplicación Shelly Smart Control, diversos protocolos y plataformas de automatización del hogar, así como asistentes de voz.", "Admite comunicación KNXnet/IP."],
  },
  {
    id: "shelly-h-t-gen3-white",
    name: "SHELLY H&T GEN3 WHITE",
    sku: "SHELLY H&T GEN3 WHITE",
    cat: "domotica", brand: "shelly",
    price: 634, oldPrice: null, rating: 4.5, reviews: 0, badge: "Nuevo",
    img: "img/productos/shelly-ht-gen3-blanco.png",
    gallery: ["img/productos/shelly-ht-gen3-blanco.png"],
    desc: "Sensor de temperatura y humedad Wi-Fi de última generación con pantalla de tinta electrónica. Mejorado con nuestro chip Shelly de 8 MB, incorpora todas las funciones de los dispositivos Gen3.",
    features: ["No se necesita concentrador! Control sencillo a través de la aplicación Shelly Smart Control, así como de diversos protocolos, plataformas y asistentes de voz.", "Equipado con el nuevo chip Shelly: 8 MB de memoria y mayor capacidad de respuesta.", "Mejorado con una pantalla de tinta electrónica de bajo consumo y reloj incorporado.", "Funciona con puerto USB tipo C (para una conexión más rápida).", "Pilas: 4 pilas AA (LR) de 1,5 V (no incluidas)", "Bajo consumo de batería (hasta 1 año de duración de las baterías)", "Se puede montar en la pared.", "Tiene un servidor web integrado y se conecta a tu red Wi-Fi.", "Protección contra sobrecarga", "No necesita instalación"],
  },
  {
    id: "shelly-plus-add-on",
    name: "SHELLY PLUS ADD-ON",
    sku: "Shelly Plus Add-On",
    cat: "domotica", brand: "shelly",
    price: 331, oldPrice: null, rating: 4, reviews: 0, badge: "Nuevo",
    img: "img/productos/shelly-plus-addon.png",
    gallery: ["img/productos/shelly-plus-addon.png"],
    desc: "Interfaz de sensor con aislamiento galvánico para todos los relés Shelly Plus. Úsela para medir la temperatura y la humedad o para conectar diversos sensores analógicos y digitales. ¡También compatible con la mayoría de los sensores Arduino!",
    features: ["Compatibilidad de Sensores: Soporta hasta 5 sensores de temperatura DS18B20 o 1 sensor de humedad y temperatura DHT22 de forma simultánea.", "Entradas Analógica y Digital: Incluye una entrada digital (para contactos secos o finales de carrera) y una analógica (rango de 0-10V).", "Ecosistema Arduino: Es totalmente compatible con la mayoría de los sensores del ecosistema Arduino.", "Aislamiento Galvánico: Garantiza una alta seguridad eléctrica al aislar las señales de los sensores de la corriente de alimentación del relé principal.", "Instalación sin Soldaduras: Cuenta con terminales de tornillo que facilitan la conexión rápida y limpia de los cables."],
  },

  


  // ---- NETAC · Almacenamiento y memorias ---- (marca comentada / próximamente)
  /* {
    id: "netac-ssd-externo-1tb",
    name: "SSD externo portátil 1 TB USB 3.2",
    cat: "almacenamiento", brand: "netac",
    price: 560, oldPrice: 720, rating: 4.7, reviews: 112, badge: "-22%",
    img: "img/productos/netac-ssd-1tb.jpg",
    gallery: ["img/productos/netac-ssd-1tb.jpg"],
    desc: "Copia de seguridad de toda la oficina en un disco que cabe en el bolsillo. Sin partes móviles: aguanta los viajes mucho mejor que un disco tradicional.",
    features: ["1 TB de capacidad", "Hasta 550 MB/s de lectura", "USB 3.2 tipo C", "Carcasa de aluminio", "Compatible con PC, Mac y celular"],
  }, */
  /* {
    id: "netac-usb-128gb",
    name: "Memoria USB 128 GB de carcasa metálica",
    cat: "almacenamiento", brand: "netac",
    price: 95, oldPrice: null, rating: 4.5, reviews: 187, badge: null,
    img: "img/productos/netac-usb-128gb.jpg",
    gallery: ["img/productos/netac-usb-128gb.jpg"],
    desc: "La memoria de siempre, pero con carcasa de metal y argolla para el llavero. Para mover presentaciones y respaldos del día a día.",
    features: ["128 GB de capacidad", "USB 3.0 de alta velocidad", "Carcasa metálica", "Argolla para llavero", "Compatible con PC y Mac"],
  }, */

  /* ---- FORZA · Energía y respaldo ---- */
  {
    id: "regleta-2200w-6-tomas-nema-universales",
    name: "Regleta 2200W, 6 tomas NEMA universales",
    sku: "PS-001B",
    cat: "energia", brand: "forza",
    price: 92, oldPrice: null, rating: 4.7, reviews: 0, badge: "Nuevo",
    img: "img/productos/regleta-forza.png",
    gallery: ["img/productos/regleta-forza.png"],
    desc: "Capacidad 2200W • Voltaje 110/220 • Tipo de entrada: NEMA 5-15P • Tipo de salida: 6 x NEMA 5-15R • Indicador Visual: Interruptor de conexión con luz",
    features: ["6 receptáculos universales de calce perfecto", "Interruptor de conexión iluminado", "Interruptor de cortacircuito incorporado", "1875-2200 watts de protección", "Enchufe de tres contactos con", "conexión a tierra", "Cable de 90 cm de longitud", "Cubierta de plástico retardador de llama", "Orificios para montaje en la pared"],
  },
  

  {
    id: "regulador-automatico-de-volt-900va-450w",
    name: "Regulador automático de volt. 900VA/450W",
    sku: "FVR-902",
    cat: "energia", brand: "forza",
    price: 225, oldPrice: null, rating: 4.7, reviews: 0, badge: "Nuevo",
    img: "img/productos/regulador-forza-900va.png",
    gallery: ["img/productos/regulador-forza-900va.png"],
    desc: "Protege tus equipos electrónicos contra cortes de energía, sobrecargas y variaciones de voltaje con el UPS Forza de 900VA/450W. Equipado con 8 tomas universales, ofrece 4 salidas con regulación automática de voltaje (AVR) y 4 salidas con protección contra sobretensiones (Surge Protection), brindando un respaldo confiable para computadoras, routers, equipos de red y dispositivos electrónicos.",
    features: ["Capacidad de 900VA / 450W", "Voltaje de entrada/salida: 220V", "8 tomas universales NEMA 5-15R", "4 tomas con regulación automática de voltaje (AVR)", "4 tomas con protección contra sobretensiones (Surge)", "Ideal para PC, módems, routers, DVR, cámaras de seguridad y equipos de oficina"],
  },
  
  {
    id: "regulador-automatico-volt-2200va-1100w",
    name: "Regulador automático volt. 2200VA/1100W",
    sku: "FVR-2202",
    cat: "energia", brand: "forza",
    price: 545, oldPrice: null, rating: 4.7, reviews: 0, badge: "Nuevo",
    img: "img/productos/regulador-fvr2202.png",
    gallery: ["img/productos/regulador-fvr2202.png"],
    desc: "El regulador automático de voltaje FVR-2202 de Forza Power Technologies cuenta con una capacidad de 2200VA/1100W, un voltaje de 220VAC y 8 salidas universales",
    features: ["Capacidad: 2200VA / 1100WVoltaje de entrada/salida: 220 VACFrecuencia: 50-60 HzTomas de corriente: 8 salidas universalesTipo de enchufe de entrada: NEMA 5-15P"],
  },
  
  {
    id: "fuente-de-alimentacion-portatil-de-700-w",
    name: "Fuente de alimentación portátil de 700 W",
    sku: "FPP-T702",
    cat: "tecnologia", brand: "forza",
    price: 8627, oldPrice: null, rating: 4.5, reviews: 0, badge: "Nuevo",
    img: "img/productos/fpp-t700.png",
    gallery: ["img/productos/fpp-t700.png"],
    desc: "Capacidad: 700VA/700W • Voltaje: 220V • Tomas de corriente: 2 NEMA 5-15R + 8 CC • Factor de forma: Torre • Forma de onda: Onda sinusoidal pura",
    features: ["-Carga ultrarapida 0 a 100% 1,5h", "-Bateria LMFP 3000 ciclos de carga", "-TurboPower Impulso instantaneo de energia", "-Ecologico sin emisiones nocivas", "-Controlar MPP para carga con panel solar", "-Funcionamiento silencioso", "-Batería LMFP de 551.25Wh (3.75V, 147Ah)", "-MPPT 12-30V, 7.5A, 180W máx", "-Pantalla LCD de fácil lectura", "-Tecnología TurboPower 1400W", "-9 puertos de salida", "-Panel de control integrado de 4 botones", "-Lámpara LED multifunción de 6W", "-Dos ventiladores incorporados", "-23,8 x 19,6 x 28,5 cm", "7.5 Kg"],
  },

  {
    id: "fuente-de-alimentacion-portatil-de-1200w",
    name: "Fuente de alimentación portátil de 1200W",
    sku: "FPP-T1202",
    cat: "tecnologia", brand: "forza",
    price: 13419, oldPrice: null, rating: 4.7, reviews: 0, badge: "Nuevo",
    img: "img/productos/fppt1202.jpg",
    gallery: ["img/productos/fppt1202.jpg"],
    desc: "Capacidad: 1200VA/1200W • Voltaje: 220V • Tomas de corriente: 3 NEMA 5-15R + 8 CC • Factor de forma: Torre • Forma de onda: Onda sinusoidal pura",
    features: ["-Batería LMFP de 1102.5Wh 26.25V 42Ah (3.75V 294Ah)", "-3000 ciclos al 80%+ de capacidad", "Carga rápida en 1,5 hr", "-MPPT 12-30V, 7.5A, 180W máx.", "-Pantalla LCD de fácil lectura", "-Tecnología TurboPower 2400W", "-10 puertos de salida", "-Panel de control integrado de 4 botones", "-Lámpara LED multifunción de 6W", "-20°C a 45°C", "-Dos ventiladores incorporados", "31.6 x 24 x 30 cm", "-13.6 Kg"],
  },

  {
    id: "panel-solar-portatil-60w-ip65-resisten",
    name: "Panel Solar Portátil 60W | IP65 Resisten",
    sku: "FPV-T060W",
    cat: "tecnologia", brand: "forza",
    price: 2350, oldPrice: null, rating: 4.5, reviews: 0, badge: "Nuevo",
    img: "img/productos/fpv-t060w.jpg",
    gallery: ["img/productos/fpv-t060w.jpg"],
    desc: "Energía solar confiable con tecnología monocristalina y un sistema de carga versátil con puntas intercambiables y puertos USB de carga rápida, incluido USB-C®.",
    features: ["-Alta Conversión de Energía: Los paneles de silicio monocristalino de alta densidad", "convierten hasta un 23 % de la luz solar en energía útil, maximizando el", "rendimiento para cargar dispositivos en cualquier entorno", "-Salida CC versátil: Con 60W de salida CC, un cable desmontable con 10 puntas", "intercambiables y tres puertos USB de carga rápida (incluyendo USB-C® de hasta", "30W y dos USB-A de hasta 18W), se adapta a diversas necesidades energéticas en", "cualquier situación", "- Diseño Resistente: La super\u001fcie de lona con costuras de precisión y la cubierta de", "polímero ETFE con certi\u001fcación IP65 protegen contra agua y polvo, asegurando un", "rendimiento duradero en condiciones exteriores exigentes", "-Carga Protegida: Un chip inteligente detecta automáticamente los dispositivos", "conectados y optimiza la velocidad de carga, garantizando protección total", "contra sobrecargas, sobrecalentamientos y cortocircuito", "- Soportes ajustables: Equipado con soportes integrados de altura regulable,", "permite ajustar el ángulo del panel entre 35° y 55° para una captación solar", "óptima y una instalación rápida y estable en cualquier superficie"],
  },

   {
    id: "panel-solar-portatil-200w-ip67",
    name: "Panel Solar Portátil 200W | IP67",
    sku: "FPV-T200W",
    cat: "tecnologia", brand: "forza",
    price: 5930, oldPrice: null, rating: 4.5, reviews: 0, badge: "Nuevo",
    img: "img/productos/fpv-t200w.jpg",
    gallery: ["img/productos/fpv-t200w.jpg"],
    desc: "Convierte la luz solar en energía confiable con sus células monocristalinas de alta eficiencia y conexión 6-en-1 para todos tus dispositivos.",
    features: ["-Diseño portátil y plegable", "-IPG7 resistencia al agua y polvo", "-Alta conversión de energía", "-4 paneles solares", "-Energia limpia", "-Angulos ajustables 35º/45º/55º", "-Conexion universal 6 en 1", "-Asas magneticas"],
  },

  {
    id: "panel-solar-portatil-100w-ip67",
    name: "Panel Solar Portátil 100W | IP67",
    sku: "FPV-T100W",
    cat: "tecnologia", brand: "forza",
    price: 3265, oldPrice: null, rating: 4.7, reviews: 0, badge: "Nuevo",
    stock: 0,
    img: "img/productos/fpvt100w.jpg",
    gallery: ["img/productos/fpvt100w.jpg"],
    desc: "Convierte la luz solar en energía confiable con sus células monocristalinas de alta eficiencia y conexión 6-en-1 para todos tus dispositivos.",
    features: [],
  },

  // ---- ENERSAFE · UPS y protección eléctrica ---- (marca comentada / próximamente)

  /* {
    id: "enersafe-ups-800va",
    name: "UPS de respaldo 800 VA con pantalla LCD",
    cat: "energia", brand: "enersafe",
    price: 690, oldPrice: null, rating: 4.6, reviews: 0, badge: "Nuevo",
    img: "img/productos/enersafe-ups-800va.jpg",
    gallery: ["img/productos/enersafe-ups-800va.jpg"],
    desc: "Respaldo para el equipo de recepción o la caja registradora. La pantalla muestra la carga conectada y la batería restante de un vistazo.",
    features: ["800 VA / 400 W", "Pantalla LCD de estado", "6 tomas con respaldo", "Protección para línea de red", "Batería reemplazable"],
  }, */
  /* {
    id: "enersafe-bateria-respaldo",
    name: "Batería de respaldo portátil 300 W",
    cat: "energia", brand: "enersafe",
    price: 1150, oldPrice: 1390, rating: 4.7, reviews: 34, badge: "-17%",
    img: "img/productos/enersafe-bateria-respaldo.jpg",
    gallery: ["img/productos/enersafe-bateria-respaldo.jpg"],
    desc: "Energía donde no llega el enchufe: ferias, obras o cortes largos. Carga laptops, luces y herramientas pequeñas, y se recarga en la toma común.",
    features: ["300 W de salida continua", "Tomas AC, USB-C y USB-A", "Batería de litio de larga vida", "Pantalla de carga restante", "Asa de transporte"],
  }, */

  /* ---- UGREEN · Cables y conectividad ---- */
  {
    id: "mini-power-bank-ugreen-5000mah",
    name: "MINI POWER BANK UGREEN 5000mAh",
    sku: "35338",
    cat: "energia", brand: "ugreen",
    price: 400, oldPrice: null, rating: 4.7, reviews: 0, badge: "Nuevo",
    img: "img/productos/MINI-POWER-BANK-UGREEN-5000mAh.png",
    gallery: ["img/productos/MINI-POWER-BANK-UGREEN-5000mAh.png", "img/productos/MINI-POWER-BANK-UGREEN-women.jpg", "img/productos/mini-power-bank-stand.jpg"],
    desc: "MINI POWER BANK UGREEN 5000mAh 22.5W*CONECTOR USB-C INTEGRADO*SOPORTE PLEGABLE INCORPORADO*INCLUYE CABLE USB-C a USB-C 0,5m*PANTALLA CON NIVEL DE CARGA",
    features: ["Caracteristicas, Carga ultrarrápida 22.5W", "Recarga tu iPhone 15 hasta 55% en solo 30 minutos, ofreciendo una velocidad hasta 3 veces superior a la carga convencional.", "Conector USB-C integrado", "Olvídate de los cables sueltos. Su conector USB-C plegable integrado protege el puerto y permite una carga directa, rápida y segura.", "Soporte plegable incorporado", "Disfruta de tus videos, llamadas o videollamadas en posición vertical u horizontal con total estabilidad y comodidad visual.", "Diseño ultra compacto", "Peso: 112 g", "Medidas: 79 × 38 × 26 mm", "Perfecto para llevar en el bolsillo, bolso o mochila sin ocupar espacio.", "Energía para todo el día", "Con 5000 mAh, proporciona respaldo suficiente para mantener tu smartphone activo durante tus jornadas más exigentes."],
  },

  {
    id: "cable-usb-3-2-gen-2-tipo-c-a-c-1m",
    name: "CABLE USB 3.2 Gen 2 TIPO-C a C 1M",
    sku: "80150",
    cat: "redes", brand: "ugreen",
    price: 215, oldPrice: null, rating: 4.7, reviews: 0, badge: "Nuevo",
    img: "img/productos/cable-usb-3.2-gen2.jpeg",
    gallery: ["img/productos/cable-usb-3.2-gen2.jpeg"],
    desc: "Carga y transfiere datos a máxima velocidad con este cable USB-C a USB-C 3.2 Gen 2. Soporta carga rápida de hasta 100W (5A) y transferencia de datos de hasta 10 Gbps, ideal para laptops, tablets, smartphones y otros dispositivos USB-C. Además, es compatible con Thunderbolt 3, ofreciendo un rendimiento confiable para trabajo y entretenimiento.",
    features: ["USB C", "10 Gbps,", "CARGA100 W", "video 4K de hasta 3840x2160 @ 60 HZ", "20 V 5 A,", "20 x 14 x 3 cm", "100 gramos"],
  },

  {
    id: "hub-usb-3-0-4-puertos-ugreen",
    name: "HUB USB 3.0 4 PUERTOS UGREEN",
    sku: "20291",
    cat: "redes", brand: "ugreen",
    price: 141, oldPrice: null, rating: 4.7, reviews: 0, badge: "Nuevo",
    img: "img/productos/ugreen-adaptador.png",
    gallery: ["img/productos/ugreen-adaptador.png"],
    desc: "expande la conectividad de tu computadora de forma rápida y segura con el Hub USB 3.0 UGREEN de 4 puertos. Convierte un solo puerto USB en 4 puertos USB 3.0, ideales para conectar memorias USB, discos duros, teclado, mouse, impresoras y otros periféricos al mismo tiempo, Velocidad de transferencia de hasta 5 Gbps, permitiendo transferir 1 GB en aproximadamente 3 segundos, Cable integrado de 1 metro, Conexión estable y segura, Protección inteligente",
    features: ["5GBPS ALTA VELOCIDAD", "CABLE DE 1M", "4X USB 3.0", "INDICADOR LED"],
  },

  {
    id: "ugreen-revodok-hub-usb-c-6en1",
    name: "UGREEN REVODOK HUB USB-C 6EN1",
    sku: "15598",
    cat: "tecnologia", brand: "ugreen",
    price: 375, oldPrice: null, rating: 4.7, reviews: 1, badge: "Nuevo",
    img: "img/productos/ugreen-revodok-6-in-1.png",
    gallery: [ "img/productos/ugreen-revodok-6-in-1.png" ,"img/productos/ugreen-revodok-6-in-1-faster.png", "img/productos/ugreen-revodok-6-in-1-compatibilidad.png"],
    desc: "UGREEN REVODOK HUB USB-C 6EN1*HDMI 4K@30Hz, ETHERNET GIGABIT, CARGA PD 100W, 3x USB-A 3.0 5Gbps*DISEÑO PREMIUM METALICO Y ELEGANTE",
    features: ["Expansión total 6-en-1", "HDMI 4K @30Hz", "Ethernet Gigabit RJ45", "Carga PD hasta 100W", "3x USB-A 3.0 (5Gbps)", "Todo en un diseño elegante y compacto.", "Concentrador USB-C 6 en 1: Este concentrador Ethernet USB-C convierte un único puerto USB-C en 6 puertos con HDMI 4K a 30 Hz, Ethernet Gigabit, carga PD de 100 W y 3 puertos USB-A 3.0.", "Conexión Gigabit Ethernet estable: el concentrador USB C viene con un puerto Ethernet Gigabit RJ45 que admite 1000 Mbps con una conexión más rápida y confiable, para que disfrutes de una experiencia de juego o trabajo en línea más fluida.", "Imágenes 4K HD: La base USB-C cuenta con un puerto HDMI 4K a 30 Hz. Disfrute de películas con una calidad visual impresionante, reuniones en línea en alta definición o extienda su pantalla para presentaciones increíblemente atractivas. Nota: No es compatible con HDR/3D.", "Carga rápida PD de 100 W: Admite carga de paso USB-C de hasta 85 W a través del puerto Tipo-C para mantener tu portátil con energía. Se reservan 15 W para otras operaciones de la interfaz. Nota: El puerto USB-C solo admite carga y no admite transmisión de datos ni salida de vídeo."],
  },

  {
    id: "power-bank-10-000mah-55w-nexode-pro",
    name: "POWER BANK 10.000mAh 55W NEXODE PRO",
    sku: "75701B",
    cat: "energia", brand: "ugreen",
    price: 690, oldPrice: null, rating: 4, reviews: 109, badge: "Nuevo",
    img: "img/productos/ugreen-nexode-pro-power-bank-10000mah.png",
    gallery: ["img/productos/ugreen-nexode-pro-power-bank-10000mah.png", "img/productos/ugreen-nexode-pro-power-bank-10000mah-super-fast.jpg", "img/productos/ugreen-nexode-pro-power-bank-couple.jpg"],
    desc: "POWER BANK 10.000mAh 55W NEXODE PRO*CABLE USB-C INTEGRADO DE NYLON TRENZADO 22CM*AUTORIZADA PARA AVIONES(AIRLINE SAFE)*PANTALLA DIGITAL 1,18\"*CARGA TRIPLE SIMUL",
    features: ["Características Destacadas", "Rendimiento Ultra Rápido de 55W: Diseñado para la máxima exigencia. Con una salida individual de hasta 55W tanto en su puerto USB-C como en su cable integrado, es capaz de cargar a máxima velocidad smartphones, tablets, consolas portátiles e incluso laptops compatibles con USB-C.", "Cable USB-C Integrado y Reforzado: Cuenta con un cable de nailon trenzado de 22 cm sumamente duradero, probado para soportar más de 10,000 ciclos de flexión y conexión. ¿Lo mejor? ¡Funciona también como una práctica correa de transporte para llevarlo con total comodidad!", "Celdas de Alta Densidad 21700 (10,000mAh): Utiliza la tecnología avanzada de baterías de iones de litio 21700, ofreciendo una eficiencia energética superior, mayor vida útil y una capacidad de 10,000mAh completamente autorizada y segura para abordar aviones (Airline-safe).", "Pantalla Digital Inteligente de 1.18”: Mantén el control absoluto en tiempo real. Su pantalla integrada te muestra de forma precisa el porcentaje de batería restante, el vataje (potencia) de carga actual y el estado de entrada/salida de energía.", "Carga Triple Simultánea: ¡Energía para todo tu ecosistema! Permite cargar hasta 3 dispositivos al mismo tiempo utilizando el cable USB-C integrado, el puerto USB-C y el puerto USB-A (con una distribución inteligente y estable de 15W compartidos cuando se usan todos a la vez).", "Compatibilidad Global Absoluta: Soporta los protocolos de carga rápida más populares del mercado, incluyendo PD 3.0, QC 3.0, SCP, FCP, Samsung 45W y POCO 55W. Es el aliado perfecto para dispositivos Apple, Samsung, Xiaomi y más.", "Protección de Seguridad Avanzada: Equipado con un sistema de chips inteligentes de protección dual que resguardan activamente tus dispositivos contra sobretensiones, sobrecorrientes, sobrecargas, cortocircuitos y sobrecalentamiento.", "Diseño Compacto y Viajero: Con un peso ultra ligero de aproximadamente 249g y un tamaño sumamente compacto, está diseñado para deslizarse sin esfuerzo en cualquier bolsillo, bolso o kit de viaje."],
  },

  {
    id: "cargador-usb-c-30w-nexode-robot-gan",
    name: "CARGADOR USB-C 30W NEXODE ROBOT GaN",
    sku: "15550",
    cat: "energia", brand: "ugreen",
    price: 250, oldPrice: null, rating: 4.7, reviews: 0, badge: "Nuevo",
    img: "img/productos/ugreen-cargador-usbc-30w-nexcode.jpg",
    gallery: ["img/productos/ugreen-cargador-usbc-30w-nexcode.jpg", "img/productos/ugreen-cargador-usbc-30w-nexode-details.jpg", "img/productos/ugreen-cargadorusbc-startplay.jpg"],
    desc: "CARGADOR USB-C 30W NEXODE ROBOT GaN*PANTALLA LED QUE MUESTRA DIFERENTES EXPRESIONES*PROTECCION ELECTRICA MULTIPLE",
    features: ["Cargador RobotGan","UsbC RotGan 30w para tu iphone 14 pro Max de 0 a 55% en solo 30 minutos", "Pantalla LED", "Sistema de seguridad Múltiple", "Cargador para auriculares", "Teléfonos móviles", "Tabletas e incluso MacBook Air"],
  },

  {
    id: "adaptador-multipuerto-usb-c-a-vga-hdmi",
    name: "ADAPTADOR MULTIPUERTO USB-C a VGA/HDMI",
    sku: "50505",
    cat: "redes", brand: "ugreen",
    price: 375, oldPrice: null, rating: 4.7, reviews: 0, badge: "Nuevo",
    img: "img/productos/adaptador-multipuerto.jpeg",
    gallery: ["img/productos/adaptador-multipuerto.jpeg"],
    desc: "Expande la conectividad de tu computadora de forma rápida y segura con el Hub USB 3.0 UGREEN de 4 puertos. Convierte un solo puerto USB en 4 puertos USB 3.0, ideales para conectar memorias USB, discos duros, teclado, mouse, impresoras y otros periféricos al mismo tiempo, Velocidad de transferencia de hasta 5 Gbps, permitiendo transferir 1 GB en aproximadamente 3 segundos, Cable integrado de 1 metro, Conexión estable y segura, Protección inteligente",
    features: ["5GBPS ALTA VELOCIDAD", "CABLE DE 1M", "4X USB 3.0", "INDICADOR LED"],
  },
  {
    id: "cable-usb-a-2-0-a-usb-c-ugreen",
    name: "CABLE USB-A 2.0 a USB-C UGREEN",
    sku: "60116",
    cat: "redes", brand: "ugreen",
    price: 35, oldPrice: null, rating: 4.7, reviews: 0, badge: "Nuevo",
    img: "img/productos/CABLE-USB-A-2.0-USB-C.png",
    gallery: ["img/productos/CABLE-USB-A-2.0-USB-C.png"],
    desc: "Carga y sincroniza tus dispositivos de forma rápida y segura con el cable USB-A a USB-C UGREEN. Soporta carga rápida de hasta 5V/3A y transferencia de datos de hasta 480 Mbps, ideal para smartphones, tablets y otros dispositivos con puerto USB-C. Además, es compatible con las tecnologías de carga rápida QC 3.0, AFC y FCP, ofreciendo un rendimiento confiable y eficiente para el uso diario.",
    features: ["Entrada: USB-C macho", "Salida: USB-A macho", "Función: Carga y sincronización de datos", "Carga rápida 5V/3A", "Transmisión de datos de alta velocidad 480Mbps", "Carcasa ABS de alta calidad y cubierta de PVC", "Dura hasta 10 veces más que los cables estándar", "Carga inteligente y segura", "Chip inteligente que protege la batería de daños", "Duradero y flexible con cable de blindaje interno múltiple", "Compatible con QC3.0/AFC/FCP"],
  },

  {
    id: "cargador-ugreen-nexode-rg-65w-gris",
    name: "CARGADOR UGREEN NEXODE RG 65W GRIS",
    sku: "15570",
    cat: "energia", brand: "ugreen",
    price: 505, oldPrice: null, rating: 4.7, reviews: 0, badge: "Nuevo",
    img: "img/productos/cargador-ugreen-nexode-rg-65w-gris.png",
    gallery: ["img/productos/cargador-ugreen-nexode-rg-65w-gris.png"],
    desc: "El UGREEN Nexode RG 65W incorpora tecnología GaN para ofrecer una carga rápida, eficiente y segura en un diseño compacto con estilo de robot. Cuenta con 2 puertos USB-C y 1 puerto USB-A 3.0, permitiendo cargar hasta tres dispositivos al mismo tiempo. Además, sus botas magnéticas extraíbles le dan un toque original y práctico, convirtiéndolo en el accesorio perfecto para el hogar, la oficina o los viajes.",
    features: ["CARGADOR UGREEN NEXODE RG 65W GRIS", "ROBOT GAN CON BOTAS MAGNETICAS EXTRAIBLES", "PUERTOS USB TIPO-Cx2*USB A 3.0", "Peso 0.24 Kg", "PANTALLA LED"],
  },

  {
    id: "adaptador-ethernet-gigabit-usb-3-0",
    name: "ADAPTADOR ETHERNET GIGABIT USB 3.0",
    sku: "20256",
    cat: "redes", brand: "ugreen",
    price: 215, oldPrice: null, rating: 4.7, reviews: 0, badge: "Nuevo",
    img: "img/productos/UGREEN-ADAPTADOR-ETHERNET-GIGABIT-USB-3.0.png",
    gallery: ["img/productos/UGREEN-ADAPTADOR-ETHERNET-GIGABIT-USB-3.0.png"],
    desc: "Conecta tu computadora a una red cableada de alta velocidad con este adaptador Ethernet Gigabit USB 3.0. Compatible con redes de 10/100/1000 Mbps, ofrece una conexión estable y rápida para trabajar, jugar o realizar videollamadas sin interrupciones. Su interfaz USB 3.0 proporciona velocidades de transferencia de hasta 5 Gbps, garantizando un excelente rendimiento y una instalación rápida y sencilla. Ideal para laptops y equipos que no cuentan con puerto Ethernet integrado.",
    features: ["Red cableada más rápida y estable que Wi-Fi.", "Velocidad de Internet de hasta 1000 Mbps.", "Compatible con la mayoría de dispositivos USB A.", "Compatible con versiones anteriores de USB 2.0.", "Carcasa de aluminio elegante y duradera.", "Tamaño compacto y portátil.", "Chip AX88179A de alto rendimiento."],
  },

  {
    id: "adaptador-usb-type-c-10-100-1000m",
    name: "ADAPTADOR USB Type C 10/100/1000M",
    sku: "50737",
    cat: "redes", brand: "ugreen",
    price: 240, oldPrice: null, rating: 4.7, reviews: 0, badge: "Nuevo",
    img: "img/productos/adaptador-usb-type-c.png",
    gallery: ["img/productos/adaptador-usb-type-c.png"],
    desc: "Disfruta de una conexión a Internet rápida y estable con este adaptador USB-C a Ethernet Gigabit RJ45. Compatible con redes de 10/100/1000 Mbps, ofrece un rendimiento confiable para videollamadas, streaming, juegos y trabajo en línea. Es compatible con Thunderbolt 3 y una amplia variedad de laptops, tablets y otros dispositivos con puerto USB-C, brindando una conexión sencilla y de alto rendimiento donde la necesites.",
    features: ["Streaming con Ethernet", "compatible con Thunderbolt 3", "sin puerto RJ45", "Transmisión Super Rápida", "velocidad de ethernet hasta 1000 Mbps", "adaptador Ethernet USB C", "compatible con los celulares, tablets, ordenadores con puerto USB C", "sistemas de Android de versión 7.0 o superior", "plug y play para sistemas de windows 11/10/8/8.1, Mac OS, iOS y andriod", "Compacto y Portáti", "Compatible con QC3.0/AFC/FCP"],
  },

  {
    id: "hub-usb-c-4-en-1-gigabit",
    name: "HUB USB-C 4 EN 1 GIGABIT",
    sku: "60600",
    cat: "redes", brand: "ugreen",
    price: 300, oldPrice: null, rating: 4.7, reviews: 0, badge: "Nuevo",
    img: "img/productos/hub-usb-c-4-en-1-gigabit.png",
    gallery: ["img/productos/hub-usb-c-4-en-1-gigabit.png"],
    desc: "Amplía la conectividad de tu equipo con este Hub USB-C de diseño elegante en aluminio. Incorpora 3 puertos USB 3.0 con velocidades de transferencia de hasta 5 Gbps, ideales para conectar memorias, discos duros, teclados y otros periféricos. Además, su puerto Ethernet Gigabit proporciona una conexión a Internet rápida, estable y confiable, perfecta para trabajar, estudiar o disfrutar de contenido en línea sin interrupciones.",
    features: ["HUB USB-C CON PUERTO ETHERNET", "3xUSB 3.0 HASTA 5Gbps", "PUERTO ETHERNET GIGABIT", "DISEÑO EN ALUMINIO ELEGANTE"],
  },

  {
    id: "case-externo-usb-3-0-hdd-ssd-2-5",
    name: "CASE EXTERNO USB 3.0 HDD, SSD 2.5",
    sku: "30847",
    cat: "almacenamiento", brand: "ugreen",
    price: 135, oldPrice: null, rating: 4.7, reviews: 0, badge: "Nuevo",
    img: "img/productos/ugreen-case-externo-usb.png",
    gallery: ["img/productos/ugreen-case-externo-usb.png"],
    desc: "Convierte tu disco duro o SSD de 2.5\" SATA en una unidad externa de alta velocidad con este case USB 3.0. Ofrece transferencias de hasta 5 Gbps, soporta discos de hasta 6 TB y cuenta con tecnología UASP, que proporciona un rendimiento hasta un 70% más rápido que el USB 3.0 convencional. Es la solución ideal para ampliar almacenamiento, realizar copias de seguridad o transportar tus archivos de forma rápida y segura.",
    features: ["Dimensiones del producto\t5,04 x 3,23 x 1,26 pulgadas", "Peso del artículo\t4.6 onzas", "Capacidad de almacenamiento digital 10 TB", "Dispositivos compatibles SSD y HDD de 2,5\"", "Interfaz de disco duro\tSerial ATA-600", "Tecnología de conectividad USB", "Factor de forma del disco duro\t2,5 pulgadas", "Tamaño del disco duro 10 TB", "Factor de forma 2,5 pulgadas", "Velocidad de lectura 100 megabytes por segundo", "Tamaño de la caché 6"],
  },

  {
    id: "soporte-de-telefono-en-forma-de-cascada",
    name: "SOPORTE DE TELEFONO EN FORMA DE CASCADA",
    sku: "20473",
    cat: "tecnologia", brand: "ugreen",
    price: 170, oldPrice: null, rating: 4.5, reviews: 0, badge: "Nuevo",
    img: "img/productos/soporte-de-telefono.png",
    gallery: ["img/productos/soporte-de-telefono.png"],
    desc: "SOPORTE DE TELEFONO EN FORMA DE CASCADA, ANGULO DE VISION REGULABLE SIN OBSTRUCCION DE LA VISTA PARA EL CONDUCTOR*VENTOSA CON AJUSTE 360°COMPATIBILIDAD UNIVERSAL",
    features: ["Compatibilidad universal.", "Rotación de 360°", "Ángulo de visión ajustable", "No obstruye la visión del conductor.", "Ventosa de alta adherencia para una fijación segura."],
  },

  {
    id: "cable-de-carga-usb-c-a-usb-c-pd60w",
    name: "Cable de carga USB-C a USB-C PD60W",
    sku: "50997",
    cat: "redes", brand: "ugreen",
    price: 40, oldPrice: null, rating: 4.7, reviews: 0, badge: "Nuevo",
    img: "img/productos/ugreen-cable-de-carga-usb-c-usb-c.png",
    gallery: ["img/productos/ugreen-cable-de-carga-usb-c-usb-c.png"],
    desc: "Carga tus dispositivos de manera rápida y eficiente con este cable USB-C a USB-C con tecnología Power Delivery (PD) de hasta 60W y 3A. Diseñado para smartphones, tablets, laptops y otros dispositivos compatibles con USB-C, ofreciendo una conexión segura, estable y de alto rendimiento para tus necesidades diarias.",
    features: ["Carga rápida Power Delivery (PD) de hasta 60W", "Corriente de hasta 3A", "Conector USB-C a USB-C", "Alta compatibilidad", "Diseño resistente y duradero", "Diseño resistente y duradero"],
  },

  {
    id: "cable-de-carga-usb-a-a-usb-c-18w",
    name: "CABLE DE CARGA USB-A a USB-C 18W",
    sku: "60126",
    cat: "redes", brand: "ugreen",
    price: 50, oldPrice: null, rating: 4.5, reviews: 0, badge: "Nuevo",
    img: "img/productos/cable-de-carga-usb-a-usb-c-18w.png",
    gallery: ["img/productos/cable-de-carga-usb-a-usb-c-18w.png"],
    desc: "Cable USB-A a USB-C con carga rápida de hasta 18W, diseñado con revestimiento de nylon trenzado ultra resistente y conectores de aleación de aluminio para mayor durabilidad. Ideal para cargar y sincronizar dispositivos con una velocidad de transferencia de hasta 480 Mbps.",
    features: ["Carga rápida de hasta 18W", "Transferencia de datos de hasta 480 Mbps.", "Uso versátil en cualquier lugar", "Compatibilidad universal", "Revestimiento de nylon trenzado ultra resistente", "Compatible con dispositivos USB-C.", "Longitud de 3.3 pies (1 metro aprox.), ideal para escritorio, auto y viajes.", "Sistemas de Android de versión 7.0 o superior", "Plug y play para sistemas de windows 11/10/8/8.1, Mac OS, iOS y andriod", "Compacto y Portátil", "Compatible con QC3.0/AFC/FCP"],
  },

  {
    id: "cargador-de-vehiculo-60w-cable-retractil",
    name: "CARGADOR DE VEHICULO 60W CABLE RETRACTIL",
    sku: "55212B",
    cat: "energia", brand: "ugreen",
    price: 340, oldPrice: null, rating: 4.7, reviews: 0, badge: "Nuevo", stock: 0,
    img: "img/productos/cargador-de-vehiculo-60w-cable-retractil.png",
    gallery: ["img/productos/cargador-de-vehiculo-60w-cable-retractil.png"],
    desc: "Cargador para vehículo de 60W con cable retráctil de 0,7 m, diseñado para cargar hasta dos dispositivos al mismo tiempo gracias a sus puertos USB-C y USB-A. Compatible con vehículos de 12 a 24V, ofrece carga rápida, segura y un diseño práctico para mantener el interior del automóvil ordenado.",
    features: ["Potencia máxima de 60W.", "1 puerto USB-C + 1 puerto USB-A.", "Cable retráctil de 0,7 m.", "Compatible con vehículos de 12-24V.", "Salida máxima de 7.4A para una carga eficiente.", "Conectividad Versátil 1C1A"],
  },

  {
    id: "cable-de-impresora-ugreen-am-a-bm",
    name: "CABLE DE IMPRESORA UGREEN AM A BM",
    sku: "20847",
    cat: "redes", brand: "ugreen",
    price: 52, oldPrice: null, rating: 4.5, reviews: 0, badge: "Nuevo",
    img: "img/productos/cable-de-impresora-ugreen-am-a-bm.png",
    gallery: ["img/productos/cable-de-impresora-ugreen-am-a-bm.png"],
    desc: "Cable de impresora UGREEN USB 2.0 AM a BM de 2 metros, diseñado para ofrecer una conexión estable y de alta velocidad de hasta 480 Mbps. Cuenta con conectores chapados en oro, resistentes a la corrosión, que garantizan una excelente calidad de transmisión y una mayor durabilidad. Ideal para conectar impresoras, escáneres y otros dispositivos con puerto USB-B",
    features: ["USB 2.0 de alta velocidad (480 Mbps).", "Conectores chapados en oro anticorrosión.", "Longitud de 2 metros.", "Compatible con impresoras, escáneres y dispositivos USB-B.", "Cable resistente y de larga duración."],
  },

  {
    id: "mouse-inalambrico-ultra-slim-negro",
    name: "MOUSE INALAMBRICO ULTRA SLIM NEGRO",
    sku: "90372",
    cat: "escritorio", brand: "ugreen",
    price: 205, oldPrice: null, rating: 4.7, reviews: 0, badge: "Nuevo",
    img: "img/productos/mouse-inalambrico-ultra-slim-negro.png",
    gallery: ["img/productos/mouse-inalambrico-ultra-slim-negro.png"],
    desc: "Mouse inalámbrico Ultra Slim color negro, con diseño moderno, ligero y ergonómico para una experiencia de uso cómoda. Ofrece una resolución ajustable de hasta 4000 DPI, doble modo de conexión 2.4 GHz y Bluetooth 5.0, y 5 botones para una navegación más eficiente. Ideal para trabajar, estudiar o uso diario en computadoras y laptops",
    features: ["Diseño Ultra Slim, elegante y portátil.", "Resolución ajustable hasta 4000 DPI.", "Conectividad 2.4 GHz y Bluetooth 5.0.", "5 botones para mayor productividad.", "Compatible con Windows, macOS y otros dispositivos con Bluetooth.", "Funciona con 1 batería AA (no incluida)."],
  },

  {
    id: "transmisor-hdmi-4k-inalambrico",
    name: "TRANSMISOR HDMI 4K INALAMBRICO",
    sku: "90909A",
    cat: "redes", brand: "ugreen",
    price: 2355, oldPrice: null, rating: 4.7, reviews: 0, badge: "Nuevo",
    img: "img/productos/transmisor-hdmi-4k-inalambrico.png",
    gallery: ["img/productos/transmisor-hdmi-4k-inalambrico.png"],
    desc: "Transmisor HDMI 4K Inalámbrico diseñado para transmitir audio y video en alta definición sin necesidad de cables. Ofrece una resolución de hasta 4K y un alcance inalámbrico de hasta 50 metros, brindando una conexión estable y de baja latencia. Es ideal para salas de reuniones, presentaciones, aulas, eventos, entretenimiento en el hogar y señalización digital",
    features: ["Transmisión inalámbrica de audio y video HDMI.", "Resolución de hasta 4K para una imagen nítida y de alta calidad.", "Alcance de hasta 50 metros en espacios abiertos.", "Instalación Plug & Play, sin necesidad de software.", "Conexión estable y de baja latencia.", "Compatible con laptops, computadoras, proyectores, televisores, monitores y otros dispositivos con puerto HDMI"],
  },

  {
    id: "cargador-robot-gan-65w-purpura",
    name: "CARGADOR ROBOT GaN 65W PURPURA",
    sku: "35314",
    cat: "energia", brand: "ugreen",
    price: 533, oldPrice: null, rating: 4.7, reviews: 0, badge: "Nuevo",
    img: "img/productos/robot-cargador-purpura-65w-purpura.jpeg",
    gallery: ["img/productos/robot-cargador-purpura-65w-purpura.jpeg"],
    desc: "Cargador Robot GaN 65W Púrpura con tecnología GaN II, diseñado para ofrecer una carga rápida, potente e inteligente en un formato compacto. Cuenta con 3 puertos de carga rápida (2 USB-C y 1 USB-A), permitiendo cargar hasta tres dispositivos simultáneamente. Compatible con los protocolos PD 3.0 y QC 4.0, ajusta automáticamente la potencia para brindar una carga eficiente y segura a smartphones, tablets, laptops y otros dispositivos.",
    features: ["Potencia máxima de 65W.", "Tecnología GaN II: mayor eficiencia, menor calentamiento y diseño compacto.", "3 puertos de carga rápida: 2 USB-C + 1 USB-A.", "Compatible con Power Delivery (PD 3.0) y Quick Charge (QC 4.0).", "Carga inteligente que optimiza la energía según el dispositivo conectado.", "Protección contra sobrecarga, sobrecalentamiento, sobrecorriente y cortocircuitos.", "Ideal para cargar celulares, tablets, laptops, audífonos y otros dispositivos USB."],
  },

  {
    id: "presentador-puntero-laser-ugreen",
    name: "PRESENTADOR PUNTERO LASER UGREEN",
    sku: "50654",
    cat: "tecnologia", brand: "ugreen",
    price: 150, oldPrice: null, rating: 4.7, reviews: 0, badge: "Nuevo",
    img: "img/productos/presentador-puntero-laser.png",
    gallery: ["img/productos/presentador-puntero-laser.png"],
    desc: "PRESENTADOR PUNTERO LASER UGREEN*ALCANCE 100M CONEXION INALAMBRICA 2.4GHz*COMPATIBLE MAC/WINDOWS*DISEÑO ERGONOMICO*BOTONES INTUITIVOS",
    features: ["Alcance inalámbrico de hasta 100 metros.", "Conexión estable de 2.4 GHz.", "Puntero láser de alta visibilidad para destacar información.", "Diseño ergonómico para un uso cómodo.", "Botones intuitivos para controlar las presentaciones con facilidad.", "Compatible con Windows y macOS.", "Ideal para reuniones, conferencias, capacitaciones, clases y exposiciones"],
  },

  {
    id: "cargador-de-65w-multipuertos",
    name: "CARGADOR DE 65W MULTIPUERTOS",
    sku: "70773",
    cat: "energia", brand: "ugreen",
    price: 597, oldPrice: null, rating: 4.7, reviews: 0, badge: "Nuevo",
    img: "img/productos/cargador-65w-multipuertos.png",
    gallery: ["img/productos/cargador-65w-multipuertos.png"],
    desc: "Cargador Multipuertos GaN de 65W diseñado para ofrecer una carga rápida, potente y eficiente para todos tus dispositivos. Incorpora 4 puertos (3 USB-C y 1 USB-A), permitiendo cargar hasta 4 dispositivos al mismo tiempo sin perder rendimiento. Gracias a la tecnología GaN, ofrece mayor eficiencia energética, menor generación de calor y un diseño ligero y compacto, ideal para el hogar, la oficina o los viajes.",
    features: ["Potencia máxima de 65W.", "4 puertos de carga: 3 USB-C + 1 USB-A.", "Carga simultánea para hasta 4 dispositivos.", "Tecnología GaN para una carga más rápida, segura y eficiente.", "Diseño compacto, ligero y fácil de transportar.", "Protección contra sobrecarga, sobrecalentamiento, sobrecorriente y cortocircuitos.", "Compatible con smartphones, tablets, laptops, audífonos y otros dispositivos USB"],
  },

  {
    id: "power-bank-nexode-12000mah-100w",
    name: "POWER BANK NEXODE 12000mAh 100W",
    sku: "35526B",
    cat: "energia", brand: "ugreen",
    price: 776, oldPrice: null, rating: 4.7, reviews: 0, badge: "Nuevo",
    img: "img/productos/power-bank-nexode-12000mah-100w.png",
    gallery: ["img/productos/power-bank-nexode-12000mah-100w.png"],
    desc: "Power Bank UGREEN Nexode 12000 mAh 100W diseñado para mantener tus dispositivos siempre cargados con la máxima velocidad. Ofrece carga rápida de hasta 100W y recarga rápida de 65W, siendo ideal para smartphones, tablets, laptops y otros dispositivos USB. Incorpora una pantalla LCD que muestra el nivel de batería y el estado de carga en tiempo real. Además, es compatible con múltiples protocolos de carga rápida, garantizando una carga eficiente y segura para una amplia variedad de equipos.",
    features: ["Capacidad de 12.000 mAh.", "Potencia de salida de hasta 100W..", "Recarga rápida de 65W para reducir el tiempo de espera.", "Compatible con protocolos PD, PPS, QC, AFC, FCP y SCP.", "Pantalla LCD para visualizar el nivel de batería y la potencia de carga.", "Puertos: 1 USB-C y 1 USB-A.", "Ideal para cargar laptops, smartphones, tablets, consolas portátiles y otros dispositivos compatibles."],
  },

  {
    id: "mochila-ugreen-gris-oscuro-para-laptop",
    name: "MOCHILA UGREEN GRIS OSCURO PARA LAPTOP",
    sku: "90798",
    cat: "escritorio", brand: "ugreen",
    price: 408, oldPrice: null, rating: 4.7, reviews: 0, badge: "Nuevo",
    img: "img/productos/mochila-ugreen-gris-oscuro-laptop.png",
    gallery: ["img/productos/mochila-ugreen-gris-oscuro-laptop.png"],
    desc: "Mochila UGREEN Gris Oscuro para Laptop de hasta 15.6\", diseñada para brindar comodidad, protección y estilo en el día a día. Su amplio espacio interior permite transportar de forma segura una laptop, documentos y accesorios, mientras que su diseño moderno y elegante la hace ideal para la oficina, universidad, viajes o uso diario. Fabricada con materiales resistentes y de alta calidad para ofrecer mayor durabilidad.",
    features: ["Compatible con laptops de hasta 15.6 pulgadas.", "Compartimento acolchado para proteger el equipo.", "Amplio espacio para accesorios, documentos y objetos personales.", "Diseño moderno y elegante en color gris oscuro.", "Material resistente y duradero para uso diario.", "Correas acolchadas y ajustables para mayor comodidad.", "Ideal para trabajo, estudio, viajes y uso cotidiano."],
  },

  {
    id: "set-de-destornilladores-38-en-1",
    name: "SET DE DESTORNILLADORES 38 EN 1",
    sku: "80459",
    cat: "tecnologia", brand: "ugreen",
    price: 175, oldPrice: null, rating: 4.7, reviews: 0, badge: "Nuevo",
    img: "img/productos/set-de-destornilladores-38-en-1.png",
    gallery: ["img/productos/set-de-destornilladores-38-en-1.png"],
    desc: "Set de Destornilladores de Precisión 38 en 1, ideal para la reparación y mantenimiento de dispositivos electrónicos. Incluye 38 puntas intercambiables de alta precisión y un mango ergonómico con agarre antideslizante que proporciona mayor comodidad y control. Su estuche compacto y organizador facilita el almacenamiento y transporte, convirtiéndolo en la herramienta perfecta para técnicos, aficionados y uso doméstico.",
    features: ["Kit de 38 herramientas en 1.", "Puntas de precisión para múltiples tipos de tornillos.", "Mango ergonómico con agarre antideslizante.", "Fabricado con materiales resistentes para mayor durabilidad.", "Estuche compacto con organizador para un fácil transporte.", "Ideal para reparar celulares, laptops, computadoras, consolas, relojes, cámaras, gafas y otros dispositivos electrónicos."],
  },

  {
    id: "adaptador-usb-bluetooth-5-3",
    name: "ADAPTADOR USB BLUETOOTH 5.3",
    sku: "90225",
    cat: "escritorio", brand: "ugreen",
    price: 145, oldPrice: null, rating: 4.7, reviews: 0, badge: "Nuevo",
    img: "img/productos/adaptador-usb.png",
    gallery: ["img/productos/adaptador-usb.png"],
    desc: "Adaptador USB Bluetooth 5.3 UGREEN diseñado para añadir conectividad Bluetooth de última generación a computadoras y laptops. Gracias a la tecnología Bluetooth 5.3, ofrece una conexión más rápida, estable y con menor consumo de energía, permitiendo conectar de forma inalámbrica audífonos, parlantes, teclados, mouse, controles de videojuegos y otros dispositivos compatibles. Su diseño ultracompacto lo hace ideal para mantenerlo conectado sin ocupar espacio",
    features: ["Tecnología Bluetooth 5.3 para una conexión más rápida y estable.", "Conecta audífonos, parlantes, teclados, mouse, controles y otros dispositivos Bluetooth", "Baja latencia y menor consumo de energía.", "Diseño compacto y portátil tipo nano.", "Instalación rápida Plug & Play (según el sistema operativo).", "Compatible con computadoras y laptops con puerto USB", "Ideal para actualizar equipos sin Bluetooth integrado o mejorar su conectividad inalámbrica."],
  },

  {
    id: "ugreen-echobuds-magic-blanco",
    name: "UGREEN ECHOBUDS MAGIC BLANCO",
    sku: "55137",
    cat: "tecnologia", brand: "ugreen",
    price: 690, oldPrice: null, rating: 4.7, reviews: 0, badge: "Nuevo",
    img: "img/productos/ugreen-echobuds-magic-blanco.png",
    gallery: ["img/productos/ugreen-echobuds-magic-blanco.png"],
    desc: "UGREEN EchoBuds Magic Blanco son audífonos inalámbricos diseñados para ofrecer un sonido nítido, llamadas claras y una experiencia de uso cómoda durante todo el día. Gracias a su conexión Bluetooth de alta estabilidad, brindan un emparejamiento rápido y una transmisión fluida. Su diseño ergonómico y compacto garantiza un ajuste seguro, mientras que el estuche de carga portátil proporciona mayor autonomía para acompañarte en el trabajo, el estudio, los viajes o tus actividades diarias",
    features: ["Sonido de alta calidad con audio claro y equilibrado.", "Conectividad Bluetooth rápida y estable.", "Micrófono integrado para llamadas con manos libres..", "Controles táctiles para música, llamadas y asistente de voz.", "Estuche de carga compacto para mayor autonomía.", "Diseño ergonómico, ligero y cómodo para uso prolongado", "Compatibles con smartphones, tablets, laptops y otros dispositivos con Bluetooth"],
  },

  {
    id: "funda-para-portatil-gris",
    name: "FUNDA PARA PORTATIL GRIS",
    sku: "30325",
    cat: "tecnologia", brand: "ugreen",
    price: 205, oldPrice: null, rating: 4.7, reviews: 0, badge: "Nuevo",
    img: "img/productos/funda-portatil-gris.png",
    gallery: ["img/productos/funda-portatil-gris.png"],
    desc: "Funda para Portátil UGREEN Gris diseñada para brindar una protección segura y elegante a tu laptop. Fabricada con materiales de alta calidad, protege el equipo contra golpes, rayones, polvo y salpicaduras, mientras su interior suave ayuda a evitar daños durante el transporte. Su diseño delgado, moderno y ligero la convierte en el accesorio ideal para llevar tu portátil a la oficina, universidad o de viaje.",
    features: ["Compatible con laptops de diferentes tamaños (según el modelo).", "Exterior resistente al agua y al desgaste.", "Interior acolchado y suave para una mayor protección.", "Protege contra golpes, rayones, polvo y salpicaduras.", "Diseño delgado, elegante y fácil de transportar.", "Cierre de alta calidad para mayor seguridad.", "Ideal para el trabajo, estudio, viajes y uso diario."],
  },

  {
    id: "hitune-s3-auriculares-open-ear",
    name: "HITUNE S3 AURICULARES OPEN-EAR",
    sku: "45785",
    cat: "audio-video", brand: "ugreen",
    price: 299, oldPrice: null, rating: 4.7, reviews: 0, badge: "Nuevo",
    img: "img/productos/hitune-s3-auriculares-open-ear.png",
    gallery: ["img/productos/hitune-s3-auriculares-open-ear.png"],
    desc: "UGREEN HiTune S3 Open-Ear son audífonos inalámbricos de diseño abierto que ofrecen comodidad, libertad y seguridad durante todo el día. Equipados con Bluetooth 5.4, brindan una conexión rápida y estable, mientras que su cancelación de ruido ambiental (ENC) mejora la calidad de las llamadas. Disfruta de un sonido nítido, baja latencia para juegos y videos, carga ultrarrápida y hasta 30 horas de autonomía con el estuche de carga. Su certificación IPX5 los hace resistentes al agua y al sudor, ideales para entrenamientos y actividades al aire libre.",
    features: ["Diseño Open-Ear para mayor comodidad y percepción del entorno.", "Bluetooth 5.4 con conexión rápida y estable.", "Cancelación de ruido ambiental (ENC) para llamadas más claras.", "Baja latencia, ideal para gaming y contenido multimedia.", "Hasta 30 horas de batería con el estuche de carga.", "Carga ultrarrápida mediante USB-C.", "Certificación IPX5, resistente al agua y al sudor.", "Controles táctiles inteligentes y ajuste ligero para uso prolongado"],
  },

  {
    id: "cargador-robot-ugreen-uno-qi2-2en1-15w",
    name: "CARGADOR ROBOT UGREEN UNO Qi2 2EN1 15W",
    sku: "45775",
    cat: "energia", brand: "ugreen",
    price: 687, oldPrice: null, rating: 4.7, reviews: 0, badge: "Nuevo",
    img: "img/productos/cargador-robot-ugreen-uno-qi2-2en1-15w.png",
    gallery: ["img/productos/cargador-robot-ugreen-uno-qi2-2en1-15w.png"],
    desc: "Cargador Robot UGREEN Uno Qi2 2 en 1 de 15W combina un diseño innovador con tecnología de carga inalámbrica de última generación. Equipado con certificación Qi2, ofrece una carga rápida y eficiente de hasta 15W para smartphones compatibles, además de cargar audífonos inalámbricos de forma simultánea. Su potente sujeción magnética mantiene el teléfono firmemente en su lugar, mientras que la pantalla frontal con expresiones animadas aporta un toque moderno y divertido. Gracias a su ajuste de ángulo de hasta 70°, permite utilizar el dispositivo cómodamente durante la carga.",
    features: ["Cargador inalámbrico 2 en 1 para smartphone y audífonos.", "Tecnología Qi2 con carga rápida de hasta 15W.", "Pantalla frontal con expresiones animadas durante la carga.", "Potente sujeción magnética para una fijación segura.", "Ajuste de inclinación hasta 70° para mayor comodidad.", "Diseño compacto, moderno y elegante.", "Ideal para escritorio, oficina o mesa de noche.", "Compatible con dispositivos que admiten carga inalámbrica Qi2/MagSafe y estuches de audífonos con carga inalámbrica."],
  },

  {
    id: "estuche-ugreen-nintendo-switch",
    name: "Estuche Ugreen Nintendo Switch",
    sku: "50275",
    cat: "tecnologia", brand: "ugreen",
    price: 198, oldPrice: null, rating: 4.7, reviews: 0, badge: "Nuevo",
    img: "img/productos/estuche-ugrenn-nintendo-switch.png",
    gallery: ["img/productos/estuche-ugrenn-nintendo-switch.png"],
    desc: "Nintendo Switch (Tamaño S) diseñado para brindar una protección segura y práctica a tu consola. Fabricado con un material rígido resistente a golpes, protege el equipo contra impactos, rayones y polvo durante el transporte. Su interior está diseñado para almacenar la Nintendo Switch y sus principales accesorios, manteniéndolos organizados y siempre listos para usar. Gracias a su diseño compacto y elegante, es el compañero ideal para llevar tu consola a cualquier lugar.",
    features: ["Compatible con Nintendo Switch.", "Tamaño S, compacto y fácil de transportar.", "Exterior rígido y resistente a golpes.", "Protege contra rayones, polvo e impactos.", "Espacio para guardar la consola y sus principales accesorios.", "Cierre resistente para mayor seguridad.", "Ideal para viajes, uso diario y almacenamiento seguro"],
  },

  {
    id: "localizador-fine-track-ugreen-para-ios",
    name: "LOCALIZADOR FINE TRACK UGREEN PARA iOS",
    sku: "45298",
    cat: "tecnologia", brand: "ugreen",
    price: 395, oldPrice: null, rating: 4.7, reviews: 0, badge: "Nuevo",
    img: "img/productos/localizador-fine-finetrack-ugreen-ios.png",
    gallery: ["img/productos/localizador-fine-finetrack-ugreen-ios.png"],
    desc: "localizador inteligente diseñado para ayudarte a encontrar fácilmente tus objetos personales. Compatible con la red Apple Find My, permite ubicar llaves, billeteras, mochilas, equipaje y otros artículos desde tu iPhone o iPad. Su diseño ultrafino de solo 1,7 mm facilita colocarlo en cualquier lugar, mientras que su alarma de 80 dB ayuda a localizar tus pertenencias rápidamente. Además, cuenta con carga magnética, batería de larga duración y certificación IP68, ofreciendo resistencia al agua y al polvo para un uso confiable en cualquier entorno.",
    features: ["Compatible con la red Apple Find My.", "Diseño ultrafino de 1,7 mm", "Alarma de 80 dB para una localización rápida.", "Carga magnética con batería de larga duración", "Certificación IP68, resistente al agua y al polvo", "Ideal para llaves, billeteras, mochilas, equipaje y otros objetos personales.", "COD: 45298"],
  },

  {
    id: "soporte-para-celulares-multiangulo",
    name: "SOPORTE PARA CELULARES MULTIANGULO",
    sku: "80708",
    cat: "escritorio", brand: "ugreen",
    price: 165, oldPrice: null, rating: 4.7, reviews: 0, badge: "Nuevo",
    img: "img/productos/soporte-celulares-multiangulo.png",
    gallery: ["img/productos/soporte-celulares-multiangulo.png"],
    desc: "Diseñado para brindar una experiencia cómoda y segura al utilizar tu smartphone. Fabricado en aluminio premium, combina resistencia, estabilidad y un elegante acabado. Su ángulo regulable permite ajustar la posición ideal para videollamadas, clases, trabajo o entretenimiento. Además, su diseño plegable y compacto facilita llevarlo a cualquier lugar, mientras que la base de silicona antideslizante protege el dispositivo y evita deslizamientos.",
    features: ["Diseño multiángulo con ajuste de inclinación.", "Fabricado en aluminio premium de alta resistencia.", "Plegable y compacto, fácil de transportar.", "Base y apoyos con silicona antideslizante para mayor estabilidad.", "Compatible con la mayoría de smartphones.", "Ideal para videollamadas, ver videos, trabajar, estudiar o navegar con mayor comodidad.", "Diseño moderno y elegante para el hogar, la oficina o los viajes."],
  },

  {
    id: "mouse-ergonomico-vertical-rosado",
    name: "MOUSE ERGONOMICO VERTICAL ROSADO",
    sku: "55917",
    cat: "escritorio", brand: "ugreen",
    price: 236, oldPrice: null, rating: 4.7, reviews: 0, badge: "Nuevo",
    img: "img/productos/mouse-ergonomico-vertical-rosado.png",
    gallery: ["img/productos/mouse-ergonomico-vertical-rosado.png"],
    desc: "diseñado para brindar mayor comodidad durante largas jornadas de trabajo o estudio. Su diseño vertical ayuda a mantener una postura más natural de la mano, reduciendo la fatiga en la muñeca. Cuenta con conectividad inalámbrica de 2.4 GHz, botones multifunción y DPI ajustable (1000/1600/2000/4000) para adaptarse a diferentes tareas, desde navegación diaria hasta trabajos que requieren mayor precisión. Su elegante acabado en color rosado combina estilo y funcionalidad.",
    features: ["Diseño ergonómico vertical para mayor comodidad.", "Conexión inalámbrica de 2.4 GHz estable y confiable.", "DPI ajustable: 1000 / 1600 / 2000 / 4000.", "Botones multifunción para una navegación más eficiente.", "Alta precisión y respuesta rápida.", "Compatible con computadoras y laptops con puerto USB.", "Funciona con 1 pila AA (no incluida).", "Ideal para oficina, estudio, trabajo remoto y uso diario."],
  },

  /* ---- UGREEN · Novedades (2026-08-04) ----
     Productos agregados a partir de imágenes ya subidas sin usar. Faltan precios reales:
     busca "TODO precio" y reemplaza el 0 por el precio en Bs de cada uno. */
  {
    id: "power-bank-ugreen-nexode-12000mah-100w",
    name: "POWER BANK UGREEN NEXODE 12000mAh 100W",
    sku: "35526B",
    cat: "energia", brand: "ugreen",
    price: 776, oldPrice: null, rating: 4.7, reviews: 0, badge: "Nuevo",
    img: "img/productos/power-bank-nexode-12000mah-100w.png",
    gallery: ["img/productos/power-bank-nexode-12000mah-100w.png"],
    desc: "Power bank UGREEN Nexode de 12000mAh con carga rápida de 100W, ideal para cargar laptops y celulares fuera de casa.",
    features: ["Capacidad: 12000mAh", "Potencia de salida: 100W", "Carga rápida para laptop y celular"],
  },
  {
    id: "cable-impresora-ugreen-am-a-bm",
    name: "CABLE DE IMPRESORA UGREEN USB AM A BM",
    cat: "tecnologia", brand: "ugreen",
    sku: "20847",
    price: 52, oldPrice: null, rating: 0, reviews: 0, badge: "Nuevo", // TODO precio
    img: "img/productos/cable-de-impresora-ugreen-am-a-bm.png",
    gallery: ["img/productos/cable-de-impresora-ugreen-am-a-bm.png"],
    desc: "Cable USB AM a BM de UGREEN para conectar impresoras y otros periféricos a tu computadora.",
    features: ["Conector USB AM a BM", "Compatible con impresoras y periféricos USB"],
  },
  {
    id: "cable-carga-usb-a-usb-c-18w",
    name: "CABLE DE CARGA USB-A A USB-C 18W UGREEN",
    cat: "tecnologia", brand: "ugreen",
    sku: "60126",
    price: 66, oldPrice: null, rating: 4.7, reviews: 0, badge: "Nuevo", // TODO precio
    img: "img/productos/cable-de-carga-usb-a-usb-c-18w.png",
    gallery: ["img/productos/cable-de-carga-usb-a-usb-c-18w.png"],
    desc: "Cable de carga UGREEN de USB-A a USB-C con soporte de carga rápida hasta 18W.",
    features: ["Conector USB-A a USB-C", "Carga rápida hasta 18W"],
  },

  /* ---- TUPPERWARE ---- */
   {
    id: "set-de-4-vasos-naranja-maravilla-450ml-con-tapa-tupperware",
    name: "Set de 4 Vasos Naranja Maravilla 450ml con tapa Tupperware",
    cat: "escritorio", brand: "tupperware",
    price: 215, oldPrice: null, rating: 4.8, reviews: 0, badge: "Nuevo",
    img: "img/productos/tuperware-setdevasosnaranja.jpg",
    gallery: ["img/productos/tuperware-setdevasosnaranja.jpg"],
    desc: "Set De 4 Vasos Maravilla Capacidad 450ml Con Tapa Tupperware",
    features: ["Set de 4 unidades", "Capacidad de 450 ml cada uno", "Color naranja", "Resistentes y duraderos", "Aptos para lavavajillas", "Cap. total 470ml Cap. de uso 450ml", "0.7cm * Alto 17cm c/u", "5432 * Naranja"],
  },

  {
    id: "jarra-servifresco-tupperware",
    name: "Jarra Servifresco Tupperware",
    cat: "escritorio", brand: "tupperware",
    price: 210, oldPrice: null, rating: 4.8, reviews: 0, badge: "Nuevo",
    img: "img/productos/tupperware-servifresco1.jpg",
    gallery: ["img/productos/tupperware-servifresco1.jpg"],
    desc: "El Servifresco Tupperware es una jarra o contenedor líquido ergonómico diseñado específicamente para refrigerar, conservar y servir bebidas frías ocupando el mínimo espacio",
    features: ["Capacidad óptima: Cuenta con un volumen de 2 litros, ideal para jugos, tés helados, agua o leche.", "Cuerpo translúcido: Su material rígido y semi-transparente permite ver el nivel y tipo de líquido sin necesidad de destapar el recipiente.", "Asa ergonómica: Facilita un agarre seguro para transportarlo de la cocina a la mesa o llevarlo a picnics.", "No es apto para introducir bebidas calientes.", "No se recomienda para almacenar bebidas gaseosas o carbonatadas.", "1.9L * 7.8 x 18cm  Alto 20.5 cm", "Incluye Asa", "5275 * Naranja"],
  },

  {
    id: "taza-termica-tupperware-big-t-1-1-para-gimnasio",
    name: "Taza térmica Tupperware Big T 1.1 para gimnasio",
    cat: "escritorio", brand: "tupperware",
    price: 760, oldPrice: null, rating: 4.8, reviews: 0, badge: "Nuevo",
    img: "img/productos/tupperware-bigt.png",
    gallery: ["img/productos/tupperware-bigt.png"],
    desc: "Big T Tipo: Vaso térmico Color: Azul Capacidad: 1,1 litros Dimensiones: 28,2 cm de alto x 9,2 cm de diámetro Marca: Tupperware Original Incluye: 1 vaso con tapa y pajita extraíble Características principales: Mantiene la temperatura durante largas horas | Duradero | Libre de BPA Material: Acero inoxidable 304, polipropileno y silicona",
    features: ["Capacidad de volumen: 1,1 L", "Tiempo de conservación de la bebida fría: 8 horas.", "¿Cuánto tiempo se mantendrá caliente la bebida?: 8 horas.", "Material: acero inoxidable 304.", "Incluye tapa.", "Tiene asa.", "Alto 28.2 cm, x 9.2 diametro", "Acero inoxidable 304"],
  },

];

/* ==========================================================================
   CONTENIDO DE LA PÁGINA DE INICIO
   --------------------------------------------------------------------------
   En los títulos, el texto entre *asteriscos* se resalta en color de acento.
   En los enlaces, escribe "whatsapp" para que abra el chat de ventas.
   ========================================================================== */
const HOME = {
  topbar: "🚚 Envío gratis en compras superiores a Bs 350",

  slides: [
    {
      eyebrow: "Nueva colección · Lucmar",
      title: "Tu oficina, *ordenada* y con estilo",
      text: "Organizadores, ergonomía e iluminación pensados para trabajar mejor cada día. Calidad que se nota, precios que te cuidan.",
      cta1: { text: "Ver productos", href: "catalogo.html" },
      cta2: { text: "Destacados", href: "#destacados" },
      img: "img/inicio/of-lucmart.jpg",
      alt: "Escritorio de oficina ordenado con accesorios Lucmar",
      badgeN: "100%", badgeT: "calidad garantizada",
    },
    {
      eyebrow: "Ergonomía Lucmar",
      title: "Trabaja *sin dolor*, todo el día",
      text: "Sillas, soportes y reposapiés que cuidan tu postura. Comodidad que se siente desde el primer minuto.",
      cta1: { text: "Ver ergonomía", href: "catalogo.html?cat=ergonomia" },
      cta2: { text: "Consultar", href: "whatsapp" },
      img: "img/productos/dt3-silla-de-oficina-negro.png",
      alt: "Silla ergonómica Lucmar en un espacio de trabajo luminoso",
      badgeN: "100%", badgeT: "diseño ergonómico",
    },
    {
      eyebrow: "Tecnología de escritorio",
      title: "Conecta todo, *sin enredos*",
      text: "Hubs, estaciones de carga y accesorios que ordenan tus cables y potencian tu setup.",
      cta1: { text: "Ver tecnología", href: "catalogo.html?cat=tecnologia" },
      cta2: { text: "Destacados", href: "#destacados" },
      img: "img/productos/ugreen-revodok-6-in-1.png",
      alt: "Hub UGREEN Revodok 6 en 1 para conectar todos tus dispositivos",
      badgeN: "24/7", badgeT: "soporte por WhatsApp",
    },
  ],

  trust: [
    { icon: "truck",  title: "Envío rápido",  text: "A todo el país" },
    { icon: "shield", title: "Compra segura", text: "Protegemos tus datos" },
    { icon: "medal",  title: "Garantía",      text: "Productos originales" },
    { icon: "chat",   title: "Soporte 24/7",  text: "Te atendemos por WhatsApp" },
  ],

  sections: {
    cats:     { eyebrow: "Explora",      title: "Categorías principales", sub: "Todo lo que tu oficina necesita, bien organizado por lo que buscas." },
    brands:   { eyebrow: "Trabajamos con", title: "Nuestras marcas",      sub: "Productos originales de las marcas en las que ya confías. Elige una y mira su catálogo." },
    featured: { eyebrow: "Lo más pedido", title: "Productos destacados",  sub: "Los favoritos de nuestros clientes. Pídelos directo por WhatsApp." },
    news:     { eyebrow: "Recién llegado", title: "Novedades",  sub: "Lo último que sumamos al catálogo." },
  },

  promo: {
    eyebrow: "Recién llegado",
    title: "Descubre las *últimas novedades* en accesorios de oficina",
    text: "Renueva tu espacio de trabajo con lo último que sumamos al catálogo de Lucmar. Consulta stock y precios al instante por WhatsApp.",
    cta1: { text: "Ver catálogo", href: "catalogo.html" },
    cta2: { text: "Escríbenos", href: "whatsapp" },
    img: "1524758631624-e2822e304c36",
    alt: "Selección de novedades en accesorios de oficina Lucmar",
  },

  newsletter: {
    title: "Recibe novedades y ofertas Lucmar",
    text: "Sé el primero en enterarte de lanzamientos y descuentos. Sin spam, lo prometemos.",
  },
};

/* ---- Filtros de precio (Bs) ---- */
const PRICE_RANGES = [
  { label: "Menos de Bs 50",   min: 0,    max: 50 },
  { label: "Bs 50 – Bs 150",   min: 50,   max: 150 },
  { label: "Bs 150 – Bs 300",  min: 150,  max: 300 },
  { label: "Bs 300 – Bs 600",  min: 300,  max: 600 },
  { label: "Más de Bs 600",    min: 600,  max: Infinity },
];
