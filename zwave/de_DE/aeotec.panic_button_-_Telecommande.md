Aeotec Panic Button 
===================

 \

-   **Das Modul**

 \

![module](../images/aeotec.panicbutton/module.jpg)

 \

-   **In Jeedom sichtbar**

 \

![vuedefaut1](../images/aeotec.panicbutton/vuedefaut1.jpg)

 \

Zusammenfassung
------

 \

Cette télécommande porte-clés au design moderne et agréable dispose d’un
bouton permettant de contrôler tout type de dispositifs Z-Wave tels que
des lampes, stores, etc.

Mit seinen sehr kleinen Abmessungen können Sie es leicht in Ihre Tasche
stecken. Einfach zu benutzen und elegant, ist es mit einem Ring
ausgestattet, der es erlaubt, es an den Schlüsselbund zu befestigen. Das
macht es verfügbar, wenn Sie das Haus verlassen oder wenn Sie nach Hause zurückkehren.

Le bouton permet de contrôler deux dispositifs ou scènes grâce à la
gestion des appuis courts et longs. Cette télécommande peut être aussi
bien utilisée comme contrôleur principal que secondaire.

Cette télécommande peut également être utilisée comme un bouton
d’urgence ou de panique. En cas de détresse ou lorsque son détenteur se
trouve face à une autre situation d’urgence, il lui suffit d’appuyer sur
le bouton et un signal Z-Wave sera émis. Dans ce cas, ce périphérique
peut aussi être utilisé comme un médaillon autour du cou.

 \

Funktionen 
---------

 \

-   Télécommande porte-clés

-   Contrôleur principal ou secondaire

-   Ultra compacte et ultra design

-   1 bouton configurable

-   Gère jusqu’à 2 périphériques/scènes

-   Peut être utilisé comme un bouton d’urgence/panique

-   Utilisation autour du cou comme médaillon d’urgence

 \

Caractéristiques techniques 
---------------------------

 \

-   Modultyp : Z-Wave-Sender

-   Alimentation : 1 pile Lithium 3V CR2450

-   Durée de vie de la batterie : 2 à 3 mois pour 10 à 20 utilisations
    par jour

-   Fréquence: 868.42 MHz

-   Distance de transmission : 30m en intérieur

-   Abmessungen : 55 x 30 x 11mm (L x b x h)

 \

Données du module 
-----------------

 \

-   Marke : Aeotec

-   Name : Panic Button

-   Hersteller-ID : 134

-   Produkttyp : 1

-   Produit ID : 38

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
> Pour mettre ce module en mode inclusion il faut appuyer sur le bouton
> LEARN, conformément à sa documentation papier.

 \

![inclusion](../images/aeotec.panicbutton/inclusion.jpg)

 \

Une fois inclus vous devriez obtenir ceci :

 \

![Plugin Zwave](../images/aeotec.panicbutton/information.jpg)

 \

### Commandes 

 \

Une fois le module reconnu, les commandes associées au module seront
disponibles.

 \

![Commandes](../images/aeotec.panicbutton/commandes.jpg)

 \

Voici la liste des commandes :

 \

-   Boutons : c’est la commande qui remontera le bouton appuyé

1 : Bouton appui court

2 : Bouton appui long

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
Paramètres)

 \

![Config1](../images/aeotec.panicbutton/config1.jpg)

 \

Détails des paramètres :

 \

-   250: mode de fonctionnement de la télécommande (absolument mettre
    Scene pour s’en servir en télécommande)

-   255 : permet de resetter d’usine le Keyfob

 \

### Groupes 

 \

Ce module possède un seul et unique groupe d’association. Il est
indispensable.

 \

![Groupe](../images/aeotec.panicbutton/groupe.jpg)

 \

Bon à savoir 
------------

 \

### Spécificités 

Pour utiliser ce module en télécommande il faut procéder comme suit :

-   1 : Inclure la télécommande

-   2 : Réveiller la télécommande

-   3 : Changer le paramètre 250 à true (bien le faire même s’il
    apparait déjà à true)

-   4 : Réveiller la télécommande et s’assurer que le changement à été
    pris en compte

-   5 : Changer le mode de focntionnement de la télécommande en restant
    appuyé sur les deux boutons au dos pendant 3 secondes.

Wakeup 
------

 \

Pour réveiller ce module il y a une seule et unique façon de procéder :

-   rester appuyé 3 secondes sur le bouton LEARN

 \

F.A.Q. 
------

 \

Ce module se réveille en restant appuyer 3 secondes sur le bouton LEARN.

 \

Ce module est un module sur batterie, la nouvelle configuration ne sera
prise en compte que si vous réveillez la télécommande.

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
