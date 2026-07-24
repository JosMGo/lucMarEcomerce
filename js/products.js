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
  { slug: "energia",        name: "Energía y respaldo",         img: "1621905251189-08b45d6a269e" },
  { slug: "iluminacion",    name: "Iluminación de oficina",     img: "1507003211169-0a1dd7228f2d" },
  { slug: "tecnologia",     name: "Accesorios tecnológicos",    img: "1517336714731-489689fd1ca8" },
  { slug: "almacenamiento", name: "Almacenamiento",             img: "1558618666-fcd25c85cd64" },
  { slug: "audio-video",    name: "Audio y video",              img: "1519389950473-47ba0277781c" },
  { slug: "redes",          name: "Redes y conectividad",       img: "1498050108023-c5249f4df085" },
  { slug: "domotica",       name: "Domótica",                   img: "1503602642458-232111445657" },
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
  { slug: "tupperware", name: "TUPPERWARE", tagline: "Contenedores y almacenamiento", logo: "img/marcas/tupperware-logo.png" },

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
    cat: "escritorio", brand: "totto",
    price: 189, oldPrice: 249, rating: 4.8, reviews: 128, badge: "-24%",
    img: "1524758631624-e2822e304c36",
    gallery: ["1524758631624-e2822e304c36", "1497215728101-856f4ea42174", "1526170375885-4d8ecf77b99f"],
    desc: "Mantén cada elemento en su lugar con este organizador modular de madera de roble. Compartimentos ajustables para lápices, notas, cables y accesorios, con un acabado cálido que eleva cualquier escritorio.",
    features: ["Madera de roble maciza", "Compartimentos reconfigurables", "Base antideslizante", "Acabado resistente a rayones"],
  },
  {
    id: "silla-ergonomica-lumbar",
    name: "Silla ergonómica con soporte lumbar ajustable",
    cat: "ergonomia", brand: "dt3",
    price: 1290, oldPrice: 1590, rating: 4.9, reviews: 213, badge: "-19%",
    img: "1600585154340-be6161a56a0c",
    gallery: ["1600585154340-be6161a56a0c", "1503602642458-232111445657", "1541140532154-b024d705b90a"],
    desc: "Diseñada para largas jornadas: malla transpirable, soporte lumbar dinámico y reposabrazos 3D. La postura correcta, sin fatiga, durante todo el día.",
    features: ["Soporte lumbar dinámico", "Malla transpirable", "Reposabrazos 3D ajustables", "Reclinable hasta 135°", "Base de aluminio pulido"],
  },
  {
    id: "lampara-led-arco",
    name: "Lámpara LED de escritorio con brazo articulado",
    cat: "iluminacion", brand: "volteck",
    price: 275, oldPrice: null, rating: 4.7, reviews: 96, badge: "Nuevo",
    img: "1507003211169-0a1dd7228f2d",
    gallery: ["1507003211169-0a1dd7228f2d", "1513542789411-b6a5d4f31634", "1516035069371-29a1b244cc32"],
    desc: "Ilumina sin reflejos ni sombras. Tres temperaturas de color, control táctil de intensidad y puerto USB de carga integrado. Luz que cuida tu vista.",
    features: ["3 temperaturas de color", "Atenuación táctil", "Puerto USB de carga", "Brazo articulado 180°", "Bajo consumo LED"],
  },
  {
    id: "set-cuadernos-premium",
    name: "Set de 3 cuadernos premium tapa dura A5",
    cat: "escritorio", brand: "totto",
    price: 95, oldPrice: 129, rating: 4.6, reviews: 74, badge: "-26%",
    img: "1531297484001-80022131f5a1",
    gallery: ["1531297484001-80022131f5a1", "1544816155-12df9643f363", "1517245386807-bb43f82c33c4"],
    desc: "Papel de 120 g/m² que no traspasa la tinta, cierre elástico y marcador de cinta. Tres cuadernos de tapa dura para reuniones, ideas y planificación.",
    features: ["Papel 120 g/m²", "Tapa dura resistente", "Cierre elástico", "Marcador de cinta", "Bolsillo interior"],
  },
  {
    id: "soporte-laptop-aluminio",
    name: "Soporte de laptop en aluminio ajustable",
    cat: "ergonomia", brand: "targus",
    price: 165, oldPrice: 210, rating: 4.8, reviews: 152, badge: "-21%",
    img: "1527864550417-7fd91fc51a46",
    gallery: ["1527864550417-7fd91fc51a46", "1544816155-12df9643f363", "1498050108023-c5249f4df085"],
    desc: "Eleva tu portátil a la altura de los ojos y mejora tu postura. Aluminio anodizado, altura regulable y ventilación que mantiene el equipo fresco.",
    features: ["Aluminio anodizado", "Altura y ángulo regulables", "Ventilación pasiva", "Compatible 11\"–17\"", "Plegable y portátil"],
  },
  {
    id: "hub-usb-c-7en1",
    name: "Hub USB-C 7 en 1 con HDMI 4K",
    cat: "tecnologia", brand: "ugreen",
    price: 210, oldPrice: null, rating: 4.7, reviews: 118, badge: null,
    img: "1517336714731-489689fd1ca8",
    gallery: ["1517336714731-489689fd1ca8", "1587829741301-dc798b83add3", "1519389950473-47ba0277781c"],
    desc: "Convierte un puerto USB-C en siete: HDMI 4K, USB 3.0, lector SD/microSD y carga PD de 100 W. Todo tu setup conectado con un solo cable.",
    features: ["HDMI 4K@30Hz", "3× USB 3.0", "Carga PD 100 W", "Lector SD / microSD", "Carcasa de aluminio"],
  },
  {
    id: "caja-archivadora-tela",
    name: "Cajas archivadoras de tela (pack de 2)",
    cat: "almacenamiento", brand: "kingsons",
    price: 120, oldPrice: 150, rating: 4.5, reviews: 63, badge: "-20%",
    img: "1558618666-fcd25c85cd64",
    gallery: ["1558618666-fcd25c85cd64", "1526170375885-4d8ecf77b99f", "1583394838336-acd977736f90"],
    desc: "Orden que se ve bien. Cajas plegables de tela con etiqueta frontal y asas reforzadas para documentos, cables o material de oficina.",
    features: ["Tela resistente lavable", "Estructura plegable", "Etiqueta frontal", "Asas reforzadas", "Pack de 2 unidades"],
  },
  {
    id: "teclado-mecanico-silencioso",
    name: "Teclado mecánico silencioso inalámbrico",
    cat: "tecnologia", brand: "amazon",
    price: 340, oldPrice: 420, rating: 4.8, reviews: 187, badge: "-19%",
    img: "1587829741301-dc798b83add3",
    gallery: ["1587829741301-dc798b83add3", "1517336714731-489689fd1ca8", "1541140532154-b024d705b90a"],
    desc: "Switches silenciosos, conexión Bluetooth para tres dispositivos y batería de larga duración. La sensación mecánica sin molestar a la oficina.",
    features: ["Switches silenciosos", "Bluetooth multi-dispositivo", "Batería recargable", "Distribución en español", "Retroiluminación tenue"],
  },
  {
    id: "portalapices-metal",
    name: "Portalápices de malla metálica",
    cat: "escritorio", brand: "pretul",
    price: 45, oldPrice: null, rating: 4.4, reviews: 51, badge: null,
    img: "1526170375885-4d8ecf77b99f",
    gallery: ["1526170375885-4d8ecf77b99f", "1524758631624-e2822e304c36", "1531297484001-80022131f5a1"],
    desc: "Clásico y práctico. Malla metálica con recubrimiento anticorrosión y base estable para lápices, tijeras y accesorios.",
    features: ["Malla metálica robusta", "Recubrimiento anticorrosión", "Base estable", "Diseño ventilado"],
  },
  {
    id: "reposapies-ergonomico",
    name: "Reposapiés ergonómico con inclinación",
    cat: "ergonomia", brand: "dt3",
    price: 135, oldPrice: 175, rating: 4.6, reviews: 88, badge: "-23%",
    img: "1541140532154-b024d705b90a",
    gallery: ["1541140532154-b024d705b90a", "1600585154340-be6161a56a0c", "1503602642458-232111445657"],
    desc: "Alivia la presión en piernas y espalda. Superficie con masaje texturizado e inclinación ajustable para una postura sentada más saludable.",
    features: ["Inclinación ajustable", "Superficie de masaje", "Antideslizante", "Soporta hasta 120 kg"],
  },
  {
    id: "boligrafos-gel-set",
    name: "Set de 12 bolígrafos de gel de secado rápido",
    cat: "escritorio", brand: "totto",
    price: 38, oldPrice: 52, rating: 4.7, reviews: 142, badge: "-27%",
    img: "1544816155-12df9643f363",
    gallery: ["1544816155-12df9643f363", "1531297484001-80022131f5a1", "1517245386807-bb43f82c33c4"],
    desc: "Trazo suave y uniforme, tinta de secado rápido que no mancha y grip ergonómico. Doce colores para notas que se disfrutan.",
    features: ["Tinta de secado rápido", "Punta 0.5 mm", "Grip ergonómico", "12 colores", "Antimanchas"],
  },
  {
    id: "lampara-pie-oficina",
    name: "Lámpara de pie regulable para oficina",
    cat: "iluminacion", brand: "volteck",
    price: 420, oldPrice: null, rating: 4.6, reviews: 47, badge: "Nuevo",
    img: "1513542789411-b6a5d4f31634",
    gallery: ["1513542789411-b6a5d4f31634", "1507003211169-0a1dd7228f2d", "1516035069371-29a1b244cc32"],
    desc: "Luz ambiental cálida y funcional a la vez. Regulador continuo, cabezal orientable y base de peso ligero para reubicarla con facilidad.",
    features: ["Regulador continuo", "Cabezal orientable", "Luz cálida antifatiga", "Base estable", "Bajo consumo"],
  },
  {
    id: "mousepad-xl-cuero",
    name: "Alfombrilla XL de cuero sintético",
    cat: "escritorio", brand: "ugreen",
    price: 75, oldPrice: 99, rating: 4.7, reviews: 109, badge: "-24%",
    img: "1516035069371-29a1b244cc32",
    gallery: ["1516035069371-29a1b244cc32", "1497215728101-856f4ea42174", "1519389950473-47ba0277781c"],
    desc: "Protege tu escritorio y unifica tu setup. Superficie de cuero sintético con doble cara y bordes cosidos que no se deshilachan.",
    features: ["Cuero sintético premium", "Doble cara reversible", "Bordes cosidos", "80 × 40 cm", "Base antideslizante"],
  },
  {
    id: "estacion-carga-multiple",
    name: "Estación de carga múltiple 6 puertos",
    cat: "energia", brand: "forza",
    price: 245, oldPrice: 310, rating: 4.8, reviews: 134, badge: "-21%",
    img: "1519389950473-47ba0277781c",
    gallery: ["1519389950473-47ba0277781c", "1587829741301-dc798b83add3", "1517336714731-489689fd1ca8"],
    desc: "Carga hasta seis dispositivos a la vez con protección contra sobrecarga. Organizador de cables integrado para un escritorio sin nudos.",
    features: ["6 puertos de carga", "Protección inteligente", "Carga rápida", "Organizador integrado", "Certificación de seguridad"],
  },
  {
    id: "archivador-cajones",
    name: "Archivador de 3 cajones con ruedas",
    cat: "almacenamiento", brand: "trupper",
    price: 560, oldPrice: 690, rating: 4.7, reviews: 72, badge: "-19%",
    img: "1583394838336-acd977736f90",
    gallery: ["1583394838336-acd977736f90", "1558618666-fcd25c85cd64", "1526170375885-4d8ecf77b99f"],
    desc: "Almacenamiento móvil y seguro. Tres cajones con cerradura, ruedas silenciosas y acabado metálico resistente para documentos y material.",
    features: ["3 cajones con cerradura", "Ruedas silenciosas", "Estructura metálica", "Cierre suave", "Fácil montaje"],
  },
  {
    id: "notas-adhesivas-set",
    name: "Set de notas adhesivas y marcadores de página",
    cat: "escritorio", brand: "totto",
    price: 28, oldPrice: null, rating: 4.5, reviews: 65, badge: null,
    img: "1517245386807-bb43f82c33c4",
    gallery: ["1517245386807-bb43f82c33c4", "1544816155-12df9643f363", "1531297484001-80022131f5a1"],
    desc: "Organiza ideas y prioridades de un vistazo. Notas de colores con adhesivo reposicionable y banderitas para marcar lo importante.",
    features: ["Adhesivo reposicionable", "Colores surtidos", "Banderitas incluidas", "No dejan residuo"],
  },
  {
    id: "monitor-stand-cajon",
    name: "Elevador de monitor con cajón organizador",
    cat: "escritorio", brand: "targus",
    price: 230, oldPrice: 289, rating: 4.8, reviews: 121, badge: "-20%",
    img: "1497215728101-856f4ea42174",
    gallery: ["1497215728101-856f4ea42174", "1524758631624-e2822e304c36", "1516035069371-29a1b244cc32"],
    desc: "Sube el monitor a la altura ideal y gana espacio de guardado. Cajón deslizante y hueco inferior para teclado y accesorios.",
    features: ["Altura ergonómica", "Cajón organizador", "Espacio para teclado", "Madera resistente", "Montaje sin herramientas"],
  },
  {
    id: "webcam-full-hd",
    name: "Webcam Full HD 1080p con micrófono",
    cat: "tecnologia", brand: "tapo",
    price: 185, oldPrice: 235, rating: 4.6, reviews: 98, badge: "-21%",
    img: "1587829741301-dc798b83add3",
    gallery: ["1587829741301-dc798b83add3", "1519389950473-47ba0277781c", "1498050108023-c5249f4df085"],
    desc: "Videollamadas nítidas con enfoque automático, micrófono con reducción de ruido y cubierta de privacidad. Conéctala y listo.",
    features: ["Full HD 1080p", "Enfoque automático", "Micrófono con reducción de ruido", "Cubierta de privacidad", "Plug & play USB"],
  },

  /* ---- JBL · Audio profesional ---- */
  {
    id: "jbl-audifonos-anc",
    name: "Audífonos over-ear con cancelación de ruido",
    cat: "audio-video", brand: "jbl",
    price: 690, oldPrice: 890, rating: 4.8, reviews: 164, badge: "-22%",
    img: "1505740420928-5e560c06d30e",
    gallery: ["1505740420928-5e560c06d30e", "1484704849700-f032a568e944"],
    desc: "Aísla el ruido de la oficina y concéntrate. Cancelación activa, almohadillas de espuma viscoelástica y hasta 40 horas de batería para toda la jornada.",
    features: ["Cancelación activa de ruido", "40 h de autonomía", "Bluetooth multipunto", "Micrófono para llamadas", "Diadema plegable"],
  },
  {
    id: "jbl-parlante-bluetooth",
    name: "Parlante Bluetooth portátil resistente al agua",
    cat: "audio-video", brand: "jbl",
    price: 420, oldPrice: null, rating: 4.7, reviews: 92, badge: null,
    img: "1608043152269-423dbba4e7e1",
    gallery: ["1608043152269-423dbba4e7e1", "1589003077984-894e133dabab"],
    desc: "Sonido potente en un cuerpo compacto que aguanta salpicaduras y polvo. Ideal para la recepción, el taller o llevarlo a donde haga falta.",
    features: ["Resistencia IP67", "12 h de reproducción", "Bluetooth 5.3", "Emparejamiento de dos parlantes", "Correa de transporte"],
  },

  /* ---- BOYA · Micrófonos y grabación ---- */
  {
    id: "boya-microfono-solapa-dual",
    name: "Micrófono de solapa inalámbrico dual",
    cat: "audio-video", brand: "boya",
    price: 520, oldPrice: 650, rating: 4.6, reviews: 71, badge: "-20%",
    img: "1590602847861-f357a9332bbc",
    gallery: ["1590602847861-f357a9332bbc", "1478737270239-2f02b77fc618"],
    desc: "Dos transmisores y un receptor para grabar entrevistas o contenido a dos voces sin cables. Se conecta a cámara, celular o laptop.",
    features: ["Dos transmisores incluidos", "Alcance de 50 m", "Cancelación de ruido ambiente", "8 h de batería", "Estuche de carga"],
  },
  {
    id: "boya-microfono-canon",
    name: "Micrófono de cañón direccional para cámara",
    cat: "audio-video", brand: "boya",
    price: 380, oldPrice: null, rating: 4.5, reviews: 48, badge: null,
    img: "1520170350707-b2da59970118",
    gallery: ["1520170350707-b2da59970118", "1478737270239-2f02b77fc618"],
    desc: "Capta la voz de quien está delante y deja fuera el ruido de los lados. Montaje antivibración y espuma antiviento incluidos.",
    features: ["Patrón supercardioide", "Montaje antivibración", "Espuma antiviento", "No necesita batería", "Aluminio ligero"],
  },

  /* ---- MAONO · Micrófonos y streaming ---- */
  {
    id: "maono-microfono-usb",
    name: "Micrófono USB de condensador para streaming",
    cat: "audio-video", brand: "maono",
    price: 340, oldPrice: null, rating: 4.7, reviews: 0, badge: "Nuevo",
    img: "1590602847861-f357a9332bbc",
    gallery: ["1590602847861-f357a9332bbc", "1487215078519-e21cc028cb29"],
    desc: "Voz clara en reuniones, cursos y transmisiones sin instalar nada. Control de ganancia y salida de auriculares para escucharte en tiempo real.",
    features: ["Condensador de 16 mm", "Monitoreo sin retardo", "Control de ganancia y silencio", "Trípode de escritorio", "Compatible con PC y Mac"],
  },
  {
    id: "maono-brazo-microfono",
    name: "Brazo articulado para micrófono con filtro antipop",
    cat: "audio-video", brand: "maono",
    price: 165, oldPrice: 210, rating: 4.6, reviews: 54, badge: "-21%",
    img: "1487215078519-e21cc028cb29",
    gallery: ["1487215078519-e21cc028cb29", "1590602847861-f357a9332bbc"],
    desc: "Acerca el micrófono a la boca y libera el escritorio. Muelles internos silenciosos y guía para ocultar el cable.",
    features: ["Alcance de 75 cm", "Pinza para tableros de 5,5 cm", "Filtro antipop incluido", "Guía interna de cable", "Rosca universal 5/8\""],
  },

  /* ---- YABER · Proyectores ---- */
  {
    id: "yaber-proyector-fullhd",
    name: "Proyector Full HD 1080p con WiFi y Bluetooth",
    cat: "audio-video", brand: "yaber",
    price: 1450, oldPrice: 1790, rating: 4.7, reviews: 83, badge: "-19%",
    img: "1626379953822-baec19c3accd",
    gallery: ["1626379953822-baec19c3accd", "1618410320928-25228d811631"],
    desc: "Convierte cualquier pared en la pantalla de la sala de reuniones. Proyecta desde laptop, celular o USB, con corrección de imagen automática.",
    features: ["Resolución nativa 1080p", "Corrección trapezoidal automática", "WiFi y Bluetooth", "HDMI y USB", "Parlantes integrados"],
  },
  {
    id: "yaber-pantalla-proyeccion",
    name: "Pantalla de proyección portátil de 100\"",
    cat: "audio-video", brand: "yaber",
    price: 295, oldPrice: null, rating: 4.4, reviews: 37, badge: null,
    img: "img/productos/yaber-pantalla-proyeccion.jpg",
    gallery: ["img/productos/yaber-pantalla-proyeccion.jpg"],
    desc: "Superficie mate que evita reflejos y se monta en minutos. Se pliega en su bolsa para llevarla a presentaciones fuera de la oficina.",
    features: ["100 pulgadas en 16:9", "Tela mate antirreflejo", "Se pliega sin marcas", "Ganchos y cuerdas incluidos", "Bolsa de transporte"],
  },

  /* ---- TP-LINK · Redes y wifi ---- */
  {
    id: "tp-link-router-wifi6",
    name: "Router WiFi 6 de doble banda AX1500",
    cat: "redes", brand: "tp-link",
    price: 480, oldPrice: 599, rating: 4.7, reviews: 128, badge: "-20%",
    img: "1544197150-b99a580bb7a8",
    gallery: ["1544197150-b99a580bb7a8", "1558494949-ef010cbdcc31"],
    desc: "Más velocidad y más dispositivos conectados a la vez sin que la oficina se caiga. Configuración desde el celular en pocos minutos.",
    features: ["WiFi 6 AX1500", "Cuatro antenas de alta ganancia", "Control parental y red de invitados", "4 puertos LAN gigabit", "Configuración por app"],
  },
  {
    id: "tp-link-repetidor-wifi",
    name: "Repetidor WiFi de doble banda AC1200",
    cat: "redes", brand: "tp-link",
    price: 185, oldPrice: null, rating: 4.5, reviews: 96, badge: null,
    img: "1558494949-ef010cbdcc31",
    gallery: ["1558494949-ef010cbdcc31", "1544197150-b99a580bb7a8"],
    desc: "Lleva la señal al almacén o a la sala del fondo. Se enchufa a la pared y un indicador te dice cuál es el mejor lugar para ponerlo.",
    features: ["Cobertura extra de 90 m²", "Doble banda AC1200", "Indicador de señal", "Puerto ethernet", "Instalación con un botón"],
  },

  /* ---- ELSYS · Electrónica y señal ---- */
  {
    id: "elsys-amplificador-4g",
    name: "Amplificador de señal celular 4G para oficina",
    cat: "redes", brand: "elsys",
    price: 890, oldPrice: null, rating: 4.4, reviews: 29, badge: null,
    img: "1562408590-e32931084e23",
    gallery: ["1562408590-e32931084e23", "1544197150-b99a580bb7a8"],
    desc: "Soluciona las llamadas que se cortan en oficinas de planta baja o con paredes gruesas. Antena exterior, amplificador interior y listo.",
    features: ["Cobertura de hasta 300 m²", "Compatible con las tres operadoras", "Antena exterior incluida", "Instalación sin obra", "Indicador de ganancia"],
  },
  {
    id: "elsys-antena-exterior",
    name: "Antena WiFi exterior de largo alcance",
    cat: "redes", brand: "elsys",
    price: 340, oldPrice: 420, rating: 4.3, reviews: 24, badge: "-19%",
    img: "1516192518150-0d8fee5425e3",
    gallery: ["1516192518150-0d8fee5425e3", "1562408590-e32931084e23"],
    desc: "Conecta el depósito o el patio a la red de la oficina. Carcasa resistente a la lluvia y al sol, pensada para quedarse fuera todo el año.",
    features: ["Resistencia a la intemperie IP65", "Alcance de hasta 500 m", "Soporte de montaje incluido", "Alimentación por cable de red", "Doble polarización"],
  },

  /* ---- SHELLY · Automatización del hogar ---- */
  {
    id: "shelly-1-gen3",
    name: "Interruptor WiFi empotrable Shelly 1 Gen3",
    cat: "domotica", brand: "shelly",
    price: 145, oldPrice: null, rating: 4.8, reviews: 0, badge: "Nuevo",
    img: "img/productos/shelly-1-gen3.png",
    gallery: ["img/productos/shelly-1-gen3.png"],
    desc: "Convierte en inteligente cualquier luz o equipo que ya tengas. Se instala detrás del interruptor de pared y mantiene el pulsador funcionando como siempre.",
    features: ["Se instala detrás del interruptor", "Funciona con 110-240 V y 12-48 V", "Carga de hasta 16 A", "Compatible con Alexa y Google Home", "Funciona sin nube si lo prefieres"],
  },
  {
    id: "shelly-enchufe-medicion",
    name: "Enchufe inteligente con medición de consumo",
    cat: "domotica", brand: "shelly",
    price: 120, oldPrice: 155, rating: 4.6, reviews: 41, badge: "-23%",
    img: "1558002038-1055907df827",
    gallery: ["1558002038-1055907df827", "1585771724684-38269d6639fd"],
    desc: "Enciende y apaga equipos desde el celular y descubre cuánto gasta cada uno. Útil para dejar programado el cartel luminoso o la cafetera.",
    features: ["Medición de consumo en tiempo real", "Programación por horarios", "Control por app y por voz", "Protección contra sobrecarga", "No necesita instalación"],
  },

  /* ---- NETAC · Almacenamiento y memorias ---- */
  {
    id: "netac-ssd-externo-1tb",
    name: "SSD externo portátil 1 TB USB 3.2",
    cat: "almacenamiento", brand: "netac",
    price: 560, oldPrice: 720, rating: 4.7, reviews: 112, badge: "-22%",
    img: "img/productos/netac-ssd-1tb.jpg",
    gallery: ["img/productos/netac-ssd-1tb.jpg"],
    desc: "Copia de seguridad de toda la oficina en un disco que cabe en el bolsillo. Sin partes móviles: aguanta los viajes mucho mejor que un disco tradicional.",
    features: ["1 TB de capacidad", "Hasta 550 MB/s de lectura", "USB 3.2 tipo C", "Carcasa de aluminio", "Compatible con PC, Mac y celular"],
  },
  {
    id: "netac-usb-128gb",
    name: "Memoria USB 128 GB de carcasa metálica",
    cat: "almacenamiento", brand: "netac",
    price: 95, oldPrice: null, rating: 4.5, reviews: 187, badge: null,
    img: "img/productos/netac-usb-128gb.jpg",
    gallery: ["img/productos/netac-usb-128gb.jpg"],
    desc: "La memoria de siempre, pero con carcasa de metal y argolla para el llavero. Para mover presentaciones y respaldos del día a día.",
    features: ["128 GB de capacidad", "USB 3.0 de alta velocidad", "Carcasa metálica", "Argolla para llavero", "Compatible con PC y Mac"],
  },

  /* ---- FORZA · Energía y respaldo ---- */
  

 

  
  
  {
    id: "forza-ups-1000va",
    name: "UPS interactivo 1000 VA con 8 tomas",
    cat: "energia", brand: "forza",
    price: 890, oldPrice: 1090, rating: 4.7, reviews: 96, badge: "-18%",
    img: "img/productos/forza-ups-1000va.jpg",
    gallery: ["img/productos/forza-ups-1000va.jpg"],
    desc: "Cuando se corta la luz, tu computadora sigue encendida el tiempo suficiente para guardar el trabajo y apagarla bien. Ocho tomas para el equipo, el monitor y el router.",
    features: ["1000 VA / 500 W", "8 tomas con respaldo y protección", "Autonomía de 15 a 30 minutos", "Regulación automática de voltaje", "Alarma sonora de corte"],
  },
  {
    id: "forza-regulador-voltaje",
    name: "Regulador de voltaje 1200 VA para oficina",
    cat: "energia", brand: "forza",
    price: 320, oldPrice: null, rating: 4.5, reviews: 63, badge: null,
    img: "img/productos/forza-regulador-voltaje.jpg",
    gallery: ["img/productos/forza-regulador-voltaje.jpg"],
    desc: "Protege los equipos de las subidas y bajadas de tensión que van quemando las fuentes con el tiempo. Se conecta entre el enchufe de pared y tus aparatos.",
    features: ["1200 VA de capacidad", "6 tomas protegidas", "Corte automático por sobretensión", "Indicadores de estado", "Carcasa metálica"],
  },

  /* ---- ENERSAFE · UPS y protección eléctrica ---- */
  {
    id: "enersafe-ups-800va",
    name: "UPS de respaldo 800 VA con pantalla LCD",
    cat: "energia", brand: "enersafe",
    price: 690, oldPrice: null, rating: 4.6, reviews: 0, badge: "Nuevo",
    img: "img/productos/enersafe-ups-800va.jpg",
    gallery: ["img/productos/enersafe-ups-800va.jpg"],
    desc: "Respaldo para el equipo de recepción o la caja registradora. La pantalla muestra la carga conectada y la batería restante de un vistazo.",
    features: ["800 VA / 400 W", "Pantalla LCD de estado", "6 tomas con respaldo", "Protección para línea de red", "Batería reemplazable"],
  },
  {
    id: "enersafe-bateria-respaldo",
    name: "Batería de respaldo portátil 300 W",
    cat: "energia", brand: "enersafe",
    price: 1150, oldPrice: 1390, rating: 4.7, reviews: 34, badge: "-17%",
    img: "img/productos/enersafe-bateria-respaldo.jpg",
    gallery: ["img/productos/enersafe-bateria-respaldo.jpg"],
    desc: "Energía donde no llega el enchufe: ferias, obras o cortes largos. Carga laptops, luces y herramientas pequeñas, y se recarga en la toma común.",
    features: ["300 W de salida continua", "Tomas AC, USB-C y USB-A", "Batería de litio de larga vida", "Pantalla de carga restante", "Asa de transporte"],
  },

  /* ---- UGREEN · Cables y conectividad ---- */
  {
    id: "mini-power-bank-ugreen-5000mah",
    name: "MINI POWER BANK UGREEN 5000mAh",
    sku: "35338",
    cat: "energia", brand: "ugreen",
    price: 310, oldPrice: null, rating: 4.7, reviews: 0, badge: "Nuevo",
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
    price: 160, oldPrice: null, rating: 4.7, reviews: 0, badge: "Nuevo",
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
    price: 115, oldPrice: null, rating: 4.7, reviews: 0, badge: "Nuevo",
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
    price: 280, oldPrice: null, rating: 4.7, reviews: 1, badge: "Nuevo",
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
    price: 500, oldPrice: null, rating: 4, reviews: 109, badge: null,
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
    price: 200, oldPrice: null, rating: 4.7, reviews: 0, badge: "Nuevo",
    img: "img/productos/ugreen-cargador-usbc-30w-nexcode.jpg",
    gallery: ["img/productos/ugreen-cargador-usbc-30w-nexcode.jpg", "img/productos/ugreen-cargador-usbc-30w-nexode-details.jpg", "img/productos/ugreen-cargadorusbc-startplay.jpg"],
    desc: "CARGADOR USB-C 30W NEXODE ROBOT GaN*PANTALLA LED QUE MUESTRA DIFERENTES EXPRESIONES*PROTECCION ELECTRICA MULTIPLE",
    features: ["Cargador RobotGaN: Presentamos nuestro futurista y adorable cargador USB C RobotGaN de 30 W, este pequeño cargador con forma de robot combina funcionalidad con diversión, lo que lo convierte en un accesorio ideal para todas sus necesidades de carga mientras viaja.", "Potente carga de 30 W: para tu iPhone 14 Pro Max de 0 a 55 % en solo 30 minutos, carga tu teléfono antes de salir", "Pantalla LED: la cara del pequeño robot es una pantalla LED que puede mostrar diferentes expresiones (diferentes expresiones corresponden a diferentes estados de carga), cargando a los aburridos.", "Sistema de seguridad múltiple: protección contra cortocircuitos, protección contra sobrecargas, protección contra sobrecalentamiento y protección contra sobretensiones integradas, listos para una seguridad total.", "Un cargador para todo: junto con múltiples protocolos de carga rápida, amplia compatibilidad, como auriculares, teléfonos móviles, tabletas e incluso MacBook Air.", "Nota: Ciertos dispositivos pueden requerir energía adicional incluso cuando están completamente cargados. Esto puede provocar que el icono de carga completa no se transfiera inmediatamente."],
  },

  {
    id: "adaptador-multipuerto-usb-c-a-vga-hdmi",
    name: "ADAPTADOR MULTIPUERTO USB-C a VGA/HDMI",
    sku: "50505",
    cat: "redes", brand: "ugreen",
    price: 265, oldPrice: null, rating: 4.7, reviews: 0, badge: "Nuevo",
    img: "img/productos/adaptador-multipuerto.jpeg",
    gallery: ["img/productos/adaptador-multipuerto.jpeg"],
    desc: "Expande la conectividad de tu computadora de forma rápida y segura con el Hub USB 3.0 UGREEN de 4 puertos. Convierte un solo puerto USB en 4 puertos USB 3.0, ideales para conectar memorias USB, discos duros, teclado, mouse, impresoras y otros periféricos al mismo tiempo, Velocidad de transferencia de hasta 5 Gbps, permitiendo transferir 1 GB en aproximadamente 3 segundos, Cable integrado de 1 metro, Conexión estable y segura, Protección inteligente",
    features: ["5GBPS ALTA VELOCIDAD", "CABLE DE 1M", "4X USB 3.0", "INDICADOR LED"],
  },
  {
    id: "hub-usb-3-0-4-puertos-ugreen",
    name: "HUB USB 3.0 4 PUERTOS UGREEN",
    sku: "20291",
    cat: "redes", brand: "ugreen",
    price: 115, oldPrice: null, rating: 4.7, reviews: 0, badge: "Nuevo",
    img: "img/productos/ugreen-adaptador.png",
    gallery: ["img/productos/ugreen-adaptador.png"],
    desc: "expande la conectividad de tu computadora de forma rápida y segura con el Hub USB 3.0 UGREEN de 4 puertos. Convierte un solo puerto USB en 4 puertos USB 3.0, ideales para conectar memorias USB, discos duros, teclado, mouse, impresoras y otros periféricos al mismo tiempo, Velocidad de transferencia de hasta 5 Gbps, permitiendo transferir 1 GB en aproximadamente 3 segundos, Cable integrado de 1 metro, Conexión estable y segura, Protección inteligente",
    features: ["5GBPS ALTA VELOCIDAD", "CABLE DE 1M", "4X USB 3.0", "INDICADOR LED"],
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
      img: "1497215728101-856f4ea42174",
      alt: "Escritorio de oficina ordenado con accesorios Lucmar",
      badgeN: "+2.500", badgeT: "clientes satisfechos",
    },
    {
      eyebrow: "Ergonomía Lucmar",
      title: "Trabaja *sin dolor*, todo el día",
      text: "Sillas, soportes y reposapiés que cuidan tu postura. Comodidad que se siente desde el primer minuto.",
      cta1: { text: "Ver ergonomía", href: "catalogo.html?cat=ergonomia" },
      cta2: { text: "Consultar", href: "whatsapp" },
      img: "1600585154340-be6161a56a0c",
      alt: "Silla ergonómica Lucmar en un espacio de trabajo luminoso",
      badgeN: "-25%", badgeT: "en línea ergonómica",
    },
    {
      eyebrow: "Tecnología de escritorio",
      title: "Conecta todo, *sin enredos*",
      text: "Hubs, estaciones de carga y accesorios que ordenan tus cables y potencian tu setup.",
      cta1: { text: "Ver tecnología", href: "catalogo.html?cat=tecnologia" },
      cta2: { text: "Destacados", href: "#destacados" },
      img: "1517336714731-489689fd1ca8",
      alt: "Accesorios tecnológicos Lucmar sobre un escritorio minimalista",
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
    offers:   { eyebrow: "Aprovecha",     title: "Ofertas de la semana",  sub: "" },
  },

  promo: {
    eyebrow: "Ofertas especiales",
    title: "Hasta *30% de descuento* en productos seleccionados",
    text: "Renueva tu espacio de trabajo con lo mejor de Lucmar. Consulta stock y precios al instante por WhatsApp.",
    cta1: { text: "Ver ofertas", href: "catalogo.html" },
    cta2: { text: "Escríbenos", href: "whatsapp" },
    img: "1524758631624-e2822e304c36",
    alt: "Selección de accesorios de oficina Lucmar en oferta",
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
