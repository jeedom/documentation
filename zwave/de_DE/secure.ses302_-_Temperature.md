Secure SES 302 "Température" 
============================

 \

-   **Das Modul**

 \

![module](../images/secure.ses302/module.jpg)

 \

-   **In Jeedom sichtbar**

 \

![vuedefaut1](../images/secure.ses302/vuedefaut1.jpg)

 \

Zusammenfassung
------

 \

La sonde SES302 permet la mesure de la température d’ambiance
intérieure. Elle est alimentée par 2 piles AA et est certifiée Z-Wave
Plus. En plus de sa fonction principale, il est possible de câbler
différentes sondes externes SECURE sur le module, soit:

-   Une sonde de température externe NTC (SES001)

-   4 capteurs de température filaires pour tuyau ou réservoir (SES002)
    reliés par des câbles de 1m

-   1 capteur de température filaire pour tuyau ou réservoir (SES003)
    relié par un câble de 4m

Ces modules sont parfaits pour la mesure de température dans des
applications de contrôles de chauffage central ou toute autre
application similaire. Son interface utilisateur est simple, avec un
bouton-poussoir local et une LED d’indication sur la face arrière. On
peut facilement l’inclure / l’exclure dans un réseau Z-Wave.

 \

Funktionen 
---------

 \

-   Mesure précise de la température

-   Application dans des systèmes de contrôle dynamique de
    réservoirs/tubes/planchers chauffants/…​

-   Possibilité de brancher des sonde externes

-   Interopérable avec les produits et systèmes Z-Wave certifiés

-   Installation facile et rapide

-   Rapport de batterie faible

 \

Caractéristiques techniques 
---------------------------

 \

-   Typ : Portable/Wandhalterung

-   Plage de mesure de température: ±0.5°C pour 0°C à 40°C

-   Puce Z-Wave Plus

-   Fréquence : 868,42 Mhz

-   Alimentation: 2x piles AA (LR6)

-   Portée : jusqu’à 100 m en champ libre

-   Indice de protection : IP30

-   Abmessungen : 86 x 85 x 30 mm

 \

Données du module 
-----------------

 \

-   Marke : Hortsmann

-   Name : SES 302 Temperatur Sensor

-   Hersteller-ID : 89

-   Produkttyp : 13

-   Produit ID : 2

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
> Pour mettre ce module en mode inclusion il faut appuyer 1 seconde sur
> le bouton au dos et relacher, conformément à sa documentation papier.

 \

![inclusion](../images/secure.ses302/inclusion.jpg)

 \

Une fois inclus vous devriez obtenir ceci :

 \

![Plugin Zwave](../images/secure.ses302/information.jpg)

 \

### Commandes 

 \

Une fois le module reconnu, les commandes associées au module seront
disponibles.

 \

![Commandes](../images/secure.ses302/commandes.jpg)

 \

Voici la liste des commandes :

 \

-   Température : c’est la commande de mesure de la température

-   Batterie : c’est la commande batterie

Plusieurs températures nons visibles sont aussi disponibles et seront
utiles si vous avez raccordé des sondes externes

 \

### Configuration du module 

 \

> **Important**
>
> Lors d’une première inclusion réveillez toujours le module juste après
> l’inclusion.

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

![Config1](../images/secure.ses302/config1.jpg)

 \

Détails des paramètres :

 \

-   1: Permet de régler de combien doit varier la température pour que
    le module l’envoie à Jeedom (par pas de 0.1)

-   2: Permet de régler l’intervalle de temps d’envoi de la température
    à Jeedom (en minutes)

Tous les autres paramètres sont identiques et correspondent à toutes les
sondes externes éventuellement branchées

 \

### Groupes 

 \

Ce module possède un seul groupe d’association, il est indispensable

 \

![Groupe](../images/secure.ses302/groupe.jpg)

 \

Bon à savoir 
------------

 \

### Spécificités 

 \

### Visuel alternatif 

 \

![widget1](../images/secure.ses302/widget1.jpg)

 \

Wakeup 
------

 \

Pour réveiller ce module il faut appuyer 1 fois sur le bouton au dos

 \

F.A.Q. 
------

 \

Ce module se réveille en appuyant 1 fois sur son bouton d’inclusion.

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
> de la configuration , après un changement de wake up, après un
> changement des groupes d’association

 \

**@sarakha63**
