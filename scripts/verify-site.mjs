const routes = [
  "/",
  "/about",
  "/products",
  "/suppliers",
  "/retail",
  "/government",
  "/contact",
  "/privacy",
  "/terms",
];

const origin = process.env.SITE_ORIGIN || "http://localhost:3000";

function extract(html, pattern) {
  const match = html.match(pattern);
  return match ? match[1].trim() : null;
}

function extractAll(html, pattern) {
  return [...html.matchAll(pattern)].map((match) => match[1]);
}

const report = [];
const broken = [];
const titles = new Map();
const descriptions = new Map();
const h1s = new Map();

for (const route of routes) {
  const res = await fetch(`${origin}${route}`);
  const html = await res.text();
  const title = extract(html, /<title>([^<]+)<\/title>/i);
  const description = extract(html, /<meta name="description" content="([^"]+)"/i);
  const canonical = extract(html, /<link rel="canonical" href="([^"]+)"/i);
  const h1 = extract(html, /<h1[^>]*>([\s\S]*?)<\/h1>/i)?.replace(/<[^>]+>/g, "");
  const schemas = extractAll(
    html,
    /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g,
  );
  const phoneCount = (html.match(/918-321-0104/g) || []).length;
  const legal = (html.match(/Greatly LLC DBA Greatly Brands/g) || []).length;
  const tel = html.includes("tel:+19183210104");

  const schemaTypes = [];
  for (const raw of schemas) {
    try {
      const parsed = JSON.parse(raw);
      schemaTypes.push(parsed["@type"]);
    } catch (error) {
      report.push(`SCHEMA INVALID on ${route}: ${error.message}`);
    }
  }

  titles.set(route, title);
  descriptions.set(route, description);
  h1s.set(route, h1);

  report.push(
    `${res.status} ${route} | title=${title ? "yes" : "NO"} | desc=${description ? "yes" : "NO"} | canonical=${canonical || "NO"} | h1="${h1}" | schema=${schemaTypes.join(",")} | phone=${phoneCount} | tel=${tel} | legal=${legal}`,
  );

  const links = extractAll(html, /href="(\/[^"#?]*)"/g);
  for (const href of new Set(links)) {
    if (href.startsWith("/api/")) continue;
    const check = await fetch(`${origin}${href}`, { redirect: "manual" });
    if (check.status >= 400) broken.push(`${route} -> ${href} (${check.status})`);
  }
}

const robots = await (await fetch(`${origin}/robots.txt`)).text();
const sitemap = await (await fetch(`${origin}/sitemap.xml`)).text();

console.log(report.join("\n"));
console.log("\nUnique titles:", new Set(titles.values()).size === titles.size);
console.log("Unique descriptions:", new Set(descriptions.values()).size === descriptions.size);
console.log("Unique H1s:", new Set(h1s.values()).size === h1s.size);
console.log("\nrobots.txt:\n", robots);
console.log("sitemap has routes:", routes.filter((route) => sitemap.includes(`https://greatlybrands.com${route === "/" ? "" : route}`)));
console.log("\nBroken internal links:", broken.length ? broken : "none");
