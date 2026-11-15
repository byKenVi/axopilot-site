---
title: "Collecte des accès clients en agence : Google Ads, Meta, GA4 et site sans 15 courriels"
seoTitle: "Collecte des accès clients en agence : méthode sans relances"
description: "Comment obtenir les accès Google Ads, Meta, GA4, Search Console et site d'un nouveau client en quelques jours, sans mots de passe partagés : tableau, modèle de courriel."
date: 2026-11-19
category: Processus
readingTime: 8
draft: false
faq:
  - q: "Faut-il demander les mots de passe des comptes du client ?"
    a: "Non. Google Ads, Google Analytics, Search Console et Meta permettent tous de donner un accès nominatif à l'agence sans partager de mot de passe. C'est plus sûr, chaque personne est identifiée, et le client peut retirer l'accès lui-même à la fin du mandat. Gardez le partage de mot de passe pour les rares outils qui n'offrent aucun accès délégué, et utilisez alors un gestionnaire de mots de passe."
  - q: "Comment obtenir l'accès au compte Google Ads d'un client ?"
    a: "Demandez au client son numéro de client Google Ads (10 chiffres), puis envoyez une demande d'association depuis votre compte administrateur. Le client reçoit une invitation par courriel et l'accepte. Il garde le contrôle de son compte et peut retirer l'association en tout temps."
  - q: "Quel niveau d'accès demander dans Google Analytics 4 ?"
    a: "Le plus bas qui permet de faire le travail. Pour des rapports, le rôle Lecteur ou Analyste suffit. Pour configurer des événements ou des audiences, il faut Marketeur ou Éditeur. Le rôle Administrateur n'est utile que si vous devez gérer les utilisateurs, ce qui est rarement le cas d'une agence."
  - q: "Combien de temps prend la collecte des accès ?"
    a: "Avec une demande claire et des rappels automatiques, la plupart des accès arrivent en quelques jours. Ce qui fait traîner, ce sont les demandes floues, envoyées à la mauvaise personne, ou les comptes que le client ne sait pas retrouver. D'où l'intérêt de demander d'abord qui détient chaque compte."
  - q: "Que faire des accès à la fin du mandat ?"
    a: "Retirez vous-même vos accès ou demandez au client de le faire, et confirmez-le par écrit. C'est une bonne pratique de sécurité et une façon simple de respecter le principe de la Loi 25 : seules les personnes qui en ont besoin ont accès aux renseignements."
---

Le contrat est signé lundi. Mercredi, l'équipe attend toujours l'accès Google Ads. Jeudi, le client envoie un mot de passe par courriel, mais c'est celui de son compte Gmail personnel. La semaine suivante, on découvre que le compte Meta appartient à l'ancien pigiste du client. Le lancement glisse de dix jours, et personne n'a encore produit quoi que ce soit.

La collecte des accès est l'étape de l'onboarding qui fait perdre le plus de temps, et pourtant c'est la plus facile à standardiser. Ce guide donne **la bonne méthode d'accès pour chaque plateforme**, **un tableau de référence**, **un modèle de courriel** et **la façon d'automatiser les rappels**.

<div class="tldr">
<p class="tldr-k">En bref</p>
<ul>
<li>Ne demandez jamais de mots de passe : chaque grande plateforme offre un accès nominatif pour les agences.</li>
<li>Commencez par demander qui détient chaque compte, pas les accès eux-mêmes.</li>
<li>Une seule demande, avec un guide court par plateforme, remplace la dizaine de courriels d'aller-retour.</li>
<li>Des rappels automatiques et un suivi par statut évitent que la collecte dépende de la mémoire de quelqu'un.</li>
</ul>
</div>

## Pourquoi la collecte des accès prend autant de temps

Le problème n'est presque jamais la mauvaise volonté du client. Il vient de quatre causes, toujours les mêmes :

- **Le client ne sait pas qui détient le compte.** Le site a été fait par une ancienne agence, les publicités par un pigiste, Google Analytics a été créé avec l'adresse d'un employé parti.
- **La demande est trop vague.** « Pouvez-vous nous donner accès à vos outils ? » oblige le client à deviner quoi faire, et il remet ça à plus tard.
- **La personne qui reçoit la demande n'est pas celle qui peut agir.** Votre contact est le directeur marketing, mais seul le propriétaire de l'entreprise est administrateur du compte Meta.
- **Personne ne relance de façon régulière.** La demande part dans la pile, et on s'en rend compte au moment de lancer.

Une bonne méthode règle ces quatre points dans l'ordre : identifier les propriétaires, envoyer une demande précise, suivre chaque accès, relancer automatiquement.

## La règle d'or : des accès nominatifs, pas des mots de passe

Recevoir un mot de passe semble plus rapide. C'est en réalité la pire option :

- **Sécurité** : le mot de passe circule par courriel, souvent sans double authentification, et sert à toute l'équipe.
- **Traçabilité** : impossible de savoir qui a fait quoi dans le compte.
- **Fin de mandat** : pour retirer l'accès, le client doit changer son mot de passe, ce qui est souvent oublié.

