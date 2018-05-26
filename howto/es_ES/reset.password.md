Veremos cómo cambiar su contraseña si Jeedom
han olvidado, directamente mediante la modificación en la base de datos
datos.

Lo primero que debe hacer es SSH en Jeedom (con
software como masilla o gatito).

Una vez conectado, es necesario recuperar los identificadores de la base
datos:

``` {.bash}
cat /var/www/html/core/config/common.config.php
```

Aquí se puede encontrar la contraseña para acceder a la base de datos
jeedom que hacer a continuación:

``` {.bash}
mysql -ujeedom -p
```

Allí se le pide la contraseña recuperada por encima (la contraseña
no aparece: esto es normal). A continuación, introduzca (o mejor,
copiar pegar. Necesitamos "botón derecho del ratón" en la masilla para "pegar"):

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
