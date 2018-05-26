Presentación 
============

El Jeedom Smart está equipado con un disco Emmc, lo que garantiza una mayor fiabilidad que una tarjeta SD, pero este disco no es directamente accesible.

El modo de recuperación USB incluye tanto el sistema, el sistema operativo y la aplicación Jeedom.

Eso permite :

- Reiniciar el Jeedom Smart a la configuración de fábrica el SO+Jeedom.

- Reiniciar el Jeedom Smart a la configuración de fábrica, y luego aplicar su copia de seguridad de Jeedom.

Como recordatorio, la gestión de copias de seguridad/restauraciones está disponible en Jeedom en el menú "Ruedas dentadas" en la parte superior derecha, luego "Copias de seguridad".

Jeedom ofrece un servicio de suscripción automática de copia de seguridad en la nube privada de Jeedom, para que usted ya no tenga que preocuparse por nada. (En el Mercado, en su cuenta, menú izquierdo " Backup Cloud ").




Funcionamiento del modo recuperación 
===================================

Hardware requerido: una llave USB (mínimo 8GB).

Nota. Considere la posibilidad de reservar (localmente) una copia de seguridad de la configuración de Jeedom.




1- descargar el archivo que proporcionamos :[backupJeedom.tar.gz](https://www.amazon.fr/clouddrive/share/x8ikHNd19M05qa2QCgJS90H9wyMq4xaxIUEola4iGSo?_encoding=UTF8&mgh=1&ref_=cd_ph_share_link_copy)

2- copiar este archivo sin modificarlo o descomprimirlo, en una llave USB formateada en FAT32 y en blanco

3- Apague su Smart limpiamente desde Jeedom

4- desenchufarlo

5- inserte su llave USB

6- reiniciar el Smart

7- esperar unos 30 minutos, la caja no es accesible **NO DESENCHUFAR**

8- busque su Smart en la red

9- reconectar con el login: admin y contraseña: admin

> **Importante**
>
>
> ¡Atención! El modo recuperación devuelve el Smart a una nueva configuración de "fábrica" sin configurar. Si tienes una copia de seguridad de tu configuración de Jeedom, sólo tienes que restaurarla después.
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Este modo de recuperación sólo es compatible con Jeedom Smart.


