"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const testimonials = [
  {
    quote:
      "The moment someone asks 'what watch is that?' — that's the entire point. Nobody recognizes it. Everyone wants to know more.",
    author: "Thomas K.",
    detail: "Germany — Artefact owner",
  },
  {
    quote:
      "I didn't buy a watch. I backed a designer. Kevin's story, the rejection, teaching himself — that's what's on my wrist.",
    author: "Marc L.",
    detail: "France — Triomphe owner",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-background-alt py-24 md:py-[120px]">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="mb-14 text-center">
          <p className="mb-3.5 text-[11px] font-normal tracking-[4px] uppercase text-accent">
            From the Collection
          </p>
          <h2 className="font-serif text-[clamp(32px,3.5vw,48px)] font-light text-foreground">
            What Owners Say
          </h2>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid gap-8 md:grid-cols-2"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.author}
              variants={fadeInUp}
              className="relative border border-accent/[0.06] bg-background p-10"
            >
              {/* Large quote mark */}
              <span className="absolute left-7 top-3 font-serif text-[72px] leading-none text-accent/10">
                &ldquo;
              </span>
              <p className="relative z-10 mb-5 font-serif text-lg font-light italic leading-relaxed text-foreground">
                {t.quote}
              </p>
              <p className="text-[11px] font-normal tracking-[2px] uppercase text-accent">
                {t.author}
              </p>
              <p className="mt-1 text-[11px] font-light text-foreground-muted">
                {t.detail}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
