Fibaro RGVB Controler - FGRGB-101 
=================================

 \

-   **Das Modul**

 \

![module](../images/fibaro.fgrgb101/module.jpg)

 \

-   **In Jeedom sichtbar**

 \

![Visuel jeedom](../images/fibaro.fgrgb101/Visuel_jeedom.png)

 \

Zusammenfassung
------

Le micromodule Z-Wave Fibaro FGRGB-101 permet, au choix, de commander
des éclairages basse tension 12/24V (halogène ou LED), un ruban LED RVB
ou RVB+blanc ou bien encore de relier des sondes analogiques utilisant
la norme 0-10V.

-   4 entrées analogiques 0 à 10V à connecter à de nombreux capteurs
    compatibles, des potentiomètres, des boutons-poussoirs (monostables)
    ou des commutateurs (bistables).

-   4 sorties variateur (PWM) pour contrôler :

-   \* soit 1 canal de LED RVB + Blanc (RGBW) 12/24V

-   \* ou 4 canaux de LED blanches 12/24V

-   \* ou 4 canaux de lampes halogènes 12/24V (144W 12V / 288W 24V max.)

-   \* ou des ventilateurs 12 / 24V.

-   Nécessite une alimentation 12/24V séparée.

-   Mesure de consommation globale ou par canal instantanée ou cumulée.

-   Fonction répéteur (routeur) pour étendre le réseau Z-Wave.

 \

Fonctions 
---------

-   Commander des éclairages basse tension 12/24V (halogène ou LED)

-   S’installe derrière un interrupteur existant

-   Simulation lumineuse précédemment programmée

-   Fonction ON/OFF et Variation

-   Petit, discret et esthétique

-   Facilité d’utilisation et d’installation

 \

Caractéristiques techniques 
---------------------------

-   Alimentation : 12 V ou 24 V continu

-   Puissance maximale de sortie :

-   \* 12A au total (addition de l’ensemble des canaux),

-   \* max. 6A pro Kanal

-   Puissance maximale avec lampes halogènes :

-   \* 12V - 144W total (tous canaux),

-   \* 24V - 288W total (tous canaux)

-   Fréquence de modulation PWM : 244 Hz

-   Consommation : 0,3W

-   Funkprotokoll : Z-Wave 868,4MHz (EU)

-   Puissance d’émission Z-Wave : 1mW

-   Température de fonctionnement : 0 - 40 C

-   Pour installation dans des boites : Ø≥50 mm

-   Abmessungen : 42 x 37 x 17 mm

-   Normes Européenes : EMC 2004/108/EC R&TTE 199/5/WE

-   Ce module nécessite un contrôleur Z-Wave pour fonctionner.

 \

Données du module 
-----------------

-   Marke : Fibar Group

-   Name : Fibaro FGRGB-101 RGBW

-   Hersteller-ID : 271

-   Produkttyp : 2304

-   Produit ID : 4096

 \

Configuration 
-------------

Pour configurer le plugin OpenZwave et savoir comment mettre Jeedom en
inclusion référez-vous à cette
[documentation](https://jeedom.fr/doc/documentation/plugins/openzwave/fr_FR/openzwave.html).

 \

> **Important**
>
> Pour mettre ce module en mode inclusion il faut appuyer 3 fois sur le
> bouton d’inclusion, conformément à sa documentation papier.

 \

![vue bp inclusion](../images/fibaro.fgrgb101/vue_bp_inclusion.png)

 \

Une fois inclus vous devriez obtenir ceci :

 \

![Plugin Zwave](../images/fibaro.fgrgb101/configuration.png)

 \

### Commandes 

Une fois le module reconnu, les commandes associées au module seront
disponibles.

 \

![Commandes](../images/fibaro.fgrgb101/commande_1.png)

![Commandes](../images/fibaro.fgrgb101/commande_2.png)

 \

Voici la liste des commandes :

-   Couleur : C’est la commande qui permet de régler le code couleur à
    afficher

-   Cheminée : C’est la commande qui permet de simuler une ambiance de
    cheminée

-   Orage : C’est la commande qui permet de simuler une ambiance d’Orage

-   Aube : C’est la commande qui permet de simuler une ambiance d’aude
    (levée progressive du soleil)

-   Fading : C’est la commande qui permet de simuler l’ensemble du
    spectre de couleur

-   RBB : C’est la commande qui permet de simuler une ambiance de flic

-   Blanc Froid : C’est la commande qui permet de simuler d’avoir une
    couleur type blanc froid, si le bandeau de couleur le permet. (cette
    commande est non visible par défaut)

-   Blanc Chaud : C’est la commande qui permet de simuler d’avoir une
    couleur type blanc chaud, si le bandeau de couleur le permet. (cette
    commande est non visible par défaut)

-   On : C’est la commande qui permet d’allumer le bandeau sur la
    dernière couleur choisit auparavant

-   Off : C’est la commande qui permet d’éteindre le bandeau

-   Intensité : C’est la commande qui permet de régler l’intensité
    lumineuse

A noter que sur le dashboard toutes les infos se retrouvent sur le même
icone

 \

### Configuration du module 

Vous pouvez effectuer la configuration du module en fonction de votre
installation. Il faut pour cela passer par le bouton "Configuration" du
plugin OpenZwave de Jeedom.

 \

![Configuration plugin Zwave](../images/plugin/bouton_configuration.jpg)

 \

Vous arriverez sur cette page (après avoir cliqué sur l’onglet
Paramètres)

 \

![Config1](../images/fibaro.fgrgb101/parametres.png)

 \

Détails des paramètres :

Merci de vous rapporter à la capture d’écran précédente, les paramètres
étant traduit en francais.

 \

### Groupes 

Ce module possède cinq groupes d’association, seul le cinquième est
indispensable.

 \

![Groupe](../images/fibaro.fgrgb101/groupes.png)

Bon à savoir 
------------

### Spécificités 

Utilisation des capteurs 0-10V.

 \

> **Caution**
>
> Pour l’instant, la configuration par défaut de jeedom ne le permet
> pas, mais une configuration spécifique peut être envisagée.

### Visuel alternatif 

 \

![Visuel alternatif](../images/fibaro.fgrgb101/Visuel_alternatif.png)

 \

Wakeup 
------

Pas de notion de wakeup sur ce module.

 \

F.A.Q. 
------

Pour l’instant, la configuration par défaut de jeedom ne le permet pas,
mais une configuration spécifique peut être envisagée.

 \

