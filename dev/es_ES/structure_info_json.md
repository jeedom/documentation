**Documentation fichier info.json**

Intégré depuis la version 3.0 de Jeedom, le fichier **info.json** est obligatoire pour le bon fonctionnement des plugins, et leur bon déploiement sur le Market Jeedom.

Le fichier info.json est enregistré dans le dossier /plugin_info/ de votre plugin.

Liste des variables du fichier info.json

Les champs marqués d’un * sont des champs obligatoires.

Campos                   | Valores                                                                                                                   |
------------------------ | ------------------------------------------------------------------------------------------------------------------------- |
id *                     | Identifiant unique du plugin sur le Market Jeedom. Doit debuter par une lettre. Sans accents.                             |
nombre *                   | Nombre del plugin.                                                                                                            |
descripción *            | Description du plugin, tel qu'il s’affichera sur le Market Jeedom Minimum 80 caractères. (`<br/>` pour le retour à la ligne.)                                  |                                                                                     |
uso                    | Informations complémentaires à la documentation sur l’usage du plugin.                                                    |
licencia *                | Tipo de licencia.                                                                                                          |
autor *                 | Nom de l’auteur du plugin, tel qu’il sera affiché une fois le plugin installé, dans les informations de celui-ci.         |
requiere *                | Versión mínima de Jeedom.                                                                                                |
categoría *               | Catégorie de classement du plugin sur le Market jeedom. **Respecter impérativement la nomenclature du tableau ci-dessous** |
display                  | si le plugin utilise un panel dédié sur le desktop, il s’agit du nom du fichier principal de ce panel.                    |
mobile                   | Si le plugin utilise un panel dédié sur la webApp Jeedom, il s’agit du nom du fichier principal de ce panel.   |
changelog *              | Lien Html vers le Changelog.                                                                                              |
documentation *          | Lien Html vers la documentation du plugin.                                                                                |
link -> video               | Lien Html vers une vidéo de présentation.                                                                                 |
link -> forum               | Lien Html vers le forum sur le sujet officiel du plugin.                                                                  |
languages                | Liste des langues disponibles pour le plugin : french, english, german, italian, spanish , russian, indonesian            |
compatibility            | Compatibilité du plugin : miniplus, smart, docker, rpi, diy, mobileapp.                                                   |
hasDependency            | «true» si le plugin doit installer des dépendances, sinon «false» ou absent.                                              |
hasOwnDeamon             | «true» si le plugin doit exécuter des deamons, sinon «false» ou absent.                                                   |
maxDependancyInstallTime | Temps maximum imparti pour l’installation des dépendances, exprimé en minutes.                                            |
issue                    | URL vers le bugtracker si externe (si non remplis alors vous receverez un mail)

**Exemple** :

[Fichier plugin-template/plugin_info/info.json](https://github.com/jeedom/plugin-template/blob/master/plugin_info/info.json)




**NOMENCLATURE CATEGORIES**

Market Jeedom         | info.json               |
--------------------- | ----------------------- |
Communication         | communication           |
Confort               | wellness                |
Energie               | energy                  |
Météo                 | weather                 |
Monitoring            | monitoring              |
Multimédia            | multimedia              |
Nature                | nature                  |
Objets Connectés      | devicecommunication     |
Organisation          | organization            |
Passerelle domotique  | home automation protocol|
Programmation         | programming             |
Protocole domotique   | automation protocol     |
Santé                 | health                  |
Sécurité              | security                |
Automatisme           | automatisation          |











  









