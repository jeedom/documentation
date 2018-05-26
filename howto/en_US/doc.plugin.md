Description
===========

![dev.plugin simple.01](../images/dev.plugin-simple.01.jpg)

This documentation will help you to understand the system of
integrated documentation in jeedom: AsciiDoc

Objectives:

-   present the functioning of AsciiDoc

-   present the structure of the different necessary documents

-   provide a minimum of rules to harmonize all
    Jeedom documents

How the AsciiDoc works
============================

To document

Generality
----------

Asciidoc is a lightweight markup language. This is also the name of the
software suite that transforms "source text" files
in publishable documents.

-   The asciidoc conversion program makes it possible to transform the
    source document in XHTML, DocBook or HTML format.

-   The a2x program allows you to obtain other formats such as PDF,
    TeX, Unix manpages or Epub.

Official website: <http://www.methods.co.nz/asciidoc/>

AsciiDoc & Jeedom
-----------------

La documentation Jeedom s’appuie sur l’AsciiDoc et sur l’adjonction du
bootstrap de Laurent Laville :
<http://laurent-laville.org/asciidoc/bootstrap/>

This feature allows additional functions to be added to
functions present in AsciiDoc. But also requires
special compilation to have visibility on the final rendering.
\
We will detail in this document, how to generate your pages locally
to validate the formatting.

A little syntax
-----------------

Ce lien est un pense-bête des syntaxes asciidoc :
<http://powerman.name/doc/asciidoc>

AsciiDoc file structure
===============================

Several asciidoc files (extension of your files) allow to
structure your documentation.

You must have at least the following asciidoc files:

-   index.asciidoc

-   description.asciidoc

-   installation.asciidoc

-   configuration.asciidoc

index.asciidoc
--------------

The index.asciidoc file is, as its name suggests, the root of
your documentation.

This file should contain only pointers to all the others
files and not directly content.

Sample file **index.asciidoc**:

    : imagesdir: ../images
    : Icons:

    == Greenmomit
    Image: greenmomit_icon.png []

    {nbsp} +

    === Description
    Unresolved directive in doc.plugin.asciidoc - include :: description.asciidoc []

    '' '
    === Configuration
    Unresolved directive in doc.plugin.asciidoc - include :: configuration.asciidoc []

    '' '
    === FAQ
    Unresolved directive in doc.plugin.asciidoc - include :: faq.asciidoc []

Included asciidoc files are

-   description.asciidoc

-   installation.asciidoc

-   configuration.asciidoc

-   faq.asciidoc

These files correspond to the basic structure of the documentation
Jeedom. It is possible to include other AsciiDoc files.

description.asciidoc
--------------------

The **description.asciidoc** file allows you to present your
plugin.

### Simple plugin

If your plugin is relatively simple, does not have a dependency with a
particular equipment to present, you can limit yourself to a
description of the plugin's purpose.

Sample file **description.asciidoc** simple:

    : imagesdir: ../images
    : Icons:

    ==== General

    This plugin with BLABLABLA lens.

    A small screenshot of the rendering of the plugin widget:

    Image: nomduplugin_widget.png []

### Complex plugin

If your plugin is:

-   dependent on third-party equipment

-   requires some prerequisites

-   requires an explanation of the operating principle.

It is advisable to create several subchapters.

-   **General description** \

-   **Marketing description:)**

-   **Prerequisites**

-   **Operating principle**

Sample file **description.asciidoc** complex:

    : imagesdir: ../images
    : Icons:

    ==== General

    This plugin aims to BLABLABLA.

    A small screenshot of the rendering of the plugin widget:

    Image: nomduplugin_widget.png []

    // If the plugin is dependent on a third-party device or software solution, submit it
    ==== Presentation of the equipment or application XXX
    // add an image of the equipment
    Image: nomduplugin_equipementXXX.png []

    Describe the equipment, add links to the manufacturer or reference sites.
    Describe the level of integration of the equipment in Jeedom (complete, incomplete and what features are not implemented)

    // If it is necessary to present the principle of operation:
    ==== Principle of operation
    Describe the architecture and philosophy of the plugin.

    ==== Prerequisites
    List and describe the prerequisites for installing and using the plugin
    * ex: an API key to request

installation.asciidoc
---------------------

If your plugin has no specification on its installation, add
just a pointer to the procedure for installing a plugin described
in the Jeedom Core documentation:

[** Installation of a
plugin **] (https://www.jeedom.fr/doc/documentation/core/fr_FR/doc-core-plugin.html)
<span class = "keycombo"> Ctrl + mouse click </ span> (to open in a
new tab)

configuration.asciidoc
----------------------

Rules
======

Images
----------

To complete
