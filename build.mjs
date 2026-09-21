// Génère index.html (FR) et en.html (EN) à partir de src/template.html et src/i18n.mjs.
// Usage : node build.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { t, langs } from './src/i18n.mjs';

const BASE = 'https://casaprefab.ca/';
// Adresse qui reçoit les demandes du formulaire, par FormSubmit (aucun serveur à tenir).
// À remplacer par info@casaprefab.ca dès que la boîte est ouverte, puis relancer build + deploy.
const FORM_TO = 'miguel.dimas@klimbo.co';
const POSTAL = 'Montréal, Québec, Canada';

const url = f => BASE + (f === 'index.html' ? '' : f);
const here = path.dirname(fileURLToPath(import.meta.url));
const tpl = fs.readFileSync(path.join(here, 'src', 'template.html'), 'utf8');

// Parité des clés : une langue qui dérive casse la génération au lieu de publier un trou.
const keys = Object.keys(t.fr);
for (const l of Object.keys(t)) {
  const missing = keys.filter(k => !(k in t[l]));
  const extra = Object.keys(t[l]).filter(k => !keys.includes(k));
  if (missing.length || extra.length) throw new Error(`i18n ${l} : manquantes ${missing.join(',')} ; en trop ${extra.join(',')}`);
}

for (const [l, cfg] of Object.entries(langs)) {
  const d = { ...t[l], lang: cfg.code, locale: cfg.locale, form_to: FORM_TO, postal: POSTAL, privacy_file: cfg.privacy };
  // Le sélecteur de langue reste RELATIF : le site doit fonctionner tel quel en local, en
  // préversion et sur le domaine. Seuls le canonique et les hreflang sont absolus, comme
  // les moteurs l'exigent.
  d.lang_switch = Object.entries(langs).map(([k, c]) =>
    `<a href="${c.file === 'index.html' ? './' : c.file}" lang="${c.code}" hreflang="${c.code}"${k === l ? ' class="on" aria-current="page"' : ''}>${c.label}</a>`).join('');
  d.hreflang = Object.values(langs).map(c => `<link rel="alternate" hreflang="${c.code}" href="${url(c.file)}">`).join('\n')
    + `\n<link rel="alternate" hreflang="x-default" href="${url(langs.fr.file)}">`;
  d.canonical = url(cfg.file);

  const out = tpl.replace(/\{\{(\w+)\}\}/g, (m, k) => {
    if (!(k in d)) throw new Error(`clé inconnue dans le gabarit : ${k}`);
    return d[k];
  });
  const left = out.match(/\{\{\w+\}\}/g);
  if (left) throw new Error(`marqueurs non remplacés : ${left.join(',')}`);
  fs.writeFileSync(path.join(here, cfg.file), out);
  console.log(cfg.file, Math.round(Buffer.byteLength(out) / 1024), 'Ko');

  // Page de confidentialité : exigée par la Loi 25 dès qu'un formulaire recueille un nom
  // et un courriel. Même gabarit minimal dans les deux langues.
  const pv = `<!DOCTYPE html>
<html lang="${cfg.code}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${d.privacy_title} · Casaprefab</title>
<meta name="description" content="${d.privacy_title} de Casaprefab.">
<meta name="robots" content="index,follow">
<link rel="canonical" href="${url(cfg.privacy)}">
<link rel="icon" type="image/svg+xml" href="assets/favicon.svg">
<style>
:root{--deep:#0E1F18;--accent:#2E8B5B;--ink:#12181A;--ink2:#4A5A54;--paper:#FBFAF6;--line:#DCD8CC}
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Arial,sans-serif;background:var(--paper);color:var(--ink);line-height:1.6;letter-spacing:-.009em}
a{color:var(--accent)}
header{background:var(--deep);padding:18px 0}
.wrap{width:min(760px,calc(100% - 40px));margin-inline:auto}
.logo{color:#fff;font-weight:750;font-size:19px;letter-spacing:-.03em;text-decoration:none}
.logo i{font-style:normal;color:#7FD3A4}
main{padding:56px 0 72px}
h1{font-size:clamp(30px,4.4vw,42px);font-weight:680;letter-spacing:-.03em;line-height:1.1;margin-bottom:10px}
.date{font-size:13.5px;color:#8A9993;margin-bottom:34px}
.lead{font-size:18px;color:var(--ink2);margin-bottom:8px}
h2{font-size:19px;font-weight:660;letter-spacing:-.02em;margin:32px 0 8px}
p{color:var(--ink2);font-size:16px}
footer{border-top:1px solid var(--line);padding:26px 0;font-size:14px;color:#8A9993}
</style>
</head>
<body>
<header><div class="wrap"><a href="${cfg.file === 'index.html' ? './' : cfg.file}" class="logo">casa<i>prefab</i></a></div></header>
<main><div class="wrap">
<h1>${d.privacy_title}</h1>
<p class="date">${d.privacy_updated} ${new Date().toISOString().slice(0, 10)}</p>
${d.privacy_body.trim()}
</div></main>
<footer><div class="wrap"><a href="${cfg.file === 'index.html' ? './' : cfg.file}">${d.privacy_back}</a> · info@casaprefab.ca</div></footer>
</body>
</html>
`;
  fs.writeFileSync(path.join(here, cfg.privacy), pv);
  console.log(cfg.privacy, Math.round(Buffer.byteLength(pv) / 1024), 'Ko');
}

// sitemap + robots, régénérés à chaque build pour rester en phase avec les pages.
const pages = Object.values(langs).flatMap(c => [url(c.file), url(c.privacy)]);
fs.writeFileSync(path.join(here, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  pages.map(u => `  <url><loc>${u}</loc><lastmod>${new Date().toISOString().slice(0, 10)}</lastmod></url>`).join('\n') +
  `\n</urlset>\n`);
fs.writeFileSync(path.join(here, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${BASE}sitemap.xml\n`);
console.log('sitemap.xml et robots.txt à jour');
