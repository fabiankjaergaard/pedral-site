export interface Collection {
  slug: string;
  name: string;
  tagline: string;
  hook: string;
  description: string;
  designerNote: string;
  year: number;
  tier: "signature" | "limited";
  price: number;
  stock: number;
  maxStock: number;
  edition: string;
  specs: {
    case: string;
    diameter: string;
    movement: string;
    crystal: string;
    waterResistance: string;
    strap: string;
  };
  boxContents: string[];
  valueAnchor: string;
  image: string;
}

export const collections: Collection[] = [
  {
    slug: "artefact",
    name: "Artefact",
    tagline: "Not simply worn — chosen",
    hook: "Your dial. Your stone. No two alike.",
    description:
      "Artefact dials are carved from rare natural stone or translated from original artwork through precise 3D execution. The veins in your Pietersite, the layers in your Kingfisher — nature made them once. We simply gave them a frame.",
    designerNote:
      "The Artefact started with a question: what if the dial itself was the art? Not painted on, not printed — carved from the material. Every stone has its own character. I wanted a watch where the wearer could say: this is mine, and no one else's is the same.",
    year: 2019,
    tier: "limited",
    price: 1449,
    stock: 4,
    maxStock: 20,
    edition: "Kingfisher",
    specs: {
      case: "Stainless Steel, Integrated",
      diameter: "39.5mm",
      movement: "Miyota Cal. 9039 — regulated to ±10s/day",
      crystal: "Flat sapphire with internal Super-AR coating",
      waterResistance: "100m",
      strap: "Integrated 316L steel, micro-adjust clasp",
    },
    boxContents: [
      "Artefact timepiece",
      "Strap adapter tool",
      "Artisanal leather travel roll",
      "Soft polishing cloth",
      "Butterfly clasp",
      "Warranty card",
      "€20 bespoke strap credit",
      "Personal note from Kevin",
    ],
    valueAnchor:
      "Watches with Sellita movements, sapphire crystal, and HV1200 scratch-resistant coating typically start at €2,500+ from established brands. Artefact delivers this specification — with a one-of-a-kind natural stone dial — at €1,449.",
    image: "/images/artefact.jpg",
  },
  {
    slug: "maestro",
    name: "Maestro",
    tagline: "The refined statement",
    hook: "The dress watch that notices you back.",
    description:
      "Maestro rewards the eye that lingers. At 37mm, the monobloc tonneau case and fluted bezel frame a textured sunburst dial where lumed Roman numerals intersect a diagonal time display — a detail most will miss. You won't.",
    designerNote:
      "Maestro is the watch I designed for the moments between moments. The meeting that's actually a conversation. The dinner that becomes a memory. It's a dress watch, but not a formal one — it's for people who dress deliberately.",
    year: 2021,
    tier: "signature",
    price: 1300,
    stock: 7,
    maxStock: 20,
    edition: "Frosted Flex",
    specs: {
      case: "Stainless Steel, Tonneau",
      diameter: "37mm",
      movement: "Sellita SW200-1b — Swiss automatic, 38-hour power reserve",
      crystal: "Flat sapphire with internal Super-AR coating",
      waterResistance: "30m",
      strap: "Integrated hexagonal links, follows the wrist's natural curve",
    },
    boxContents: [
      "Maestro timepiece",
      "Strap adapter tool",
      "Artisanal leather travel roll",
      "Polishing cloth",
      "Butterfly clasp",
      "Warranty card",
      "€20 bespoke strap credit",
      "Personal note from Kevin",
    ],
    valueAnchor:
      "Dress watches with Swiss Sellita movements, sapphire crystal, and integrated bracelet typically start at €2,800+. Maestro: €1,300.",
    image: "/images/maestro.jpg",
  },
  {
    slug: "triomphe",
    name: "Triomphe",
    tagline: "Almost gone",
    hook: "8.8mm thin. Impossible to ignore.",
    description:
      "The Triomphe vanishes beneath your cuff, then commands attention the moment light finds its dial. No lugs. No excess. A seamless 38mm form defined by coin-edge detailing and proportions that feel inevitable.",
    designerNote:
      "The Triomphe was born from a constraint: how thin can you go before you lose presence? The answer is 8.8mm. At that thickness, the watch disappears on the wrist but the dial becomes everything. The guilloché layers — Carreau Tissé, sauté piqué, Vagues de Lumière — they reward close inspection. This is a watch you discover over time.",
    year: 2023,
    tier: "limited",
    price: 1500,
    stock: 2,
    maxStock: 20,
    edition: "Émeraude Vert",
    specs: {
      case: "Stainless Steel, Cushion",
      diameter: "38mm, 8.8mm thin",
      movement: "Swiss hand-wound — the purist's choice",
      crystal: "Sapphire with Super-AR coating",
      waterResistance: "50m",
      strap: "Hand-stitched Epsom leather",
    },
    boxContents: [
      "Triomphe timepiece",
      "Epsom leather strap (fitted)",
      "Leather travel roll",
      "Polishing cloth",
      "Warranty card",
      "Personal note from Kevin",
    ],
    valueAnchor:
      "Hand-wound dress watches under 9mm with multi-layer guilloché dials from established houses start at €3,500+. Triomphe: €1,500.",
    image: "/images/triomphe.jpg",
  },
  {
    slug: "okapi",
    name: "Okapi Classique",
    tagline: "The one that started everything",
    hook: "The original. The one that started everything.",
    description:
      "Since 2015, the Okapi has defined Pedral. A 37mm cushion case where softened corners meet decisive lines, balancing 1970s warmth with contemporary precision. Not nostalgia — clarity, shaped in steel. Nordic minimalism, resolved.",
    designerNote:
      "Okapi was my first real watch. Not the first prototype — the first one I looked at and thought: this is what I was trying to make. The cushion case, the proportions, the way it catches light on the brushed surfaces. Every collection since has been a conversation with what Okapi started.",
    year: 2015,
    tier: "signature",
    price: 2000,
    stock: 0,
    maxStock: 20,
    edition: "Kivu & Wasa",
    specs: {
      case: "Stainless Steel, Cushion, HV1200 coating",
      diameter: "37mm",
      movement: "Miyota 9039 Automatic",
      crystal: "Sapphire with anti-reflective coating",
      waterResistance: "50m",
      strap: "Italian Leather",
    },
    boxContents: [
      "Okapi Classique timepiece",
      "Italian leather strap",
      "Leather travel roll",
      "Polishing cloth",
      "Warranty card",
      "Personal note from Kevin",
    ],
    valueAnchor: "",
    image: "/images/okapi.jpg",
  },
  {
    slug: "skulptur",
    name: "Skulptur",
    tagline: "Symmetry meets tension",
    hook: "Where precision becomes art form.",
    description:
      "The latest Pedral design balancing symmetry and asymmetry. A guilloché sunburst dial paired with interchangeable straps — precision as art form.",
    designerNote:
      "Skulptur is about balance — not the safe kind, but the kind where you feel the tension. The sunburst guilloché catches light differently from every angle. It's the watch that taught me to trust the dial to do the talking.",
    year: 2022,
    tier: "signature",
    price: 1350,
    stock: 5,
    maxStock: 20,
    edition: "Sunburst",
    specs: {
      case: "Stainless Steel, Round",
      diameter: "38mm",
      movement: "Miyota 90S5 Automatic",
      crystal: "Sapphire with AR coating",
      waterResistance: "50m",
      strap: "Quick-release, Multiple options",
    },
    boxContents: [
      "Skulptur timepiece",
      "Quick-release strap",
      "Strap adapter tool",
      "Polishing cloth",
      "Warranty card",
      "Personal note from Kevin",
    ],
    valueAnchor:
      "Automatic watches with guilloché sunburst dials and sapphire crystal from established brands start at €2,200+. Skulptur: €1,350.",
    image: "/images/skulptur.jpg",
  },
  {
    slug: "one-eighty",
    name: "One-Eighty",
    tagline: "Grand feu, grande ambition",
    hook: "Grand Feu enamel. Pure watchmaking.",
    description:
      "34mm slender cushion case with coin-edge detailing. Grand Feu enamel dial with mirrored logos and Swiss hand-wound movement. Pure, elemental watchmaking.",
    designerNote:
      "One-Eighty is the watch where I stopped compromising. Grand Feu enamel — fired at 800°C, each dial taking days to produce. Some crack. Some aren't perfect. The ones that survive are extraordinary. This is watchmaking at its most honest.",
    year: 2024,
    tier: "limited",
    price: 1800,
    stock: 3,
    maxStock: 20,
    edition: "Ivory Flame",
    specs: {
      case: "Stainless Steel, Slim Cushion",
      diameter: "34mm",
      movement: "Swiss Hand-wound",
      crystal: "Box Sapphire",
      waterResistance: "30m",
      strap: "Epsom Leather",
    },
    boxContents: [
      "One-Eighty timepiece",
      "Epsom leather strap",
      "Leather travel roll",
      "Polishing cloth",
      "Warranty card",
      "Certificate of authenticity",
      "Personal note from Kevin",
    ],
    valueAnchor:
      "Grand Feu enamel watches with Swiss hand-wound movements typically start at €4,000+ from established houses. One-Eighty: €1,800.",
    image: "/images/one-eighty.jpg",
  },
];

export function getCollection(slug: string): Collection | undefined {
  return collections.find((c) => c.slug === slug);
}

export function getCollectionsByTier(tier: Collection["tier"]): Collection[] {
  return collections.filter((c) => c.tier === tier);
}

export function getAvailableCollections(): Collection[] {
  return collections.filter((c) => c.stock > 0);
}

export function getSoldOutCollections(): Collection[] {
  return collections.filter((c) => c.stock === 0);
}
