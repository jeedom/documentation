# Mise en place du DNS Jeedom

## Objectif

Mettre en place le DNS Jeedom pour avoir un accès à son Jeedom en externe par une URL en HTTPS

## Pré-requis

Pour avoir accès aux DNS Jeedom il faut **absolument avoir un service pack power ou plus**. Vous pouvez souscrire [ICI](https://www.jeedom.com/market/index.php?v=d&p=register)

## Principe

Le principe du DNS Jeedom est très simple, votre Jeedom va se connecter sur un de nos serveurs en VPN (connexion cryptée). Ensuite ce serveur en question chez nous fait du "reverse proxy" lors de la demande : il prend votre demande de connexion à votre jeedom et la transfère vers celui-ci.

Ce principe à l'avantage de ne pas exposer votre Jeedom sur internet, pas d'ouverture de port(s) à faire.

> **IMPORTANT**
>
> Pour que ca marche il faut que votre box autorise une connexion sortante sur les ports 1194, 1195, 1996 et 1997. En particulier pour les Livebox et routeur 4g Huawei il faut baisser le niveau du firewall.

Nous avons actuellement 5 serveurs DNS reparti sur 2 machines physique differentes, ayant chacun une connexion 1Gbit/s. 

## Mise en place

### Jeedom

Là c'est super simple, vous devez connecter votre Jeedom au [market](https://www.jeedom.com/market/index.php?v=d&p=register) (voir documentation premier-pas). 

### Market

Une fois que c'est fait vous allez sur le market sur votre profils (https://www.jeedom.com/market/index.php?v=d&p=profils) puis dans l'onglet "Mes Jeedoms".

Vous devriez normalement voir votre Jeedom, avec devant une indication "Statut du DNS", tant que c'est pas vert votre Jeedom ne pourra utiliser les services DNS, il faut attendre environ 24h après la premiere connexion d'un Jeedom au market pour que le status passe à "Connection possible" (vert)

> **IMPORTANT**
>
> Si votre status n'est pas à "Connection possible" ca ne sert a rien de faire les étapes suivantes, il faut attendre, si au bout de 48h votre status n'est toujours pas à "Connection possible" vérifiez que vous avez bien un service pack power ou plus (onglet Mon profils de profils sur le market puis partie Résumé)

### Retour à Jeedom

Une fois le status du market à "Connection possible", allez sur votre Jeedom, dans l'administration de celui-ci allez sur l'onglet Réseaux et cochez "Utiliser les DNS Jeedom" puis sauvegardez.

Jeedom va démarrer le DNS et vous donner votre url d'accès à votre Jeedom

> **IMPORTANT**
>
> Vous pouvez changer cette url en allant sur votre page profils du market puis partie mes Jeedoms. Attention tout changement prend 24h avant d'être effectif

Voila votre Jeedom est accessible de l'exterieure en https

## FAQ

> **Mon status sur le market est bien en "Connection possible" mais mon Jeedom ne se connecte pas**
>
> Vous pouvez essayer de cliquer sur redémarrer pour voir si cela corrige. Si ca ne marche toujours pas il faut verifier que votre box ADSL autorise bien la connexion (voir plus haut). Si tout ca est bon il faut aller lire les log openvpn_* et le cas échéant communiquer ces logs lors de votre ouverture de demande de support.

> **Y a-t-il besoin d'ouvrir des ports sur ma box**
>
> Non il n'y a pas besoin d'ouvrir de port de votre box internet vers votre Jeedom. La connexion est dans le sens Jeedom -> VPN, c'est donc une connexion sortant (sur les ports 1194, 1195, 1996 et 1997) et non une connexion entrante.

> **Pourquoi les DNS Jeedom protege mon accès à celui-ci**
>
> Les DNS Jeedom permettent de mettre en place quelque chose de très important, un accès HTTPS, celui-ci garantie que la connexion entre votre navigateur et votre Jeedom est cryptée, de plus le certificat étant valide personne ne pourra se faire passer pour votre Jeedom. Enfin la connexion VPN en votre Jeedom et nos serveurs est elle aussi cryptée.

> **J'ai changé le port d'écoute interne de mon Jeedom et les DNS Jeedom ne marchent plus**
>
> Effectivement le DNS Jeedom ne marche que si votre Jeedom écoute sur le port local 80 (tous les autres ports sont fermées sur l'interface du VPN lors de la connexion). Cela ne pose pas de soucis de sécurité car le VPN crée un tunnel crypté, donc meme si le flux est en clair sur le port 80 il est crypté dans le tunnel du VPN.

> **J'ai pas la page de connexion mais impossible de me connecter**
>
> Vérifiez que vous avez bien changé les identifiants par defaut de jeedom (admin/admin) et que votre utilisateur n'est pas restreint en local seulement.

> **Ma configuration est bonne mais impossible d'avoir une page ca tourne à l'infini**
>
> Si votre configuration est bonne (Initialization Sequence Completed dans le log openvpn_DNS_Jeedom) mais que vous n'arrivez pas à avoir la page de connexion, qui marche avec l'application mobile de maniere aléatoire et vous etes en 4g ou en fin de ligne ADSL. Cela est du a une connexion de mauvaise qualité (les paquet arrive pas tous correctement il demande donc un renvoi a l'infini). Il faut changer la taille des packets (plus les packet sont petit moins il y a de chance qu'il soit corrompu et donc renvoyé par contre moins il y a de données transmise d'un coup donc ca peut ralentir). Pour changer la taille des packet aller dans Plugin -> Communication -> Openvpn puis cliquer sur l'équipement "DNS Jeedom" et dans "Commande post démarrage" mettre "sudo ip link set dev #interface# mtu 1300" (vous pouvez essayé avec 1400 au lieu de 1300, par defaut la taille est de 1500). Ne pas oublier de redemarrer le DNS Jeedom depuis la page d'Administration Jeedom puis partie réseaux.
