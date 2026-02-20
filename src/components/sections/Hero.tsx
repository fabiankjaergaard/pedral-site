"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-background">
      {/* Background gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(0,56,56,0.6)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_80%,rgba(201,168,76,0.04)_0%,transparent_50%)]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 py-24 md:px-12">
        <div className="grid items-center gap-16 md:grid-cols-2 md:gap-20">
          {/* Left — Text */}
          <div className="max-w-[560px]">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6 text-[11px] font-normal tracking-[4px] uppercase text-accent"
            >
              Limited Edition — Stockholm
            </motion.p>

            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="font-serif text-[clamp(40px,4.5vw,64px)] font-light leading-[1.12] text-foreground"
              >
                Designed by <em className="italic text-accent-hover">one person.</em>
                <br />
                Owned by twenty.
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="mt-6 max-w-[460px] text-[15px] font-light leading-[1.75] text-foreground-muted"
            >
              Limited-edition watches from Stockholm. Each collection: 20 pieces
              per colourway. When they&apos;re gone, they&apos;re gone.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="mt-10 flex flex-wrap items-center gap-5"
            >
              <Button href="/collections" variant="primary">
                Explore the Collection
              </Button>
              <Button href="/story" variant="outline">
                Meet the Maker &rarr;
              </Button>
            </motion.div>
          </div>

          {/* Right — Hero image placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="hidden items-center justify-center md:flex"
          >
            <div className="flex aspect-[5/6] w-full max-w-[400px] flex-col items-center justify-center rounded-[4px] border border-accent/10 bg-[linear-gradient(145deg,rgba(201,168,76,0.05),rgba(0,56,56,0.25))]">
              <span className="mb-2 font-serif text-[40px] text-accent/20">
                ✦
              </span>
              <span className="text-[11px] tracking-[2px] uppercase text-foreground-muted">
                Hero Watch
              </span>
              <span className="text-[11px] tracking-[2px] uppercase text-foreground-muted">
                Lifestyle Shot
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
