"use client";

import {
  motion,
  useAnimation,
  useInView,
  useReducedMotion,
} from "framer-motion";
import { useEffect, useRef, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Animate on mount — use for above-the-fold content (Hero). */
  eager?: boolean;
};

export default function Reveal({
  children,
  className = "",
  delay = 0,
  eager = false,
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  // Low amount + positive bottom margin: fire earlier and avoid Safari misses
  // inside overflow-hidden ancestors (common with whileInView alone).
  const isInView = useInView(ref, {
    once: true,
    amount: 0.05,
    margin: "0px 0px 120px 0px",
  });

  useEffect(() => {
    if (reduceMotion) return;

    if (eager || isInView) {
      void controls.start("visible");
      return;
    }

    // iOS Safari: IntersectionObserver can miss on first paint / clipped parents.
    // Never leave content stuck at opacity 0 — force visible after a short wait
    // only if the element is already near the viewport.
    const timer = window.setTimeout(() => {
      const el = ref.current;
      if (!el) {
        void controls.start("visible");
        return;
      }

      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const nearViewport = rect.top < vh * 1.35 && rect.bottom > -vh * 0.35;

      if (nearViewport) {
        void controls.start("visible");
      }
    }, 900);

    return () => window.clearTimeout(timer);
  }, [controls, eager, isInView, reduceMotion]);

  // Final safety: anything still hidden after scroll IO failures becomes visible.
  useEffect(() => {
    if (reduceMotion || eager) return;

    const timer = window.setTimeout(() => {
      void controls.start("visible");
    }, 2800);

    return () => window.clearTimeout(timer);
  }, [controls, eager, reduceMotion]);

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
