MCO MH-S412 Double 
==================

 \

-   **Das Modul**

 \

![module](../images/mco.mhs412/module.jpg)

 \

-   **In Jeedom sichtbar**

 \

![vuedefaut1](../images/mco.mhs412/vuedefaut1.jpg)

 \

Zusammenfassung
------

 \
L’interrupteur MH-S412-EU permet de commuter les 2 charges connectées,
soit manuellement comme un interrupteur classique, ou à distance via le
protocole sans fil Z-Wave.

Sa finition en verre et son design apporte un style moderne.

L’interrupteur MH-S412-EU peut contrôler n’importe quel type de charge,
un éclairage ou un appareil électrique.

L’interrupteur est également équipé d’un voyant LED qui indique son
état.  \

Funktionen
---------

 \

-   Commander deux lampes ou appareils à distance

-   S’installe à la place d’un interrupteur existant (s’insère
    parfaitement dans une boite d’encastrement de 40mm)

-   AN/AUS Funktion

-   Supporte les commandes d’association (Groupe 1 et Groupe 2)

-   Contrôle des deux charges en local

-   LED de statut

-   Finition en verre, design moderne

-   Boutons tactiles

 \

Caractéristiques techniques 
---------------------------

 \

-   Modultyp : Z-Wave-Empfänger

-   Couleur : Blanc

-   Alimentation : 230 V, 50 Hz

-   Câblage : 3 fils, neutre nécessaire

-   Puissance maximum : 5A (1100W) pour chaque canal

-   Fréquence : 868,42 Mhz

-   Portée : jusqu’à 30 m

-   Abmessungen : 86 x 86 x 43 mm

-   Affichage: LED bleue/rouge

 \

Données du module 
-----------------

 \

-   Marke : MC HOME

-   Name : MH-S412 Double

-   Hersteller-ID : 351

-   Produkttyp : 16642

-   Produit ID : 514

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
> Pour mettre ce module en mode inclusion il faut appuyer sur un seul
> des 2 boutons en face avant pendant 3 sec, conformément à sa
> documentation papier.

Une fois inclus vous devriez obtenir ceci :

 \

![Plugin Zwave](../images/mco.mhs412/information.jpg)

 \

### Commandes 

 \

Une fois le module reconnu, les commandes associées au module seront
disponibles.

 \

![Commandes](../images/mco.mhs412/commandes.jpg)

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

![Config1](../images/mco.mhs412/config1.jpg)

 \

Détails des paramètres :

 \

-   1: Saving state before power failure : enable ( permet de retrouver
    le dernier état des interrupteurs juste avant la coupure secteur )
    diseable (les interrupteurs seront a l’état OFF au retour secteur )

 \

### Groupes 

 \

Ce module possède 3 groupes d’association. Seul le troisieme est
indispensable.

 \

![Groupe](../images/mco.mhs412/groupe.jpg)

 \

Bon à savoir 
------------

 \

### Spécificités 

1\) les boutons tactiles ont un halo de couleur bleu lorsque la charge
est pilotée

2\) les boutons tactiles ont un halo de couleur orangé lorsque la charge
est non pilotée

3\) le touché est plutôt agréable et les commandes réactives

4\) cet interrupteur peut piloter sa charge en mode autonome (non
rattaché à un contrôleur z-wave)

Wakeup 
------

 \

Ce module étant raccordé au secteur (220v) , le reveil est instantanné
et ne necessite donc pas d’action particulière lors d’un changement de
paramètres

 \

F.A.Q. 
------

 \

Pour exclure ce modèle, mettre Openzwave en mode exclusion et appuyer
sur un seul des 2 boutons en face avant pendant 3 sec, conformément à sa
documentation papier.

Pour restaurer les paramètres usine, appuyer sur un seul des 2 boutons
en face avant pendant 10 sec, conformément à sa documentation papier.

 \

