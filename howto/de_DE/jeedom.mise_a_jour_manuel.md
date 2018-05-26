Hier werden Sie sehen, wie man Jeedom manuell, über die
SSH-Konsole aktualisiert.

Voraussetzungen 
=========

-   Sie wissen, wie Sie sich mit SSH in Jeedom einloggen können 

-   dass, sie das SSH Passwort kennen (siehe Installationsdokumentation)

-   Sie haben Internetzugang von der Jeedom-Box aus

> **Wichtig**
>
> Denken Sie daran, vor jedem manuellen Update ein Backup zu
> erstellen und zu exportieren.

Herunterladen und Entpacken
===============================

In SSH eingeben :

    sudo su -
    cd /root
    wget https://github.com/jeedom/core/archive/stable.zip
    unzip stable.zip
    cp -R core-stable/* /var/www/html
    cp -R core-stable/.[^.]* /var/www/html

Aktualisieren 
===========

Weiterhin in SSH :

    sudo su -
    php /var/www/html/install/update.php mode=force
    chmod 775 -R /var/www/html
    chown www-data:www-data -R /var/www/html

> **Important**
>
> Wenn Ihre Jeedom Installation etwas älter ist, ersetzen Sie alle
> /var/www/html Verzeichnis durch /usr/share/nginx/www/jeedom
