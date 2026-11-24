# Campus — Logo colour lab

Internal tool to test the colours of the Campus symbol and its animation.

- `index.html` — the colour lab: model picker (Current, V1–V5), custom colours, pinned versions, and previews (logo + tagline, reversed logo, symbol, app icon, small sizes, Spinner animation on cream or ink).
- `animations/index.html` — comparison page for the symbol animations (01 Spinner, 01 B, 02 Pour, 03 Loader).

Both pages are self-contained: no dependencies and no build step. Only the Plus Jakarta Sans font is loaded from Google Fonts.

## Publish with GitHub Pages

1. Create a repository and push the contents of this folder **at the root** of the repository.
2. Go to **Settings → Pages** and choose **Deploy from a branch**, with `main` / `(root)`.
3. After a minute or two, the lab is available at `https://<user>.github.io/<repository>/` and the animations at `https://<user>.github.io/<repository>/animations/`.

## Edit the lab

Sources are in `src/`:

- `template.html` — the page (layout, colour models, interface);
- `logo.js` — the horizontal logo paths;
- `engine.js` — the C geometry and the animation engine.

After editing, run `python3 src/build.py` to regenerate `index.html`.

To add a colour model, add an entry to the `MODELS` array in `src/template.html`.

Pinned versions and custom colours are saved in the browser (localStorage).
