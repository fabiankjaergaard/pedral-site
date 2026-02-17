"use client";

import { motion } from "framer-motion";
import { fadeInUp, slideInLeft, slideInRight } from "@/lib/animations";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

export default function Philosophy() {
  return (
    <section className="relative overflow-hidden bg-background-alt py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="grid items-center gap-16 md:grid-cols-2 md:gap-24">
          {/* Left — Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInLeft}
          >
            <SectionLabel>Philosophy</SectionLabel>
            <h2 className="mt-6 font-serif text-4xl font-light leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Different
              <br />
              <span className="italic text-accent">By Design</span>
            </h2>
            <p className="mt-8 max-w-md text-base leading-relaxed text-foreground-muted">
              Founded by Kevin Pedral in Stockholm, after being rejected by Sweden&apos;s only
              watchmaking school, he taught himself the craft. Since 2015, every collection
              has been produced in editions of no more than 20 pieces per colorway.
            </p>
            <p className="mt-4 max-w-md text-base leading-relaxed text-foreground-muted">
              Each timepiece is a statement of conviction — blending retro-futurism with
              the minimalist essence of Scandinavian design.
            </p>
            <div className="mt-10">
              <Button href="/story" variant="ghost">
                Read Our Story &rarr;
              </Button>
            </div>
          </motion.div>

          {/* Right — Image placeholder */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInRight}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-border/30">
              {/* Placeholder for brand image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-8xl font-light text-border">P</span>
              </div>
              {/* Decorative frame */}
              <div className="absolute inset-4 border border-accent-warm/20" />
            </div>
            {/* Floating label */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="absolute -bottom-6 -left-6 bg-surface px-6 py-4 shadow-lg md:-left-12"
            >
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent-warm">Est. 2015</p>
              <p className="mt-1 font-serif text-lg text-foreground">Stockholm, Sweden</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
