"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

interface StatProps {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  delay: number;
}

function AnimatedStat({ value, prefix = "", suffix = "", label, delay }: StatProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const timeout = setTimeout(() => {
      const duration = 2000;
      const startTime = performance.now();
      const step = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.round(eased * value));
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, delay);
    return () => clearTimeout(timeout);
  }, [isInView, value, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: delay / 1000 }}
      className="text-center"
    >
      <div className="font-serif text-5xl font-light tracking-tight text-foreground md:text-6xl">
        {prefix}
        {count}
        {suffix}
      </div>
      <p className="mt-3 text-xs font-semibold tracking-[0.2em] uppercase text-foreground-muted">
        {label}
      </p>
    </motion.div>
  );
}

const stats = [
  { value: 2015, label: "Founded", delay: 0 },
  { value: 6, label: "Collections", delay: 200 },
  { value: 20, prefix: "≤", label: "Per Colorway", delay: 400 },
  { value: 30, suffix: "+", label: "Countries", delay: 600 },
];

export default function Numbers() {
  return (
    <section className="border-y border-border bg-background py-20 md:py-28">
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-12 px-6 md:grid-cols-4 md:gap-8 md:px-12">
        {stats.map((stat) => (
          <AnimatedStat key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  );
}
