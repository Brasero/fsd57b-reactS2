# Challenge base input

## Partie 1

### Vous allez créer un script React permettant de réaliser une conversion de nombre décimal vers un nombre binaire.

> Créez un projet vite
```ps
npm create vite
```

>Créez deux composants App et BaseNumberInput. Le composant App contiendra deux composants BaseNumberInput : respectivement pour saisir le nombre décimal et afficher le nombre binaire.


```text
Nombre décimal : [ ... ]
Nombre binaire : [ ... ]

Hiérarchie des composants :

                 App
                .    .
            .            .
BaseNumberInput    BaseNumberInput
```

>Dans le composant BaseNumberInput l'attribut onChangeBase sera appelé dans le composant lui-même. La logique algorithmique du changement de base sera implémentée dans le composant parent App

## Partie 2

> Implémentez la logique dans l'autre sens : si on rentre un nombre binaire dans le champ correspondant alors la conversion se fait dans l'autre sens (binaire vers décimal).