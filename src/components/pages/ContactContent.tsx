"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp, slideInLeft, slideInRight, staggerContainer } from "@/lib/animations";

export default function ContactContent() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-background pb-16 pt-32 md:pt-36">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(0,56,56,0.4)_0%,transparent_60%)]" />
        <div className="relative z-10 mx-auto max-w-[1400px] px-6 text-center md:px-12">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.p
              variants={fadeInUp}
              className="mb-3.5 text-[11px] font-normal tracking-[4px] uppercase text-accent"
            >
              Contact
            </motion.p>
            <motion.h1
              variants={fadeInUp}
              className="font-serif text-[clamp(40px,5vw,60px)] font-light text-foreground"
            >
              Get In <em className="italic text-accent-hover">Touch</em>
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
                    <p className="mt-3 text-sm font-light text-foreground-muted">
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
                      <label className="mb-2 block text-[10px] font-medium tracking-[2.5px] uppercase text-foreground-muted">
                        Name
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full border-b border-accent/[0.15] bg-transparent py-3 text-[15px] font-light text-foreground outline-none transition-colors focus:border-accent placeholder:text-foreground-muted/50"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-[10px] font-medium tracking-[2.5px] uppercase text-foreground-muted">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full border-b border-accent/[0.15] bg-transparent py-3 text-[15px] font-light text-foreground outline-none transition-colors focus:border-accent placeholder:text-foreground-muted/50"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-2 block text-[10px] font-medium tracking-[2.5px] uppercase text-foreground-muted">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full border-b border-accent/[0.15] bg-transparent py-3 text-[15px] font-light text-foreground outline-none transition-colors focus:border-accent placeholder:text-foreground-muted/50"
                      placeholder="What's this about?"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-[10px] font-medium tracking-[2.5px] uppercase text-foreground-muted">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      className="w-full resize-none border-b border-accent/[0.15] bg-transparent py-3 text-[15px] font-light text-foreground outline-none transition-colors focus:border-accent placeholder:text-foreground-muted/50"
                      placeholder="Tell us more..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-accent px-9 py-4 text-[11px] font-medium tracking-[3px] uppercase text-background transition-all hover:bg-accent-hover cursor-pointer"
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
                  <h3 className="text-[10px] font-medium tracking-[2.5px] uppercase text-accent">
                    Email
                  </h3>
                  <a
                    href="mailto:info@pedral.eu"
                    className="mt-2 block font-serif text-xl font-light text-foreground transition-colors hover:text-accent"
                  >
                    info@pedral.eu
                  </a>
                </div>
                <div>
                  <h3 className="text-[10px] font-medium tracking-[2.5px] uppercase text-accent">
                    Location
                  </h3>
                  <p className="mt-2 font-serif text-xl font-light text-foreground">
                    Stockholm, Sweden
                  </p>
                </div>
                <div>
                  <h3 className="text-[10px] font-medium tracking-[2.5px] uppercase text-accent">
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
                        className="text-sm font-light text-foreground transition-colors hover:text-accent"
                      >
                        {link.label} &rarr;
                      </a>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-[10px] font-medium tracking-[2.5px] uppercase text-accent">
                    Shop
                  </h3>
                  <a
                    href="https://shop.pedral.eu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 block font-serif text-xl font-light text-foreground transition-colors hover:text-accent"
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
