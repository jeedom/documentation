# Monitoring cloud

## Description

Le monitoring cloud est un service Jeedom SAS payant qui surveille en permanance votre ou vos Jeedoms et vous prévient en cas de soucis.

## Qu'est ce qui est surveiller

La liste de ce qui est surveiller évolue pour essayer d'etre le plus réactif/pro actif possible, dans les controles de base vous avez : 

- Système disponible
- Serveur web (apache2) démarré
- Base de données (mysql) démarré
- Charge CPU
- Charge mémoire
- Charge SWAP
- Entrée/Sortie disques
- Espace disque libre

Vous êtes aussi prévenu lors d'un redemarrage de votre Jeedom.

## Comment suis-je prévenu

Par default vous êtes prévenu par un mail sur votre mail configuré dans votre profils mais vous pouvez dans la configuration du monitoring cloud (sur votre page profils du market) : 

- Mettre une autre adresse mail (une seule possible)
- Ajouter une alerte sur Télégram
- Ajouter une alerte sur Slack (il faut juste donner l'adresse de Webhook)
- Ajouter une alerte par SMS (attention cela necessite que vous ayez du crédit SMS sur le market)

## Comment l'activer

La procedure est assez simple, il faut : 

- avoir du crédit monitoring cloud (il s'achete par lot de 1 mois, vous pouvez donc en prendre 2 mois puis arreter 6 mois puis en reprendre après)
- avoir jeedom 3.2.4 minium

Après avoir ajouté du crédit monitoring cloud, il faut soit attendre quelques heures (24h environ), soit dans Jeedom, sur la partie configuration puis mise à jour cliquer sur le bouton "test" pour la connexion au market (cela force le Jeedom a récuperer les informations du market et donc le faite que le service monitoring cloud est actif).

Ensuite vous pouvez voir dans la partie santé de Jeedom si celui-ci est actif. Il faut environ 10min pour qu'il se lance suite à la synchronisation avec le market (clic sur le bouton test).

>**IMPORTANT**
>
>Lors de la premiere activation ou réactivation il est possible que vous receviez un mail/telegram/slack/sms vous indiquant que votre Jeedom n'est pas disponible. C'est normal c'est le temps que le Jeedom en question active les services de monitoring.

>**IMPORTANT**
>
> Une fois le service activé celui surveille tous les Jeedom relié à votre compte

## C'est compatible avec tout ?

- Smart (testé)
- Debian x64 Stretch (testé)
- Debian x64 Jessie
- RPI