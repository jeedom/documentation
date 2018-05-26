Aeotec Contrôleur de porte de garage 
====================================

 \

-   **Das Modul**

 \

![module](../images/aeotec.garagedoorcontroller/module.jpg)

 \

-   **In Jeedom sichtbar**

 \

![vuedefaut1](../images/aeotec.garagedoorcontroller/vuedefaut1.jpg)

 \

Zusammenfassung
------

 \

Facilement connecté sur le moteur existant de votre porte, le contrôleur
de porte de garage l’améliore avec une suite de capteurs de sécurité et
de sûreté. Le contrôleur de porte de garage ne permet pas seulement de
contrôler votre porte de garage, il vous permet également de vérifier
son état. Qu’il soit utilisé par le moteur ou manuellement, le détecteur
intelligent livré avec le contrôleur de porte de garage sait si la porte
est ouverte ou fermée, et peut vous avertir quand ce qui se passe ne le
devrait pas.

 \

Funktionen
---------

 \

-   Contrôlez et surveillez votre porte de garage à distance.

-   Module s’installant simplement sur le moteur de votre
    porte actuelle.

-   Contrôle de la porte en local via le bouton intégré.

-   Envoie des alertes d’ouverture/fermeture au contrôleur Z-Wave.

-   Alertes d’ouverture/fermeture sonores et visuelles.

-   Volume sonore de l’alarme réglable (105 dB max)

-   Port USB pour charger vos propres sons MP3.

-   LED de statut intégrée sur le bouton.

-   Fait partie de la gamme Gen5 de Aeon Labs.

-   Sécurité de la communication radio via le chiffrement AES-128.

-   Intègre la puce Z-Wave série 500.

-   Communication 250% plus rapide comparée à des périphériques
    Z-Wave standard.

-   Répéteur de messages Z-Wave.

-   Optimisation de l’antenne, portée 300 mètres.

 \

Caractéristiques techniques 
---------------------------

 \

-   Modultyp : Z-Wave+ Serie 500 Empfänger und Sender 

-   Alimentation : Actionneur : 5 VDC (adaptateur fourni) Capteur : Pile
    Lithium 3V 800mA CR2

-   Consommation en veille : 1W

-   Consommation de l’alarme : 2W

-   Volume maximum : 105 dB

-   Formats audio supportés : mp3 et WMV à la fréquence de 320Kbps

-   Fréquence : 868,42 Mhz

-   Distance de transmission : 300m en champ libre

-   Température de fonctionnement : -20°C à 50°C

-   Humidité de fonctionnement : 80%

-   Certifications: FCC, UL, CE, ROHS

 \

Données du module 
-----------------

 \

-   Marke : Aeotec

-   Name : Garage Tür-Controller (ZW062)

-   Hersteller-ID : 134

-   Produkttyp : 3

-   Produit ID : 62

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
> Z-Wave, conformément à sa documentation papier.

 \

![inclusion](../images/aeotec.garagedoorcontroller/inclusion.jpg)

 \

Une fois inclus vous devriez obtenir ceci :

 \

![Plugin Zwave](../images/aeotec.garagedoorcontroller/information.jpg)

 \

### Commandes 

 \

Une fois le module reconnu, les commandes associées au module seront
disponibles.

 \

![Commandes](../images/aeotec.garagedoorcontroller/commandes.jpg)

 \

Voici la liste des commandes :

 \

-   Open/Close : Ouvrir, fermer ou arrêter la porte de garage.

-   Position : Position actuelle de la porte de garage.

-   Volume : Volume actuel du haut-parleur.

-   Température : Température de la zone, pas de remonté automatique.

-   Sabotage : Etat du sabotage en texte.

 \

### Configuration du module 

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

![Config1](../images/aeotec.garagedoorcontroller/config1.jpg)

![Config1](../images/aeotec.garagedoorcontroller/config2.jpg)

 \

Détails des paramètres :

 \

-   34: Permet de démarrer la calibration du temps d’ouverture de
    la porte.

-   41: Permet de resetter l’état du sabotage en sélectionnant "Relieve
    the alarm state"

-   80: sur Hail

-   255 : permet de resetter la configuration d’usine

 \

### Groupes 

 \

Ce module possède deux groupes d’association. Le premier "Lifeline" est
indispensable.

 \

![Groupe](../images/aeotec.garagedoorcontroller/groupe.jpg)

 \

Bon à savoir 
------------

 \

### Spécificités 

Calibration du temps d’ouverture de la porte de garage:

-   1 : La porte de garage doit être entièrement fermée.

-   2 : Activer le parametre 34 sur "Do calibration".

-   3 : Lancer l’ouverture de la porte

-   4 : Attendre que la porte soit completement ouverte.

-   5 : Lancer la fermeture de la porte

La calibration est complétée

-   Le paramètre 34 sera actualisé sur "Normal".

-   Le paramètre 35 sera mis ajour avec le temps d’ouverture calculé.

 \

Remise à zéro du sabotage:

-   1 : Le capteur doit être convenablement fixé.

-   2 : Activer le paramètre 41 sur "Relieve the alarm state".

-   3 : Actualiser les paramètres.

La calibration est complétée

-   Le parametre 41 sera mis ajour avec "Sensor is not removed".

 \

F.A.Q. 
------

 \

 \

**@nechry**
