"use client";

import { motion } from "framer-motion";
import { fadeInUp, slideInLeft, slideInRight, staggerContainer } from "@/lib/animations";
import type { Collection } from "@/lib/collections";
import Newsletter from "@/components/sections/Newsletter";

function ScarcityBar({ stock, maxStock, edition }: { stock: number; maxStock: number; edition: string }) {
  const pct = ((maxStock - stock) / maxStock) * 100;
  return (
    <div className="flex items-center gap-4 border-y border-accent/10 py-4">
      <span className="font-serif text-[30px] font-normal text-accent">{stock}</span>
      <div className="leading-snug">
        <p className="text-xs font-light text-foreground-muted">
          <strong className="font-medium text-foreground">
            {stock === 0 ? `of ${maxStock} — Sold out` : `left of ${maxStock}`}
          </strong>
        </p>
        <p className="text-xs font-light text-foreground-muted">{edition} edition</p>
      </div>
      <div className="flex-1 h-1 overflow-hidden rounded-sm bg-accent/10">
        <div
          className="h-full rounded-sm bg-gradient-to-r from-accent to-[#c9684c]"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

export default function CollectionDetail({ collection }: { collection: Collection }) {
  const c = collection;
  const isSoldOut = c.stock === 0;
  const specEntries = Object.entries(c.specs);

  return (
    <>
      {/* Product Hero */}
      <section className="relative min-h-[70vh] overflow-hidden bg-background">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,rgba(17,29,32,0.7)_0%,transparent_60%)]" />

        <div className="relative z-10 mx-auto max-w-[1400px] px-6 pb-20 pt-32 md:px-12 md:pt-28 md:pb-20">
          <div className="grid items-center gap-16 md:grid-cols-2 md:gap-20">
            {/* Left — Image */}
            <motion.div initial="hidden" animate="visible" variants={slideInLeft}>
              <div className="flex aspect-square items-center justify-center border border-accent/[0.08] bg-[linear-gradient(160deg,var(--background-alt),var(--surface))]">
                <span className="font-serif text-[44px] font-light text-accent/[0.12]">
                  {c.name}
                </span>
              </div>
              {/* Thumbnails */}
              <div className="mt-3 grid grid-cols-4 gap-2.5">
                {["Wrist", "Dial", "Back", "Box"].map((label, i) => (
                  <div
                    key={label}
                    className={`flex aspect-square items-center justify-center border bg-background-alt text-[8px] tracking-[1px] uppercase text-foreground-muted transition-colors cursor-pointer ${
                      i === 0
                        ? "border-accent"
                        : "border-accent/[0.08] hover:border-accent"
                    }`}
                  >
                    {label}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right — Product Info */}
            <motion.div initial="hidden" animate="visible" variants={slideInRight} className="pt-5">
              <p className="mb-3 text-[11px] font-normal tracking-[4px] uppercase text-accent">
                {isSoldOut
                  ? `The Original — Since ${c.year}`
                  : "Limited Edition — 20 Pieces"}
              </p>
              <h1 className="font-serif text-[clamp(36px,4vw,52px)] font-light text-foreground">
                {c.name}
              </h1>
              <p className="mt-4 font-serif text-xl font-light italic leading-snug text-accent-hover">
                &ldquo;{c.hook}&rdquo;
              </p>
              <p className="mt-6 text-[15px] font-light leading-[1.75] text-foreground-muted">
                {c.description}
              </p>

              {/* Designer's Note */}
              <div className="mt-8 border-l-2 border-accent bg-accent/[0.04] py-6 pl-7 pr-6">
                <p className="mb-2.5 text-[10px] font-medium tracking-[3px] uppercase text-accent">
                  Designer&apos;s Note
                </p>
                <p className="font-serif text-[15px] font-light italic leading-[1.7] text-foreground">
                  &ldquo;{c.designerNote}&rdquo;
                </p>
                <p className="mt-2.5 text-xs font-normal text-foreground-muted">
                  — Kevin Pedral, Stockholm
                </p>
              </div>

              {/* Scarcity + Price + CTA */}
              <div className="mt-8">
                <ScarcityBar stock={c.stock} maxStock={c.maxStock} edition={c.edition} />

                <div className="mt-6 flex items-end gap-3.5">
                  <span className="text-[30px] font-normal tracking-[1px] text-foreground">
                    €{c.price.toLocaleString()}
                  </span>
                  <span className="mb-1 text-xs font-light text-foreground-muted">
                    {isSoldOut ? "Edition closed" : "Shipping calculated at checkout"}
                  </span>
                </div>

                {isSoldOut ? (
                  <button className="mt-5 block w-full rounded-[2px] border border-white/10 bg-white/5 py-[18px] text-center font-sans text-xs font-medium tracking-[4px] uppercase text-foreground-muted cursor-default">
                    Edition Sold Out — Join Waitlist
                  </button>
                ) : (
                  <button className="mt-5 block w-full rounded-[2px] bg-accent py-[18px] text-center font-sans text-xs font-medium tracking-[4px] uppercase text-background transition-colors hover:bg-accent-hover cursor-pointer">
                    Reserve Your {c.name}
                  </button>
                )}
                <p className="mt-2.5 text-center text-xs font-light leading-relaxed text-foreground-muted">
                  {isSoldOut
                    ? "Be notified if a future edition is released"
                    : "Ships within 4–6 weeks · 12-month international warranty"}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="border-t border-accent/[0.06] bg-background-alt py-20">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="mb-12 text-center">
            <p className="mb-3.5 text-[11px] font-normal tracking-[4px] uppercase text-accent">
              Specifications
            </p>
            <h2 className="font-serif text-[clamp(32px,3.5vw,48px)] font-light text-foreground">
              The Details That Matter
            </h2>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3"
          >
            {specEntries.map(([label, value]) => (
              <motion.div
                key={label}
                variants={fadeInUp}
                className="-mt-px -ml-px border border-accent/[0.06] p-8"
              >
                <p className="mb-2 text-[10px] font-medium tracking-[2.5px] uppercase text-accent">
                  {label.replace(/([A-Z])/g, " $1").trim()}
                </p>
                <p className="text-sm font-light leading-snug text-foreground">{value}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* What's in the Box */}
          {c.boxContents.length > 0 && (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mt-12 border border-accent/[0.06] bg-accent/[0.02] px-8 py-12 md:px-16"
            >
              <p className="mb-5 text-center text-[11px] font-medium tracking-[3px] uppercase text-accent">
                What&apos;s in the Box
              </p>
              <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
                {c.boxContents.map((item) => (
                  <span
                    key={item}
                    className="flex items-center gap-2 text-[13px] font-light text-foreground-muted"
                  >
                    <span className="text-[7px] text-accent">✦</span>
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Value Anchor */}
      {c.valueAnchor && (
        <section className="border-y border-accent/[0.06] bg-background-alt py-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mx-auto max-w-[800px] px-6 text-center md:px-12"
          >
            <p className="text-sm font-light leading-[1.7] text-foreground-muted">
              {c.valueAnchor}
            </p>
          </motion.div>
        </section>
      )}

      <Newsletter />
    </>
  );
}
