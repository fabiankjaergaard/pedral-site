"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp, slideInLeft, slideInRight, staggerContainer } from "@/lib/animations";
import SectionLabel from "@/components/ui/SectionLabel";

export default function ContactContent() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[50vh] items-end overflow-hidden bg-background pb-16 pt-40">
        <div className="pointer-events-none absolute -right-20 top-1/2 -translate-y-1/2 font-serif text-[30vw] font-bold leading-none text-border/30 select-none">
          &amp;
        </div>
        <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 md:px-12">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={fadeInUp}>
              <SectionLabel>Contact</SectionLabel>
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="mt-6 font-serif text-5xl font-light leading-tight tracking-tight md:text-7xl"
            >
              Get In <span className="italic text-accent">Touch</span>
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="overflow-hidden bg-background-alt py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="grid gap-16 md:grid-cols-5 md:gap-24">
            {/* Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInLeft}
              className="md:col-span-3"
            >
              {submitted ? (
                <div className="flex min-h-[400px] items-center justify-center">
                  <div className="text-center">
                    <p className="font-serif text-3xl font-light text-foreground">
                      Thank you
                    </p>
                    <p className="mt-3 text-sm text-foreground-muted">
                      We&apos;ll be in touch soon.
                    </p>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="space-y-8"
                >
                  <div className="grid gap-8 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-xs font-semibold tracking-[0.15em] uppercase text-foreground-muted">
                        Name
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full border-b border-border bg-transparent py-3 text-base text-foreground outline-none transition-colors focus:border-accent placeholder:text-foreground-muted/50"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-xs font-semibold tracking-[0.15em] uppercase text-foreground-muted">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full border-b border-border bg-transparent py-3 text-base text-foreground outline-none transition-colors focus:border-accent placeholder:text-foreground-muted/50"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-semibold tracking-[0.15em] uppercase text-foreground-muted">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full border-b border-border bg-transparent py-3 text-base text-foreground outline-none transition-colors focus:border-accent placeholder:text-foreground-muted/50"
                      placeholder="What's this about?"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-semibold tracking-[0.15em] uppercase text-foreground-muted">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      className="w-full resize-none border-b border-border bg-transparent py-3 text-base text-foreground outline-none transition-colors focus:border-accent placeholder:text-foreground-muted/50"
                      placeholder="Tell us more..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-accent px-10 py-4 text-xs font-semibold tracking-[0.2em] uppercase text-background transition-all hover:bg-accent-hover border border-accent hover:border-accent-hover"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>

            {/* Info sidebar */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInRight}
              className="md:col-span-2"
            >
              <div className="space-y-10">
                <div>
                  <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-accent-warm">
                    Email
                  </h3>
                  <a
                    href="mailto:info@pedral.eu"
                    className="mt-2 block font-serif text-xl text-foreground transition-colors hover:text-accent"
                  >
                    info@pedral.eu
                  </a>
                </div>
                <div>
                  <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-accent-warm">
                    Location
                  </h3>
                  <p className="mt-2 font-serif text-xl text-foreground">Stockholm, Sweden</p>
                </div>
                <div>
                  <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-accent-warm">
                    Follow
                  </h3>
                  <div className="mt-3 flex flex-col gap-2">
                    {[
                      { href: "https://instagram.com/pedralwatches", label: "Instagram" },
                      { href: "https://facebook.com/pedralwatches", label: "Facebook" },
                      { href: "https://youtube.com/@pedralwatches", label: "YouTube" },
                    ].map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-foreground transition-colors hover:text-accent"
                      >
                        {link.label} &rarr;
                      </a>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-accent-warm">
                    Shop
                  </h3>
                  <a
                    href="https://shop.pedral.eu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 block font-serif text-xl text-foreground transition-colors hover:text-accent"
                  >
                    shop.pedral.eu &rarr;
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
