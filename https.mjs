// Active le HTTPS sur casaprefab.ca dès que GitHub a émis le certificat.
// GitHub demande le certificat à Let’s Encrypt une fois le DNS correct : cela prend de
// quelques minutes à une heure. Tant qu’il n’existe pas, l’API répond 404.
// Usage : node https.mjs        (surveille jusqu’à 40 minutes, puis s’arrête)
import fs from 'node:fs';

const t = fs.readFileSync('C:/Users/cameleon/Desktop/miguel/.env', 'utf8').match(/GITHUB_TOKEN=(.+)/)[1].trim();
const h = { Authorization: 'Bearer ' + t, Accept: 'application/vnd.github+json', 'Content-Type': 'application/json' };
const API = 'https://api.github.com/repos/migdimas/casaprefab.ca/pages';
const dodo = ms => new Promise(r => setTimeout(r, ms));

for (let essai = 1; essai <= 14; essai++) {
  const r = await fetch(API, { method: 'PUT', headers: h, body: JSON.stringify({ https_enforced: true }) });
  if (r.status === 204) {
    console.log(`HTTPS activé à l’essai ${essai}.`);
    const p = await (await fetch(API, { headers: h })).json();
    console.log('État :', JSON.stringify({ url: p.html_url, https: p.https_enforced }));
    process.exit(0);
  }
  console.log(`essai ${essai} : certificat pas encore émis (${r.status})`);
  await dodo(180000);
}
console.log('Toujours pas de certificat après 40 minutes. Relancer : node https.mjs');
