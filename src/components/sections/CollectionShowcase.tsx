"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { collections } from "@/lib/collections";
import SectionLabel from "@/components/ui/SectionLabel";

export default function CollectionShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-background py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <SectionLabel>Collections</SectionLabel>
            <h2 className="mt-6 font-serif text-4xl font-light tracking-tight md:text-5xl lg:text-6xl">
              Six Collections,
              <br />
              <span className="italic text-accent">One Vision</span>
            </h2>
          </div>
          <Link
            href="/collections"
            className="text-sm font-medium tracking-[0.1em] uppercase text-foreground-muted transition-colors hover:text-accent"
          >
            View All &rarr;
          </Link>
        </div>
      </div>

      {/* Horizontal scroll gallery */}
      <div className="horizontal-scroll mt-16 pl-6 md:pl-12">
        <div className="flex gap-6 pb-4 pr-6 md:pr-12">
          {collections.map((collection, i) => (
            <motion.div
              key={collection.slug}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="group w-[300px] flex-shrink-0 md:w-[360px]"
            >
              <Link href={`/collections/${collection.slug}`}>
                {/* Image */}
                <div className="relative aspect-[3/4] overflow-hidden bg-background-alt">
                  <div className="absolute inset-0 flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
                    <span className="font-serif text-6xl font-light text-border">
                      {collection.name[0]}
                    </span>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-foreground/0 transition-colors duration-300 group-hover:bg-foreground/5" />
                  {/* Badge */}
                  {collection.tier === "limited" && (
                    <div className="absolute right-4 top-4 bg-accent-secondary px-3 py-1 text-[10px] font-semibold tracking-[0.15em] uppercase text-foreground">
                      Limited
                    </div>
                  )}
                </div>
                {/* Info */}
                <div className="mt-5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-xl font-medium tracking-wide text-foreground">
                      {collection.name}
                    </h3>
                    <span className="text-xs text-foreground-muted">{collection.year}</span>
                  </div>
                  <p className="mt-1 text-sm italic text-foreground-muted">{collection.tagline}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
