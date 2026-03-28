/**
 * After `npm run build`, inlines main JS/CSS and small public assets into one HTML file
 * for static hosting (upload a single file to your domain).
 */
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const buildDir = path.join(root, "build");
const indexPath = path.join(buildDir, "index.html");
const outPath = path.join(root, "mahishmati-media-standalone.html");

function toDataUri(absPath, mime) {
  if (!fs.existsSync(absPath)) return null;
  const buf = fs.readFileSync(absPath);
  return `data:${mime};base64,${buf.toString("base64")}`;
}

function resolveBuildAsset(webPath) {
  const clean = webPath.replace(/^\//, "");
  return path.join(buildDir, clean);
}

if (!fs.existsSync(indexPath)) {
  console.error("Run `npm run build` first. Missing:", indexPath);
  process.exit(1);
}

let html = fs.readFileSync(indexPath, "utf8");

const scriptSrcs = [...html.matchAll(/<script defer="defer" src="([^"]+)"><\/script>/g)].map((m) => m[1]);
const styleHrefs = [
  ...html.matchAll(/<link href="(\/static\/css\/[^"]+)" rel="stylesheet">/g),
].map((m) => m[1]);

if (!scriptSrcs.length || !styleHrefs.length) {
  console.error("Could not find script/link tags in build/index.html");
  process.exit(1);
}

const jsParts = scriptSrcs.map((src) => {
  const abs = resolveBuildAsset(src);
  if (!fs.existsSync(abs)) {
    console.error("Missing JS:", abs);
    process.exit(1);
  }
  return fs.readFileSync(abs, "utf8");
});
const js = jsParts.join("\n;\n");

let css = styleHrefs
  .map((href) => {
    const abs = resolveBuildAsset(href);
    if (!fs.existsSync(abs)) {
      console.error("Missing CSS:", abs);
      process.exit(1);
    }
    return fs.readFileSync(abs, "utf8");
  })
  .join("\n");
css = css.replace(/\/\*# sourceMappingURL=[^*]+\*\//g, "");

const faviconUri = toDataUri(path.join(buildDir, "favicon.ico"), "image/x-icon");
const logoUri = toDataUri(path.join(buildDir, "logo192.png"), "image/png");
let manifestUri = null;
const manifestPath = path.join(buildDir, "manifest.json");
if (fs.existsSync(manifestPath)) {
  const manifestJson = fs.readFileSync(manifestPath, "utf8");
  manifestUri = `data:application/manifest+json;base64,${Buffer.from(manifestJson, "utf8").toString("base64")}`;
}

for (const src of scriptSrcs) {
  html = html.replace(`<script defer="defer" src="${src}"></script>`, "");
}
for (const href of styleHrefs) {
  html = html.replace(
    new RegExp(`<link href="${href.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}" rel="stylesheet">`),
    ""
  );
}

if (faviconUri) {
  html = html.replace('href="/favicon.ico"', `href="${faviconUri}"`);
} else {
  html = html.replace(/<link rel="icon" href="\/favicon\.ico"\/?>/, "");
}
if (logoUri) {
  html = html.replace('href="/logo192.png"', `href="${logoUri}"`);
} else {
  html = html.replace(/<link rel="apple-touch-icon" href="\/logo192\.png"\/?>/, "");
}
if (manifestUri) {
  html = html.replace('href="/manifest.json"', `href="${manifestUri}"`);
} else {
  html = html.replace(/<link rel="manifest" href="\/manifest\.json"\/?>/, "");
}

const inject = `
<style>${css}</style>
<script>${js}</script>
`;

html = html.replace("</body>", `${inject}</body>`);

const banner =
  "\n<!-- Mahishmati Media: single-file bundle (npm run build:single). " +
  "App HashRouter use karti hai — saare pages isi file par #/about, #/contact jaise URLs se chalenge. -->\n";
if (html.startsWith("<!doctype html>")) {
  html = html.replace("<!doctype html>", `<!doctype html>${banner}`);
} else if (html.startsWith("<!DOCTYPE html>")) {
  html = html.replace("<!DOCTYPE html>", `<!DOCTYPE html>${banner}`);
}

fs.writeFileSync(outPath, html, "utf8");
console.log("Wrote", outPath);
console.log("Size MB:", (fs.statSync(outPath).size / (1024 * 1024)).toFixed(2));
