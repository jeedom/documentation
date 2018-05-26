-   **Le module**

![module](../images/etc4/module.jpg)

-   **In Jeedom sichtbar**

![vue default](../images/etc4/vue_default.jpg)

Zusammenfassung
======

La mini télécommande e-Trendy de 4 canaux est simple, robuste et design,
elle a été crée pour plaire. Elle se relie facilement aux récepteurs et
peut contrôler vos éclairages Marche/Arrêt et dimmables, motorisations,
stores, volets, portails, portes de garage. Elle comporte deux modes de
programmation.

De plus, l’interaction avec d’autres protocoles est possible, elle peut
interagir avec les récepteurs de la marque Edisio, avec Jeedom, mais
aussi par n’importe quel récepteur Z-Wave de votre réseau.

Funktionen 
=========

-   Mode d’usage : Marche/Arrêt, Ouvrir/Stop/Fermer, Variateur,
    Motorisation, Stores, Volets, Portails, Portes de garage

-   2 modes de programmation

-   Petit, discret et esthétique

-   Facilité d’utilisation et d’installation

Technische Daten 
===========================

-   Type de module : Emetteur Edisio

-   Alimentation : 3VDC (Pile Lithium CR2430)

-   Kanäle : 4

-   Fréquence : 868,3 MHz

-   Température de fonctionnement : -10°C +50°C

-   Abmessungen : 52x28x12mm

-   Degré de protection : IP40

Données du module 
=================

-   Marke : Edisio Smart Home

-   Name : ETC4

Configuration générale 
======================

Pour configurer le plugin Edisio et associer un module à Jeedom,
référez-vous à cette
[documentation](https://www.jeedom.fr/doc/documentation/plugins/edisio/fr_FR/edisio.html).

> **Important**
>
> Pour que Jeedom crée automatiquement vos modules émetteurs, n’oubliez
> pas d’activer l’option dans la configuration du plugin.

Les modes 
---------

Contrôler et centraliser vos éclairages Marche/Arrêt et variateurs,
ouvrants, moteurs, sur la même touche ou sur 2 boutons séparés. Les
télécommandes e-Trendy ont 2 modes de fonctionnements, MODE 1 et MODE 2
:

-   MODE 1 : Contrôle sur 1 touche : Marche/Arrêt, Ouvrir/Fermer,
    Variation+/Variation-, Impulsionnel

-   MODE 2 : Contrôle sur 2 touches :

    -   Touches du HAUT: Arrêt, Fermer, Variation-, Impulsionnel

    -   Touches du bas: Marche, Ouvrir, Variation+, Impulsionnel

Diagramme de fonctionnement 
===========================

Selon que votre émetteur est configuré en mode "1 touche" ou "2
touches", voici le fonctionnement de la télécommande :

![diagramme](../images/etc4/diagramme.jpg)

Changer le mode 
===============

-   MODE 1 :

    -   Appuyez et maintenez la touche "C4"

    -   Appuyez 1x la touche "C1", toujours en maintenant la touche
        "C4", la LED clignotera 1 fois

![mode1](../images/etc4/mode1.jpg)

-   MODE 2 :

    -   Appuyez et maintenez la touche "C4"

    -   Appuyez 2x la touche "C1", toujours en maintenant la touche
        "C4", la LED clignotera 2 fois

![mode2](../images/etc4/mode2.jpg)

Association de la télécommande à Jeedom 
=======================================

L’association d’un émetteur Edisio se fait simplement et
automatiquement. Il suffit juste d’appuyer sur chaque touche que vous
souhaitez avoir dans votre Jeedom.

Une fois, votre équipement associé, vous devriez obtenir ceci :

![asso equip](../images/etc4/asso_equip.jpg)

Commandes 
---------

Une fois votre équipement créé, vous devriez obtenir les commandes
associées au module :

![Commandes](../images/etc4/commandes.jpg)

Voici la liste des commandes :

-   bt01 : C’est la commande qui permet d’interagir avec le bouton 1

-   bt02 : C’est la commande qui permet d’interagir avec le bouton 2

-   bt03 : C’est la commande qui permet d’interagir avec le bouton 3

-   bt04 : C’est la commande qui permet d’interagir avec le bouton 4

-   Batterie : Indique l’état de la batterie

Informations 
------------

Une fois votre équipement associé à Jeedom, diverses informations seront
disponibles :

![Commandes](../images/etc4/infos.jpg)

-   Création : Indique la date à laquelle l’équipement à été créé

-   Communication : Indique la dernière communication enregistrée entre
    Jeedom et le micro-module

-   Batterie : Indique l’état de la batterie pour les modules à piles

-   Status : Retourne le status du module

Utilisation 
-----------

Une fois que votre télécommande est configurée, vous pouvez avec le
plugin Scénario de Jeedom interagir avec votre télécommande sur Jeedom.

> **Note**
>
> Chaque touche à un retour d’état binaire.

F.A.Q. 
======

Comment effacer l’association d’une touche à un récepteur ?

:   Appuyez 5 sec sur le "R" du récepteur, un simple bip sonore signale
    le mode déprogrammation activé. Appuyez sur la touche "C" à effacer.
    Recommencez cette opération pour toutes les touches à effacer.

**@Jamsta**
