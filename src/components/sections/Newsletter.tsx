"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

export default function Newsletter() {
  return (
    <section className="bg-background py-24 md:py-[100px]">
      <div className="mx-auto max-w-[520px] px-6 text-center md:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="font-serif text-[34px] font-light text-foreground">
            Join 1,200+ collectors.
          </h2>
          <p className="mt-3.5 text-sm font-light text-foreground-muted">
            Be first when the next edition drops. No spam. Just watches.
          </p>

          <a
            href="mailto:info@pedral.eu?subject=Newsletter%20signup"
            className="mt-7 inline-block rounded-[2px] bg-accent px-9 py-4 text-[11px] font-medium tracking-[3px] uppercase text-background transition-all hover:bg-accent-hover"
          >
            Sign Up
          </a>
        </motion.div>
      </div>
    </section>
  );
}
