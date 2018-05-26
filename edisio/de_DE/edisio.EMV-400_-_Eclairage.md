-   **Le module**

![module](../images/emv.400/module.jpg)

-   **In Jeedom Sichtbar**

![vue default eclairage](../images/emv.400/vue_default_eclairage.jpg)

Zusammenfassung
======

Le micromodule EMV-400 va vous permettre de gérer un moteur
bidirectionnel ou des appareillages électriques. Il permet le contrôle
de 2 sorties Marche/Arrêt ou d’un volet roulant Ouvrir/Stop/Fermer.

De plus, l’interaction avec d’autres protocoles est possible, il est
contrôlable par des interrupteurs et/ou télécommandes de la marque
Edisio, directement depuis Jeedom, mais aussi par n’importe quel
émetteur Z-Wave de votre réseau.

Chaque module Edisio sur réseau électrique, à la possibilité de
fonctionner comme un répéteur sans fil avec les autres modules, afin
d’assurer une couverture totale de votre habitation.

Pour finir, chaque module peut être utilisé en mode déporté, c’est très
pratique car cela permet d’associer un émetteur sans devoir accéder au
récepteur.

> **Important**
>
> Le neutre est nécessaire que pour le mode "Volet"

Funktionen 
=========

-   2 sorties par relais alimentées

-   S’installe dans une boite d’encastrement de 55mm ou directement dans
    les caissons des ouvrants

-   Mode d’usage: Marche/Arrêt, Ouvrir/Stop/Fermer

-   Compatible avec les moteurs à fin de course électronique et
    mechanisch

-   Mode déporté

-   Zeitschaltuhr Funktion : Modus Ein-/Ausschalten 30min bis 60min

-   Replik des Signals (Repeater)

-   Micromodul Bidirektional

-   Niveau de batterie faible de l’émetteur

-   Petit, discret et esthétique

-   Facilité d’utilisation et d’installation

Caractéristiques Techniques 
===========================

-   Modultyp : Edisio Empfänger

-   Alimentation: 230VAC, 50Hz

-   Câblage: 4 fils, 2 pour les commandes et 2 pour l’alimentation

-   Fréquence: 868,3 MHz

-   Sorties alimentées: 2 relais

-   Puissance maximum: 2A par sortie

-   Charge résistive: 460W

-   Autres charges: 100W

-   Température de fonctionnement: -10°C +45°C

-   Abmessungen : 48x46x26mm

-   Degré de protection: IP20

Données du module 
=================

-   Marke : Edisio Smart Home

-   Name  EMV-400

Configuration générale 
======================

