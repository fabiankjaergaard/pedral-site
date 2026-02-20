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
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mx-auto mt-7 flex max-w-[420px]"
          >
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 border border-accent/[0.15] border-r-0 bg-background-alt px-4 py-3.5 font-sans text-[13px] text-foreground outline-none placeholder:text-foreground-muted focus:border-accent"
            />
            <button
              type="submit"
              className="whitespace-nowrap border border-accent bg-accent px-6 py-3.5 font-sans text-[11px] font-medium tracking-[2px] uppercase text-background transition-colors hover:bg-accent-hover"
            >
              Join
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
