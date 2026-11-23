# Campus — Atelier couleurs du logo

Outil interne pour tester les couleurs du symbole Campus et ses animations.

- `index.html` : l'atelier de couleurs. Choix du modèle (Actuel, V1 à V4), couleurs perso, versions épinglées, et aperçus : logo et slogan, logo renversé, symbole, icône d'app, petites tailles, animation.
- `animations/index.html` : la page qui compare les animations du symbole (01 Spinner, 01 B, 02 Coulée, 03 Chargement).

Les deux pages sont autonomes, sans dépendance ni étape de build. Seule la police Plus Jakarta Sans est chargée depuis Google Fonts.

## Mettre en ligne avec GitHub Pages

1. Créer un dépôt et y pousser le contenu de ce dossier.
2. Aller dans **Settings → Pages**, puis choisir **Deploy from a branch** avec `main` / `(root)`.
3. L'atelier est publié à la racine du site, et les animations sous `/animations/`.

## Modifier l'atelier

Les sources sont dans `src/` :

- `template.html` : la page (mise en page, modèles de couleurs, interface) ;
- `logo.js` : les tracés du logo horizontal ;
- `engine.js` : la géométrie du C et le moteur d'animation.

Après une modification, lancer `python3 src/build.py` pour régénérer `index.html`.

Pour ajouter un modèle de couleurs, compléter le tableau `MODELS` dans `src/template.html`.

Les versions épinglées et les couleurs perso sont enregistrées dans le navigateur (localStorage).
