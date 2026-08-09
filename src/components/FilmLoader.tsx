"use client";

import { useEffect, useState } from "react";

const MIN_MS = 480;
const MAX_MS = 1100;
const BOOT_KEY = "orma-boot";

function readBootFlag(): boolean {
  try {
    return Boolean(sessionStorage.getItem(BOOT_KEY));
  } catch {
    return false;
  }
}

function writeBootFlag() {
  try {
    sessionStorage.setItem(BOOT_KEY, "1");
  } catch {
    // Private mode / restricted WebViews may throw — ignore.
  }
}

/**
 * Short darkroom splash while the hero image decodes.
 * Once per session — does not wait for below-fold content.
 * CSS also auto-hides after ~2s so a JS crash never leaves the page blocked.
 */
export default function FilmLoader() {
  const [visible, setVisible] = useState(true);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    if (readBootFlag()) {
      setVisible(false);
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      writeBootFlag();
      setVisible(false);
      return;
    }

    const started = performance.now();
    let dismissed = false;
    let hero: HTMLImageElement | null = null;

    const dismiss = () => {
      if (dismissed) return;
      dismissed = true;
      writeBootFlag();

      const wait = Math.max(0, MIN_MS - (performance.now() - started));
      window.setTimeout(() => {
        setExiting(true);
        window.setTimeout(() => setVisible(false), 420);
      }, wait);
    };

    // Always arm the max timer first so storage / DOM issues can't leave us stuck.
    const maxTimer = window.setTimeout(dismiss, MAX_MS);

    try {
      hero = document.querySelector<HTMLImageElement>(
        'img[alt="Film loaded inside a vintage camera"]',
      );

      if (hero?.complete) {
        dismiss();
      } else if (hero) {
        hero.addEventListener("load", dismiss, { once: true });
        hero.addEventListener("error", dismiss, { once: true });
      } else {
        window.setTimeout(dismiss, MIN_MS);
      }
    } catch {
      dismiss();
    }

    return () => {
      window.clearTimeout(maxTimer);
      hero?.removeEventListener("load", dismiss);
      hero?.removeEventListener("error", dismiss);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`film-loader fixed inset-0 z-[110] flex flex-col items-center justify-center bg-[#060403] ${
        exiting ? "film-loader-exit" : ""
      }`}
      role="status"
      aria-live="polite"
      aria-label="Loading"
      suppressHydrationWarning
    >
      <div
        className="film-loader-grain pointer-events-none absolute inset-0 opacity-[0.06] bg-noise"
        aria-hidden
      />

      <p className="font-serif text-sm tracking-[0.35em] uppercase text-brand-paper/80 mb-10">
        Orma Classics
      </p>

      <div className="film-roll" aria-hidden>
        <div className="film-roll-edge film-roll-edge-left" />
        <div className="film-roll-strip">
          <div className="film-roll-track">
            {Array.from({ length: 16 }, (_, i) => (
              <div key={i} className="film-roll-frame">
                <span className="film-roll-frame-inner" />
              </div>
            ))}
          </div>
        </div>
        <div className="film-roll-edge film-roll-edge-right" />
      </div>

      <p className="mt-10 font-sans text-[0.62rem] tracking-[0.28em] uppercase text-brand-amber/70">
        Advancing roll…
      </p>
    </div>
  );
}
