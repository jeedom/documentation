Swiid Interrupteur - Swiidinter 
===============================

 \

-   **Das Modul**

 \

![module](../images/swiid.inter/module.jpg)

 \

-   **In Jeedom sichtbar**

 \

![vuedefaut1](../images/swiid.inter/vuedefaut1.jpg)

 \

Zusammenfassung
------

 \

SwiidInter est le premier interrupteur sur cordon dans l’environnement
domotique Z-Wave qui soit suffisamment petit et discret pour être
comparable à un interrupteur sur cordon ordinaire.

Il peut être utilisé à la fois manuellement comme n’importe quel
interrupteur sur cordon ordinaire et à distance via un contrôleur
Z-Wave.

L’interrupteur SwiidInter offre également des possibilités d’association
et ce à double sens. Ainsi, il peut être actionné automatiquement par un
autre périphérique Z-Wave du même réseau, comme par exemple par le
déclenchement d’un détecteur de présence. Inversement avec un appui
court ou avec un appui long il peut commander deux groupes séparés de
périphériques Z-Wave qui lui auront été associés : par exemple tous les
autres éclairages de la pièce où se trouve votre interrupteur
SwiidInter.

L’interrupteur SwiidInter s’installe exactement comme un interrupteur
sur cordon ordinaire : c’est donc une installation simple et rapide qui
ne nécessite aucun outil spécialisé. Il doit ensuite être configuré pour
s’intégrer dans un "réseau" Z-Wave, ce réseau pouvant être aussi simple
qu’une seule télécommande qui commande votre interrupteur SwiidInter à
distance.

 \

Funktionen 
---------

 \

-   Interrupteur sur cordon utilisable à la fois manuellement
    (appui court) et par radio à distance (Z-Wave)

-   Utilisation en remplacement d’un interrupteur à cordon standard
    d’une lampe de chevet, de table ou de bureau

-   Fonction ON/OFF

-   Activation d’un scénario domotique sur appui long
    (association Z-Wave)

-   Abmessungen vergleichbar mit einem normalen Schnurschalter

-   S’installe comme un interrupteur sur cordon ordinaire

-   Convient pour tous types d’ampoules de lampe

 \

Caractéristiques techniques 
---------------------------

 \

-   Modultyp : Z-Wave-Empfänger

-   Couleur : noire

-   Alimentation: 230V ± 10% - 50Hz

-   Puissance maxi : 660W

-   Consommation : &lt; 0,08W

-   Indice de protection: IP20

-   Funkprotokoll : Z-Wave® (SDK 4.55)

-   Fréquence radio : 868,42 MHz (EU)

-   Dist. transmission: Jusqu’à 30m en intérieur (dépend des matériaux)

-   Temp. fonctionnement : 0 – 40°C

-   Affichage marche/arrêt : LEDs bleues

-   Abmessungen : 84 x 32 x 29 mm

-   Normes UE : EN 61058-2-1:2011 EN 55015

 \

Données du module 
-----------------

 \

-   Marke : Swiid

-   Name : Swiidinter

-   Hersteller-ID : 358

-   Produkttyp : 256

-   Produit ID : 256

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
> à l’arrière, conformément à sa documentation papier

 \

![inclusion](../images/swiid.inter/inclusion.jpg)

 \

Une fois inclus vous devriez obtenir ceci :

 \

![Plugin Zwave](../images/swiid.inter/information.jpg)

 \

### Commandes 

 \

Une fois le module reconnu, les commandes associées au module seront
disponibles.

 \

![Commandes](../images/swiid.inter/commandes.jpg)

 \

Voici la liste des commandes :

 \

-   Etat : C’est la commande qui permet de connaître le statut de la
    lumière

-   ON : C’est la commande qui permet d’allumer la lumière

-   OFF : C’est la commande qui permet d’éteindre la lumière

 \

A noter que sur le dashboard toutes les infos se retrouvent sur le même
icone

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
paramètres)

 \

![Config1](../images/swiid.inter/config1.jpg)

 \

Détails du paramètre :

 \

Ce paramètre permet de choisir le comportement lorsque vous associez le
swiidinter à un autre module (appui long)

 \

-   Inactif : n’aura aucun effet sur les autres lumières

-   Uniquement OFF : sera effectif uniquement pour éteindre les autres
    lumières

-   Uniquement ON : sera effectif uniquement pour allumer les autres
    lumières

-   ON et OFF (fully) : sera effectif pour allumer et éteindre les
    autres lumières

 \

### Groupes 

 \

Ce module possède deux groupes d’association.

 \

![Groupe](../images/swiid.inter/groupe.jpg)

 \

> **Important**
>
> Pour un fonctionnement optimum de votre module. Il faut que Jeedom
> soit associé à minima au groupe 2.

 \

Associer à une autre lumière 
----------------------------

 \

Pour associer le swiidinter à une autre lumière et pouvoir bénéficier de
l’allumage d’une autre lumière, il suffit de la rajouter au groupe
d’association 1 via l’écran cité au-dessus.

 \

Bon à savoir 
------------

 \

### Visuel alternatif 

 \

![vuewidget](../images/swiid.inter/vuewidget.jpg)

 \

Wake up 
-------

 \

Pas de notion de wake up sur ce module.

 \

F.A.Q. 
------

 \

Avez-vous associé les deux modules et avez-vous bien configuré la partie
spécifique.

 \

Non. Le module ne le permet pas.

 \

**@sarakha63**
