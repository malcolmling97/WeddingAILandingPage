// Generates illustrated sample assets into src/assets/images/ plus public/og.png
// and public/favicon.svg. Run once: node scripts/make-placeholders.mjs
// These are stand-in vector illustrations; real photos later replace these files
// keeping the same basenames (see README).
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const IMAGES_DIR = 'src/assets/images';
const PUBLIC_DIR = 'public';

const INK = '#221D16';

// Stylized bride silhouette: head, bodice, A-line gown. Scaled/positioned per use.
function bride({ x, y, scale = 1, color = INK, opacity = 1, flip = false }) {
  return `<g transform="translate(${x} ${y}) scale(${flip ? -scale : scale} ${scale})" fill="${color}" opacity="${opacity}">
    <circle cx="0" cy="-150" r="24"/>
    <path d="M -4 -126 C -14 -122, -18 -110, -19 -95 L -14 -60 C -30 -20, -52 60, -66 96 C -30 112, 30 112, 66 96 C 52 60, 30 -20, 14 -60 L 19 -95 C 18 -110, 14 -122, 4 -126 Z"/>
    <path d="M 16 -112 C 44 -96, 52 -40, 44 30 C 40 60, 34 80, 28 92 L 20 88 C 30 40, 34 -30, 12 -100 Z" opacity="0.35"/>
  </g>`;
}

function sampleTag(w, h) {
  return `<text x="${w - 14}" y="${h - 14}" text-anchor="end" font-family="Helvetica, Arial, sans-serif" font-size="${Math.round(w / 42)}" fill="${INK}" opacity="0.35">sample</text>`;
}

function svg(w, h, inner) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">${inner}${sampleTag(w, h)}</svg>\n`;
}

// ---------------------------------------------------------------- scenes

function baliScene(w, h, { brideX = 0.5, flip = false } = {}) {
  const horizon = h * 0.62;
  return `
  <defs>
    <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#FBDC9B"/>
      <stop offset="0.55" stop-color="#F29A76"/>
      <stop offset="1" stop-color="#E75A7C"/>
    </linearGradient>
    <linearGradient id="sea" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#D77A6E"/>
      <stop offset="1" stop-color="#7A4460"/>
    </linearGradient>
  </defs>
  <rect width="${w}" height="${horizon}" fill="url(#sky)"/>
  <circle cx="${w * 0.5}" cy="${horizon - h * 0.06}" r="${h * 0.09}" fill="#FFF3D6" opacity="0.95"/>
  <rect y="${horizon}" width="${w}" height="${h - horizon}" fill="url(#sea)"/>
  <rect y="${horizon}" width="${w}" height="${h * 0.008}" fill="#FFE9BF" opacity="0.7"/>
  <ellipse cx="${w * 0.5}" cy="${horizon + h * 0.05}" rx="${w * 0.08}" ry="${h * 0.006}" fill="#FFE9BF" opacity="0.5"/>
  <ellipse cx="${w * 0.5}" cy="${horizon + h * 0.1}" rx="${w * 0.13}" ry="${h * 0.007}" fill="#FFE9BF" opacity="0.35"/>
  <ellipse cx="${w * 0.12}" cy="${h * 0.18}" rx="${w * 0.09}" ry="${h * 0.014}" fill="#FFF3D6" opacity="0.45"/>
  <ellipse cx="${w * 0.82}" cy="${h * 0.26}" rx="${w * 0.12}" ry="${h * 0.016}" fill="#FFF3D6" opacity="0.35"/>
  ${bride({ x: w * brideX, y: h * 0.87, scale: (h / 1200) * 1.5, color: '#3A2334', flip })}`;
}

