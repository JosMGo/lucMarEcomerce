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
  whatsapp: "59162185698",
  brand: "Lucmar",
  currency: "Bs",          // Bolivianos
  freeShippingFrom: 350,   // Bs
};

/* ---- Categorías ---- */
const CATEGORIES = [
  { slug: "escritorio",     name: "Organización de escritorio", img: "1497215728101-856f4ea42174" },
  { slug: "ergonomia",      name: "Ergonomía y confort",        img: "1600585154340-be6161a56a0c" },
  { slug: "papeleria",      name: "Papelería y escritura",      img: "1531297484001-80022131f5a1" },
  { slug: "iluminacion",    name: "Iluminación de oficina",     img: "1507003211169-0a1dd7228f2d" },
  { slug: "tecnologia",     name: "Accesorios tecnológicos",    img: "1517336714731-489689fd1ca8" },
  { slug: "almacenamiento", name: "Almacenamiento",             img: "1558618666-fcd25c85cd64" },
];

/* Helper para construir URL de Unsplash */
function uImg(id, w = 900) {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;
}

/* ---- Productos ---- */
const PRODUCTS = [
  {
    id: "organizador-modular-roble",
    name: "Organizador modular de escritorio en roble",
    cat: "escritorio",
    price: 189, oldPrice: 249, rating: 4.8, reviews: 128, badge: "-24%",
    img: "1524758631624-e2822e304c36",
    gallery: ["1524758631624-e2822e304c36", "1497215728101-856f4ea42174", "1526170375885-4d8ecf77b99f"],
    desc: "Mantén cada elemento en su lugar con este organizador modular de madera de roble. Compartimentos ajustables para lápices, notas, cables y accesorios, con un acabado cálido que eleva cualquier escritorio.",
    features: ["Madera de roble maciza", "Compartimentos reconfigurables", "Base antideslizante", "Acabado resistente a rayones"],
  },
  {
    id: "silla-ergonomica-lumbar",
    name: "Silla ergonómica con soporte lumbar ajustable",
    cat: "ergonomia",
    price: 1290, oldPrice: 1590, rating: 4.9, reviews: 213, badge: "-19%",
    img: "1600585154340-be6161a56a0c",
    gallery: ["1600585154340-be6161a56a0c", "1503602642458-232111445657", "1541140532154-b024d705b90a"],
    desc: "Diseñada para largas jornadas: malla transpirable, soporte lumbar dinámico y reposabrazos 3D. La postura correcta, sin fatiga, durante todo el día.",
    features: ["Soporte lumbar dinámico", "Malla transpirable", "Reposabrazos 3D ajustables", "Reclinable hasta 135°", "Base de aluminio pulido"],
  },
  {
    id: "lampara-led-arco",
    name: "Lámpara LED de escritorio con brazo articulado",
    cat: "iluminacion",
    price: 275, oldPrice: null, rating: 4.7, reviews: 96, badge: "Nuevo",
    img: "1507003211169-0a1dd7228f2d",
    gallery: ["1507003211169-0a1dd7228f2d", "1513542789411-b6a5d4f31634", "1516035069371-29a1b244cc32"],
    desc: "Ilumina sin reflejos ni sombras. Tres temperaturas de color, control táctil de intensidad y puerto USB de carga integrado. Luz que cuida tu vista.",
    features: ["3 temperaturas de color", "Atenuación táctil", "Puerto USB de carga", "Brazo articulado 180°", "Bajo consumo LED"],
  },
  {
    id: "set-cuadernos-premium",
    name: "Set de 3 cuadernos premium tapa dura A5",
    cat: "papeleria",
    price: 95, oldPrice: 129, rating: 4.6, reviews: 74, badge: "-26%",
    img: "1531297484001-80022131f5a1",
    gallery: ["1531297484001-80022131f5a1", "1544816155-12df9643f363", "1517245386807-bb43f82c33c4"],
    desc: "Papel de 120 g/m² que no traspasa la tinta, cierre elástico y marcador de cinta. Tres cuadernos de tapa dura para reuniones, ideas y planificación.",
    features: ["Papel 120 g/m²", "Tapa dura resistente", "Cierre elástico", "Marcador de cinta", "Bolsillo interior"],
  },
  {
    id: "soporte-laptop-aluminio",
    name: "Soporte de laptop en aluminio ajustable",
    cat: "ergonomia",
    price: 165, oldPrice: 210, rating: 4.8, reviews: 152, badge: "-21%",
    img: "1527864550417-7fd91fc51a46",
    gallery: ["1527864550417-7fd91fc51a46", "1544816155-12df9643f363", "1498050108023-c5249f4df085"],
    desc: "Eleva tu portátil a la altura de los ojos y mejora tu postura. Aluminio anodizado, altura regulable y ventilación que mantiene el equipo fresco.",
    features: ["Aluminio anodizado", "Altura y ángulo regulables", "Ventilación pasiva", "Compatible 11\"–17\"", "Plegable y portátil"],
  },
  {
    id: "hub-usb-c-7en1",
    name: "Hub USB-C 7 en 1 con HDMI 4K",
    cat: "tecnologia",
    price: 210, oldPrice: null, rating: 4.7, reviews: 118, badge: null,
    img: "1517336714731-489689fd1ca8",
    gallery: ["1517336714731-489689fd1ca8", "1587829741301-dc798b83add3", "1519389950473-47ba0277781c"],
    desc: "Convierte un puerto USB-C en siete: HDMI 4K, USB 3.0, lector SD/microSD y carga PD de 100 W. Todo tu setup conectado con un solo cable.",
    features: ["HDMI 4K@30Hz", "3× USB 3.0", "Carga PD 100 W", "Lector SD / microSD", "Carcasa de aluminio"],
  },
  {
    id: "caja-archivadora-tela",
    name: "Cajas archivadoras de tela (pack de 2)",
    cat: "almacenamiento",
    price: 120, oldPrice: 150, rating: 4.5, reviews: 63, badge: "-20%",
    img: "1558618666-fcd25c85cd64",
    gallery: ["1558618666-fcd25c85cd64", "1526170375885-4d8ecf77b99f", "1583394838336-acd977736f90"],
    desc: "Orden que se ve bien. Cajas plegables de tela con etiqueta frontal y asas reforzadas para documentos, cables o material de oficina.",
    features: ["Tela resistente lavable", "Estructura plegable", "Etiqueta frontal", "Asas reforzadas", "Pack de 2 unidades"],
  },
  {
    id: "teclado-mecanico-silencioso",
    name: "Teclado mecánico silencioso inalámbrico",
    cat: "tecnologia",
    price: 340, oldPrice: 420, rating: 4.8, reviews: 187, badge: "-19%",
    img: "1587829741301-dc798b83add3",
    gallery: ["1587829741301-dc798b83add3", "1517336714731-489689fd1ca8", "1541140532154-b024d705b90a"],
    desc: "Switches silenciosos, conexión Bluetooth para tres dispositivos y batería de larga duración. La sensación mecánica sin molestar a la oficina.",
    features: ["Switches silenciosos", "Bluetooth multi-dispositivo", "Batería recargable", "Distribución en español", "Retroiluminación tenue"],
  },
  {
    id: "portalapices-metal",
    name: "Portalápices de malla metálica",
    cat: "escritorio",
    price: 45, oldPrice: null, rating: 4.4, reviews: 51, badge: null,
    img: "1526170375885-4d8ecf77b99f",
    gallery: ["1526170375885-4d8ecf77b99f", "1524758631624-e2822e304c36", "1531297484001-80022131f5a1"],
    desc: "Clásico y práctico. Malla metálica con recubrimiento anticorrosión y base estable para lápices, tijeras y accesorios.",
    features: ["Malla metálica robusta", "Recubrimiento anticorrosión", "Base estable", "Diseño ventilado"],
  },
  {
    id: "reposapies-ergonomico",
    name: "Reposapiés ergonómico con inclinación",
    cat: "ergonomia",
    price: 135, oldPrice: 175, rating: 4.6, reviews: 88, badge: "-23%",
    img: "1541140532154-b024d705b90a",
    gallery: ["1541140532154-b024d705b90a", "1600585154340-be6161a56a0c", "1503602642458-232111445657"],
    desc: "Alivia la presión en piernas y espalda. Superficie con masaje texturizado e inclinación ajustable para una postura sentada más saludable.",
    features: ["Inclinación ajustable", "Superficie de masaje", "Antideslizante", "Soporta hasta 120 kg"],
  },
  {
    id: "boligrafos-gel-set",
    name: "Set de 12 bolígrafos de gel de secado rápido",
    cat: "papeleria",
    price: 38, oldPrice: 52, rating: 4.7, reviews: 142, badge: "-27%",
    img: "1544816155-12df9643f363",
    gallery: ["1544816155-12df9643f363", "1531297484001-80022131f5a1", "1517245386807-bb43f82c33c4"],
    desc: "Trazo suave y uniforme, tinta de secado rápido que no mancha y grip ergonómico. Doce colores para notas que se disfrutan.",
    features: ["Tinta de secado rápido", "Punta 0.5 mm", "Grip ergonómico", "12 colores", "Antimanchas"],
  },
  {
    id: "lampara-pie-oficina",
    name: "Lámpara de pie regulable para oficina",
    cat: "iluminacion",
    price: 420, oldPrice: null, rating: 4.6, reviews: 47, badge: "Nuevo",
    img: "1513542789411-b6a5d4f31634",
    gallery: ["1513542789411-b6a5d4f31634", "1507003211169-0a1dd7228f2d", "1516035069371-29a1b244cc32"],
    desc: "Luz ambiental cálida y funcional a la vez. Regulador continuo, cabezal orientable y base de peso ligero para reubicarla con facilidad.",
    features: ["Regulador continuo", "Cabezal orientable", "Luz cálida antifatiga", "Base estable", "Bajo consumo"],
  },
  {
    id: "mousepad-xl-cuero",
    name: "Alfombrilla XL de cuero sintético",
    cat: "escritorio",
    price: 75, oldPrice: 99, rating: 4.7, reviews: 109, badge: "-24%",
    img: "1516035069371-29a1b244cc32",
    gallery: ["1516035069371-29a1b244cc32", "1497215728101-856f4ea42174", "1519389950473-47ba0277781c"],
    desc: "Protege tu escritorio y unifica tu setup. Superficie de cuero sintético con doble cara y bordes cosidos que no se deshilachan.",
    features: ["Cuero sintético premium", "Doble cara reversible", "Bordes cosidos", "80 × 40 cm", "Base antideslizante"],
  },
  {
    id: "estacion-carga-multiple",
    name: "Estación de carga múltiple 6 puertos",
    cat: "tecnologia",
    price: 245, oldPrice: 310, rating: 4.8, reviews: 134, badge: "-21%",
    img: "1519389950473-47ba0277781c",
    gallery: ["1519389950473-47ba0277781c", "1587829741301-dc798b83add3", "1517336714731-489689fd1ca8"],
    desc: "Carga hasta seis dispositivos a la vez con protección contra sobrecarga. Organizador de cables integrado para un escritorio sin nudos.",
    features: ["6 puertos de carga", "Protección inteligente", "Carga rápida", "Organizador integrado", "Certificación de seguridad"],
  },
  {
    id: "archivador-cajones",
    name: "Archivador de 3 cajones con ruedas",
    cat: "almacenamiento",
    price: 560, oldPrice: 690, rating: 4.7, reviews: 72, badge: "-19%",
    img: "1583394838336-acd977736f90",
    gallery: ["1583394838336-acd977736f90", "1558618666-fcd25c85cd64", "1526170375885-4d8ecf77b99f"],
    desc: "Almacenamiento móvil y seguro. Tres cajones con cerradura, ruedas silenciosas y acabado metálico resistente para documentos y material.",
    features: ["3 cajones con cerradura", "Ruedas silenciosas", "Estructura metálica", "Cierre suave", "Fácil montaje"],
  },
  {
    id: "notas-adhesivas-set",
    name: "Set de notas adhesivas y marcadores de página",
    cat: "papeleria",
    price: 28, oldPrice: null, rating: 4.5, reviews: 65, badge: null,
    img: "1517245386807-bb43f82c33c4",
    gallery: ["1517245386807-bb43f82c33c4", "1544816155-12df9643f363", "1531297484001-80022131f5a1"],
    desc: "Organiza ideas y prioridades de un vistazo. Notas de colores con adhesivo reposicionable y banderitas para marcar lo importante.",
    features: ["Adhesivo reposicionable", "Colores surtidos", "Banderitas incluidas", "No dejan residuo"],
  },
  {
    id: "monitor-stand-cajon",
    name: "Elevador de monitor con cajón organizador",
    cat: "escritorio",
    price: 230, oldPrice: 289, rating: 4.8, reviews: 121, badge: "-20%",
    img: "1497215728101-856f4ea42174",
    gallery: ["1497215728101-856f4ea42174", "1524758631624-e2822e304c36", "1516035069371-29a1b244cc32"],
    desc: "Sube el monitor a la altura ideal y gana espacio de guardado. Cajón deslizante y hueco inferior para teclado y accesorios.",
    features: ["Altura ergonómica", "Cajón organizador", "Espacio para teclado", "Madera resistente", "Montaje sin herramientas"],
  },
  {
    id: "webcam-full-hd",
    name: "Webcam Full HD 1080p con micrófono",
    cat: "tecnologia",
    price: 185, oldPrice: 235, rating: 4.6, reviews: 98, badge: "-21%",
    img: "1587829741301-dc798b83add3",
    gallery: ["1587829741301-dc798b83add3", "1519389950473-47ba0277781c", "1498050108023-c5249f4df085"],
    desc: "Videollamadas nítidas con enfoque automático, micrófono con reducción de ruido y cubierta de privacidad. Conéctala y listo.",
    features: ["Full HD 1080p", "Enfoque automático", "Micrófono con reducción de ruido", "Cubierta de privacidad", "Plug & play USB"],
  },
];

/* ---- Filtros de precio (Bs) ---- */
const PRICE_RANGES = [
  { label: "Menos de Bs 50",   min: 0,    max: 50 },
  { label: "Bs 50 – Bs 150",   min: 50,   max: 150 },
  { label: "Bs 150 – Bs 300",  min: 150,  max: 300 },
  { label: "Bs 300 – Bs 600",  min: 300,  max: 600 },
  { label: "Más de Bs 600",    min: 600,  max: Infinity },
];
