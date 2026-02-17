"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { collections, Collection } from "@/lib/collections";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import SectionLabel from "@/components/ui/SectionLabel";

type Filter = "all" | "signature" | "limited";

const filters: { key: Filter; label: string }[] = [
  { key: "all", label: "All" },
  { key: "signature", label: "Signature" },
  { key: "limited", label: "Limited Edition" },
];

export default function CollectionsContent() {
  const [active, setActive] = useState<Filter>("all");

  const filtered =
    active === "all" ? collections : collections.filter((c) => c.tier === active);

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-end overflow-hidden bg-background pb-20 pt-40">
        <div className="pointer-events-none absolute -right-20 top-1/2 -translate-y-1/2 font-serif text-[30vw] font-bold leading-none text-border/30 select-none">
          C
        </div>
        <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 md:px-12">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={fadeInUp}>
              <SectionLabel>Collections</SectionLabel>
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="mt-6 font-serif text-5xl font-light leading-tight tracking-tight md:text-7xl"
            >
              Our <span className="italic text-accent">Timepieces</span>
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="bg-background-alt py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          {/* Filters */}
          <div className="mb-16 flex flex-wrap gap-4">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActive(f.key)}
                className={`border px-6 py-2.5 text-xs font-semibold tracking-[0.15em] uppercase transition-all ${
                  active === f.key
                    ? "border-accent bg-accent text-background"
                    : "border-border bg-transparent text-foreground-muted hover:border-accent hover:text-accent"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={staggerContainer}
              className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filtered.map((collection) => (
                <CollectionCard key={collection.slug} collection={collection} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}

function CollectionCard({ collection }: { collection: Collection }) {
  return (
    <motion.div variants={fadeInUp} className="group">
      <Link href={`/collections/${collection.slug}`}>
        <div className="relative aspect-[3/4] overflow-hidden bg-background">
          <div className="absolute inset-0 flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
            <span className="font-serif text-7xl font-light text-border">
              {collection.name[0]}
            </span>
          </div>
          <div className="absolute inset-0 bg-foreground/0 transition-colors duration-300 group-hover:bg-foreground/5" />
          {collection.tier === "limited" && (
            <div className="absolute right-4 top-4 bg-accent-secondary px-3 py-1 text-[10px] font-semibold tracking-[0.15em] uppercase text-foreground">
              Limited
            </div>
          )}
        </div>
        <div className="mt-5">
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-2xl font-medium tracking-wide">{collection.name}</h3>
            <span className="text-xs text-foreground-muted">{collection.year}</span>
          </div>
          <p className="mt-1 text-sm italic text-foreground-muted">{collection.tagline}</p>
          <p className="mt-3 text-sm leading-relaxed text-foreground-muted line-clamp-2">
            {collection.description}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
