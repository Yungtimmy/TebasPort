Add local fonts (optional)
--------------------------

To use local copies of Chubbo (for the logo) and Switzer (for body text), add .woff2 files into this directory and reference them via @font-face in `assets/css/style.css`.

Example (drop into top of style.css):

@font-face {
  font-family: 'Chubbo';
  src: url('/assets/fonts/Chubbo-Regular.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Switzer';
  src: url('/assets/fonts/Switzer-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

Then ensure `body` and `.logo-font` in `assets/css/style.css` reference 'Switzer' and 'Chubbo' respectively.

If you don't have license to host these fonts locally, use a hosted provider (Google Fonts or your webfont vendor) and update the <head> in the HTML files.
