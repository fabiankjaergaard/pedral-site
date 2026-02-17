"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className={`flex items-center gap-4 ${className}`}
    >
      <span className="h-px w-8 bg-accent-warm" />
      <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-accent-warm">
        {children}
      </span>
    </motion.div>
  );
}
