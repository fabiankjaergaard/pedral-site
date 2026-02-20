"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const reasons = [
  {
    num: "01",
    title: "One Designer",
    desc: "Every watch is designed by Kevin Pedral in Stockholm. Not a committee. Not a marketing department. One person, one vision.",
  },
  {
    num: "02",
    title: "Punching Above",
    desc: "Sellita & Miyota movements. HV1200 scratch-resistant coating. Sapphire crystal with Super-AR. The spec sheet reads like a €3,000 watch.",
  },
  {
    num: "03",
    title: "Radically Limited",
    desc: "Maximum 20 pieces per colourway. No restocks. No extensions. When an edition closes, it's closed forever.",
  },
];

export default function WhyPedral() {
  return (
    <section className="bg-background py-28 md:py-[120px]">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="mb-16 text-center">
          <p className="mb-3.5 text-[11px] font-normal tracking-[4px] uppercase text-accent">
            Why Pedral
          </p>
          <h2 className="font-serif text-[clamp(32px,3.5vw,48px)] font-light text-foreground">
            What Makes This Different
          </h2>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid gap-14 md:grid-cols-3"
        >
          {reasons.map((r) => (
            <motion.div
              key={r.num}
              variants={fadeInUp}
              className="border-t border-accent/[0.12] pt-9"
            >
              <span className="font-serif text-[44px] font-light text-accent/20">
                {r.num}
              </span>
              <h3 className="mt-4 font-serif text-[22px] font-normal text-foreground">
                {r.title}
              </h3>
              <p className="mt-3.5 text-sm font-light leading-[1.75] text-foreground-muted">
                {r.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
