"""
Genera una pagina suelta por producto en /p/ y su imagen de vista previa.

Por que hace falta: WhatsApp, Facebook y Google no ejecutan JavaScript cuando
leen una pagina para armar la vista previa. Como todas las fichas eran el mismo
producto.html y el producto se cargaba por JS desde ?id=, no habia forma de que
vieran la foto ni el nombre. Estas paginas llevan esos datos ya escritos en el
HTML, en las etiquetas og:.

Lo que produce:
  p/<id>.html        la ficha, identica a producto.html pero con sus etiquetas
  img/og/<id>.jpg    la foto en 1200x630 (WhatsApp no es fiable con .webp)
  sitemap.xml        con las fichas dentro, para que Google las indexe

producto.html?id=... sigue funcionando: los enlaces ya compartidos no se rompen.
No se ejecuta solo. Lo lanza generar-fichas.bat (doble clic).
"""
import io, json, os, re, sys, shutil

AQUI = os.path.dirname(os.path.abspath(__file__))
RAIZ = os.path.dirname(AQUI)
DOMINIO = "https://www.lucmar.net"
DIR_FICHAS = os.path.join(RAIZ, "p")
DIR_OG = os.path.join(RAIZ, "img", "og")
OG_W, OG_H = 1200, 630

try:
    from PIL import Image
except ImportError:
    print("ERROR: falta Pillow. Instalalo con:  pip install pillow")
    sys.exit(1)


def esc(t):
    """Texto seguro para meterlo dentro de un atributo HTML."""
    return (str(t or "").replace("&", "&amp;").replace("<", "&lt;")
            .replace(">", "&gt;").replace('"', "&quot;"))


def resumen(p, limite=160):
    """Descripcion corta y limpia para la vista previa y para Google."""
    t = re.sub(r"[*_]+", " ", str(p.get("desc") or ""))
    t = re.sub(r"\s+", " ", t).strip()
    if not t:
        t = p["name"]
    if len(t) > limite:
        t = t[:limite].rsplit(" ", 1)[0] + "..."
    return t


def precio(p, moneda):
    return "%s %s" % (moneda, format(int(p["price"]), ",d").replace(",", "."))


def rutas_a_subcarpeta(html):
    """La ficha vive en /p/, un nivel por debajo: sus rutas relativas suben uno.

    Se dejan intactas las absolutas (http, //, /), las anclas y los data:.
    """
    def arreglar(m):
        attr, valor = m.group(1), m.group(2)
        if re.match(r"^(https?:|//|/|#|data:|mailto:|tel:|javascript:)", valor):
            return m.group(0)
        return '%s="../%s"' % (attr, valor)
    return re.sub(r'\b(href|src)="([^"]+)"', arreglar, html)


def cabecera(p, cat_nombre, marca_nombre, moneda):
    """Las etiquetas que leen WhatsApp, Facebook y Google."""
    url = "%s/p/%s.html" % (DOMINIO, p["id"])
    img = "%s/img/og/%s.jpg" % (DOMINIO, p["id"])
    desc = resumen(p)
    titulo = "%s — Lucmar" % p["name"]
    ficha = {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": p["name"],
        "image": [img],
        "description": desc,
        "sku": p.get("sku") or p["id"],
        "brand": {"@type": "Brand", "name": marca_nombre},
        "category": cat_nombre,
        "offers": {
            "@type": "Offer",
            "url": url,
            "priceCurrency": "BOB",
            "price": p["price"],
            "availability": ("https://schema.org/OutOfStock"
                             if p.get("stock") == 0 else "https://schema.org/InStock"),
            "seller": {"@type": "Organization", "name": "Lucmar"},
        },
    }
    return """<title>%s</title>
  <meta name="description" content="%s">
  <link rel="canonical" href="%s">
  <meta property="og:type" content="product">
  <meta property="og:site_name" content="Lucmar">
  <meta property="og:locale" content="es_BO">
  <meta property="og:title" content="%s">
  <meta property="og:description" content="%s">
  <meta property="og:url" content="%s">
  <meta property="og:image" content="%s">
  <meta property="og:image:secure_url" content="%s">
  <meta property="og:image:type" content="image/jpeg">
  <meta property="og:image:width" content="%d">
  <meta property="og:image:height" content="%d">
  <meta property="og:image:alt" content="%s">
  <meta property="product:price:amount" content="%s">
  <meta property="product:price:currency" content="BOB">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="%s">
  <meta name="twitter:description" content="%s">
  <meta name="twitter:image" content="%s">
  <script type="application/ld+json">
%s
  </script>""" % (
        esc(titulo), esc(desc), esc(url),
        esc("%s · %s" % (p["name"], precio(p, moneda))), esc(desc), esc(url),
        esc(img), esc(img), OG_W, OG_H, esc(p["name"]),
        esc(p["price"]), esc(p["name"]), esc(desc), esc(img),
        json.dumps(ficha, ensure_ascii=False, indent=2),
    )