function sapaScene(w, h, { brideX = 0.42, flip = false } = {}) {
  return `
  <defs>
    <linearGradient id="mist" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#EAF2EE"/>
      <stop offset="1" stop-color="#B9D2C8"/>
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#mist)"/>
  <path d="M 0 ${h * 0.55} L ${w * 0.3} ${h * 0.30} L ${w * 0.55} ${h * 0.52} L ${w * 0.78} ${h * 0.34} L ${w} ${h * 0.5} V ${h} H 0 Z" fill="#8FB5A6" opacity="0.55"/>
  <path d="M 0 ${h * 0.68} L ${w * 0.22} ${h * 0.5} L ${w * 0.48} ${h * 0.66} L ${w * 0.72} ${h * 0.48} L ${w} ${h * 0.64} V ${h} H 0 Z" fill="#5F8F7D" opacity="0.75"/>
  <path d="M 0 ${h * 0.82} L ${w * 0.35} ${h * 0.64} L ${w * 0.62} ${h * 0.8} L ${w} ${h * 0.68} V ${h} H 0 Z" fill="#3E7C6F"/>
  <rect y="${h * 0.42}" width="${w}" height="${h * 0.05}" fill="#EAF2EE" opacity="0.5"/>
  <rect y="${h * 0.58}" width="${w}" height="${h * 0.04}" fill="#EAF2EE" opacity="0.4"/>
  ${bride({ x: w * brideX, y: h * 0.93, scale: (h / 1200) * 1.4, color: '#24423A', flip })}`;
}

function jiangsuScene(w, h, { brideX = 0.5, flip = false } = {}) {
  const water = h * 0.7;
  const lantern = (x, y, r) => `
    <circle cx="${x}" cy="${y}" r="${r}" fill="#F6B26B"/>
    <circle cx="${x}" cy="${y}" r="${r * 1.9}" fill="#F6B26B" opacity="0.18"/>
    <circle cx="${x}" cy="${water + (water - y)}" r="${r * 0.8}" fill="#F6B26B" opacity="0.25"/>`;
  return `
  <defs>
    <linearGradient id="dusk" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#39415C"/>
      <stop offset="1" stop-color="#5E5678"/>
    </linearGradient>
    <linearGradient id="canal" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#2E3550"/>
      <stop offset="1" stop-color="#1E2436"/>
    </linearGradient>
  </defs>
  <rect width="${w}" height="${water}" fill="url(#dusk)"/>
  <rect x="${w * 0.02}" y="${h * 0.34}" width="${w * 0.26}" height="${water - h * 0.34}" fill="#262C42"/>
  <rect x="${w * 0.72}" y="${h * 0.3}" width="${w * 0.26}" height="${water - h * 0.3}" fill="#262C42"/>
  <path d="M ${w * 0.02} ${h * 0.34} h ${w * 0.26} l ${w * 0.03} ${-h * 0.04} h ${-w * 0.32} Z" fill="#191E30"/>
  <path d="M ${w * 0.72} ${h * 0.3} h ${w * 0.26} l ${w * 0.02} ${-h * 0.04} h ${-w * 0.3} Z" fill="#191E30"/>
  <path d="M ${w * 0.2} ${water} q ${w * 0.3} ${-h * 0.14} ${w * 0.6} 0" stroke="#191E30" stroke-width="${h * 0.02}" fill="none"/>
  <rect y="${water}" width="${w}" height="${h - water}" fill="url(#canal)"/>
  ${lantern(w * 0.16, h * 0.42, h * 0.022)}
  ${lantern(w * 0.86, h * 0.38, h * 0.022)}
  ${lantern(w * 0.5, h * 0.5, h * 0.018)}
  <rect y="${water + h * 0.05}" x="${w * 0.1}" width="${w * 0.16}" height="${h * 0.004}" fill="#8A94B8" opacity="0.5"/>
  <rect y="${water + h * 0.1}" x="${w * 0.6}" width="${w * 0.22}" height="${h * 0.004}" fill="#8A94B8" opacity="0.4"/>
  ${bride({ x: w * 0.5, y: water - h * 0.062, scale: (h / 1200) * 1.35, color: '#131728', flip })}`;
}

