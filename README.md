# mirajcs.github.io

Personal academic website for Miraj Samarakkody, Assistant Professor at Tougaloo College, published at [mirajcs.github.io](https://mirajcs.github.io).

Built with [Quarto](https://quarto.org).

## Pages

- `index.qmd` — About / landing page
- `research.qmd` — Research interests and projects
- `teaching.qmd` — Courses and teaching materials
- `presentations.qmd` — Talks and slides
- `publications.qmd` — Papers and preprints
- `cv.html`, `gallery.html` — Plain HTML pages (not yet converted), which still use `header.html` / `footer.html` / `script.js` / `styles.css`

## Structure

- `_quarto.yml` — Site config: navbar, footer, and which files are copied to the output
- Theme: stock Quarto `darkly` (dark only), plus a few rules in `custom.css`
- `profile.jpg` — Home page photo (600px copy of `IMG_1928.JPG`)
- `Files/` — Downloadable PDFs and supporting documents
- `gallery/` — Image assets (page currently disabled in the nav)

## Local development

```sh
quarto preview
```

`quarto render` builds the site into `_site/` (git-ignored).

## Deployment

On every push to `main`, `.github/workflows/publish.yml` renders the site and deploys it to GitHub Pages. In the repo settings, set **Pages → Source** to **GitHub Actions**.

## License

See [LICENSE](LICENSE).
