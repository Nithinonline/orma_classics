"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";

const journey = [
  {
    title: "Loading the Film",
    image: "/Images/editorial/loading-film-hands.webp",
    text: "You thread the film in by hand. No auto-load, no shortcuts. Just you and the camera, beginning together.",
  },
  {
    title: "Shooting",
    image: "/Images/editorial/lubitel-2-camera.webp",
    text: "You have 36 frames. Maybe fewer. Each one costs something — so each one means something.",
  },
  {
    title: "Developing",
    image: "/Images/editorial/red-negative-close.webp",
    text: "In the dark, chemistry does what light began. You wait. Then you see. There is nothing quite like it.",
  },
  {
    title: "Printing",
    image: "/Images/editorial/darkroom-prints.webp",
    text: "You hold the photograph. Not a file. Not a screen. A thing that exists in the world, made by your hands.",
  },
];

const STEP_INTERVAL_MS = 3800;

export default function ProcessSteps() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const resumeTimer = useRef<number | null>(null);
  const activeStep = journey[active];

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion || paused) return;

    const id = window.setInterval(() => {
      setActive((current) => (current + 1) % journey.length);
    }, STEP_INTERVAL_MS);

    return () => window.clearInterval(id);
  }, [paused]);

  useEffect(() => {
    return () => {
      if (resumeTimer.current) window.clearTimeout(resumeTimer.current);
    };
  }, []);

  const selectStep = (index: number, linger = false) => {
    setActive(index);
    setPaused(true);
    if (resumeTimer.current) window.clearTimeout(resumeTimer.current);
    if (linger) return;
    resumeTimer.current = window.setTimeout(() => {
      setPaused(false);
    }, STEP_INTERVAL_MS);
  };

  return (
    <section
      id="journey"
      className="py-28 md:py-36 px-6 bg-brand-black relative overflow-x-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(198,138,65,0.08),transparent_35%,rgba(244,231,207,0.04)_70%,transparent)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="vintage-label">The Film Photography Journey</span>
          <h2 className="font-serif text-4xl md:text-6xl text-brand-paper leading-[1.1] tracking-tight mt-6 mb-6">
            The care is the point.
          </h2>
          <p className="font-sans text-base md:text-lg leading-[1.85] tracking-wide text-brand-gray/90 max-w-xl mx-auto">
            Film photography is slow on purpose. Every step asks something of
            you — and gives something back.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-16 items-stretch">
          <Reveal className="film-frame relative min-h-[520px]">
            {journey.map((step, index) => (
              <Image
                key={step.image}
                src={step.image}
                alt={`${step.title} in the film photography journey`}
                fill
                loading={index === 0 ? "eager" : "lazy"}
                sizes="(min-width: 1024px) 45vw, 100vw"
                className={`object-cover soft-photo transition-opacity duration-[900ms] ease-out ${
                  index === active ? "opacity-86" : "opacity-0"
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10"></div>
            <div
              key={active}
              className="absolute left-10 right-10 bottom-10 z-30 animate-[fadeUp_0.55s_cubic-bezier(0.22,1,0.36,1)_both]"
            >
              <p className="font-sans italic text-[10px] uppercase tracking-[0.35em] text-brand-amber/80 mb-4">
                Step 0{active + 1} of 0{journey.length}
              </p>
              <h3 className="font-handwriting text-3xl md:text-4xl text-brand-paper mb-4">
                {activeStep.title}
              </h3>
              <p className="font-sans italic text-sm md:text-base leading-[1.85] text-brand-paper/85">
                {activeStep.text}
              </p>
            </div>
          </Reveal>

          <div
            className="grid grid-cols-2 gap-3 sm:gap-4"
            onMouseLeave={() => setPaused(false)}
          >
            {journey.map((step, index) => {
              const selected = index === active;

              return (
                <Reveal key={step.title} delay={index * 0.06}>
                  <button
                    type="button"
                    onClick={() => selectStep(index)}
                    onMouseEnter={() => selectStep(index, true)}
                    aria-pressed={selected}
                    className={`text-left border h-full p-3 sm:p-6 rounded-sm min-h-[140px] sm:min-h-[220px] flex flex-col justify-between transition-[background-color,border-color,color,box-shadow] duration-500 ease-out ${
                      selected
                        ? "bg-brand-rust/15 text-brand-paper border-brand-rust/60 shadow-[inset_0_0_0_1px_rgba(142,78,47,0.2)]"
                        : "bg-black/35 text-brand-gray border-brand-paper/12 hover:border-brand-rust/70 hover:bg-brand-rust/10"
                    }`}
                  >
                    <div>
                      <span
                        className={`font-serif text-xl sm:text-3xl transition-colors duration-500 ease-out ${selected ? "text-brand-rust" : "text-brand-paper/25"}`}
                      >
                        0{index + 1}
                      </span>
                      <h3
                        className={`font-sans text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.22em] mt-2 sm:mt-5 mb-2 sm:mb-3 text-brand-paper`}
                      >
                        {step.title}
                      </h3>
                      <p
                        className={`font-sans text-xs sm:text-sm leading-snug sm:leading-relaxed line-clamp-3 sm:line-clamp-none transition-colors duration-500 ease-out ${selected ? "text-brand-paper/70" : "text-brand-gray/75"}`}
                      >
                        {step.text}
                      </p>
                    </div>
                  </button>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
