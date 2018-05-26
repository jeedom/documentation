Description 
===========

![dev.plugin simple.01](../images/dev.plugin-simple.01.jpg)

Cette documentation vous permettra d’appréhender le système de
documentation intégré dans jeedom : AsciiDoc

Objectifs :

-   présenter le fonctionnement de l’AsciiDoc

-   présenter la structure des différents documents nécessaires

-   fournir un minimum de règles pour harmoniser l’ensemble des
    documents Jeedom

Fonctionnement de l’AsciiDoc 
============================

A documenter

Généralité 
----------

Asciidoc est un langage de balisage léger. C’est aussi le nom de la
suite logicielle qui permet de transformer les fichiers "texte source"
en documents publiables.

-   Le programme de conversion asciidoc permet de transformer le
    document source au format XHTML, DocBook ou HTML.

-   Le programme a2x permet d’obtenir d’autres formats tels que PDF,
    TeX, Unix manpages ou Epub.

Site officiel : <http://www.methods.co.nz/asciidoc/>

AsciiDoc & Jeedom 
-----------------

La documentation Jeedom s’appuie sur l’AsciiDoc et sur l’adjonction du
bootstrap de Laurent Laville :
<http://laurent-laville.org/asciidoc/bootstrap/>

Cette particularité permet d’ajouter des fonctions supplémentaires aux
fonctions présentes dans l’AsciiDoc. Mais nécessite aussi une
compilation particulière pour avoir une visibilité sur le rendu final.
 \
Nous détaillerons dans ce document, comment générer vos pages en local
pour valider la mise en forme.

Un peu de syntaxe 
-----------------

Ce lien est un pense-bête des syntaxes asciidoc :
<http://powerman.name/doc/asciidoc>

Structure des fichiers AsciiDoc 
===============================

Plusieurs fichiers asciidoc (extension de vos fichiers) permettent de
structurer votre documentation.

Vous devez au minimum avoir les fichiers asciidoc suivants :

-   index.asciidoc

-   description.asciidoc

-   installation.asciidoc

-   configuration.asciidoc

index.asciidoc 
--------------

Le fichier index.asciidoc est, comme son nom l’indique, la racine de
votre documentation.

Ce fichier ne doit contenir que des pointeurs sur l’ensemble des autres
fichiers et non directement du contenu.

Exemple de fichier **index.asciidoc** :

    :imagesdir: ../images
    :icons:

    == Greenmomit
    image:greenmomit_icon.png[]

    {nbsp} +

    === Description
    Unresolved directive in doc.plugin.asciidoc - include::description.asciidoc[]

    '''
    === Configuration
    Unresolved directive in doc.plugin.asciidoc - include::configuration.asciidoc[]

    '''
    === FAQ
    Unresolved directive in doc.plugin.asciidoc - include::faq.asciidoc[]

Les fichiers asciidoc inclus sont

-   description.asciidoc

-   installation.asciidoc

-   configuration.asciidoc

-   faq.asciidoc

Ces fichiers correspondent à la base de la structure de la documentation
Jeedom. Il est possible d’inclure d’autres fichiers AsciiDoc.

description.asciidoc 
--------------------

Le fichier **description.asciidoc** vous permet de présenter votre
plugin.

### Plugin simple 

Si votre plugin est relativement simple, n’a pas de dépendance avec un
équipement particulier à présenter, vous pouvez vous limiter à une
description de l’objectif du plugin.

Exemple de fichier **description.asciidoc** simple :

    :imagesdir: ../images
    :icons:

    ==== Générale

    Ce Plugin à pour objectif de BLABLABLA.

    Une petite copie d'écran du rendu du widget du plugin :

    image:nomduplugin_widget.png[]

### Plugin complexe 

Si votre plugin est :

-   dépendant d’un équipement tiers

-   nécessite quelques prérequis

-   nécessite une explication sur le principe de fonctionnement.

Il est conseillé de créer plusieurs sous-chapitres.

-   **Desciption générale**\

-   **Description marketing :)**

-   **Les prérequis**

-   **Principe de fonctionnement**

Exemple de fichier **description.asciidoc** complexe :

    :imagesdir: ../images
    :icons:

    ==== Générale

    Ce Plugin a pour objectif de BLABLABLA.

    Une petite copie d'écran du rendu du widget du plugin :

    image:nomduplugin_widget.png[]

    // Si le plugin est dépendant d'un équipement ou solution logicielle tiers, le présenter
    ==== Présentation de l'équipement ou application XXX
    //ajouter une image de l'équipement
    image:nomduplugin_equipementXXX.png[]

    Décrire l'équipement, ajouter des liens vers le consructeur ou sites de référence.
    Décrire le niveau d'intégration de l'équipement dans Jeedom (complète, incomplète et quelles fonctionnalités ne sont pas implémentées)

    // S'il est nécessaire de présenter le principe de fonctionnement :
    ==== Principe de fonctionnement
    Décrire l'architecture et la philosophie du plugin.

    ==== Prérequis
    Lister et décrire les prérequis à l'installation et l'utilisation du plugin
    * ex : une clé API à demander

installation.asciidoc 
---------------------

Si votre plugin n’a aucune spécification sur son installation, ajouter
juste un pointeur vers la procédure d’installation d’un plugin décrite
dans la documentation du core Jeedom :

[**Installation d’un
plugin**](https://www.jeedom.fr/doc/documentation/core/fr_FR/doc-core-plugin.html)
<span class="keycombo">Ctrl+mouse clic</span> (pour ouvrir dans un
nouvel onglet)

configuration.asciidoc 
----------------------

Règles 
======

Les images 
----------

A compléter