La Commission d'accès à l'information recommande de limiter l'accès aux renseignements personnels aux seules personnes qui en ont besoin dans leurs fonctions, et de se doter de procédures de gestion des accès des utilisateurs ([CAI, fiche de prévention des incidents](https://www.cai.gouv.qc.ca/uploads/pdfs/CAI_FIC_ENTR_Prevention_incidents.pdf)). Un compte publicitaire ou une propriété GA4 contient souvent des listes de clients et des données de conversion : des accès nominatifs, au bon niveau, vont exactement dans ce sens.

## Le tableau de référence par plateforme

Voici comment obtenir l'accès sur les plateformes les plus courantes, et quel niveau demander.

| Plateforme | Ce que vous envoyez ou demandez | Ce que fait le client | Niveau à viser |
| --- | --- | --- | --- |
| Google Ads | Demande d'association depuis votre compte administrateur, avec son numéro de client | Accepte l'invitation reçue par courriel | Accès standard via votre compte administrateur |
| Google Analytics 4 | L'adresse courriel de chaque personne | Ajoute l'adresse dans la gestion des accès de la propriété | Lecteur ou Analyste pour les rapports, Éditeur pour configurer |
| Search Console | L'adresse courriel de chaque personne | Ajoute un utilisateur dans les paramètres de la propriété | Utilisateur avec accès restreint ou total |
| Meta (Facebook, Instagram) | L'identifiant de votre portefeuille d'entreprise | Vous ajoute comme partenaire et partage le compte publicitaire, la page et l'ensemble de données | Accès partiel aux seuls actifs nécessaires |
| Site WordPress ou autre CMS | L'adresse courriel de chaque personne | Crée un compte utilisateur nominatif | Éditeur pour le contenu, Administrateur seulement si nécessaire |
| Hébergement, domaine | Selon l'hébergeur | Ajoute un utilisateur délégué si l'hébergeur le permet | Le minimum utile |

Quelques précisions vérifiées dans la documentation officielle :

