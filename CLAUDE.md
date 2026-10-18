# EA Warwick website

Static site for EA Warwick (Effective Altruism society at the University of Warwick), served at `eawarwick.org` (see `CNAME`, likely GitHub Pages). No build step, framework, or dependencies — edit files and push.

## Structure

- `index.html` — Home (hero, about, "what we offer").
- `programmes.html` — fellowship accordions; contains the small inline `toggleProg()` script.
- `events.html` — embedded Google Calendar and social links.
- `connect.html` — contact links.
- `links.html` — link directory.
- `styles.css` — all shared styles for every page.
- `images/` — `EA logo.png` (nav logo) and `hero.png`.
- `CNAME` — custom domain for hosting.

## Conventions

- Each page is standalone HTML with the same `<head>`, `<nav>`, and `<footer>` copied in. There are no includes, so a nav or footer change has to be made in all five files. The current page's nav link gets `class="active"`.
- Page content sits in `<div class="page" id="page-NAME">`. Home uses `#page-home` to drop the nav padding under the full-height hero.
- Internal links are plain relative hrefs (`programmes.html`, etc.).
- Design tokens (colours, fonts, widths) are CSS variables on `:root` at the top of `styles.css`. Reuse them rather than hard-coding values. Fonts are Inter (body) and Lora (display) from Google Fonts.
- To preview, open `index.html` directly or serve the folder (e.g. `python -m http.server`).
