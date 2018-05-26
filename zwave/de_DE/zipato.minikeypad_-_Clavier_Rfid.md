Zipato miniKeypad RFID 
======================

 \

-   **Das Modul**

 \

![module](../images/zipato.minikeypad/module.jpg)

 \

-   **In Jeedom sichtbar**

 \

![vuedefaut1](../images/zipato.minikeypad/vuedefaut1.jpg)

 \

Zusammenfassung
------

 \

Contrôlez votre système de sécurité grâce à ce mini clavier mural Zipato
!

Avec ce clavier RFID compatible Z-Wave, vous allez pouvoir activer ou
désactiver facilement votre système d’alarme. Les touches "Home" et
"Away" vous permettent d’armer/désarmer le système de sécurité et/ou
exécuter des scénarios domotiques rapidement. En plus d’utiliser le
clavier numérique, vous pouvez aussi passer un badge RFID devant le
clavier pour armer/désarmer le système. Le clavier transmet à votre
contrôleur domotique l’identifiant du badge qui a été reconnu. Vous
pouvez ainsi facilement créer des scénarios en fonction de la personne
qui a utilisé son badge.

 \

Funktionen
---------

 \

-   Clavier à code et RFID

-   Supporte la technologie Z-Wave

-   Armer/désarmer votre système de sécurité

-   Contrôle d’accès par lecture de badges RFID

-   Contrôle d’accès par clavier à codes

-   Protection anti-sabotage

-   Indicateur LED pour confirmer chaque action

-   Buzzer intégré pour indication sonore de l’armement/désarmement de
    l’alarme par exemple

 \

Caractéristiques techniques 
---------------------------

 \

-   Typ : Z-Wave Slave

-   Alimentation : 2x AA 1,5V batteries

-   Fréquence : 868.42 MHz

-   Portée radio : 30m en champ libre

-   RFID Protokoll : ISO15693, ISO18000-3, Tag-it™, RFID

-   Buzzer : 60dBa à 10 cm de distance

-   Température de stockage : -5°C à +65°C

-   Humidité pour stockage : 10% à 70%

-   Température de fonctionnement : 10°C à 40°C

-   Humidité en fonctionnement : 30% à 80%

-   Abmessungen : 62 x 62 x 20 mm

-   Certifications : Sécurité : UL EMC : FCC, CE RoHS

 \

Données du module 
-----------------

 \

-   Marke : Zipato

-   Name : Zipato Mini Keypad RFID

-   Hersteller-ID : 151

-   Produkttyp : 24881

-   Produit ID : 17665

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
> Pour mettre ce module en mode inclusion il suffit d’appuyer deux
> secondes sur la languette métallique (la led rouge de la face avant
> doit clignoter deux fois) et relâcher la languette pour que
> l’inclusion s’opère.

 \

![inclusion](../images/zipato.minikeypad//inclusion.jpg)

 \

Une fois inclus vous devriez obtenir ceci :

 \

![information](../images/zipato.minikeypad/information.jpg)

 \

### Commandes 

 \

Une fois le module reconnu, les commandes associées au module seront
disponibles.

 \

![commandes](../images/zipato.minikeypad/commandes.jpg)

 \

Voici la liste des commandes :

 \

-   Action : c’est la commande qui remontera le home/away (5 pour away 6
    pour home)

-   Sabotage : c’est la commande sabotage (elle est déclenchée en
    cas d’arrachement)

-   Code : affiche le code du badge ou du clavier lorsque le code saisi
    n’est pas dans une des mémoires

-   Batterie : c’est la commande batterie

 \

### Configuration du module 

 \

> **Important**
>
> Lors d’une première inclusion réveillez toujours le module juste après
> l’inclusion.

 \

Ensuite si vous voulez effectuer la configuration du module en fonction
de votre installation, il faut pour cela passer par le bouton
"Configuration" du plugin OpenZwave de Jeedom.

 \

![bouton configuration](../images/plugin/bouton_configuration.jpg)

 \

Vous arriverez sur cette page (après avoir cliqué sur l’onglet
Paramètres)

 \

![config1](../images/zipato.minikeypad/config1.jpg)

 \

Détails des paramètres :

 \

-   1: permet de remettre la config par défaut (déconseillé)

-   2: durée d’annulation (à ne pas modifier)

-   3: retour par bip : permet d’activer ou non une série de 8 bips
    après reconnaissance d’un badge/code

-   4: nombre de bips par seconde (ne pas modifier n’a pas d’effet)

-   5: mode de fonctionnement : normal ou mode toujours reveillé
    (déconseillé car très très consommateur de piles)

 \

### Groupes 

 \

Ce module possède deux groupes d’association.

 \

![groupe](../images/zipato.minikeypad/groupe.jpg)

 \

> **Important**
>
> Pour un fonctionnement optimum de votre module. Il faut que Jeedom
> soit associé à minima au groupe 1.

### Les badges /codes 

 \

Dans la page de l’équipement il y a un onglet Assistant.

 \

![bouton assistant](../images/plugin/bouton_assistant.jpg)

 \

Celui-ci permet de rajouter des codes. Vous y verrez un tableau.

 \

![config2](../images/zipato.minikeypad/config2.jpg)

 \

-   Ce tableau vous permet de visualiser les mémoires occupées sur votre
    clavier

-   Pour enregistrer un nouveau code cliquez sur le bouton vert sur la
    mémoire désirée et suivez les étapes

-   Pour supprimer un code il suffit de cliquer sur le bouton rouge.

-   Il est impossible d’enregistrer le même code/badge sur deux mémoires
    différentes

-   Il est impossible (par mesure de sécurité) de lire la valeur d’un
    code enregistré

 \

> **Important**
>
> Pensez à réveiller le module après l’ajout d’un code ou badge.

 \

Exemples d’utilisation 
----------------------

 \

![exemple](../images/zipato.minikeypad/exemple.jpg)

 \

L’élément déclencheur est la commande évènement, en effet celle-ci est
mise à jour uniquement lorsqu’un code/badge valide à été présenté. Si la
valeur est 6 (home) on désactive l’alarme (par exemple), ou allume la
multiprise, on allume la lumière en fonction de la luminosité, on envoie
une notification pour signaler que quelqu’un est rentré, on lance une
synhtèse vocale pour faire un bilan météo par exemple. Sinon (forcément
5) on active l’alarme, on coupe la multiprise, on envoie une
notification pour signaler que la maison est vide.

 \

Bon à savoir 
------------

 \

### Spécificités 

 \

Le keypad lit les codes/badges de deux manières :

 \

-   lorsque vous appuyez sur home/away pendant les 1 à 2 premières
    secondes si vous commencez à taper un code, il lira ce code

-   si rien n’est fait dans les 1 à 2 premières secondes, il se met en
    mode lecture de badge RFID (lumière rouge allumée). A ce moment là
    il peut lire un badge, pas avant.

 \

Wakeup 
------

 \

Pour réveiller ce module il y a deux façons de procéder :

 \

-   appuyer sur le bouton tamper puis relâcher au bout de 1 à 2 secondes

-   appuyer sur Home, un chiffre au hasard et Enter

 \

F.A.Q. 
------

 \

Ce module se réveille en appuyant sur le bouton tamper et en le
relachant. Il peut aussi se réveiller en appuyant sur Home puis 1 puis
Enter.

 \

Ce module est un module sur batterie, la nouvelle configuration sera
prise en compte au prochain wake up.

 \

Note importante 
---------------

 \

> **Important**
>
> Il faut réveiller le module : après son inclusion, après un changement
> de la configuration , après un changement de wake up, après un
> changement des groupes d’association

 \

**@sarakha63**
