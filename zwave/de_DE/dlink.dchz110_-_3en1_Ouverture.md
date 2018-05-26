D-Link DCH-Z110 - "3 en 1 Ouverture" 
====================================

 \

-   **Das Modul**

 \

![module](../images/dlink.dchz110/module.jpg)

 \

-   **In Jeedom sichtbar**

 \

![vuedefaut1](../images/dlink.dchz110/vuedefaut1.jpg)

 \

Zusammenfassung
------

 \

Le détecteur DCH-Z110 propose 3 fonctions différentes : détection
d’ouverture, capteur de température et détecteur de luminosité. Il se
compose de deux parties : un détecteur et un aimant. Ils sont conçus
pour être placés sur une porte ou une fenêtre avec l’aimant fixé sur la
partie qui s’ouvre et le détecteur sur la partie fixe.

L’ouverture de la porte ou de la fenêtre éloignera l’aimant du
détecteur, ce qui enclenchera le détecteur qui enverra un signal Z-Wave
d’alarme, si le système est armé (ce signal peut être exploité par une
sirène ou par une box domotique par exemple). Le capteur peut également
être utilisé pour le contrôle automatique de l’éclairage, en fonction du
niveau de luminosité. Par exemple, le capteur enverra un signal à
l’interrupteur Z-Wave pour allumer la lumière lorsque la porte s’ouvre
et que la pièce est sombre.

Le détecteur remontera aussi la luminosité et la température, soit en
cas de changement important, et à chaque fois que l’ouverture/fermeture
est détectée. Un contrôleur Z-Wave (télécommande, dongle …?) est
nécessaire afin d’intégrer ce détecteur dans votre réseau si vous avez
déjà un réseau existant.

 \

Funktionen 
---------

 \

-   Détecteur 3 en 1: Ouverture, température, lumière

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

Site officiel :
<http://www.dlink.com/-/media/Consumer_Products/DCH/DCH%20Z110/Datasheet/DCH_Z110_Datasheet_FR.pdf>

Autre lien technique :
<http://www.kafkas.gr/uploads/Pdf/182732/DCH-Z120_183010381_01_Z02.PDF>

![caracteristiques
techniques](../images/dlink.dchz110/caracteristiques_techniques.jpg)

 \

Données du module 
-----------------

 \

-   Marke : D-Link

-   Modèle : DCH-Z110 Détecteur d’ouverture de porte et de fenêtre
    mydlink™ Home

-   Hersteller : FIBARO Systems

-   Hersteller-ID : 264 \[0x0108\]

-   Produkttyp : 2 \[0x0002\]

-   Produkt-ID : 14 \[0x000e\]

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
> Ne pas installer le module sur la fenêtre/porte avant de l’avoir
> correctement configuré, et bien faire attention à l’alignement de
> l’aimant lors des essais sur surface plane et lors de la pose.
> (Utiliser des cales si nécessaire) Pour mettre ce module en mode
> inclusion il faut appuyer 3 fois sur le bouton d’association en 1.5
> seconde, conformément à sa documentation. (clignotement rouge constant
> en mode association)

 \

![config inclusion](../images/dlink.dchz110/config-inclusion.jpg)

 \

Une fois inclus vous devriez obtenir ceci :

 \

![Plugin Zwave](../images/dlink.dchz110/apres_inclusion.jpg)

 \

### Commandes 

 \

Une fois le module reconnu, les commandes associées au module seront
disponibles.

 \

![Commandes](../images/dlink.dchz110/commandes.jpg)

 \

Voici la liste des commandes :

 \

-   Ouverture : c’est la commande qui remontera une détection
    d’ouverture

-   Température : c’est la commande qui permet de remonter la
    température

-   Luminosité : c’est la commande qui permet de remonter la luminosité

-   Sabotage : c’est la commande sabotage (elle est déclenchée en
    cas d’arrachement)

-   Batterie : c’est la commande batterie

 \

### Configuration du module 

 \

> **Important**
>
> Lors d’une première inclusion, ou d’une modification, sauvegarder puis
> réveillez toujours le module en appuyant sur le bouton d’association.
> Il devrait clignoter rouge et changer de statut.

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

![Config1](../images/dlink.dchz110/config1.jpg)

![Config2](../images/dlink.dchz110/config2.jpg)

 \

Détails des paramètres :

 \

-   2: permet de régler le signal envoyé aux modules dans le groupe
    d’association 2

-   4: permet de régler le niveau de luminosité à partir duquel le
    signal défini en paramètre 2 sera envoyé aux modules associés au
    groupe 2

-   5: mode de fonctionnement (se reporter sur la
    documentation constructeur)

-   6: mode de fonctionnement du multi-sensor (se reporter sur la
    documentation constructeur). Valeur recommandée : 7

-   7: mode de fonctionnement personnalisé du multi-sensor (se reporter
    sur la documentation constructeur). Valeur recommandée : 20 (pour
    avoir l’ouverture fonctionnelle)

-   9: permet de définir au bout de combien de temps le signal OFF sera
    envoyé aux modules associés au groupe 2

-   10: permet de définir la durée entre deux rapports de batterie (une
    unité = parametre 20)

-   11: permet de définir la durée entre deux rapports auto d’ouverture
    (une unité = parametre 20)

-   12: permet de définir la durée entre deux rapports auto de
    luminosité (une unité = parametre 20). Valeur recommandée : 6

-   13: permet de définir la durée entre deux rapports auto de
    température (une unité = parametre 20). Valeur recommandée : 2

-   20: durée d’un intervalle pour les paramètres 10 à 13. Valeur
    recommandée : 10

-   21: valeur de variation en °F de température pour déclencher un
    rapport

-   22: valeur en % de variation de luminosité pour déclencher
    un rapport. Valeur recommandée : 10

 \

### Groupes 

 \

Ce module possède deux groupes d’association, seul le premier est
indispensable.

 \

![Groupe](../images/dlink.dchz110/groupe.jpg)

 \

Bon à savoir 
------------

Association/Notification possible avec d’autres modules (exemple: Sirène
DCH-Z510 notification carillon sur ouverture porte/fenêtre)

 \

Visuel alternatif 
-----------------

 \

![Groupe](../images/dlink.dchz110/autre_visuel_jeedom.jpg)

 \

Wakeup 
------

 \

Pour réveiller ce module il y a une seule et unique façon de procéder :

-   Relâchez le bouton association et réappuyez dessus

-   Baissez le wake-up interval dans la configuration/système du module
    (en secondes)

 \

F.A.Q. 
------

 \

Ce module se réveille en appuyant sur son bouton association.

 \

Ce module est un module sur batterie, la nouvelle configuration sera
prise en compte au prochain wakeup. (bouton d’association pour le
forcer, d’où l’interêt de ne pas mettre en place le module avant sa
bonne configuration)

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

