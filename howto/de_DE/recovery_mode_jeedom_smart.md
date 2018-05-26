Présentation 
============

La Jeedom Smart est équipée d’un disque Emmc, garantissant une meilleur fiabilité qu'une carte SD, mais ce disque n’est pas directement accessible.

Le Recovery Mode USB englobe à la fois le système, l’OS, et aussi l’application Jeedom.

Il permet :

- La reinitialisation de la Jeedom Smart en configuration « usine » OS+Jeedom.

- La reinitialisation de la Jeedom Smart en configuration « usine », en appliquant ensuite sa sauvegarde Jeedom.

Pour rappel la gestion des sauvegardes/restauration est disponible dans Jeedom dans le menu « roues crantées » en haut à droite, puis « Sauvegardes ».

Jeedom propose un service avec abonnement de sauvegarde automatique sur cloud privé Jeedom, pour ne plus vous soucier de rien. (Sur le Market, dans votre compte, menu à gauche « Backup Cloud »).




Fonctionnement du recovery mode 
===============================

Matériel necessaire : une clé USB (minimum 8Go).

N.B. pensez à mettre de côté (en local) une sauvegarde de configuration Jeedom




1- téléchargez l’archive que nous fournissons  : [backupJeedom.tar.gz](https://www.amazon.fr/clouddrive/share/x8ikHNd19M05qa2QCgJS90H9wyMq4xaxIUEola4iGSo?_encoding=UTF8&mgh=1&ref_=cd_ph_share_link_copy)

2- copiez cette archive sans la modifier ni la dézipper, sur une clé USB formatée en FAT32 et vierge

3- arrêtez votre Smart proprement par Jeedom

4- débranchez là

5- insérez votre clé USB

6- redémarrez la Smart

7- patientez environ 30min, box non accessible **NE PAS DEBRANCHER**

8- cherchez votre Smart sur le réseau

9- vous reconnecter avec le login : admin et le mot de passe : admin

> **Important**
>
>
> Attention ! Un Recovery Mode remet quoi qu’il arrive votre Smart en configuration « usine » neuve. Si vous avez une sauvegarde de votre configuration Jeedom il suffit après de la restaurer.
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Ce Recovery Mode n’est compatible qu’avec la Jeedom Smart.


