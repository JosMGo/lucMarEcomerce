# Lucmar — Tienda de accesorios de oficina

Sitio web escaparate (catálogo) en **HTML + CSS + JavaScript puro**. No usa carrito:
cada producto tiene un botón que abre **WhatsApp** con el encargado de ventas y un
mensaje ya escrito con el nombre y precio del producto.

## Estructura

```
ecomerce/
├── index.html        · Página principal (hero, categorías, marcas, destacados, ofertas)
├── catalogo.html     · Catálogo con filtros (categoría, marca, precio, valoración) y buscador
├── producto.html     · Ficha de producto (?id=...) con galería y relacionados
├── admin.html        · Panel de carga (solo local, NO subir al hosting)
├── css/styles.css    · Todo el diseño (responsive, animaciones, tema)
├── js/products.js    · TUS DATOS: productos, marcas, categorías, WhatsApp, precios
├── js/main.js         · Lógica (render, WhatsApp, carrusel, filtros, menú móvil)
├── img/productos/ · img/marcas/ · img/categorias/ · img/inicio/   · aquí van tus fotos y logos
├── robots.txt · sitemap.xml
```

## Cómo cargar contenido

Hay dos formas. Ambas terminan en lo mismo: modificar `js/products.js`.

### Opción A — con el panel (`admin.html`), sin escribir código

1. Abre `admin.html` en el navegador (doble clic, o con el servidor local de más abajo).
2. Da de alta o edita productos, marcas, categorías, los textos de la portada y los ajustes.
   Todo se guarda solo en tu navegador aunque cierres la pestaña.
3. Pulsa **⬇ Descargar products.js** y **reemplaza** con ese archivo el que está en `js/products.js`.
4. Recarga el sitio.

Ten en cuenta:

- **Las fotos no se suben solas.** Al elegir un archivo el panel escribe la ruta correcta
  (y le da un nombre apto para web), pero tienes que copiar la imagen a mano dentro de
  `img/productos/`, `img/marcas/`, `img/categorias/` o `img/inicio/`.
- Cada descarga **regenera el archivo entero**. Si editaste `js/products.js` a mano después
  de la última vez que abriste el panel, pulsa **Restablecer** antes de trabajar, o perderás
  esos cambios.
- Si añades o quitas categorías, actualiza también los menús de `index.html`, `catalogo.html`
  y `producto.html`: esos enlaces están escritos a mano.
- **No subas `admin.html` al hosting.** Es solo para tu computadora.

### Opción B — a mano

Todo el catálogo vive en un único archivo: **`js/products.js`**. Se edita con
cualquier editor de texto. El flujo siempre es el mismo:

1. Copia la foto en la carpeta que le corresponde (`img/productos/`, `img/marcas/`,
   `img/categorias/` o `img/inicio/`).
2. Añade o edita la entrada en `js/products.js`.
3. Recarga el navegador. No hay compilación ni ningún paso más.

> **Nombres de archivo:** usa siempre minúsculas, sin espacios ni tildes
> (`hub-usbc.jpg`, no `Hub USB-C.JPG`). Los espacios y acentos rompen las rutas
> en la mayoría de servidores.

### Añadir un producto

Añade un bloque más dentro de la lista `PRODUCTS`. Ojo con la **coma final** de cada bloque:

```js
{
  id: "hub-usbc-7en1",              // único; aparece en producto.html?id=hub-usbc-7en1
  name: "Hub USB-C 7 en 1 con HDMI 4K",
  sku: "LUC-HUB-001",                   // opcional, tu código de inventario
  cat: "tecnologia", brand: "ugreen",   // deben coincidir con un slug de CATEGORIES y de BRANDS
  price: 210, oldPrice: null,           // oldPrice: null si no está en oferta
  rating: 4.7, reviews: 0,              // valoración mostrada
  badge: null,                          // null · "Nuevo" · "-24%"
  stock: 0,                             // opcional, ver abajo
  img: "img/productos/hub-usbc.jpg",
  gallery: ["img/productos/hub-usbc.jpg", "img/productos/hub-usbc-2.jpg"],
  desc: "Un párrafo explicando el beneficio principal del producto.",
  features: ["HDMI 4K@30Hz", "3× USB 3.0", "Carga PD 100 W"],
},
```

**Código del producto (`sku`).** Es opcional y libre: escribe el formato que uses en tu
inventario. Si lo pones, aparece bajo el nombre en la ficha (discreto, en gris) y se incluye
en el mensaje de WhatsApp que te llega, para que no te equivoques de modelo al preparar el
pedido. El panel avisa si repites un código que ya está en uso.

**Disponibilidad (`stock`).** Es opcional: si el producto no lleva el campo, se considera
disponible, así que no hace falta añadirlo a los que ya existen.

| Valor | Qué se ve |
|---|---|
| sin el campo | Disponible |
| `stock: 0` | Cinta **AGOTADO** sobre la foto, y el botón pasa a "Consultar cuándo llega" |
| `stock: 1` a `3` | "¡Últimas N unidades!" en la ficha |
| `stock: 25` | Disponible |

