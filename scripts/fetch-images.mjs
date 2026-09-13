import { mkdir, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const OUT_DIR = path.resolve("public/images");

const images = [
  {
    file: "hero-distribution.webp",
    width: 1600,
    height: 1066,
    quality: 72,
    url: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1800&h=1200&q=75",
  },
  {
    file: "intro-merchandise.webp",
    width: 1200,
    height: 900,
    quality: 72,
    url: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1400&h=1050&q=75",
  },
  {
    file: "category-household.webp",
    width: 900,
    height: 675,
    quality: 70,
    url: "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=1200&h=900&q=75",
  },
  {
    file: "category-health.webp",
    width: 900,
    height: 675,
    quality: 70,
    url: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=1200&h=900&q=75",
  },
  {
    file: "category-beauty.webp",
    width: 900,
    height: 675,
    quality: 70,
    url: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1200&h=900&q=75",
  },
  {
    file: "category-home.webp",
    width: 900,
    height: 675,
    quality: 70,
    url: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&h=900&q=75",
  },
  {
    file: "category-baby.webp",
    width: 900,
    height: 675,
    quality: 70,
    url: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=1200&h=900&q=75",
  },
  {
    file: "category-office.webp",
    width: 900,
    height: 675,
    quality: 70,
    url: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=1200&h=900&q=75",
  },
  {
    file: "category-pet.webp",
    width: 900,
    height: 675,
    quality: 70,
    url: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=1200&h=900&q=75",
  },
  {
    file: "category-seasonal.webp",
    width: 900,
    height: 675,
    quality: 70,
    url: "https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&w=1200&h=900&q=75",
  },
  {
    file: "category-general.webp",
    width: 900,
    height: 675,
    quality: 70,
    url: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&h=900&q=75",
  },
  {
    file: "section-supplier.webp",
    width: 1400,
    height: 900,
    quality: 72,
    url: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?auto=format&fit=crop&w=1600&h=1000&q=75",
  },
  {
    file: "section-retail.webp",
    width: 1400,
    height: 900,
    quality: 72,
    url: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1600&h=1000&q=75",
  },
  {
    file: "section-government.webp",
    width: 1400,
    height: 900,
    quality: 72,
    url: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1600&h=1000&q=75",
  },
  {
    file: "section-about.webp",
    width: 1400,
    height: 900,
    quality: 72,
    url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&h=1000&q=75",
  },
];

async function download(url) {
  const response = await fetch(url, {
    headers: {
      "User-Agent": "GreatlyBrandsWebsite/1.0 (local asset optimizer)",
      Accept: "image/jpeg,image/webp,image/*,*/*",
    },
  });
  if (!response.ok) {
    throw new Error(`Failed ${response.status} for ${url}`);
  }
  return Buffer.from(await response.arrayBuffer());
}

await mkdir(OUT_DIR, { recursive: true });

for (const image of images) {
  const out = path.join(OUT_DIR, image.file);
  try {
    const existing = await stat(out);
    if (existing.size > 20000) {
      process.stdout.write(`Skipping ${image.file} (${existing.size} bytes)\n`);
      continue;
    }
  } catch {
    // not present
  }
  process.stdout.write(`Fetching ${image.file}...\n`);
  const buffer = await download(image.url);
  await sharp(buffer)
    .rotate()
    .resize(image.width, image.height, { fit: "cover", position: "centre" })
    .webp({ quality: image.quality, effort: 5 })
    .toFile(out);
}

process.stdout.write("Done.\n");
