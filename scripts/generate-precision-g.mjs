import fs from "node:fs";

const letters = JSON.parse(fs.readFileSync("scripts/wordmark-letters.json", "utf8"));
const maskPng = fs.readFileSync("public/logo/precision-g-mask.png");
const maskData = `data:image/png;base64,${maskPng.toString("base64")}`;

const gx = 117;
const gy = 562.5;
const gw = 375.75;
const gh = 375;

const wordmark = letters
  .map(
    (letter) =>
      `<g fill="${letter.fill}"><g transform="translate(${letter.x}, ${letter.y})"><path d="${letter.d}"/></g></g>`,
  )
  .join("");

function gMark({ withWordmark }) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="${withWordmark ? "107 550 1280 400" : `${gx} ${gy} ${gw} ${gh}`}" width="${withWordmark ? 1280 : Math.round(gw)}" height="${withWordmark ? 400 : Math.round(gh)}" fill="none" role="img" aria-label="Greatly Brands">
  <title>Greatly Brands</title>
  <defs>
    <linearGradient id="gFace" x1="${gx}" y1="${gy}" x2="${gx + gw}" y2="${gy + gh}" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#5B6CF0"/>
      <stop offset="22%" stop-color="#2A3BB8"/>
      <stop offset="58%" stop-color="#18228A"/>
      <stop offset="100%" stop-color="#0B1048"/>
    </linearGradient>
    <linearGradient id="gSheen" x1="${gx + gw * 0.18}" y1="${gy}" x2="${gx + gw * 0.62}" y2="${gy + gh * 0.58}" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.48"/>
      <stop offset="32%" stop-color="#FFFFFF" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="gEdge" x1="${gx + gw * 0.7}" y1="${gy + gh * 0.15}" x2="${gx + gw}" y2="${gy + gh}" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#000000" stop-opacity="0"/>
      <stop offset="100%" stop-color="#02041A" stop-opacity="0.35"/>
    </linearGradient>
    <mask id="gMask" maskUnits="userSpaceOnUse" x="${gx}" y="${gy}" width="${gw}" height="${gh}">
      <image href="${maskData}" xlink:href="${maskData}" x="${gx}" y="${gy}" width="${gw}" height="${gh}" preserveAspectRatio="xMidYMid meet"/>
    </mask>
  </defs>
  <g mask="url(#gMask)">
    <rect x="${gx}" y="${gy}" width="${gw}" height="${gh}" fill="url(#gFace)"/>
    <rect x="${gx}" y="${gy}" width="${gw}" height="${gh}" fill="url(#gSheen)"/>
    <rect x="${gx}" y="${gy}" width="${gw}" height="${gh}" fill="url(#gEdge)"/>
  </g>
  ${withWordmark ? wordmark : ""}
</svg>
`;
}

fs.writeFileSync("public/logo/greatly-brands.svg", gMark({ withWordmark: true }));
fs.writeFileSync("public/logo/greatly-brands-mark.svg", gMark({ withWordmark: false }));
fs.writeFileSync("public/logo/greatly-brands-dark.svg", gMark({ withWordmark: true }));

const wordmarkOnly = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="548 668 850 220" width="850" height="220" fill="none" role="img" aria-hidden="true">
  ${wordmark}
</svg>
`;
fs.writeFileSync("public/logo/greatly-brands-wordmark.svg", wordmarkOnly);

console.log("wrote lockup", fs.statSync("public/logo/greatly-brands.svg").size);
console.log("wrote mark", fs.statSync("public/logo/greatly-brands-mark.svg").size);
console.log("wrote wordmark", fs.statSync("public/logo/greatly-brands-wordmark.svg").size);