- **Google Ads** : depuis votre compte administrateur, vous ajoutez le numéro de client du compte et envoyez la demande ; les utilisateurs du compte client reçoivent une invitation par courriel. Le client garde son accès habituel, ne voit pas vos autres clients et peut retirer l'association en tout temps ([aide Google Ads](https://support.google.com/adwords/answer/6139186?hl=fr)).
- **Google Analytics 4** : seuls les administrateurs peuvent ajouter des utilisateurs. Les rôles vont d'Administrateur à Lecteur, en passant par Éditeur, Marketeur et Analyste, et peuvent être donnés au niveau du compte ou de la propriété ([aide Google Analytics](https://support.google.com/analytics/answer/9305587?hl=fr)). Demandez l'accès à la propriété, pas au compte entier, sauf si vous gérez toutes ses propriétés.
- **Search Console** : seul un propriétaire peut ajouter un utilisateur. Un utilisateur avec accès total voit toutes les données, un utilisateur avec accès restreint a surtout un accès en lecture ([aide Search Console](https://support.google.com/webmasters/answer/7687615?hl=fr)).
- **Meta** : le client vous accorde l'accès à ses actifs à partir de son portefeuille d'entreprise, en utilisant l'identifiant du vôtre. L'agence peut aussi envoyer une demande d'accès, que l'administrateur du client accepte ensuite ([documentation Meta pour développeurs](https://developers.facebook.com/docs/business-management-apis/business-asset-management/guides/business-to-business)). Dans les deux cas, il faut que le client ait un portefeuille d'entreprise et qu'il en soit administrateur.

Si votre agence n'a pas encore de compte administrateur Google Ads ni de portefeuille d'entreprise Meta, créez-les avant tout : ce sont eux qui rendent la collecte simple et réversible.

## La méthode en 4 étapes

<figure class="schema">
<ol>
<li><strong>Avant la signature</strong> Demander qui détient chaque compte (inventaire des comptes).</li>
<li><strong>Jour 1</strong> Envoyer une seule demande avec un guide court par plateforme.</li>
<li><strong>Jours 1 à 7</strong> Suivre chaque accès par statut, rappel automatique à 3 jours.</li>
<li><strong>Accès complets</strong> Vérifier chaque accès et prévenir l'équipe : le travail commence.</li>
</ol>
<figcaption>Collecte des accès : de l'inventaire au lancement</figcaption>
</figure>

### 1. Faire l'inventaire des comptes avant la signature

Pendant l'appel de découverte ou dans le formulaire d'accueil, posez trois questions par plateforme : le compte existe-t-il ? Qui en est administrateur ? Avec quelle adresse a-t-il été créé ? Vous saurez tout de suite s'il faut récupérer un compte auprès d'un ancien fournisseur, ce qui peut prendre des semaines. Mieux vaut le savoir avant de promettre une date de lancement dans la [soumission](/blogue/soumission-agence-repondre-rapidement/).

### 2. Envoyer une seule demande, précise

Un seul courriel, adressé à la personne qui détient les comptes, avec pour chaque plateforme : ce qu'il faut faire, en deux ou trois phrases, et l'information à vous transmettre (numéro de client Google Ads, par exemple). Joignez un lien vers un guide d'une page par plateforme, avec captures d'écran. Ces guides se font une fois et servent pour tous les clients.

### 3. Suivre chaque accès par statut

Une ligne par accès, avec un statut : demandé, reçu, vérifié. Un tableur suffit, mais un champ dans votre gestionnaire de projets (ClickUp, Asana, Monday) est mieux : toute l'équipe voit ce qui manque sans demander.

### 4. Vérifier et lancer

Un accès « reçu » n'est pas toujours le bon : mauvais compte publicitaire, propriété GA4 de test, rôle trop limité. Vérifiez chaque accès en vous connectant, puis prévenez l'équipe que le projet peut démarrer.

<div class="inline-cta">
<p><strong>Vos accès arrivent encore au compte-gouttes ?</strong> On automatise l'onboarding de vos nouveaux clients, demandes d'accès et rappels compris, en 21 jours, sur vos outils actuels.</p>
<a class="btn btn-primary" href="/#histoire">Voir comment ça marche →</a>
</div>

## Modèle de courriel de demande d'accès

À adapter selon les plateformes réellement utilisées dans le mandat. Ne listez que ce dont vous avez besoin : chaque ligne inutile retarde les autres.

> Objet : Les 4 accès dont nous avons besoin pour lancer votre projet
>
> Bonjour Sophie,
>
> Pour lancer la campagne le 2 décembre, nous avons besoin de quatre accès. Aucun mot de passe à partager : vous gardez le contrôle complet de vos comptes et pouvez retirer nos accès en tout temps.
>
> 1. **Google Ads** : envoyez-nous votre numéro de client (10 chiffres, en haut à droite de votre compte). Vous recevrez ensuite une invitation à accepter.
> 2. **Google Analytics** : ajoutez marc@agence.ca avec le rôle Éditeur sur la propriété de votre site.
> 3. **Search Console** : ajoutez marc@agence.ca comme utilisateur avec accès total.
> 4. **Meta** : ajoutez notre portefeuille d'entreprise (identifiant 123456789) comme partenaire, puis partagez votre compte publicitaire et votre page.
>
> Chaque étape prend deux minutes. Le guide illustré est ici : [lien]. Si un compte est géré par quelqu'un d'autre chez vous ou par un ancien fournisseur, dites-moi simplement qui, et je m'en occupe avec cette personne.
>
> Merci,

La dernière phrase est importante : elle donne au client une porte de sortie facile quand il ne sait pas faire, au lieu de laisser la demande dormir.

## Automatiser la collecte et les rappels

La demande, le suivi et les rappels sont identiques d'un client à l'autre. C'est donc un bon candidat à l'automatisation, sans outil coûteux.

**Avec vos outils actuels.** Un formulaire (Tally, Typeform, Google Forms) recueille l'inventaire des comptes et les identifiants à transmettre. Une automatisation Make ou Zapier crée alors les tâches d'accès dans votre gestionnaire de projets, envoie le courriel de demande adapté aux plateformes cochées, relance le client après 3 jours pour chaque accès encore en attente, et prévient le chargé de compte quand tout est vérifié. C'est l'étape 7 de notre [checklist d'onboarding client](/blogue/onboarding-client-agence/).

**Avec un outil spécialisé.** Des services comme Leadsie ou Connexify génèrent un lien unique : le client se connecte à ses plateformes et accorde les accès en quelques clics. Ils couvrent bien les grandes plateformes publicitaires, mais ajoutent un abonnement et ne gèrent pas le reste de votre onboarding. Comparez leurs forfaits actuels avec votre nombre de nouveaux clients par mois avant de vous engager.

Dans les deux cas, gardez une personne responsable de la vérification finale : l'automatisation suit et relance, mais c'est un humain qui confirme que le bon compte est accessible.

## La checklist avant le lancement

- [ ] Inventaire des comptes fait : chaque plateforme a un propriétaire identifié.
- [ ] Demande unique envoyée au détenteur des comptes, avec le guide illustré.
- [ ] Aucun mot de passe reçu par courriel (sinon, le faire changer et passer à un accès nominatif).
- [ ] Chaque accès vérifié en se connectant, au bon niveau.
- [ ] Les accès de l'équipe consignés dans la fiche client, avec la date.
- [ ] La procédure de retrait des accès prévue pour la fin du mandat.

Ce dernier point est souvent oublié. Le jour où le mandat se termine, retirer vos accès et le confirmer par écrit au client est une marque de professionnalisme, et une protection pour vous aussi. Les mêmes accès serviront ensuite à [automatiser le rapport client](/blogue/automatiser-rapport-client-agence/) : un accès bien configuré dès le départ, c'est un rapport qui se remplit seul chaque mois.
