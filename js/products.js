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
  { slug: "iluminacion",    name: "Iluminación y herramientas", img: "1507003211169-0a1dd7228f2d",
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
  /* Sin "video": la tarjeta usa la imagen. Cuando tengas un clip de la marca,
     añade video: "video/loquesea.mp4" y se anima como las demás. */
  { slug: "seguridad",     name: "Seguridad y control de acceso",
    img: "1558002038-1055907df827" },
  { slug: "salud-bienestar", name: "Salud y bienestar",
    img: "1544367567-0f2fcb009e0b" },
];

/* ---- Marcas ----
   "logo" es opcional: déjalo vacío ("") y se muestra el nombre en tipografía.
   Cuando tengas los logos, guárdalos en img/marcas/ y pon la ruta, por ejemplo:
   logo: "img/marcas/ugreen.png"                                              */
const BRANDS = [
  { slug: "ugreen",   name: "UGREEN",   tagline: "Conectividad y carga",        logo: "img/marcas/ugreen-logo.webp" },
  { slug: "totto",    name: "TOTTO",    tagline: "Papelería y mochilas",        logo: "img/marcas/totto-logo.webp" },
  { slug: "trupper",  name: "TRUPPER",  tagline: "Herramienta y mobiliario",    logo: "img/marcas/trupper-logo.webp" },
  { slug: "shelly",   name: "SHELLY",   tagline: "Automatización del hogar",    logo: "img/marcas/shelly-logo.webp" },
  { slug: "jbl",      name: "JBL",      tagline: "Audio profesional",           logo: "img/marcas/jbl-logo.webp" },
  { slug: "amazon",   name: "AMAZON",   tagline: "Esenciales para tu setup",    logo: "img/marcas/amazon-logo.webp" },
  { slug: "boya",     name: "BOYA",     tagline: "Micrófonos y grabación",      logo: "img/marcas/boya-logo.webp" },
  { slug: "dt3",      name: "DT3",      tagline: "Sillas y ergonomía",          logo: "img/marcas/dt3-logo.webp" },
  { slug: "elsys",    name: "ELSYS",    tagline: "Electrónica y señal",         logo: "img/marcas/elsys-logo.webp" },
  { slug: "enersafe", name: "ENERSAFE", tagline: "UPS y protección eléctrica",  logo: "img/marcas/enersafe-logo.webp" },
  { slug: "forza",    name: "FORZA",    tagline: "Energía y respaldo",          logo: "img/marcas/forza-logo.webp" },
  { slug: "kingsons", name: "KINGSONS", tagline: "Mochilas y organización",     logo: "img/marcas/kingsons-logo.webp" },
  { slug: "maono",    name: "MAONO",    tagline: "Micrófonos y streaming",      logo: "img/marcas/maono-logo.webp" },
  { slug: "netac",    name: "NETAC",    tagline: "Almacenamiento y memorias",   logo: "img/marcas/netac-logo.webp" },
  { slug: "tapo",     name: "TAPO",     tagline: "Cámaras y hogar inteligente", logo: "img/marcas/tapo-logo.webp" },
  { slug: "targus",   name: "TARGUS",   tagline: "Accesorios para laptop",      logo: "img/marcas/targus-logo.webp" },
  { slug: "pretul",   name: "PRETUL",   tagline: "Práctico y resistente",       logo: "img/marcas/pretul-logo.webp" },
  { slug: "volteck",  name: "VOLTECK",  tagline: "Iluminación y eléctrico",     logo: "img/marcas/volteck-logo.webp" },
  { slug: "tp-link",  name: "TP-LINK",  tagline: "Redes y wifi",                logo: "img/marcas/tp-link-logo.webp" },
  { slug: "yaber",    name: "YABER",    tagline: "Proyectores",                 logo: "img/marcas/yaber-logo.webp" },
  { slug: "zkteco",   name: "ZKTECO",   tagline: "Seguridad y biometría",       logo: "img/marcas/zkteco-logo.webp" },
  /* "watermark" es opcional: pinta un segundo logo atenuado de fondo en el
     cuadro de la marca (p. ej. el sello de la distribuidora). */
  { slug: "tupperware", name: "TUPPERWARE", tagline: "Contenedores y almacenamiento", logo: "img/marcas/tupperware-logo.webp", watermark: "img/marcas/eiresa.webp" },
  { slug: "bem-estar-life", name: "BEM ESTAR LIFE", tagline: "Cuidado personal y bienestar", logo: "img/marcas/bem-estar-life-logo.webp" },

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
  
  /* ---- DT3 · Sillas y ergonomía ---- */
  {
    id: "silla-de-oficina-vita-dt3-gris-oscuro",
    alta: "2026-08-29",
    name: "SILLA DE OFICINA VITA DT3 GRIS OSCURO",
    sku: "13906-9",
    cat: "ergonomia", brand: "dt3",
    price: 1517, oldPrice: null, rating: 4.7, reviews: 0, badge: null,
    img: "img/productos/dt3-silla-de-oficina-negro.webp",
    gallery: ["img/productos/dt3-silla-de-oficina-negro.webp"],
    desc: "SILLA DE OFICINA VITA DT3 GRIS OSCURO*REVESTIMIENTO DE MALLA SPANDEX EN EL RESPALDAR*REVESTIMIENTO TEJIDO SOFTEX EN ASIENTO Y REPOSA BRAZOS*APOYO LUMBAR",
    features: [],
  },

    {
    id: "funda-universal-impermeable-ugreen",
    alta: "2026-09-08",
    name: "FUNDA UNIVERSAL IMPERMEABLE UGREEN",
    sku: "60959",
    cat: "tecnologia", brand: "ugreen",
    price: 47, oldPrice: null, rating: 4.7, reviews: 0, badge: null,
    img: "img/productos/60959-image-1-1712094346911.webp",
    gallery: ["img/productos/60959-image-1-1712094346911.webp"],
    desc: "FUNDA UNIVERSAL IMPERMEABLE UGREEN*PROTECCION IPX8*COMPATIBLE CON CUALQUIER CELULAR*PERMITE TOMAR FOTOGRAFIAS BAJO EL AGUA*RESISTE 30M BAJO EL AGUA",
    features: ["Funda universal impermeable de Ugreen con certificado de impermeabilidad IPX8 . Protegerá su teléfono contra el agua, la suciedad y los daños. El juego incluye un cordón que puedes colgar alrededor de tu cuello o muñeca.", "Una funda impermeable especial es un dispositivo necesario para las personas a las que les gusta pasar tiempo activamente, especialmente en el agua. Evita que la suciedad y el agua inunden el teléfono. Es fácil de usar y le permite aprovechar al máximo la pantalla táctil de su teléfono inteligente. Incluso puedes tomar fotografías bajo el agua , gracias a la ventana trasera transparente de la cámara.", "Especificación:", "Producto original Ugreen.", "Adecuado para teléfonos con dimensiones de hasta: 16 cm * 10 cm .", "Certificado IPX8 : permite la inmersión hasta 30 m , resistencia al polvo, el polvo y la suciedad.", "Frontal transparente para el manejo de la pantalla táctil.", "Le permite tomar fotografías y videos bajo el agua.", "Cierre seguro.", "Perfecto para la playa, lago, etc."],
  },
  {
    id: "adaptador-usb-3-1-tipo-c-a-usb-tipo-a3-0",
    alta: "2026-09-08",
    name: "ADAPTADOR USB 3,1 TIPO-C A USB TIPO A3,0",
    sku: "30155",
    cat: "redes", brand: "ugreen",
    price: 46, oldPrice: null, rating: 4.7, reviews: 0, badge: null,
    img: "img/productos/30155-image-0-1725999209362.webp",
    gallery: ["img/productos/30155-image-0-1725999209362.webp"],
    desc: "ADAPTADOR USB 3,1 TIPO-C A USB TIPO A3,0*SUPER SPEED*COMPATIBLE CON iPAD/iPHONE*BLANCO",
    features: [],
  },
  {
    id: "adaptador-hdmi-ugreen-hembra-a-hembra",
    alta: "2026-09-08",
    name: "ADAPTADOR HDMI UGREEN HEMBRA a HEMBRA",
    sku: "20107",
    cat: "redes", brand: "ugreen",
    price: 40, oldPrice: null, rating: 4.7, reviews: 0, badge: null,
    img: "img/productos/20107-image-1-1712148538850.webp",
    gallery: ["img/productos/20107-image-1-1712148538850.webp"],
    desc: "Acoplador de extensión HDMI 4K hembra a hembra: El adaptador HDMI hembra a hembra de alta velocidad de UGREEN puede convertir una interfaz HDMI macho en una interfaz HDMI hembra y extender sus dispositivos HDMI conectando dos cables HDMI cortos juntos. Los conectores chapados en oro que resisten la corrosión y al mismo tiempo ofrecen una transferencia de señal óptima.\nSincronización de audio y vídeo: el adaptador HDMI admite sincronización de audio y vídeo, sin necesidad de altavoces externos, es fácil disfrutar de un festín audiovisual.",
    features: [],
  },
  {
    id: "mini-cargador-ugreen-25w-gan-fast",
    alta: "2026-09-08",
    name: "MINI CARGADOR UGREEN 25W GaN FAST",
    sku: "75957",
    cat: "energia", brand: "ugreen",
    price: 180, oldPrice: null, rating: 4.7, reviews: 0, badge: null,
    stock: 1,
    img: "img/productos/75957_368848.webp",
    gallery: ["img/productos/75957_368848.webp"],
    desc: "MINI CARGADOR UGREEN 25W GaN FAST*1 SALIDA USB-C 5.0V=3.0A / 9.0V=2.77A / 12.0V=2.08A / 5.0-11.0V=2.25A",
    features: ["¡Lleva tu energía al siguiente nivel con el Cargador Rápido GaN de 25W!", "¿Cansado de esperar horas para que tu teléfono vuelva a la vida? Presentamos la solución de carga definitiva en un formato ultra compacto. Este cargador combina una potencia excepcional con tecnología de vanguardia para mantener todos tus dispositivos listos para la acción.", "Características Destacadas", "Potencia de Carga de 25W: Experimenta una carga veloz y eficiente con una potencia de salida total de hasta 25.0W, ideal para optimizar tu tiempo.", "Tecnología GaN de Última Generación: Gracias al Nitruro de Galio (GaN), obtienes un cargador más pequeño y eficiente, que reduce drásticamente la generación de calor en comparación con los cargadores convencionales.", "Salida USB-C Inteligente: Equipado con un puerto USB-C que ajusta automáticamente el voltaje y la corriente idóneos para proteger la salud de tu batería.", "Compañero de Viaje Universal: Gracias a su rango de entrada de 100-240V~, es el aliado perfecto para llevar en tu maleta a cualquier parte del mundo.", "Especificaciones Técnicas", "Componente\tDetalle Técnico", "Tipo de Producto\tCargador Rápido GaN de 1 Puerto USB-C", "Entrada (Input)\t100-240V~ 50/60Hz 600mA Máx", "Salida USB-C (Output)\t5.0V=3.0A / 9.0V=2.77A / 12.0V=2.08A / 5.0-11.0V=2.25A", "Potencia Total de Salida\t25.0W Máx", "¡No dejes que una batería baja detenga tu ritmo! Simplifica tu día a día con un cargador potente, seguro, inteligente y diseñado para el futuro de la tecnología móvil."],
  },
  {
    id: "localizador-inteligente-ugreen-finetrack",
    alta: "2026-09-08",
    name: "LOCALIZADOR INTELIGENTE UGREEN FINETRACK",
    sku: "45297",
    cat: "tecnologia", brand: "ugreen",
    price: 165, oldPrice: null, rating: 4.7, reviews: 0, badge: null,
    stock: 4,
    img: "img/productos/45297-image-0-1768401834693.webp",
    gallery: ["img/productos/45297-image-0-1768401834693.webp"],
    desc: "LOCALIZADOR INTELIGENTE UGREEN FINETRACK*BLUETOOTH Y RASTREADOR COMPATIBLE CON iOS*APPLE FIND MY*24MESES DE BATERIA*NO UTILIZA GPS PROPIO*RESISTENTE AL AGUA",
    features: ["UGREEN Smart Finder 45297 – Encuentra todo, en todo momento", "Localización inteligente con Apple Find My", "Certificado oficialmente por Apple, se conecta directamente con la app Buscar de iOS sin necesidad de instalar nada. Seguridad total con cifrado avanzado para proteger tu privacidad.", "Privacidad garantizada", "Tus datos están protegidos: ni Apple ni UGREEN pueden ver la ubicación de tus objetos. Solo tú tienes acceso.", "Batería de ultra larga duración", "Hasta 24 meses de autonomía con pila CR2032 reemplazable. Diseño seguro con certificación UL4200A para evitar aperturas accidentales por niños.", "Alarma potente de 80 dB", "Hazlo sonar desde tu iPhone o con Siri para localizar tus llaves, mochila, billetera u otros objetos en segundos.", "Búsqueda a larga distancia", "Cuando sale del rango Bluetooth, el rastreo continúa a través de la red Apple Find My, utilizando millones de dispositivos iOS en todo el mundo. (No utiliza GPS propio).", "Recordatorio de abandono", "Recibe una alerta automática cuando te alejas de tus pertenencias, evitando pérdidas antes de que ocurran.", "Resistente al agua e intemperie", "Diseñado para acompañarte en cualquier entorno, con estructura duradera y confiable.", "Compacto y liviano", "Con solo 36 × 36 × 7 mm y 70 g, es discreto, cómodo y fácil de llevar en cualquier objeto.", "Ideal para:", "Llaves", "Mochilas", "Carteras", "Equipaje", "Mascotas", "Equipos personales", "Especificaciones rápidas", "Conectividad: Bluetooth", "App: Apple Buscar (Find My)", "Batería: hasta 24 meses (CR2032)", "Alarma: 80 dB", "Peso: 70 g", "Dimensiones: 36 × 36 × 7 mm", "Material: Plástico resistente", "Beneficio principal", "Nunca vuelvas a perder lo que más importa.", "El UGREEN Smart Finder 45297 te brinda tranquilidad, seguridad y control total sobre tus pertenencias, estés donde estés."],
  },
  
 

  /* ---- AMAZON · Alexa y hogar inteligente ---- */
   {
    id: "amazon-alexa-echo-spot-2024-negro",
    alta: "2026-08-29",
    name: "AMAZON ALEXA ECHO SPOT 2024 NEGRO",
    sku: "BV84J9-N",
    cat: "tecnologia", brand: "amazon",
    price: 2140, oldPrice: null, rating: 4.7, reviews: 0, badge: null,
    img: "img/productos/BV84J9N.webp",
    gallery: ["img/productos/BV84J9N.webp"],
    desc: "AMAZON ALEXA ECHO SPOT 2024 NEGRO*SONIDO VIBRANTE CON PARLANTE DE PROYECCION FRONTAL DE 1,73\"*PANTALLA 2,83\" 320X240*MANOS LIBRES*DETECCION DE MOV*3 BOTONES",
    features: ["-Amazon Echo Spot (BV84J9) – Tu despertador inteligente con personalidad", "-Convierte cada mañana en algo memorable. El nuevo Echo Spot sintetiza la función de reloj despertador con la inteligencia y comodidad de Alexa en un diseño compacto y elegante.", "Sonido envolvente de gran calidad: Sorprende con voces claras, bajos profundos y potencia para llenar tu habitación con música, podcasts o audiolibros.", "Despertar inteligente y personalizado: Programa tu rutina matutina— despiértate con tu playlist favorita o sonidos suaves, revisa el clima o tus recordatorios, todo al ritmo que elijas.", "-Control por voz integrado: Ajusta luces, termostato, reproduce música, contesta preguntas o configura alarmas sin tocar nada— Alexa lo hace por ti.", "-Privacidad consciente: Micrófono desactivable y controles en app para blindar tus datos—es tu voz, solo tu voz.", "-Compromiso con el planeta: Construido con hasta 36 % de materiales reciclados, pensando en tu hogar y en el planeta que compartimos."],
  },

  
  {
    id: "regulador-automatico-voltaje-1000va-500w",
    alta: "2026-08-08",
    name: "Regulador automático voltaje 1000VA/500W",
    sku: "FVR-1012",
    cat: "energia", brand: "forza",
    price: 280, oldPrice: null, rating: 4.8, reviews: 0, badge: null,
    img: "img/productos/fvr1012-forza.webp",
    gallery: ["img/productos/fvr1012-forza.webp"],
    // youtube: "ID_DEL_VIDEO_DE_YOUTUBE", // opcional: agrega este campo para mostrar un video del producto en la ficha
    desc: "El Regulador Automático de Voltaje de Forza (o acondicionador de línea) es la solución fiable que ofrece la protección adecuada para sus equipos y electrónicos delicados contra los efectos nocivos de irregularidades en el suministro eléctrico",
    features: ["Capacidad: 1000VA/500W", "Voltage: 220V", "VA de salida: 1000 VA", "Receptáculo: 4 x NEMA 5-15R"],
  },
  

  /* ---- JBL · Audio profesional ---- */
  {
    id: "jbl-grip-ai-sound-boost-negro",
    alta: "2026-08-08",
    name: "JBL GRIP AI SOUND BOOST NEGRO",
    sku: "JBLGRIPBLKAM",
    cat: "audio-video", brand: "jbl",
    price: 1637, oldPrice: null, rating: 4.3, reviews: 0, badge: null,
    img: "img/productos/jbl-gripblkam.webp",
    gallery: ["img/productos/jbl-gripblkam.webp"],
    desc: "JBL GRIP AI SOUND BOOST NEGRO*SONIDO JBL ORIGINAL PRO+AI SOUND BOOST*ILUMINACION DINAMICA TRASERA*14 DE BATERIA*RESISTENCIA IP68*COMPACTO Y ERGONOMICO*16W",
    features: ["JBL Original Pro Sound + AI Sound Boost", "Graves potentes y agudos claros optimizados automáticamente para un sonido más envolvente.", "Iluminación ambiental dinámica", "Luz trasera que se adapta al ambiente para crear la atmósfera perfecta.", "Hasta 14 horas de reproducción", "Disfruta tu música todo el día con Playtime Boost.", "Resistencia total IP68", "Impermeable", "A prueba de polvo", "Resistente a caídas", "Diseño compacto y ergonómico", "Fácil de sujetar y llevar a cualquier lugar.", "Rendimiento de audio", "Potencia: 16W", "Respuesta de frecuencia: 70 Hz – 20 kHz", "Relación señal/ruido: > 80 dB"],
  },
  {
    id: "jbl-grip-ai-sound-boost-azul",
    alta: "2026-08-08",
    name: "JBL GRIP AI SOUND BOOST AZUL",
    sku: "JBLGRIPBLUAM",
    cat: "audio-video", brand: "jbl",
    price: 1635, oldPrice: null, rating: 4.3, reviews: 0, badge: null,
    img: "img/productos/jblgripbluam-jbl.webp",
    gallery: ["img/productos/jblgripbluam-jbl.webp"],
    desc: "JBL GRIP AI SOUND BOOST AZUL*SONIDO JBL ORIGINAL PRO+AI SOUND BOOST*ILUMINACION DINAMICA TRASERA*14 DE BATERIA*RESISTENCIA IP68*COMPACTO Y ERGONOMICO*16W",
    features: ["JBL Original Pro Sound + AI Sound Boost", "Graves potentes y agudos claros optimizados automáticamente para un sonido más envolvente.", "Iluminación ambiental dinámica", "Luz trasera que se adapta al ambiente para crear la atmósfera perfecta.", "Hasta 14 horas de reproducción", "Disfruta tu música todo el día con Playtime Boost.", "Resistencia total IP68", "Impermeable", "A prueba de polvo", "Resistente a caídas", "Diseño compacto y ergonómico", "Fácil de sujetar y llevar a cualquier lugar.", "Rendimiento de audio", "Potencia: 16W", "Respuesta de frecuencia: 70 Hz – 20 kHz", "Relación señal/ruido: > 80 dB", "Conectividad avanzada", "Bluetooth 5.4", "Conexión más rápida, estable y eficiente.", "Auracast™", "Conecta múltiples altavoces para una experiencia de sonido envolvente.", "App compatible (iOS & Android)", "Controla funciones y personaliza tu experiencia.", "Batería y carga", "Tipo: Li-ion 10.01 Wh", "Tiempo de carga: 3 horas", "Autonomía: hasta 14 horas", "Diseño y dimensiones", "Tamaño: 6.4 × 15.3 × 6.5 cm", "Peso: 0.385 kg", "Contenido de la caja", "1 × JBL Grip", "1 × Guía rápida", "1 × Tarjeta de garantía y seguridad", "Conectividad avanzada", "Bluetooth 5.4", "Conexión más rápida, estable y eficiente.", "Auracast™", "Conecta múltiples altavoces para una experiencia de sonido envolvente.", "App compatible (iOS & Android)", "Controla funciones y personaliza tu experiencia.", "Batería y carga", "Tipo: Li-ion 10.01 Wh", "Tiempo de carga: 3 horas", "Autonomía: hasta 14 horas", "Diseño y dimensiones", "Tamaño: 6.4 × 15.3 × 6.5 cm", "Peso: 0.385 kg", "Contenido de la caja", "1 × JBL Grip", "1 × Guía rápida", "1 × Tarjeta de garantía y seguridad"],
  },

  // ---- BOYA · Micrófonos y grabación ---- (marca comentada / próximamente)

  {
    id: "mini-microfono-inalambrico-usb-c",
    alta: "2026-08-29",
    name: "MINI MICROFONO INALAMBRICO USB-C",
    sku: "BOYA mini 2-02",
    cat: "audio-video", brand: "boya",
    price: 950, oldPrice: null, rating: 4.7, reviews: 0, badge: null,
    img: "img/productos/BOYAMINI202-image.webp",
    gallery: ["img/productos/BOYAMINI202-image.webp"],
    desc: "MINI MICROFONO INALAMBRICO DUAL*USB-C*PESO 5g ULTRA LIGERO*NC CON IA*AUDIO PROFESIONAL*ALTA TOLERANCIA SONORA 120dB SPL*SAFE TRACK*ALCANCE 100M*6H BATERIA",
    features: ["🌟 Ventajas que marcan la diferencia", "🎯 Ultraligero y discreto", "Solo 5 g de peso y tamaño tipo pulgar para grabaciones cómodas y casi invisibles.", "🧠 Cancelación de ruido con IA", "Chip neuronal profundo que reduce hasta –40 dB de ruido, manteniendo tu voz clara en cualquier entorno.", "🎧 Calidad de audio profesional", "Grabación en 48 kHz / 24-bit con 80 dB SNR para un sonido rico, limpio y natural.", "🔊 Alta tolerancia sonora", "Soporta hasta 120 dB SPL, ideal para voces fuertes sin distorsión.", "🛡️ Safety Track integrado", "Protección inteligente con pista de seguridad –12 dB para evitar saturaciones.", "📡 Transmisión estable de largo alcance", "Hasta 100 metros sin obstáculos para grabar con libertad.", "🔋 Autonomía extendida", "• ⏱️ 6 horas por transmisor", "• ⚡ Hasta 30 horas con el estuche de carga", "👀 Monitoreo en tiempo real", "Control total de tu audio mientras grabas."],
  },

  

  // ---- MAONO · Micrófonos y streaming ---- (marca comentada / próximamente)
  /* {
    id: "maono-microfono-usb",
    name: "Micrófono USB de condensador para streaming",
    cat: "audio-video", brand: "maono",
    price: 340, oldPrice: null, rating: 4.7, reviews: 0, badge: null,
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

  // BEM ESTAR LIFE  -----Cuidado personal y bienestar

   {
    id: "omega-3",
    alta: "2026-09-08",
    name: "OMEGA 3",
    cat: "salud-bienestar", brand: "bem-estar-life",
    price: 310, oldPrice: null, rating: 4.5, reviews: 0, badge: "Nuevo",
    img: "img/productos/br-11134207-7r98o-m5iqwso8yxjk68.webp",
    gallery: ["img/productos/br-11134207-7r98o-m5iqwso8yxjk68.webp"],
    desc: "Es una fuente de grasas poliinsaturadas con acción antiinflamatoria, que aporta 330 mg de EPA y 220mg de DHA por capsula, libre de metales pesados y totalmente purificada. La inclusión de estas fuentes de grasas se asocia con una reducción en la incidencia de enfermedades cardiovasculares, diabetes y esclerosis múltiple.",
    features: ["Reduce la incidencia de enfermedades cardiovasculares.", "Ayuda al desarrollo del cerebro y aprendizaje.", "Reduce los procesos inflamatorios.", "DHA, es un gran alimento para el cerebro.", "EPA, exhibe acción antiinflamatoria a través de la producción de prostaglandinas.", "Ayuda a controlar los niveles de azúcar en la sangre."],
  },
  {
    id: "resveratrol",
    alta: "2026-09-08",
    name: "RESVERATROL",
    cat: "salud-bienestar", brand: "bem-estar-life",
    price: 270, oldPrice: null, rating: 4.5, reviews: 0, badge: "Nuevo",
    img: "img/productos/D_Q_NP_2X_606945-MLB105976958737_012026-P.webp",
    gallery: ["img/productos/D_Q_NP_2X_606945-MLB105976958737_012026-P.webp"],
    desc: "Es un suplemento dietario que combina los poderosos beneficios del resveratrol, un antioxidante natural que se encuentra en las uvas, frutos rojos y varias otras plantas. Esta composición exclusiva ha sido cuidadosamente seleccionada para promover la longevidad y combatir el envejecimiento celular, protegiendo tus células del daño causado por los radicales libres.",
    features: ["Promueve la longevidad.", "Combate el envejecimiento celular.", "Mejora la salud cardiovascular.", "Apoya la función cognitiva.", "Reduce la inflamación.", "Fortalece el sistema inmunológico."],
  },
  {
    id: "cha-regu-life",
    alta: "2026-09-08",
    name: "CHA REGU LIFE",
    cat: "salud-bienestar", brand: "bem-estar-life",
    price: 170, oldPrice: null, rating: 4.5, reviews: 0, badge: "Nuevo",
    img: "img/productos/br-11134207-7qukw-lhnjuoolpvnb06.webp",
    gallery: ["img/productos/br-11134207-7qukw-lhnjuoolpvnb06.webp"],
    desc: "Chá Regu Life está compuesto por un mix de hierbas altamente eficiente para promover una acción Detox, acelerar el metabolismo, reducir la retención de líquidos y mejorar el funcionamiento del intestino. El chá regu life presenta también un efecto anti flamatorio, antioxidante, hipocolesterolemico beneficiando el sistema cardiovascular, reduciendo la masa grasa, la grasa visceral y subcutánea.",
    features: ["Ayuda en el tratamiento de problemas gastrointestinales y trastornos digestivos como úlceras y reflujo.", "Tiene acción antiinflamatoria.", "Tiene un efecto digestivo.", "Tiene efecto diurético.", "Ayuda a controlar la Diabetes.", "Ayuda con el control de peso."],
  },

  {
    id: "cha-regu-life-30-sobres",
    alta: "2026-09-08",
    name: "CHA REGU LIFE 30 SOBRES",
    cat: "salud-bienestar", brand: "bem-estar-life",
    price: 180, oldPrice: null, rating: 4.5, reviews: 0, badge: "Nuevo",
    img: "img/productos/D_NQ_NP_785914-MLU79121443410_092024-O.webp",
    gallery: ["img/productos/D_NQ_NP_785914-MLU79121443410_092024-O.webp"],
    desc: "Cha Regu Fine Detox es la clave para una vida mas sana y equilibrada. con una potente combinación de 6 ingredientes naturales, contribuye a una acción desintoxicante completa acelerando el metabolismo, ayudando con la retención de líquidos, mejorando la función intestinal y fortaleciendo el sistema inmunitario.",
    features: ["Desintoxicación y revitalización del cuerpo.", "Acelera el metabolismo.", "para la perdida de peso.", "Ayuda a la retención de", "Ayuda a la retención de líquidos.", "Mejora el tránsito intestinal.", "Adelgaza de manera saludable.", "Fortalece el sistema inmunológico.", "Acción antiflamatoria.", "Aumento de energía y", "Aumento de energía y mejora el humor."],
  },
  {
    id: "cha-regu-life-10-sobres-copia",
    alta: "2026-09-08",
    name: "CHA REGU LIFE 10 SOBRES (copia)",
    cat: "salud-bienestar", brand: "bem-estar-life",
    price: 70, oldPrice: null, rating: 4.5, reviews: 0, badge: "Nuevo",
    img: "img/productos/D_NQ_NP_785914-MLU79121443410_092024-O.webp",
    gallery: ["img/productos/D_NQ_NP_785914-MLU79121443410_092024-O.webp"],
    desc: "Cha Regu Fine Detox es la clave para una vida mas sana y equilibrada. con una potente combinación de 6 ingredientes naturales, contribuye a una acción desintoxicante completa acelerando el metabolismo, ayudando con la retención de líquidos, mejorando la función intestinal y fortaleciendo el sistema inmunitario.",
    features: ["Desintoxicación y revitalización del cuerpo.", "Acelera el metabolismo.", "para la perdida de peso.", "Ayuda a la retención de", "Ayuda a la retención de líquidos.", "Mejora el tránsito intestinal.", "Adelgaza de manera saludable.", "Fortalece el sistema inmunológico.", "Acción antiflamatoria.", "Aumento de energía y", "Aumento de energía y mejora el humor."],
  },

  {
    id: "colageno-verisol",
    alta: "2026-09-08",
    name: "COLAGENO VERISOL",
    cat: "salud-bienestar", brand: "bem-estar-life",
    price: 350, oldPrice: null, rating: 4.5, reviews: 0, badge: "Nuevo",
    img: "img/productos/D_NQ_NP_784597-MLB92290878732_092025-O.webp",
    gallery: ["img/productos/D_NQ_NP_784597-MLB92290878732_092025-O.webp"],
    desc: "Contiene péptidos de colágeno bioactivos, obtenidos mediante una degradación enzimática patentada, que produce péptidos específicos que actúan en las capas más profundas\nde la piel, restaurando el metabolismo de las células dérmicas con la administración de una\npequeña dosis diaria. El colágeno hidrolizado mediante procesos\nindustriales convencionales no es capaz de generar enlaces peptídicos\nespecíficos para actuar directamente sobre las células dérmicas, mientras\nque Verisol llega a las células de las capas más profundas de la piel,\nactuando donde los cosméticos no pueden llegar, ofreciendo una acción\nantienvejecimiento.",
    features: ["Aporta 9g de colágeno puro.", "compuesto por 2,5g de Verisol.", "6,5g de colágeno.", "Actúa sobre las capas más profundas de la piel, desde dentro hacia fuera,"],
  },

   {
    id: "colageno-tipo-ii-msm",
    alta: "2026-09-08",
    name: "COLAGENO TIPO II + MSM",
    cat: "salud-bienestar", brand: "bem-estar-life",
    price: 210, oldPrice: null, rating: 4.5, reviews: 0, badge: "Nuevo",
    img: "img/productos/46b2788bf855ec59e1b652b6df2540bb.webp",
    gallery: ["img/productos/46b2788bf855ec59e1b652b6df2540bb.webp"],
    desc: "Es un complemento alimenticio en cápsulas desarrolladas con alta\ntecnología capaz de prevenir y tratar enfermedades osteoarticulares que\nafectan las  articulaciones.\nEl uso continuo de colágeno tipo II reduce el dolor y aumenta la flexibilidad articular.\nEl colágeno tipo II es la principal proteína estructural del cartílago, responsable de su resistencia,\nresistencia a la tracción y firmeza. \nEs capaz de mejorar la amplitud de movimiento y la comodidad de las articulaciones.",
    features: ["Favorece el rejuvenecimiento de la piel.", "Combate la celulitis.", "Estimula la producción natural de colágeno.", "Reduce arrugas y líneas de expresión."],
  },

  {
    id: "hig-clare",
    alta: "2026-09-08",
    name: "HIG CLARE",
    cat: "salud-bienestar", brand: "bem-estar-life",
    price: 200, oldPrice: null, rating: 4.5, reviews: 0, badge: "Nuevo",
    img: "img/productos/D_NQ_NP_956782-MLB71371868585_082023-O-higclare.webp",
    gallery: ["img/productos/D_NQ_NP_956782-MLB71371868585_082023-O-higclare.webp"],
    desc: "Es una crema para rostro y cuerpo que tiene una triple acción aclarante contra las\nimperfecciones y el melasma.\nContiene ingredientes activos como jengibre chino, aceite de rosa mosqueta y glicina.\nDermatológicamente probado, presenta resultados comprobados en tan sólo 15 días de uso. \nEl producto fue desarrollado para su aplicación en zonas sensibles como las axilas y las ingles. Su\ntextura cremosa no grasa, hidrata y se absorbe rápidamente.",
    features: ["Piel más luminosa en 30 días.", "Unifica el tono de la piel en 15 días.", "Actúa en sinergia con inhibidores de la tirosinasa y promotores de la renovación celular.", "Disminuye la producción de melatonina.", "Hidratación intensa."],
  },

  {
    id: "queen-care",
    alta: "2026-09-08",
    name: "QUEEN CARE",
    cat: "salud-bienestar", brand: "bem-estar-life",
    price: 220, oldPrice: null, rating: 4.5, reviews: 0, badge: "Nuevo",
    img: "img/productos/images.webp",
    gallery: ["img/productos/images.webp"],
    desc: "Queen Care es un multivitamínico compuesto por vitamina C, hierro, vitamina E, zinc, vitaminas del grupo B, cobre, vitamina A, cromo, selenio y vitamina D. Todos estos nutrientes están perfectamente armonizados\nReduce el riesgo de caída del cabello, seborrea y caspa.\nAyuda a fortalecer las uñas, dejándolas intactas, firmes y resistentes.\nAyuda al crecimiento para promover el crecimiento y fortalecimiento del cabello y las uñas,\nreduciendo la fragilidad, la rotura y la saludable del cabello.\ndescamación de las uñas.",
    features: ["Reduce el riesgo de caída del cabello, seborrea y caspa.", "Ayuda a fortalecer las uñas, dejándolas intactas, firmes y resistentes.", "Ayuda al crecimiento saludable del cabello"],
  },

  {
    id: "tri-magnesio",
    alta: "2026-09-08",
    name: "TRI-MAGNESIO",
    cat: "salud-bienestar", brand: "bem-estar-life",
    price: 270, oldPrice: null, rating: 4.5, reviews: 0, badge: "Nuevo",
    img: "img/productos/260d966ecaba6fe6d104ac6719737f14.webp",
    gallery: ["img/productos/260d966ecaba6fe6d104ac6719737f14.webp"],
    desc: "Es un suplemento avanzado que combina tres formas de magnesio\n(bisglicinato, malato de dimagnesio y cloruro de magnesio), zinc, vitamina B1 y colágeno tipos 1, 2 y 3.\nEsta fórmula exclusiva fue desarrollada para mejorar la función muscular, promover la recuperación\ntres formas de magnesio (bisglicinato, malato de dimagnesio y cloruro de\nmagnesio), zinc, vitamina B1 y colágeno tipos 1, 2 y 3.\nEsta fórmula exclusiva fue desarrollada para mejorar\nla función muscular, promover la recuperación promover la recuperación muscular después del ejercicio y apoyar la salud y elasticidad de las articulaciones, apoyar la salud y elasticidad de las articulaciones de los tejidos.",
    features: ["Mejora la función muscular.", "Aumenta la producción de energía celular.", "Mantiene el equilibrio electrolítico.", "Fortalece las articulaciones.", "Mejora la función muscular."],
  },

  // ---- YABER · Proyectores ---- (marca comentada / próximamente)

   {
    id: "proyector-yaber-l2s-700-ansi-lumenes",
    alta: "2026-09-08",
    name: "PROYECTOR YABER L2S 700 ANSI LUMENES",
    sku: "CCK02252",
    cat: "audio-video", brand: "yaber",
    price: 2220, oldPrice: null, rating: 4.5, reviews: 0, badge: null,
    img: "img/productos/CCK02252_524146.webp",
    gallery: ["img/productos/CCK02252_524146.webp"],
    desc: "PROYECTOR YABER L2S 700 ANSI LUMENES*RESOLUCION NATIVA 1080P*PROYECCION 40\"-150\"*SONIDO ENVOLVENTE JBL 8W DOLBY AUDIO*WIFI 6/ BT 5.1*USA",
    features: ["Resolución Full HD 1080p y brillo de 700 lúmenes ANSI, ideal para uso doméstico en ambientes controlados.", "Altavoces JBL (2 x 8W) con Dolby Audio para sonido envolvente sin equipo adicional.", "Wi-Fi 6 + Bluetooth 5.1 para una conexión rápida y estable.", "Autoenfoque y corrección trapezoidal vertical automática para imagen clara sin ajustes manuales.", "Puertos disponibles: HDMI, USB y salida de audio de 3.5 mm.", "Diseño compacto y portátil (22.7 x 16 x 18.4 cm, 2.3 kg).", "Funcionamiento silencioso (~35 dB) para una experiencia sin distracciones.", "El Yaber L2S es una excelente opción para quienes buscan un proyector versátil, con buena calidad de imagen, sonido potente y conectividad moderna en un formato compacto."],
  },

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


  // kingson  -----Mochilas y organización
  {
    id: "mochila-ultraligera-16l-de-15-6",
    alta: "2026-08-29",
    name: "MOCHILA ULTRALIGERA 16L DE 15,6\"",
    sku: "KS3207-DGREY",
    cat: "escritorio", brand: "kingsons",
    price: 415, oldPrice: null, rating: 4.7, reviews: 0, badge: null,
    img: "img/productos/KS3207-DGREY_104068.webp",
    gallery: ["img/productos/KS3207-DGREY_104068.webp"],
    desc: "MOCHILA ULTRALIGERA 16L DE 15,6\"*PESO 0,66Kg*APERTURA CLAMSHELL 180°*CREMALLERA OCULTA*CORREA PARA MALETA*LAPTOPS 15,6\"/TABLETS 11\"RESISTENTE AL AGUA Y ARAÑASOS",
    features: ["CARACTERÍSTICAS DESTACADAS", "Diseño Ultra Ligero (Ultra Lightweight Design): Máxima portabilidad sin esfuerzo. Con un peso de solo 0.66 kg, reduce la fatiga en los hombros, haciéndola ideal para el uso diario intensivo o aventuras de viaje.", "Apertura Tipo Clamshell de 180°: Se abre completamente plana como una maleta. Facilita un empaque rápido, eficiente y brinda un acceso inmediato a todas tus pertenencias sin necesidad de rebuscar en el fondo.", "Seguridad Antirrobo con Cremallera Oculta: Viaja con total tranquilidad en el transporte público. El sistema de cremalleras ocultas previene aperturas no autorizadas, manteniendo tus objetos de valor 100% seguros.", "Compartimento Tecnológico Dual Dedicado: Espacio óptimo y ultra-protegido que aloja simultáneamente una computadora portátil de hasta 15.6 pulgadas y una tableta de hasta 11 pulgadas.", "Conexión y Energía en Movimiento: Incorpora un puerto de carga USB externo para conectar tus dispositivos fácilmente sobre la marcha, manteniéndote siempre conectado (requiere powerbank interna).", "Material de Alta Durabilidad y Resistencia: Confeccionada en poliéster premium de alta densidad, resistente a los arañazos y repelente al agua, garantizando una protección prolongada contra el desgaste y el clima.", "Ergonomía Superior y Confort Premium: Panel trasero ergonómico con acolchado transpirable que brinda soporte estructural, comodidad absoluta y ventilación continua para evitar la sudoración durante todo el día.", "Correa para Equipaje (Luggage Strap): Se acopla de manera cómoda y firme a las asas del equipaje de mano rodante, permitiendo un tránsito fluido y sin esfuerzo por aeropuertos y estaciones.", "ESPECIFICACIONES TÉCNICAS", "Modelo: KS3207", "Dimensiones: 29 x 15 x 45 cm", "Capacidad Volumen: 16 Litros", "Compatibilidad Laptop: Hasta 15.6 pulgadas (más compartimento para tablet de 11\")", "Material Exterior: Poliéster premium resistente al agua y rayaduras", "Peso Neto: 0.66 kg (Ultra liviana)", "Organización Interna: Múltiples compartimentos organizadores internos", "IDEAL PARA:", "Profesionales y Ejecutivos Urbanos: Perfecta para el traslado diario a la oficina manteniendo un perfil corporativo, estético y moderno.", "Estudiantes Universitarios: Espacio y protección ideal para transportar laptops, tablets, apuntes y gadgets de forma segura.", "Viajeros Frecuentes y Nómadas Digitales: Gracias a su correa de equipaje, tamaño compacto de cabina y apertura plana, agiliza los controles de seguridad en aeropuertos."],
  },
  
  
  
  // ---- TP-LINK · Redes y wifi ---- (marca comentada / próximamente)

  {
    id: "adaptador-bluetooth-5-0-usb",
    alta: "2026-08-29",
    name: "ADAPTADOR BLUETOOTH 5,0 USB",
    sku: "UB500",
    cat: "redes", brand: "tp-link",
    price: 160, oldPrice: null, rating: 4.7, reviews: 0, badge: null,
    img: "img/productos/UB500-image-0.webp",
    gallery: ["img/productos/UB500-image-0.webp"],
    desc: "ADAPTADOR NANO USB BLUETOOTH 5.0*SOPORTA WINDONWS 10/8.1/8/7/XP*PlUG AND PLAY PARA WIN 8-WIN 8.1*PARA WIN11*",
    features: ["Nano Adaptador USB Bluetooth 5.4", "Bluetooth 5.4 — Seguridad y fiabilidad mejoradas respecto a la generación anterior de Bluetooth.", "Conectividad Inalámbrica – Ofrece una comunicación estable y cómoda entre tus dispositivos Bluetooth y tu PC o portátil.", "Tamaño Nano – Ultrapequeño para una portabilidad conveniente con un rendimiento fiable y de alta calidad.", "Sistemas Operativos Compatibles – Windows 11/10/8.1/7."],
  },
  


  // ---- ELSYS · Electrónica y señal ---- (marca comentada / próximamente)

  {
    id: "amplimax-modem-4g-eprl15-receptor-ampl",
    alta: "2026-08-29",
    name: "AMPLIMAX MODEM 4G EPRL15 RECEPTOR/AMPL",
    cat: "redes", brand: "elsys",
    price: 2336, oldPrice: null, rating: 4.7, reviews: 0, badge: null,
    img: "img/productos/AMPLIMAXMODEM4G.webp",
    gallery: ["img/productos/AMPLIMAXMODEM4G.webp"],
    desc: "AMPLIMAX MODEM 4G EPRL15*RECEPTOR/AMPLIFICADOR DE SEÑAL 6 VECES MAS*RESISTENTE AL AGUA/CALOR/POLVO* 1 SLOT PARA SIM*BANDAS 700/850/900/1700/1800/1900/2100/ 2600",
    features: [],
  },

 

  // ---- NETCAD · Almacenamiento y memorias ----
  {
    id: "n535s-2-5-sataiii-3d-nand-ssd-480gb",
    alta: "2026-08-29",
    name: "N535S 2.5 SATAIII 3D NAND SSD 480GB",
    sku: "NT01N535S-480G-S3X",
    cat: "almacenamiento", brand: "netac",
    price: 2160, oldPrice: null, rating: 4.6, reviews: 0, badge: null,
    img: "img/productos/NT01N535S481714080308288.webp",
    gallery: ["img/productos/NT01N535S481714080308288.webp"],
    desc: "Netac N535S 2.5 SATAIII 3D NAND SSD 480GB, R/W up to 540/490MB/s",
    features: ["Brand\tNetac", "Model\tN535S", "Transmission Protocol\tSATA 6Gb/s", "Capacity\t120GB/240GB/480GB/960GB", "Weight\tAbout 54g", "Dimension\t100mm*70mm*7mm", "Flash\t3D TLC", "S.M.A.R.T\tSupport", "TRIM\tSupport", "Voltage\t5V", "Storage Temperature\t-40°C〜85°C", "Operation Temperature\t0〜70°C", "Environmental humidity (no condensation)\t5%-95%"],
  },

  //MAONO  ----Micrófonos y streaming
  {
    id: "microfono-inalambrico-de-escritorio-rgb",
    alta: "2026-08-29",
    name: "MICROFONO INALAMBRICO DE ESCRITORIO RGB",
    sku: "DM40 PRO",
    cat: "audio-video", brand: "maono",
    price: 996, oldPrice: null, rating: 4.7, reviews: 0, badge: null,
    img: "img/productos/DM40PRO-image-0-1757540564977.webp",
    gallery: ["img/productos/DM40PRO-image-0-1757540564977.webp"],
    desc: "MICROFONO INALAMBRICO DE ESCRITORIO RGB*CAMBIO DE VOZ CON IA*BATERIA DE LARGA DURACION 75HR*CANCELACION DE 1 SOLO TOQUE*MAONO LINK*PLUG AND PLAY",
    features: ["Conectividad Inalámbrica Avanzada: Disfruta de una experiencia sin cables con una conexión estable y de baja latencia, perfecta para transmisiones en vivo y grabaciones.", "Calidad de Sonido Profesional: Cápsula de condensador de 16 mm con una frecuencia de muestreo de 48 kHz / 24 bit, capturando detalles nítidos y naturales en tu voz.", "Cancelación de Ruido Inteligente: Cuatro niveles de cancelación de ruido (bajo, medio, alto y personalizado) para asegurar una grabación clara en cualquier entorno.", "Efectos de Voz con IA: Transforma tu voz con 10 modos de cambio de voz impulsados por inteligencia artificial, ideales para agregar creatividad a tus transmisiones.", "Iluminación RGB Personalizable: Más de 16 millones de colores para personalizar la estética de tu espacio de trabajo o estudio.", "Controles Intuitivos: Ajustes de ganancia, volumen, silencio con un solo toque y monitoreo en tiempo real para un control total durante la grabación.", "Conectividad Universal: Compatible con USB y USB-C, funcionando con PC, Mac, smartphones y consolas de juegos como PS4 y PS5.", "Batería de Larga Duración: Hasta 75 horas de uso continuo sin RGB o 40 horas con iluminación activa, asegurando sesiones largas sin interrupciones.", "Contenido del Paquete", "Micrófono MAONO DM40 Pro con soporte de escritorio", "Montura antichoque y filtro pop", "Conector USB-C y adaptador USB-A", "Cable 2 en 1 para carga y audio (3.3 ft)", "Manual del usuario", "Con el MAONO DM40 Pro, obtienes un micrófono que combina tecnología avanzada, diseño elegante y facilidad de uso, todo a un precio accesible. Ideal para quienes buscan mejorar la calidad de sus grabaciones sin complicaciones."],
  },

  //TAPO  ----Cámaras y videollamadas
  {
    id: "camara-wifi-tapo-c200",
    alta: "2026-08-29",
    name: "CAMARA WIFI TAPO C200",
    sku: "TAPO C200",
    cat: "redes", brand: "tapo",
    price: 540, oldPrice: null, rating: 4.6, reviews: 0, badge: null,
    img: "img/productos/TAPOC200-image-4-9-33-51.webp",
    gallery: ["img/productos/TAPOC200-image-4-9-33-51.webp"],
    desc: "CAMARA WIFI TAPO C200*ROTACION 360°*FULL HD 1080P*2 VIAS DE AUDIO*VISION NOCTURNA*DETECCION DE MOVIMIENTO*MODO PROVACIDAD*ALMACENAMIENTO MICRO SD 128GB",
    features: [],
  },

  /* ---- SHELLY · Automatización del hogar ---- */
  {
    id: "shelly-1-gen3",
    alta: "2026-07-24",
    name: "Interruptor WiFi empotrable Shelly 1 Gen3",
    cat: "domotica", brand: "shelly",
    price: 398, oldPrice: null, rating: 4.8, reviews: 0, badge: null,
    img: "img/productos/shelly-1-gen3.webp",
    gallery: ["img/productos/shelly-1-gen3.webp"],
    desc: "Convierte en inteligente cualquier luz o equipo que ya tengas. Se instala detrás del interruptor de pared y mantiene el pulsador funcionando como siempre.",
    youtube: "UR3ZiNVbrFs",
    features: ["Se instala detrás del interruptor", "Funciona con 110-240 V y 12-48 V", "Carga de hasta 16 A", "Compatible con Alexa y Google Home", "Funciona sin nube si lo prefieres"],
  },

  {
    id: "shelly-plus-i4",
    alta: "2026-08-08",
    name: "SHELLY PLUS I4",
    sku: "SHELLY PLUS I4",
    cat: "domotica", brand: "shelly",
    price: 323, oldPrice: null, rating: 4.7, reviews: 0, badge: null,
    img: "img/productos/shelly-plus-i4.webp",
    gallery: ["img/productos/shelly-plus-i4.webp"],
    youtube: "",
    desc: "Controlador de 4 entradas digitales operado por Wi-Fi que \nle permite activar o desactivar manualmente cualquier \nescena creada, ejecutar acciones sincronizadas o ejecutar \nescenarios de activación complejos",
    features: [],
  },
  {
    id: "shelly-blu-button-white",
    alta: "2026-08-08",
    name: "SHELLY BLU BUTTON WHITE",
    sku: "SHELLY BLU BUTTON WHITE",
    cat: "domotica", brand: "shelly",
    price: 358, oldPrice: null, rating: 4.7, reviews: 0, badge: null,
    img: "img/productos/shelly-blu-button.webp",
    gallery: ["img/productos/shelly-blu-button.webp"],
    desc: "Botón Bluetooth para acciones y activación de escenas. Controla tus dispositivos inteligentes con un solo clic: apaga las luces, ajusta las persianas, abre la puerta del garaje y mucho más.\n*Para usar este dispositivo con la aplicación Shelly Smart Control, se necesita una puerta de enlace. Las puertas de enlace compatibles son Shelly BLU Gateway o cualquier dispositivo Shelly Plus, Pro o Gen3 (excepto sensores).",
    features: ["Funcionalidad de scripting para acciones ilimitadas basadas en la ubicación.", "Compatibilidad total con Home Assistant y cualquier otro dispositivo compatible con el protocolo BTHome.", "Utiliza tecnología BLE", "Permite encender/apagar electrodomésticos, atenuar la luz y activar escenas.", "Cifrado", "Tiene alerta sonora y luminosa; modo \"Silencio\" para silenciar los sonidos.", "Función \"Encuéntrame\" activada por el modo baliza.", "Alcance de 10 m en interiores y 30 m en exteriores.", "Funciona con dispositivos Plus, Pro y Gen3."],
  },
  {
    id: "shelly-1-mini-gen3",
    alta: "2026-08-08",
    name: "SHELLY 1 MINI GEN3",
    sku: "SHELLY 1 MINI GEN3",
    cat: "domotica", brand: "shelly",
    price: 336, oldPrice: null, rating: 4.7, reviews: 0, badge: null,
    img: "img/productos/shelly-plus-1-mini-gen-3.webp",
    gallery: ["img/productos/shelly-plus-1-mini-gen-3.webp"],
    youtube: "yjXxljucoWU",
    desc: "El interruptor de relé Wi-Fi más pequeño del mundo.\n Automatiza y controla luces, garaje, riego y pequeños \nelectrodomésticos en menos de 10 minutos. Equipado con \nchip Shelly y todas las funciones Gen3",
    features: ["Certificado por New Matter*. *Disponible tras actualizar al firmware más reciente.", "Equipado con un nuevo procesador y mayor memoria flash - ESP Shelly", "Mayor durabilidad de los terminales.", "Admite hasta 8 A a 240 V CA y 5 A a 30 V CC.", "Contactos secos (libres de potencial): opción para el control de contactores.", "Extensor de alcance Wi-Fi y puerta de enlace Bluetooth", "¡No requiere hub! Control sencillo a través de la aplicación Shelly Smart Control, compatible con la mayoría de plataformas y protocolos, así como con asistentes de voz. Úsalo con Alexa, Home Assistant o tu sistema de automatización preferido.", "Admite scripting, webhooks, MQTT, WebSocket, HTTPS, UDP, TLS y certificados personalizados.", "Admite comunicación KNXnet/IP."],
  },

   {
    id: "shelly-1-gen4",
    alta: "2026-08-08",
    name: "SHELLY 1 GEN4",
    sku: "SHELLY 1 GEN4",
    cat: "domotica", brand: "shelly",
    price: 406, oldPrice: null, rating: 4.7, reviews: 0, badge: null,
    img: "img/productos/shelly-1-gen4.webp",
    gallery: ["img/productos/shelly-1-gen4.webp"],
    desc: "Interruptor inteligente de un canal con contactos secos para controlar luces y electrodomésticos. Disfrute de un rendimiento más rápido y compatibilidad con múltiples protocolos (Wi-Fi, Zigbee, Matter, Bluetooth).",
    features: ["Novedad : conectividad multiprotocolo: elige entre Bluetooth, Wi-Fi o Zigbee.", "Nuevo - Certificado como materia.", "Nuevo : funciona con Apple HomeKit: controla los dispositivos conectados usando la app Casa de Apple o Siri a través de Matter.", "Contactos secos (libres de potencial): opción para el control de contactores. Permite encender y apagar dispositivos de baja tensión.", "Soporte de baja y alta tensión", "Ideal para instalar detrás de interruptores y enchufes existentes.", "Admite horarios, escenas y acciones locales.", "Admite scripting, HTTPS, MQTTS y Web Sockets entrantes y salientes.", "Admite componentes virtuales", "Admite comunicación KNXnet/IP.", "Sensor de temperatura interno para protección contra sobrecalentamiento", "¡No requiere hub! Control sencillo a través de la aplicación Shelly Smart Control, compatible con la mayoría de plataformas y protocolos, así como con asistentes de voz. Úsalo con Alexa, Sir, Home Assistant, Apple HomeKit o tu plataforma de automatización preferida."],
  },

  {
    id: "shelly-blu-button-tough-1",
    alta: "2026-08-08",
    name: "SHELLY BLU BUTTON TOUGH 1",
    sku: "SHELLY BLU BUTTON TOUGH 1",
    cat: "domotica", brand: "shelly",
    price: 397, oldPrice: null, rating: 4.7, reviews: 0, badge: null,
    img: "img/productos/shelly-blu-button-tough.webp",
    gallery: ["img/productos/shelly-blu-button-tough.webp"],
    desc: "Controla al instante tus dispositivos inteligentes con un solo clic: iluminación, electrodomésticos, escenas, etc. Es resistente al polvo, a las salpicaduras y a los impactos, lo que garantiza su fiabilidad tanto en interiores como en exteriores.\n*Para utilizar este dispositivo con la aplicación Shelly Smart Control, es necesario un gateway. Los gateways compatibles son Shelly BLU Gateway o cualquier dispositivo Shelly Plus, Pro o Gen3 (a excepción de los sensores).",
    features: ["Permite encender y apagar dispositivos, regular la intensidad de la luz y activar escenas", "Resistente a golpes, salpicaduras y polvo (clasificación IP54)", "Funcionalidad de scripting para una variedad ilimitada de acciones basadas en la ubicación", "Compatibilidad total con Home Assistant y cualquier otro dispositivo compatible con el protocolo BTHome (sin necesidad de configuración adicional)", "Utiliza tecnología BLE", "Cifrado (alto nivel de seguridad)", "Alertas sonoras y modo \"Silencio\" (sin sonido)", "Función \"Buscar\" activada mediante el modo baliza (beacon)", "Alcance de 10 m en interiores y 30 m en exteriores", "Compatible con dispositivos Plus, Pro y Gen3"],
  },

  {
    id: "shelly-pro-4pm",
    alta: "2026-08-08",
    name: "SHELLY PRO 4PM",
    sku: "SHELLY PRO 4PM",
    cat: "domotica", brand: "shelly",
    price: 1376, oldPrice: null, rating: 4.7, reviews: 0, badge: null,
    img: "img/productos/shelly-pro-4pm.webp",
    gallery: ["img/productos/shelly-pro-4pm.webp"],
    desc: "Interruptor inteligente profesional de 4 canales para carril \nDIN con medición de potencia, compatible con hasta 16 A \npor canal. Controla y monitoriza el consumo de cada canal \npor separado.",
    features: ["Conexión LAN, Wi-Fi y Bluetooth", "4 salidas, 16 A cada una. Corriente máxima total del dispositivo: 40 A.", "Medición precisa de la potencia", "Protección contra sobrecarga y sobretensión de la carga.", "Se puede montar en riel DIN.", "Pantalla a color de 1,8 pulgadas con teclas de navegación.", "Control de 1 fase", "Control sencillo a través de la aplicación Shelly, diversos protocolos y plataformas, así como asistente de voz.", "Admite comunicación KNXnet/IP."],
  },

  {
    id: "shelly-pro-1",
    alta: "2026-08-08",
    name: "Shelly Pro 1",
    sku: "Shelly Pro 1",
    cat: "domotica", brand: "shelly",
    price: 876, oldPrice: null, rating: 4.7, reviews: 0, badge: null,
    img: "img/productos/shelly-pro1.webp",
    gallery: ["img/productos/shelly-pro1.webp"],
    desc: "Relé monofásico, 1 canal, con salidas libres de potencial \n(contactos secos), que admite hasta 16 A para \nautomatización profesional de luces y electrodomésticos \npara uso residencial o comercial.",
    features: ["Conexión LAN, Wi-Fi y Bluetooth", "1 salida, 16 A", "Contactos secos", "Control sencillo a través de la aplicación Shelly, diversos protocolos y plataformas, así como asistentes de voz.", "Admite comunicación KNXnet/IP."],
  },

  {
    id: "shelly-blu-door-window-white",
    alta: "2026-08-08",
    name: "SHELLY BLU DOOR/WINDOW WHITE",
    sku: "SHELLY BLU DOOR/WINDOW WHITE",
    cat: "domotica", brand: "shelly",
    price: 375, oldPrice: null, rating: 4.7, reviews: 0, badge: null,
    img: "img/productos/shelly-blu-door-window.webp",
    gallery: ["img/productos/shelly-blu-door-window.webp"],
    desc: "Diseñado para detectar la apertura o el cierre de puertas y \nventanas e informar de ello inmediatamente, activando \nescenarios de domótica según corresponda. También \npuede medir el ángulo de inclinación y la luminosidad.\n*Para usar este dispositivo con la app Shelly Smart Control, \nse necesita una puerta de enlace. Las puertas de enlace \ncompatibles son Shelly BLU Gateway o cualquier \ndispositivo Shelly Plus, Pro o Gen3 (excepto los sensores)",
    features: ["Conectividad dual: Bluetooth 5.0 y conectividad Zigbee.", "Larga duración de la batería: hasta 5 años con la batería CR2032 de 3V incluida.", "Detección de eventos de apertura y cierre de puertas/ventanas.", "Medición del ángulo: Del ángulo de inclinación de puertas/ventanas de tipo oscilobatiente.", "Sensor de luz: Capacidad de medición de iluminación (luz).", "Comunicación cifrada: cifrado AES (modo CCM) para una comunicación inalámbrica segura.", "Compacto y ligero: para una instalación versátil.", "Modo baliza: Para la transmisión periódica del estado."],
  },
  {
    id: "shelly-blu-motion",
    alta: "2026-08-08",
    name: "SHELLY BLU MOTION",
    sku: "SHELLY BLU MOTION",
    cat: "domotica", brand: "shelly",
    price: 432, oldPrice: null, rating: 4.7, reviews: 0, badge: null,
    img: "img/productos/shelly-blu-motion.webp",
    gallery: ["img/productos/shelly-blu-motion.webp"],
    desc: "Un sensor de movimiento con respuesta instantánea y batería de larga duración. Las alertas rápidas te mantendrán informado de cualquier movimiento en tiempo real, mientras que su batería duradera te garantiza tranquilidad a largo plazo.\n*Para usar este dispositivo con la aplicación Shelly Smart Control, se necesita una puerta de enlace. Las puertas de enlace compatibles son Shelly BLU Gateway o cualquier dispositivo Shelly Plus, Pro o Gen3 (excepto sensores).",
    features: ["Batería: CR2477 3V (incluida)", "Duración de la batería: hasta 5 años.", "Adhesivo de pared incluido.", "Sensor LUX para acciones basadas en la luminosidad de la habitación.", "Sensibilidad ajustable para adaptarse a sus necesidades.", "Cifrado", "Modo baliza", "Puede integrarse en escenarios y escenas de automatización con otros dispositivos."],
  },
  {
    id: "shelly-blu-gateway",
    alta: "2026-08-08",
    name: "Shelly BLU Gateway",
    sku: "Shelly BLU Gateway",
    cat: "domotica", brand: "shelly",
    price: 371, oldPrice: null, rating: 4.7, reviews: 0, badge: null,
    img: "img/productos/shelly-blu-gateway.webp",
    gallery: ["img/productos/shelly-blu-gateway.webp"],
    desc: "Un adaptador que funciona como puente entre tus dispositivos Shelly BLU y el ecosistema Shelly. Recibe señales Bluetooth y las envía a la nube o localmente a otro dispositivo sin Bluetooth.",
    features: ["Enchufe USB tipo A", "Programación de scripts para control local", "Admite MQTT, WebSocket o cualquier otro sistema de automatización del hogar compatible, como Home Assistant.", "extensor de alcance Wi-Fi", "Puede escanear la red Bluetooth y encontrar todos los demás dispositivos Bluetooth; puede activar acciones en dispositivos de terceros mediante scripts."],
  },

  {
    id: "shelly-2pm-gen3",
    alta: "2026-08-08",
    name: "SHELLY 2PM GEN3",
    sku: "SHELLY 2PM GEN3",
    cat: "domotica", brand: "shelly",
    price: 582, oldPrice: null, rating: 4.7, reviews: 0, badge: null,
    img: "img/productos/shelly-2pm-gen3.webp",
    gallery: ["img/productos/shelly-2pm-gen3.webp"],
    desc: "Controla y supervisa de forma remota dos circuitos eléctricos diferentes, o persianas enrollables, estores y otros motores bidireccionales desde cualquier lugar. Incluye monitorización de potencia.",
    features: ["Certificado por New Matter*. *Disponible tras actualizar al firmware más reciente.", "2 canales en la misma fase", "Medición de potencia en cada canal", "Control de cubiertas (enrollables): automatiza y ajusta la posición de persianas enrollables, estores, puertas, cortinas, toldos, puertas correderas y otros motores bidireccionales.", "Control del ángulo de las lamas: utilícelo con sus persianas venecianas y controle la posición de inclinación (ángulo) de las lamas para ajustar la cantidad de luz en una habitación.", "Nuevo procesador: chip ESP-Shelly-C38F con memoria aumentada a 8 MB.", "Mayor durabilidad de los terminales.", "Componentes virtuales", "Extensor de alcance Wi-Fi y puerta de enlace Bluetooth", "Admite scripting, webhooks, MQTT, WebSocket, HTTPS, UDP, TLS y certificados personalizados.", "¡No se necesita HUB! Control sencillo a través de la aplicación Shelly Smart Control, diversos protocolos y plataformas de automatización del hogar, así como asistentes de voz.", "Admite comunicación KNXnet/IP."],
  },
  {
    id: "shelly-h-t-gen3-white",
    alta: "2026-08-08",
    name: "SHELLY H&T GEN3 WHITE",
    sku: "SHELLY H&T GEN3 WHITE",
    cat: "domotica", brand: "shelly",
    price: 634, oldPrice: null, rating: 4.5, reviews: 0, badge: null,
    img: "img/productos/shelly-ht-gen3-blanco.webp",
    gallery: ["img/productos/shelly-ht-gen3-blanco.webp"],
    desc: "Sensor de temperatura y humedad Wi-Fi de última generación con pantalla de tinta electrónica. Mejorado con nuestro chip Shelly de 8 MB, incorpora todas las funciones de los dispositivos Gen3.",
    features: ["No se necesita concentrador! Control sencillo a través de la aplicación Shelly Smart Control, así como de diversos protocolos, plataformas y asistentes de voz.", "Equipado con el nuevo chip Shelly: 8 MB de memoria y mayor capacidad de respuesta.", "Mejorado con una pantalla de tinta electrónica de bajo consumo y reloj incorporado.", "Funciona con puerto USB tipo C (para una conexión más rápida).", "Pilas: 4 pilas AA (LR) de 1,5 V (no incluidas)", "Bajo consumo de batería (hasta 1 año de duración de las baterías)", "Se puede montar en la pared.", "Tiene un servidor web integrado y se conecta a tu red Wi-Fi.", "Protección contra sobrecarga", "No necesita instalación"],
  },
  {
    id: "shelly-plus-add-on",
    alta: "2026-08-08",
    name: "SHELLY PLUS ADD-ON",
    sku: "Shelly Plus Add-On",
    cat: "domotica", brand: "shelly",
    price: 331, oldPrice: null, rating: 4, reviews: 0, badge: null,
    img: "img/productos/shelly-plus-addon.webp",
    gallery: ["img/productos/shelly-plus-addon.webp"],
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
    alta: "2026-08-08",
    name: "Regleta 2200W, 6 tomas NEMA universales",
    sku: "PS-001B",
    cat: "energia", brand: "forza",
    price: 92, oldPrice: null, rating: 4.7, reviews: 0, badge: null,
    img: "img/productos/regleta-forza.webp",
    gallery: ["img/productos/regleta-forza.webp"],
    desc: "Capacidad 2200W • Voltaje 110/220 • Tipo de entrada: NEMA 5-15P • Tipo de salida: 6 x NEMA 5-15R • Indicador Visual: Interruptor de conexión con luz",
    features: ["6 receptáculos universales de calce perfecto", "Interruptor de conexión iluminado", "Interruptor de cortacircuito incorporado", "1875-2200 watts de protección", "Enchufe de tres contactos con", "conexión a tierra", "Cable de 90 cm de longitud", "Cubierta de plástico retardador de llama", "Orificios para montaje en la pared"],
  },
  

  {
    id: "regulador-automatico-de-volt-900va-450w",
    alta: "2026-08-08",
    name: "Regulador automático de volt. 900VA/450W",
    sku: "FVR-902",
    cat: "energia", brand: "forza",
    price: 225, oldPrice: null, rating: 4.7, reviews: 0, badge: null,
    img: "img/productos/regulador-forza-900va.webp",
    gallery: ["img/productos/regulador-forza-900va.webp"],
    desc: "Protege tus equipos electrónicos contra cortes de energía, sobrecargas y variaciones de voltaje con el UPS Forza de 900VA/450W. Equipado con 8 tomas universales, ofrece 4 salidas con regulación automática de voltaje (AVR) y 4 salidas con protección contra sobretensiones (Surge Protection), brindando un respaldo confiable para computadoras, routers, equipos de red y dispositivos electrónicos.",
    features: ["Capacidad de 900VA / 450W", "Voltaje de entrada/salida: 220V", "8 tomas universales NEMA 5-15R", "4 tomas con regulación automática de voltaje (AVR)", "4 tomas con protección contra sobretensiones (Surge)", "Ideal para PC, módems, routers, DVR, cámaras de seguridad y equipos de oficina"],
  },
  
  {
    id: "regulador-automatico-volt-2200va-1100w",
    alta: "2026-08-08",
    name: "Regulador automático volt. 2200VA/1100W",
    sku: "FVR-2202",
    cat: "energia", brand: "forza",
    price: 545, oldPrice: null, rating: 4.7, reviews: 0, badge: null,
    img: "img/productos/regulador-fvr2202.webp",
    gallery: ["img/productos/regulador-fvr2202.webp"],
    desc: "El regulador automático de voltaje FVR-2202 de Forza Power Technologies cuenta con una capacidad de 2200VA/1100W, un voltaje de 220VAC y 8 salidas universales",
    features: ["Capacidad: 2200VA / 1100WVoltaje de entrada/salida: 220 VACFrecuencia: 50-60 HzTomas de corriente: 8 salidas universalesTipo de enchufe de entrada: NEMA 5-15P"],
  },
  
  {
    id: "fuente-de-alimentacion-portatil-de-700-w",
    alta: "2026-08-13",
    name: "Fuente de alimentación portátil de 700 W",
    sku: "FPP-T702",
    cat: "tecnologia", brand: "forza",
    price: 8627, oldPrice: null, rating: 4.5, reviews: 0, badge: null,
    img: "img/productos/fpp-t700.webp",
    gallery: ["img/productos/fpp-t700.webp"],
    desc: "Capacidad: 700VA/700W • Voltaje: 220V • Tomas de corriente: 2 NEMA 5-15R + 8 CC • Factor de forma: Torre • Forma de onda: Onda sinusoidal pura",
    features: ["-Carga ultrarapida 0 a 100% 1,5h", "-Bateria LMFP 3000 ciclos de carga", "-TurboPower Impulso instantaneo de energia", "-Ecologico sin emisiones nocivas", "-Controlar MPP para carga con panel solar", "-Funcionamiento silencioso", "-Batería LMFP de 551.25Wh (3.75V, 147Ah)", "-MPPT 12-30V, 7.5A, 180W máx", "-Pantalla LCD de fácil lectura", "-Tecnología TurboPower 1400W", "-9 puertos de salida", "-Panel de control integrado de 4 botones", "-Lámpara LED multifunción de 6W", "-Dos ventiladores incorporados", "-23,8 x 19,6 x 28,5 cm", "7.5 Kg"],
  },

  {
    id: "fuente-de-alimentacion-portatil-de-1200w",
    alta: "2026-08-13",
    name: "Fuente de alimentación portátil de 1200W",
    sku: "FPP-T1202",
    cat: "tecnologia", brand: "forza",
    price: 13419, oldPrice: null, rating: 4.7, reviews: 0, badge: null,
    img: "img/productos/fppt1202.jpg",
    gallery: ["img/productos/fppt1202.jpg"],
    desc: "Capacidad: 1200VA/1200W • Voltaje: 220V • Tomas de corriente: 3 NEMA 5-15R + 8 CC • Factor de forma: Torre • Forma de onda: Onda sinusoidal pura",
    features: ["-Batería LMFP de 1102.5Wh 26.25V 42Ah (3.75V 294Ah)", "-3000 ciclos al 80%+ de capacidad", "Carga rápida en 1,5 hr", "-MPPT 12-30V, 7.5A, 180W máx.", "-Pantalla LCD de fácil lectura", "-Tecnología TurboPower 2400W", "-10 puertos de salida", "-Panel de control integrado de 4 botones", "-Lámpara LED multifunción de 6W", "-20°C a 45°C", "-Dos ventiladores incorporados", "31.6 x 24 x 30 cm", "-13.6 Kg"],
  },

  {
    id: "panel-solar-portatil-60w-ip65-resisten",
    alta: "2026-08-13",
    name: "Panel Solar Portátil 60W | IP65 Resisten",
    sku: "FPV-T060W",
    cat: "tecnologia", brand: "forza",
    price: 2350, oldPrice: null, rating: 4.5, reviews: 0, badge: null,
    img: "img/productos/fpv-t060w.jpg",
    gallery: ["img/productos/fpv-t060w.jpg"],
    desc: "Energía solar confiable con tecnología monocristalina y un sistema de carga versátil con puntas intercambiables y puertos USB de carga rápida, incluido USB-C®.",
    features: ["-Alta Conversión de Energía: Los paneles de silicio monocristalino de alta densidad", "convierten hasta un 23 % de la luz solar en energía útil, maximizando el", "rendimiento para cargar dispositivos en cualquier entorno", "-Salida CC versátil: Con 60W de salida CC, un cable desmontable con 10 puntas", "intercambiables y tres puertos USB de carga rápida (incluyendo USB-C® de hasta", "30W y dos USB-A de hasta 18W), se adapta a diversas necesidades energéticas en", "cualquier situación", "- Diseño Resistente: La super\u001fcie de lona con costuras de precisión y la cubierta de", "polímero ETFE con certi\u001fcación IP65 protegen contra agua y polvo, asegurando un", "rendimiento duradero en condiciones exteriores exigentes", "-Carga Protegida: Un chip inteligente detecta automáticamente los dispositivos", "conectados y optimiza la velocidad de carga, garantizando protección total", "contra sobrecargas, sobrecalentamientos y cortocircuito", "- Soportes ajustables: Equipado con soportes integrados de altura regulable,", "permite ajustar el ángulo del panel entre 35° y 55° para una captación solar", "óptima y una instalación rápida y estable en cualquier superficie"],
  },

   {
    id: "panel-solar-portatil-200w-ip67",
    alta: "2026-08-13",
    name: "Panel Solar Portátil 200W | IP67",
    sku: "FPV-T200W",
    cat: "tecnologia", brand: "forza",
    price: 5930, oldPrice: null, rating: 4.5, reviews: 0, badge: null,
    img: "img/productos/fpv-t200w.jpg",
    gallery: ["img/productos/fpv-t200w.jpg"],
    desc: "Convierte la luz solar en energía confiable con sus células monocristalinas de alta eficiencia y conexión 6-en-1 para todos tus dispositivos.",
    features: ["-Diseño portátil y plegable", "-IPG7 resistencia al agua y polvo", "-Alta conversión de energía", "-4 paneles solares", "-Energia limpia", "-Angulos ajustables 35º/45º/55º", "-Conexion universal 6 en 1", "-Asas magneticas"],
  },

  {
    id: "panel-solar-portatil-100w-ip67",
    alta: "2026-08-13",
    name: "Panel Solar Portátil 100W | IP67",
    sku: "FPV-T100W",
    cat: "tecnologia", brand: "forza",
    price: 3265, oldPrice: null, rating: 4.7, reviews: 0, badge: null,
    stock: 0,
    img: "img/productos/fpvt100w.jpg",
    gallery: ["img/productos/fpvt100w.jpg"],
    desc: "Convierte la luz solar en energía confiable con sus células monocristalinas de alta eficiencia y conexión 6-en-1 para todos tus dispositivos.",
    features: [],
  },

  // ---- TOTTO · Mochilas y accesorios escolares ----

  {
    id: "estuche-escolar-para-nino-vortex-negro",
    alta: "2026-09-09",
    name: "Estuche Escolar para Niño Vortex Negro",
    sku: "AJ52VOR003-2616-5ER",
    cat: "ergonomia", brand: "totto",
    price: 199, oldPrice: null, rating: 4.8, reviews: 0, badge: "Nuevo",
    img: "img/productos/AJ52VOR003-2616-5ER_1.webp",
    gallery: ["img/productos/AJ52VOR003-2616-5ER_1.webp", "img/productos/AJ52VOR003-2616-5ER_2.webp", "img/productos/AJ52VOR003-2616-5ER_3.webp", "img/productos/AJ52VOR003-2616-5ER_4.webp", "img/productos/AJ52VOR003-2616-5ER_5.webp"],
    desc: "¡Haz que la organización también sea divertida con El estuche escolar para niño Vortex! Su frente termoformado tipo consola te hará sobre salir en todas tus clases. Cuanta con un compartimento amplio y con cierre en cremallera ideal para esferos, colores y más útiles, reata lateral para llevar fácilmente y espacio posterior para marcar el nombre. Incluye forro RPET elaborado con botellas recicladas. ¡Agrégala al carrito ya mismo!",
    features: ["Actividad: Kids", "Color: Negro", "Edad: Niños", "Género: Niño", "Material: Exterior: Poliester=100%, Forro: Poliester=100%, Relleno: Etil Vinil Acetato=100%,", "Medidas: Alto: 24 cm x Ancho:12 cm x Profundo: 8 cm", "Peso: 0.125 Kg", "Capacidad: 2.3 Lt."],
  },
  {
    id: "maletin-active-s-bolivia",
    alta: "2026-09-09",
    name: "Maletin Active S Bolivia",
    sku: "ET05BOL001-2610-1D6",
    cat: "ergonomia", brand: "totto",
    price: 259, oldPrice: 489, rating: 4.8, reviews: 0, badge: "-47%",
    img: "img/productos/ET05BOL001-2610-1D6_1.webp",
    gallery: ["img/productos/ET05BOL001-2610-1D6_1.webp", "img/productos/ET05BOL001-2610-1D6_2.webp", "img/productos/ET05BOL001-2610-1D6_3.webp", "img/productos/ET05BOL001-2610-1D6_4.webp"],
    desc: "Hay maletines que solo cargan cosas. Y hay maletines que cargan algo más — convicción, identidad, orgullo de saber de dónde vienes y a dónde vas. Fabricado con materiales de alta durabilidad, diseñado para acompañarte en cada movimiento con la funcionalidad que el día exige. Múltiples compartimentos, correas ajustables y un diseño que se adapta a tu ritmo porque cargarlo todo no debería costarte nada.\nSomos fans de creer.",
    features: ["Actividad: Viaje", "Color: Estampado", "Género: Unisex", "Material: EXTERIOR: POLIESTER=100%,", "Medidas: 47 x 25 x 19", "Peso: 0,39", "Tamaño: Pequeño"],
  },

  {
    id: "mochila-para-nina-frozen-destiny-azul",
    alta: "2026-09-09",
    name: "Mochila para Niña Frozen Destiny Azul",
    sku: "MJ04FZD002-2420-0JLM",
    cat: "ergonomia", brand: "totto",
    price: 299, oldPrice: 599, rating: 4.8, reviews: 0, badge: "-50%",
    img: "img/productos/MJ04FZD002-2420-0JLM_1.webp",
    gallery: ["img/productos/MJ04FZD002-2420-0JLM_1.webp", "img/productos/MJ04FZD002-2420-0JLM_2.webp"],
    desc: "¡Lleva la magia de Frozen contigo! Este mochila mediana Frozen Destiny M es ideal para niñas. Fabricada en poliéster, presenta un encantador estampado en alta densidad con glitter en el frente. Su compartimiento principal tiene cierre en doble cremallera, correas acolchadas ajustables y una manija superior en reata. Incluye bolsillos laterales porta botellas y un práctico bolsillo frontal con cremallera. Además, trae un adorable llavero de goma.",
    features: ["Color: Azul", "Género: Niña", "Peso: 0,51", "Tamaño: Mediano"],
  },

  {
    id: "mochila-para-nino-spiderman-urban-rojo",
    alta: "2026-09-09",
    name: "Mochila para Niño Spiderman Urban Rojo",
    sku: "MJ04SPD001-2616-0RD",
    cat: "ergonomia", brand: "totto",
    price: 559, oldPrice: null, rating: 4.8, reviews: 0, badge: "Nuevo",
    img: "img/productos/MJ04SPD002-2616-0RD_1.webp",
    gallery: ["img/productos/MJ04SPD002-2616-0RD_1.webp", "img/productos/MJ04SPD002-2616-0RD_2.webp"],
    desc: "¡Inspíralo a llevar sus cosas con emoción con La mochila para niño Spiderman Urban pequeño! Confeccionado en poliéster, cuenta con compartimento principal de doble cremallera, bolsillos laterales, correas acolchadas ajustables y organizador interno. El forro RPET hecho con botellas recicladas, su estampado en alta densidad y el llavero en goma lo hacen único. ¡Cómpralo hoy mismo!",
    features: ["Actividad: Moda", "Color: Rojo", "Edad: Niños", "Género: Niño", "Material: Exterior: Poliester=100%, Forro: Poliester=100%,", "Medidas: Alto: 24.5 cm x Ancho:32 cm x Profundo: 11 cm", "Peso: 0.329 Kg.", "Tamaño: Pequeño", "Capacidad: 8.62 Lt."],
  },
  {
    id: "mochila-para-nino-champion-mediano-gris",
    alta: "2026-09-09",
    name: "Mochila para Niño Champion Mediano Gris",
    sku: "MJ04CHP002-2616-1G8",
    cat: "ergonomia", brand: "totto",
    price: 599, oldPrice: null, rating: 4.8, reviews: 0, badge: "Nuevo",
    img: "img/productos/MJ04CHP002-2616-1G8_1.webp",
    gallery: ["img/productos/MJ04CHP002-2616-1G8_1.webp", "img/productos/MJ04CHP002-2616-1G8_2.webp"],
    desc: "¡Motívalo a organizar sus útiles con La mochila Champion mediano! Con frente estampado de fútbol, está fabricado en poliéster y cuenta con compartimento principal de doble cremallera, bolsillo frontal, manija superior, correas acolchadas ajustables y bolsillos laterales porta botellas. Incluye organizador interno, forro RPET con botellas recicladas y un llavero en forma de balón. ¡Cómpralo ya!",
    features: ["Actividad: Kids", "Color: Gris", "Edad: Niños", "Género: Niño", "Material: Exterior: Poliester=90%, Poliuretano=10%, Forro: Poliester=100%,", "Medidas: Alto: 32 cm x Ancho: 40.5 cm x Profundo: 14 cm", "Peso: 0.505 Kg.", "Tamaño: Mediano", "Capacidad: 18.14 Lt."],
  },

  {
    id: "maleta-de-cabina-360-glide-de-10-kilos-negra",
    alta: "2026-09-09",
    name: "Maleta de Cabina 360 Glide de 10 kilos Negra",
    sku: "ET17GLE001-2516-N01",
    cat: "ergonomia", brand: "totto",
    price: 1899, oldPrice: null, rating: 4.8, reviews: 0, badge: "Nuevo",
    img: "img/productos/ET17GLE001-2516-N01S-ECOMMERCE_1.webp",
    gallery: ["img/productos/ET17GLE001-2516-N01S-ECOMMERCE_1.webp", "img/productos/ET17GLE001-2516-N01S-ECOMMERCE_2.webp"],
    desc: "¡Prepárate para viajar con la maleta de 10 kilos Glide! Su estructura en polipropileno inyectado la hace resistente a impactos y arañazos, mientras que sus ruedas 360° con doble soporte garantizan un desplazamiento suave y silencioso. Cuenta con correas de compresión internas y cierre TSA para mayor seguridad. Verifica las medidas con tu aerolínea y ¡hazla parte de tu equipaje ahora!",
    features: [],
  },

  {
    id: "pack-x-2-mochila-estuche-kalex",
    alta: "2026-08-29",
    name: "Pack X 2 Mochila + Estuche Kalex",
    sku: "MA04COM093-22100-N01",
    cat: "escritorio", brand: "totto",
    price: 270, oldPrice: 539, rating: 4.8, reviews: 0, badge: null, stock: 0,
    img: "img/productos/MA04COM093-22100-N01_1.webp",
    gallery: ["img/productos/MA04COM093-22100-N01_1.webp"],
    desc: "La mochila Escolar Pack X 2 + Multiuso Kalex es perfecto para estudiantes. Incluye un Mochila pequeño y un multiuso, ambos con organizador sencillo y compartimento principal de doble deslizador. Ligero y funcional, ideal como maleta para el colegio.",
    features: [],
  },

   {
    id: "bolso-para-mujer-bombo-tipo-crossbody-azul",
    alta: "2026-08-29",
    name: "Bolso para Mujer Bombo tipo Crossbody Azul",
    sku: "MA02IND748-26100-Z9G",
    cat: "escritorio", brand: "totto",
    price: 279, oldPrice: null, rating: 4.8, reviews: 0, badge: null,
    img: "img/productos/MA02IND748-26100-Z9G_1.webp",
    gallery: ["img/productos/MA02IND748-26100-Z9G_1.webp"],
    desc: "¡Lleva lo esencial con estilo! El bolso Bombo tipo crossbody está fabricado con materiales de alta calidad como poliester liviana, lo que lo hace perfecto para el uso diario. Su diseño compacto incluye doble compartimento para organizar tus cosas y una correa ajustable para mayor comodidad. Ideal para quienes buscan practicidad sin sacrificar el estilo. ¡Hazlo tu accesorio favorito!",
    features: [],
  },
  


  // ---Targus · Mochilas y accesorios tecnológicos ---

  {
    id: "combo-teclado-mouse-inalambrico-targus",
    alta: "2026-09-08",
    name: "COMBO TECLADO+MOUSE INALAMBRICO TARGUS",
    sku: "AKM610ESLP",
    cat: "escritorio", brand: "targus",
    price: 450, oldPrice: null, rating: 4.5, reviews: 0, badge: null,
    img: "img/productos/AKM610ESLP-image-0-1764963265648.webp",
    gallery: ["img/productos/AKM610ESLP-image-0-1764963265648.webp"],
    desc: "COMBO TECLADO+MOUSE INALAMBRICO TARGUS*TECLADO QWERTY EN ESPAÑOL*TECLAS MULTIMEDIA*MOUSE OPTICO 1600DPI*CONEXION INALAMBRICA 2,4GHz*RECEPTOR GUARDABLE",
    features: ["Teclado QWERTY en español", "Teclas de tamaño normal con distribución completa y respuesta silenciosa para una escritura cómoda y fluida.", "Teclas multimedia integradas", "Acceso rápido a funciones multimedia para controlar música, volumen y reproducción directamente desde el teclado.", "Mouse óptico de alta definición (1600 DPI)", "Movimientos suaves, precisos y rápidos para un control total en cada tarea.", "Tecnología inalámbrica 2.4 GHz", "Conexión estable y sin interferencias para trabajar sin retrasos ni desconexiones.", "Un solo receptor USB para ambos dispositivos", "Ahorra puertos USB y disfruta de una instalación inmediata con sistema Plug & Play.", "Receptor guardable \"Stow-n-Go®\"", "Diseño inteligente para guardar el receptor cuando no está en uso.", "Incluye pilas alcalinas", "Funciona desde el primer momento, sin compras adicionales.", "Compatible con Windows", "Diseñado para integrarse fácilmente en entornos de trabajo y estudio.", "Diseño elegante en color negro", "Estética profesional que combina perfectamente con cualquier escritorio.", "IDEAL PARA:", "Oficinas corporativas", "Trabajo remoto o home office", "Estudiantes", "Uso administrativo", "Escritorios profesionales"],
  },

  // ---- ENERSAFE · UPS y protección eléctrica ---- (marca comentada / próximamente)

  {
    id: "ups-esol-t-e-1kva-900watts",
    alta: "2026-09-08",
    name: "UPS ESOL T-E 1Kva/900Watts",
    sku: "UPSEOLTE1KVA",
    cat: "energia", brand: "enersafe",
    price: 6095, oldPrice: null, rating: 4.5, reviews: 0, badge: null,
    img: "img/productos/10-con-sombra.webp",
    gallery: ["img/productos/10-con-sombra.webp"],
    desc: "El Enersafe ESOL T-E 1kVA / 900W (SKU: UPSEOLTE1KVA) es una UPS Online de doble conversión en formato Torre, diseñada para proteger servidores, redes y equipos críticos contra cualquier anomalía eléctrica.",
    features: ["Monofásica (1:1)", "Potencia 1000VA / 900W.", "Factor de Potencia: 0,9", "Tipo: Torre", "Cargador 1A", "Puerto USB y RS232. Tarjeta SNMP para monitoreo remoto vía web y de relé son opcionales."],
  },

  /* ---- UGREEN · Cables y conectividad ---- */
  
  {
    id: "mini-power-bank-inalambrico-rosa-magsafe",
    alta: "2026-09-09",
    name: "MINI POWER BANK INALAMBRICO ROSA MAGSAFE",
    sku: "35606",
    cat: "energia", brand: "ugreen",
    price: 620, oldPrice: null, rating: 4.7, reviews: 0, badge: "Nuevo",
    img: "img/productos/35606-image-0-1768592104691.webp",
    gallery: ["img/productos/35606-image-0-1768592104691.webp", "img/productos/35606-image-1-1768592104691.webp", "img/productos/35606-image-2-1768592104691.webp", "img/productos/35606-image-3-1768592104691.webp", "img/productos/35606-image-4-1768592104691.webp", "img/productos/35606-image-5-1768592104691.webp", "img/productos/35606-image-6-1768592104691.webp", "img/productos/35606-image-7-1768592104691.webp"],
    desc: "MINI POWER BANK INALAMBRICO ROSA MAGSAFE*5000mAh 20W*USB-C HASTA 20W*CARGA INALAMBRICA MAGNETICA 7.5W*PANTALLA TFT INTELIGENTE CON GESTOS Y ANIMACIONES DE CARGA",
    features: ["UGREEN PB571 – Power Bank Magnético 5000 mAh Rosa", "Energía inteligente, estilo compacto y máxima comodidad", "Batería portátil de 5000 mAh", "Potencia ideal para tu día a día: recarga tu iPhone cuando más lo necesitas sin cargar peso extra.", "Carga rápida USB-C PD hasta 20W", "Recarga tu smartphone en minutos con tecnología Power Delivery para máxima eficiencia.", "Carga inalámbrica magnética (MagSafe 7.5W)", "Alineación perfecta y fijación estable con fuerza magnética de 10N para una experiencia segura y sin cables.", "USB-C bidireccional", "Entrada hasta 18W", "Salida hasta 20W", "Más velocidad, menos espera.", "Pantalla TFT inteligente", "Visualiza el porcentaje de batería con animaciones y emojis que hacen tu carga más divertida.", "Soporte plegable integrado", "Convierte tu power bank en un soporte para ver videos, series o videollamadas cómodamente.", "Compatibilidad total", "Ideal para iPhone 12 en adelante, y también para dispositivos con carga Qi o USB-C.", "Diseño ultracompacto y ligero", "105 × 68 × 13 mm", "Solo 145 g", "Perfecto para bolsillo, bolso o mochila.", "Color rosa elegante", "Un toque moderno, delicado y tecnológico que combina con tu estilo.", "UGREEN PB571 es la combinación perfecta de potencia, diseño y tecnología inteligente para acompañarte en cada momento.", "Carga con estilo. Carga con UGREEN."],
  },

   {
    id: "cargador-inalambrico-magnetico-2en1",
    alta: "2026-09-09",
    name: "CARGADOR INALAMBRICO MAGNETICO 2EN1",
    sku: "35316",
    cat: "energia", brand: "ugreen",
    price: 720, oldPrice: null, rating: 4.7, reviews: 0, badge: "Nuevo",
    img: "img/productos/35316-image-0-1773157028928.webp",
    gallery: ["img/productos/35316-image-0-1773157028928.webp", "img/productos/35316-image-1-1773157028928.webp", "img/productos/35316-image-2-1773157028928.webp", "img/productos/35316-image-3-1773157028928.webp", "img/productos/35316-image-4-1773157028928.webp", "img/productos/35316-image-5-1773157028928.webp", "img/productos/35316-image-6-1773157028928.webp", "img/productos/35316-image-7-1773157028928.webp"],
    desc: "CARGADOR INALAMBRICO MAGNETICO 2EN1*MAGFLOW Qi2*SISTEMA MAGNETICO MAGSAFE*CARGA SIMULTANEA MULTIPLES DISPOSITIVOS*PUERTO USB-C ADICIONAL*PLEGABLE PORTATIL*",
    features: ["UGREEN MagFlow Qi2 2-en-1 Wireless Charger – Modelo 35316", "Carga inalámbrica rápida, portátil y magnética para tu ecosistema Apple", "Optimiza tu espacio y carga tus dispositivos de forma inteligente con el UGREEN MagFlow Qi2 15W, un cargador inalámbrico 2-en-1 plegable diseñado para ofrecer velocidad, seguridad y portabilidad en cualquier lugar. Ideal para el hogar, oficina o viajes.", "Características destacadas", "Carga rápida con certificación Qi2", "Equipado con el nuevo estándar Qi2, permite una carga inalámbrica hasta 15W para iPhone, ofreciendo el doble de velocidad comparado con cargadores convencionales de 7.5W.", "Sistema magnético MagSafe", "El anillo magnético integrado asegura una alineación perfecta con tu iPhone para una carga estable y eficiente en solo 1 segundo.", "Carga simultánea para múltiples dispositivos", "Carga tu iPhone y AirPods al mismo tiempo", "El sistema 2-en-1 permite alimentar dos dispositivos simultáneamente.", "Puerto USB-C adicional", "Incluye un puerto USB-C que permite conectar otro dispositivo como smartwatch o accesorios mediante cable.", "Recomendado usar adaptador USB-C PD de 30W o superior para máxima eficiencia.", "Diseño portátil y plegable", "Ultra compacto para viajar", "Cuando se pliega, su tamaño es similar al de unos auriculares.", "Peso ligero de solo 212 g", "Ángulo ajustable hasta 70°", "Permite colocar tu smartphone en posición vertical u horizontal, ideal para videollamadas, ver contenido o usar modo standby.", "Seguridad avanzada", "Sistema inteligente con múltiples protecciones:", "Protección contra sobrecorriente", "Protección contra sobretensión", "Protección contra sobrecalentamiento", "Detección de objetos extraños", "Además, su superficie magnética está cubierta con silicona suave para evitar rayones en tus dispositivos.", "Amplia compatibilidad", "Compatible con:", "iPhone 16 / 15 / 14 / 13 / 12 series", "AirPods Pro / AirPods 3 / AirPods 2", "Galaxy Buds", "Dispositivos compatibles con carga Qi", "Para una carga óptima se recomienda usar funda MagSafe o dispositivo sin funda.", "Contenido incluido", "Base de carga inalámbrica", "Cable USB-C a USB-C de 1 metro", "Manual de usuario", "(Adaptador de corriente no incluido)", "Ideal para", "Viajeros frecuentes", "Profesionales que usan múltiples dispositivos", "Usuarios que buscan un escritorio ordenado", "Usuarios de iPhone y AirPods", "Personas que quieren una carga rápida y segura", "UGREEN MagFlow Qi2 35316", "Carga inteligente, diseño portátil y potencia magnética en un solo dispositivo."],
  },

  {
    id: "mini-power-bank-ugreen-5000mah",
    alta: "2026-07-24",
    name: "MINI POWER BANK UGREEN 5000mAh",
    sku: "35338",
    cat: "energia", brand: "ugreen",
    price: 400, oldPrice: null, rating: 4.7, reviews: 0, badge: null,
    img: "img/productos/MINI-POWER-BANK-UGREEN-5000mAh.webp",
    gallery: ["img/productos/MINI-POWER-BANK-UGREEN-5000mAh.webp", "img/productos/MINI-POWER-BANK-UGREEN-women.webp", "img/productos/mini-power-bank-stand.webp"],
    desc: "MINI POWER BANK UGREEN 5000mAh 22.5W*CONECTOR USB-C INTEGRADO*SOPORTE PLEGABLE INCORPORADO*INCLUYE CABLE USB-C a USB-C 0,5m*PANTALLA CON NIVEL DE CARGA",
    features: ["Caracteristicas, Carga ultrarrápida 22.5W", "Recarga tu iPhone 15 hasta 55% en solo 30 minutos, ofreciendo una velocidad hasta 3 veces superior a la carga convencional.", "Conector USB-C integrado", "Olvídate de los cables sueltos. Su conector USB-C plegable integrado protege el puerto y permite una carga directa, rápida y segura.", "Soporte plegable incorporado", "Disfruta de tus videos, llamadas o videollamadas en posición vertical u horizontal con total estabilidad y comodidad visual.", "Diseño ultra compacto", "Peso: 112 g", "Medidas: 79 × 38 × 26 mm", "Perfecto para llevar en el bolsillo, bolso o mochila sin ocupar espacio.", "Energía para todo el día", "Con 5000 mAh, proporciona respaldo suficiente para mantener tu smartphone activo durante tus jornadas más exigentes."],
  },

  {
    id: "cable-usb-3-2-gen-2-tipo-c-a-c-1m",
    alta: "2026-07-24",
    name: "CABLE USB 3.2 Gen 2 TIPO-C a C 1M",
    sku: "80150",
    cat: "redes", brand: "ugreen",
    price: 215, oldPrice: null, rating: 4.7, reviews: 0, badge: null,
    img: "img/productos/cable-usb-3.2-gen2.webp",
    gallery: ["img/productos/cable-usb-3.2-gen2.webp"],
    desc: "Carga y transfiere datos a máxima velocidad con este cable USB-C a USB-C 3.2 Gen 2. Soporta carga rápida de hasta 100W (5A) y transferencia de datos de hasta 10 Gbps, ideal para laptops, tablets, smartphones y otros dispositivos USB-C. Además, es compatible con Thunderbolt 3, ofreciendo un rendimiento confiable para trabajo y entretenimiento.",
    features: ["USB C", "10 Gbps,", "CARGA100 W", "video 4K de hasta 3840x2160 @ 60 HZ", "20 V 5 A,", "20 x 14 x 3 cm", "100 gramos"],
  },

  {
    id: "hub-usb-3-0-4-puertos-ugreen",
    alta: "2026-07-24",
    name: "HUB USB 3.0 4 PUERTOS UGREEN",
    sku: "20291",
    cat: "redes", brand: "ugreen",
    price: 141, oldPrice: null, rating: 4.7, reviews: 0, badge: null,
    img: "img/productos/ugreen-adaptador.webp",
    gallery: ["img/productos/ugreen-adaptador.webp"],
    desc: "expande la conectividad de tu computadora de forma rápida y segura con el Hub USB 3.0 UGREEN de 4 puertos. Convierte un solo puerto USB en 4 puertos USB 3.0, ideales para conectar memorias USB, discos duros, teclado, mouse, impresoras y otros periféricos al mismo tiempo, Velocidad de transferencia de hasta 5 Gbps, permitiendo transferir 1 GB en aproximadamente 3 segundos, Cable integrado de 1 metro, Conexión estable y segura, Protección inteligente",
    features: ["5GBPS ALTA VELOCIDAD", "CABLE DE 1M", "4X USB 3.0", "INDICADOR LED"],
  },

  {
    id: "ugreen-revodok-hub-usb-c-6en1",
    alta: "2026-07-24",
    name: "UGREEN REVODOK HUB USB-C 6EN1",
    sku: "15598",
    cat: "tecnologia", brand: "ugreen",
    price: 375, oldPrice: null, rating: 4.7, reviews: 1, badge: null,
    img: "img/productos/ugreen-revodok-6-in-1.webp",
    gallery: [ "img/productos/ugreen-revodok-6-in-1.webp" ,"img/productos/ugreen-revodok-6-in-1-faster.webp", "img/productos/ugreen-revodok-6-in-1-compatibilidad.webp"],
    desc: "UGREEN REVODOK HUB USB-C 6EN1*HDMI 4K@30Hz, ETHERNET GIGABIT, CARGA PD 100W, 3x USB-A 3.0 5Gbps*DISEÑO PREMIUM METALICO Y ELEGANTE",
    features: ["Expansión total 6-en-1", "HDMI 4K @30Hz", "Ethernet Gigabit RJ45", "Carga PD hasta 100W", "3x USB-A 3.0 (5Gbps)", "Todo en un diseño elegante y compacto.", "Concentrador USB-C 6 en 1: Este concentrador Ethernet USB-C convierte un único puerto USB-C en 6 puertos con HDMI 4K a 30 Hz, Ethernet Gigabit, carga PD de 100 W y 3 puertos USB-A 3.0.", "Conexión Gigabit Ethernet estable: el concentrador USB C viene con un puerto Ethernet Gigabit RJ45 que admite 1000 Mbps con una conexión más rápida y confiable, para que disfrutes de una experiencia de juego o trabajo en línea más fluida.", "Imágenes 4K HD: La base USB-C cuenta con un puerto HDMI 4K a 30 Hz. Disfrute de películas con una calidad visual impresionante, reuniones en línea en alta definición o extienda su pantalla para presentaciones increíblemente atractivas. Nota: No es compatible con HDR/3D.", "Carga rápida PD de 100 W: Admite carga de paso USB-C de hasta 85 W a través del puerto Tipo-C para mantener tu portátil con energía. Se reservan 15 W para otras operaciones de la interfaz. Nota: El puerto USB-C solo admite carga y no admite transmisión de datos ni salida de vídeo."],
  },

  {
    id: "power-bank-10-000mah-55w-nexode-pro",
    alta: "2026-07-24",
    name: "POWER BANK 10.000mAh 55W NEXODE PRO",
    sku: "75701B",
    cat: "energia", brand: "ugreen",
    price: 690, oldPrice: null, rating: 4, reviews: 109, badge: null,
    img: "img/productos/ugreen-nexode-pro-power-bank-10000mah.webp",
    gallery: ["img/productos/ugreen-nexode-pro-power-bank-10000mah.webp", "img/productos/ugreen-nexode-pro-power-bank-10000mah-super-fast.webp", "img/productos/ugreen-nexode-pro-power-bank-couple.webp"],
    desc: "POWER BANK 10.000mAh 55W NEXODE PRO*CABLE USB-C INTEGRADO DE NYLON TRENZADO 22CM*AUTORIZADA PARA AVIONES(AIRLINE SAFE)*PANTALLA DIGITAL 1,18\"*CARGA TRIPLE SIMUL",
    features: ["Características Destacadas", "Rendimiento Ultra Rápido de 55W: Diseñado para la máxima exigencia. Con una salida individual de hasta 55W tanto en su puerto USB-C como en su cable integrado, es capaz de cargar a máxima velocidad smartphones, tablets, consolas portátiles e incluso laptops compatibles con USB-C.", "Cable USB-C Integrado y Reforzado: Cuenta con un cable de nailon trenzado de 22 cm sumamente duradero, probado para soportar más de 10,000 ciclos de flexión y conexión. ¿Lo mejor? ¡Funciona también como una práctica correa de transporte para llevarlo con total comodidad!", "Celdas de Alta Densidad 21700 (10,000mAh): Utiliza la tecnología avanzada de baterías de iones de litio 21700, ofreciendo una eficiencia energética superior, mayor vida útil y una capacidad de 10,000mAh completamente autorizada y segura para abordar aviones (Airline-safe).", "Pantalla Digital Inteligente de 1.18”: Mantén el control absoluto en tiempo real. Su pantalla integrada te muestra de forma precisa el porcentaje de batería restante, el vataje (potencia) de carga actual y el estado de entrada/salida de energía.", "Carga Triple Simultánea: ¡Energía para todo tu ecosistema! Permite cargar hasta 3 dispositivos al mismo tiempo utilizando el cable USB-C integrado, el puerto USB-C y el puerto USB-A (con una distribución inteligente y estable de 15W compartidos cuando se usan todos a la vez).", "Compatibilidad Global Absoluta: Soporta los protocolos de carga rápida más populares del mercado, incluyendo PD 3.0, QC 3.0, SCP, FCP, Samsung 45W y POCO 55W. Es el aliado perfecto para dispositivos Apple, Samsung, Xiaomi y más.", "Protección de Seguridad Avanzada: Equipado con un sistema de chips inteligentes de protección dual que resguardan activamente tus dispositivos contra sobretensiones, sobrecorrientes, sobrecargas, cortocircuitos y sobrecalentamiento.", "Diseño Compacto y Viajero: Con un peso ultra ligero de aproximadamente 249g y un tamaño sumamente compacto, está diseñado para deslizarse sin esfuerzo en cualquier bolsillo, bolso o kit de viaje."],
  },

  {
    id: "cargador-usb-c-30w-nexode-robot-gan",
    alta: "2026-07-24",
    name: "CARGADOR USB-C 30W NEXODE ROBOT GaN",
    sku: "15550",
    cat: "energia", brand: "ugreen",
    price: 250, oldPrice: null, rating: 4.7, reviews: 0, badge: null,
    img: "img/productos/ugreen-cargador-usbc-30w-nexcode.jpg",
    gallery: ["img/productos/ugreen-cargador-usbc-30w-nexcode.jpg", "img/productos/ugreen-cargador-usbc-30w-nexode-details.jpg", "img/productos/ugreen-cargadorusbc-startplay.jpg"],
    desc: "CARGADOR USB-C 30W NEXODE ROBOT GaN*PANTALLA LED QUE MUESTRA DIFERENTES EXPRESIONES*PROTECCION ELECTRICA MULTIPLE",
    features: ["Cargador RobotGan","UsbC RotGan 30w para tu iphone 14 pro Max de 0 a 55% en solo 30 minutos", "Pantalla LED", "Sistema de seguridad Múltiple", "Cargador para auriculares", "Teléfonos móviles", "Tabletas e incluso MacBook Air"],
  },

  {
    id: "adaptador-multipuerto-usb-c-a-vga-hdmi",
    alta: "2026-07-24",
    name: "ADAPTADOR MULTIPUERTO USB-C a VGA/HDMI",
    sku: "50505",
    cat: "redes", brand: "ugreen",
    price: 375, oldPrice: null, rating: 4.7, reviews: 0, badge: null,
    img: "img/productos/adaptador-multipuerto.webp",
    gallery: ["img/productos/adaptador-multipuerto.webp"],
    desc: "Expande la conectividad de tu computadora de forma rápida y segura con el Hub USB 3.0 UGREEN de 4 puertos. Convierte un solo puerto USB en 4 puertos USB 3.0, ideales para conectar memorias USB, discos duros, teclado, mouse, impresoras y otros periféricos al mismo tiempo, Velocidad de transferencia de hasta 5 Gbps, permitiendo transferir 1 GB en aproximadamente 3 segundos, Cable integrado de 1 metro, Conexión estable y segura, Protección inteligente",
    features: ["5GBPS ALTA VELOCIDAD", "CABLE DE 1M", "4X USB 3.0", "INDICADOR LED"],
  },
  {
    id: "cable-usb-a-2-0-a-usb-c-ugreen",
    alta: "2026-08-08",
    name: "CABLE USB-A 2.0 a USB-C UGREEN",
    sku: "60116",
    cat: "redes", brand: "ugreen",
    price: 45, oldPrice: null, rating: 4.7, reviews: 0, badge: null,
    img: "img/productos/CABLE-USB-A-2.0-USB-C.webp",
    gallery: ["img/productos/CABLE-USB-A-2.0-USB-C.webp"],
    desc: "Carga y sincroniza tus dispositivos de forma rápida y segura con el cable USB-A a USB-C UGREEN. Soporta carga rápida de hasta 5V/3A y transferencia de datos de hasta 480 Mbps, ideal para smartphones, tablets y otros dispositivos con puerto USB-C. Además, es compatible con las tecnologías de carga rápida QC 3.0, AFC y FCP, ofreciendo un rendimiento confiable y eficiente para el uso diario.",
    features: ["Entrada: USB-C macho", "Salida: USB-A macho", "Función: Carga y sincronización de datos", "Carga rápida 5V/3A", "Transmisión de datos de alta velocidad 480Mbps", "Carcasa ABS de alta calidad y cubierta de PVC", "Dura hasta 10 veces más que los cables estándar", "Carga inteligente y segura", "Chip inteligente que protege la batería de daños", "Duradero y flexible con cable de blindaje interno múltiple", "Compatible con QC3.0/AFC/FCP"],
  },

  {
    id: "cargador-ugreen-nexode-rg-65w-gris",
    alta: "2026-08-08",
    name: "CARGADOR UGREEN NEXODE RG 65W GRIS",
    sku: "15570",
    cat: "energia", brand: "ugreen",
    price: 505, oldPrice: null, rating: 4.7, reviews: 0, badge: null,
    img: "img/productos/cargador-ugreen-nexode-rg-65w-gris.webp",
    gallery: ["img/productos/cargador-ugreen-nexode-rg-65w-gris.webp"],
    desc: "El UGREEN Nexode RG 65W incorpora tecnología GaN para ofrecer una carga rápida, eficiente y segura en un diseño compacto con estilo de robot. Cuenta con 2 puertos USB-C y 1 puerto USB-A 3.0, permitiendo cargar hasta tres dispositivos al mismo tiempo. Además, sus botas magnéticas extraíbles le dan un toque original y práctico, convirtiéndolo en el accesorio perfecto para el hogar, la oficina o los viajes.",
    features: ["CARGADOR UGREEN NEXODE RG 65W GRIS", "ROBOT GAN CON BOTAS MAGNETICAS EXTRAIBLES", "PUERTOS USB TIPO-Cx2*USB A 3.0", "Peso 0.24 Kg", "PANTALLA LED"],
  },

  {
    id: "adaptador-ethernet-gigabit-usb-3-0",
    alta: "2026-08-08",
    name: "ADAPTADOR ETHERNET GIGABIT USB 3.0",
    sku: "20256",
    cat: "redes", brand: "ugreen",
    price: 215, oldPrice: null, rating: 4.7, reviews: 0, badge: null,
    img: "img/productos/UGREEN-ADAPTADOR-ETHERNET-GIGABIT-USB-3.0.webp",
    gallery: ["img/productos/UGREEN-ADAPTADOR-ETHERNET-GIGABIT-USB-3.0.webp"],
    desc: "Conecta tu computadora a una red cableada de alta velocidad con este adaptador Ethernet Gigabit USB 3.0. Compatible con redes de 10/100/1000 Mbps, ofrece una conexión estable y rápida para trabajar, jugar o realizar videollamadas sin interrupciones. Su interfaz USB 3.0 proporciona velocidades de transferencia de hasta 5 Gbps, garantizando un excelente rendimiento y una instalación rápida y sencilla. Ideal para laptops y equipos que no cuentan con puerto Ethernet integrado.",
    features: ["Red cableada más rápida y estable que Wi-Fi.", "Velocidad de Internet de hasta 1000 Mbps.", "Compatible con la mayoría de dispositivos USB A.", "Compatible con versiones anteriores de USB 2.0.", "Carcasa de aluminio elegante y duradera.", "Tamaño compacto y portátil.", "Chip AX88179A de alto rendimiento."],
  },

  {
    id: "adaptador-usb-type-c-10-100-1000m",
    alta: "2026-08-08",
    name: "ADAPTADOR USB Type C 10/100/1000M",
    sku: "50737",
    cat: "redes", brand: "ugreen",
    price: 240, oldPrice: null, rating: 4.7, reviews: 0, badge: null,
    img: "img/productos/adaptador-usb-type-c.webp",
    gallery: ["img/productos/adaptador-usb-type-c.webp"],
    desc: "Disfruta de una conexión a Internet rápida y estable con este adaptador USB-C a Ethernet Gigabit RJ45. Compatible con redes de 10/100/1000 Mbps, ofrece un rendimiento confiable para videollamadas, streaming, juegos y trabajo en línea. Es compatible con Thunderbolt 3 y una amplia variedad de laptops, tablets y otros dispositivos con puerto USB-C, brindando una conexión sencilla y de alto rendimiento donde la necesites.",
    features: ["Streaming con Ethernet", "compatible con Thunderbolt 3", "sin puerto RJ45", "Transmisión Super Rápida", "velocidad de ethernet hasta 1000 Mbps", "adaptador Ethernet USB C", "compatible con los celulares, tablets, ordenadores con puerto USB C", "sistemas de Android de versión 7.0 o superior", "plug y play para sistemas de windows 11/10/8/8.1, Mac OS, iOS y andriod", "Compacto y Portáti", "Compatible con QC3.0/AFC/FCP"],
  },

  {
    id: "hub-usb-c-4-en-1-gigabit",
    alta: "2026-08-08",
    name: "HUB USB-C 4 EN 1 GIGABIT",
    sku: "60600",
    cat: "redes", brand: "ugreen",
    price: 300, oldPrice: null, rating: 4.7, reviews: 0, badge: null,
    img: "img/productos/hub-usb-c-4-en-1-gigabit.webp",
    gallery: ["img/productos/hub-usb-c-4-en-1-gigabit.webp"],
    desc: "Amplía la conectividad de tu equipo con este Hub USB-C de diseño elegante en aluminio. Incorpora 3 puertos USB 3.0 con velocidades de transferencia de hasta 5 Gbps, ideales para conectar memorias, discos duros, teclados y otros periféricos. Además, su puerto Ethernet Gigabit proporciona una conexión a Internet rápida, estable y confiable, perfecta para trabajar, estudiar o disfrutar de contenido en línea sin interrupciones.",
    features: ["HUB USB-C CON0126 PUERTO ETHERNET", "3xUSB 3.0 HASTA 5Gbps", "PUERTO ETHERNET GIGABIT", "DISEÑO EN ALUMINIO ELEGANTE"],
  },

  {
    id: "case-externo-usb-3-0-hdd-ssd-2-5",
    alta: "2026-08-08",
    name: "CASE EXTERNO USB 3.0 HDD, SSD 2.5",
    sku: "30847",
    cat: "almacenamiento", brand: "ugreen",
    price: 135, oldPrice: null, rating: 4.7, reviews: 0, badge: null,
    img: "img/productos/ugreen-case-externo-usb.webp",
    gallery: ["img/productos/ugreen-case-externo-usb.webp"],
    desc: "Convierte tu disco duro o SSD de 2.5\" SATA en una unidad externa de alta velocidad con este case USB 3.0. Ofrece transferencias de hasta 5 Gbps, soporta discos de hasta 6 TB y cuenta con tecnología UASP, que proporciona un rendimiento hasta un 70% más rápido que el USB 3.0 convencional. Es la solución ideal para ampliar almacenamiento, realizar copias de seguridad o transportar tus archivos de forma rápida y segura.",
    features: ["Dimensiones del producto\t5,04 x 3,23 x 1,26 pulgadas", "Peso del artículo\t4.6 onzas", "Capacidad de almacenamiento digital 10 TB", "Dispositivos compatibles SSD y HDD de 2,5\"", "Interfaz de disco duro\tSerial ATA-600", "Tecnología de conectividad USB", "Factor de forma del disco duro\t2,5 pulgadas", "Tamaño del disco duro 10 TB", "Factor de forma 2,5 pulgadas", "Velocidad de lectura 100 megabytes por segundo", "Tamaño de la caché 6"],
  },

  {
    id: "soporte-de-telefono-en-forma-de-cascada",
    alta: "2026-08-08",
    name: "SOPORTE DE TELEFONO EN FORMA DE CASCADA",
    sku: "20473",
    cat: "tecnologia", brand: "ugreen",
    price: 170, oldPrice: null, rating: 4.5, reviews: 0, badge: null,
    img: "img/productos/soporte-de-telefono.webp",
    gallery: ["img/productos/soporte-de-telefono.webp"],
    desc: "SOPORTE DE TELEFONO EN FORMA DE CASCADA, ANGULO DE VISION REGULABLE SIN OBSTRUCCION DE LA VISTA PARA EL CONDUCTOR*VENTOSA CON AJUSTE 360°COMPATIBILIDAD UNIVERSAL",
    features: ["Compatibilidad universal.", "Rotación de 360°", "Ángulo de visión ajustable", "No obstruye la visión del conductor.", "Ventosa de alta adherencia para una fijación segura."],
  },

  {
    id: "cable-de-carga-usb-c-a-usb-c-pd60w",
    alta: "2026-08-08",
    name: "Cable de carga USB-C a USB-C PD60W",
    sku: "50997",
    cat: "redes", brand: "ugreen",
    price: 55, oldPrice: null, rating: 4.7, reviews: 0, badge: "Nuevo",
    img: "img/productos/ugreen-cable-de-carga-usb-c-usb-c.webp",
    gallery: ["img/productos/ugreen-cable-de-carga-usb-c-usb-c.webp"],
    desc: "Carga tus dispositivos de manera rápida y eficiente con este cable USB-C a USB-C con tecnología Power Delivery (PD) de hasta 60W y 3A. Diseñado para smartphones, tablets, laptops y otros dispositivos compatibles con USB-C, ofreciendo una conexión segura, estable y de alto rendimiento para tus necesidades diarias.",
    features: ["Carga rápida Power Delivery (PD) de hasta 60W", "Corriente de hasta 3A", "Conector USB-C a USB-C", "Alta compatibilidad", "Diseño resistente y duradero", "Diseño resistente y duradero"],
  },

  {
    id: "cable-de-carga-usb-a-a-usb-c-18w",
    alta: "2026-08-08",
    name: "CABLE DE CARGA USB-A a USB-C 18W",
    sku: "60126",
    cat: "redes", brand: "ugreen",
    price: 66, oldPrice: null, rating: 4.5, reviews: 0, badge: null,
    img: "img/productos/cable-de-carga-usb-a-usb-c-18w.webp",
    gallery: ["img/productos/cable-de-carga-usb-a-usb-c-18w.webp"],
    desc: "Cable USB-A a USB-C con carga rápida de hasta 18W, diseñado con revestimiento de nylon trenzado ultra resistente y conectores de aleación de aluminio para mayor durabilidad. Ideal para cargar y sincronizar dispositivos con una velocidad de transferencia de hasta 480 Mbps.",
    features: ["Carga rápida de hasta 18W", "Transferencia de datos de hasta 480 Mbps.", "Uso versátil en cualquier lugar", "Compatibilidad universal", "Revestimiento de nylon trenzado ultra resistente", "Compatible con dispositivos USB-C.", "Longitud de 3.3 pies (1 metro aprox.), ideal para escritorio, auto y viajes.", "Sistemas de Android de versión 7.0 o superior", "Plug y play para sistemas de windows 11/10/8/8.1, Mac OS, iOS y andriod", "Compacto y Portátil", "Compatible con QC3.0/AFC/FCP"],
  },

  {
    id: "cargador-de-vehiculo-60w-cable-retractil",
    alta: "2026-08-08",
    name: "CARGADOR DE VEHICULO 60W CABLE RETRACTIL",
    sku: "55212B",
    cat: "energia", brand: "ugreen",
    price: 340, oldPrice: null, rating: 4.7, reviews: 0, badge: null, stock: 0,
    img: "img/productos/cargador-de-vehiculo-60w-cable-retractil.webp",
    gallery: ["img/productos/cargador-de-vehiculo-60w-cable-retractil.webp"],
    desc: "Cargador para vehículo de 60W con cable retráctil de 0,7 m, diseñado para cargar hasta dos dispositivos al mismo tiempo gracias a sus puertos USB-C y USB-A. Compatible con vehículos de 12 a 24V, ofrece carga rápida, segura y un diseño práctico para mantener el interior del automóvil ordenado.",
    features: ["Potencia máxima de 60W.", "1 puerto USB-C + 1 puerto USB-A.", "Cable retráctil de 0,7 m.", "Compatible con vehículos de 12-24V.", "Salida máxima de 7.4A para una carga eficiente.", "Conectividad Versátil 1C1A"],
  },

  {
    id: "cable-de-impresora-ugreen-am-a-bm",
    alta: "2026-08-08",
    name: "CABLE DE IMPRESORA UGREEN AM A BM",
    sku: "20847",
    cat: "redes", brand: "ugreen",
    price: 52, oldPrice: null, rating: 4.5, reviews: 0, badge: null,
    img: "img/productos/cable-de-impresora-ugreen-am-a-bm.webp",
    gallery: ["img/productos/cable-de-impresora-ugreen-am-a-bm.webp"],
    desc: "Cable de impresora UGREEN USB 2.0 AM a BM de 2 metros, diseñado para ofrecer una conexión estable y de alta velocidad de hasta 480 Mbps. Cuenta con conectores chapados en oro, resistentes a la corrosión, que garantizan una excelente calidad de transmisión y una mayor durabilidad. Ideal para conectar impresoras, escáneres y otros dispositivos con puerto USB-B",
    features: ["USB 2.0 de alta velocidad (480 Mbps).", "Conectores chapados en oro anticorrosión.", "Longitud de 2 metros.", "Compatible con impresoras, escáneres y dispositivos USB-B.", "Cable resistente y de larga duración."],
  },

  {
    id: "mouse-inalambrico-ultra-slim-negro",
    alta: "2026-08-08",
    name: "MOUSE INALAMBRICO ULTRA SLIM NEGRO",
    sku: "90372",
    cat: "escritorio", brand: "ugreen",
    price: 205, oldPrice: null, rating: 4.7, reviews: 0, badge: null,
    img: "img/productos/mouse-inalambrico-ultra-slim-negro.webp",
    gallery: ["img/productos/mouse-inalambrico-ultra-slim-negro.webp"],
    desc: "Mouse inalámbrico Ultra Slim color negro, con diseño moderno, ligero y ergonómico para una experiencia de uso cómoda. Ofrece una resolución ajustable de hasta 4000 DPI, doble modo de conexión 2.4 GHz y Bluetooth 5.0, y 5 botones para una navegación más eficiente. Ideal para trabajar, estudiar o uso diario en computadoras y laptops",
    features: ["Diseño Ultra Slim, elegante y portátil.", "Resolución ajustable hasta 4000 DPI.", "Conectividad 2.4 GHz y Bluetooth 5.0.", "5 botones para mayor productividad.", "Compatible con Windows, macOS y otros dispositivos con Bluetooth.", "Funciona con 1 batería AA (no incluida)."],
  },

  {
    id: "transmisor-hdmi-4k-inalambrico",
    alta: "2026-08-08",
    name: "TRANSMISOR HDMI 4K INALAMBRICO",
    sku: "90909A",
    cat: "redes", brand: "ugreen",
    price: 2355, oldPrice: null, rating: 4.7, reviews: 0, badge: null,
    img: "img/productos/transmisor-hdmi-4k-inalambrico.webp",
    gallery: ["img/productos/transmisor-hdmi-4k-inalambrico.webp"],
    desc: "Transmisor HDMI 4K Inalámbrico diseñado para transmitir audio y video en alta definición sin necesidad de cables. Ofrece una resolución de hasta 4K y un alcance inalámbrico de hasta 50 metros, brindando una conexión estable y de baja latencia. Es ideal para salas de reuniones, presentaciones, aulas, eventos, entretenimiento en el hogar y señalización digital",
    features: ["Transmisión inalámbrica de audio y video HDMI.", "Resolución de hasta 4K para una imagen nítida y de alta calidad.", "Alcance de hasta 50 metros en espacios abiertos.", "Instalación Plug & Play, sin necesidad de software.", "Conexión estable y de baja latencia.", "Compatible con laptops, computadoras, proyectores, televisores, monitores y otros dispositivos con puerto HDMI"],
  },

  {
    id: "cargador-robot-gan-65w-purpura",
    alta: "2026-08-08",
    name: "CARGADOR ROBOT GaN 65W PURPURA",
    sku: "35314",
    cat: "energia", brand: "ugreen",
    price: 533, oldPrice: null, rating: 4.7, reviews: 0, badge: null,
    img: "img/productos/robot-cargador-purpura-65w-purpura.webp",
    gallery: ["img/productos/robot-cargador-purpura-65w-purpura.webp"],
    desc: "Cargador Robot GaN 65W Púrpura con tecnología GaN II, diseñado para ofrecer una carga rápida, potente e inteligente en un formato compacto. Cuenta con 3 puertos de carga rápida (2 USB-C y 1 USB-A), permitiendo cargar hasta tres dispositivos simultáneamente. Compatible con los protocolos PD 3.0 y QC 4.0, ajusta automáticamente la potencia para brindar una carga eficiente y segura a smartphones, tablets, laptops y otros dispositivos.",
    features: ["Potencia máxima de 65W.", "Tecnología GaN II: mayor eficiencia, menor calentamiento y diseño compacto.", "3 puertos de carga rápida: 2 USB-C + 1 USB-A.", "Compatible con Power Delivery (PD 3.0) y Quick Charge (QC 4.0).", "Carga inteligente que optimiza la energía según el dispositivo conectado.", "Protección contra sobrecarga, sobrecalentamiento, sobrecorriente y cortocircuitos.", "Ideal para cargar celulares, tablets, laptops, audífonos y otros dispositivos USB."],
  },

  {
    id: "presentador-puntero-laser-ugreen",
    alta: "2026-08-08",
    name: "PRESENTADOR PUNTERO LASER UGREEN",
    sku: "50654",
    cat: "tecnologia", brand: "ugreen",
    price: 150, oldPrice: null, rating: 4.7, reviews: 0, badge: null,
    img: "img/productos/presentador-puntero-laser.webp",
    gallery: ["img/productos/presentador-puntero-laser.webp"],
    desc: "PRESENTADOR PUNTERO LASER UGREEN*ALCANCE 100M CONEXION INALAMBRICA 2.4GHz*COMPATIBLE MAC/WINDOWS*DISEÑO ERGONOMICO*BOTONES INTUITIVOS",
    features: ["Alcance inalámbrico de hasta 100 metros.", "Conexión estable de 2.4 GHz.", "Puntero láser de alta visibilidad para destacar información.", "Diseño ergonómico para un uso cómodo.", "Botones intuitivos para controlar las presentaciones con facilidad.", "Compatible con Windows y macOS.", "Ideal para reuniones, conferencias, capacitaciones, clases y exposiciones"],
  },

  {
    id: "cargador-de-65w-multipuertos",
    alta: "2026-08-08",
    name: "CARGADOR DE 65W MULTIPUERTOS",
    sku: "70773",
    cat: "energia", brand: "ugreen",
    price: 597, oldPrice: null, rating: 4.7, reviews: 0, badge: null,
    img: "img/productos/cargador-65w-multipuertos.webp",
    gallery: ["img/productos/cargador-65w-multipuertos.webp"],
    desc: "Cargador Multipuertos GaN de 65W diseñado para ofrecer una carga rápida, potente y eficiente para todos tus dispositivos. Incorpora 4 puertos (3 USB-C y 1 USB-A), permitiendo cargar hasta 4 dispositivos al mismo tiempo sin perder rendimiento. Gracias a la tecnología GaN, ofrece mayor eficiencia energética, menor generación de calor y un diseño ligero y compacto, ideal para el hogar, la oficina o los viajes.",
    features: ["Potencia máxima de 65W.", "4 puertos de carga: 3 USB-C + 1 USB-A.", "Carga simultánea para hasta 4 dispositivos.", "Tecnología GaN para una carga más rápida, segura y eficiente.", "Diseño compacto, ligero y fácil de transportar.", "Protección contra sobrecarga, sobrecalentamiento, sobrecorriente y cortocircuitos.", "Compatible con smartphones, tablets, laptops, audífonos y otros dispositivos USB"],
  },

  {
    id: "power-bank-nexode-12000mah-100w",
    alta: "2026-08-08",
    name: "POWER BANK NEXODE 12000mAh 100W",
    sku: "35526B",
    cat: "energia", brand: "ugreen",
    price: 776, oldPrice: null, rating: 4.7, reviews: 0, badge: null,
    img: "img/productos/power-bank-nexode-12000mah-100w.webp",
    gallery: ["img/productos/power-bank-nexode-12000mah-100w.webp"],
    desc: "Power Bank UGREEN Nexode 12000 mAh 100W diseñado para mantener tus dispositivos siempre cargados con la máxima velocidad. Ofrece carga rápida de hasta 100W y recarga rápida de 65W, siendo ideal para smartphones, tablets, laptops y otros dispositivos USB. Incorpora una pantalla LCD que muestra el nivel de batería y el estado de carga en tiempo real. Además, es compatible con múltiples protocolos de carga rápida, garantizando una carga eficiente y segura para una amplia variedad de equipos.",
    features: ["Capacidad de 12.000 mAh.", "Potencia de salida de hasta 100W..", "Recarga rápida de 65W para reducir el tiempo de espera.", "Compatible con protocolos PD, PPS, QC, AFC, FCP y SCP.", "Pantalla LCD para visualizar el nivel de batería y la potencia de carga.", "Puertos: 1 USB-C y 1 USB-A.", "Ideal para cargar laptops, smartphones, tablets, consolas portátiles y otros dispositivos compatibles."],
  },

  {
    id: "mochila-ugreen-gris-oscuro-para-laptop",
    alta: "2026-08-08",
    name: "MOCHILA UGREEN GRIS OSCURO PARA LAPTOP",
    sku: "90798",
    cat: "escritorio", brand: "ugreen",
    price: 408, oldPrice: null, rating: 4.7, reviews: 0, badge: null,
    img: "img/productos/mochila-ugreen-gris-oscuro-laptop.webp",
    gallery: ["img/productos/mochila-ugreen-gris-oscuro-laptop.webp"],
    desc: "Mochila UGREEN Gris Oscuro para Laptop de hasta 15.6\", diseñada para brindar comodidad, protección y estilo en el día a día. Su amplio espacio interior permite transportar de forma segura una laptop, documentos y accesorios, mientras que su diseño moderno y elegante la hace ideal para la oficina, universidad, viajes o uso diario. Fabricada con materiales resistentes y de alta calidad para ofrecer mayor durabilidad.",
    features: ["Compatible con laptops de hasta 15.6 pulgadas.", "Compartimento acolchado para proteger el equipo.", "Amplio espacio para accesorios, documentos y objetos personales.", "Diseño moderno y elegante en color gris oscuro.", "Material resistente y duradero para uso diario.", "Correas acolchadas y ajustables para mayor comodidad.", "Ideal para trabajo, estudio, viajes y uso cotidiano."],
  },

  {
    id: "set-de-destornilladores-38-en-1",
    alta: "2026-08-08",
    name: "SET DE DESTORNILLADORES 38 EN 1",
    sku: "80459",
    cat: "tecnologia", brand: "ugreen",
    price: 175, oldPrice: null, rating: 4.7, reviews: 0, badge: null,
    img: "img/productos/set-de-destornilladores-38-en-1.webp",
    gallery: ["img/productos/set-de-destornilladores-38-en-1.webp"],
    desc: "Set de Destornilladores de Precisión 38 en 1, ideal para la reparación y mantenimiento de dispositivos electrónicos. Incluye 38 puntas intercambiables de alta precisión y un mango ergonómico con agarre antideslizante que proporciona mayor comodidad y control. Su estuche compacto y organizador facilita el almacenamiento y transporte, convirtiéndolo en la herramienta perfecta para técnicos, aficionados y uso doméstico.",
    features: ["Kit de 38 herramientas en 1.", "Puntas de precisión para múltiples tipos de tornillos.", "Mango ergonómico con agarre antideslizante.", "Fabricado con materiales resistentes para mayor durabilidad.", "Estuche compacto con organizador para un fácil transporte.", "Ideal para reparar celulares, laptops, computadoras, consolas, relojes, cámaras, gafas y otros dispositivos electrónicos."],
  },

  {
    id: "adaptador-usb-bluetooth-5-3",
    alta: "2026-08-08",
    name: "ADAPTADOR USB BLUETOOTH 5.3",
    sku: "90225",
    cat: "escritorio", brand: "ugreen",
    price: 145, oldPrice: null, rating: 4.7, reviews: 0, badge: null,
    img: "img/productos/adaptador-usb.webp",
    gallery: ["img/productos/adaptador-usb.webp"],
    desc: "Adaptador USB Bluetooth 5.3 UGREEN diseñado para añadir conectividad Bluetooth de última generación a computadoras y laptops. Gracias a la tecnología Bluetooth 5.3, ofrece una conexión más rápida, estable y con menor consumo de energía, permitiendo conectar de forma inalámbrica audífonos, parlantes, teclados, mouse, controles de videojuegos y otros dispositivos compatibles. Su diseño ultracompacto lo hace ideal para mantenerlo conectado sin ocupar espacio",
    features: ["Tecnología Bluetooth 5.3 para una conexión más rápida y estable.", "Conecta audífonos, parlantes, teclados, mouse, controles y otros dispositivos Bluetooth", "Baja latencia y menor consumo de energía.", "Diseño compacto y portátil tipo nano.", "Instalación rápida Plug & Play (según el sistema operativo).", "Compatible con computadoras y laptops con puerto USB", "Ideal para actualizar equipos sin Bluetooth integrado o mejorar su conectividad inalámbrica."],
  },

  {
    id: "ugreen-echobuds-magic-blanco",
    alta: "2026-08-08",
    name: "UGREEN ECHOBUDS MAGIC BLANCO",
    sku: "55137",
    cat: "tecnologia", brand: "ugreen",
    price: 690, oldPrice: null, rating: 4.7, reviews: 0, badge: null,
    img: "img/productos/ugreen-echobuds-magic-blanco.webp",
    gallery: ["img/productos/ugreen-echobuds-magic-blanco.webp"],
    desc: "UGREEN EchoBuds Magic Blanco son audífonos inalámbricos diseñados para ofrecer un sonido nítido, llamadas claras y una experiencia de uso cómoda durante todo el día. Gracias a su conexión Bluetooth de alta estabilidad, brindan un emparejamiento rápido y una transmisión fluida. Su diseño ergonómico y compacto garantiza un ajuste seguro, mientras que el estuche de carga portátil proporciona mayor autonomía para acompañarte en el trabajo, el estudio, los viajes o tus actividades diarias",
    features: ["Sonido de alta calidad con audio claro y equilibrado.", "Conectividad Bluetooth rápida y estable.", "Micrófono integrado para llamadas con manos libres..", "Controles táctiles para música, llamadas y asistente de voz.", "Estuche de carga compacto para mayor autonomía.", "Diseño ergonómico, ligero y cómodo para uso prolongado", "Compatibles con smartphones, tablets, laptops y otros dispositivos con Bluetooth"],
  },

  {
    id: "funda-para-portatil-gris",
    alta: "2026-08-08",
    name: "FUNDA PARA PORTATIL GRIS",
    sku: "30325",
    cat: "tecnologia", brand: "ugreen",
    price: 205, oldPrice: null, rating: 4.7, reviews: 0, badge: null,
    img: "img/productos/funda-portatil-gris.webp",
    gallery: ["img/productos/funda-portatil-gris.webp"],
    desc: "Funda para Portátil UGREEN Gris diseñada para brindar una protección segura y elegante a tu laptop. Fabricada con materiales de alta calidad, protege el equipo contra golpes, rayones, polvo y salpicaduras, mientras su interior suave ayuda a evitar daños durante el transporte. Su diseño delgado, moderno y ligero la convierte en el accesorio ideal para llevar tu portátil a la oficina, universidad o de viaje.",
    features: ["Compatible con laptops de diferentes tamaños (según el modelo).", "Exterior resistente al agua y al desgaste.", "Interior acolchado y suave para una mayor protección.", "Protege contra golpes, rayones, polvo y salpicaduras.", "Diseño delgado, elegante y fácil de transportar.", "Cierre de alta calidad para mayor seguridad.", "Ideal para el trabajo, estudio, viajes y uso diario."],
  },

  {
    id: "hitune-s3-auriculares-open-ear",
    alta: "2026-08-08",
    name: "HITUNE S3 AURICULARES OPEN-EAR",
    sku: "45785",
    cat: "audio-video", brand: "ugreen",
    price: 299, oldPrice: null, rating: 4.7, reviews: 0, badge: null,
    img: "img/productos/hitune-s3-auriculares-open-ear.webp",
    gallery: ["img/productos/hitune-s3-auriculares-open-ear.webp"],
    desc: "UGREEN HiTune S3 Open-Ear son audífonos inalámbricos de diseño abierto que ofrecen comodidad, libertad y seguridad durante todo el día. Equipados con Bluetooth 5.4, brindan una conexión rápida y estable, mientras que su cancelación de ruido ambiental (ENC) mejora la calidad de las llamadas. Disfruta de un sonido nítido, baja latencia para juegos y videos, carga ultrarrápida y hasta 30 horas de autonomía con el estuche de carga. Su certificación IPX5 los hace resistentes al agua y al sudor, ideales para entrenamientos y actividades al aire libre.",
    features: ["Diseño Open-Ear para mayor comodidad y percepción del entorno.", "Bluetooth 5.4 con conexión rápida y estable.", "Cancelación de ruido ambiental (ENC) para llamadas más claras.", "Baja latencia, ideal para gaming y contenido multimedia.", "Hasta 30 horas de batería con el estuche de carga.", "Carga ultrarrápida mediante USB-C.", "Certificación IPX5, resistente al agua y al sudor.", "Controles táctiles inteligentes y ajuste ligero para uso prolongado"],
  },

  {
    id: "cargador-robot-ugreen-uno-qi2-2en1-15w",
    alta: "2026-08-08",
    name: "CARGADOR ROBOT UGREEN UNO Qi2 2EN1 15W",
    sku: "45775",
    cat: "energia", brand: "ugreen",
    price: 687, oldPrice: null, rating: 4.7, reviews: 0, badge: null,
    img: "img/productos/cargador-robot-ugreen-uno-qi2-2en1-15w.webp",
    gallery: ["img/productos/cargador-robot-ugreen-uno-qi2-2en1-15w.webp"],
    desc: "Cargador Robot UGREEN Uno Qi2 2 en 1 de 15W combina un diseño innovador con tecnología de carga inalámbrica de última generación. Equipado con certificación Qi2, ofrece una carga rápida y eficiente de hasta 15W para smartphones compatibles, además de cargar audífonos inalámbricos de forma simultánea. Su potente sujeción magnética mantiene el teléfono firmemente en su lugar, mientras que la pantalla frontal con expresiones animadas aporta un toque moderno y divertido. Gracias a su ajuste de ángulo de hasta 70°, permite utilizar el dispositivo cómodamente durante la carga.",
    features: ["Cargador inalámbrico 2 en 1 para smartphone y audífonos.", "Tecnología Qi2 con carga rápida de hasta 15W.", "Pantalla frontal con expresiones animadas durante la carga.", "Potente sujeción magnética para una fijación segura.", "Ajuste de inclinación hasta 70° para mayor comodidad.", "Diseño compacto, moderno y elegante.", "Ideal para escritorio, oficina o mesa de noche.", "Compatible con dispositivos que admiten carga inalámbrica Qi2/MagSafe y estuches de audífonos con carga inalámbrica."],
  },

  {
    id: "estuche-ugreen-nintendo-switch",
    alta: "2026-08-08",
    name: "Estuche Ugreen Nintendo Switch",
    sku: "50275",
    cat: "tecnologia", brand: "ugreen",
    price: 198, oldPrice: null, rating: 4.7, reviews: 0, badge: null,
    img: "img/productos/estuche-ugrenn-nintendo-switch.webp",
    gallery: ["img/productos/estuche-ugrenn-nintendo-switch.webp"],
    desc: "Nintendo Switch (Tamaño S) diseñado para brindar una protección segura y práctica a tu consola. Fabricado con un material rígido resistente a golpes, protege el equipo contra impactos, rayones y polvo durante el transporte. Su interior está diseñado para almacenar la Nintendo Switch y sus principales accesorios, manteniéndolos organizados y siempre listos para usar. Gracias a su diseño compacto y elegante, es el compañero ideal para llevar tu consola a cualquier lugar.",
    features: ["Compatible con Nintendo Switch.", "Tamaño S, compacto y fácil de transportar.", "Exterior rígido y resistente a golpes.", "Protege contra rayones, polvo e impactos.", "Espacio para guardar la consola y sus principales accesorios.", "Cierre resistente para mayor seguridad.", "Ideal para viajes, uso diario y almacenamiento seguro"],
  },

  {
    id: "localizador-fine-track-ugreen-para-ios",
    alta: "2026-08-08",
    name: "LOCALIZADOR FINE TRACK UGREEN PARA iOS",
    sku: "45298",
    cat: "tecnologia", brand: "ugreen",
    price: 395, oldPrice: null, rating: 4.7, reviews: 0, badge: null,
    img: "img/productos/localizador-fine-finetrack-ugreen-ios.webp",
    gallery: ["img/productos/localizador-fine-finetrack-ugreen-ios.webp"],
    desc: "localizador inteligente diseñado para ayudarte a encontrar fácilmente tus objetos personales. Compatible con la red Apple Find My, permite ubicar llaves, billeteras, mochilas, equipaje y otros artículos desde tu iPhone o iPad. Su diseño ultrafino de solo 1,7 mm facilita colocarlo en cualquier lugar, mientras que su alarma de 80 dB ayuda a localizar tus pertenencias rápidamente. Además, cuenta con carga magnética, batería de larga duración y certificación IP68, ofreciendo resistencia al agua y al polvo para un uso confiable en cualquier entorno.",
    features: ["Compatible con la red Apple Find My.", "Diseño ultrafino de 1,7 mm", "Alarma de 80 dB para una localización rápida.", "Carga magnética con batería de larga duración", "Certificación IP68, resistente al agua y al polvo", "Ideal para llaves, billeteras, mochilas, equipaje y otros objetos personales.", "COD: 45298"],
  },

  {
    id: "soporte-para-celulares-multiangulo",
    alta: "2026-08-08",
    name: "SOPORTE PARA CELULARES MULTIANGULO",
    sku: "80708",
    cat: "escritorio", brand: "ugreen",
    price: 165, oldPrice: null, rating: 4.7, reviews: 0, badge: null,
    img: "img/productos/soporte-celulares-multiangulo.webp",
    gallery: ["img/productos/soporte-celulares-multiangulo.webp"],
    desc: "Diseñado para brindar una experiencia cómoda y segura al utilizar tu smartphone. Fabricado en aluminio premium, combina resistencia, estabilidad y un elegante acabado. Su ángulo regulable permite ajustar la posición ideal para videollamadas, clases, trabajo o entretenimiento. Además, su diseño plegable y compacto facilita llevarlo a cualquier lugar, mientras que la base de silicona antideslizante protege el dispositivo y evita deslizamientos.",
    features: ["Diseño multiángulo con ajuste de inclinación.", "Fabricado en aluminio premium de alta resistencia.", "Plegable y compacto, fácil de transportar.", "Base y apoyos con silicona antideslizante para mayor estabilidad.", "Compatible con la mayoría de smartphones.", "Ideal para videollamadas, ver videos, trabajar, estudiar o navegar con mayor comodidad.", "Diseño moderno y elegante para el hogar, la oficina o los viajes."],
  },

  {
    id: "mouse-ergonomico-vertical-rosado",
    alta: "2026-08-08",
    name: "MOUSE ERGONOMICO VERTICAL ROSADO",
    sku: "55917",
    cat: "escritorio", brand: "ugreen",
    price: 236, oldPrice: null, rating: 4.7, reviews: 0, badge: null,
    img: "img/productos/mouse-ergonomico-vertical-rosado.webp",
    gallery: ["img/productos/mouse-ergonomico-vertical-rosado.webp"],
    desc: "diseñado para brindar mayor comodidad durante largas jornadas de trabajo o estudio. Su diseño vertical ayuda a mantener una postura más natural de la mano, reduciendo la fatiga en la muñeca. Cuenta con conectividad inalámbrica de 2.4 GHz, botones multifunción y DPI ajustable (1000/1600/2000/4000) para adaptarse a diferentes tareas, desde navegación diaria hasta trabajos que requieren mayor precisión. Su elegante acabado en color rosado combina estilo y funcionalidad.",
    features: ["Diseño ergonómico vertical para mayor comodidad.", "Conexión inalámbrica de 2.4 GHz estable y confiable.", "DPI ajustable: 1000 / 1600 / 2000 / 4000.", "Botones multifunción para una navegación más eficiente.", "Alta precisión y respuesta rápida.", "Compatible con computadoras y laptops con puerto USB.", "Funciona con 1 pila AA (no incluida).", "Ideal para oficina, estudio, trabajo remoto y uso diario."],
  },


  // --- zkteco  Seguridad y biometría --- ///
  {
    id: "control-asistencia-pantalla-2-8",
    alta: "2026-09-08",
    name: "CONTROL ASISTENCIA *PANTALLA 2,8\"",
    sku: "SenseFP M2",
    cat: "seguridad", brand: "zkteco",
    price: 1755, oldPrice: null, rating: 4.7, reviews: 0, badge: null,
    img: "img/productos/SENSEFPM2-image-0-1762979622132.webp",
    gallery: ["img/productos/SENSEFPM2-image-0-1762979622132.webp"],
    desc: "CONTROL ACCESO/ASISTENCIA *PANTALLA 2,8\" *CAP. HUELLA: 3000 *CAP. RFID: 3000 (125kHz) *CAP. REG.:150000 *COM:TCP/IP, USB Host *FUENTE 12V 1,5A (SI INCLUYE)",
    features: [],
  },
  


  /* ---- Novedades (2026-08-04) ----
     Productos agregados a partir de imágenes ya subidas sin usar. Faltan precios reales:
     busca "TODO precio" y reemplaza el 0 por el precio en Bs de cada uno. */

  /* ---- TUPPERWARE ---- */
   {
    id: "set-de-4-vasos-naranja-maravilla-450ml-con-tapa-tupperware",
    alta: "2026-08-13",
    name: "Set de 4 Vasos Naranja Maravilla 450ml con tapa Tupperware",
    cat: "escritorio", brand: "tupperware",
    price: 215, oldPrice: null, rating: 4.8, reviews: 0, badge: null,
    img: "img/productos/tuperware-setdevasosnaranja.webp",
    gallery: ["img/productos/tuperware-setdevasosnaranja.webp"],
    desc: "Set De 4 Vasos Maravilla Capacidad 450ml Con Tapa Tupperware",
    features: ["Set de 4 unidades", "Capacidad de 450 ml cada uno", "Color naranja", "Resistentes y duraderos", "Aptos para lavavajillas", "Cap. total 470ml Cap. de uso 450ml", "0.7cm * Alto 17cm c/u", "5432 * Naranja"],
  },

  {
    id: "jarra-servifresco-tupperware",
    alta: "2026-08-13",
    name: "Jarra Servifresco Tupperware",
    cat: "escritorio", brand: "tupperware",
    price: 210, oldPrice: null, rating: 4.8, reviews: 0, badge: null,
    img: "img/productos/tupperware-servifresco1.webp",
    gallery: ["img/productos/tupperware-servifresco1.webp"],
    desc: "El Servifresco Tupperware es una jarra o contenedor líquido ergonómico diseñado específicamente para refrigerar, conservar y servir bebidas frías ocupando el mínimo espacio",
    features: ["Capacidad óptima: Cuenta con un volumen de 2 litros, ideal para jugos, tés helados, agua o leche.", "Cuerpo translúcido: Su material rígido y semi-transparente permite ver el nivel y tipo de líquido sin necesidad de destapar el recipiente.", "Asa ergonómica: Facilita un agarre seguro para transportarlo de la cocina a la mesa o llevarlo a picnics.", "No es apto para introducir bebidas calientes.", "No se recomienda para almacenar bebidas gaseosas o carbonatadas.", "1.9L * 7.8 x 18cm  Alto 20.5 cm", "Incluye Asa", "5275 * Naranja"],
  },

  {
    id: "taza-termica-tupperware-big-t-1-1-para-gimnasio",
    alta: "2026-08-13",
    name: "Taza térmica Tupperware Big T 1.1 para gimnasio",
    cat: "escritorio", brand: "tupperware",
    price: 760, oldPrice: null, rating: 4.8, reviews: 0, badge: null,
    img: "img/productos/tupperware-bigt.webp",
    gallery: ["img/productos/tupperware-bigt.webp"],
    desc: "Big T Tipo: Vaso térmico Color: Azul Capacidad: 1,1 litros Dimensiones: 28,2 cm de alto x 9,2 cm de diámetro Marca: Tupperware Original Incluye: 1 vaso con tapa y pajita extraíble Características principales: Mantiene la temperatura durante largas horas | Duradero | Libre de BPA Material: Acero inoxidable 304, polipropileno y silicona",
    features: ["Capacidad de volumen: 1,1 L", "Tiempo de conservación de la bebida fría: 8 horas.", "¿Cuánto tiempo se mantendrá caliente la bebida?: 8 horas.", "Material: acero inoxidable 304.", "Incluye tapa.", "Tiene asa.", "Alto 28.2 cm, x 9.2 diametro", "Acero inoxidable 304"],
  },

  {
    id: "vaso-tupperware-big-t-630-ml-celeste",
    alta: "2026-08-29",
    name: "Vaso Tupperware Big T 630 ml  celeste",
    cat: "escritorio", brand: "tupperware",
    price: 560, oldPrice: null, rating: 4.7, reviews: 0, badge: null,
    img: "img/productos/BIGT630.webp",
    gallery: ["img/productos/BIGT630.webp"],
    desc: "Ya sea en el auto, la oficina o la cafetería, nuestro nuevo Vaso big T de Tupperware® estará a tu lado, siempre lleno. Porque, entre menos veces lo tengas que rellenar, tendrás más espacio para la diversión.",
    features: ["A prueba de derrames*: Su tapa con cierre abatible mantiene tu bebida donde debe estar: en tu vaso.", "Popote o boquilla: Puedes usarlo para beber como quieras, ya que cuenta con dos aberturas: una para usarlo con popote/pajilla y otra que funciona como boquilla.", "Bebidas frías o calientes: Nuestro diseño de doble pared funciona para mantener tu bebida tanto caliente hasta por 2 horas como fría hasta por 11 horas o incluso helada hasta 28 horas)**.", "Acabado protector: Ya que cuenta con un recubrimiento de polvo que evita las raspaduras, el Vaso big T siempre estará listo para que le tomes fotos todos los días desde que lo compres.", "Compatible con le portavasos: Cuenta con una base más pequeña que encaja fácilmente en la mayoría de los portavasos, lo cual convierte al big T en tu copiloto ideal."],
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
      img: "img/productos/dt3-silla-de-oficina-negro.webp",
      alt: "Silla ergonómica Lucmar en un espacio de trabajo luminoso",
      badgeN: "100%", badgeT: "diseño ergonómico",
    },
    {
      eyebrow: "Tecnología de escritorio",
      title: "Conecta todo, *sin enredos*",
      text: "Hubs, estaciones de carga y accesorios que ordenan tus cables y potencian tu setup.",
      cta1: { text: "Ver tecnología", href: "catalogo.html?cat=tecnologia" },
      cta2: { text: "Destacados", href: "#destacados" },
      img: "img/productos/ugreen-revodok-6-in-1.webp",
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

  /* ---- Productos destacados ----
     Los "id" de los productos que salen en la portada, en este mismo orden.
     Para cambiar cuáles se muestran, reordena o reemplaza los id de esta lista
     (el id de cada producto está en su ficha, campo "id").
     La cuadrícula se ve pareja con 4 u 8; con otro número queda una fila corta.
     Si dejas la lista vacía [], vuelve a elegirlos solo por valoración.        */
  destacados: [
    "mini-cargador-ugreen-25w-gan-fast",
    "pack-x-2-mochila-estuche-kalex",
    "jbl-grip-ai-sound-boost-negro",
    "amazon-alexa-echo-spot-2024-negro",
    "combo-teclado-mouse-inalambrico-targus",
    "shelly-1-gen3",
    "cable-usb-a-2-0-a-usb-c-ugreen",
    "taza-termica-tupperware-big-t-1-1-para-gimnasio",
  ],

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
