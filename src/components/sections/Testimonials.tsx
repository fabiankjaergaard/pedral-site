"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const testimonials = [
  {
    quote:
      "I've got watches people recognise immediately. This one they don't. That's what starts the conversation. Someone will go 'what is that?' and then you're talking for twenty minutes.",
    author: "Swen A.",
    detail: "Architect · Hamburg · Collector since 2022",
  },
  {
    quote:
      "Before I ordered, I had a few questions about the strap width. I emailed Kevin and he called me back the same afternoon. We ended up talking for half an hour. About the watch, about design, about everything. Try getting that from Tissot or Longines.",
    author: "David M.",
    detail: "Creative Director · Brussels · Triomphe owner",
  },
  {
    quote:
      "I own blue dials from the usual names. The Émeraude Vert is different. The photos really don't do it justice. On the wrist, in actual light, it has this depth that surprised me.",
    author: "Anthony A.",
    detail: "Artist · France",
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
          className="grid gap-8 md:grid-cols-3"
        >
          {testimonials.map((t) => (
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
        </motion.div>
      </div>
    </section>
  );
}
