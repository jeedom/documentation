Description 
===========

Il y a deux manières de sauvegarder Jeedom et chacune comporte des
avantages et des inconvénients.

Il est possible de réaliser une sauvegarde à partir de l’interface
Jeedom. Celle-ci concerne uniquement le logiciel Jeedom et ses données.
Elle a l’avantage de pouvoir être faite à chaud et le fichier de
sauvegarde peut être exporté vers d’autres supports.

Il est aussi possible de réaliser une sauvegarde en faisant une image
disque de la carte microSD (mini et mini+). Cette façon a l’avantage
d’être une sauvegarde complète du système ainsi que de Jeedom et ses
données. Par contre il faut l’effectuer en éteignant Jeedom et en
branchant la carte microSD sur un autre ordinateur.

Le meilleur moyen d’être tranquille est d’utiliser les deux : Faire une
sauvegarde de la carte microSD de temps en temps et programmer une
sauvegarde régulière de Jeedom.

> **Tip**
>
> La procédure de restauration de la carte microSD peut-être utile pour
> restaurer un Jeedom par défaut à partir de l’image fournie par
> l’équipe voir
> [ici](https://www.jeedom.fr/doc/documentation/installation/fr_FR/doc-installation.html).

Sauvegarde/Restauration de Jeedom 
=================================

Une documentation est déjà présente pour expliquer la page
Administration→Sauvegardes. Vous la trouverez
[ici](https://github.com/jeedom/documentation/blob/master/howto/fr_FR/sauvegarde.comment_faire.asciidoc).

Sauvegarde/Restauration de la carte microSD 
===========================================

Préparatifs 
-----------

Ces sauvegardes/restaurations se réalisent à partir d’un autre
ordinateur afin de faire une "image propre" de la carte SD. Il faut dans
un premier temps arrêter la mini+. Pour cela, passer Jeedom en mode
expert dans le menu utilisateur en haut à droite.

![save restore06](../images/save-restore06.jpg)

Et cliquer sur Éteindre

![save restore07](../images/save-restore07.jpg)

Ensuite, il faut sortir la carte microSD de la mini+ et la connecter à
votre ordinateur via un adaptateur/lecteur de carte/…​

![save restore08](../images/save-restore08.jpg)

Sous Windows 
------------

Il faudra commencer par télécharger un logiciel tiers par exemple :
[Win32 Disk Imager](http://sourceforge.net/projects/win32diskimager/)

1.  **Sauvegarde**

    -   Lancez le logiciel et vérifiez que la lettre en dessous de
        *Device* corresponde bien à celle de votre carte/lecteur
        de carte.

    -   Dans le champ *Image File*, indiquez le nom du fichier image que
        vous voulez créer ainsi que l’endroit où il sera enregistré.

    -   Enfin cliquez sur le bouton *Read*, afin de créer l’image.
        ![save-restore09](C:\Users\bronc\Documents\GitHub\documentation\howto\images\save-restore09.jpg)

2.  **Restauration**

    -   Lancez le logiciel et vérifiez que la lettre en dessous de
        *Device* corresponde bien à celle de votre carte/lecteur
        de carte.

    -   Dans le champ *Image File*, allez chercher le fichier image que
        vous voulez restaurer.

    -   Enfin cliquez sur le bouton *Write*, afin de restaurer cette
        image sur la carte microSD.

![save restore10](../images/save-restore10.jpg)

Sous MacOSX 
-----------

Pour vous faciliter la tâche, vous pouvez télécharger le logiciel
[ApplePi-Baker](http://www.tweaking4all.com/hardware/raspberry-pi/macosx-apple-pi-baker/)

![save restore11](../images/save-restore11.jpg)

1.  **Sauvegarde**

    -   Avec ApplePi-Baker : Sélectionnez la bonne carte dans la liste
        *Pi-Crust*, et cliquez sur *Create Backup* afin de créer un
        fichier image de votre carte microSD.

    -   En commande shell :

        -   Afin de trouver le disque correspondant à la carte, ouvrez
            un terminal et saisissez la commande : `diskutil list`
            image::../images/save-restore12.jpg\[align="center"\]

        -   Lancez la création de l’image en saisissant la commande :
            `sudo dd if=/dev/disk1 of=~/Desktop/Backup_Jeedom.img bs=1m`
            *Remarque: Dans cet exemple, le nom du disque de la carte
            est `/dev/disk1`, il faut donc saisir dans la commande de
            sauvegarde \`/dev/disk1\`*

2.  **Restauration**

    -   Avec ApplePi-Baker : Sélectionnez la bonne carte dans la liste
        *Pi-Crust*, mettez le chemin vers le fichier image à restaurer
        dans le champ *IMG file* de la section *Pi-Ingredients*, et
        cliquez sur *Restore Backup* afin de restaurer l’image sur la
        carte microSD.

    -   En commande shell :

        -   Afin de trouver le disque correspondant à la carte, ouvrez
            un terminal et saisissez la même commande que pour la
            sauvegarde : `diskutil list`

        -   Démontez les partitions de la carte en tapant la commande :
            `sudo diskutil unmountDisk /dev/disk1`

        -   Restaurez l’image sur la carte microSD en tapant la commande
            :
            `sudo dd bs=1m if=~/Desktop/Backup_Jeedom.img of=/dev/disk1`
            *Remarque : Dans cet exemple, le nom du disque de la carte
            est `/dev/disk1`, il faut donc saisir dans la commande de
            sauvegarde \`/dev/disk1\`*

Sous Linux 
----------

1.  **Sauvegarde**

    -   Afin de trouver le disque correspondant à la carte, ouvrez un
        terminal et saisissez la commande : `sudo fdisk -l | grep Dis`

        ``` {.bash}
        $ sudo fdisk -l | grep Dis
        Disk /dev/sda: 320.1 GB, 320072933376 bytes
        Disk /dev/sdb: 16.0 GB, 16012804096 bytes
        Disk /dev/sdc: 8.0 GB, 8006402048 bytes
        ```

    -   Lancez la création de l’image en saisissant la commande :
        `sudo dd if=/dev/sdc of=Backup_Jeedom.img bs=1m` *Remarque: Dans
        cet exemple, le nom du disque de la carte est /dev/sdc.*

2.  **Restauration**

    -   Afin de trouver le disque correspondant à la carte, ouvrez un
        terminal et saisissez la commande : `sudo fdisk -l | grep Dis`

    -   Démontez les partitions de la carte en tapant la commande (en
        remplaçant le X par les numéros des partitions) :
        `sudo umount /dev/sdcX`

    -   Restaurez l’image sur la carte microSD en tapant la commande :
        `sudo dd if=Backup_Jeedom.img of=/dev/sdc bs=1m` *Remarque: Dans
        cet exemple, le nom du disque de la carte est /dev/sdc.*


