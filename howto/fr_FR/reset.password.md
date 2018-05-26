Nous allons voir ici comment changer votre mot de passe Jeedom, si vous
l’avez oublié, directement en modifiant celui-ci dans la base de
données.

La première chose à faire est de se connecter en SSH à Jeedom (avec un
logiciel type kitty ou putty).

Une fois connecté, il vous faut récupérer les identifiants de la base de
données :

``` {.bash}
cat /var/www/html/core/config/common.config.php
```

Ici, vous trouverez le mot de passe pour accéder à la base de données
jeedom, il faut ensuite faire :

``` {.bash}
mysql -ujeedom -p
```

Là il vous demande le mot de passe récupéré plus haut (le mot de passe
ne s’affiche pas : c’est normal). Tapez ensuite (ou mieux,
copier/coller. Il faut faire "clic-droit" sous Putty pour "coller") :

``` {.bash}
use jeedom;
REPLACE INTO user SET `login`='adminTmp',password='c7ad44cbad762a5da0a452f9e854fdc1e0e7a52a38015f23f3eab1d80b931dd472634dfac71cd34ebc35d16ab7fb8a90c81f975113d6c7538dc69dd8de9077ec',profils='admin', enable='1';
```

Voilà. Vous pouvez vous déconnecter/reconnecter à votre Jeedom avec les
identifiants adminTmp/admin ce qui vous permettra de modifier le mot de
passe des autres comptes également.

>**IMPORTANT**
>
>N'oubliez pas une fois fini de bien supprimer l'utilisateur adminTmp, le laisser pourrait etre une potentiel faille de sécurité

>**IMPORTANT**
>
> Si vous avez activé l'authentification AD/LDAP cette méthode de remise à zéro ne marchera pas à moins de désactiver le mode AD/LDAP. Vous pouvez le faire en faisant : 
>``` {.bash}
>use jeedom;
>REPLACE INTO `config` SET `value`='0',`key`='ldap:enable',`plugin`='core';
>```
