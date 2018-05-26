Fibaro FGSD-002 "Smoke Sensor 2" 
================================

 \

-   **Das Modul**

 \

![module](../images/fibaro.fgsd102/module.jpg)

 \

-   **In Jeedom sichtbar**

 \

![vuedefaut1](../images/fibaro.fgsd102/vuedefaut1.jpg)

 \

Zusammenfassung
------

 \

Doté de lignes douces, d’une surface polie et d’une petite taille, ce
détecteur de fumée vous permettra d’être alerté d’une menace avec des
Leds RGB multicouleurs et une sirène intégrée. Le grand format de la
grille permet de détecter la plus petite quantité de fumée afin
d’obtenir une réaction rapide. Il trouvera ainsi très facilement sa
place dans votre domicile pour préserver la sécurité de toute la
famille.

Le détecteur de fumée Fibaro FGSD-002 est un Détecteur Avertisseur
Autonome de Fumée (DAAF) conforme à la norme EN 14604:2005. Bien
qu’autonome, il est également communiquant grâce à la technologie Z-Wave
Plus.

Certains matériaux brûlent sans fumer. C’est pourquoi les ingénieurs de
Fibaro ont décidé d’inclure une protection supplémentaire dans leur
détecteur de fumée sous la forme d’un capteur de température. Si la
quantité de fumée n’est pas suffisante pour déclencher l’alarme,
l’appareil sera toujours en mesure de détecter une menace en détectant
un changement rapide de la température causée par le feu. Un changement
rapide de la température ou une augmentation jusqu’à 54°C est suffisant
pour que le capteur de fumée détecte une menace et le signale aux
habitants de la maison. Seul ce type de capteur de fumée offre une
efficacité élevée, indépendamment de ce qui brûle.

 \

Funktionen
---------

 \

-   Détecteur de fumée Z-Wave

-   Alimenté sur batterie

-   Sensibilité du capteur réglable (3 niveaux)

-   Protection contre le sabotage

-   Alarme signalée par le son, une lumière LED et un signal Z-Wave

-   Détection d’incendie par mesure de la température de l’air

-   Test d’efficacité automatique, effectuée toutes les 5 secondes

-   Testeur de couverture du réseau Z-Wave intégré

-   Conforme avec la norme EN 14604:2005

-   Compatible Z-Wave Plus

-   Installation très simple - il suffit de l’installer dans un endroit
    ou il y a un risque de feu

 \

Caractéristiques techniques 
---------------------------

 \

-   Modultyp : Z-Wave-Sender

-   Alimentation : Batterie Lithium 3V CR123A

-   Batterielaufzeit  : 3 Jahre

-   Fréquence : 868,42 MHz

-   Distance de transmission : 50m champ libre, 30m en intérieur

-   Abmessungen : 65 x 28 mm (Durchmesser x Höhe)

-   Température de fonctionnement : 0-55°C

-   Humidité de fonctionnement : 0% - 93%

-   Gamme de mesure de la température : -20 à 100°C

-   Sensibilité à la fumée : 1er niveau - 1,20 +/- 0,5% obs/m; 2e
    niveau - 1,80 +/- 0,5% obs/m; 3e niveau - 2,80 +/- 0,5% obs/m

-   Niveau sonore: 85 dB à 3m

-   Précision de la mesure : 0,5°C (dans une gamme de 0 à 55°C)

-   Normes : EMC 2004/108/EC et R&TTE 199/5/WE

-   Certifications : EN 14604:2005

 \

Données du module 
-----------------

 \

-   Marke : Fibar Group

-   Name : Fibaro Rauch-Sensor FGSD-002

-   Hersteller-ID : 271

-   Produkttyp : 3074

-   Produit ID : 4098

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
> bouton central d’inclusion, conformément à sa documentation papier.

 \

![inclusion](../images/fibaro.fgsd102/inclusion.jpg)

 \

Une fois inclus vous devriez obtenir ceci :

 \

![Plugin Zwave](../images/fibaro.fgsd102/information.jpg)

 \

### Commandes 

 \

Une fois le module reconnu, les commandes associées au module seront
disponibles.

 \

![Commandes](../images/fibaro.fgsd102/commandes.jpg)

 \

Voici la liste des commandes :

 \

-   Fumées : c’est la commande d’alerte du module (pour la fumée, la
    chaleur …​)

-   Température : c’est la commande de mesure de la température

-   Sabotage : c’est la commande de sabotage. Elle signale l’ouverture
    du boitier

-   Alerte Test : c’est la commande qui remontera le fait que le module
    est en mode test

-   Alerte Chaleur : c’est la commande qui remontera une alerte chaleur
    (pas fiable encore)

-   Batterie : c’est la commande batterie

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
Paramètres)

 \

![Config1](../images/fibaro.fgsd102/config1.jpg)

![Config2](../images/fibaro.fgsd102/config2.jpg)

 \

Détails des paramètres :

 \

-   Wakeup : c’est l’intervalle de réveil du module (valeur
    recommandée 21600)

-   1: permet de régler la sensibilité de la détection de fumée

-   2: permet de choisir les notifications qui seront envoyées à Jeedom
    (conseil : toutes)

-   3: permet de choisir quelles notifications seront accompagnées d’une
    indication visuelle

-   4: permet de choisir quelles notifications seront accompagnées d’une
    indication sonore (dans tous les cas les detections de chaleurs et
    d’incendies feront sonner le module)

-   10: ne pas changer ce paramètre sauf si vous savez ce que vous
    faites

-   11: idem

-   12: idem

-   13: permet de notifier d’autres modules zwave (à désactiver sauf si
    vous savez pourquoi vous l’activez)

-   20: durée entre deux rapports de températures

-   21: différence de température à partir de laquelle, même si la durée
    du dessus n’est pas atteinte, la température sera envoyée à Jeedom

-   30: température de déclenchement de l’alarme Chaleur

-   31: intervalle de signalisation des pics de température

-   32: intervalle de signal si perte de Zwave

 \

### Groupes 

 \

Pour un fonctionnement optimum de votre module. Il faut que Jeedom soit
associé à minima aux groupes 1 4 et 5:

 \

![Groupe](../images/fibaro.fgsd102/groupe.jpg)

 \

Bon à savoir 
------------

 \

### Spécificités 

 \

### Visuel alternatif 

 \

![widget1](../images/fibaro.fgsd102/widget1.jpg)

 \

Wakeup 
------

 \

Pour réveiller ce module il faut appuyer 3 fois sur le bouton central

 \

F.A.Q. 
------

 \

Ce module se réveille en appuyant 3 fois sur son bouton d’inclusion.

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
