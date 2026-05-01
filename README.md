# TEBASV2 — Static Portfolio

This repository contains a minimal, responsive portfolio website for the developer brand "TEBASV2". It uses only HTML, CSS, and JavaScript. Tailwind CSS can be added optionally; the project includes a prebuilt `assets/css/style.css` so the site works without any build step.

Structure
- `index.html` — Home (hero, featured projects, skills, contact)
- `about.html` — Short about page
- `projects.html` — Project grid and case summaries
- `assets/css/style.css` — Styles (editable)
- `assets/js/main.js` — Small JS utilities (smooth scroll, reveal)
- `assets/images/placeholder.svg` — Placeholder illustration

Quick preview
Open `index.html` in a browser (double-click or use a simple static server):

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

Editing fonts
- Replace the CSS font imports (in each HTML head) with your hosted font files for Chubbo and Switzer. The `logo-font` element uses the `Chubbo` font-family; update `assets/css/style.css` if you prefer local fonts.

Optional: Tailwind setup
- This scaffold includes `package.json`, `tailwind.config.js`, and `postcss.config.js` placeholders to add Tailwind if you want. Run `npm install` and configure Tailwind to process `assets/css/style.css`.

License
MIT
# TebasPort
Tebas Portfolio
