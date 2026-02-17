"use client";

import { motion } from "framer-motion";
import { fadeInUp, slideInLeft, slideInRight, staggerContainer } from "@/lib/animations";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

const timeline = [
  {
    year: "2015",
    title: "The Beginning",
    text: "Kevin Pedral, rejected by Sweden's only watchmaking school, decides to teach himself. The Okapi is born — a 37mm cushion case that defines the brand.",
  },
  {
    year: "2017",
    title: "First Collectors",
    text: "Word spreads through watch forums and social media. Collectors in 10+ countries begin seeking out Pedral's limited runs.",
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
        <div className="pointer-events-none absolute -right-20 top-1/2 -translate-y-1/2 font-serif text-[30vw] font-bold leading-none text-border/30 select-none">
          S
        </div>
        <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 md:px-12">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={fadeInUp}>
              <SectionLabel>Our Story</SectionLabel>
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="mt-6 max-w-3xl font-serif text-5xl font-light leading-tight tracking-tight md:text-7xl"
            >
              Built On
              <br />
              <span className="italic text-accent">Conviction</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="mt-8 max-w-lg text-lg leading-relaxed text-foreground-muted"
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
              className="relative aspect-[3/4] overflow-hidden bg-border/30"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-8xl font-light text-border">K</span>
              </div>
              <div className="absolute inset-4 border border-accent-warm/20" />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideInRight}
            >
              <SectionLabel>The Founder</SectionLabel>
              <h2 className="mt-6 font-serif text-4xl font-light leading-tight tracking-tight md:text-5xl">
                Kevin Pedral
              </h2>
              <div className="mt-8 space-y-4 text-base leading-relaxed text-foreground-muted">
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
            <SectionLabel className="justify-center">Timeline</SectionLabel>
            <h2 className="mt-6 font-serif text-4xl font-light tracking-tight md:text-5xl">
              The Journey <span className="italic text-accent">So Far</span>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Center line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border md:left-1/2" />

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
                  <div className="absolute left-8 top-2 z-10 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-accent-warm bg-background md:left-1/2" />

                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                    <span className="font-serif text-3xl font-light text-accent-warm">{item.year}</span>
                    <h3 className="mt-2 font-serif text-2xl font-medium tracking-wide">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-foreground-muted">{item.text}</p>
                  </div>

                  {/* Spacer for alternation */}
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-teal py-28 grain md:py-40">
        <div className="relative z-10 mx-auto max-w-2xl px-6 text-center md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="font-serif text-4xl font-light tracking-tight md:text-5xl">
              Ready To <span className="italic text-accent">Choose</span>?
            </h2>
            <p className="mt-6 text-base leading-relaxed text-foreground-muted">
              Explore our collections and find the timepiece that speaks to you.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button href="/collections" variant="primary">
                View Collections
              </Button>
              <Button
                href="https://shop.pedral.eu"
                variant="ghost"
                external
              >
                Visit Boutique &rarr;
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
