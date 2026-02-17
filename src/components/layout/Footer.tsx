"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

export default function Footer() {
  return (
    <footer className="border-t border-border-teal bg-teal">
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
          className="grid gap-16 md:grid-cols-4"
        >
          {/* Brand */}
          <div className="md:col-span-1">
            <span className="font-serif text-2xl font-semibold tracking-[0.15em] uppercase text-foreground">
              Pedral
            </span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-foreground-muted">
              Stockholm-based watch microbrand. Limited editions, unlimited conviction. Since 2015.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-5 text-xs font-semibold tracking-[0.2em] uppercase text-foreground-muted">
              Navigate
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/collections", label: "Collections" },
                { href: "/story", label: "Our Story" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://shop.pedral.eu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground transition-colors hover:text-accent"
                >
                  Online Boutique
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-5 text-xs font-semibold tracking-[0.2em] uppercase text-foreground-muted">
              Follow
            </h4>
            <ul className="space-y-3">
              {[
                { href: "https://instagram.com/pedralwatches", label: "Instagram" },
                { href: "https://facebook.com/pedralwatches", label: "Facebook" },
                { href: "https://youtube.com/@pedralwatches", label: "YouTube" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-foreground transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-5 text-xs font-semibold tracking-[0.2em] uppercase text-foreground-muted">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="text-sm text-foreground">info@pedral.eu</li>
              <li className="text-sm text-foreground-muted">Stockholm, Sweden</li>
            </ul>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border-teal pt-8 md:flex-row">
          <p className="text-xs text-foreground-muted">
            &copy; {new Date().getFullYear()} Pedral Watches. All rights reserved.
          </p>
          <p className="text-xs italic text-foreground-muted">Not For Everyone</p>
        </div>
      </div>
    </footer>
  );
}
