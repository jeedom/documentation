Welcome to this documentation of first steps, this one will you
help put your Jeedom into operation.

> **Tip**
>
> This guide is not meant to replace the complete documentation
> available on the Jeedom site [here] (https://jeedom.fr/doc).

Registration on the market
=========================

The first thing to do is to create an account on the Market for
to be able to record your Jeedom on this one, click
[here] (https://market.jeedom.fr) to get started

![premier market](../images/premier-market.png)

Click on the "Register" button at the top right:

![premier market2](../images/premier-market2.png)

Fill in the different fields and validate. You will then fall on
this page :

![premier market3](../images/premier-market3.png)

Here is your Market account is created, for more details on the market
click
[Here] (https://www.jeedom.fr/doc/documentation/core/fr_FR/doc-core-market.html)

Adding your service pack code
================================

If you bought a Jeedom box then you should have received an email
containing a code for your service pack.

> **Important**
>
> It is important to inform it because this code gives you access to
> some plugins for free, as well as exclusive services.

> **Important**
>
> If you buy a service pack from Market Jeedom you do not have
> nothing to do, it is automatically assigned to you.

Once the code recovered in the mail you just have to go on the
[market Jeedom] (https://market.jeedom.fr) and to identify you.

Then go to your profile page:

![premier servicepack](../images/premier-servicepack.png)

Then click on the tab "My Jeedoms"

![premier servicepack2](../images/premier-servicepack2.png)

Fill in your service pack number and confirm:

![premier servicepack3](../images/premier-servicepack3.png)

Here is your service pack is saved. For more details on the
Market click
[Here] (https://github.com/jeedom/core/blob/stable/doc/fr_FR/market.asciidoc)

> **Tip**
>
> If you bought an official Jeedom box, the service number
> pack must have been sent to you by email. If you have not received anything, thank you
> to contact the store where you bought your box.

Find your Jeedom on the network
==================================

Once Jeedom electrically connected and connected to your local network,
here is how to connect to this one.

Find Jeedom
--------------

### By the market

The simplest solution (but does not work in 100% of cases in
depending on the configuration of your internet access), you have to start
the box, wait about 10 minutes (be careful if you use a
image type netinstallation, it will be rather 30min) and go
[Here] (https://www.jeedom.com/market/index.php?v=d&p=find)

> **Tip**
>
> Be careful, you have to be on the same network as the Jeedom box for
> this method works.

> **Important**
>
> Depending on your ADSL box, this feature may not work.
> If this is the case, nothing serious, you just have to connect to
> your ADSL box and find the ip of jeedom in this one. This step
> does nothing more than give you the local IP of your Jeedom.
> It's not at this point that adding your Jeedom to your account
> market is done.

### By your internet box

-   Go to the administration interface of your internet box and
    look for Jeedom in your network devices.

-   Get his IP.

-   Put this IP in your internet browser. You should be
    on the Jeedom interface.

First connection
------------------

Whichever method you use, you then come to the page of
login. By default the login and password are "admin".

![premier jeedomfinder6](../images/premier-jeedomfinder6.png)

Link my Jeedom to my account market
===================================

We will see here how to link your Jeedom to your Market account.

-   Once connected to your jeedom, you must go on
    Administration → Configuration

-   Click on the **Updates** tab

-   Below, click the **Market** tab

-   Check the box **activate**

-   Fill in the address: `https: // www.jeedom.com / market`

-   Also fill in the field "Username" and "Password"
    according to your identifiers (market identifiers and not
    from Jeedom)

-   You can test to verify that the connection
    is done correctly.

-   Do not forget to save!

For more details on the configuration page click
[Here] (https://github.com/jeedom/core/blob/stable/doc/fr_FR/administration.asciidoc)
.

Get my direct access URL
==============================

If you have a service pack, Jeedom provides you with a URL
direct access to your Jeedom without you having to open ports on
your box or other.

To configure it, just go to
General Administration → Configuration →

Then go to the "Network Configuration" section

![premier dns2](../images/premier-dns2.png)

Once here, just activate "Use DNS Jeedom" then
on the line "Management" to do "Restart" and your URL will appear at
HTTP status level, you can of course customize it from
the Market profile page

> **Important**
>
> If you have just linked your Jeedom to your Market account you must
> wait 24 to 48 hours before you can use the DNS service

Change Jeedom's default password
============================================

One of the important steps is to change the default password of
your Jeedom account, click on Administration → Users
(top right) :

Once on you just have to choose the line with the user
**admin** and click **change password**:

![premier changeuser2](../images/premier-changeuser2.png)

A window will ask you for the password. Be careful
remember, otherwise you will not be able to access your Jeedom:

![premier changeuser3](../images/premier-changeuser3.png)

That's it, you changed the password of the admin account, for more
information on this page click
[Here] (https://github.com/jeedom/core/blob/stable/doc/fr_FR/user.asciidoc).

Create my first object
=======================

You will create your first object, but first you have to know what
what is an object.

In Jeedom, it can be anything and everything, but it is
recommended to do it according to your parts.

> **Tip**
>
> It is possible to define relations between the objects, example:
> the living room belongs to the ground floor object which belongs to itself
> to the house object.

To create an object, nothing is easier:

-   Go to Tools → Objects

-   Click the add button:

![premier objet2](../images/premier-objet2.png)

-   Jeedom will ask you the name of this one:

![premier objet3](../images/premier-objet3.png)

-   Confirm. This is your first created object:

![premier objet4](../images/premier-objet4.png)

For more information on this part click
[Here] (https://github.com/jeedom/core/blob/stable/doc/fr_FR/object.asciidoc)

Install my first plugin
============================

A plugin allows adding features to Jeedom. There are
hundreds. Many are free, others may be paying.
To access the plugins page go to Plugins → Manage
plugins.

Then click on Market:

![premier plugin2](../images/premier-plugin2.png)

You will then have the list of all the plugins that it is possible
install.

> **Important**
>
> Warning, some are official and others are not. In case of concern
> with an unofficial plugin, the Jeedom team can not be held for
> responsible.

![premier plugin3](../images/premier-plugin3.png)

By clicking on a plugin you get the form:

![premier plugin4](../images/premier-plugin4.png)

Vous retrouvez alors : 

- des boutons pour installer le plugin : la version stable est fortement recommandée, 
- un bouton pour supprimer le plugin, 
- une brève description, 
- un lien vers la documentation du plugin, 
- un lien vers le changelog (les dernières modifications apportées), 
- la compatibilité avec les différentes plateformes, 
- les avis des utilisateurs, 
- la façon d’utiliser le plugin, 
- des informations complémentaires comme l’auteur, le lien vers la discussion du forum concernant ce plugin, la date de dernière mise à jour, etc.

Pour plus d’informations sur les plugins cliquez [ici](https://jeedom.github.io/core/fr_FR/plugin).

Support 
=======

Jeedom aborde des champs très vastes et évoluant de jour en jour.
Cependant, de nombreux moyens sont mis à votre disposition pour trouver
de l’aide et poser vos questions.

La documentation de Jeedom 
--------------------------

Vous trouverez une documentation complète [ici](https://jeedom.fr/doc) :

Celle-ci se compose de plusieurs catégories :

-   Core : une partie pour le "coeur" de Jeedom,

-   Premiers-pas : Une partie (où vous êtes actuellement) pour les
    premiers éléments à connaître,

-   Installation : Tout ce qui concerne l’installation de Jeedom,

-   Howto : Des tutoriels pour progresser dans divers domaines,

-   Plugins : Les documentations des différents plugins officiels de
    Jeedom,

-   les autres : diverses pages sur les différents protocoles utilisés
    dans Jeedom, la présentation de Jeedom, des listes de
    compatibilité, etc.

Vous trouverez également en dessous la liste des documentations pour les
plugins tiers.

N’hésitez pas à utiliser la fonction **rechercher** en haut à droite de
la page pour trouver les pages en fonction d’un mot précis.

Le forum 
--------

Vous le trouverez [ici](https://jeedom.com/forum) .

Le forum est très actif et contient énormément d’informations. Si vous
avez une question, n’hésitez pas à la poser. Vous aurez une réponse en
moins d’une heure (en moyenne). Attention cependant, le forum est
maintenu par la communauté Jeedom, composée de bénévoles, et non par la
société Jeedom.

![premier support3](../images/premier-support3.png)

Les demandes de support (ou tickets) 
------------------------------------

> **Important**
>
> Attention, toute demande de support nécessite obligatoirement d’avoir
> un compte sur le Market.

Si vous n’avez pas trouvé de solution à votre problème, en dernier
recours, vous pouvez faire une demande de support à l’équipe Jeedom.
Cette demande passe par un ticket. Il est possible d’en ouvrir un de
plusieurs façons :

-   Directement à partir de Jeedom (méthode conseillée) : où que vous
    soyez dans Jeedom, il y a un point d’exclamation en haut à droite
    qui permet de faire une demande de support :

![premier support4](../images/premier-support4.png)

-   Si pour une raison ou pour une autre vous n’avez pas accès à votre
    Jeedom, vous pouvez toujours ouvrir un ticket à partir du Market :

    -   soit avec le point d’exclamation en haut à droite,

    -   soit en allant sur votre profil (cliquez ensuite sur le bouton
        "Ouvrir une demande de support").

![premier support5](../images/premier-support5.png)

Toute la suite des échanges se fera par mail.

> **Tip**
>
> Si, lors de l’ouverture d’un ticket, vous obtenez une erreur indiquant
> que vous avez atteint votre quota, c’est que vous êtes limités à un
> certain nombre de demandes de support par mois, en fonction de votre
> service pack.

Les différents services packs sont : \* Community (gratuit) : 2
tickets/mois (sur plugins payants uniquement) \* Power : 10 tickets/mois
\* Pro : 100 tickets/mois

Vous pouvez retrouver le détail des services packs
[ici](https://www.jeedom.com/site/fr/soft.html#obtenir)
