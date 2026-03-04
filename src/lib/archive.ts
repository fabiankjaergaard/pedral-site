export interface ArchivedWatch {
  slug: string;
  name: string;
  year: number;
  soldYear: number;
  price: number;
  editionSize: number;
  hook: string;
  description: string;
  images: string[];
  dialNames?: string[];
}

export const archivedWatches: ArchivedWatch[] = [
  {
    slug: "artefact",
    name: "Artefact",
    year: 2020,
    soldYear: 2022,
    price: 1200,
    editionSize: 20,
    hook: "An object before it is a watch.",
    description:
      "The Artefact was an exercise in reduction. Every surface, every line questioned until only the essential remained. A watch that asks you to look longer before you understand it.",
    images: [
      "/images/archive/Artefact%20-%20Blue%20Magic.png",
      "/images/archive/Artefact%20-%20Golden%20Glyph.png",
      "/images/archive/Artefact%20-%20Highbury%20Red.png",
      "/images/archive/Artefact%20-%20Jokers%20Tuxedo.png",
      "/images/archive/Artefact%20-%20Kingfisher%20Blue.png",
      "/images/archive/Artefact%20-%20Maglehems%20Lugn.png",
      "/images/archive/Artefact%20-%20Raw%20Malachite.png",
      "/images/archive/Artefact%20-%20Shimmy%20Stardust.png",
      "/images/archive/Artefact%20-%20Tempest%20Stone.png",
      "/images/archive/Artefact-%20Marabou%20Brown.png",
    ],
    dialNames: [
      "Blue Magic",
      "Golden Glyph",
      "Highbury Red",
      "Jokers Tuxedo",
      "Kingfisher Blue",
      "Maglehems Lugn",
      "Raw Malachite",
      "Shimmy Stardust",
      "Tempest Stone",
      "Marabou Brown",
    ],
  },
  {
    slug: "okapi-gmt",
    name: "Okapi GMT",
    year: 2021,
    soldYear: 2023,
    price: 1800,
    editionSize: 20,
    hook: "Two cities. One wrist. No compromise.",
    description:
      "The Okapi GMT extended the cushion-case language into dual-timezone territory. A 24-hour hand and bidirectional bezel. The same restraint as the original, now with a practical purpose.",
    images: [
      "/images/archive/OKAPI%20-%20SPECIAL%20EFFECTS%20ARTEFACT%20GREEN.png",
      "/images/archive/OKAPI%20-%20SPECIAL%20EFFECTS%20ARTEFACT%20MONOCHROME.png",
      "/images/archive/OKAPI%20-%20SPECIAL%20EFFECTS%20ARTEFACT%20PURPLE.png",
      "/images/archive/OKAPI%20-%20SPECIAL%20EFFECTS%20ARTEFACT%20RED.png",
      "/images/archive/OKAPI%20-%20SPECIAL%20EFFECTS%20ARTEFACT%20YELLOW%20GOLD.png",
    ],
    dialNames: [
      "Artefact Green",
      "Artefact Monochrome",
      "Artefact Purple",
      "Artefact Red",
      "Artefact Yellow Gold",
    ],
  },
  {
    slug: "okapi",
    name: "Okapi",
    year: 2015,
    soldYear: 2020,
    price: 1100,
    editionSize: 20,
    hook: "The one that started everything.",
    description:
      "The original Okapi. A fumé sunburst dial behind a coin-edge fluted flange. Swiss ETA 7001, hand-wound. The watch that defined the Pedral language. Sold through in 2020. It will not return.",
    images: [
      "/images/archive/OKAPI%20ARTEFACT%20NUMERALS-%20GOLD-BLACK.png",
      "/images/archive/OKAPI%20ARTEFACT%20NUMERALS-%20GOLD.png",
    ],
    dialNames: [
      "Artefact Numerals — Gold-Black",
      "Artefact Numerals — Gold",
    ],
  },
];
