# Mise en ligne de casaprefab.ca

Tout est prêt. Cette page est la séquence exacte, dans l’ordre, avec ce qu’il faut voir à
chaque étape pour savoir que ça a marché.

**Une seule chose manque : le feu vert.** La commande de publication a été refusée par le
garde-fou « création d’une surface publique », qui exige l’accord explicite de Miguel avant
qu’un contenu devienne visible sur Internet. Ce n’est pas une panne, c’est la règle.

---

## 1. Publier le site

```bash
cd C:\Users\cameleon\Desktop\miguel\casaprefab\site
node build.mjs
node deploy.mjs
```

Ce que `deploy.mjs` fait, dans cet ordre : il crée le dépôt GitHub `casaprefab.ca` sous le
compte `migdimas`, pousse les fichiers, active GitHub Pages sur la branche `main`, et
enregistre le domaine personnalisé. Il imprime ensuite les enregistrements DNS à poser.

**Ce qu’il faut voir :** `État Pages : {"url":"https://casaprefab.ca/","cname":"casaprefab.ca"...}`.
Tant que le DNS n’est pas posé, le site répond déjà à `https://migdimas.github.io/casaprefab.ca/`.

## 2. Poser le DNS chez GoDaddy

Zone `casaprefab.ca`, onglet **Enregistrements DNS** :
`dcc.godaddy.com/control/dnsmanagement?domainName=casaprefab.ca`

| Type | Nom | Valeur | TTL |
|---|---|---|---|
| A | @ | `185.199.108.153` | 1 heure |
| A | @ | `185.199.109.153` | 1 heure |
| A | @ | `185.199.110.153` | 1 heure |
| A | @ | `185.199.111.153` | 1 heure |
| CNAME | www | `migdimas.github.io` | 1 heure |

**Avant d’ajouter :** supprimer l’enregistrement `A @` de parcage posé par GoDaddy à l’achat,
celui dont la valeur est `Parked`. S’il reste, le domaine répond une fois sur deux à la page
de parcage de GoDaddy.

**Ne pas toucher** aux enregistrements MX et TXT : ils serviront à la boîte courriel.

## 3. Attendre, puis forcer le HTTPS

La propagation prend de quelques minutes à une heure. GitHub émet ensuite un certificat
Let’s Encrypt automatiquement. Une fois le certificat émis, forcer le HTTPS :

```bash
node -e "const t=require('fs').readFileSync('../../.env','utf8').match(/GITHUB_TOKEN=(.+)/)[1].trim(); fetch('https://api.github.com/repos/migdimas/casaprefab.ca/pages',{method:'PUT',headers:{Authorization:'Bearer '+t,Accept:'application/vnd.github+json'},body:JSON.stringify({https_enforced:true})}).then(r=>console.log(r.status))"
```

Un `204` veut dire que c’est fait.

## 4. Vérifier, pour de vrai

```bash
curl -sI https://casaprefab.ca/ | head -3
curl -s https://casaprefab.ca/ | grep -o "<title>[^<]*"
curl -sI https://www.casaprefab.ca/ | head -3
curl -s https://casaprefab.ca/sitemap.xml
```

Attendu : un `200`, le titre `Casaprefab · Quartiers de maisons préfabriquées sous 350 000 $ | Québec`,
une redirection sur le `www`, et un sitemap de quatre URL.

Puis, dans un vrai navigateur : la page FR, la page EN, le passage de l’une à l’autre,
le formulaire en quatre étapes, et la page de confidentialité.

## 5. Dans la semaine qui suit

- Déclarer le domaine dans Google Search Console et y déposer le sitemap.
- Envoyer le lien à trois personnes de confiance avant d’écrire à une municipalité.
- Une fois la boîte ouverte, faire basculer `FORM_TO` dans `build.mjs` de
  `miguel.dimas@klimbo.co` vers `info@casaprefab.ca`, puis republier.

---

## Ce qu’il faudra changer, et où

| Ce qu’on veut changer | Le fichier |
|---|---|
| Un texte, une phrase, un mot, dans les deux langues | `src/i18n.mjs` |
| Une section, la structure, le formulaire | `src/template.html` |
| L’adresse qui reçoit les demandes, l’adresse postale du bas de page | `build.mjs`, constantes du haut |
| L’image de partage | `../outils/og-carte.html`, voir le README de ce dossier |

Puis toujours : `node build.mjs`, puis `node deploy.mjs`. Jamais de modification directe
dans `index.html` ou `en.html` : ils sont écrasés à chaque génération.
