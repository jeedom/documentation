descripción
===========

![dev.plugin simple.01](../images/dev.plugin-simple.01.jpg)

Esta documentación le ayudará a entender el sistema de
integrada jeedom documentación: AsciiDoc

objetivos:

-   la operación actual de la AsciiDoc

-   presentar la estructura de los diversos documentos requeridos

-   proporcionar un mínimo de normas para armonizar todo
    documento Jeedom

Cómo el AsciiDoc
============================

Un documento

generalidad
----------

Asciidoc es un lenguaje de marcado ligero. También es el nombre de la
suite de software que puede convertir los archivos "fuente"
en los documentos publicables.

-   El programa de conversión transforma el asciidoc
    documento de origen como XHTML, DocBook o HTML.

-   El programa proporciona a2x otros formatos como PDF,
    TeX, páginas de manual Unix o Epub.

sitio web oficial: <http://www.methods.co.nz/asciidoc/>

AsciiDoc y Jeedom
-----------------

La documentation Jeedom s’appuie sur l’AsciiDoc et sur l’adjonction du
bootstrap de Laurent Laville :
<http://laurent-laville.org/asciidoc/bootstrap/>

Esta característica le permite añadir funciones adicionales a
funciones presentes en el AsciiDoc. Pero también requiere
compilación especial para tener visibilidad en el renderizado final.
\
Detallamos en este artículo, cómo generar sus páginas locales
para validar el formato.

algunos de sintaxis
-----------------

Ce lien est un pense-bête des syntaxes asciidoc :
<http://powerman.name/doc/asciidoc>

Estructura archivos AsciiDoc
===============================

Varios archivos AsciiDoc (extensión de los archivos) permiten
la estructura de su documentación.

Al menos debe tener los siguientes archivos AsciiDoc:

-   index.asciidoc

-   description.asciidoc

-   installation.asciidoc

-   configuration.asciidoc

index.asciidoc
--------------

El archivo index.asciidoc es, como su nombre indica, la raíz de
la documentación.

Este archivo sólo debe contener punteros a todos los demás
presentar y no directamente el contenido.

Ejemplo index.asciidoc ** ** archivo:

    : ImagesDir: ../images
    : Iconos:

    == Greenmomit
    Image: greenmomit_icon.png []

    {} + Nbsp

    === Descripción
    Directiva sin resolver en doc.plugin.asciidoc - incluir :: description.asciidoc []

    '' '
    === Configuración
    Directiva sin resolver en doc.plugin.asciidoc - incluir :: configuration.asciidoc []

    '' '
    === FAQ
    Directiva sin resolver en doc.plugin.asciidoc - incluir :: faq.asciidoc []

Los archivos incluidos son asciidoc

-   description.asciidoc

-   installation.asciidoc

-   configuration.asciidoc

-   faq.asciidoc

Estos archivos se corresponden con la base de la estructura de la documentación
Jeedom. Es posible incluir otros archivos AsciiDoc.

description.asciidoc
--------------------

El description.asciidoc ** ** Archivo le permite presentar su
plugin.

### simple plugin

Si el plugin es bastante simple, en el brazo con una
equipo especial para presentar, puede limitarse a
Descripción de la finalidad del plugin.

Ejemplo de archivos ** ** description.asciidoc simple:

    : ImagesDir: ../images
    : Iconos:

    ==== general

    Este objetivo plug-in para BLABLABLA.

    Una pequeña pantalla de mostrar el widget plugin:

    Image: nomduplugin_widget.png []

### Plugin complejo

Si el plugin:

-   depende de equipos de terceros

-   requiere algunos requisitos previos

-   requiere una explicación del principio de funcionamiento.

Es recomendable crear varios subcapítulos.

-   ** ** Descipción general \

-   ** ** Descripción de Marketing :)

-   **Prerrequisitos**

-   **Principio de funcionamiento**

Ejemplo ** ** archivo complejo description.asciidoc:

    : ImagesDir: ../images
    : Iconos:

    ==== general

    Este plugin tiene como objetivo BLABLABLA.

    Una pequeña pantalla de mostrar el widget plugin:

    Image: nomduplugin_widget.png []

    // Si el plugin depende de una solución de hardware o software En tercer lugar, presentar el
    ==== presentación del equipo o aplicación XXX
    // añadir una imagen de dispositivo
    Image: nomduplugin_equipementXXX.png []

    Describir el equipo, añadir enlaces a los sitios consructeur o de referencia.
    Describir el nivel de integración de los equipos en Jeedom (completa, incompleta y qué características no se aplican)

    // Si es necesario presentar el principio de funcionamiento:
    ==== Principio de funcionamiento
    Describir la arquitectura y la filosofía del plugin.

    ==== Requisitos previos
    Enumerar y describir los requisitos previos para instalar y utilizar el plugin
    * Por ejemplo, una solicitud de clave de API

installation.asciidoc
---------------------

Si el plugin no tiene las especificaciones de la instalación, añadir
sólo un puntero al procedimiento de instalación de un plugin se describe
en la documentación de Jeedom núcleo:

[** La instalación de una
Plugin **] (https://www.jeedom.fr/doc/documentation/core/fr_FR/doc-core-plugin.html)
<SPAN CLASS = "keycombo"> Ctrl + clic del ratón </ span> (para abrir una
nueva pestaña)

configuration.asciidoc
----------------------

normas
======

Las imágenes
----------

Para completar
