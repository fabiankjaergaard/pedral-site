"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden bg-background pb-20 pt-32 md:items-center md:pb-0 md:pt-0">
      {/* Background decorative elements */}
      <div className="pointer-events-none absolute inset-0">
        {/* Large faded letter */}
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 font-serif text-[40vw] font-bold leading-none text-border/40 select-none">
          P
        </div>
        {/* Subtle horizontal line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute left-0 top-1/2 h-px w-full origin-left bg-border/60"
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 md:px-12">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 flex items-center gap-4"
          >
            <span className="h-px w-12 bg-accent-warm" />
            <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-accent-warm">
              Stockholm &mdash; Since 2015
            </span>
          </motion.div>

          {/* Main headline */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="font-serif text-[clamp(3rem,8vw,8rem)] font-light leading-[0.95] tracking-tight text-foreground"
            >
              Not For
              <br />
              <span className="italic text-accent">Everyone</span>
            </motion.h1>
          </div>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-8 max-w-lg text-base leading-relaxed text-foreground-muted md:text-lg"
          >
            Limited edition timepieces that blend retro-futurism with the minimalist
            essence of Scandinavian design. No more than 20 pieces per colorway.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Button href="/collections" variant="primary">
              Explore Collections
            </Button>
            <Button href="/story" variant="ghost">
              Our Story &rarr;
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-foreground-muted">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="h-8 w-px bg-foreground-muted/50"
        />
      </motion.div>
    </section>
  );
}
