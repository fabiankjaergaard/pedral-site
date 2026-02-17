export interface Collection {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  year: number;
  tier: "signature" | "limited";
  specs: {
    case: string;
    diameter: string;
    movement: string;
    crystal: string;
    waterResistance: string;
    strap: string;
  };
  image: string;
}

export const collections: Collection[] = [
  {
    slug: "okapi",
    name: "Okapi",
    tagline: "Where it all began",
    description:
      "A 37mm cushion case combining 1970s warmth with contemporary precision. The Okapi defined Pedral from day one — bold, expressive, unapologetically retro-futuristic.",
    year: 2015,
    tier: "signature",
    specs: {
      case: "Stainless Steel, Cushion",
      diameter: "37mm",
      movement: "Miyota 9039 Automatic",
      crystal: "Double-domed Sapphire",
      waterResistance: "50m",
      strap: "Italian Leather",
    },
    image: "/images/okapi.jpg",
  },
  {
    slug: "artefact",
    name: "Artefact",
    tagline: "Not simply worn — chosen",
    description:
      "39mm stainless steel with integrated bracelet. Features rare natural stone dials or artwork-based designs — each piece a conversation between material and maker.",
    year: 2019,
    tier: "limited",
    specs: {
      case: "Stainless Steel, Integrated",
      diameter: "39mm",
      movement: "Miyota 9039 Automatic",
      crystal: "Sapphire with AR coating",
      waterResistance: "100m",
      strap: "Integrated Steel Bracelet",
    },
    image: "/images/artefact.jpg",
  },
  {
    slug: "skulptur",
    name: "Skulptur",
    tagline: "Symmetry meets tension",
    description:
      "The latest Pedral design balancing symmetry and asymmetry. A guilloché sunburst dial paired with interchangeable straps — precision as art form.",
    year: 2022,
    tier: "signature",
    specs: {
      case: "Stainless Steel, Round",
      diameter: "38mm",
      movement: "Miyota 90S5 Automatic",
      crystal: "Sapphire with AR coating",
      waterResistance: "50m",
      strap: "Quick-release, Multiple options",
    },
    image: "/images/skulptur.jpg",
  },
  {
    slug: "maestro",
    name: "Maestro",
    tagline: "The refined statement",
    description:
      "37mm automatic dress watch with monobloc tonneau case, fluted bezel, textured sunburst dial with lumed Roman numerals, and hexagonal bracelet links.",
    year: 2021,
    tier: "signature",
    specs: {
      case: "Stainless Steel, Tonneau",
      diameter: "37mm",
      movement: "Miyota 8215 Automatic",
      crystal: "Double-domed Sapphire",
      waterResistance: "30m",
      strap: "Hexagonal Link Bracelet",
    },
    image: "/images/maestro.jpg",
  },
  {
    slug: "triomphe",
    name: "Triomphe",
    tagline: "Almost gone",
    description:
      "A seamless 37–38mm form with coin-edge detailing and Swiss hand-wound movement. Available with Roman, Hebrew, or Eastern Arabic numerals — or a rare Pietersite stone dial.",
    year: 2023,
    tier: "limited",
    specs: {
      case: "Stainless Steel, Cushion",
      diameter: "37.5mm",
      movement: "Swiss Hand-wound",
      crystal: "Sapphire with AR coating",
      waterResistance: "50m",
      strap: "Epsom Leather",
    },
    image: "/images/triomphe.jpg",
  },
  {
    slug: "one-eighty",
    name: "One-Eighty",
    tagline: "Grand feu, grande ambition",
    description:
      "34mm slender cushion case with coin-edge detailing. Grand Feu enamel dial with mirrored logos and Swiss hand-wound movement. Pure, elemental watchmaking.",
    year: 2024,
    tier: "limited",
    specs: {
      case: "Stainless Steel, Slim Cushion",
      diameter: "34mm",
      movement: "Swiss Hand-wound",
      crystal: "Box Sapphire",
      waterResistance: "30m",
      strap: "Epsom Leather",
    },
    image: "/images/one-eighty.jpg",
  },
];

export function getCollection(slug: string): Collection | undefined {
  return collections.find((c) => c.slug === slug);
}

export function getCollectionsByTier(tier: Collection["tier"]): Collection[] {
  return collections.filter((c) => c.tier === tier);
}
