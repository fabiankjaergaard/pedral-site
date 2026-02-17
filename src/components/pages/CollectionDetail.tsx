"use client";

import { motion } from "framer-motion";
import { fadeInUp, slideInLeft, slideInRight, staggerContainer } from "@/lib/animations";
import { Collection } from "@/lib/collections";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

export default function CollectionDetail({ collection }: { collection: Collection }) {
  const specs = Object.entries(collection.specs);

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[80vh] items-end overflow-hidden bg-background pb-20 pt-40">
        <div className="pointer-events-none absolute -right-20 top-1/2 -translate-y-1/2 font-serif text-[35vw] font-bold leading-none text-border/25 select-none">
          {collection.name[0]}
        </div>
        <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 md:px-12">
          <div className="grid items-end gap-16 md:grid-cols-2 md:gap-24">
            {/* Text */}
            <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
              <motion.div variants={fadeInUp}>
                <SectionLabel>
                  {collection.tier === "limited" ? "Limited Edition" : "Signature Collection"}
                </SectionLabel>
              </motion.div>
              <motion.h1
                variants={fadeInUp}
                className="mt-6 font-serif text-6xl font-light leading-tight tracking-tight md:text-8xl"
              >
                {collection.name}
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="mt-2 font-serif text-xl italic text-foreground-muted"
              >
                {collection.tagline}
              </motion.p>
              <motion.p
                variants={fadeInUp}
                className="mt-8 max-w-lg text-base leading-relaxed text-foreground-muted"
              >
                {collection.description}
              </motion.p>
              <motion.div variants={fadeInUp} className="mt-8">
                <Button href="https://shop.pedral.eu" variant="primary" external>
                  Shop Now
                </Button>
              </motion.div>
            </motion.div>

            {/* Image placeholder */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={slideInRight}
              className="relative aspect-square overflow-hidden bg-background-alt"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-[10rem] font-light text-border">
                  {collection.name[0]}
                </span>
              </div>
              <div className="absolute inset-6 border border-accent-warm/15" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="bg-background-alt py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-12"
          >
            <SectionLabel>Specifications</SectionLabel>
            <h2 className="mt-6 font-serif text-3xl font-light tracking-tight md:text-4xl">
              Technical <span className="italic text-accent">Details</span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3"
          >
            {specs.map(([key, value]) => (
              <motion.div
                key={key}
                variants={fadeInUp}
                className="bg-background-alt p-8"
              >
                <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-accent-warm">
                  {key.replace(/([A-Z])/g, " $1").trim()}
                </span>
                <p className="mt-2 font-serif text-lg text-foreground">{value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-teal py-24 grain md:py-32">
        <div className="relative z-10 mx-auto max-w-2xl px-6 text-center md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="font-serif text-4xl font-light tracking-tight md:text-5xl">
              Make It <span className="italic text-accent">Yours</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-foreground-muted">
              Limited to 20 pieces per colorway. Once they&apos;re gone, they&apos;re gone.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button
                href="https://shop.pedral.eu"
                variant="primary"
                external
              >
                Visit Boutique
              </Button>
              <Button href="/collections" variant="ghost">
                All Collections &rarr;
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
