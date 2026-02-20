"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import Link from "next/link";
import { collections, getAvailableCollections, getSoldOutCollections } from "@/lib/collections";

function StockBar({ stock, maxStock }: { stock: number; maxStock: number }) {
  const pct = ((maxStock - stock) / maxStock) * 100;
  return (
    <div>
      <div className="mb-1 ml-auto h-[3px] w-[72px] overflow-hidden rounded-sm bg-accent/[0.12]">
        <div
          className="h-full rounded-sm bg-accent"
          style={{ width: `${pct}%` }}
        />
      </div>
      <p className="text-right text-[10px] font-normal tracking-[1px] text-accent">
        {stock} of {maxStock}
      </p>
    </div>
  );
}

function BadgeLabel({ stock }: { stock: number }) {
  if (stock === 0) {
    return (
      <span className="absolute left-4 top-4 z-10 bg-[rgba(80,80,80,0.85)] px-3 py-1 text-[9px] font-medium tracking-[1.5px] uppercase text-white">
        Sold Out
      </span>
    );
  }
  if (stock <= 3) {
    return (
      <span className="absolute left-4 top-4 z-10 bg-[rgba(180,60,40,0.85)] px-3 py-1 text-[9px] font-medium tracking-[1.5px] uppercase text-white">
        Almost Gone
      </span>
    );
  }
  return (
    <span className="absolute left-4 top-4 z-10 bg-[rgba(201,168,76,0.85)] px-3 py-1 text-[9px] font-medium tracking-[1.5px] uppercase text-background">
      {stock} Remaining
    </span>
  );
}

export default function CollectionShowcase() {
  const available = getAvailableCollections();
  const soldOut = getSoldOutCollections();

  return (
    <section className="bg-background-alt py-24 md:py-[120px]">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="mb-16 text-center">
          <p className="mb-3.5 text-[11px] font-normal tracking-[4px] uppercase text-accent">
            The Collection
          </p>
          <h2 className="font-serif text-[clamp(32px,3.5vw,48px)] font-light text-foreground">
            Choose Your Expression
          </h2>
        </div>

        {/* Available watches — 3 column grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3"
        >
          {available.map((c) => (
            <motion.div key={c.slug} variants={fadeInUp}>
              <Link
                href={`/collections/${c.slug}`}
                className="group relative block cursor-pointer overflow-hidden border border-accent/[0.06] bg-background transition-all duration-400 hover:-translate-y-[3px] hover:border-accent/20"
              >
                <BadgeLabel stock={c.stock} />

                {/* Image placeholder */}
                <div className="flex aspect-[4/5] items-center justify-center bg-[linear-gradient(160deg,var(--background-alt),var(--surface))]">
                  <span className="font-serif text-[32px] font-light text-accent/[0.12]">
                    {c.name}
                  </span>
                </div>

                {/* Card body */}
                <div className="p-6">
                  <h3 className="font-serif text-2xl font-normal text-foreground">
                    {c.name}
                  </h3>
                  <p className="mt-1.5 mb-4 text-[13px] font-light italic leading-snug text-foreground-muted">
                    &ldquo;{c.hook}&rdquo;
                  </p>
                  <div className="flex items-end justify-between">
                    <div>
                      <span className="block text-[10px] font-light tracking-[1px] uppercase text-foreground-muted">
                        From
                      </span>
                      <span className="text-[17px] font-normal text-foreground">
                        €{c.price.toLocaleString()}
                      </span>
                    </div>
                    <StockBar stock={c.stock} maxStock={c.maxStock} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Sold out watches — 2 column, centered */}
        {soldOut.length > 0 && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="mx-auto mt-7 grid max-w-[940px] gap-7 sm:grid-cols-2"
          >
            {soldOut.map((c) => (
              <motion.div key={c.slug} variants={fadeInUp}>
                <Link
                  href={`/collections/${c.slug}`}
                  className="group relative block cursor-pointer overflow-hidden border border-accent/[0.06] bg-background transition-all duration-400 hover:-translate-y-[3px] hover:border-accent/20"
                >
                  <BadgeLabel stock={c.stock} />

                  <div className="flex aspect-[4/5] items-center justify-center bg-[linear-gradient(160deg,var(--background-alt),var(--surface))]">
                    <span className="font-serif text-[32px] font-light text-accent/[0.12]">
                      {c.name}
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="font-serif text-2xl font-normal text-foreground">
                      {c.name}
                    </h3>
                    <p className="mt-1.5 mb-4 text-[13px] font-light italic leading-snug text-foreground-muted">
                      &ldquo;{c.hook}&rdquo;
                    </p>
                    <div className="flex items-end justify-between">
                      <div>
                        <span className="block text-[10px] font-light tracking-[1px] uppercase text-foreground-muted">
                          From
                        </span>
                        <span className="text-[17px] font-normal text-foreground">
                          €{c.price.toLocaleString()}
                        </span>
                      </div>
                      <span className="text-[10px] font-normal tracking-[1px] text-foreground-muted">
                        Sold out
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
