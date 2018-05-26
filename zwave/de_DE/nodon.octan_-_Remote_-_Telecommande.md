Nodon Télécommande - Octan 
==========================

 \

-   **Das Modul**

 \

![module](../images/nodon.octan/module.jpg)

 \

-   **In Jeedom sichtbar**

 \

![vuedefaut1](../images/nodon.octan/vuedefaut1.jpg)

 \

Zusammenfassung
------

 \

La Octan Remote NodOn® permet de contrôler n’importe quels récepteurs
compatibles Z- Wave® ou Z-Wave Plus® tels que la prise télécommandée
NodOn® (mode Contrôleur Principal - Standalone), ou encore déclencher
des scènes / actions via une centrale domotique compatible (mode
Gateway)

Son aimant intégré permet de la fixer partout, du radiateur à la porte
de réfrigérateur, en passant par son support mural. Entre télécommande
et interrupteur, la Octan Remote révolutionne le contrôle des objets
domestiques

 \

Funktionen
---------

 \

-   Contrôle seul ou avec une centrale domotique

-   Aimant intégré

-   Led de couleur

-   Platine Murale

-   2 ans de batterie

 \

Caractéristiques techniques 
---------------------------

 \

-   Batterie : CR2032 - Batterie 1,5-2 Jahre

-   4 boutons

-   Support mural fixé par adhésif double face (inclus) ou vis
    (non incluses)

-   Aimant intégré pour fixation sur surface métallique

-   Température de fonctionnement : 0°C à 40°C - Altitude : 2000m

-   Z-Wave® Funk Protokoll : 868,4MHz - 500 Serie - Z-Wave kompatibel
    Plus® SDK 06.51.01 Portée: 40m indoor / 80m outdoor

-   Abmessung : 80*80*15mm

-   Garantie 2 ans

 \

Données du module 
-----------------

 \

-   Marke : Nodon

-   Name : CRC-3-1-00 Octan Remote (Fernbedienung)

-   Hersteller-ID : 357

-   Produkttyp : 2

-   Produit ID : 1

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

![inclusion](../images/nodon.octan/inclusion.jpg)

 \

Une fois inclus vous devriez obtenir ceci :

 \

![Plugin Zwave](../images/nodon.octan/information.jpg)

 \

### Commandes 

 \

Une fois le module reconnu, les commandes associées au module seront
disponibles.

 \

![Commandes](../images/nodon.octan/commandes.jpg)

 \

Voici la liste des commandes :

 \

-   Boutons : c’est la commande qui remontera le bouton appuyé

+----------------+----------------+----------------+----------------+----------------+
| Boutons        | Appui          | Appui Long     | Relâchement    | Double appui   |
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

![Config1](../images/nodon.octan/config1.jpg)

 \

Détails des paramètres :

 \

-   1-2 : Permet de choisir le profils des boutons en cas d’usage en
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

![Groupe](../images/nodon.octan/groupe.jpg)

![Groupe](../images/nodon.octan/groupe2.jpg)

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
    réveiller 1 ou 2 fois après l’inclusion, et bien vérifier le
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

**@sarakha63**
