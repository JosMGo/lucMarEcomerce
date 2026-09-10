/* Compara el catálogo de tu PC con el que está publicado en lucmar.net y dice
   qué se va a subir: productos nuevos, cambios de precio/nombre/foto y bajas.

   Es informativo: si no hay internet o la web no responde, avisa y sigue. Nunca
   debe impedir preparar el deploy. Lo llama PREPARAR-DEPLOY.bat al terminar. */
const fs = require("fs");
const vm = require("vm");
const path = require("path");

const RAIZ = path.join(__dirname, "..");
const URL_PROD = "https://www.lucmar.net/js/products.js";

function leer(codigo) {
  return vm.runInNewContext(codigo + "\n;({PRODUCTS});", {}).PRODUCTS;
}

function precio(n) {
  return "Bs " + Number(n).toLocaleString("es-BO");
}

(async () => {
  const local = leer(fs.readFileSync(path.join(RAIZ, "js/products.js"), "utf8"));

  let publicados;
  try {
    const ctrl = new AbortController();
    const corte = setTimeout(() => ctrl.abort(), 20000);
    const resp = await fetch(URL_PROD + "?t=" + Date.now(), { signal: ctrl.signal });
    clearTimeout(corte);
    if (!resp.ok) throw new Error("HTTP " + resp.status);
    publicados = leer(await resp.text());
  } catch (e) {
    console.log("  (No se pudo consultar lucmar.net: " + e.message + ")");
    console.log("  Se sube la carpeta igual; esto era solo el resumen de cambios.");
    return;
  }

  const enWeb = new Map(publicados.map((p) => [p.id, p]));
  const enPC = new Set(local.map((p) => p.id));

  const nuevos = local.filter((p) => !enWeb.has(p.id));
  const bajas = publicados.filter((p) => !enPC.has(p.id));
  const cambios = [];
  for (const p of local) {
    const v = enWeb.get(p.id);
    if (!v) continue;
    const q = [];
    if (v.price !== p.price) q.push("precio " + precio(v.price) + " -> " + precio(p.price));
    if (v.name !== p.name) q.push("nombre");
    if (v.img !== p.img) q.push("foto");
    if (q.length) cambios.push({ p, q });
  }

  console.log("  Publicado en lucmar.net: " + publicados.length + " productos");
  console.log("  En tu PC:                " + local.length + " productos");
  console.log("");

  if (!nuevos.length && !cambios.length && !bajas.length) {
    console.log("  No hay cambios: la web ya tiene todo esto.");
    return;
  }

  if (nuevos.length) {
    console.log("  PRODUCTOS NUEVOS (" + nuevos.length + "):");
    nuevos.forEach((p) => console.log("    + " + p.name + "  ·  " + precio(p.price)));
    console.log("");
  }
  if (cambios.length) {
    console.log("  CAMBIOS (" + cambios.length + "):");
    cambios.forEach(({ p, q }) => console.log("    ~ " + p.name + "  ·  " + q.join(", ")));
    console.log("");
  }
  if (bajas.length) {
    console.log("  YA NO ESTAN (" + bajas.length + "):");
    bajas.forEach((p) => console.log("    - " + p.name));
    console.log("");
  }
})();
