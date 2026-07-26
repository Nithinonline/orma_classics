"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const whatsappHref =
  "https://wa.me/918301887465?text=Hi%20Orma%20Classics%2C%20I%20am%20interested%20in%20a%20film%20camera.";

const sections = ["story", "process", "collection", "journey", "contact"] as const;
type SectionId = (typeof sections)[number];

const navItems: {
  id: SectionId;
  label: string;
  href: string;
  frame: string;
  note: string;
}[] = [
  { id: "story", label: "Our Story", href: "/#story", frame: "01", note: "Origin" },
  { id: "process", label: "Process", href: "/#process", frame: "02", note: "Craft" },
  { id: "collection", label: "Cameras", href: "/cameras", frame: "03", note: "Bodies" },
  { id: "journey", label: "Film Journey", href: "/#journey", frame: "04", note: "Roll" },
  { id: "contact", label: "Contact", href: "/#contact", frame: "05", note: "Develop" },
];

function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 8.7 8.7 0 0 1-3.4-.7L3 21l1.8-5.3a8.2 8.2 0 0 1-.8-3.6 8.5 8.5 0 1 1 17-.6Z" />
      <path d="M8.8 9.1c.2-.5.4-.5.7-.5h.5c.2 0 .4.1.5.4l.7 1.6c.1.3 0 .5-.1.6l-.4.5c-.1.1-.2.3 0 .5.4.8 1.1 1.5 2 1.9.2.1.4.1.5-.1l.6-.7c.2-.2.4-.2.6-.1l1.6.8c.3.1.4.3.4.5 0 .5-.3 1.3-.8 1.5-.5.3-1.7.4-3.4-.5-2.1-1.1-3.5-2.9-4-4.4-.4-1.1-.1-1.7.1-2Z" />
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const isCamerasRoute =
    pathname === "/cameras" || pathname.startsWith("/cameras/");
  const [activeSection, setActiveSection] = useState<SectionId | "">(() =>
    isCamerasRoute ? "collection" : "",
  );
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (isCamerasRoute) {
      setActiveSection("collection");
      return;
    }

    const visible = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visible.set(entry.target.id, entry.intersectionRatio);
          } else {
            visible.delete(entry.target.id);
          }
        });

        let next: SectionId | "" = "";
        let bestRatio = -1;

        for (const id of sections) {
          const ratio = visible.get(id);
          if (ratio !== undefined && ratio >= bestRatio) {
            bestRatio = ratio;
            next = id;
          }
        }

        if (next) {
          setActiveSection(next);
        }
      },
      {
        rootMargin: "-40% 0px -40% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, [isCamerasRoute, pathname]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = () => {
      if (mq.matches) setMenuOpen(false);
    };
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  const selectSection = (id: SectionId | "") => {
    setActiveSection(id);
    setMenuOpen(false);
  };

  const duration = reduceMotion ? 0 : 0.5;
  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <>
      <nav className="fixed top-0 w-full z-40 bg-black/80 supports-[backdrop-filter]:bg-black/65 backdrop-blur-sm border-b border-brand-paper/10 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link
            href="/"
            onClick={() => selectSection("")}
            className="font-serif text-lg tracking-[0.2em] text-brand-paper hover:text-brand-amber transition-colors duration-500 uppercase"
          >
            Orma Classics
          </Link>

          <div className="hidden md:flex items-center space-x-10 uppercase text-xs tracking-widest">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => setActiveSection(item.id)}
                className={`relative transition-colors duration-300 ${
                  activeSection === item.id
                    ? "text-brand-paper"
                    : "text-brand-gray hover:text-brand-paper"
                }`}
              >
                {item.label}
                <span
                  className={`absolute left-0 -bottom-2 h-[1px] bg-brand-paper transition-all duration-500 ${
                    activeSection === item.id
                      ? "w-full opacity-100"
                      : "w-0 opacity-0"
                  }`}
                />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-5">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              aria-label="Connect on WhatsApp"
              className="relative hover:opacity-75 transition-opacity text-brand-paper"
            >
              <WhatsAppIcon />
            </a>

            <button
              type="button"
              className="md:hidden relative flex h-10 w-10 items-center justify-center text-brand-paper hover:text-brand-amber transition-colors duration-300"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span className="sr-only">{menuOpen ? "Close" : "Menu"}</span>
              {/* Film-strip icon (masked so it picks up currentColor) */}
              <span
                aria-hidden
                className={`absolute inset-0 m-auto h-6 w-6 bg-current transition-all duration-300 ${
                  menuOpen
                    ? "scale-75 opacity-0 rotate-90"
                    : "scale-100 opacity-100 rotate-0"
                }`}
                style={{
                  WebkitMaskImage: "url(/Images/icons/menu-film.png)",
                  maskImage: "url(/Images/icons/menu-film.png)",
                  WebkitMaskSize: "contain",
                  maskSize: "contain",
                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat",
                  WebkitMaskPosition: "center",
                  maskPosition: "center",
                }}
              />
              {/* Close X when open */}
              <span
                aria-hidden
                className={`relative block h-3.5 w-3.5 transition-all duration-300 ${
                  menuOpen
                    ? "scale-100 opacity-100"
                    : "scale-75 opacity-0"
                }`}
              >
                <span className="absolute left-0 top-1/2 h-[1.5px] w-full -translate-y-1/2 rotate-45 bg-current" />
                <span className="absolute left-0 top-1/2 h-[1.5px] w-full -translate-y-1/2 -rotate-45 bg-current" />
              </span>
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            className="fixed inset-0 z-50 md:hidden overflow-hidden"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            transition={{ duration, ease }}
          >
            {/* Darkroom base */}
            <div className="absolute inset-0 bg-[#060403]">
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse at 70% 40%, rgba(142, 78, 47, 0.28), transparent 55%), radial-gradient(circle at 15% 90%, rgba(198, 138, 65, 0.1), transparent 40%), linear-gradient(180deg, #0c0806 0%, #030201 100%)",
                }}
              />
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.06] bg-noise"
                aria-hidden
              />
            </div>

            {/* 35mm film strip contact sheet */}
            <motion.div
              className="relative z-10 mx-auto flex h-full min-h-screen-safe w-full max-w-lg flex-col px-1 pt-5 pb-6 sm:px-2"
              initial={reduceMotion ? false : { y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={reduceMotion ? undefined : { y: 12, opacity: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.55, ease }}
            >
              {/* Film stock header */}
              <div className="relative mx-3 mb-3 flex items-center justify-between px-2 sm:mx-4">
                <div>
                  <p className="font-sans text-[0.55rem] uppercase tracking-[0.32em] text-brand-amber/80">
                    Orma · 135 · ISO 400
                  </p>
                  <Link
                    href="/"
                    onClick={() => selectSection("")}
                    className="mt-1 block font-serif text-sm tracking-[0.18em] text-brand-paper uppercase"
                  >
                    Contact Sheet
                  </Link>
                </div>
                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  className="flex h-9 w-9 items-center justify-center border border-brand-paper/25 text-brand-paper/80 hover:border-brand-paper/50 hover:text-brand-paper transition-colors"
                  aria-label="Close menu"
                >
                  <span className="relative block h-3 w-3">
                    <span className="absolute left-0 top-1.5 h-[1.5px] w-full rotate-45 bg-current" />
                    <span className="absolute left-0 top-1.5 h-[1.5px] w-full -rotate-45 bg-current" />
                  </span>
                </button>
              </div>

              {/* The strip */}
              <div className="relative mx-2 flex min-h-0 flex-1 flex-col overflow-hidden rounded-sm border border-brand-paper/12 bg-[#0a0806] shadow-[0_0_60px_rgba(0,0,0,0.55)] sm:mx-3">
                {/* Dual sprocket rails */}
                <div
                  className="pointer-events-none absolute inset-y-0 left-0 z-20 w-[11px] film-edge border-r border-brand-paper/10 sm:w-3.5"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute inset-y-0 right-0 z-20 w-[11px] film-edge border-l border-brand-paper/10 sm:w-3.5"
                  aria-hidden
                />

                {/* Film emulsion wash */}
                <div
                  className="pointer-events-none absolute inset-0 z-[1] opacity-40"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(244,231,207,0.06) 0%, transparent 18%, transparent 82%, rgba(142,78,47,0.12) 100%)",
                  }}
                  aria-hidden
                />

                {/* Leader mark */}
                <div className="relative z-10 flex items-center justify-between px-5 pt-4 pb-2 sm:px-7">
                  <span className="font-sans text-[0.5rem] uppercase tracking-[0.4em] text-brand-paper/35">
                    ← Leader
                  </span>
                  <span className="font-handwriting text-sm text-brand-paper/40">
                    rewind
                  </span>
                </div>

                <nav className="relative z-10 flex flex-1 flex-col justify-center gap-0 px-4 py-1 sm:px-6">
                  {navItems.map((item, index) => {
                    const active = activeSection === item.id;
                    return (
                      <motion.div
                        key={item.id}
                        initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: reduceMotion ? 0 : 0.42,
                          ease,
                          delay: reduceMotion ? 0 : 0.1 + index * 0.07,
                        }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => selectSection(item.id)}
                          className={`group relative mx-1 my-1.5 flex items-stretch gap-3 border px-3 py-3 transition-all duration-400 sm:mx-2 sm:px-4 sm:py-3.5 ${
                            active
                              ? "border-brand-amber/55 bg-brand-paper/[0.07]"
                              : "border-brand-paper/18 bg-transparent hover:border-brand-paper/40 hover:bg-brand-paper/[0.04]"
                          }`}
                        >
                          {/* Frame number column */}
                          <div className="flex w-8 shrink-0 flex-col items-center justify-center border-r border-dashed border-brand-paper/20 pr-2 sm:w-10">
                            <span
                              className={`font-sans text-[0.6rem] tracking-[0.2em] ${
                                active
                                  ? "text-brand-amber"
                                  : "text-brand-paper/40 group-hover:text-brand-paper/70"
                              }`}
                            >
                              {item.frame}
                            </span>
                            <span className="mt-1 font-handwriting text-xs text-brand-paper/35 group-hover:text-brand-paper/55">
                              {item.note}
                            </span>
                          </div>

                          <div className="flex min-w-0 flex-1 flex-col justify-center">
                            <span
                              className={`font-serif text-lg leading-tight tracking-[0.06em] uppercase sm:text-2xl ${
                                active
                                  ? "text-brand-paper"
                                  : "text-brand-paper/70 group-hover:text-brand-paper"
                              }`}
                            >
                              {item.label}
                            </span>
                            <span
                              className={`mt-2 h-[1px] bg-brand-amber transition-all duration-500 ${
                                active
                                  ? "w-10 opacity-100"
                                  : "w-0 opacity-0 group-hover:w-7 group-hover:opacity-70"
                              }`}
                            />
                          </div>

                          {/* Exposure tick */}
                          <span
                            className={`absolute -right-px top-1/2 h-3 w-[2px] -translate-y-1/2 transition-colors ${
                              active ? "bg-brand-amber" : "bg-brand-paper/25"
                            }`}
                            aria-hidden
                          />
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>

                {/* Film tail */}
                <div className="relative z-10 flex items-center justify-between px-5 pt-2 pb-4 sm:px-7">
                  <span className="font-sans text-[0.5rem] uppercase tracking-[0.35em] text-brand-paper/30">
                    End of roll
                  </span>
                  <span className="font-sans text-[0.5rem] uppercase tracking-[0.3em] text-brand-paper/30">
                    36 exp
                  </span>
                </div>
              </div>

              {/* WhatsApp as developing tray CTA */}
              <motion.a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.4,
                  ease,
                  delay: reduceMotion ? 0 : 0.48,
                }}
                className="mx-3 mt-4 inline-flex items-center justify-center gap-3 border border-brand-paper/30 bg-brand-paper/[0.04] px-5 py-3.5 text-brand-paper font-sans uppercase tracking-[0.18em] text-[0.65rem] hover:bg-brand-paper hover:text-brand-black transition-all duration-500 sm:mx-4"
              >
                <WhatsAppIcon size={15} />
                Connect
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