function ballroomScene(w, h, { brideX = 0.5, flip = false } = {}) {
  const floor = h * 0.74;
  const drop = (x, y, len) => `<line x1="${x}" y1="${y}" x2="${x}" y2="${y + len}" stroke="#E9C87A" stroke-width="${h * 0.004}" opacity="0.9"/><circle cx="${x}" cy="${y + len}" r="${h * 0.007}" fill="#F3DFA8"/>`;
  return `
  <defs>
    <linearGradient id="hall" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#2E241B"/>
      <stop offset="1" stop-color="#5C4630"/>
    </linearGradient>
    <linearGradient id="floor" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#6E5335"/>
      <stop offset="1" stop-color="#3A2C1E"/>
    </linearGradient>
  </defs>
  <rect width="${w}" height="${floor}" fill="url(#hall)"/>
  <rect x="${w * 0.05}" width="${w * 0.045}" height="${floor}" fill="#241C13"/>
  <rect x="${w * 0.905}" width="${w * 0.045}" height="${floor}" fill="#241C13"/>
  <path d="M ${w * 0.28} ${h * 0.1} q ${w * 0.22} ${h * 0.12} ${w * 0.44} 0" stroke="#E9C87A" stroke-width="${h * 0.005}" fill="none" opacity="0.9"/>
  <circle cx="${w * 0.5}" cy="${h * 0.1}" r="${h * 0.012}" fill="#F3DFA8"/>
  ${drop(w * 0.34, h * 0.13, h * 0.05)}
  ${drop(w * 0.42, h * 0.155, h * 0.07)}
  ${drop(w * 0.5, h * 0.163, h * 0.08)}
  ${drop(w * 0.58, h * 0.155, h * 0.07)}
  ${drop(w * 0.66, h * 0.13, h * 0.05)}
  <rect y="${floor}" width="${w}" height="${h - floor}" fill="url(#floor)"/>
  <ellipse cx="${w * 0.5}" cy="${floor + h * 0.08}" rx="${w * 0.3}" ry="${h * 0.03}" fill="#E9C87A" opacity="0.12"/>
  ${bride({ x: w * brideX, y: floor + h * 0.05, scale: (h / 1200) * 1.5, color: '#171009', flip })}`;
}

const SCENES = { bali: baliScene, sapa: sapaScene, jiangsu: jiangsuScene, ballroom: ballroomScene };

// ---------------------------------------------------------------- other art

// Fitting-room phone snap: warm room, mirror, curtain, bride.
function fittingRoom(w, h) {
  return `
  <rect width="${w}" height="${h}" fill="#EFE3D0"/>
  <rect width="${w}" height="${h * 0.04}" fill="#E2D2B8"/>
  <ellipse cx="${w * 0.72}" cy="${h * 0.44}" rx="${w * 0.16}" ry="${h * 0.28}" fill="#F9F3E6" stroke="#C9B48E" stroke-width="${h * 0.008}"/>
  ${bride({ x: w * 0.72, y: h * 0.6, scale: (h / 1200) * 0.9, color: '#4A3B2A', opacity: 0.45 })}
  <path d="M ${w * 0.06} 0 q ${w * 0.05} ${h * 0.5} 0 ${h} L 0 ${h} L 0 0 Z" fill="#D7A7B4"/>
  <path d="M ${w * 0.13} 0 q ${w * 0.04} ${h * 0.5} 0 ${h}" stroke="#C793A2" stroke-width="${w * 0.02}" fill="none"/>
  ${bride({ x: w * 0.42, y: h * 0.82, scale: (h / 1200) * 1.6, color: '#4A3B2A' })}
  <rect x="${w * 0.03}" y="${h * 0.9}" width="${w * 0.2}" height="${h * 0.055}" rx="${h * 0.028}" fill="#221D16" opacity="0.75"/>
  <circle cx="${w * 0.085}" cy="${h * 0.9275}" r="${h * 0.012}" fill="#fff"/>
  <rect x="${w * 0.12}" y="${h * 0.918}" width="${w * 0.09}" height="${h * 0.019}" rx="${h * 0.009}" fill="#fff" opacity="0.8"/>`;
}

