Fibaro Dimmer - FGD-211 
=======================

 \

-   **Das Modul**

 \

![module](../images/fibaro.fgd211/module.jpg)

 \

-   **In Jeedom sichtbar**

 \

![vuedefaut1](../images/fibaro.fgd211/vuedefaut1.jpg)

 \

Zusammenfassung
------

 \

Le micromodule variateur FGD-211 va vous permettre de contrôler une
lampe ou plafonnier à distance grâce au protocole Z-Wave tout en
conservant votre interrupteur existant.

Vous allez donc pouvoir actionner la lampe connectée et faire varier son
intensité en utilisant l’interrupteur existant, un émetteur Z-Wave ou
directement depuis le bouton présent sur le micromodule. Il est
compatible avec tout type de lampe supportant la variation
(incandescence, fluo-compact, LED, …​). Le micromodule variateur Fibaro
est un concentré de technologie, il détecte automatiquement le type de
charge connectée et est protégé contre les surtensions.

Pour les ampoules fluorescentes qui ne supportent pas la variation, le
module agit alors automatiquement en tant que module commutateur (ON/OFF
uniquement).

Il peut être utilisé en mode 2 fils (sans neutre), en remplacement d’un
interrupteur existant, ou trois fils avec une alimentation classique du
module (Phase + Neutre).

Pour des lampes ayant une très faible consommation (lampe LED par
exemple), vous pourrez utiliser la charge (bypass) FGB-001 qui permet un
fonctionnement correct du module. Un contrôleur Z-Wave (télécommande,
dongle …​) est nécessaire afin d’intégrer ce détecteur dans votre réseau
si vous avez déjà un réseau existant. Chaque module Z-Wave fonctionne
comme un répéteur sans fil avec les autres modules, afin d’assurer une
couverture totale de votre habitation.

 \

Funktionen 
---------

 \

-   Commander un éclairage à distance

-   S’installe derrière un interrupteur existant

-   Fonction ON/OFF et Variation

-   Utilisation en mode 2 fils (neutre pas nécessaire)

-   Détection automatique de la charge

-   Protégé contre les surcharges

-   Petit, discret et esthétique

-   Facilité d’utilisation et d’installation

 \

Caractéristiques techniques 
---------------------------

 \

-   Modultyp : Z-Wave-Empfänger

-   Alimentation : 230V, 50 Hz

-   Câblage : neutre pas nécessaire

-   Charge maxi : 25-500W (charge résistive) ou 1.5A (charge inductive)

-   Type de lampe compatible (dimmable) : Incandescente, Fluocompacte,
    Halogène (230VAC et 12VDC avec tranformateur électronique), LED

-   Type de lampe compatible (non dimmable) : Fluocompacte, LED

-   Fusible : 2.5A

-   Fréquence : 868,42 Mhz

-   Distance de transmission : 50m champ libre, 30m en intérieur

-   Abmessungen : 15 x 42 x 36 mm

-   Température de fonctionnement : 0-40°C

-   Température limite : 105°C

-   Normes : EN 55015 et EN 60669-2-1

 \

Données du module 
-----------------

 \

-   Marke : Fibar Group

-   Name : Fibaro FGMS-001 [Bewegungsmelder]

-   Hersteller-ID : 271

-   Produkttyp : 256

-   Produit ID : 4106

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

![inclusion](../images/fibaro.fgd211/inclusion.jpg)

 \

> **Tip**
>
> Si vous avez déjà intégré votre module au mur, vous pouvez l’inclure
> en faisant de nombreux aller retour sur l’interrupteur ou de nombreux
> appuis si vous avez un interrupteur sur bouton poussoir.

 \

Une fois inclus vous devriez obtenir ceci :

 \

![Plugin Zwave](../images/fibaro.fgd211/information.jpg)

 \

### Commandes 

 \

Une fois le module reconnu, les commandes associées au module seront
disponibles.

 \

![Commandes](../images/fibaro.fgd211/commandes.jpg)

 \

Voici la liste des commandes :

 \

-   Intensité : C’est la commande qui permet de régler l’intensité de la
    lumière

-   On : C’est la commande qui permet d’allumer la lumière

-   Off : C’est la commande qui permet d’éteindre la lumière

-   Etat : C’est la commande qui permet de connaitre le statut de la
    lumière

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
Paramètres)

 \

![Config1](../images/fibaro.fgd211/config1.jpg)

![Config2](../images/fibaro.fgd211/config2.jpg)

![Config3](../images/fibaro.fgd211/config3.jpg)

 \

Détails des paramètres :

 \

-   1: Fonctions ALL ON / ALL OFF : utilisé que si vous avez associé le
    FGD-211 à un autre module

-   6: permet de dire comment les informations sont envoyées au groupe
    d’association 1

-   7: permet de vérifier ou non le statut du module associé avant
    d’envoyer une commande

-   8: permet de définir le pourcentage de variation (auto)

-   9: durée de la variation entre les deux extrêmes (manuel)

-   10: durée de la variation entre les deux extrêmes (auto)

-   11: permet de définir le pourcentage de variation (manuel)

-   12: permet de définir le niveau maximal autorisé

-   13: permet de définir le niveau minimal autorisé

-   14: REGLAGE IMPORTANT : permet de choisir entre interrupteur
    BISTABLE ou MONOSTABLE (bouton poussoir)

-   15: active l’option permettant de mettre la luminosité au maximum
    sur double appui (ou aller retour sur bistable)

-   16: option permettant d’activer la mémorisation du dernier état

-   17: permet de choisir entre le mode va et vient et le mode
    télérupteur

-   18: permet de synchroniser le niveau de variation aux autres
    variateurs associés

-   19: mode fonctionnement de l’interrupteur bistable (inversion
    ou non)

-   20: permet d’ajuster le niveau minimum pour des ampoules LEDS
    dimmables par exemple

-   30: permet de définir le mode de fonctionnement du module en cas de
    réception d’un signal broadcast Alarm

-   39: durée de l’alarme défini en paramètre 30

-   41: permet d’activer ou non la fonction d’Activations des scènes

 \

### Groupes 

 \

Ce module possède trois groupes d’association, seul le troisième est
indispensable.

 \

![Groupe](../images/fibaro.fgd211/groupe.jpg)

 \

Bon à savoir 
------------

 \

### Spécificités 

 \

> **Caution**
>
> Le paramètre le plus important de la configuration est le 14. Il
> permet de choisir le type d’interrupteur utilisé. Par défaut le type
> est défini sur monostable.

 \

Si vous voulez exclure/inclure le module sans démonter votre
interrupteur, vous pouvez appuyer plusieurs fois sur votre interrupteur
(ou faire des allers retours en cas d’interrupteur bi stable)

 \

### Visuel alternatif 

 \

![vuewidget](../images/fibaro.fgd211/vuewidget.jpg)

 \

Wakeup 
------

 \

Pas de notion de wakeup sur ce module.

 \

F.A.Q. 
------

 \

Non. ce module peut s’inclure ou s’exclure en appuyant plusieurs fois
sur l’interrupteur.

 \
**@sarakha63**
