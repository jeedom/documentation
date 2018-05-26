Fibaro FGRM-222 "Volet roulant" 
===============================

 \

-   **Das Modul**

 \

![module](../images/fibaro.fgrm222/module.jpg)

 \

-   **In Jeedom sichtbar**

 \

![vuedefaut1](../images/fibaro.fgrm222/vuedefaut1.jpg)

 \

Zusammenfassung
------

 \

Le micromodule FGRM-222 va vous permettre de gérer les motorisations de
volets à butée électronique, les stores vénitiens ou encore les portes
de garage grâce au protocole Z-Wave tout en conservant votre
interrupteur existant. Vous allez donc pouvoir actionner le moteur
connecté en utilisant l’interrupteur existant, un émetteur Z-Wave ou
directement depuis le bouton présent sur le micromodule.

De plus, ce micromodule est capable de transmettre la consommation
électrique instantanée (W) et cumulée (KWh) de l’équipement qui lui est
rattaché.

Un contrôleur Z-Wave (télécommande, dongle …​) est nécessaire afin
d’intégrer ce module dans votre réseau si vous avez déjà un réseau
existant.

Chaque module Z-Wave fonctionne comme un répéteur sans fil avec les
autres modules, afin d’assurer une couverture totale de votre
habitation.

Note : Ce module nécessite le neutre pour fonctionner.

 \

Funktionen 
---------

 \

-   Commandez vos stores ou volets roulants à distance

-   Compatible avec BSO et store vénitien avec positionnement des
    lamelles

-   S’installe derrière un interrupteur existant

-   Fonction montée/descente et positionnement

-   Compatible avec les moteurs à butée mécanique ou électronique

-   Mesure de la consommation instantanée et cumulée

-   Mise à jour sans fil avec la box Fibaro Home Center 2

-   Fonction test de la couverture réseau Z-Wave

-   Petit, discret et esthétique

-   Facilité d’utilisation et d’installation

 \

Caractéristiques techniques 
---------------------------

 \

-   Modultyp : Z-Wave-Empfänger

-   Alimentation : 230V, 50 Hz

-   Consommation électrique : &lt; 0,8W

-   Câblage : 3 fils, neutre nécessaire

-   Charge maxi : 1000W

-   Fréquence : 868,42 Mhz

-   Puissance du signal : 1mW

-   Distance de transmission : 50m champ libre, 30m en intérieur

-   Abmessungen : 17 x 42 x 37 mm

-   Température de fonctionnement : 0-40°C

-   Température limite : 105°C

-   Normes : LVD (2006/95/EC), EMC (2004/10B/EC), R&TTE(1999/5/EC)

 \

Données du module 
-----------------

 \

-   Marke : Fibar Group

-   Name : Fibaro FGRM-222

-   Hersteller-ID : 271

-   Produkttyp : 769

-   Produit ID : 4097

 \

Configuration 
-------------

 \

