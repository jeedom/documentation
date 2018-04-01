Hardware
========

Jeedom peut être installé sur différents composants hardware :

-   un Raspberry pi 2 ou 3

-   un NAS Synology

-   tout système Linux basé sur Debian

Vous pouvez aussi acheter une box toute faite avec Jeedom préinstallé
qui contient en plus un service pack (plus de support et de services) et
des plugins offerts :

-   [Jeedom Smart
    Z-Wave+](https://www.domadoo.fr/fr/box-domotique/3959-jeedom-controleur-domotique-jeedom-smart-z-wave.html)

-   [Jeedom Smart Z-Wave+ et
    RFXCOM](https://www.domadoo.fr/fr/box-domotique/4043-jeedom-controleur-domotique-jeedom-smart-z-wave-et-interface-rfxcom.html)

-   [Jeedom Smart
    EnOcean](https://www.domadoo.fr/fr/box-domotique/4041-jeedom-controleur-domotique-jeedom-smart-enocean.html)

-   [Jeedom Smart EnOcean et
    RFXCOM](https://www.domadoo.fr/fr/box-domotique/4044-jeedom-controleur-domotique-jeedom-smart-enocean-et-interface-rfxcom.html)

Voici une configuration "type" pour bien débuter avec Jeedom en Z-Wave :

1.  Raspberry pi 3 :

    -   Un raspberry+boitier \~ 50 €

    -   Une clef Aeon Gen 5 \~ 60 €

    -   Une micro carte SD \~ 7 €

    -   Une alimentation USB \~ 8 €

Soit un total de 125 € pour une box domotique open source avec une
maîtrise complète de son installation.

> **Tip**
>
> Il est possible d’ajouter ou de changer par une antenne Rfxcom, ou une
> clef enOcean.

> **Tip**
>
> Jeedom est un logiciel qui est et restera open source, son utilisation
> est entièrement gratuite et ne dépend pas d’un cloud ou d’un
> abonnement. Cependant, certains plugins qui permettent d’augmenter les
> capacités de Jeedom ou son utilisation peuvent être payants **et
> peuvent avoir besoin d’une connexion internet**. Vous pouvez retrouver
> la liste des plugins
> [ici](http://market.jeedom.fr/index.php?v=d&p=market&type=plugin).

> **Tip**
>
> Service pack ? Quézako ? Vous pouvez voir
> [ici](https://blog.jeedom.fr/?p=1215) les avantages des service packs.


Jeedomboard
===========

Vous trouverez ici la documentation pas à pas pour installer Jeedom sur
les Jeedomboard (ou Hummingboard).

> **Tip**
>
> Le nom de l’image Jeedom peut être différent de celui des captures
> faites dans cette documentation

Etape 1 : Installation de Etcher 
---

Vous devez télécharger le logicel Etcher [ici](https://etcher.io/) puis
l’installer sur votre pc

Etape 2 : Récupération de l’image de Jeedom 
---

Vous devez aller
[ici](https://www.amazon.fr/clouddrive/share/OwYXPEKiIMdsGhkFeI3eUQ0VcvTEBq0qxQevlXPvPIy/folder/IT3WZ3N0RqGzaLBnBo0qog),
puis dans le dossier Images récuperer l’image jeedom-jeeboard-\*.rar ou
Jeedomboard\_\_Debian\_Jessie\*.rar

![install humming 1](../images/install_humming_1.PNG)

Etape 3 : Décompression de l’image de Jeedom 
---

Décompresser l’image de Jeedom (si vous n’avez rien pour la décompresser
vous pouvez installer
[winrar](http://www.clubic.com/telecharger-fiche9632-winrar.html)), vous
devez obtenir :

![install humming 2](../images/install_humming_2.PNG)

![install humming 8](../images/install_humming_8.PNG)

Etape 4 : Gravure de l’image sur la carte SD 
---

Insérez votre carte SD dans votre ordinateur puis lancez le logiciel
Etcher, donnez-lui le chemin de l’image, le chemin de la carte SD et
cliquez sur "Flash!". Le logiciel va graver la carte SD et vérifier la
gravure.

Vous n’avez plus qu’à mettre la carte SD dans la Jeedomboard (ou
Hummingboard), à brancher le réseau et l’alimentation, votre Jeedom va
démarrer (5 min) et vous devriez le voir sur le réseau.

> **Tip**
>
> Les identifiants SSH sont jeedom/Mjeedom96

Pour la suite, vous pouvez suivre la documentation [Premier pas avec
Jeedom](https://jeedom.github.io/documentation/premiers-pas/fr_FR/index.html)

Miniplus/Hummingboard
=====================

Vous trouverez ici la documentation pas à pas pour installer Jeedom sur
la mini plus (carte Hummingboard Solid-Run).

![jeedom](../images/jeedom.jpg)

Etape 1 : Installation de Etcher 
---

Vous devez télécharger le logicel Etcher [ici](https://etcher.io/) puis
l’installer sur votre pc

Etape 2 : 
---

Récupération de l’image Jessie. Attention la humingboard n’est pas
un raspberry. **Vous devez impérativement récupérer cet iso spécifique
qui est une jessie pour IMX6.**

Vous devez aller
[ici](https://images.solid-build.xyz/IMX6/Debian/sr-imx6-debian-jessie-cli-20171108.img.xz),
et sauvegarder cette image sur votre PC.

Etape 3 : Décompression de l’image 
---

Décompresser l’image de Jeedom (si vous n’avez rien pour la décompresser,
vous pouvez installer
[winrar](http://www.clubic.com/telecharger-fiche9632-winrar.html)).

Etape 4 : Gravure de l’image sur la carte SD 
---

Insérer votre carte SD dans votre ordinateur puis lancer le logiciel
Etcher, donnez-lui le chemin de l’image, le chemin de la carte SD et
cliquez sur "Flash!". Le logiciel va graver la carte SD et vérifier la
gravure.

Vous n’avez plus qu’à mettre la carte SD dans la Mini + à brancher le
réseau et l’alimentation, votre Jeedom va démarrer.

Etape 5 : installation de jeedom - Lancement du script 
---

Ouvrez une console SSH avec putty par exemmple.

> **Tip**
>
> login debian / mot de passe debian

> **Tip**
>
> le mot de passe root est debian

1/ Configuration du swap sur la Mini+ car inactif par défaut avec cette
distribution.

Connectez-vous en SSH à votre système et faites :

    sudo imx6-config

Entrez le mot de passe root ("debian")

Cliquez sur OK (votre IP local apparaît - notez-là pour vous connecter à
la fin)

Appuyer sur Enter

Choisissez la rubrique 4 swap avec les flèches du clavier, puis intall
Swap (un Swap de 512 est préconisé, vous pouvez le modifier à la fin de
la création du swap par défaut). Suivez la procédure.

**Rebooter** et vérifier l’activation du Swap avec la commande

    sudo reboot

    free -  m

2/ Enfin lancez le script officiel avec ces 3 commandes :

    wget https://raw.githubusercontent.com/jeedom/core/stable/install/install.sh

    chmod +x install.sh

    sudo ./install.sh

**La durée d’installation varie de 60 à 120 minutes**. Vous ne devez pas
interrompre cette procédure. A défaut il faut tout reprendre. Il est
vivement conseillé de rebooter à la fin de l’installation.

Les arguments suivants sont utilisables :

-w = dossier webserver

-z = installation dependances z-wave

-m = mot de passe root mysql désiré

    ./install.sh -w /var/www/html -z -m Jeedom

Il est conseillé de faire un reboot de la mini+

    sudo reboot

Il vous suffit ensuite d’aller sur IP\_MACHINE\_JEEDOM dans votre
navigateur.

> **Note**
>
> Les identifiants par défaut sont admin/admin

> **Important**
>
> Si vous devez réinjecter un backup, vous devez patienter entre 5 et 10
> minutes pour que tout rentre dans l’ordre (votre utilisateur admin /
> admin n’existe plus…​). Vous ne devez surtout pas éteindre
> électriquement votre mini-plus.

Pour la suite vous pouvez suivre la documentation [Premier pas avec
Jeedom](https://www.jeedom.fr/doc/documentation/premiers-pas/fr_FR/doc-premiers-pas.html)

Raspberrypi
===========

Vous trouverez ici la documentation pour installer Jeedom sur un
raspberry PI **avec une carte SD.**

> **Important**
>
> Debian 9 (Stretch) est la distribution officiellement supportée pour
> la version 3.1.5 de jeedom (mais Jessie reste parfaitement
> fonctionnelle).

**1/ Télécharger le dernière image "lite", c’est à dire sans interface
graphique**
[ICI](https://downloads.raspberrypi.org/raspbian_lite/images/raspbian_lite-2017-12-01/2017-11-29-raspbian-stretch-lite.zip)

**2/ Décompresser l’image avec winrar** [Ici](http://www.win-rar.com)

**3/ Gravez cette image sur une SD avec etcher par exemple**
[ici](https://etcher.io/)

> **Note**
>
> Si vous utilisez Etcher pour graver votre image, l’étape de
> décompression est inutile (format Zip reconnu directement dans la
> sélection du fichier image).

**4/ Activer un accès SSH**

> **Warning**
>
> Pour des raisons de sécurité, l’accès SSH n’est plus activé par défaut
> sur cette distribution. Il faut donc l’activer.

Il faut créer sur la partition boot (la seule accessible sous windows)
un fichier ssh vide.

Il suffit de faire un clic droit : nouveau / document texte et le
renommer en "ssh" **sans extension**

> **Important**
>
> Sous windows, dans l’explorateur il faut donc vérifier votre
> paramétrage dans affichage / options / modifier les options de
> dossiers et de recherche /

![ExtensionFichier](../images/ExtensionFichier.PNG)

**5/ Démarrer le PI**

Insérez votre carte SD, branchez le cable réseau, branchez
l’alimentation.

**6/ Se connecter en SSH**

Identifiez votre Pi sur le réseau

Il faut connaître l’adresse Ip de votre PI. Plusieurs solutions :

-   Consultez la configuration DHCP dans votre routeur

-   Utilisez un scanner de port type "angyipscanner"
    [ici](http://angryip.org/download/#windows)

Etablir la connexion

Ensuite utilisez par exemple putty pour établir votre connexion
[Ici](http://www.putty.org/)

Rentrer l’adresse de Ip de votre PI (ici 192.168.0.10) et cliquez sur
open. Accepter le message par défaut relatif à la sécurité lors de la
première connexion.

Connectez-vous avec les identifiants **pi / raspberry**

> **Important**
>
> Pour des raisons de sécurité, il est impératif de modifier le mot de
> passe par défaut. Les cas de piratages basés sur l’exploitation du
> couple login/mot de passe par défaut du Raspberry sont
> particulièrement répandus. (commande passwd et sudo passwd)

**7/ Lancer le script d’installation jeedom**

    wget -O- https://raw.githubusercontent.com/jeedom/core/stable/install/install.sh | sudo bash

**Le mot de passe sudo est également raspberry**

> **Note**
>
> En fonction de votre débit internet, l’installation peut prendre de 45
> à 90 minutes. Vous ne devez surtout pas interrompre le processus avant
> la fin. A défaut, il faudra reprendre la totalité de la procédure.

Il vous suffit ensuite d’aller sur IP\_MACHINE\_JEEDOM

> **Note**
>
> Les identifiants par défaut sont admin/admin

> **Note**
>
> Les arguments suivants sont utilisables : -w = dossier webserver -z =
> installation dependances z-wave -m = mot de passe root mysql désiré

    ./install.sh -w /var/www/html -z -m Jeedom

**8/ Optimisation système

Si vous utilisez votre Raspberry pour Jeedom sans écran connecté, il est recommandé d'effectuer le minimum de RAM à la partie vidéo.

Il suffit de se connecter en **SSH** et de modifier le fichier config : `sudo nano /boot/config.txt`

Ajoutez **et/ou** De-commentez (en supprimant le #) **et/ou** Modifiez les lignes : 

`gpu_mem=16`

`disable_l2cache=0`

`gpu_freq=250`

Quittez en sauvegardant : `CTRL+X` puis `O `puis `ENTREE`

Rebootez votre RPI

Ensuite, vous pouvez suivre la documentation [Premier pas avec
Jeedom](https://jeedom.github.io/documentation/premiers-pas/fr_FR/index)

VM
==

Si vous voulez découvrir Jeedom sans risque, vous pouvez aussi le
virtualiser sur votre PC, voici la démarche à suivre. Vous ne prenez
aucun risque dans une VM, l’intégrité de votre Pc est protégé :

Etape 1 : Téléchargement et installation de VMware Player 
---

Vous devez télécharger le logicel Virtual Box
[ICI](http://download.virtualbox.org/virtualbox/5.1.28/VirtualBox-5.1.28-117968-Win.exe)

Etape 2 : Téléchargement d’une image Debian strecht - netinstall 
---

Téléchargez une image minimaliste debian 9 Stretch
[Ici](https://cdimage.debian.org/debian-cd/current/amd64/iso-cd/debian-9.3.0-amd64-netinst.iso)

Téléchargez le pack d’extensions, et installez-le.
[ICI](http://download.virtualbox.org/virtualbox/5.1.28/Oracle_VM_VirtualBox_Extension_Pack-5.1.28.vbox-extpack)

Etape 3 : Configuration de l’environnement de la VM 
---

Cliquez sur nouvelle et renseignez les champs comme ci dessous :

![VirtualBox1](../images/VirtualBox1.PNG)

-   Cliquez sur suivant, adapter la taille de la mémoire par rapport à
    votre système (1024 sont suffisants)

-   Cliquez sur suivant, créer un disque virtuel maintenant

-   Cliquez sur Créer, choisissez VDI

-   Cliquez sur suivant, dynamiquement alloué

-   Cliquez sur suivant, Choisissez une taille pour l’espace
    (4Go suffisent)

-   Cliquez sur créer

Etape 4 : Lancement de la VM 
---

-   Cliquez sur configuration

-   Sélectionnez stockage

-   Ajoutez un lecteur optique

-   Choisissez un disque

![VirtualBox2](../images/VirtualBox2.PNG)

-   Indiquez l’image précédemment téléchargée

-   Sélectionnez ensuite réseau et choisissez "accès par pont" dans le mode
    d’accès réseau.

![VirtualBox3](../images/VirtualBox3.PNG)

-   Cliquez sur OK \*Cliquez sur démarrer

Etape 5 : Installation de debian 9 
---

C’est du classique …​

![VirtualBox4](../images/VirtualBox4.PNG)

-   Choisissez Graphical install

-   Installez la debian de préférence sans interface graphique
    car inutile. Le nom d’utilisateur n’a aucune importance. Dans la
    plupart des écrans, il suffit de valider le choix par défaut. Vous
    pouvez laissez des champs vides, ce n’est pas bloquant.

-   Pour la sélection des logiciels :

![VirtualBox5](../images/VirtualBox5.PNG)

-   Pour Grub, pas d’inquiétude, le secteur de démarrage est celui de la
    VM, pas celui de votre PC. Aucun risque de casser quoi que ce soit.

Etape 6 : Installation de jeedom 
---

-   Lancez votre VM

-   Identifiez-vous avec l’utilisateur et le mot de passe choisis
    pendant l’installation

-   Passez en root

<!-- -->

    su

-   Saisissez le mot de passe root défini pendant l’installation

-   Récupérez le script jeedom, le rendre exécutable, le lancer

<!-- -->

    wget https://raw.githubusercontent.com/jeedom/core/stable/install/install.sh

    chmod +x install.sh

    ./install.sh

-   et laissez faire…​

Etape 7 : Lancement de jeedom 
---

-   Pour connaitre l’adresse Ip Lan de la VM

<!-- -->

    ip -s -c -h a

Votre adresse Ip, type 192.168.0.XX apparait en rouge. Il vous suffit de
la saisir dans votre navigateur.

> **Warning**
>
> Si cela ne fonctionne pas, vous n’avez pas configuré votre carte
> réseau en Pont réseau comme indiquée au départ.

Ensuite, vous pouvez suivre la documentation [Premier pas avec
Jeedom](https://jeedom.github.io/documentation/premiers-pas/fr_FR/index)

Docker
======

> **Important**
>
> Attention, nous partons ici du principe que vous maîtrisez déjà Docker

Pour découvrir Jeedom, vous pouvez aussi le faire tourner dans un
conteneur Docker :

> **Important**
>
> Prérequis : Avoir une machine ou une VM tournant sous Linux

Etape 1 : Installation de docker 
---

Docker est maintenant disponible sur toutes les distributions récentes.
Pour l’installer sur une distribution

-   à base de rpm

<!-- -->

    $ yum install docker

-   à base de deb

<!-- -->

    $ apt-get update
    $ apt-get install docker
    $ apt-get install docker.io

Etape 2 : Installation d’une image mysql 
---

> **Note**
>
> Vous pouvez aussi installer mysql directement sur la machine hôte,
> dans ce cas, il faut sauter cette étape.

J’utilise [celle-ci](https://hub.docker.com/_/mysql/). Pour l’installer
:

    docker pull mysql:latest

Puis la lancer :

    sudo docker run --name jeedom-mysql -v /opt/jeedom/mysql:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=your-mysql-password -d mysql:latest

Avec :

-   jeedom-mysql : le nom du conteneur mysql

-   /opt/jeedom/mysql : le dossier de l’hote ou l’on doit stoker les
    données de MySql

-   your-mysql-password : le mot de passe root de l’instance MySql

Etape 3 : Installation d’une image Jeedom 
---

Installation de l’image :

    docker pull jeedom/jeedom

Puis lancez la :

    sudo docker run --name jeedom-server --link jeedom-mysql:mysql --privileged -v /your/jeedom/path:/var/www/html -e ROOT_PASSWORD=your-root-password -p 9080:80 -p 9022:22 jeedom/jeedom

Avec :

-   jeedom-server : nom du Docker jeedom voulu

-   /your/jeedom/path : répertoire où les données de Jeedom sont mises
    sur l’hôte

-   your-root-password : mot de passe root pour accéder à Jeedom en SSH

Il vous faut ensuite installer Jeedom en allant sur : IP\_DOCKER:9080 et
entrer les informations de connexion vers mysql :

![install other](../images/install_other.PNG)

Pour la suite, vous pouvez suivre la documentation [Premier pas avec
Jeedom](https://jeedom.github.io/documentation/premiers-pas/fr_FR/index)

> **Important**
>
> Pour le nom de l’hote MySql, il faut mettre jeedom-mysql

Synology
========

Vous trouverez ici la documentation pas à pas pour installer Jeedom sur un
Synology (DSM 5.2 minimum).

Etape 1 : Installation de Docker 
================================

Allez sur le centre des paquets :

![install synology 1](../images/install_synology_1.PNG)

Cliquez sur tous, puis installez le paquet Docker

![install synology 2](../images/install_synology_2.PNG)

Attendez jusqu’à ce que l’installation soit finie :

![install synology 3](../images/install_synology_3.PNG)

> **Important**
>
> Pour avoir accès au paquet Docker, il faut absolument avoir DSM 5.2 et
> un NAS compatible

Etape 2 : Récupération et installation des images Jeedom 
========================================================

Il faut Docker pour faire tourner Jeedom, le premier un Docker Mysql qui
contiendra la base de données et un 2ème qui contient Jeedom

Lancez l’application Docker :

![install synology 4](../images/install_synology_4.PNG)

MYSQL 
-----

Cliquez sur "Registre" :

![install synology 5](../images/install_synology_5.PNG)

Dans le champ de recherche tapez "mysql", selectionnez mysql et cliquez
sur télécharger :

![install synology 15](../images/install_synology_15.PNG)

Validez ensuite la demande de version, le mieux étant de prendre la
version latest :

![install synology 14](../images/install_synology_14.PNG)

Cliquez ensuite sur image, ici vous pouvez suivre l’avancement du
téléchargement (peut prendre plusieurs dizaines de minutes) :

![install synology 16](../images/install_synology_16.PNG)

Une fois terminé, cliquez sur l’image puis lancer :

![install synology 17](../images/install_synology_17.PNG)

Donnez un nom à votre mysql ainsi qu’un port local redirigé vers le port
3306 du conteneur, puis faites suivant :

![install synology 18](../images/install_synology_18.PNG)

Faites suivant :

![install synology 19](../images/install_synology_19.PNG)

Cliquez sur "Paramètres avancés" :

![install synology 34](../images/install_synology_34.PNG)

Puis sur "Ajouter un dossier", et là, mettez le dossier voulu côté
Synology (c’est dans ce dossier qu’il y aura tous les fichiers de la
base de données) et /var/lib/mysql côté conteneur (attention à bien
décocher "Lecture seule")

![install synology 32](../images/install_synology_32.PNG)

Cliquez sur "Environnement" puis "Ajoutez une variable" et mettant dans
"Variable" : "MYSQL\_ROOT\_PASSWORD" et dans valeur mettez le mot de
passe de BDD voulu (il servira plus tard). Puis validez :

![install synology 33](../images/install_synology_33.PNG)

Cochez "Exécuter ce conteneur lorsque l’assistant a terminé" puis
cliquez sur "Appliquer".

Jeedom 
------

Cliquez sur "Registre" :

![install synology 5](../images/install_synology_5.PNG)

Dans le champ de recherche, tapez "jeedom", sélectionnez jeedom/jeedom
et cliquez sur télécharger :

![install synology 20](../images/install_synology_20.PNG)

Validez ensuite la demande de version, le mieux étant de prendre la
dernière.

Cliquez ensuite sur image, ici vous pouvez suivre l’avancement du
téléchargement (peut prendre plusieurs dizaines de minutes) :

![install synology 21](../images/install_synology_21.PNG)

Une fois terminé, cliquez sur l’image puis lancez :

![install synology 22](../images/install_synology_22.PNG)

Donnez un nom à votre jeedom ainsi qu’un port local redirigé vers le
port 80 (ici 9080) et un vers le 22 (ici 9022) du conteneur, puis faites
suivant :

![install synology 23](../images/install_synology_23.PNG)

Faites suivant :

![install synology 24](../images/install_synology_24.PNG)

Cliquez sur "Paramètres avancés"

![install synology 25](../images/install_synology_25.PNG)

Puis sur "Ajouter un dossier"

![install synology 26](../images/install_synology_26.PNG)

Choisissez un dossier sur votre Synology (c’est dans ce dossier qu’il y
aura tous les fichiers jeedom), attention à bien décocher "Lecture
seule"

![install synology 27](../images/install_synology_27.PNG)

Dans chemin d’accès, mettez /var/www/html puis cliquez sur
"Environnement" :

![install synology 28](../images/install_synology_28.PNG)

Cochez "Exécuter le conteneur à l’aide de privilèges élevés" puis
validez le tout :

![install synology 29](../images/install_synology_29.PNG)

Cochez "Exécuter ce conteneur lorsque l’assistant a terminé" puis
cliquez sur "Appliquer".

Etape 3 : Configuration de Jeedom 
---

Il vous faut maintenant installer Jeedom, c’est très simple, allez sur
IP\_NAS:9080

![install synology 31](../images/install_synology_31.PNG)

Remplissez les champs en fonction de votre configuration (configuration
du Docker mysql installé précédemment) et validez.

> **Important**
>
> L’addresse IP de la BDD est l’addresse IP du NAS, le port est celui
> redirigé du Docker Mysql, le mot de passe est celui mis dans le Docker
> Mysql. Le nom d’utilisateur est root et le nom de la base celui que
> vous voulez (conseillé Jeedom)

![install synology 30](../images/install_synology_30.PNG)

> **Tip**
>
> Si vous voulez un accès SSH, il vous faut dans les ports rediriger un
> port local vers le port 22 du conteneur, les identifiants SSH sont
> root/jeedom. Vous pouvez changer le mot de passe en initialisant la
> variable d’environement ROOT\_PASSWORD à la valeur du mot de passe
> voulu.

Ensuite, vous pouvez suivre la documentation [Premier pas avec
Jeedom](https://jeedom.github.io/documentation/premiers-pas/fr_FR/index)

Autres
======

Vous trouverez ici la documentation pour installer Jeedom sur la plupart
des systèmes linux (testée et approuvée sur la distribution Debian)

> **Important**
>
> Debian 9 (Stretch) est la distribution officiellement supportée pour
> la version 3.1.7 de Jeedom (mais Jessie reste parfaitement
> fonctionnelle). Si vous ne maîtrisez pas un minimum les environnements
> Linux, nous vous conseillons de partir sur une image officielle (OVF)
> ou l’utilisation d’une Mini+ ou Smart (disponible prochainement).

> **Important**
>
> Le script d’installation peut être dangereux, car il part du principe
> que votre système est vierge. Si ce n’est pas le cas merci de lire le
> script et de faire une installation à la main.

Connectez-vous en SSH à votre système et faites :

    wget https://raw.githubusercontent.com/jeedom/core/stable/install/install.sh
    chmod +x install.sh
    ./install.sh

Il vous suffit ensuite d’aller sur IP\_MACHINE\_JEEDOM à partir de votre
navigateur Internet.

> **Note**
>
> Les identifiants par défaut sont admin/admin

> **Note**
>
> Les arguments suivants sont utilisables : -w = dossier webserver -z =
> installation dependances z-wave -m = mot de passe root mysql désiré

    ./install.sh -w /var/www/html -z -m Jeedom

Ensuite, vous pouvez suivre la documentation [Premier pas avec
Jeedom](https://jeedom.github.io/documentation/premiers-pas/fr_FR/index).
