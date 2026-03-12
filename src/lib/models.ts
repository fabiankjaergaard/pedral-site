export interface StudioPiece {
  id: string;
  title: string;    // e.g. "Dial Study — Orange Agate"
  caption: string;  // e.g. "Material exploration developed during the Triomphe design phase."
  image?: string;
  darken?: boolean;
}

export const studioPieces: StudioPiece[] = [
  {
    id: "betsy-ross",
    title: "Dial Study — Betsy Ross",
    caption: "Thirteen stars on a deep-blue guilloché centre. One for each original colony. Developed in 2026 — the year the United States marks 250 years of independence — as a quiet acknowledgement of a founding moment, not a souvenir of it.",
    image: "/images/Piece Unique/study-Betsy Ross.jpeg",
  },
  {
    id: "pink-guilloche",
    title: "Dial Study — Pink Guilloché",
    caption: "Exploration in contrast — a salmon-rose guilloché dial paired with heat-blued hands and a dark DLC case.",
    image: "/images/Piece Unique/study-pink-guilloche.jpg",
  },
  {
    id: "tantalum",
    title: "Material Study — Tantalum",
    caption: "Tantalum case. Multi-layer guilloché dial — copper damier centre, blued wave engine-turning, silver chapter ring with Roman numerals. Small seconds at six, powered by the LJP7380. One of the rarest case materials in watchmaking, chosen for how it ages.",
    image: "/images/Piece Unique/study-Tantalum.jpeg",
  },
  {
    id: "lumos",
    title: "Material Study — Lumos",
    caption: "An exploration of lumicast as dial material — not as an accent, but as the dial itself. In darkness, the entire surface becomes light. Developed to understand what a watch looks like when lume is the design decision, not the detail.",
    image: "/images/Piece Unique/Study- Okapi Lumos.jpg",
  },
  {
    id: "okapi-genesis",
    title: "Prototype Study — Okapi Genesis",
    caption: "The design that bridged the first Okapi and what followed. A deep emerald green sunburst dial with small seconds at six — the original cushion case carrying the language of a new generation. The transition, not the arrival.",
    image: "/images/Piece Unique/Study- Okapi Genesis verde.jpeg",
    darken: true,
  },
];
