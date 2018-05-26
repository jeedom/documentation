Nodon Interrupteur - Wall Switch 
================================

 \

-   **Das Modul**

 \

![module](../images/nodon.wallswitch/module.jpg)

 \

-   **In Jeedom sichtbar**

 \

![vuedefaut1](../images/nodon.wallswitch/vuedefaut1.jpg)

 \

Zusammenfassung
------

 \

L’interrupteur mural NodOn® peut contrôler directement n’importe quel
appareil compatible Z-Wave® ou Z-Wave Plus® tel que la prise
intelligente NodOn® ou encore déclencher des scènes via une centrale
domotique compatible.

L’interrupteur possède une platine de fixation pour le monter facilement
dans la maison: en utilisant les vis d’un pot d’encastrement, en le
vissant au mur, ou tout simplement en le collant via les adhésifs
double-face présents au dos de la platine.

 \

Funktionen
---------

 \

-   Contrôle seul ou avec une centrale domotique

-   Facile à monter et démonter

-   Sensation d’appui agréable

-   Sans Fil

-   2 ans de batterie

 \

Caractéristiques techniques 
---------------------------

 \

-   Batterie : CR2032 - Batterie 1,5-2 Jahre

-   4 boutons

-   Montage mural par adhésif double face (inclus) ou vis (non incluses)

-   Température de fonctionnement : 0°C à 40°C

-   Altitude : 2000m

-   Z-Wave® Funk Protokoll : 868,4MHz - 500 Serie - Z-Wave kompatibel
    Plus® SDK 06.51.06

-   Portée : 40m en intérieur / 70m en extérieur

-   Abmessung : 80*80*15mm

-   Garantie 2 ans

-   EN 60950-1:2006 +A11:2009 + A1:2010 + A12:2011 + A2:2013

-   EN 300 220-2 V2.4.1

-   EN301 489-1 V1.9.2

-   EN301 489-3 V1.6.1

-   EN 62479:2010

 \

Données du module 
-----------------

 \

-   Marke : Nodon

-   Name : CWS-3-1-01 Wandschalter

-   Hersteller-ID : 357

-   Produkttyp : 2

-   Produit ID : 3

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
> Pour mettre ce module en mode inclusion il faut appuyer sur les deux
> bouton (1 et 2) jusqu’à que la lumière devienne rose puis appuyer sur
> le bouton 1, conformément à sa documentation papier.

 \

![inclusion](../images/nodon.wallswitch/inclusion.jpg)

 \

Une fois inclus vous devriez obtenir ceci :

 \

![Plugin Zwave](../images/nodon.wallswitch/information.jpg)

 \

### Commandes 

 \

Une fois le module reconnu, les commandes associées aux modules seront
disponibles.

 \

![Commandes](../images/nodon.wallswitch/commandes.jpg)

 \

Voici la liste des commandes :

 \

-   Boutons : c’est la commande qui remontera le bouton appuyé

+----------------+----------------+----------------+----------------+----------------+
| Boutons        | Appui          | Appui Long     | Relachement    | Double appui   |
+================+================+================+================+================+
| **1**          | 10             | 12             | 11             | 13             |
+----------------+----------------+----------------+----------------+----------------+
| **2**          | 20             | 22             | 21             | 23             |
+----------------+----------------+----------------+----------------+----------------+
| **3**          | 30             | 32             | 31             | 33             |
+----------------+----------------+----------------+----------------+----------------+
| **4**          | 40             | 42             | 41             | 43             |
+----------------+----------------+----------------+----------------+----------------+

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

![Config1](../images/nodon.wallswitch/config1.jpg)

 \

Détails des paramètres :

 \

-   1-2 : Permet de choisir le profil des boutons en cas d’usage en
    central (inutile pour un usage dans Jeedom)

-   3 : Paramètre important pour dire si l’interrupteur doit fonctionner
    en mode Scene ou Central Scene (Absolument mettre Scene)

-   4-7 : Choisir le mode de fonctionnement des boutons (en cas
    d’associations groupes)

-   8 : Permet de choisir le mode de fonctionnement de la LED

### Groupes 

 \

Ce module possède 7 groupes d’association.

 \

![Groupe](../images/nodon.wallswitch/groupe.jpg)

![Groupe](../images/nodon.wallswitch/groupe2.jpg)

 \

-   Groupe 1 – Lifeline : Ce groupe est généralement utilisé pour
    reporter des informations de la Smart Plug au contrôleur principal
    du réseau.

-   Groupe 2 à 5 – Les appareils dans ces groupes sont contrôlés par le
    bouton correspondant selon le profil MONO

-   Groupe 6 à 7 – Les appareils dans ces groupes sont contrôlés par le
    bouton correspondant selon le profil DUO

 \

> **Important**
>
> A minima Jeedom devrait se retrouver dans le groupe 1  \

Bon à savoir 
------------

 \

### Spécificités 

 \

-   Ce module peut être capricieux à l’inclusion. Ne pas hésiter à le
    réveiller 1 ou 2 fois après l’inclusion. Et bien vérifier le
    groupe d’association.

 \

Wakeup 
------

 \

Pour réveiller ce module il suffit d’appuyer sur un de ces boutons

 \

F.A.Q. 
------

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
