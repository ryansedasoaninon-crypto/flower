# Pressed & Bloom — Flower Shop Website

A static, dependency-free website for a florist, built around a "botanical specimen card" concept — arrangements are presented like accessioned herbarium samples, numbered and labeled in a field-journal style.

No build step, no framework — plain HTML, CSS, and vanilla JS, so it can be uploaded straight to GitHub and served with GitHub Pages.

## What's inside

```
flower-shop/
├── index.html      # All page content and structure
├── css/style.css   # Design system: colors, type, layout, components
├── js/script.js    # Mobile menu, scroll reveal, footer year, form UX
└── README.md
```

## Design notes

- **Concept:** vintage herbarium / field-journal aesthetic — each bouquet is a numbered "specimen" with a Latin name and hand-drawn line-art illustration.
- **Palette:** deep forest green, warm ivory paper, dusty rose, ochre gold accents.
- **Type:** Fraunces (display serif) + Work Sans (body) + Space Mono (specimen tags/labels), loaded from Google Fonts.
- **Illustrations:** custom inline SVG line-art flowers (peony, ranunculus, dahlia, rose, eucalyptus) — no image files or external icon libraries needed.

## Customize it for your shop

1. **Text & prices** — open `index.html` and edit the copy in the `#collection`, `#occasions`, `#story`, and `#visit` sections directly.
2. **Colors** — all colors are CSS custom properties at the top of `css/style.css` under `:root`. Change `--forest`, `--rose`, `--ochre`, `--paper` to restyle the whole site.
3. **Photos instead of illustrations** — swap any `<svg class="flower-art">...</svg>` block for an `<img>` tag if you'd rather use real product photography.
4. **The order form** — the form at `#order` currently only shows a confirmation message in the browser (see `js/script.js`). Before going live, connect it to a real backend, such as:
   - A form service like [Formspree](https://formspree.io) or [Netlify Forms](https://www.netlify.com/products/forms/) (just change the `<form>` tag's `action`/attributes per their docs).
   - Your own email or order-management endpoint.

## Deploy with GitHub Pages

1. Create a new repository on GitHub and push these files to it (or upload them directly through the GitHub web UI).
2. In the repo, go to **Settings → Pages**.
3. Under **Source**, choose the `main` branch and the `/ (root)` folder, then save.
4. GitHub will publish the site at `https://<your-username>.github.io/<repo-name>/` within a minute or two.

## Browser support

Built with modern, standard CSS and JS (CSS custom properties, `IntersectionObserver`, SVG `<use>`). Works in all current versions of Chrome, Firefox, Safari, and Edge. Respects `prefers-reduced-motion` and keeps visible focus states for keyboard navigation.
