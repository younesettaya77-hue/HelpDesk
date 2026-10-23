# HelpDesk

Application web de gestion des demandes d’assistance informatique, réalisée en **HTML, CSS et JavaScript**. HelpDesk permet de consulter, créer, modifier et supprimer des demandes depuis une interface responsive.

## Présentation

Ce projet met en pratique la manipulation du DOM, la gestion des événements et la manipulation d’un tableau d’objets en JavaScript. Les cartes des demandes sont générées dynamiquement dans le navigateur.

Trois demandes fictives sont présentes au démarrage : une connexion Wi-Fi instable, un clavier défectueux et une mise à jour de logiciel.

## Fonctionnalités

- **Consulter les demandes** sous forme de cartes avec identifiant, titre, description, catégorie et priorité.
- **Ajouter une demande** à partir d’un formulaire avec contrôle des champs vides.
- **Modifier une demande** en récupérant ses informations dans le formulaire, puis en confirmant la modification.
- **Supprimer une demande** après confirmation.
- **Afficher un compteur** du nombre de demandes, avec une limite connue lorsque la liste devient vide.
- **Identifier les priorités** grâce à des couleurs et des icônes.
- **Adapter la disposition** aux écrans mobiles, tablettes et ordinateurs.

### Informations d’une demande

| Champ | Description |
| --- | --- |
| Identifiant | Nombre utilisé dans le code, affiché sous la forme `HD-001`, `HD-002`, etc. |
| Titre | Résumé du problème informatique |
| Description | Détails du problème rencontré |
| Catégorie | Matériel, Logiciel ou Réseau |
| Priorité | Basse, Normale ou Haute |

## Technologies utilisées

| Technologie | Utilisation |
| --- | --- |
| HTML5 | Structure de la page et formulaire |
| CSS3 | Styles, CSS Grid, Flexbox et media queries |
| JavaScript | Données, manipulation du DOM et interactions |
| Font Awesome | Icônes chargées via CDN |
| Google Fonts | Polices chargées en ligne, dont Inter |
| Git et GitHub | Gestion des versions et hébergement du code |

Le projet ne nécessite ni framework JavaScript, ni installation de dépendances avec npm.

## Structure du projet

| Chemin | Rôle |
| --- | --- |
| `index.html` | Page principale : formulaire et conteneur des demandes |
| `css/style.css` | Mise en forme et adaptation aux tailles d’écran |
| `JS/script.js` | Données initiales, génération des cartes et actions sur les demandes |
| `assets/logo-helpDesk.jpg` | Logo de l’application |
| `README.md` | Documentation du projet |

## Lancer le projet

### 1. Récupérer le code

```bash
git clone https://github.com/younesettaya77-hue/HelpDesk.git
cd HelpDesk
```

Il est également possible de télécharger le projet depuis GitHub avec **Code → Download ZIP**, puis de décompresser l’archive.

### 2. Ouvrir l’application

Ouvrir le fichier `index.html` dans un navigateur web.

Pour travailler dans Visual Studio Code, ouvrir le dossier du projet et utiliser éventuellement l’extension **Live Server**, puis faire un clic droit sur `index.html` et sélectionner **Open with Live Server**.

Une connexion Internet est nécessaire pour charger les polices Google Fonts et les icônes Font Awesome.

## Utilisation

1. Renseigner le titre, la catégorie, la priorité et la description du problème.
2. Cliquer sur **Ajouter la demande** pour afficher une nouvelle carte.
3. Cliquer sur **Modifier** sur une carte pour remplir le formulaire avec ses informations.
4. Changer les informations puis confirmer la modification avec le bouton du formulaire.
5. Cliquer sur **Supprimer**, puis confirmer pour retirer une demande.

## Fonctionnement JavaScript

Les demandes sont stockées dans le tableau `demandes`. Chaque élément est un objet contenant les propriétés `id`, `titre`, `description`, `categorie` et `priorite`.

| Fonction | Rôle |
| --- | --- |
| `Affichage(demandes)` | Vide le conteneur et recrée les cartes à partir du tableau |
| `nombreD(demandes)` | Met à jour le texte du compteur |
| `AjouterDemmande()` | Récupère les champs et ajoute une nouvelle demande |
| `Modifier(id)` | Retrouve une demande et prépare sa modification dans le formulaire |
| `Supprimer(id)` | Demande confirmation et retire la demande avec `filter()` |

Le bouton principal du formulaire utilise un événement `click` pour déclencher l’ajout ou enregistrer la modification selon le mode actif.

## Responsive design

| Largeur d’écran | Disposition prévue dans le CSS |
| --- | --- |
| Moins de 768 px | Formulaire sur une colonne et grille de cartes automatique selon l’espace disponible |
| De 768 à 1023 px | Formulaire sur deux colonnes et cartes sur deux colonnes |
| À partir de 1024 px | Formulaire sur quatre colonnes, avec des champs étendus, et cartes sur trois colonnes |

Ces seuils permettent d’augmenter le nombre de colonnes lorsque l’espace disponible grandit. Les boutons **Cartes / Tableau** sont visibles à partir de 768 px.

## Organisation Git

Les branches présentes dans le dépôt comprennent :

| Branche | Organisation |
| --- | --- |
| `main` | Branche par défaut du dépôt |
| `developement` | Branche de développement |
| `feateure/pagejs` | Travail sur la partie JavaScript |
| `feature/Ajouter` | Travail sur l’ajout |
| `feature/supprimer` | Travail sur la suppression |
| `feature/modifier` et `feature/modifierDeux` | Travail sur la modification |

### Workflow conseillé pour les prochaines contributions

Créer une branche depuis `developement`, réaliser les changements, puis ouvrir une Pull Request vers `developement` pour relecture avant intégration.

```bash
git switch developement
git pull origin developement
git switch -c feature/nom-fonctionnalite

# Après modification des fichiers
git add .
git commit -m "feat: ajouter une nouvelle fonctionnalite"
git push -u origin feature/nom-fonctionnalite
```

Exemples de messages de commit :

- `feat: ajouter la creation des demandes`
- `fix: corriger le compteur lorsque la liste est vide`
- `style: ameliorer le formulaire sur mobile`
- `docs: completer le README`

## Limites actuelles et pistes d’amélioration

- **Absence de sauvegarde persistante** : les demandes sont conservées uniquement en mémoire. Un rechargement de la page rétablit les trois demandes initiales. Une sauvegarde avec `localStorage` pourrait être ajoutée.
- **Vue tableau à implémenter** : les boutons Cartes / Tableau modifient actuellement leur apparence, sans transformer la présentation des demandes.
- **Compteur lorsque la liste est vide** : son actualisation est appelée à l’intérieur de la boucle d’affichage. Après suppression de la dernière demande, il peut conserver l’ancienne valeur. Déplacer cet appel hors de la boucle permettrait de corriger ce comportement.
- **Validation de la modification à renforcer** : les valeurs de l’objet sont modifiées avant le contrôle des champs vides. Il faudrait valider les champs avant d’enregistrer les changements.
- **Évolutions possibles** : recherche, filtres par catégorie et priorité, et message lorsque la liste ne contient aucune demande.

## Liens

- [Dépôt GitHub HelpDesk](https://github.com/younesettaya77-hue/HelpDesk)
- [Profil GitHub du propriétaire du dépôt](https://github.com/younesettaya77-hue)