Pour configurer le plugin Edisio et associer un module à Jeedom,
référez-vous à cette
[documentation](https://www.jeedom.fr/doc/documentation/plugins/edisio/fr_FR/edisio.html).

> **Important**
>
> Pour que Jeedom crée automatiquement vos modules émetteurs, n’oubliez
> pas d’activer l’option dans la configuration du plugin.

> **Important**
>
> A l’inverse, les récepteurs Edisio sont à créer manuellement dans
> Jeedom.

DIP Switch et bouton "R" : 
--------------------------

![bouton association](../images/emv.400/bouton_association.jpg)

-   Le DIP Switch va vous permettre de régler les paramètres
    (Répéteur/Mode volet/éclairage/Minuterie) du module:

![dip switch](../images/emv.400/dip_switch.jpg)

> **Note**
>
> Afin d’éviter des redondances inutiles, ne jamais activer le mode
> "Répéteur" sur tous les récepteurs, 5 récepteurs au maximum par
> installation.

-   Le bouton "R", va permettre d’associer un émetteur au récepteur,
    d’activer ou désactiver la fonction minuterie et d’activer le mode
    déporté :

![bouton r](../images/emv.400/bouton_r.jpg)

> **Note**
>
> Appuyer R 3x permet d’activer le mode déporté.

Diagramme de fonctionnement 
---------------------------

Suivant si votre émetteur est configuré en mode "1 touche" ou "2
touches", voici le fonctionnement du module:

> **Notiz**
>
> Lesen Sie in der Dokumentation des Herstellers, wie Ihr Senders zu
> konfigurieren ist.

![diagramme](../images/emv.400/diagramme.jpg)

Fonction minuterie 
------------------

La fonction minuterie permet l’extinction automatique des relais au bout
de 30 ou 60 minutes.

-   Activer : Appuyer 4x "R" du récepteur, confirmation par un simple
    bip sonore en continu

-   Désactiver: Appuyer 5x "R" du récepteur , confirmation par 3 simples
    bip sonores.

-   Minuterie de 30 minutes: DIP Switch 3 en haut

-   Minuterie de 60 minutes: DIP Switch 3 en bas

Le mode "Eclairage" 
===================

Le mode "Eclairage" permet de piloter 2 appareils électriques à
distance.

> **Important**
>
> Le neutre n’est pas nécessaire

Configuration et raccordements électriques : 
--------------------------------------------

![mode eclairage](../images/emv.400/mode_eclairage.jpg)

> **Important**
>
> Afin que le module soit en mode "Eclairage" le DIP Switch 2 doit être
> en haut

> **Important**
>
> NE JAMAIS BRANCHER SOUS TENSION

Création du module dans Jeedom 
------------------------------

Pour associer un module récepteur Edisio à Jeedom, il faut créer
manuellement un équipement.

![ajout equip](../images/emv.400/ajout_equip.jpg)

Une fois, votre équipement créé, vous devriez obtenir ceci :

![crea equip](../images/emv.400/crea_equip.jpg)

> **Note**
>
> Pensez à activer votre nouvel équipement.

Dans la liste d’équipements, à droite, sélectionner "Micro-module
lumière" :

![infos equip eclairage](../images/emv.400/infos_equip_eclairage.jpg)

Commandes 
---------

Une fois votre équipement sauvegardé, vous devriez obtenir les commandes
associées au module :

![Commandes](../images/emv.400/commande_eclairage.jpg)

Voici la liste des commandes :

-   On : C’est la commande qui permet d’activer le relais 1

-   Off : C’est la commande qui permet de désactiver le relais 1

-   On 2 : C’est la commande qui permet d’activer le relais 2

-   Off 2: C’est la commande qui permet de désactiver le relais 2

-   E : C’est la commande qui permet de se servir du mode déporté

> **Important**
>
> Le retour d’état est simulé par Jeedom. Par conséquent, si vous
> utilisez un autre émetteur, Jeedom ne pourra pas mettre à jour l’état
> du récepteur.

Informations 
------------

Une fois votre équipement associé à Jeedom, diverses informations seront
disponibles :

![Commandes](../images/emv.400/infos_eclairage.jpg)

-   Création : Indique la date à laquelle l’équipement a été crée

-   Communication : Indique la dernière communication enregistrée entre
    Jeedom et le micro-module

-   Batterie : Indique l’état de la batterie pour les modules à piles

-   Status : Retourne le statut du module

Association du micromodule à Jeedom 
===================================

Afin que vous puissiez interagir avec Jeedom, comme si c’était un
émetteur Edisio.

> **Note**
>
> Un des gros avantages d’Edisio, c’est qu’un récepteur peut avoir
> plusieurs émetteurs associés

Méthode standard 
----------------

Chaque sortie est à associer à une commande Jeedom:

-   Associer la sortie 1 :

    -   Appuyez 1x sur le "R" du récepteur, simple bip sonore (court
        en répétition) signale la programmation de la sortie 1 activée.

    -   Dans les 10 sec, appuyez sur "Tester" de la commande "Ouvrir"
        dans Jeedom, un bip sonore en continu signale l’association de
        la sortie 1 à Jeedom.

    -   Dans les 10 sec, appuyez à nouveau sur "R" du récepteur, pour
        valider l’association, le bip sonore s’arrête.

-   Associer la sortie 2 :

    -   Appuyez 2x sur le "R" du récepteur, double bip sonore (court
        en répétition) signale la programmation de la sortie 2 activée.

    -   Dans les 10 sec, appuyez sur "Tester" de la commande "Fermer"
        dans Jeedom, un bip sonore en continu signale l’association de
        la sortie 2 à Jeedom.

    -   Dans les 10 sec, appuyez à nouveau sur "R" du récepteur, pour
        valider l’association, le bip sonore s’arrête.

Méthode déportée 
----------------

Nous en avons parlé au début de cette documentation. Dans le cas, de
modules déjà encastrés, dans les faux plafonds ou même les combles.
Cette méthode permet l’ajout d’un nouvel émetteur sans accéder au "R" du
récepteur.

-   Associer le bouton "R" :

    -   Appuyez 3x sur "R" du récepteur, triple bip sonore (court
        en répétition) signale le mode de programmation activé.

    -   Dans les 10 sec, appuyez sur "Tester" de la commande "E" dans
        Jeedom, un bip sonore en continu signale l’association à Jeedom.

    -   Dans les 10 sec, appuyez à nouveau sur "E" du récepteur, pour
        valider l’association, le bip sonore s’arrête.

C’est fait, votre Jeedom est à présent associé et sa commande "E"
remplace désormais le bouton "R" du récepteur.

-   Associer un nouvel émetteur à un récepteur avec Jeedom déjà associé
    :

    -   Sortie 1 :

        -   Appuyez 1x sur "Tester" la commande "E" dans Jeedom, simple
            bip sonore (court en répétition) signale la programmation de
            la sortie 1 activée.

        -   Dans les 10 sec, appuyez sur une des touches "C" du nouvel
            émetteur à associer, un bip sonore en continu signale
            l’association de la sortie 1.

        -   Dans les 10 sec, appuyez à nouveau sur "Tester" de la
            commande "E" dans Jeedom, pour valider l’association, le bip
            sonore s’arrête.

    -   Sortie 2 :

        -   Appuyez 2x sur "Tester" de la commande "E" dans Jeedom,
            double bip sonore (court en répétition) signale la
            programmation de la sortie 2 activée.

        -   Dans les 10 sec, appuyez sur une des touches "C" du nouvel
            émetteur à associer, un bip sonore en continu signale
            l’association de la sortie 2.

        -   Dans les 10 sec, appuyez à nouveau sur "Tester" de la
            commande "E" dans Jeedom, pour valider l’association, le bip
            sonore s’arrête.

> **Note**
>
> Vous pouvez recommencer autant de fois que vous voulez associer
> d’émetteurs au récepteur

Visuel alternatif 
=================

![Commandes](../images/emv.400/vue_alt_eclairage.jpg)

F.A.Q. 
======

Comment effacer la mémoire du récepteur ?

:   Appuyez et maintenez 10 sec sur le "R", jusqu’au bip sonore continu.

Comment piloter le récepteur via un émetteur Z-Wave?

:   Avec le plugin Scénario de Jeedom.

Comment puis-je avoir le même visuel ?

:   Avec le plugin Widgets de Jeedom.

**@Jamsta**
