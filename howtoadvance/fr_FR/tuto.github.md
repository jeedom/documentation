Ce tutorial vous présente :

-   Création d’un compte GitHub

-   Fork de Jeedom Core ou de la documentation

-   Modification d’un ou plusieurs fichiers

-   Soumettre une modification

-   La mise à jour de votre fork

Pour vous permettre de contribuer à Jeedom, il vous sera nécessaire de
proposer les modifications (PR : Pull Request).

Création d’un compte GitHub 
===========================

Nous allons aborder dans ce tuto la manière de créer un compte GitHub,
afin de pouvoir remonter des bugs (issue dans le langage GitHub), voire
même proposer des corrections (Pull Request ou PR en langage github)
pour l’ensemble du projet Jeedom, incluant ses plugins gratuits ou la
documentation, ou encore tout autre projet github auxquels vous
souhaiteriez participer.

Se rendre sur <https://github.com> et cliquer sur le bouton sign up.
Vous devriez donc être sur une page ressemblant à celle ci-dessous et
devez donc renseigner un pseudo, un email et un mot de passe et ensuite
cliquer sur **Create an account**

![tuto.github1](../images/tuto.github1.png)

Vous arrivez donc sur une 2eme page comme ci-dessous et vous ne changez
rien, vous cliquez sur **Continue**

![tuto.github2](../images/tuto.github2.png)

Vous voilà inscrit et sur la page de configuration des options de votre
compte. Je vous conseille de vérifier l’adresse email afin de pouvoir
récupérer votre compte en cas d’oubli de mot de passe par exemple mais
aussi afin de pouvoir soumettre des modifications. Je vous laisse
également découvrir les autres options si vous êtes curieux.

![tuto.github3](../images/tuto.github3.png)

Fork de Jeedom Core ou de la documentation 
==========================================

**Fork - Pourquoi - Comment**

Fork c’est copier un projet dans votre espace github, afin de pouvoir
modifier les fichiers de code, de documentation pour ensuite soumettre
un Pull Request au projet d’origine, qui sera alors étudié par le ou les
développeur(s) du dit projet

Maintenant que vous avez un compte Github et que vous êtes identifiez
avec votre adresse email vérifiée, si vous vous rendez ici
<https://github.com/jeedom/core> vous êtes sur le projet jeedom, à
droite il y a un bouton fork vous permettant de le copier dans votre
espace github.

![tuto.github4](../images/tuto.github4.png)

Modification d’un ou plusieurs fichiers 
---------------------------------------

Dans mon cas, je souhaite donc pousser une modification sur le fichier
*history.class.php* Ce fichier se situe dans le core de jeedom et plus
précisément ici : core/class/

1.  On est donc sur mon dépôt (TaGGoU91 / core) qui est indiqué comme
    étant un fork de Jeedom/core

2.  On se rend donc dans /core/class (le premier core est en gras, c’est
    le dépôt ou je suis (core, cf Petit 1)

3.  On a donc notre fichier *history.class.php* - On clique sur le
    fichier

![tuto.github5](../images/tuto.github5.png)

1.  On est donc bien dans notre fichier

2.  On clique sur le crayon pour entrer en modification

![tuto.github6](../images/tuto.github6.png)

Afin de faire une recherche dans le fichier, se positionner dans le bloc
texte du fichier qu’on vient d’ouvrir en mode édition avec le crayon et
on fait un "Ctrl + F" pour activer la recherche. Vous coller ou
spécifier le texte que vous cherchez (un élément significatif et une
ligne seulement, pas tout un bloc d’un coup). Valider avec "Entrée" pour
lancer la recherche.

> **Tip**
>
> Si vous ne cliquez pas dans la fenêtre contenant le texte ou le code
> que vous cherchez, c’est la recherche du navigateur qui va s’ouvrir et
> dans mon cas, sur Google chrome, ça ne sait pas faire la recherche
> dans le code ou la documentation directement.

1.  Le champ de recherche, oui c’est assez mince comme information, la
    ligne copiée est bien plus grande ;).

![tuto.github7](../images/tuto.github7.png)

1.  En jaune, c’est le résultat de la recherche

2.  En bleu, ce que je viens de sélectionner et que je souhaite
    modifier/remplacer par mon code. Ma modification

![tuto.github14](../images/tuto.github14.png)

Je supprime donc le bloc puis je le remplace.

Ensuite, sur la partie basse on trouve ceci : 1. On indique un titre
explicite si possible 2. On entre une description un peu plus précise
(dans mon cas, ça serait trop long, le lien vers le forum sera plus
parlant) 3. On s’assure que ça soit bien coché comme ceci 4. On commit =
Soumettre la modification

![tuto.github8](../images/tuto.github8.png)

Soumettre une modification 
--------------------------

Le **commit** fait au-dessus ne concerne que le fork du projet dans
votre espace GitHub. Pour soumettre au projet d’origine les changements,
il faut effecter un PR (Pull Request)

1.  On clique sur l’onglet Pull Request

2.  New Pull Request (PR pour les intimes)

![tuto.github9](../images/tuto.github9.png)

1.  Le PR va lancer une comparaison entre la base de jeedom avec votre
    repository (le fork).

2.  Celà indique les modifications (le premier c’est parce que je me
    suis remis à jour depuis jeedom, le second concernant justement le
    changement de la fonction lastchangestateduration, parfait !!!)

3.  L’ancien code

4.  Le nouveau code

5.  On crée le Pull Request (PR)

![tuto.github10](../images/tuto.github10.png)

Il est important de bien expiiquer les changements soumis pour que le(s)
développeur(s) du projet d’origine comprennent et puissent valider votre
demande.

1.  On clique sur les trois petits points

2.  On recopie les informations que l’on a saisi précédemment

3.  Idem, on recopie (d’où l’utilisation des …​ à l’étape 1 pour
    s’éviter une réécriture)

4.  On clique sur Create Pull Request

![tuto.github11](../images/tuto.github11.png)

**C’est terminé.** Il faut attendre que votre PR soit validé.

NB: Il n’y a que les utilisateurs ayant un droit de push sur Jeedom qui
peuvent valider le PR.

Pour vous assurer que votre modification est bien dans la liste, vous
pouvez cliquer sur Pull Requests

![tuto.github12](../images/tuto.github12.png)

On obtient la liste des PR en attentes de validation. On voit bien le
nôtre

![tuto.github13](../images/tuto.github13.png)

La mise à jour de votre fork 
============================

A compléter
