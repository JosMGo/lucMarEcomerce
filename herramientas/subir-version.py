"""
Sube en uno el numero de version de las direcciones ?v=NN de css/styles.css,
js/products.js y js/main.js en todas las paginas.

Para que sirve: el navegador guarda esos archivos un mes para no volver a
bajarlos. Ese numero es lo unico que le dice "este archivo cambio, bajalo otra
vez". Si no subiera en cada publicacion, alguien que ya visito la web seguiria
viendo el catalogo y los precios viejos hasta que caducara su copia.

Por eso lo ejecuta PREPARAR-DEPLOY.bat antes de nada, siempre, sin depender de
que nadie se acuerde. Subirlo de mas no cuesta nada: solo obliga a bajar de
nuevo tres archivos que juntos pesan unos 60 KB comprimidos.
"""
import io, os, re, sys

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PATRON = re.compile(r"(\?v=)(\d+)")


def main():
    paginas = sorted(f for f in os.listdir(RAIZ) if f.endswith(".html"))
    versiones, tocados = set(), 0

    for nombre in paginas:
        ruta = os.path.join(RAIZ, nombre)
        s = io.open(ruta, encoding="utf-8").read()
        if not PATRON.search(s):
            continue
        for m in PATRON.finditer(s):
            versiones.add(int(m.group(2)))
        nuevo = PATRON.sub(lambda m: m.group(1) + str(int(m.group(2)) + 1), s)
        io.open(ruta, "w", encoding="utf-8", newline="").write(nuevo)
        tocados += 1

    if not tocados:
        print("  No habia ninguna direccion con ?v= que actualizar.")
        return

    antes = max(versiones) if versiones else 0
    print("  Version de los archivos: v%d -> v%d  (%d paginas)" % (antes, antes + 1, tocados))
    if len(versiones) > 1:
        print("  Aviso: habia versiones distintas entre paginas (%s)." % ", ".join("v%d" % v for v in sorted(versiones)))
        print("  Cada una ha subido en uno; si el aviso se repite, avisa a Claude.")


if __name__ == "__main__":
    main()
