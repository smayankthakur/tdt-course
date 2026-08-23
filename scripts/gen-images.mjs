import { writeFileSync, mkdirSync } from "fs";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "public", "images");
mkdirSync(outDir, { recursive: true });

function svgWrap(accent, motif, filename) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600">
  <defs>
    <radialGradient id="g" cx="50%" cy="35%" r="75%">
      <stop offset="0%" stop-color="${accent}" stop-opacity="0.55"/>
      <stop offset="100%" stop-color="#0b0b0f" stop-opacity="1"/>
    </radialGradient>
  </defs>
  <rect width="800" height="600" fill="#0b0b0f"/>
  <rect width="800" height="600" fill="url(#g)"/>
  ${motif}
</svg>`;
  writeFileSync(path.join(outDir, filename), svg.trim());
  console.log("wrote", filename);
}

const stars = Array.from({ length: 26 }, () => {
  const x = Math.random() * 800;
  const y = Math.random() * 600;
  const r = 0.8 + Math.random() * 1.6;
  return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r.toFixed(1)}" fill="#e6c063" opacity="${(0.2 + Math.random() * 0.5).toFixed(2)}"/>`;
}).join("\n  ");

svgWrap(
  "#2c9678",
  `${stars}
  <g transform="translate(400,300)" fill="none" stroke="#e6c063" stroke-width="1.5" opacity="0.85">
    <circle r="60"/><circle r="100"/><circle r="140"/>
    ${Array.from({ length: 8 }, (_, i) => {
      const a = (i / 8) * Math.PI * 2;
      const x1 = Math.cos(a) * 60, y1 = Math.sin(a) * 60;
      const x2 = Math.cos(a) * 140, y2 = Math.sin(a) * 140;
      return `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}"/>`;
    }).join("\n    ")}
  </g>`,
  "01-heal-within.svg"
);

svgWrap(
  "#8b5cf6",
  `${stars}
  <g transform="translate(400,300) rotate(-8)">
    <rect x="-90" y="-130" width="180" height="260" rx="14" fill="#16121f" stroke="#e6c063" stroke-width="3"/>
    <circle cx="0" cy="-40" r="34" fill="none" stroke="#e6c063" stroke-width="2.5"/>
    <path d="M -50 60 L 0 10 L 50 60 L 0 110 Z" fill="none" stroke="#a78bfa" stroke-width="2.5"/>
  </g>`,
  "02-tarot-workshop.svg"
);

svgWrap(
  "#e6c063",
  `${stars}
  <g transform="translate(400,320)">
    <g transform="rotate(-16) translate(-140,0)"><rect x="-70" y="-110" width="140" height="220" rx="12" fill="#16121f" stroke="#a78bfa" stroke-width="2"/></g>
    <g><rect x="-75" y="-120" width="150" height="240" rx="12" fill="#16121f" stroke="#e6c063" stroke-width="3"/>
      <circle cx="0" cy="-30" r="30" fill="none" stroke="#e6c063" stroke-width="2.5"/></g>
    <g transform="rotate(16) translate(140,0)"><rect x="-70" y="-110" width="140" height="220" rx="12" fill="#16121f" stroke="#a78bfa" stroke-width="2"/></g>
  </g>`,
  "03-tarot-beginning-to-advance.svg"
);

svgWrap(
  "#e6c063",
  `${stars}
  <g transform="translate(400,300)">
    <rect x="-95" y="-135" width="190" height="270" rx="16" fill="#16121f" stroke="#e6c063" stroke-width="3"/>
    <path d="M0 -70 L14 -30 L56 -30 L22 -6 L34 34 L0 10 L-34 34 L-22 -6 L-56 -30 L-14 -30 Z" fill="#e6c063" opacity="0.9"/>
    <circle cx="0" cy="70" r="28" fill="none" stroke="#a78bfa" stroke-width="2.5"/>
  </g>`,
  "04-tarot-pro.svg"
);

svgWrap(
  "#ff5a3c",
  `${stars}
  ${[-220,-70,80,230].map((x,i)=>{
    const glyphs = ["M-15,-25 L15,25 M-15,25 L15,-25", "M0,-25 L0,25 M-15,-10 L15,0 L-15,10", "M-15,-25 L15,-25 L-15,25 L15,25", "M-15,-25 L0,25 L15,-25"];
    return `<g transform="translate(${400+x},310) rotate(${(i-1.5)*6})">
      <rect x="-32" y="-40" width="64" height="80" rx="10" fill="#16121f" stroke="#ff5a3c" stroke-width="2.5"/>
      <path d="${glyphs[i%4]}" stroke="#e6c063" stroke-width="3" fill="none" stroke-linecap="round"/>
    </g>`;
  }).join("\n  ")}`,
  "05-runes-beginning-to-advance.svg"
);

svgWrap(
  "#e24b6a",
  `${stars}
  <g transform="translate(330,320) rotate(-10)">
    <rect x="-60" y="-60" width="120" height="120" rx="18" fill="#16121f" stroke="#e24b6a" stroke-width="3"/>
    <circle cx="-25" cy="-25" r="8" fill="#e6c063"/><circle cx="25" cy="25" r="8" fill="#e6c063"/>
    <circle cx="0" cy="0" r="8" fill="#e6c063"/><circle cx="-25" cy="25" r="8" fill="#e6c063"/><circle cx="25" cy="-25" r="8" fill="#e6c063"/>
  </g>
  <g transform="translate(470,280) rotate(12)">
    <rect x="-55" y="-55" width="110" height="110" rx="16" fill="#16121f" stroke="#a78bfa" stroke-width="3"/>
    <circle cx="-22" cy="-22" r="7" fill="#e6c063"/><circle cx="22" cy="22" r="7" fill="#e6c063"/>
  </g>`,
  "06-dice-beginning-to-advance.svg"
);

svgWrap(
  "#ff9d4d",
  `${stars}
  <g transform="translate(400,320)">
    <ellipse cx="0" cy="90" rx="110" ry="26" fill="#16121f" stroke="#ff9d4d" stroke-width="2.5"/>
    <path d="M0,90 C -20,20 20,20 0,-40 C -30,-10 -30,50 0,90 Z" fill="#e6c063" opacity="0.85"/>
    <path d="M0,60 C -8,20 8,20 0,-10 C -12,10 -12,40 0,60 Z" fill="#ff9d4d"/>
  </g>`,
  "07-candle-wax-full-course.svg"
);

console.log("done");
