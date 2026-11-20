// Post-render: make sitemap URLs match each page's canonical tag.
// Quarto lists the home page as /index.html, but its canonical is /,
// which Search Console reports as "Alternate page with proper canonical tag".
const outDir = Deno.env.get("QUARTO_PROJECT_OUTPUT_DIR") ?? "_site";
const path = `${outDir}/sitemap.xml`;

try {
  const xml = await Deno.readTextFile(path);
  const fixed = xml.replace(/<loc>([^<]*\/)index\.html<\/loc>/g, "<loc>$1</loc>");
  if (fixed !== xml) await Deno.writeTextFile(path, fixed);
} catch (e) {
  if (!(e instanceof Deno.errors.NotFound)) throw e;
}