def imagen_og(p):
    """Foto del producto centrada en un lienzo 1200x630 blanco, en JPG.

    El lienzo apaisado es lo que hace que WhatsApp muestre la vista previa
    grande; con una imagen cuadrada la encoge a una miniatura al lado del texto.
    """
    origen = os.path.join(RAIZ, str(p.get("img") or "").replace("/", os.sep))
    destino = os.path.join(DIR_OG, p["id"] + ".jpg")
    if not p.get("img") or not os.path.exists(origen):
        return None
    # se rehace solo si la foto es mas nueva que la vista previa
    if os.path.exists(destino) and os.path.getmtime(destino) >= os.path.getmtime(origen):
        return destino
    im = Image.open(origen)
    im = im.convert("RGBA") if im.mode in ("RGBA", "LA", "P") else im.convert("RGB")
    margen = 40
    escala = min((OG_W - margen * 2) / im.width, (OG_H - margen * 2) / im.height)
    if escala < 1:
        im = im.resize((max(1, int(im.width * escala)), max(1, int(im.height * escala))), Image.LANCZOS)
    lienzo = Image.new("RGB", (OG_W, OG_H), (255, 255, 255))
    pos = ((OG_W - im.width) // 2, (OG_H - im.height) // 2)
    lienzo.paste(im, pos, im if im.mode == "RGBA" else None)
    lienzo.save(destino, "JPEG", quality=86, optimize=True, progressive=True)
    return destino


def actualizar_sitemap(ids):
    """Mete las fichas en el sitemap, entre marcas, sin tocar el resto."""
    ruta = os.path.join(RAIZ, "sitemap.xml")
    if not os.path.exists(ruta):
        return 0
    s = io.open(ruta, encoding="utf-8").read()
    # Fuera las URLs producto.html?id=... : cada producto sale ahora en /p/ y
    # anunciar las dos versiones le da a Google contenido duplicado (ademas,
    # algunas apuntaban a productos ya borrados). Las paginas viejas siguen
    # funcionando para quien tenga el enlace guardado; solo no se anuncian.
    s = re.sub(r"[ \t]*<url>(?:(?!</url>).)*producto\.html\?id=(?:(?!</url>).)*</url>\r?\n?", "", s, flags=re.S)
    ini, fin = "  <!-- fichas de producto: generado -->", "  <!-- fin fichas de producto -->"
    filas = "\n".join(
        '  <url><loc>%s/p/%s.html</loc><changefreq>weekly</changefreq><priority>0.6</priority></url>'
        % (DOMINIO, i) for i in ids)
    bloque = "%s\n%s\n%s" % (ini, filas, fin)
    if ini in s and fin in s:
        s = re.sub(re.escape(ini) + r".*?" + re.escape(fin), lambda _: bloque, s, flags=re.S)
    else:
        s = s.replace("</urlset>", bloque + "\n</urlset>")
    io.open(ruta, "w", encoding="utf-8", newline="").write(s)
    return len(ids)


def main():
    datos = json.load(io.open(os.path.join(AQUI, "catalogo.json"), encoding="utf-8"))
    productos = datos["PRODUCTS"]
    moneda = datos["LUCMAR"].get("currency", "Bs")
    cats = {c["slug"]: c["name"] for c in datos["CATEGORIES"]}
    marcas = {b["slug"]: b["name"] for b in datos["BRANDS"]}

    plantilla = io.open(os.path.join(RAIZ, "producto.html"), encoding="utf-8").read()
    # el <head> se sustituye entero; el cuerpo se reaprovecha tal cual
    if "<title>Producto — Lucmar</title>" not in plantilla:
        print("ERROR: producto.html no tiene el <title> esperado; revisa la plantilla.")
        sys.exit(1)

    os.makedirs(DIR_FICHAS, exist_ok=True)
    os.makedirs(DIR_OG, exist_ok=True)

    hechas, sin_foto = [], []
    for p in productos:
        html = plantilla
        # 1. fuera la cabecera generica de la plantilla. Ojo al orden: si se
        #    quitara despues de insertar la nueva, el replace se llevaria por
        #    delante el og:type recien puesto, que es identico al de la plantilla.
        html = re.sub(r'\n\s*<meta name="description" content="Detalle de producto[^"]*">', "", html)
        html = html.replace('\n  <meta property="og:type" content="product">', "")
        # 2. cabecera propia (titulo, descripcion y etiquetas og:)
        html = html.replace("<title>Producto — Lucmar</title>", cabecera(
            p, cats.get(p.get("cat"), ""), marcas.get(p.get("brand"), ""), moneda))
        # 3. la ficha esta un nivel mas abajo
        html = rutas_a_subcarpeta(html)
        # 4. el id, para que main.js sepa que producto pintar sin mirar la URL
        html = html.replace('<script src="../js/products.js',
                            '<script>window.LUCMAR_PID = %s;</script>\n  <script src="../js/products.js'
                            % json.dumps(p["id"], ensure_ascii=False))
        io.open(os.path.join(DIR_FICHAS, p["id"] + ".html"), "w", encoding="utf-8", newline="").write(html)
        hechas.append(p["id"])
        if not imagen_og(p):
            sin_foto.append(p["id"])

    # fichas e imagenes de productos que ya no existen
    vigentes = set(hechas)
    sobras = 0
    for f in os.listdir(DIR_FICHAS):
        if f.endswith(".html") and f[:-5] not in vigentes:
            os.remove(os.path.join(DIR_FICHAS, f)); sobras += 1
    for f in os.listdir(DIR_OG):
        if f.endswith(".jpg") and f[:-4] not in vigentes:
            os.remove(os.path.join(DIR_OG, f)); sobras += 1

    n = actualizar_sitemap(hechas)
    print("fichas generadas en /p/ : %d" % len(hechas))
    print("vistas previas en img/og: %d" % (len(hechas) - len(sin_foto)))
    if sin_foto:
        print("sin foto (usaran la del sitio): %d -> %s" % (len(sin_foto), ", ".join(sin_foto[:5])))
    if sobras:
        print("archivos de productos borrados que se limpiaron: %d" % sobras)
    print("sitemap.xml actualizado con %d fichas" % n)


if __name__ == "__main__":
    main()