// Step 2: picking dress + place (two selection cards with chips).
function pickCards(w, h) {
  return `
  <rect width="${w}" height="${h}" fill="#FBF6EE"/>
  <g transform="rotate(-3 ${w * 0.3} ${h * 0.5})">
    <rect x="${w * 0.1}" y="${h * 0.16}" width="${w * 0.34}" height="${h * 0.66}" rx="${h * 0.02}" fill="#fff" stroke="#E5D9C4" stroke-width="2"/>
    ${bride({ x: w * 0.27, y: h * 0.66, scale: (h / 900) * 0.85, color: '#8A7A62' })}
    <rect x="${w * 0.14}" y="${h * 0.7}" width="${w * 0.16}" height="${h * 0.05}" rx="${h * 0.025}" fill="#C9A227"/>
  </g>
  <g transform="rotate(3 ${w * 0.7} ${h * 0.5})">
    <rect x="${w * 0.52}" y="${h * 0.16}" width="${w * 0.38}" height="${h * 0.66}" rx="${h * 0.02}" fill="#fff" stroke="#E5D9C4" stroke-width="2"/>
    <svg x="${w * 0.54}" y="${h * 0.19}" width="${w * 0.34}" height="${h * 0.48}">${baliScene(w * 0.34, h * 0.48)}</svg>
    <rect x="${w * 0.56}" y="${h * 0.7}" width="${w * 0.18}" height="${h * 0.05}" rx="${h * 0.025}" fill="#3E7C6F"/>
  </g>
  <path d="M ${w * 0.44} ${h * 0.5} q ${w * 0.04} ${-h * 0.06} ${w * 0.08} 0" stroke="#E75A7C" stroke-width="5" fill="none" stroke-linecap="round"/>`;
}

// Step 3: fanned set of finished scene cards.
function shootSet(w, h) {
  const card = (scene, cx, rot) => `
  <g transform="rotate(${rot} ${cx} ${h * 0.52})">
    <rect x="${cx - w * 0.15}" y="${h * 0.14}" width="${w * 0.3}" height="${h * 0.76}" rx="${h * 0.02}" fill="#fff"/>
    <svg x="${cx - w * 0.135}" y="${h * 0.16}" width="${w * 0.27}" height="${h * 0.72}">${scene(w * 0.27, h * 0.72)}</svg>
  </g>`;
  return `
  <rect width="${w}" height="${h}" fill="#FBF6EE"/>
  ${card(sapaScene, w * 0.28, -6)}
  ${card(ballroomScene, w * 0.72, 6)}
  ${card(baliScene, w * 0.5, 0)}`;
}

// Gown-only card for the dress rail; silhouette varies per index.
function gown(w, h, i) {
  const flares = [66, 46, 84, 58, 74, 52];
  const flare = flares[i % flares.length];
  const waist = 14 + (i % 3) * 3;
  const bust = waist + 12;
  return `
  <rect width="${w}" height="${h}" fill="#FAF4E9"/>
  <ellipse cx="${w * 0.5}" cy="${h * 0.87}" rx="${w * 0.28}" ry="${h * 0.018}" fill="#E5D9C4"/>
  <g transform="translate(${w * 0.5} ${h * 0.52}) scale(${h / 440})" fill="#B9A98C">
    <path d="M -${bust} -160
             C -${bust + 3} -130, -${waist + 2} -110, -${waist} -90
             C -${waist + 8} -50, -${flare * 0.8} 30, -${flare} 110
             C -${flare * 0.55} 124, ${flare * 0.55} 124, ${flare} 110
             C ${flare * 0.8} 30, ${waist + 8} -50, ${waist} -90
             C ${waist + 2} -110, ${bust + 3} -130, ${bust} -160
             C ${bust * 0.4} -170, -${bust * 0.4} -170, -${bust} -160 Z"/>
    <path d="M ${waist * 0.5} -100 C ${flare * 0.5} -30, ${flare * 0.66} 40, ${flare * 0.6} 106 L ${flare * 0.38} 112 C ${flare * 0.45} 40, ${waist * 1.2} -40, ${waist * 0.1} -96 Z" opacity="0.35" fill="#fff"/>
    <line x1="-${bust * 0.7}" y1="-163" x2="-${bust * 0.4}" y2="-192" stroke="#B9A98C" stroke-width="3.5"/>
    <line x1="${bust * 0.7}" y1="-163" x2="${bust * 0.4}" y2="-192" stroke="#B9A98C" stroke-width="3.5"/>
    <path d="M -${bust * 0.4} -192 Q 0 -212 ${bust * 0.4} -192" stroke="#B9A98C" stroke-width="4" fill="none"/>
    <line x1="0" y1="-207" x2="0" y2="-222" stroke="#B9A98C" stroke-width="3.5"/>
    <circle cx="0" cy="-228" r="6" fill="none" stroke="#B9A98C" stroke-width="3.5"/>
  </g>`;
}