- `id` no debe repetirse y **no lo cambies** una vez publicado: es la URL del producto.
- Si `oldPrice` es mayor que `price`, conviene poner el descuento en `badge` (`"-24%"`).
- `gallery` puede llevar una sola imagen; si la dejas vacía, pon al menos la de `img`.

### Añadir una marca

En la lista `BRANDS`:

```js
{ slug: "ugreen", name: "UGREEN", tagline: "Conectividad y carga", logo: "img/marcas/ugreen.png" },
```

- `slug` es el identificador interno (minúsculas, sin espacios) y es lo que escribes
  en el campo `brand` de cada producto. Aparece en `catalogo.html?marca=ugreen`.
- `logo: ""` muestra el nombre en tipografía. Un PNG con fondo transparente queda mejor.
- Las marcas sin productos salen en el inicio como **"Próximamente"** y no ensucian los filtros.

### Añadir una categoría

En la lista `CATEGORIES`:

```js
{ slug: "tecnologia", name: "Accesorios tecnológicos", img: "img/categorias/tecnologia.jpg" },
```

`slug` es lo que escribes en el campo `cat` de los productos. Sale en el menú, en el
inicio y en los filtros del catálogo.

### Borrar algo

Elimina su bloque de la lista. **Antes de borrar una marca o una categoría**, cambia o
borra los productos que la usan: si un producto apunta a un `brand` o `cat` que ya no
existe, deja de aparecer en los filtros.

### Si el sitio se queda en blanco

Casi siempre es un error de sintaxis en `js/products.js`: una coma que falta, una
comilla sin cerrar o una llave de más. Abre la consola del navegador (**F12** →
pestaña *Console*) y te dirá la línea exacta.

## Cómo verlo

Abre `index.html` en el navegador. Para que todo funcione bien (rutas y galerías),
lo ideal es un pequeño servidor local:

```bash
# con Python
python -m http.server 8000
# luego abre http://localhost:8000
```

## Personalización rápida (todo en `js/products.js`)

### 1. Número de WhatsApp
```js
const LUCMAR = { whatsapp: "59177072715", ... }
```
Formato internacional, solo dígitos (código de país + número, sin `+` ni espacios).

### 2. Tus imágenes reales
Ahora las imágenes son **placeholders de Unsplash**. Para poner las tuyas:
1. Crea una carpeta `img/productos/`.
2. Copia tus fotos ahí (ideal cuadradas, 800×800 px o más, formato `.webp` o `.jpg`).
3. En cada producto, cambia el campo `img` y `gallery` por la ruta local:
   ```js
   img: "img/productos/organizador.jpg",
   gallery: ["img/productos/organizador-1.jpg", "img/productos/organizador-2.jpg"],
   ```
El código acepta tanto IDs de Unsplash como rutas locales automáticamente.
Si una imagen no carga, se muestra un placeholder con la marca (nunca se ve rota).

### 3. Productos, marcas y categorías
Edita las listas `PRODUCTS`, `BRANDS` y `CATEGORIES` (ver **Cómo cargar contenido** arriba).

Cada producto admite:
`id`, `name`, `cat`, `brand`, `price`, `oldPrice`, `rating`, `reviews`, `badge`, `img`, `gallery`, `desc`, `features`.

Cada marca admite `slug`, `name`, `tagline` y `logo`. Si dejas `logo: ""` se muestra el nombre
en tipografía; cuando tengas el logo, ponlo en `img/marcas/` y escribe la ruta.
Las marcas sin productos aparecen en el inicio como **"Próximamente"** y no ensucian los filtros.

**Marca y categoría son independientes:** un producto pertenece a una categoría *y* a una marca,
y el catálogo puede filtrar por ambas a la vez (`catalogo.html?marca=ugreen&cat=tecnologia`).

### 4. Textos de la página de inicio
Están en el objeto `HOME` de `js/products.js`:
barra superior, diapositivas del carrusel, franja de confianza, títulos de cada sección,
banner de ofertas y boletín.

Dos convenciones:
- En los **títulos**, el texto entre `*asteriscos*` se resalta en color de acento:
  `"Tu oficina, *ordenada* y con estilo"`.
- En los **enlaces** de botones, el valor `"whatsapp"` genera el enlace al chat de ventas.

### 5. Colores de la marca
En `css/styles.css`, sección `:root`: `--navy-*` (color principal) y `--amber-*` (acento).

## SEO incluido
- Etiquetas `title`, `description`, Open Graph y canónicas en cada página.
- Datos estructurados (JSON-LD) de tienda y de producto.
- `sitemap.xml` y `robots.txt` → cambia `https://www.lucmar.com/` por tu dominio real.
- Imágenes con `alt`, carga diferida (`lazy`) y formato optimizado.

## Accesibilidad y rendimiento
- Responsive (móvil, tablet, escritorio).
- Animaciones sutiles que respetan `prefers-reduced-motion`.
- Navegación por teclado y foco visible.
