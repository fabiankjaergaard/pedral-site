"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import Button from "@/components/ui/Button";

export default function Newsletter() {
  return (
    <section className="bg-background-alt py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-serif text-4xl font-light tracking-tight md:text-5xl">
            Time Waits For
            <br />
            <span className="italic text-accent">No One</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-foreground-muted">
            New collections are announced exclusively through our mailing list.
            With editions limited to 20 pieces per colorway, being first matters.
          </p>
          <div className="mt-10">
            <Button href="https://shop.pedral.eu" variant="primary" external>
              Visit Online Boutique
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
