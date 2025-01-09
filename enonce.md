# Sujet : Plateforme de Publication de Posts et Commentaires
## Objectif :
### Développer une application web en React permettant aux utilisateurs de publier des posts et de commenter ceux des autres. L'application devra intégrer React Router pour la navigation entre différentes pages et Redux Toolkit pour la gestion de l'état global.

## Fonctionnalités requises :
>#### Page d'Accueil :
>
>> Afficher une liste de posts avec leur titre, contenu et auteur.
Permettre à l'utilisateur de cliquer sur un post pour accéder à sa page de détails.

>### Page de Détail du Post :
>
>>Afficher toutes les informations détaillées du post sélectionné, y compris les commentaires associés.
Permettre à l'utilisateur d'ajouter un commentaire au post.

>### Page ajout de Post
>> Afficher un formulaire permettant l'ajout de post sous l'identité du user détenant l'id `1`

## Navigation :

>Utiliser React Router pour créer une navigation entre la page d'accueil, les pages de détail des posts et la page d'ajout de post.

## Gestion de l'État avec Redux Toolkit :

>Utiliser Redux Toolkit pour gérer l'état global de l'application, notamment la liste des posts, les détails des posts et les commentaires associés.

## Intégration avec une API :

>Utiliser l'API [JSONPlaceholder](https://jsonplaceholder.typicode.com/guide/) pour récupérer les données des posts, users et des commentaires.
Implémenter des actions Redux pour charger les données depuis l'API et les stocker dans le store Redux. Vous implémenterez également la possibilité d'ajouter des posts et des commentaires sous l'identité du user détenant l'id `1`

## Contraintes Techniques :

> Organiser le code de manière modulaire avec des composants réutilisables.

> Utiliser Redux Toolkit et createAsyncThunk pour une gestion efficace de l'état global de l'application et des requêtes à l'API.


## Évaluation :
#### L'évaluation sera basée sur :
>la qualité du code,

>la fonctionnalité de l'application,

>la gestion de l'état avec Redux Toolkit,

>et l'intégration réussie avec l'API.