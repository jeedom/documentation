Hardware
========

Jeedom kann auf verschiedenen Hardware-Komponenten installiert werden:

-   ein Raspberry Pi 2 oder 3

-   eine Synology NAS

-   jedes Debian-basierte Linux-System

Sie können auch eine fertige Box mit vorinstalliertem Jeedom kaufen,
die auch ein Service Pack (mehr Unterstützung und Dienste) enthält und 
angebotenen Plugins :

-   [Jeedom Smart
    Z-Wave+](https://www.domadoo.fr/fr/box-domotique/3959-jeedom-controleur-domotique-jeedom-smart-z-wave.html)

-   [Jeedom Smart Z-Wave+ und
    RFXCOM](https://www.domadoo.fr/fr/box-domotique/4043-jeedom-controleur-domotique-jeedom-smart-z-wave-et-interface-rfxcom.html)

-   [Jeedom Smart
    EnOcean](https://www.domadoo.fr/fr/box-domotique/4041-jeedom-controleur-domotique-jeedom-smart-enocean.html)

-   [Jeedom Smart EnOcean und
    RFXCOM](https://www.domadoo.fr/fr/box-domotique/4044-jeedom-controleur-domotique-jeedom-smart-enocean-et-interface-rfxcom.html)

Hier ist ein Konfiguriertes "Beispiel" um gut mit Z-Wave in Jeedom zu starten :

1.  Raspberry Pi 3 :

    -   Ein Raspberry+Gehäuse ~ 50 €

    -   Ein Aeon-Stick Gen5 ~ 60 €

    -   Eine Micro SD Karte ~ 7 €

    -   Eine Stromversorgung über USB ~ 8 €

Insgesamt 125 € für eine Open-Source Haus-Automatisierungs Box mit
vollständiger Kontrolle der Installation.

> **Tipp**
>
> Es ist möglich, eine Rfxcom Antenne oder ein enOcean Schlüssel
> hinzuzufügen oder zu ändern.

> **Tipp**
>
>Jeedom ist eine Software, die Open Source ist und bleibt, ihre Nutzung ist
> völlig kostenlos und hängt nicht von einer Cloud oder einem Abonnement
> ab. Einige Plugins, die die Fähigkeiten von Jeedom oder dessen Nutzung
> erhöhen, können jedoch kostenpflichtig sein **und benötigen
> möglicherweise eine Internetverbindung**. Sie können die Liste der Plugins
> [hier](http://market.jeedom.fr/index.php?v=d&p=market&type=plugin)
> finden.

> **Tipp**
>
> Service pack ? Was bedeutet das ? Sie können 
> [hier](https://blog.jeedom.fr/?p=1215) die Vorteile von Service Packs sehen.


Jeedom Smart
===========

Sie finden hier die Dokumentation Schritt für Schritt, um Jeedom zu installieren oder wiederherzustellen

https://jeedom.github.io/documentation/howto/fr_FR/recovery_mode_jeedom_smart

Jeedom mini+
===========

> **Tipp**
>
> Der Name des heruntergeladenen Jeedom-Abbilds kann sich von dem in
> dieser Dokumentation unterscheiden.

Schritt 1 : Etcher installieren
---

Sie müssen die Etcher Software [hier](https://etcher.io/) herunterladen und auf Ihrem PC installieren.

Schritt 2 : Wiederherstellung Jeedom-Abbild
---

Sie müssen
[hier](https://www.amazon.fr/clouddrive/share/OwYXPEKiIMdsGhkFeI3eUQ0VcvTEBq0qxQevlXPvPIy/folder/IT3WZ3N0RqGzaLBnBo0qog) hin gehen,
dann im Ordner Images das Abbild jeedom-jeeboard-\*.rar oder
Jeedomboard\_\_Debian\_Jessie\*.rar herrunterladen.

![install humming 1](../images/install_humming_1.PNG)

Schritt 3 : Jeedom-Abbild Dekomprimieren
---

Das Jeedom-Abbild dekomprimieren (falls Sie nichts zum dekomprimieren haben können Sie hier [winrar](http://www.clubic.com/telecharger-fiche9632-winrar.html) herunterladen), Sie müssen erhalten : 

![install humming 2](../images/install_humming_2.PNG)

![install humming 8](../images/install_humming_8.PNG)

Schritt 4: Das Abbild auf die SD-Karte brennen
---

Legen Sie Ihre SD-Karte in Ihren Computer ein und starten Sie die Etcher
Software, geben Sie den Pfad des Abbildes, den Pfad der SD-Karte und
klicken Sie auf "Flash!". Die Software wird die SD-Karte brennen und die
Gravur überprüfen.

Sie müssen nur die SD-Karte in das Jeedomboard stecken (oder Hummingboard), das Netzwerk und die Stromversorgung anschließen, Ihr Jeedom wird starten (5 min) und Sie sollen es im Netzwerk sehen.

> **Tipp**
>
> Die SSH Zugangsdaten sind jeedom/Mjeedom96 .

Danach können Sie die Dokumentation [Erste Schritte mit Jeedom](https://jeedom.github.io/documentation/premiers-pas/fr_FR/index.html) folgen.


Raspberry Pi
===========

Sie finden hier die Dokumentation, um Jeedom auf einem Raspberry PI **mit einer SD-Karte** zu installieren.

> **Wichtig**
>
> Debian 9 (Stretch) ist die offiziell unterstützte Distribution für Version 3.1.5
> von Jeedom (aber Jessie bleibt perfekt funktional).
>

**1/ Télécharger le dernière image "lite", c’est à dire sans interface
graphique**
[ICI](https://downloads.raspberrypi.org/raspbian_lite/images/raspbian_lite-2018-04-19/2018-04-18-raspbian-stretch-lite.zip)

**2/ Dekomprimieren Sie das Abbild mit Winrar** [Hier](http://www.win-rar.com)

**3/ Brennen Sie dieses Abbild zum Beispiel mit Etcher auf eine SD-Karte**
[Hier](https://etcher.io/)

> **Notiz**
>
> Wenn Sie Etcher verwenden, um Ihr Abbild zu brennen, ist der
> Dekomprimierungsschritt nutzlos (das Zip-Format wird direkt bei der Auswahl
> der Abbilddatei erkannt).

**4/ Einen SSH-Zugriff aktivieren**

> **Warnung**
>
> Aus Sicherheitsgründen ist der SSH-Zugriff in dieser Distribution nicht mehr
> standardmäßig aktiviert. Er muss daher aktiviert werden.

Es ist notwendig, auf der boot Partition (dem einzigen unter Windows zugänglichen) eine leere Datei ssh zu erstellen.

Nur Rechtsklick : neues / Textdokument und umbenennen in "ssh" **ohne Erweiterung**

> **Wichtig**
>
> Unter Windows müssen Sie im Explorer Ihre Einstellungen 
> in der Ansicht / Optionen /  Ordner- und Suchenoptionen
>  ändern / überprüfen

![ExtensionFichier](../images/ExtensionFichier.PNG)

**5/ PI starten**

Legen Sie Ihre SD-Karte ein, verbinden Sie das Netzwerkkabel und schließen Sie das Netzteil an.

**6/ Sich mit SSH verbinden**

Identifizieren Sie Ihr Pi im Netzwerk

Sie müssen die IP-Adresse Ihres Pi wissen. Es gibt mehrere Lösungen :

-   Sehen Sie sich die DHCP-Konfiguration in Ihrem Router an

-   Verwenden Sie einen Port-Scanner "Angyipscanner"
    [Hier](http://angryip.org/download/#windows)

Stellen Sie die Verbindung her

Verwenden Sie zum Beispiel putty, um Ihre Verbindung herstellen
[Hier](http://www.putty.org/)

Geben Sie die IP-Adresse Ihres PIs ein (hier 192.168.0.10) und klicken Sie auf
Öffnen. Akzeptieren Sie die Standardsicherheitsnachricht für die erste
Anmeldung.

Verbinden Sie sich mit den Anmeldedaten **pi / raspberry**

> **Wichtig**
>
> Aus Sicherheitsgründen muss das Standardkennwort unbedingt geändert
> werden. Hacking-Angriffe, die auf der Verwendung des Standard-Login/
> Passwort-Paares des Raspberry basieren, sind besonders weit verbreitet.
> (passwd und sudo passwd Befehl)                                                                                                                                                                                                               

**7/ Starten Sie das Jeedom Installationsskript**

    wget -O- https://raw.githubusercontent.com/jeedom/core/stable/install/install.sh | sudo bash

**Das sudo Passwort ist auch raspberry**

> **Notiz**
>
> Abhängig von Ihrer Internetgeschwindigkeit kann die Installation 45
> bis 90 Minuten dauern. Sie dürfen den Prozess vor dem Ende nicht
> unterbrechen. Andernfalls muss das gesamte Verfahren wiederholt werden.

Sie müssen danach nur noch auf IP\_MACHINE\_JEEDOM gehen

> **Notiz**
>
> Die standard Zugangsdaten sind admin/admin

> **Notiz**
>
> Die folgenden Argumente sind verwendbar: -w = Datei-Webserver -z =
> Abhängigkeiten Installations z-wave -m = gewünschtes mysql root Passwort

    ./install.sh -w /var/www/html -z -m Jeedom

**8/ Systemoptimierung

Wenn Sie Ihren Raspberry für Jeedom ohne angeschlossenen Bildschirm verwenden, wird empfohlen, die Mindestmenge an RAM für den Videoteil zu verwenden.

Melden Sie sich einfach unter **SSH** an und bearbeiten Sie die Konfigurationsdatei : `sudo nano /boot/config.txt`

Hinzufügen **und/oder**den-Kommentar (durch Entfernen von #)**und/oder** ändern der Zeilen :

`gpu_mem=16`

`disable_l2cache=0`

`gpu_freq=250`

Beenden durch Speichern : `CTRL+X` dann `N` dann `ENTER`

Starten Sie den RPI neu

Danach können Sie der Dokumentation [Erste Schritte mit Jeedom]
(https://jeedom.github.io/documentation/premiers-pas/fr_FR/index) folgen.

VM
==

Wenn Sie Jeedom ohne Risiko entdecken möchten, können Sie es auch auf
Ihrem PC virtualisieren, dazu sind die folgenden Schritte auszuzführen. Sie
gehen kein Risiko in einer VM ein, die Integrität Ihres PCs ist geschützt :

Schritt 1 : Downloaden und installieren des VMware Player
---

Sie müssen die Virtual Box-Software
[HIER](http://download.virtualbox.org/virtualbox/5.1.28/VirtualBox-5.1.28-117968-Win.exe) herunterladen

Schritt 2 : Herunterladen eines Debian stretch-netinstall Abbildes
---

Laden Sie ein minimalistisches Abbild von debian 9 Stretch
[Hier](https://cdimage.debian.org/debian-cd/current/amd64/iso-cd/debian-9.3.0-amd64-netinst.iso) herunter 

Laden Sie das Erweiterungspaket herunter und installieren Sie es.
[HIER](http://download.virtualbox.org/virtualbox/5.1.28/Oracle_VM_VirtualBox_Extension_Pack-5.1.28.vbox-extpack)

Schritt 3 : Konfiguration der VM-Umgebung
---

Klicken Sie auf neu und füllen Sie die Felder wie folgt aus :

![VirtualBox1](../images/VirtualBox1.PNG)

-   Klicken Sie auf Weiter, passen Sie die Größe des Speichers relativ zu
    Ihrem System an (1024 sind ausreichend)

-   Klicken Sie auf Weiter, erstellen Sie jetzt eine virtuelle Festplatte

-   Klicken Sie auf Erstellen, wählen Sie VDI

-   Klicken Sie auf weiter, weisen Sie dynamisch zu

-   Klicken Sie auf Weiter, wählen Sie eine Größe für den Speicher aus
    (4gb sind genug)

-   Klicken Sie auf Erstellen

Schritt 4 :  VM starten
---

-   Klicken Sie auf Konfiguration

-   Wählen Sie Speicherplatz

-   Fügen Sie ein optisches Laufwerk hinzu

-   Wähle eine CD aus

![VirtualBox2](../images/VirtualBox2.PNG)

-   Geben Sie das zuvor heruntergeladene Abbild an

-   Wählen Sie dann Netzwerk und wählen in "Angeschlossen an"
    "Netzwerkbrücke".

![VirtualBox3](../images/VirtualBox3.PNG)

-   Klicken Sie auf OK. \* Klicken Sie auf Start

Schritt 5 : Debian 9 installieren
---

Es ist das klassische ...

![VirtualBox4](../images/VirtualBox4.PNG)

-   Wählen Sie Grafische Installation.

-   Installieren Sie den Debian vorzugsweise ohne grafische Benutzeroberfläche, 
    da dies nutzlos ist. Der Benutzername spielt keine Rolle. In den meisten 
    Bildschirmen bestätigen Sie einfach die Standardauswahl. Sie können 
    leere Felder lassen, diese sind nicht störend.

-   Für die Softwareauswahl :

![VirtualBox5](../images/VirtualBox5.PNG)

-   Wegen Grub, machen Sie sich keine Sorgen, der Bootsektor ist von der VM, 
    nicht von Ihrem PC. Es besteht keine Gefahr etwas zu zerstören.

Schritt 6 : Jeedom installieren
---

-   Starten Sie Ihre VM

-   Melden Sie sich mit dem Benutzer und dem Kennwort an, das Sie sich während der
    Installation ausgewählt haben

-   Wechseln in den root Modus

<!-- -->

    su

-   Geben Sie das während der Installation festgelegte root-Passwort ein

-   Laden Sie sich das Jeedom-Skript herunter, machen Sie es ausführbar, starten Sie es

<!-- -->

    wget https://raw.githubusercontent.com/jeedom/core/stable/install/install.sh

    chmod +x install.sh

    ./install.sh

-   und arbeiten lassen...

Schritt 7 : Jeedom starten
---

-   Um die Lan IP Adresse der VM herauszufinden

<!-- -->

    ip -s -c -h a

Ihre IP-Adresse, Typisch 192.168.0.XX, wird rot angezeigt. Geben Sie sie
einfach in Ihren Browser ein.

> **Warnung**
>
> Wenn dies nicht funktioniert, haben Sie Ihren Netzwerkadapter nicht > wie ursprünglich angegeben als Netzwerkbrücke konfiguriert.

Danach können Sie der Dokumentation [Erste Schritte mit Jeedom]
(https://jeedom.github.io/documentation/premiers-pas/fr_FR/index) folgen.

Docker
======

> **Wichtig**
>
> Achtung, wir gehen hier davon aus, dass Sie bereits, Docker kennen

Um Jeedom kennen zu lernen, können Sie es auch in einem Docker-
Container ausführen :


Schritt 1 : Docker installieren
---

Docker ist jetzt in allen aktuellen Distributionen verfügbar. Zur
Installation auf einer Distribution

-   auf rpm Basis

<!-- -->

    $ yum install docker

-   auf deb Basis

<!-- -->

    $ apt-get update
    $ apt-get install docker
    $ apt-get install docker.io

Schritt 2 : Ein MySQL-Abbild installieren
---

> **Notiz**
>
> Alternativ können Sie Mysql direkt auf dem Hostcomputer installieren,
> in diesem Fall sollten Sie diesen Schritt überspringen.

Ich benutze [dieses hier](https://hub.docker.com/_/mysql/). So installieren Sie es
:

    docker pull mysql:latest

Führen Sie dann aus :

    sudo docker run --name jeedom-mysql -v /opt/jeedom/mysql:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=your-mysql-password -d mysql:latest

Mit :

-   jeedom-mysql : der Name des mysql-Containers

-   /opt/jeedom/mysql : der Ordner des Hosts, in dem man die Daten von 
    MySql speichern muss

-   your-mysql-password : das root-Passwort der MySql-Instanz

Schritt 3 : Ein Jeedom Abbild installieren
---

Abbild installieren :

    docker pull jeedom/jeedom

Starten Sie dann :

    sudo docker run --name jeedom-server --link jeedom-mysql:mysql --privileged -v /your/jeedom/path:/var/www/html -e ROOT_PASSWORD=your-root-password -p 9080:80 -p 9022:22 jeedom/jeedom

Mit :

-   jeedom-server : Name des gewünschten Jeedom-Docker

-   /your/jeedom/path : Verzeichnis, in dem Jeedom-Daten auf dem Host 
    abgelegt werden

-   your-root-password : Root-Passwort für den SSH Zugriff auf Jeedom

Dann müssen Sie Jeedom installieren, indem Sie : IP\_DOCKER:9080 und
die Verbindungsinformationen zu mysql eingeben :

![install other](../images/install_other.PNG)

Danach können Sie die Dokumentation [Erste Schritte mit Jeedom]
(https://jeedom.github.io/documentation/premiers-pas/fr_FR/index) folgen.

> **Wichtig**
>
> Für den Namen des MySql-Hosts müssen Sie jeedom-mysql eingeben

Synology
========

Hier ist eine Schritt für Schritt Dokumentation um Jeedom auf eine Synology
(DSM 5.2 minimum) zu installieren.

Schritt 1 : Docker installieren
================================

Gehen Sie zum Paket Zentrum :

![install synology 1](../images/install_synology_1.PNG)

Klicken Sie auf Alle, und installieren Sie das Paket Docker

![install synology 2](../images/install_synology_2.PNG)

Warten Sie, bis die Installation abgeschlossen ist :

![install synology 3](../images/install_synology_3.PNG)

> **Wichtig**
>
> Um auf das Docker Paket zuzugreifen ist es wichtig, DSM 5.2 und eine
> kompatible NAS zu haben

Schritt 2 : Wiederherstellung und die Installation des Jeedom Abbilds
========================================================

Es ist Docker notwendig, damit Jeedom arbeiten kann, als erstes Docker mit
Mysql, welches die Datenbank enthält und 2. welches Jeedom enthält

Starten Sie die Docker Anwendung :

![install synology 4](../images/install_synology_4.PNG)

MYSQL 
-----

Klicken Sie auf "Anmelden" :

![install synology 5](../images/install_synology_5.PNG)

Im Suchfeld geben sie "mysql" ein, wählen mysql und klicken 
auf Download :

![install synology 15](../images/install_synology_15.PNG)

Bestätigen sie dann die Version der Anwendung, es ist ratsam die
letzte Version zu übernehmen :

![install synology 14](../images/install_synology_14.PNG)

Klicken Sie dann auf das Abbild, hier können Sie den Fortschritt des Downloads
verfolgen (das kann mehr als zehn Minuten dauern) :

![install synology 16](../images/install_synology_16.PNG)

Wenn Sie fertig sind, klicken Sie auf das Abbild zum ausführen :

![install synology 17](../images/install_synology_17.PNG)

Geben sie ihr mysql einen Namen und einen lokalen Port auf Port 3306
des umgeleiteten Containers, dann weiter klicken :

![install synology 18](../images/install_synology_18.PNG)

Dann  weiter :

![install synology 19](../images/install_synology_19.PNG)

Klicken Sie auf "erweiterte Einstellungen" :

![install synology 34](../images/install_synology_34.PNG)

Dann auf „Ordner hinzufügen“ und legen Sie dort den gewünschten Ordner
auf der Synology Seite fest  (In diesem Ordner befinden sich alle Dateien der 
Datenbank) und /var/lib/mysql die Containerseite (Achtung, "nur Lesen"
ankreuzen)

![install synology 32](../images/install_synology_32.PNG)

Klicken Sie auf "Umgebung" und dann "Variable hinzufügen" und geben in
"Variable" : "MYSQL\_ROOT\_PASSWORD" und in Wert geben Sie das
entsprechende BDD-Kennwort ein (es wird später verwendet). Dann bestätigen :

![install synology 33](../images/install_synology_33.PNG)

Kreuzen sie "Diesen Container ausführen, wenn der Assistent beendet ist" an und klicken sie auf "Übernehmen".

Jeedom 
------

Klicken Sie auf "Anmelden"

![install synology 5](../images/install_synology_5.PNG)

Im Suchfeld geben Sie "jeedom" ein, wählen Sie jeedom/jeedom 
und klicken Sie auf Download :

![install synology 20](../images/install_synology_20.PNG)

Bestätigen sie dann die Version der Anwendung, es ist ratsam die letzte
Version zu übernehmen :

Klicken Sie dann auf das Bild, hier können Sie den Fortschritt des Downloads
verfolgen (kann mehr als zehn Minuten dauern) :

![install synology 21](../images/install_synology_21.PNG)

Wenn Sie fertig sind, klicken Sie auf das Abbild zum ausführen :

![install synology 22](../images/install_synology_22.PNG)

Geben Sie einen Namen für Ihre Jeedom und einen lokalen Port auf 
Port 80 (hier 9080 und einen auf 22 (hier 9022) des Containers, dann 
weiter klicken :

![install synology 23](../images/install_synology_23.PNG)

Dann  weiter :

![install synology 24](../images/install_synology_24.PNG)

Klicken Sie auf "erweiterte Einstellungen"

![install synology 25](../images/install_synology_25.PNG)

Klicken Sie "Ordner hinzufügen"

![install synology 26](../images/install_synology_26.PNG)

Wählen Sie einen Ordner auf Ihrer Synology (in diesem Fall sind es
alle jeedom-Dateien), vorsichtig "Read Only" 
deaktivieren

![install synology 27](../images/install_synology_27.PNG)

Dann gehen sie zum Pfad /var/www/html und klicken auf "Umgebung" :

![install synology 28](../images/install_synology_28.PNG)

Kreuzen Sie "Den Container mittels hohen Privilegien ausführen" an und
bestätigen Sie alles :

![install synology 29](../images/install_synology_29.PNG)

Kreuzen sie "Diesen Container ausführen, wenn der Assistent beendet ist" an und klicken sie auf "Übernehmen".

> **Paramètre de configuration avancé**
>
> Il existe 3 paramètres optionnel de configuration, ces paramètres doivent etre passé en variable d'environement
> - APACHE_PORT : permet de changer le port par défaut (80) d'écoute du serveur web
> - SSH_PORT : permet de changer le port par défaut (22) d'écoute du ssh
> - MODE_HOST : indique que le résaux est en mode host

> **IMPORTANT**
>
> Certain plugin on besoin d'avoir le broadcast du réseaux (type plugin Xioami), pour cela il faut ABSOLUMENT passer en le réseaux en mode host (possible uniquement lors de la création), changer le port d'écoute par defaut du serveur web et ssh par des ports non utilisé (type 9080 pour le serveur web et 9022 pour le ssh), et mettre la variable MODE_HOST à 1

Schritt 3 : Jeedom Konfiguration
---

Sie müssen jetzt Jeedom installieren, es ist sehr einfach, gehen Sie auf
IP\_NAS:9080

![install synology 31](../images/install_synology_31.PNG)

Füllen Sie die Felder entsprechend Ihrer Konfiguration (Docker konfigurieren,
mysql muß zuvor installiert sein) aus und bestätigen sie.

> **Wichtig**
> 
> Die IP-Adresse der DB ist die IP-Adresse der NAS, der Port ist derjenige,
> der vom Mysql-Docker umgeleitet wird, das Passwort ist jenes, das in
> Mysql-Docker festgelegt wurde. Der Benutzername ist root und der
> Datenbankname, ist wie Sie möchten (empfohlen Jeedom)

![install synology 30](../images/install_synology_30.PNG)

> **Tipp**
>
> Wenn Sie SSH Zugang haben wollen, müssen Sie den Port umleiten, den
> lokalen Port zu Port 22 des Containers,  die SSH-Anmeldeinformationen
> sind root/jeedom. Sie können das Passwort ändern, indem Sie die
> Umgebungsvariable ROOT\_PASSWORD auf den Wert das gewünschte
> Passwort setzen.

Danach können Sie der Dokumentation [Erste Schritte mit Jeedom]
(https://jeedom.github.io/documentation/premiers-pas/fr_FR/index) folgen.

Andere
======

Hier finden Sie die Dokumentation um Jeedom auf den meisten Linux Systemen zu installieren (auf der Debian Distribution geprüfte und zugelassen)

> **Wichtig**
>
> Debian 9 (Stretch) ist die offiziell unterstützte Distribution für Version 3.1.7
> von Jeedom (aber Jessie ist noch voll funktionsfähig).
> Wenn Sie Linux-Umgebungen nicht unbedingt verstehen, empfehlen wir
> Ihnen, zu einem offiziellen Image (OVF) zu wechseln oder ein Mini+ oder
> Smart (bald verfügbar) zu verwenden.

> **Wichtig**
>
> Das Installationsskript kann gefährlich sein, da davon ausgegangen wird,
> dass Ihr System leer ist. Wenn nicht, bitte lesen Sie das Skript und
> installieren Sie es von Hand.

Verbinden Sie sich in SSH mit Ihr System und tun Sie folgendes :

    wget https://raw.githubusercontent.com/jeedom/core/stable/install/install.sh
    chmod +x install.sh
    ./install.sh

Sie müssen danach nur noch IP\_MACHINE\_JEEDOM in Ihren Internet
Browser eingeben.

> **Notiz**
>
> Die standard Zugangsdaten sind admin/admin

> **Notiz**
>
> Die folgenden Argumente sind verwendbar: -w = Datei-Webserver -z =
> Abhängigkeiten Installations z-wave -m = gewünschtes mysql root Passwort

    ./install.sh -w /var/www/html -z -m Jeedom

Danach können Sie der Dokumentation [Erste Schritte mit Jeedom]
(https://jeedom.github.io/documentation/premiers-pas/fr_FR/index) folgen.
