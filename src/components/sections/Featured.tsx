"use client";

import { motion } from "framer-motion";
import { fadeInUp, slideInLeft, slideInRight } from "@/lib/animations";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

export default function Featured() {
  return (
    <section className="relative overflow-hidden bg-teal py-28 text-foreground grain md:py-40">
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="grid items-center gap-16 md:grid-cols-2 md:gap-24">
          {/* Left — Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInLeft}
            className="relative order-2 md:order-1"
          >
            <div className="relative aspect-square overflow-hidden bg-teal-light">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-[10rem] font-light text-border/50">T</span>
              </div>
            </div>
            {/* Accent corner */}
            <div className="absolute -right-3 -top-3 h-20 w-20 border-r-2 border-t-2 border-accent-warm/30" />
          </motion.div>

          {/* Right — Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInRight}
            className="order-1 md:order-2"
          >
            <SectionLabel className="[&_span]:text-accent-warm [&_.h-px]:bg-accent-warm">
              Featured
            </SectionLabel>
            <h2 className="mt-6 font-serif text-4xl font-light leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Triomphe
            </h2>
            <p className="mt-2 font-serif text-xl italic text-foreground-muted">Almost gone</p>
            <p className="mt-8 max-w-md text-base leading-relaxed text-foreground-muted">
              A seamless 37–38mm form with coin-edge detailing and Swiss hand-wound movement.
              Available with Roman, Hebrew, or Eastern Arabic numerals — or a rare Pietersite
              stone dial. Each one, a triumph of conviction.
            </p>
            <div className="mt-6 space-y-2">
              {[
                ["Movement", "Swiss Hand-wound"],
                ["Case", "37.5mm Stainless Steel"],
                ["Crystal", "Sapphire with AR"],
              ].map(([label, value]) => (
                <div key={label} className="flex items-center gap-4">
                  <span className="text-xs font-semibold tracking-[0.15em] uppercase text-accent-warm">
                    {label}
                  </span>
                  <span className="h-px flex-1 bg-border-teal" />
                  <span className="text-sm text-foreground-muted">{value}</span>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <Button
                href="/collections/triomphe"
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-background"
              >
                Discover Triomphe
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
