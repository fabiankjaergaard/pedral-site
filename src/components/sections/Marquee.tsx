"use client";

import { motion } from "framer-motion";

const words = [
  "Okapi",
  "Artefact",
  "Skulptur",
  "Maestro",
  "Triomphe",
  "One-Eighty",
];

export default function Marquee() {
  return (
    <section className="overflow-hidden border-y border-border bg-background py-6">
      <motion.div
        animate={{ x: [0, -1500] }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        className="flex items-center gap-12 whitespace-nowrap"
      >
        {[...words, ...words, ...words, ...words].map((word, i) => (
          <span key={i} className="flex items-center gap-12">
            <span className="font-serif text-2xl font-light italic tracking-wide text-foreground-muted/50 md:text-3xl">
              {word}
            </span>
            <span className="text-xs text-accent-warm">&loz;</span>
          </span>
        ))}
      </motion.div>
    </section>
  );
}
