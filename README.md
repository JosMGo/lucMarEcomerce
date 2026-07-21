# Lucmar — Tienda de accesorios de oficina

Sitio web escaparate (catálogo) en **HTML + CSS + JavaScript puro**. No usa carrito:
cada producto tiene un botón que abre **WhatsApp** con el encargado de ventas y un
mensaje ya escrito con el nombre y precio del producto.

## Estructura

```
ecomerce/
├── index.html        · Página principal (hero, categorías, destacados, ofertas)
├── catalogo.html     · Catálogo con filtros (categoría, precio, valoración) y buscador
├── producto.html     · Ficha de producto (?id=...) con galería y relacionados
├── css/styles.css    · Todo el diseño (responsive, animaciones, tema)
├── js/products.js    · ⭐ TUS DATOS: productos, categorías, WhatsApp, precios
├── js/main.js         · Lógica (render, WhatsApp, carrusel, filtros, menú móvil)
├── robots.txt · sitemap.xml
```

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
const LUCMAR = { whatsapp: "59162185698", ... }
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

### 3. Productos, precios y categorías
Edita las listas `PRODUCTS` y `CATEGORIES`. Cada producto admite:
`id`, `name`, `cat`, `price`, `oldPrice`, `rating`, `reviews`, `badge`, `img`, `gallery`, `desc`, `features`.

### 4. Colores de la marca
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
