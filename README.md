# mirajcs.github.io

Personal academic website for Miraj Samarakkody, Assistant Professor at Tougaloo College, published at [mirajcs.github.io](https://mirajcs.github.io).

## Pages

- `index.html` — About / landing page
- `research.html` — Research interests and projects
- `teaching.html` — Courses and teaching materials
- `presentations.html` — Talks and slides
- `publications.html` — Papers and preprints
- `header.html` / `footer.html` — Shared layout fragments injected by `script.js`

## Structure

- `styles.css` — Site styles
- `script.js` — Loads shared header/footer and handles the mobile menu toggle
- `Files/` — Downloadable PDFs and supporting documents
- `notes/`, `notes-n/` — Lecture and course notes
- `gallery/` — Image assets (page currently disabled in the nav)

## Local development

Because the pages use `fetch()` to load shared fragments, open them through a local server rather than `file://`:

```sh
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deployment

Served by GitHub Pages from the `main` branch. Pushing to `main` publishes the site.

## License

See [LICENSE](LICENSE).
