"use client";

import { motion } from "framer-motion";
import { fadeInUp, slideInLeft, slideInRight, staggerContainer } from "@/lib/animations";
import Button from "@/components/ui/Button";
import Testimonials from "@/components/sections/Testimonials";

const timeline = [
  {
    year: "2015",
    title: "The Beginning",
    text: "Kevin Pedral applied to Sweden's only watchmaking school. Born in the Democratic Republic of Congo, raised in Stockholm — he didn't have the background they expected. The rejection letter was polite. Kevin's response was a decade of work.",
  },
  {
    year: "2017",
    title: "First Collectors",
    text: "Word spreads through watch forums and social media. Collectors in 10+ countries begin seeking out Pedral's limited runs. The Okapi cushion case earns its first cult following.",
  },
  {
    year: "2019",
    title: "The Artefact",
    text: "A bold step into integrated bracelets and natural stone dials. The Artefact proves Pedral can evolve without losing its soul.",
  },
  {
    year: "2021",
    title: "Maestro Launches",
    text: "The refined tonneau dress watch with hexagonal bracelet links. A quieter statement that speaks volumes about craftsmanship.",
  },
  {
    year: "2023",
    title: "Triomphe Arrives",
    text: "Swiss hand-wound movement meets coin-edge detailing. Hebrew, Eastern Arabic, and Pietersite stone dial variants push boundaries further.",
  },
  {
    year: "2024",
    title: "One-Eighty & Grand Feu",
    text: "The pinnacle so far — Grand Feu enamel dials produced by master artisans. 34mm of pure, elemental watchmaking.",
  },
];

export default function StoryContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-end overflow-hidden bg-background pb-20 pt-40">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(0,56,56,0.4)_0%,transparent_60%)]" />
        <div className="pointer-events-none absolute -right-20 top-1/2 -translate-y-1/2 font-serif text-[30vw] font-bold leading-none text-accent/[0.03] select-none">
          S
        </div>
        <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 md:px-12">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.p
              variants={fadeInUp}
              className="mb-4 text-[11px] font-normal tracking-[4px] uppercase text-accent"
            >
              Brand Story
            </motion.p>
            <motion.h1
              variants={fadeInUp}
              className="mt-6 max-w-3xl font-serif text-[clamp(40px,5vw,72px)] font-light leading-tight text-foreground"
            >
              Built On
              <br />
              <em className="italic text-accent-hover">Conviction</em>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="mt-8 max-w-lg text-base font-light leading-[1.75] text-foreground-muted"
            >
              The story of a self-taught watchmaker from Stockholm who turned
              rejection into a brand found in 30+ countries.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Founder section */}
      <section className="overflow-hidden bg-background-alt py-28 md:py-40">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="grid items-center gap-16 md:grid-cols-2 md:gap-24">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideInLeft}
              className="relative aspect-[3/4] overflow-hidden border border-accent/[0.08] bg-[linear-gradient(160deg,var(--background-alt),var(--surface))]"
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <span className="font-serif text-[100px] font-light text-accent/[0.08]">K</span>
                <span className="text-[11px] tracking-[2px] uppercase text-foreground-muted">
                  Kevin Pedral — Studio Portrait
                </span>
              </div>
              <div className="absolute inset-4 border border-accent/[0.08]" />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideInRight}
            >
              <p className="mb-4 text-[11px] font-normal tracking-[4px] uppercase text-accent">
                The Founder
              </p>
              <h2 className="mt-6 font-serif text-[clamp(32px,4vw,52px)] font-light text-foreground">
                Kevin Pedral
              </h2>
              <div className="mt-8 space-y-4 text-[15px] font-light leading-[1.75] text-foreground-muted">
                <p>
                  When Sweden&apos;s only watchmaking school said no, Kevin didn&apos;t stop.
                  He started. Armed with nothing but conviction and an obsessive eye for
                  detail, he began designing watches in his Stockholm apartment.
                </p>
                <p>
                  His philosophy was simple: create timepieces that blur the line between
                  vintage warmth and modern precision. No mass production. No compromises.
                  Every colorway limited to 20 pieces.
                </p>
                <p>
                  Today, Pedral watches are found on wrists in over 30 countries — each
                  one chosen, not simply bought.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-background py-28 md:py-40">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-20 text-center"
          >
            <p className="mb-3.5 text-[11px] font-normal tracking-[4px] uppercase text-accent">
              Timeline
            </p>
            <h2 className="mt-6 font-serif text-[clamp(32px,4vw,52px)] font-light text-foreground">
              The Journey <em className="italic text-accent-hover">So Far</em>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Center line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-accent/[0.12] md:left-1/2" />

            <div className="space-y-16 md:space-y-24">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={fadeInUp}
                  className={`relative flex items-start gap-8 md:gap-16 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-8 top-2 z-10 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-accent bg-background md:left-1/2" />

                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                    <span className="font-serif text-[28px] font-light text-accent">{item.year}</span>
                    <h3 className="mt-2 font-serif text-2xl font-normal text-foreground">{item.title}</h3>
                    <p className="mt-3 text-sm font-light leading-[1.7] text-foreground-muted">{item.text}</p>
                  </div>

                  {/* Spacer for alternation */}
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Design Ethos */}
      <section className="border-y border-accent/[0.06] bg-background-alt py-20 md:py-28">
        <div className="mx-auto max-w-[800px] px-6 text-center md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <p className="mb-4 text-[11px] font-normal tracking-[4px] uppercase text-accent">
              Design Ethos
            </p>
            <p className="text-[15px] font-light leading-[1.8] text-foreground-muted">
              We don&apos;t follow trends; we follow conviction. Every Pedral watch is
              shaped by a singular vision, where each line earns its place and every
              detail serves the whole. Limited, deliberate, transparent.
            </p>
            <p className="mt-8 font-serif text-xl italic leading-snug text-foreground">
              &ldquo;Pedral is not made for everyone. It is made for those who already
              understand.&rdquo;
            </p>
          </motion.div>
        </div>
      </section>

      <Testimonials />

      {/* CTA */}
      <section className="bg-background py-24 md:py-[100px]">
        <div className="mx-auto max-w-2xl px-6 text-center md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="font-serif text-[clamp(32px,3.5vw,48px)] font-light text-foreground">
              Ready To <em className="italic text-accent-hover">Choose</em>?
            </h2>
            <p className="mt-4 text-[15px] font-light text-foreground-muted">
              Explore our collections and find the timepiece that speaks to you.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-5">
              <Button href="/collections" variant="primary">
                View Collections
              </Button>
              <Button href="https://shop.pedral.eu" variant="outline" external>
                Visit Boutique &rarr;
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
