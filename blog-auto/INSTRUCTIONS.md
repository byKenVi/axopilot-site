# Rédaction automatique du blogue : instructions de la tâche du dimanche

Ce fichier est la consigne complète de la tâche planifiée qui écrit les articles.
Kevin a validé le fonctionnement le 12 novembre 2026 : **2 articles par semaine,
mardi et jeudi, publiés automatiquement sauf s'il demande d'en retirer un.**

## Ce que la tâche fait, dans l'ordre

1. Partir de la dernière version de `main`.
2. Lire `blog-auto/sujets.md` et les articles existants dans `src/content/blog/`
   (au moins leurs titres, descriptions et intertitres) pour connaître le ton, la
   structure et ce qui est déjà couvert.
3. Prendre les **2 premiers sujets « à écrire »**. Si un sujet ne peut pas être écrit
   honnêtement (sources introuvables, recoupe trop un article existant), le sauter,
   le marquer « reporté : raison » et prendre le suivant.
4. Pour chaque sujet : faire une vraie recherche web (au moins 3 sources sérieuses,
   de préférence québécoises ou canadiennes quand c'est pertinent), puis écrire
   l'article selon les règles ci-dessous.
5. Dater le premier article du **mardi** qui suit et le second du **jeudi** qui suit
   (format `date: AAAA-MM-JJ`). Ils restent invisibles jusqu'à ce jour : l'action
   GitHub « Publication planifiée » relance le site ces matins-là.
6. Générer les couvertures : `node scripts/cover.mjs`.
7. Ajouter un lien vers chaque nouvel article depuis **un** article existant
   pertinent (une phrase naturelle, pas une liste de liens). Ne pas toucher au
   reste de l'article existant.
8. Mettre à jour `blog-auto/sujets.md` : statut « publié AAAA-MM-JJ (slug) ».
9. Vérifier : `npm ci && npm run build` doit réussir. En cas d'échec, corriger.
   Ne jamais publier un site qui ne compile pas.
10. Faire **un seul commit** sur `main` (« Blogue : articles du AAAA-MM-JJ et
    AAAA-MM-JJ ») et le pousser sur `origin main`. Kevin a explicitement autorisé
    ce push direct sur `main` pour cette tâche, et uniquement pour ces fichiers :
    `src/content/blog/`, `public/blogue/`, `blog-auto/sujets.md`, et la phrase de
    lien ajoutée à un article existant. Ne rien modifier d'autre dans le dépôt.
11. Terminer par un résumé court en français pour Kevin (il le reçoit par courriel) :
    pour chaque article, le titre, la date de publication, le mot-clé visé, 2 phrases
    sur le contenu, et le lien futur `https://axiopilot.com/blogue/<slug>/`.
    Finir par : « Pour retirer un article avant sa date, dis-le simplement dans le
    projet AxioPilot (ex. : retire l'article du jeudi). »

## Règles de qualité (non négociables)

Google pénalise le contenu produit en masse sans valeur. Chaque article doit être
quelque chose qu'un fondateur d'agence aurait envie de garder.

- **Utile d'abord** : une méthode concrète, des étapes, un exemple chiffré, un
  modèle (courriel, tableau, checklist) que le lecteur peut réutiliser tel quel.
- **Aucun chiffre inventé.** Une statistique vient d'une source citée avec un lien,
  ou elle est présentée comme une estimation (« dans une agence de 15 personnes,
  comptez environ… ») avec le calcul. Pas de faux témoignages, pas de faux clients,
  pas de « nos clients ont gagné X % ».
- **Pas de remplissage** : pas d'introduction générique (« À l'ère du numérique… »),
  pas de conclusion qui répète tout. 1 300 à 1 900 mots.
- **Ton** : français neutre, clair, phrases courtes, vouvoiement. Vocabulaire
  québécois naturel quand il vient tout seul (courriel, mandat, soumission,
  fin de semaine) ; pas d'expressions forcées. Pas de « n'hésitez pas »,
  « je me permets », « cordialement ».
- **Pas de tirets cadratins** (—) dans le texte.
- Les outils cités (Make, Zapier, ClickUp, HubSpot, Looker Studio…) avec leurs
  limites réelles ; prix en CAD ou USD seulement s'ils sont vérifiés à la date
  d'écriture.

## Format du fichier (copier la structure des articles existants)

Fichier `src/content/blog/<slug>.md`, slug court en minuscules avec tirets, sans
accents, contenant le mot-clé principal.

```yaml
---
title: "Titre complet avec le mot-clé principal au début si possible"
seoTitle: "Version de 62 caractères maximum"
description: "155 à 170 caractères max, avec le mot-clé et une promesse claire."
date: AAAA-MM-JJ
category: Guide | Rentabilité | Outils | Processus | Ventes
readingTime: <minutes, environ mots / 200>
draft: false
faq:
  - q: "Question réelle que se pose un fondateur d'agence"
    a: "Réponse directe en 2 à 4 phrases."
  # 4 à 5 questions
---
```

Corps de l'article :
- Une accroche de 2 à 3 phrases qui nomme le problème tel que l'agence le vit.
- Le bloc « En bref » (`<div class="tldr">` avec `<p class="tldr-k">En bref</p>` et
  une liste de 3 à 4 points), comme dans les articles existants.
- Des intertitres `##` qui reprennent les questions que les gens tapent dans Google.
- Au moins un élément réutilisable : tableau, modèle de courriel, checklist.
- **Un schéma** quand l'article décrit un processus : un bloc HTML simple
  (`<figure class="schema">` contenant une liste ordonnée des étapes « avant /
  après » ou un tableau), pas d'image externe.
- Un seul bloc `<div class="inline-cta">` au milieu, sur le modèle existant, qui
  renvoie vers `/#histoire` ou l'appel.
- 2 liens internes minimum vers des articles existants (voir colonne « Liens
  internes » du plan), et 1 à 3 liens externes vers les sources.
- Pas de section FAQ dans le corps : elle est générée à partir du `faq` du haut.

## Si quelque chose bloque

Ne rien publier plutôt que publier un article faible ou un site cassé. Dans ce cas,
le résumé pour Kevin dit clairement ce qui a bloqué et ce qu'il faut faire.
