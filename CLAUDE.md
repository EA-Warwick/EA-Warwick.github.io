# EA Warwick website

Static site for EA Warwick (Effective Altruism society at the University of Warwick), served at `eawarwick.org` (see `CNAME`, likely GitHub Pages). No build step, framework, or dependencies — edit files and push.

## Structure

- `index.html` — the entire site: inline `<style>`, markup, and a small inline `<script>` at the bottom.
- `images/` — `EA logo.png` (nav logo) and `hero.png`.
- `CNAME` — custom domain for hosting.

## How `index.html` works

- It is a single-page app with tabbed "pages": `<div class="page" id="page-NAME">` for `home`, `programmes`, `events`, `connect`, `links`. Only the one with `.active` is shown.
- Nav links call `showPage('NAME')` and carry `data-page="NAME"`; adding a page means adding both a `page-NAME` div and a matching nav link.
- Programme entries are accordions (`.prog-item`) toggled by `toggleProg()`; only one is open at a time.
- Design tokens (colours, fonts, widths) are CSS variables on `:root` at the top of the `<style>` block — reuse them rather than hard-coding values. Fonts are Inter (body) and Lora (display) from Google Fonts.
- Section backgrounds alternate via classes like `section-cream`.

## Notes

- There used to be separate `programmes/`, `events/`, and `links/` directories; they were removed and their content folded into tabs in `index.html`. Don't link to those paths.
- To preview, just open `index.html` in a browser.