// ---------------------------------------------------------------- output

const files = [
  { name: 'hero-input', w: 900, h: 1200, art: fittingRoom },
  { name: 'hero-render-bali', w: 900, h: 1200, art: (w, h) => SCENES.bali(w, h) },
  { name: 'hero-render-sapa', w: 900, h: 1200, art: (w, h) => SCENES.sapa(w, h) },
  { name: 'hero-render-ballroom', w: 900, h: 1200, art: (w, h) => SCENES.ballroom(w, h) },
  { name: 'step-1', w: 1200, h: 900, art: fittingRoom },
  { name: 'step-2', w: 1200, h: 900, art: pickCards },
  { name: 'step-3', w: 1200, h: 900, art: shootSet },
  ...[0, 1, 2, 3, 4, 5].map((i) => ({ name: `dress-0${i + 1}`, w: 800, h: 1200, art: (w, h) => gown(w, h, i) })),
  { name: 'dest-jiangsu', w: 960, h: 1200, art: (w, h) => SCENES.jiangsu(w, h) },
  { name: 'dest-sapa', w: 960, h: 1200, art: (w, h) => SCENES.sapa(w, h) },
  { name: 'dest-bali', w: 960, h: 1200, art: (w, h) => SCENES.bali(w, h) },
  { name: 'dest-ballroom', w: 960, h: 1200, art: (w, h) => SCENES.ballroom(w, h) },
  ...['bali', 'sapa', 'jiangsu', 'ballroom', 'bali', 'sapa', 'jiangsu', 'ballroom', 'bali', 'sapa'].map((key, i) => ({
    name: `gallery-${String(i + 1).padStart(2, '0')}`,
    w: i % 2 === 0 ? 900 : 960,
    h: 1200,
    art: (w, h) => SCENES[key](w, h, { brideX: [0.5, 0.34, 0.62, 0.44][i % 4], flip: i % 3 === 1 }),
  })),
];

await mkdir(IMAGES_DIR, { recursive: true });
for (const f of files) {
  await writeFile(path.join(IMAGES_DIR, `${f.name}.svg`), svg(f.w, f.h, f.art(f.w, f.h)));
}

const ogSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#FBF6EE"/>
  <svg x="760" y="60" width="380" height="510">${baliScene(380, 510)}</svg>
  <rect x="760" y="60" width="380" height="510" fill="none" stroke="#221D16" stroke-width="2" rx="8"/>
  <text x="60" y="260" font-family="Helvetica, Arial, sans-serif" font-weight="bold" font-size="58" fill="#221D16">Help your brides</text>
  <text x="60" y="330" font-family="Helvetica, Arial, sans-serif" font-weight="bold" font-size="58" fill="#221D16">see the yes.</text>
  <text x="60" y="400" font-family="Helvetica, Arial, sans-serif" font-size="26" fill="#221D16">One fitting-room photo. Her destination</text>
  <text x="60" y="436" font-family="Helvetica, Arial, sans-serif" font-size="26" fill="#221D16">photoshoot, in your dress.</text>
  <rect x="60" y="480" width="220" height="10" fill="#E75A7C"/>
</svg>`;
await sharp(Buffer.from(ogSvg)).png().toFile(path.join(PUBLIC_DIR, 'og.png'));

const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="14" fill="#FBF6EE"/>
  <path d="M12 42 C 22 18, 42 18, 52 34 S 30 54, 22 40" fill="none" stroke="#E75A7C" stroke-width="6" stroke-linecap="round"/>
</svg>
`;
await writeFile(path.join(PUBLIC_DIR, 'favicon.svg'), faviconSvg);

console.log(`Wrote ${files.length} illustrated SVGs to ${IMAGES_DIR}, og.png and favicon.svg to ${PUBLIC_DIR}`);
