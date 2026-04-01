"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import Link from "next/link";

const upcoming = [
  {
    label: "New Concept",
    title: "The Field Watch.",
    desc: "A utility piece built around the Pedral design language. Same uncompromising approach. Different purpose.",
    eta: "In development",
  },
  {
    label: "Triomphe",
    title: "Next dial edition.",
    desc: "A new expression of the Triomphe architecture. Details to follow. Allocation-based, as always.",
    eta: "Coming 2026",
  },
];

export default function ComingSoon() {
  return (
    <section className="bg-background-alt py-16 md:py-24 lg:py-[120px]">
      <div className="mx-auto max-w-[1100px] px-6 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          <motion.p
            variants={fadeInUp}
            className="mb-3.5 text-[11px] font-normal tracking-[4px] uppercase text-accent"
          >
            Coming
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="font-serif text-[clamp(32px,3.5vw,48px)] font-light text-foreground"
          >
            What&apos;s next from the studio.
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            className="mt-12 grid gap-6 sm:grid-cols-2"
          >
            {upcoming.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                className="flex flex-col justify-between rounded-lg border border-accent/[0.08] bg-background p-8 md:p-10"
              >
                <div>
                  <p className="mb-3 text-[10px] font-normal tracking-[3px] uppercase text-accent/60">
                    {item.label}
                  </p>
                  <h3 className="font-serif text-[26px] font-light text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-[15px] font-light leading-[1.85] text-foreground-muted">
                    {item.desc}
                  </p>
                </div>
                <p className="mt-8 text-[11px] font-normal tracking-[2px] uppercase text-accent">
                  {item.eta}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-12 border-t border-accent/[0.08] pt-10">
            <p className="text-[15px] font-light leading-[1.85] text-foreground-muted">
              Collectors on the list hear first — before any public announcement.
            </p>
            <Link
              href="/#newsletter"
              className="mt-5 inline-flex items-center gap-2 text-[12px] font-medium tracking-[2px] uppercase text-accent transition-colors hover:text-accent-hover"
            >
              Join the list &rarr;
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
