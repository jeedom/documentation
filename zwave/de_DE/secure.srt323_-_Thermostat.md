Secure SRT 323 "Thermostat" 
===========================

 \

-   **Das Modul**

 \

![module](../images/secure.srt323/module.jpg)

 \

-   **In Jeedom sichtbar**

 \

![vuedefaut1](../images/secure.srt323/vuedefaut1.jpg)

 \

Zusammenfassung
------

 \

Le SRT323 est un thermostat mural fonctionnant sur batterie. Il dispose
d’un bouton rotatif permettant à l’utilisateur de régler la température
de consigne dans la pièce. Ce thermostat intègre un relais de commande
de charge. Il n’est donc pas nécessaire d’installer un actionneur près
de la chaudière.

En vérifiant la température de consigne avec la température réelle
mesurée, le thermostat décide d’actionner la chaudière. De plus ce
thermostat intègre un algorythme TPI (time-proportionnal integral),
permettant une optimisation et un réglage plus juste de la température
de votre environnement.

Le thermostat peut recevoir la température de consigne depuis un autre
contrôleur Z-Wave, et peut être également utilisé comme un capteur de
température. Le thermostat lui-même n’a pas de timer intégré mais
exécute les commandes Z-Wave et les commandes locales.

Il peut être utilisé comme un remplaçant direct pour les thermostats
existants, sans devoir effectuer de changements de câblage. L’algorythme
TPI va permettre d’optimiser l’allumage et l’extinction de la chaudière
afin de maintenir au mieux la température de consigne, sans
"dépassement" de celle-ci. Il à été démontré que les contrôleurs TPI
peuvent fournir des économies d’énergie considérables par rapport aux
régulateurs de chauffage traditionnels.

Le SRT323 est un partenaire idéal pour une utilisation avec passerelle
domotique, vous permettant de contrôler à distance votre système de
chauffage. Vous n’aurez plus à vous soucier de rentrer chez vous dans
une maison froide, tant que vous avez un smartphone, une tablette ou un
PC à portée de main et connecté à internet.

 \

Funktionen 
---------

 \

-   Thermostat pour application domestique

-   Remplace un thermostat existant

-   Technologie sans fil Z-Wave

-   Ecran LCD rétroéclairé

-   Simple d’utilisation

-   Compatible avec d’autres produits Z-Wave

-   Un seul bouton

 \

Caractéristiques techniques 
---------------------------

 \

-   Modultyp : Z-Wave-Controller

-   Algorythme TPI intégré

-   Relai: 3(1)A 230V AC

-   Plage de température réglable: 5°C à 30°C

-   Alimentation : 2x piles AAA (LR3)

-   Durée de vie des piles : 2 ans

-   Fréquence : 868,42 Mhz

-   Portée : jusqu’à 50 m en champ libre

-   Indice de protection : IP30

-   Température de fonctionnement : 0°C à 40°C

-   Abmessungen : 86 x 86 x 36,25 mm

 \

Données du module 
-----------------

 \

-   Marke : Hortsmann

-   Name : SRT 323 Electronic Raumthermostat und Temperatursensor

-   Hersteller-ID : 89

-   Produkttyp : 1

-   Produit ID : 4

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
> Pour mettre ce module en mode inclusion il faut mettre le switch 1 en
> position ON puis avec la molette afficher L et appuyer sur la molette,
> conformément à sa documentation papier.

 \

![inclusion](../images/secure.srt323/inclusion.jpg)

 \

> **Important**
>
> Ce module est capricieux à l’inclusion. Lors d’une première inclusion
> réveillez toujours le module juste après l’inclusion. Pour ce faire
> laisser le switch 1 en position ON puis avec la molette mettez vous en
> position "n" et appuyez sur le bouton. Appuyez une seconde fois apres
> 10 secondes pour être sûr. Une fois fait, cliquez sur le bouton
> Synchroniser (visible en vue expert) à côté des boutons
> Inclusion/Exclusion. Ensuite sur la page de votre module cliquez sur
> la loupe en haut à droite.

 \

Une fois inclus vous devriez obtenir ceci :

 \

![Plugin Zwave](../images/secure.srt323/information.jpg)

 \

### Commandes 

 \

Une fois le module reconnu, les commandes associées au module seront
disponibles.

 \

![Commandes](../images/secure.srt323/commandes.jpg)

 \

Voici la liste des commandes :

 \

-   Température : c’est la commande de mesure de la température

-   ConsigneEtat : c’est la commande qui donne la consigne en cours

-   Consigne : c’est la commande qui permet de régler la consigne

-   Etat Chauffe : c’est la commande qui permet de savoir si le
    thermostat est en mode chauffe ou non

-   Batterie : c’est la commande batterie

 \

### Configuration du module 

 \

Ensuite il est nécessaire d’effectuer la configuration du module en
fonction de votre installation. Il faut pour cela passer par le bouton
"Configuration" du plugin OpenZwave de Jeedom.

 \

![Configuration plugin Zwave](../images/plugin/bouton_configuration.jpg)

 \

Vous arriverez sur cette page (après avoir cliqué sur l’onglet
paramètres)

 \

![Config1](../images/secure.srt323/config1.jpg)

 \

Détails des paramètres :

 \

-   1: permet d’activer ou non le capteur de température interne

-   2: permet de choisir l’unité de la température

-   3: permet de définir le palier de variation de la température pour
    que le module la remonte (par unité de 0.1°C)

 \

### Groupes 

 \

Pour un fonctionnement optimum de votre module il faut que Jeedom soit
associé aux 5 groupes

 \

![Groupe](../images/secure.srt323/groupe.jpg)

 \

Bon à savoir 
------------

 \

### Spécificités 

 \

> **Important**
>
> Ce module est sur batterie. Donc il est important de noter qu’un
> changement de consigne sera uniquement pris en compte au reveil. Par
> défaut le wake up est à 86400 secondes. Il est vivement recommandé de
> le diminuer à 10 minutes environ. Ainsi un changement de consigne sera
> pris en compte par le module au maximum après 10 minutes

 \

Wakeup 
------

 \

Pour réveiller ce module il faut mettre le switch 1 en position ON et
avec la molette choisir n et appuyer sur la molette.

 \

F.A.Q. 
------

 \

 \

Ce module est un module sur batterie, la nouvelle configuration sera
prise en compte au prochain wake up.

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