Pour configurer le plugin OpenZwave et savoir comment mettre Jeedom en
inclusion référez-vous à cette
[documentation](https://jeedom.fr/doc/documentation/plugins/openzwave/fr_FR/openzwave.html).

 \

> **Important**
>
> Pour mettre ce module en mode inclusion il faut appuyer 3 fois sur le
> bouton d’inclusion, conformément à sa documentation papier.

 \

![inclusion](../images/fibaro.fgrm222/inclusion.jpg)

 \

Une fois inclus vous devriez obtenir ceci :

 \

![Plugin Zwave](../images/fibaro.fgrm222/information.jpg)

 \

### Commandes 

 \

Une fois le module reconnu, les commandes associées au module seront
disponibles.

 \

![Commandes](../images/fibaro.fgrm222/commandes.jpg)

![Commandes](../images/fibaro.fgrm222/commandes2.jpg)

 \

Voici la liste des commandes :

 \

-   Etat : C’est la commande qui permet de connaître la position de
    votre volet

-   Positionnement : C’est la commande qui permet de définir le
    pourcentage d’ouverture

-   Up : C’est la commande qui permet d’ouvrir complétement le volet

-   Down : C’est la commande qui permet de fermer complétement le volet

-   Rafraichir : C’est la commande qui permet de redemander la position
    du volet

-   Puissance : Commande permettant d’avoir la consommation du module

-   Consommation : Commande permettant de connaître la puissance
    instantanée utilisée par le module

-   STOP : Commande pour stopper le mouvement du volet

-   STOP BSO : Commande pour stopper le mouvement (en mode
    lamelle orientable)

-   Incliner : Permet d’incliner les lamelles (mode lamelle orientable)

-   Décliner : Permet de décliner les lamelles (mode lamelle orientable)

-   Pas : Permet de définir le pas pour un appui sur Décliner ou
    Incliner

 \

### Configuration du module 

 \

Ensuite si vous voulez effectuer la configuration du module en fonction
de votre installation, il faut pour cela passer par la bouton
"Configuration" du plugin OpenZwave de Jeedom.

 \

![Configuration plugin Zwave](../images/plugin/bouton_configuration.jpg)

 \

Vous arriverez sur cette page (après avoir cliqué sur l’onglet
paramètres)

 \

![Config1](../images/fibaro.fgrm222/config1.jpg)

![Config2](../images/fibaro.fgrm222/config2.jpg)

![Config3](../images/fibaro.fgrm222/config3.jpg)

![Config4](../images/fibaro.fgrm222/config4.jpg)

 \

Détails des paramètres :

 \

-   1: permet de bloquer le module (pour figer un volet) (dasn le cas
    d’un appui sur un interrupteur)

-   2: idem mais pour les commandes zwave

-   3: type de rapports (classique ou fibar)

-   10: mode de fonctionnement (store venitien, volet etc…​)

-   12: durée d’un tour complet (en mode store venitien)

-   13: permet de choisir quand les lamelles doivent revenir à leur
    précédente position

-   14: permet de choisir le type d’interrupteur

-   17: permet de choisir combien de temps après la limite définit en 18
    le volet s’arrete

-   18: puissance de sécurité pour le moteur

-   22: NA

-   29: permet de calibrer le volet

-   30 à 35: permet de définir le comportement du module face aux
    différentes alarmes zwave

-   40: delta de puissance pour déclencher une remontée d’infos (même en
    dehors de la période définie en 42)

-   42: période de remontée d’infos

-   43: delta d’énergie pour déclencher une remontée d’infos (même en
    dehors de la période définie en 42)

-   44: permet de choisir si oui ou non la consommation et puissance
    doit prendre en compte celle du module lui même

-   50: permet de choisir si le module doit envoyer les infos aux noeuds
    en association en mode scene ou en mode association

 \

### Groupes 

 \

Ce module possède 3 groupes d’association, seul le troisième est
indispensable.

 \

![Groupe](../images/fibaro.fgrm222/groupe.jpg)

 \

Bon à savoir 
------------

 \

### Reset 

 \

![Config5](../images/fibaro.fgrm222/config5.jpg)

 \

Vous pouvez remettre à zéro votre compteur de consommation en cliquant
sur ce bouton disponible dans l’onglet Système.

 \

### Important 

 \

> **Important**
>
> Pour que le retour d’état fonctionne dans Jeedom, il est nécessaire de
> forcer l’étalonnage de l’équipement (paramètre 29 à "Oui") et le
> positionnement doit être actif (paramètre 10 aux valeurs "Active
> direct", "Active vénitien" ou "Active porte").

 \

### Visuel alternatif 

 \

![vuewidget](../images/fibaro.fgrm222/vuewidget.jpg)

 \

Wakeup 
------

 \

Pas de notion de wakeup sur ce module.

 \

F.A.Q. 
------

 \

Lire la section Reset de cette doc.

 \

**@sarakha63**
