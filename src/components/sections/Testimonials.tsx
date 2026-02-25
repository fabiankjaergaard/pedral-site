"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const testimonials = [
  {
    quote:
      "It isn't widely recognised. I prefer that. The conversations it starts are based on curiosity, not branding.",
    author: "Marcus E.",
    detail: "Architect · Berlin — Collector since 2022",
  },
  {
    quote:
      "The Maestro reflects a clear design position. The diagonal display and tonneau architecture are resolved decisions. With time, the logic becomes evident.",
    author: "Adrien L.",
    detail: "Investment Analyst · Lyon — Maestro Owner",
  },
  {
    quote:
      "The Triomphe demonstrates disciplined execution. The guilloché has depth and consistency. The restraint in production is apparent.",
    author: "Dr. Kenji N.",
    detail: "Surgeon & Watch Collector · Tokyo — 40+ Piece Collection",
  },
  {
    quote:
      "I already own blue-dial pieces from established houses. The green felt more deliberate. The texture gives it structure rather than novelty.",
    author: "Anthony A.",
    detail: "Artist · France",
  },
  {
    quote:
      "At 8.8mm, the Triomphe sits close to the wrist and maintains its balance on a slimmer hand. The proportions are disciplined. It feels neither overtly masculine nor feminine.",
    author: "Elena V.",
    detail: "Creative Director · Milan — Collector since 2023",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-background-alt py-16 md:py-24 lg:py-[120px]">
      <div className="mx-auto max-w-[1000px] px-6 md:px-12">
        <div className="mb-10 text-center md:mb-14">
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
          className="flex flex-col gap-8"
        >
          <div className="grid gap-8 md:grid-cols-2">
            {testimonials.slice(0, 4).map((t) => (
              <motion.div
                key={t.author}
                variants={fadeInUp}
                className="relative border-l-2 border-accent/20 py-2 pl-5 sm:pl-8"
              >
                <p className="mb-4 font-serif text-[17px] font-light italic leading-[1.6] text-foreground">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="text-[12px] font-normal tracking-[1.5px] text-accent">
                  {t.author}
                </p>
                <p className="mt-0.5 text-[11px] font-light text-foreground-muted">
                  {t.detail}
                </p>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center">
            <motion.div
              variants={fadeInUp}
              className="relative w-full border-l-2 border-accent/20 py-2 pl-5 sm:pl-8 md:max-w-[calc(50%-16px)]"
            >
              <p className="mb-4 font-serif text-[17px] font-light italic leading-[1.6] text-foreground">
                &ldquo;{testimonials[4].quote}&rdquo;
              </p>
              <p className="text-[12px] font-normal tracking-[1.5px] text-accent">
                {testimonials[4].author}
              </p>
              <p className="mt-0.5 text-[11px] font-light text-foreground-muted">
                {testimonials[4].detail}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
