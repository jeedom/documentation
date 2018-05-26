Philio Smart Color Button 
=========================

 \

-   **Das Modul**

 \

![module](../images/philio.psr04/module.jpg)

 \

-   **In Jeedom sichtbar**

 \

![vuedefaut1](../images/philio.psr04/vuedefaut1.jpg)

 \

Zusammenfassung
------

 \

Cet interrupteur au design unique propose plusieurs fonctions. Vous
pourrez l’utiliser pour allumer, éteindre ou varier l’éclairage, ajuster
la position de vos volets, régler la température du thermostat ou
l’utiliser comme une minuterie.

Une fois inclus dans votre réseau Z-Wave, l’interrupteur PSR04 de Philio
devra être associé au(x) périphérique(s) que vous souhaitez contrôler.
Il peut fonctionner uniquement par association directe avec des
périphériques, et ne peut lancer de scènes créées dans votre contrôleur
domotique Z-Wave.

Utilisé comme un variateur, il a le même comportement qu’un variateur
traditionnel. Tournez le bouton vers la droite pour augmentez la
lumière, et vers la gauche pour la diminuer.

De plus, vous pouvez facilement déplacer et positionner cet interrupteur
à l’endroit de votre choix grâce à son support magnétique. Sa conception
étanche permet de l’installer dans un endroit à forte humidité comme une
salle de bains.

Il utilise la dernière puce Z-Wave série 500, offrant une augmentation
de la portée radio de 50% et une vitesse de communication de 250% plus
rapide par rapport aux précédents produits Z-Wave, ainsi qu’une plus
faible consomation d’énergie permettant une plus grande autonomie.

 \

Funktionen 
---------

 \

-   Interrupteur multifonctions

-   Technologie Z-Wave+

-   Fonction ON/OFF et variation (éclairage ou volets)

-   Fonction minuterie intégrée

-   Etanche

-   S’adapte à tout style de décoration

-   Batterie rechargeable

-   Très faible consommation d’énergie

-   Longue durée de vie de la batterie (6 mois par charge)

-   Support magnétique

-   LED d’indication RGBW

-   Facile à installer

 \

Caractéristiques techniques 
---------------------------

 \

-   Alimentation : Batterie Lithium Polymère 3.7V, 220mA vAutonomie de
    la batterie : 6 mois pour 2h de charge

-   Consommation en veille : 18µA

-   Consommation en fonctionnement : 45mA

-   Fréquence : 868.42 MHz

-   Distance de transmission : 100m en extérieur, 40m en intérieur

-   Abmessungen :

Support : 71,16 x 10,94 mm (diamétre x épaisseur) Bouton : 59,99 x 14,89
mm (diamétre x épaisseur) Support + Bouton : 71,16 x 17,22 mm (diamétre
x épaisseur) \* Certifications :

EN 301 489-1, EN 301 489-3 EN 300 220-1, EN 300 220-2 EN62479, EN60950
FCC Part 15 B, FCC Part 15 C

 \

Données du module 
-----------------

 \

-   Marke : Philio

-   Name: PSR04 Smart Color Button

-   Hersteller-ID : 316

-   Produkttyp : 9

-   Produit ID : 34

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
> Pour mettre ce module en mode inclusion il faut le mettre en position
> basse (inclusion) et appuyer sur le bouton, conformément à sa
> documentation papier.

 \

![inclusion](../images/philio.psr04/inclusion.jpg)

 \

Une fois inclus vous devriez obtenir ceci :

 \

![Plugin Zwave](../images/philio.psr04/information.jpg)

 \

### Commandes 

 \

Une fois le module reconnu, les commandes associées au module seront
disponibles.

 \

![Commandes](../images/philio.psr04/commandes.jpg)

 \

Voici la liste des commandes :

 \

-   Etat : c’est la commande qui remontera la position du bouton de 0 à
    100%

-   Batterie : c’est la commande qui remonte l’état de batterie du
    module

 \

### Configuration du module 

 \

> **Important**
>
> Lors d’une première inclusion réveillez toujours le module juste après
> l’inclusion.

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

![Config1](../images/philio.psr04/config1.jpg)

 \

Détails des paramètres :

 \

-   1: définit la borne la plus basse (position complètement à gauche)

-   2 : définit la borne la plus haute (position complètement à droite)

-   10 : intervalle de temps de remontée de batterie

-   25 : permet de définir si le module envoie sa positon
    automatiquement après rotation (1s de délai) ou si il faut appuyer
    sur le bouton pour valider l’envoi

-   26 : active l’envoi de scène ou non sur appui du bouton centrale
    (paramètre non pris en compte dans Jeedom)

 \

### Groupes 

 \

Ce module possède deux groupes d’association, le premier est le seul
indispensable. Le deuxième permet de remonter la position à Jeedom

 \

![Groupe](../images/philio.psr04/groupe.jpg)

 \

Bon à savoir 
------------

 \

### Spécificités 

Pour utiliser ce module en télécommande il faut procéder comme suit :

-   Rajouter le contrôleur dans le groupe 2

En effet ce type de module n’est pas fait pour interagir directement
avec une box mais directement avec d’autres modules. Cependant en
rajoutant Jeedom au groupe 2, cela permet de recevoir la position du
bouton et donc de s’en servir pour contrôller un scénario (régler un
volume par exemple)

Wakeup 
------

 \

Pour réveiller ce module il y a une seule et unique façon de procéder :

-   mettre le module en position basse et appuyer sur le bouton

 \

F.A.Q. 
------

 \

 \

Ce module est un module sur batterie, la nouvelle configuration ne sera
prise en compte que si vous réveillez le module.

 \

Note importante 
---------------

 \

> **Important**
>
> Il faut réveiller le module : après son inclusion, après un changement
> de la configuration , après un changement de wakeup, après un
> changement des groupes d’association

 \

**@sarakha63**
