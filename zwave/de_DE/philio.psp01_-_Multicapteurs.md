Philio PSP01 
============

 \

-   **Das Modul**

 \

![module](../images/philio.psp01/module.jpg)

 \

-   **In Jeedom sichtbar**

 \

![vuedefaut1](../images/philio.psp01/vuedefaut1.jpg)

 \

Zusammenfassung 
------

 \

Le détecteur PSP01 propose 3 fonctions différentes : détection de
mouvement, capteur de température et détecteur de luminosité.

Ce détecteur peut être utilisé pour la sécurité ou pour
l’automatisation. Quand le détecteur est associé avec des appareils de
sécurité, il sert comme déclencheur d’alertes en détectant des
changements dans les niveaux de radiation infra-rouge. Si une personne
bouge dans le champ de vision du détecteur, un signal radio est
transmis, ce qui déclenche une alarme afin de dissuader les intrus.

Le détecteur peut également être utilisé en association avec un
contrôleur Z-Wave pour des usages domotiques, en détectant à la fois les
changements dans les niveaux de radiation infrarouge (présence) et les
modifications dans le niveau de luminosité. Ainsi, on peut déclencher un
éclairage lors d’une détection de mouvement dans l’obscurité.

Le détecteur remontera aussi la luminosité et la température, soit en
cas de changement important, et à chaque fois qu’un mouvement est
détecté. Un contrôleur Z-Wave (télécommande, dongle …​) est nécessaire
afin d’intégrer ce détecteur dans votre réseau si vous avez déjà un
réseau existant.

 \

Funktionen 
---------

 \

-   Détecteur 3 en 1: mouvement, température, lumière

-   Adopte la récente puce Z-Wave 400series pour supporter les
    opérations multicanaux et un débit de données plus
    élevé (9.6/40/100kbps)

-   Utilise le SDK Z-Wave 6.02

-   Portée de l’antenne optimisée

-   Utilisation pour des applications domotiques ou de sécurité

-   Bouton pour inclure/exclure le détecteur

-   Autoprotection

-   Indication de batterie faible

-   Petit, discret et esthétique

-   Facilité d’utilisation et d’installation

 \

Caractéristiques techniques 
---------------------------

 \

-   Modultyp : Z-Wave-Sender

-   Alimentation : 1 pile 3V CR123A

-   Durée de vie des piles : 2 ans

-   Fréquence : 868.42 MHz

-   Distance de transmission : 30m en intérieur

-   Capteur de température : -10 à 70° C

-   Capteur de luminosité : 0 à 500 lux

-   Angle de détection PIR : 90°

-   Portée de détection PIR : 8 à 10m

-   Abmessungen : 28 x 96 x 23 mm

-   Poids : 39g

-   Température de fonctionnement : -10 à 40° C

-   Humidité de fonctionnement : 85%RH max

-   Norme CE : EN300 220-1

-   Certification Z-Wave : ZC08-13050003

 \

Données du module 
-----------------

 \

-   Marke : Philio Technology Corporation

-   Name : Philio PSP01

-   Hersteller-ID : 316

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
> Pour mettre ce module en mode inclusion il faut appuyer 3 fois sur le
> bouton d’inclusion, conformément à sa documentation papier.

 \

![inclusion](../images/philio.psp01/inclusion.jpg)

 \

Une fois inclus vous devriez obtenir ceci :

 \

![Plugin Zwave](../images/philio.psp01/information.jpg)

 \

### Commandes 

 \

Une fois le module reconnu, les commandes associées au module seront
disponibles.

 \

![Commandes](../images/philio.psp01/commandes.jpg)

 \

Voici la liste des commandes :

 \

-   Présence : c’est la commande qui remontera une détection de présence

-   Ouverture : c’est la commande qui remontera une détection
    d’ouverture

-   Température : c’est la commande qui permet de remonter la
    température

-   Luminosité : c’est la commande qui permet de remonter la luminosité

-   Sabotage : c’est la commande sabotage (elle est déclenchée en
    cas d’arrachement)

-   Batterie : c’est la commande batterie

 \

Tous les modules de la gamme ayant les mêmes ids, à vous d’afficher ceux
correspondant à votre module.

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

![Config1](../images/philio.psp01/config1.jpg)

![Config2](../images/philio.psp01/config2.jpg)

 \

Détails des paramètres :

 \

-   2: permet de régler le signal envoyé aux modules dans le groupe
    d’association 2

-   3: permet de régler la sensibilité du capteur de présence (0 :
    désactivé 99: sensibilité max)

-   4: permet de régler le niveau de luminosité à partir duquel le
    signal défini en paramètre 2 sera envoyé aux modules associés au
    groupe 2

-   5: mode de fonctionnement (déconseillé de le changer : se reporter
    sur la documentation constructeur)

-   6: mode de fonctionnement du multi-sensor (déconseillé de le changer
    : se reporter sur la documentation constructeur)

-   9: permet de définir au bout de combien de temps le signal OFF sera
    envoyé aux modules associés au groupe 2

-   10: permet de définir la durée entre deux rapports de batterie (une
    unité = 30 minutes)

-   12: permet de définir la durée entre deux rapports de luminosité
    (une unité = 30 minutes)

-   13: permet de définir la durée entre deux rapports de température
    (une unité = 30 minutes)

 \

### Groupes 

 \

Ce module possède deux groupes d’association, seul le premier est
indispensable.

 \

![Groupe](../images/philio.psp01/groupe.jpg)

 \

Bon à savoir 
------------

 \

### Spécificités 

 \

> **Tip**
>
> Ce module a une particularité, n’ayant pas de rapport basé sur les
> variations mais uniquement sur la durée, il envoit toutes ses infos à
> chaque détection. Il envoie aussi plusieurs fois le signal de
> détection de présence à la suite. Il est donc conseillé de cocher la
> case "Evènement sur changement" sur la présence si vous utilisez cette
> commande en déclencheur de scénario.

 \

### Visuel alternatif 

 \

![vuewidget](../images/philio.psp01/vuewidget.jpg)

 \

Wakeup 
------

 \

Pour réveiller ce module il y a une seule et unique façon de procéder :

-   relachez le bouton tamper et réappuyez dessus

 \

F.A.Q. 
------

 \

Ce module se réveille en appuyant sur son bouton tamper.

 \

Cochez la case "Evènement sur changement".

 \

Ce module est un module sur batterie, la nouvelle configuration sera
prise en compte au prochain wakeup.

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
