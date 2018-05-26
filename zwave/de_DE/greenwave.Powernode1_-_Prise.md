Greenwave PowerNode - 1 prise 
=============================

 \

-   **Das Modul**

 \

![module](../images/greenwave.Powernode1/module.jpg)

 \

-   **In Jeedom sichtbar**

 \

![vuedefaut1](../images/greenwave.Powernode1/vuedefaut1.jpg)

 \

Zusammenfassung
------

 \

Le module prise PowerNode de GreenWave est un appareil intelligent qui
se connecte à un de vos appareils électroménagers et électroniques pour
vous permettre de surveiller et contrôler la consommation électrique à
distance via un navigateur Web ou un smartphone.

Utilisant la technologie Z-Wave, la prise commandée PowerNode est
compatible avec la plupart des box domotiques du marché comme Fibaro
Home Center 2, eedomus ou Zipabox.

La module prise PowerNode recueille des données sur la consommation
d’énergie de l’appareil connecté et les transmet à la box domotique.
Cette prise commandée vous permet également d’activer ou désactiver
l’appareil à distance via un navigateur Web ou smartphone ou de définir
un calendrier pour activer ou désactiver automatiquement votre appareil
à des heures prédéfinies.

Une petite molette sur le côté de la prise permet de choisir une couleur
qui représentera la pièce à laquelle elle est affectée. Par exemple "
bleu pour la chambre ". Cette astuce vous permettra de différencier vos
différentes prises et multiprises PowerNode. On peut également régler
cette molette sur un cadenas. Cette fonction permet de verrouiller la
prise afin d’éviter de l’éteindre par accident, mais le contrôle depuis
la boxe domotique ne sera plus possible.

La prise commandée PowerNode dispose aussi d’un indicateur d’état
lumineux qui donne différentes informations en fonction de sa couleur :
prises allumées ou éteintes, portée radio limitée, mode inclusion et
exclusion.

Le module prise PowerNode est équipé d’une protection contre les
surintensités pour protéger l’appareil connecté. La prise PowerNode sera
désactivée en cas du dysfonctionnement d’un appareil défectueux ou d’un
court-circuit. Une protection supplémentaire est assurée par le fusible
interne situé dans la prise.

 \

Funktionen 
---------

 \

-   Commander une lampe ou un appareil à distance

-   Module prise s’intégrant directement entre une prise électrique et
    la charge à commander

-   Permet le suivi de consommation de l’appareil branché

-   Fonction ON/OFF

-   Possibilité de lui affecter un numéro et une couleur afin de
    différencier les différentes PowerNode d’une même installation

-   Bouton On/Off directement sur la prise

-   Protection contre les surintensités

-   Indicateur d’état lumineux

 \

Caractéristiques techniques 
---------------------------

 \

-   Stromversorgung : 250V ~ AC, 50Hz

-   Courant de charge maximum : 10A

-   Puissance de charge maximale : 2400W (@ 240V)

-   Consommation en veille : 0,4 W

-   Précision de mesure : ± 0.1W

-   Protection contre les surintensités : 10A fusible interne

-   Steckertyp : DIN49440 / CEE 7/7 (Schuko)

-   Radio Fréquence Z-Wave : 868.42MHz

-   Portée maximale Z-Wave : 30m

-   Température de fonctionnement : 0 ° C à + 25 ° C

-   Température de stockage : -20 ° C à + 60 ° C

-   Humidité maximale : 5% à 90%

-   Classe IP (Tolérance d’humidité) : IP20

 \

Données du module 
-----------------

 \

-   Marke : GreenWave

-   Name : GreenWave [1 x Steckdose]

-   Hersteller-ID : 153

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
> Pour mettre ce module en mode inclusion il faut appuyer sur le bouton
> inclusion présent sous la prise.

 \

![inclusion](../images/greenwave.Powernode1/inclusion.jpg)

 \

Une fois inclus vous devriez obtenir ceci :

 \

![Plugin Zwave](../images/greenwave.Powernode1/information.jpg)

 \

### Commandes 

 \

Une fois le module reconnu, les commandes associées au module seront
disponibles.

 \

![Commandes](../images/greenwave.Powernode1/commandes.jpg)

 \

Voici la liste des commandes :

 \

-   Etat : C’est la commande qui permet de connaître le statut de la
    prise

-   On : C’est la commande qui permet d’allumer la prise

-   Off : C’est la commande qui permet d’éteindre la prise

-   Puissance : C’est la commande qui remonte la puissance instantanée
    consommée

-   Conso : C’est la commande qui remonte la consommation totale

 \

A noter que sur le dashboard les commandes ON/OFF/ETAT sont regroupées
en un seul bouton.

 \

### Configuration du module 

 \

Vous pouvez effectuer la configuration du module en fonction de votre
installation. Il faut pour cela passer par le bouton "Configuration" du
plugin OpenZwave de Jeedom.

 \

![Configuration plugin Zwave](../images/plugin/bouton_configuration.jpg)

 \

Vous arriverez sur cette page (après avoir cliqué sur l’onglet
Paramètres)

 \

![Config1](../images/greenwave.Powernode1/config1.jpg)

 \

Comme vous pourrez le constater il n’y a pas beaucoup de configuration
pour ce module.

 \

Détails des paramètres :

 \

-   1 : Délai avant le clignotement du bouton : nombres de secondes
    minimum entre deux communications (si ce délai est dépassé le bouton
    de la prise clignotera)

-   2 : Couleur selectionnée de la molette (détectée automatiquement)

 \

### Groupes 

 \

Ce module possède quatre groupes d’association, seul le 3ème groupe est
indispensable.

 \

![Groupe](../images/greenwave.Powernode1/groupe.jpg)

 \

Bon à savoir 
------------

 \

Contrairement à sa grande soeur multiprise, cette prise ne nécessite pas
de polling pour remonter la consommation.

 \

### Reset 

 \

![Config2](../images/greenwave.Powernode1/config2.jpg)

 \

Vous pouvez remettre à zéro votre compteur de consommation en cliquant
sur ce bouton disponible dans l’onglet Système. Il faut choisir
PressButton.

 \

### Spécificités 

 \

Wakeup 
------

 \

Pas de notion de wakeup sur ce module.

 \

F.A.Q. 
------

 \

Avez-vous associé le groupe 3 du module à Jeedom ?

 \

Non. Le module ne le permet pas. Mettez dessus un petit morceau de ruban
adhésif noir.

 \

**@sarakha63**
