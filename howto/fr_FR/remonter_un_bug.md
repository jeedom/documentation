# Comment remonter un bug ?

Il existe dans Jeedom plusieurs manières de remonter un souci : 

- remonter le souci sur la [communauté](https://community.jeedom.com), c'est en général la que vous aurez la réponse la plus rapide
- remonter un souci à l'équipe Jeedom : 
-- **Demande de support** (nécessite un service pack power ou plus ou bien que le souci soit sur un plugin/service payant), cette demande est **privée** et vous mettra directement en relation avec l'équipe support de Jeedom qui analyse votre cas en particulier
-- **Rapport de bug**, dans ce cas la demande est **publique** et sera postée sur la communauté
-- **Demande d'amélioration**, dans ce cas la demande est **publique** et sera postée sur la communauté

>**NOTE**
>
>Dans le cas d'une demande de support sur un plugin tierce un mail est envoyé au développeur du plugin

>**IMPORTANT**
>
>Le support étant réalisé exclusivement par mail, pensez à surveiller vos spams. Le plus souvent, le support répond rapidement (délai avant réponse en moyenne de moins 72h, attention en fonction du problème cela peut etre beaucoup plus long)

# Quelles informations envoyer pour avoir une solution le plus rapidement possible

Quelque soit la méthode utilisée pour remonter le problème rencontré, il est très important de donner le plus d'informations possibles. En effet, à notre plus grand regret, 80% des demandes ont pour première réponse type : "merci de nous donner davantage d'informations sur le problème rencontré afin que nous puissions vous aider. [...]". Et oui...malgré notre bonne volonté, on ne voit pas votre écran, on a aucun historique de ce que vous avez fait comme manipulation, et on utilise parfois un vocabulaire différent pour parler des mêmes choses...

Mais comme on a vraiment envie de vous aider, voila quelques indices pour nous donner plusieurs informations de valeures : 

- Votre souci concerne un problème d'affichage graphique (widget, page, champs texte...), même si ça parait evident pour vous lors de l'explication, mettez une capture d'ecran (en effet, il est possible de copier l'image directement sur le community !), ça prend 30s pour vous, ça fera gagner plusieurs dizaines de minutes à la personne qui essaye de vous aider, et vous obtiendrez une réponse pertinente, plus rapidement.
- Vous avez une erreur "500" : dans ce cas, mettez directement le fichier http.error (vous pouvez le trouver rapidement dans Analyse -> Logs), sans ça, il nous est impossible de savoir d'où vient le problème (encore une fois, aucun(e) voyant(e) chez jeedom ou parmi les développeurs tierce pour l'instant !^^)
- Vous avez une erreur javascript (panneau warning en haut à droite) ou quand vous faites F12 puis console une ligne rouge. Dans ce cas, commencer par nous donner le message d'erreur complet en question. Malheureusement, dans la majorité des cas ce message d'erreur étant parfois un peu vague, ne permet pas à lui seul d'identifier le problème rencontré. Il faut donc faire F12 (dans le navigateur, sur l'onglet Jeedom où vous rencontrez la difficulté). Cliquer ensuite sur "console", puis essayez de reproduire le problème rencontré (commencer par rafraichir la page, et si nécessaire, refaire les mêmes actions). Vous allez normalement avoir à nouveau le message d'erreur mais cette fois il faudra cliquer en bout de ligne (ça peut être soit comme sur la capture ci-dessous soit sous la forme VMXXX.js) : 

![remonter_un_bug001](../images/remonter_un_bug001.png)

Puis faire une capture de ce qui va s'afficher, en particulier la ligne en rouge : 

![remonter_un_bug002](../images/remonter_un_bug002.png)

Voila si vous suivez bien tout ça vous devriez avoir des réponses a votre problème bien plus rapides et bien plus justes et peut-être même permettre à la personne qui vous a aider d'aider une autre personne plus rapidement.

- Vous avez un souci avec un démon ? il faut absolument mettre la log en debug de celui-ci sinon aucune aide ne sera possible. Vous pouvez aussi ajouter la log d'installation des dépendances (souvent en \_update)
- Vous avez un problème d'installation de dépendances ? il faut absolument mettre la log de leur installation (souvent en \_update)
