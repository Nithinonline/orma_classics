"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Animate on mount — use for above-the-fold content (Hero). */
  eager?: boolean;
};

/**
 * CSS-driven reveal. Eager content animates as soon as the stylesheet loads
 * (no wait for React hydration). Scroll reveals stay visible in SSR so slow
 * devices never sit on blank content waiting for JS.
 */
export default function Reveal({
  children,
  className = "",
  delay = 0,
  eager = false,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  // "armed" = below-fold and ready to animate in; until then content stays visible
  const [armed, setArmed] = useState(false);
  const [visible, setVisible] = useState(eager);

  useEffect(() => {
    if (eager) return;

    const el = ref.current;
    if (!el) return;

    const show = () => setVisible(true);

    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    const nearViewport = rect.top < vh * 1.05 && rect.bottom > -vh * 0.15;

    if (nearViewport) {
      show();
      return;
    }

    // Arm fallback first so a missing IntersectionObserver never leaves content hidden.
    const fallback = window.setTimeout(show, 1200);
    setArmed(true);

    if (typeof IntersectionObserver === "undefined") {
      return () => window.clearTimeout(fallback);
    }

    let io: IntersectionObserver | null = null;
    try {
      io = new IntersectionObserver(
        ([entry]) => {
          if (entry?.isIntersecting) {
            show();
            io?.disconnect();
          }
        },
        { threshold: 0.05, rootMargin: "0px 0px 120px 0px" },
      );
      io.observe(el);
    } catch {
      show();
    }

    return () => {
      io?.disconnect();
      window.clearTimeout(fallback);
    };
  }, [eager]);

  const delayStyle =
    delay > 0 ? ({ animationDelay: `${delay}s` } as const) : undefined;

  if (eager) {
    return (
      <div className={`anim-fade-up ${className}`} style={delayStyle}>
        {children}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={`reveal ${armed && !visible ? "reveal-armed" : ""} ${
        visible ? "reveal-visible" : ""
      } ${className}`}
      style={delayStyle}
    >
      {children}
    </div>
  );
}
