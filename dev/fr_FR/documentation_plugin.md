# Comment faire la documentation d'un plugin

## Introduction

Nous allons voir dans cette documentation comment faire la documentation de votre plugin.

## Principe

Le principe est très simple. La documentation du plugin doit etre un simple lien web a indiquer dans votre fichier info.json (voir le détail [ici](https://jeedom.github.io/documentation/dev/fr_FR/structure_info_json) ) dans le champs documentation.

A noter que vous avez aussi un champs changelog qui doit fonctionner de la meme manière que le champs documentation.

## Comment faire ?

Comme vu plus haut vous devez juste indiquer dans le fichier info.json le lien http(s) vers votre documentation. Vous êtes donc libre sur la présentation, l'hébergeur ou même le mode :

- un blog
- un simple serveur web
- github (seule méthode que nous verrons ici)

## Github

Le plus simple pour votre documentation est d'utiliser le système de page de github qui a l'avantage d'être très facile à utiliser.

### Langage de la documentation

Github supporte asciidoc et markedown (md) pour les pages, nous ne verrons ici que le markedown.

On ne va pas vous décrire la syntaxe complète du markdown, d'autres sites le font déjà très bien dont [celui-ci](https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf)

### Emplacement

Nous vous recommandons de copier dans votre plugin (hebergé sur github) le dossier docs du plugin template (voir [ici](https://github.com/jeedom/plugin-template/tree/master/docs) )

Une fois cela fait vous allez avoir dans le dossier docs un dossier fr_FR (le seul à modifier). Dans ce dossier nous vous conseillons de faire 2 fichiers :

- changelog.md => votre changelog
- index.md => votre documentation

### Mise en ligne

La mise en ligne est assez simple il suffit dans sur votre dépôt github puis "Settings" et dans la partie "GitHub Pages" d'activer celle sur "master branch /docs folder" (comme l'indique le libellé seul les fichiers dans le dossier /docs de la branche master de votre plugin seront en ligne). Github va ensuite vous fournir un lien de type "https://jeedom.github.io/plugin-template/" (au bout de quelques minutes en allant dessus vous devriez voir votre documentation mise en page correctement).

Il vous faut maintenant mettre les liens de votre documentation dans le fichier info.json de votre plugin. Pour cela il faut :

- ajouter #language#/ pour le lien vers la documentation. Cela donne donc sur notre exemple "https://jeedom.github.io/plugin-template/#language#/"
- ajouter #language#/changelog pour le lien vers votre changement. Cela donne donc sur notre exemple "https://jeedom.github.io/plugin-template/#language#/changelog"

> **Note**
>
> Vous l'aurez compris, lorsque l'utilisateur va demander à voir votre doc, jeedom ou le market vont automatiquement remplacer #language# par la langue de l'utilisateur pour pointer vers la bonne langue (si votre documentation n'est pas disponible dans la langue de l'utilisateur alors automatiquement cela renverra vers le Français)

### Gestion de la traduction

Si votre plugin est structuré comme conseillé ci-dessus, alors la gestion des traductions est très simple a mettre en place. En plus d'etre automatique, il suffit d'autoriser l'utilisateur github zoic21 à push/pull sur votre dépôt et dans le market sur la page d'édition de votre plugin dans l'onglet github de cocher "Activer la génération de la documention et de la traduction". Le robot passe tous les jours à 12h (plus ou moins 2h en fonction de la charge de travail) pour recuperer la documentation Francaise de votre plugin et le changelog (branche beta) la pousser sur transiflex (systeme de traduction communautaire), recuperer les nouvelles traduction et le pousser sur votre dépot github dans les bons dossier.


> **Important**
>
> Pour que la partie gestion de la traduction marche en automatique il faut obligatoirement que votre plugin soit hebergé sur Github

> **Note**
>
> A noter qu'une fois votre fichier info.json renseigné et poussé en version stable le site de documentation Jeedom (https://doc.jeedom.com) ajoutera automatiquement votre plugin.
