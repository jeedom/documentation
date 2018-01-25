Bienvenue dans cette documentation de premiers pas, celle-ci va vous
aider à mettre en service votre Jeedom.

> **Tip**
>
> Ce guide n’a pas vocation à se substituer à la documentation complète
> disponible sur le site Jeedom [ici](https://jeedom.com/doc).

Inscription sur le market 
=========================

La première chose à faire est de se créer un compte sur le Market pour
pouvoir enregistrer votre Jeedom sur celui-ci, cliquez
[ici](https://market.jeedom.com) pour commencer

![premier market](../images/premier-market.png)

Cliquez sur le bouton "S’enregistrer" en haut à droite :

![premier market2](../images/premier-market2.png)

Remplissez les différents champs et validez. Vous tomberez ensuite sur
cette page :

![premier market3](../images/premier-market3.png)

Voila votre compte Market est créé, pour plus de details sur le market
cliquez
[ici](https://jeedom.github.io/core/fr_FR/market)

Ajout de votre code service pack 
================================

Si vous avez acheté une box Jeedom alors vous avez dû recevoir un mail
contenant un code pour votre service pack.

> **Important**
>
> Il est important de le renseigner car ce code vous donne accès à
> certains plugins gratuitement, ainsi qu’à des services exclusifs.

> **Important**
>
> Si vous achetez un service pack depuis le Market Jeedom vous n’avez
> rien à faire, celui-ci vous est automatiquement affecté.

Une fois le code recupéré dans le mail il vous suffit d’aller sur le
[market Jeedom](https://market.jeedom.com) et de vous identifier.

Puis allez sur votre page de profil :

![premier servicepack](../images/premier-servicepack.png)

Puis cliquez sur l’onglet "Mes Jeedoms"

![premier servicepack2](../images/premier-servicepack2.png)

Renseignez votre numéro de service pack et validez :

![premier servicepack3](../images/premier-servicepack3.png)

Voilà votre service pack est enregistré. Pour plus de details sur le
Market cliquez
[ici](https://jeedom.github.io/core/fr_FR/market)

> **Tip**
>
> Si vous avez acheté une box officielle Jeedom, le numéro de service
> pack a dû vous être envoyé par email. Si vous n’avez rien reçu, merci
> de contacter le magasin où vous avez acheté votre box.

Trouver votre Jeedom sur le réseau 
==================================

Une fois Jeedom branché électriquement et connecté à votre réseau local,
voici comment se connecter sur celui-ci.

Trouver Jeedom 
--------------

### Par le market 

Solution la plus simple (mais ne marche pas dans 100% des cas en
fonction de la configuration de votre accès internet), il faut démarrer
la box, attendre environ 10 minutes (attention si vous utilisez une
image type netinstallation, ça sera plutôt 30min) et aller
[ici](https://www.jeedom.com/market/index.php?v=d&p=find)

> **Tip**
>
> Attention, il faut être sur le même réseau que la box Jeedom pour que
> cette méthode fonctionne.

> **Important**
>
> En fonction de votre box ADSL cette fonctionalité peut ne pas marcher.
> Si c’est le cas, rien de grave, il vous suffit de vous connecter à
> votre box ADSL et de trouver l’IP de jeedom dans celle-ci. Cette étape
> ne fait rien d’autre que de vous donner l’IP locale de votre Jeedom.
> Ce n’est pas à ce moment-là que l’ajout de votre Jeedom à votre compte
> market est fait.

### Par votre box internet 

-   Allez sur l’interface d’administration de votre box internet et
    cherchez Jeedom dans vos périphériques réseaux.

-   Récupérez son IP.

-   Mettez cette IP dans votre navigateur internet. Vous devriez être
    sur l’interface de Jeedom.

Première connexion 
------------------

Quelque soit la méthode utilisée, vous arrivez ensuite sur la page de
login. Par défaut le login et le mot de passe sont "admin".

![premier jeedomfinder6](../images/premier-jeedomfinder6.png)

Lier mon Jeedom à mon compte market 
===================================

Nous allons voir ici comment lier votre Jeedom à votre compte Market.

-   Une fois connecté à votre jeedom, vous devez aller sur
    Administration → Configuration

-   Cliquez sur l’onglet **Mises à jour**

-   En dessous, cliquez sur l’onglet **Market**

-   Cochez la case **activer**

-   Remplissez l’adresse : `https://www.jeedom.com/market`

-   Renseignez également le champ "Nom d’utilisateur" et "Mot de passe"
    en fonction de vos identifants (identifiants du Market et non pas
    de Jeedom)

-   Vous pouvez tester pour vérifier que la connexion
    s’effectue correctement.

-   N’oubliez pas de sauvegarder !

Pour plus de détails sur la page de configuration cliquez
[ici](https://jeedom.github.io/core/fr_FR/administration)
.

Obtenir mon URL d’accès direct 
==============================

Si vous avez un Service Pack, Jeedom vous met à disposition une URL
d’accès direct à votre Jeedom sans que vous ayez à ouvrir les ports sur
votre box ou autre.

Pour la configurer il vous suffit d’aller dans
Général → Administration → Configuration

Puis d’aller sur la partie "Configuration réseaux"

![premier dns2](../images/premier-dns2.png)

Une fois ici, il vous suffit d’activer "Utiliser les DNS Jeedom" puis
sur la ligne "Gestion" de faire "Rédemarrer" et votre URL apparaitra au
niveau de statut HTTP, vous pouvez bien sûr la personnaliser à partir de
la page profil du Market

> **Important**
>
> Si vous venez de lier votre Jeedom à votre compte Market il faut
> attendre 24 à 48h avant de pouvoir utiliser le service DNS

Changer le mot de passe par défaut de Jeedom 
============================================

Une des étapes importantes est de changer le mot de passe par défaut de
votre compte Jeedom, pour cela cliquez sur Administration → Utilisateurs
(en haut à droite) :

Une fois dessus vous avez juste à choisir la ligne avec l’utilisateur
**admin** et à cliquer sur **changer le mot de passe** :

![premier changeuser2](../images/premier-changeuser2.png)

Une fenêtre va vous demander le mot de passe. Attention à bien le
retenir, sinon vous ne pourrez plus accéder à votre Jeedom :

![premier changeuser3](../images/premier-changeuser3.png)

Voilà, vous avez changé le mot de passe du compte admin, pour plus
d’information sur cette page cliquez
[ici](https://jeedom.github.io/core/fr_FR/user).

Créer mon premier objet 
=======================

Vous allez créer votre premier objet, mais d’abord il faut savoir ce
qu’est un objet.

Dans Jeedom, cela peut être tout et n’importe quoi, mais il est
recommandé de le faire en fonction de vos pièces.

> **Tip**
>
> Il est possible de définir des relations entre les objets, exemple :
> le salon appartient à l’objet rez-de-chaussée qui appartient lui-même
> à l’objet maison.

Pour créer un objet, rien de plus simple :

-   Allez sur Outils → Objets

-   Cliquez sur le bouton ajouter :

![premier objet2](../images/premier-objet2.png)

-   Jeedom va vous demander le nom de celui-ci :

![premier objet3](../images/premier-objet3.png)

-   Validez. Voilà votre premier objet créé :

![premier objet4](../images/premier-objet4.png)

Pour plus d’informations sur cette partie cliquez
[ici](https://jeedom.github.io/core/fr_FR/object)

Installer mon premier plugin 
============================

Un plugin permet d’ajouter des fonctionnalités à Jeedom. Il en existe
des centaines. Beaucoup sont gratuits, d’autres peuvent être payants.
Pour accéder à la page des plugins aller sur Plugins → Gestion des
plugins.

Il vous suffit ensuite de cliquer sur Market :

![premier plugin2](../images/premier-plugin2.png)

Vous allez ensuite avoir la liste de tous les plugins qu’il est possible
d’installer.

> **Important**
>
> Attention, certains sont officiels et d’autres non. En cas de souci
> avec un plugin non officiel, l’équipe Jeedom ne pourra être tenue pour
> responsable.

![premier plugin3](../images/premier-plugin3.png)

En cliquant sur un plugin vous obtenez sa fiche :

![premier plugin4](../images/premier-plugin4.png)

Vous retrouvez alors : \* des boutons pour installer le plugin : la
version stable est fortement recommandée, \* un bouton pour supprimer le
plugin, \* une brève description, \* un lien vers la documentation du
plugin, \* un lien vers le changelog (les dernières modifications
apportées), \* la compatibilité avec les différentes plateformes, \* les
avis des utilisateurs, \* la façon d’utiliser le plugin, \* des
informations complémentaires comme l’auteur, le lien vers la discussion
du forum concernant ce plugin, la date de dernière mise à jour, etc.

Pour plus d’informations sur les plugins cliquez
[ici](https://jeedom.github.io/core/fr_FR/plugin)
.

Support 
=======

Jeedom aborde des champs très vastes et évoluant de jour en jour.
Cependant, de nombreux moyens sont mis à votre disposition pour trouver
de l’aide et poser vos questions.

La documentation de Jeedom 
--------------------------

Vous trouverez une documentation complète [ici](https://jeedom.github.io/documentation/) :

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
