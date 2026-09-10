/* Vuelca js/products.js a un JSON que pueda leer el generador de fichas.
   Se ejecuta solo desde generar-fichas.bat; no forma parte del sitio. */
const fs = require("fs");
const vm = require("vm");
const path = require("path");

const raiz = path.join(__dirname, "..");
const src = fs.readFileSync(path.join(raiz, "js/products.js"), "utf8");
const d = vm.runInNewContext(src + "\n;({LUCMAR,CATEGORIES,BRANDS,PRODUCTS,HOME});", {});

fs.writeFileSync(
  path.join(__dirname, "catalogo.json"),
  JSON.stringify({ LUCMAR: d.LUCMAR, CATEGORIES: d.CATEGORIES, BRANDS: d.BRANDS, PRODUCTS: d.PRODUCTS }, null, 1)
);
console.log("catalogo.json: " + d.PRODUCTS.length + " productos");
