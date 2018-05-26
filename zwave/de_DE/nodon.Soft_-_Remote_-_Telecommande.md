Nodon Télécommande - Soft Remote 
================================

 \

-   **Das Modul**

 \

![module](../images/nodon.softremote/module.jpg)

 \

-   **In Jeedom sichtbar**

 \

![vuedefaut1](../images/nodon.softremote/vuedefaut1.png)

 \

Zusammenfassung
------

 \

La Soft Remote NodOn® peut contrôler directement n’importe quel appareil
compatible Z-Wave® ou Z-Wave Plus® tel que la prise intelligente NodOn®.

Elle peut également déclencher des scènes via une centrale domotique
compatible.

 \

Funktionen
---------

 \

-   Contrôle n’importe quel appareil compatible Z-Wave

-   Résistante aux chocs et aux éclaboussures

-   Se fixe partout grâce à son aimant intégré

-   6 coloris disponibles

 \

Caractéristiques techniques 
---------------------------

 \

-   Batterie : CR2032 - Batterie 1,5-2 Jahre

-   4 boutons

-   Aimant intégré pour fixation sur surface métallique

-   Résistante aux chocs et aux éclaboussures

-   Température de fonctionnement : 0°C à 40°C - Altitude : 2000m

-   Z-Wave® Funk Protokoll : 868,4MHz - 500 Serie - Z-Wave kompatibel
    Plus® SDK 06.51.06

-   Portée : 40m en intéieur / 80m en extérieur

-   Abmessung : 56*56*20mm

-   Garantie 2 ans

 \

Données du module 
-----------------

 \

-   Marke : Nodon

-   Name : CRC-3-6-0x Soft Remote (Fernbedienung)

-   Hersteller-ID : 357

-   Produkttyp : 2

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
> Pour mettre ce module en mode inclusion il faut appuyer sur les deux
> bouton (+ et 0 plein) jusqu’à que la lumière devienne rose puis
> appuyer sur le bouton +, conformément à sa documentation papier.

 \

![inclusion](../images/nodon.softremote/inclusion.jpg)

 \

Une fois inclus vous devriez obtenir ceci :

 \

![Plugin Zwave](../images/nodon.softremote/information.png)

 \

### Commandes 

 \

Une fois le module reconnu, les commandes associées au module seront
disponibles.

 \

![Commandes](../images/nodon.softremote/commandes.png)

 \

Voici la liste des commandes :

 \

-   Boutons : c’est la commande qui remontera le bouton appuyé

+----------------+----------------+----------------+----------------+----------------+
| Boutons        | Appui          | Appui Long     | Relachement    | Double appui   |
+================+================+================+================+================+
| **1 (0         | 10             | 12             | 11             | 13             |
| plein)**       |                |                |                |                |
+----------------+----------------+----------------+----------------+----------------+
| **2 (+)**      | 20             | 22             | 21             | 23             |
+----------------+----------------+----------------+----------------+----------------+
| **3 (0 vide)** | 30             | 32             | 31             | 33             |
+----------------+----------------+----------------+----------------+----------------+
| **4 (-)**      | 40             | 42             | 41             | 43             |
+----------------+----------------+----------------+----------------+----------------+

-   Batterie : c’est la commande qui remonte le niveau des piles

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

![Config1](../images/nodon.softremote/config1.png)

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

![Groupe](../images/nodon.softremote/groupe.png)

 \

-   Groupe 1 – Lifeline : Ce groupe est généralement utilisé pour
    reporter des informations de la Smart Plug au contrôleur principal
    du réseau.

-   Groupe 2 à 5 – Les appareils dans ces groupes sont contrôlés par le
    bouton correspondant selon le profil MONO

-   Groupe 6 à 7 – Les appareils dans ces groupes sont contrôlés par les
    boutons correspondants selon le profil DUO

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

Pour réveiller ce module il suffit d’appuyer sur un des boutons

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

**@lunarok**
