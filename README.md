# axiopilot.com

Site d'AxioPilot, construit avec [Astro](https://astro.build) (site statique, très rapide, bon pour le SEO).

## Commandes

```bash
npm install      # une seule fois
npm run dev      # aperçu local sur http://localhost:4321
npm run build    # génère le site dans dist/
```

## Publier un article de blogue

1. Créer un fichier `src/content/blog/mon-article.md` (le nom du fichier devient l'adresse : `/blogue/mon-article/`).
2. En-tête obligatoire :

```yaml
---
title: "Titre de l'article (60 caractères max idéalement)"
description: "Résumé de 150 à 160 caractères, affiché dans Google."
date: 2026-11-11
category: Guide
readingTime: 6
draft: false   # true = visible seulement en local, jamais publié
---
```

3. Pousser sur `main` : Cloudflare Pages reconstruit et publie le site en 1 minute. Le sitemap et le flux RSS se mettent à jour seuls.

## Réglages à compléter

Dans `src/consts.ts` :
- `bookingUrl` : lien de l'agenda de réservation Google Agenda (sinon les boutons ouvrent un courriel).
- `linkedin` : URL LinkedIn.

Dans `src/pages/index.astro` : `photo` (ex. `/kevin.jpg`, fichier carré déposé dans `public/`).

Dans `src/pages/mentions-legales.astro` et `politique-de-confidentialite.astro` : nom de famille, statut et adresse.

## Hébergement (Cloudflare Pages)

- Framework : Astro · Commande de build : `npm run build` · Dossier de sortie : `dist`
- Domaine personnalisé : `axiopilot.com` (+ redirection `www`).
- SEO : soumettre `https://axiopilot.com/sitemap-index.xml` dans Google Search Console.
