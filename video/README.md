# Videos

Videos de categorías y productos. Se enlazan desde `js/products.js`.

## Cómo usarlos

En `CATEGORIES` (js/products.js), el campo `video` es opcional y acepta la ruta local:

```js
{ slug: "ergonomia", name: "Ergonomía y confort",
  img: "1600585154340-be6161a56a0c",
  video: "video/ergonomia-silla-dt3.mp4" },
```

El campo `img` sigue siendo obligatorio: es el respaldo que se muestra si el
video no carga, y la imagen que ven quienes activaron "reducir movimiento".

## Convenciones

- **Nombres en minúsculas, con guiones**: `ergonomia-silla-dt3.mp4`.
  Windows no distingue mayúsculas de minúsculas, pero el servidor sí: un
  nombre en MAYÚSCULAS enlazado en minúsculas da 404 al publicar el sitio.
- **Formato `.mp4`** (códec H.264 + AAC). Es el único que reproducen todos
  los navegadores sin conversión.
- **Sin audio**: los videos se reproducen silenciados y en bucle, así que la
  pista de sonido solo suma peso. Quítala antes de subir si puedes.
- **Peso**: apunta a menos de 2 MB por video. Son decorativos y cargan en la
  portada; uno de 20 MB hace lenta la página en datos móviles.
- **Tamaño**: 720p sobra. Las tarjetas de categoría se ven a ~300 px de ancho.
