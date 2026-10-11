import { readFileSync } from "node:fs";

const css = readFileSync(new URL("../theme.css", import.meta.url), "utf8");
const open = (css.match(/{/g) || []).length;
const close = (css.match(/}/g) || []).length;

if (open !== close) {
  console.error(`theme.css invalido: ${open} "{" vs ${close} "}"`);
  process.exit(1);
}
console.log(`theme.css OK (${open} blocos, ${css.length} bytes)`);
