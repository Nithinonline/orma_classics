"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import { onMediaQueryChange } from "@/lib/mediaQuery";

export type ProcessStep = {
  label: string;
  image: string;
  desc: string;
};

const rotations = [
  "rotate-[-1.2deg]",
  "rotate-[1.5deg]",
  "rotate-[-1.5deg]",
  "rotate-[1.2deg]",
] as const;

const perforationStyle: CSSProperties = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='16'%3E%3Crect x='6' y='0.5' width='12' height='15' rx='2.5' fill='%23030202' stroke='%233a2e2b' stroke-width='1'/%3E%3C/svg%3E")`,
  backgroundRepeat: "repeat-x",
};

function FilmFrame({
  step,
  index,
  className = "",
}: {
  step: ProcessStep;
  index: number;
  className?: string;
}) {
  return (
    <div className={`group flex flex-col relative ${className}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(198,138,65,0.15),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      <div className="flex justify-between items-center px-5 sm:px-6 mt-3 mb-2">
        <span className="font-mono text-[8.5px] font-bold text-brand-amber/35 tracking-[0.25em] select-none">
          ORMA PAN 100
        </span>
        <div className="flex gap-[1.5px] items-center opacity-30 select-none">
          <div className="w-[1.5px] h-2.5 bg-brand-amber" />
          <div className="w-[0.5px] h-2.5 bg-brand-amber" />
          <div className="w-[2.5px] h-2.5 bg-brand-amber" />
          <div className="w-[0.5px] h-2.5 bg-brand-amber" />
          <div className="w-[3px] h-2.5 bg-brand-amber" />
        </div>
      </div>

      <div className="px-5 sm:px-6 relative z-10">
        <div className="relative aspect-[4/3] w-full overflow-hidden border-[10px] border-[#0c0908] bg-[#0c0908] shadow-[inset_0_0_20px_rgba(0,0,0,0.95),0_8px_16px_rgba(0,0,0,0.4)] rounded-[1px]">
          <Image
            src={step.image}
            alt={`${step.label} stage`}
            fill
            sizes="(min-width: 768px) 25vw, 85vw"
            className="object-cover grayscale contrast-[1.2] brightness-[0.88] transition-[filter] duration-700 ease-out group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/35 pointer-events-none opacity-80 transition-opacity duration-700 group-hover:opacity-30" />
        </div>
      </div>

      <div className="flex justify-between items-center px-5 sm:px-6 mt-3 mb-2 font-mono text-[8.5px] font-bold text-brand-amber/35 select-none">
        <span>▶ 0{index + 1}</span>
        <span>0{index + 1}A</span>
        <span className="hidden sm:inline">SAFETY FILM</span>
      </div>
    </div>
  );
}

function StepNote({ step, index }: { step: ProcessStep; index: number }) {
  const rotation = rotations[index % rotations.length];

  return (
    <div className="px-5 sm:px-6 flex flex-col justify-start">
      <div
        className={`bg-brand-paper/95 text-brand-black p-5 rounded-xs shadow-[0_12px_28px_rgba(0,0,0,0.35)] relative flex flex-col justify-between min-h-[160px] border border-[#e8d5b5]/90 ${rotation}`}
      >
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-14 h-5.5 bg-[#f4e7cf]/35 border-y border-x border-[#f4e7cf]/55 shadow-[0_2px_4px_rgba(0,0,0,0.05)] rotate-[2.5deg] opacity-85 backdrop-blur-[1.5px] pointer-events-none" />

        <div>
          <div className="flex justify-between items-baseline mb-2">
            <span className="font-sans text-[9px] font-bold uppercase tracking-[0.2em] text-brand-rust/80 select-none">
              Step 0{index + 1}
            </span>
            <span className="font-mono text-[8px] text-brand-black/25 select-none">
              {"// QC_APPROVED"}
            </span>
          </div>

          <h4 className="font-handwriting text-2xl text-brand-black font-semibold mb-2.5 leading-none">
            {step.label}
          </h4>

          <p className="font-sans text-xs leading-relaxed text-brand-black/80 font-normal">
            {step.desc}
          </p>
        </div>

        <div className="mt-4 pt-3 border-t border-brand-black/5 flex items-center justify-between">
          <span className="font-sans text-[8px] uppercase tracking-wider text-brand-black/45 select-none">
            Process Phase
          </span>
          <span className="font-handwriting text-brand-rust/90 text-sm font-bold opacity-80 select-none">
            verified
          </span>
        </div>
      </div>
    </div>
  );
}

/** Desktop / tablet: multi-column film strip with overflow scroll when needed */
export function DesktopProcessFilm({ steps }: { steps: ProcessStep[] }) {
  return (
    <div className="overflow-x-auto pb-10 -mx-6 px-6 md:mx-0 md:px-0 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-brand-amber/25">
      <div className="min-w-[1000px] xl:min-w-0 w-full relative">
        <div className="relative bg-[#120d0b] border-y-[6px] border-black py-7 shadow-[0_25px_60px_rgba(0,0,0,0.8)] rounded-xs">
          <div
            className="absolute top-2 left-0 right-0 h-4 pointer-events-none opacity-85"
            style={perforationStyle}
          />
          <div
            className="absolute bottom-2 left-0 right-0 h-4 pointer-events-none opacity-85"
            style={perforationStyle}
          />

          <div className="grid grid-cols-4 gap-0 relative z-10">
            {steps.map((step, index) => (
              <FilmFrame key={step.label} step={step} index={index} />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-4 gap-0 mt-8 relative z-20">
          {steps.map((step, index) => (
            <StepNote key={`desc-${step.label}`} step={step} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * Mobile: film strip in normal page flow — vertical page scroll + horizontal swipe.
 * No sticky scroll-jacking (that trapped scroll and felt stuck).
 */
export function MobileProcessFilm({ steps }: { steps: ProcessStep[] }) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const motionMq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(motionMq.matches);
    sync();
    return onMediaQueryChange(motionMq, sync);
  }, []);

  const onViewportScroll = useCallback(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const cards = viewport.querySelectorAll<HTMLElement>("[data-film-step]");
    if (!cards.length) return;

    const mid = viewport.scrollLeft + viewport.clientWidth / 2;
    let closest = 0;
    let closestDist = Infinity;
    cards.forEach((card, index) => {
      const center = card.offsetLeft + card.offsetWidth / 2;
      const dist = Math.abs(center - mid);
      if (dist < closestDist) {
        closestDist = dist;
        closest = index;
      }
    });
    setActiveStep(closest);
  }, []);

  // Reduced motion: simple vertical stack
  if (reduceMotion) {
    return (
      <div className="space-y-10 pb-6">
        {steps.map((step, index) => (
          <div
            key={step.label}
            className="relative bg-[#120d0b] border-y-[6px] border-black py-5"
          >
            <FilmFrame step={step} index={index} />
            <div className="mt-6">
              <StepNote step={step} index={index} />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="relative -mx-6">
      <div className="px-6 pb-3 flex items-center justify-between">
        <p className="font-sans text-[10px] uppercase tracking-[0.28em] text-brand-amber/80">
          Film process
        </p>
        <p className="font-mono text-[10px] tracking-[0.2em] text-brand-paper/55">
          0{activeStep + 1} / 0{steps.length}
        </p>
      </div>

      <div
        ref={viewportRef}
        onScroll={onViewportScroll}
        className="w-full overflow-x-auto overflow-y-visible overscroll-x-contain snap-x snap-mandatory scrollbar-thin scrollbar-track-transparent scrollbar-thumb-brand-amber/25"
      >
        <div className="flex w-max">
          <div className="w-3 shrink-0" aria-hidden />

          <div className="relative bg-[#120d0b] border-y-[5px] border-black py-3 shadow-[0_25px_60px_rgba(0,0,0,0.8)]">
            <div
              className="absolute top-1.5 left-0 right-0 h-3 pointer-events-none opacity-85"
              style={perforationStyle}
            />
            <div
              className="absolute bottom-1.5 left-0 right-0 h-3 pointer-events-none opacity-85"
              style={perforationStyle}
            />

            <div className="flex relative z-10">
              {steps.map((step, index) => (
                <div
                  key={step.label}
                  data-film-step
                  className="w-[min(84vw,20rem)] shrink-0 flex flex-col snap-center"
                >
                  <MobileFilmFrame step={step} index={index} />
                  <div className="mt-4 mb-1">
                    <MobileStepNote step={step} index={index} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-3 shrink-0" aria-hidden />
        </div>
      </div>

      <div className="px-6 pt-4 flex items-center gap-2" aria-hidden>
        {steps.map((step, index) => (
          <div
            key={step.label}
            className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
              index <= activeStep ? "bg-brand-amber/70" : "bg-brand-paper/15"
            }`}
          />
        ))}
      </div>
      <p className="px-6 pt-2 pb-1 font-sans text-[9px] uppercase tracking-[0.22em] text-brand-gray/70">
        Swipe for next step · scroll to continue
      </p>
    </div>
  );
}

function MobileFilmFrame({
  step,
  index,
}: {
  step: ProcessStep;
  index: number;
}) {
  return (
    <div className="flex flex-col relative">
      <div className="flex justify-between items-center px-4 mt-2 mb-1.5">
        <span className="font-mono text-[8px] font-bold text-brand-amber/35 tracking-[0.2em] select-none">
          ORMA PAN 100
        </span>
        <span className="font-mono text-[8px] font-bold text-brand-amber/35 select-none">
          ▶ 0{index + 1}
        </span>
      </div>

      <div className="px-4 relative z-10">
        <div className="relative aspect-[4/3] w-full overflow-hidden border-[8px] border-[#0c0908] bg-[#0c0908] shadow-[inset_0_0_20px_rgba(0,0,0,0.95)] rounded-[1px]">
          <Image
            src={step.image}
            alt={`${step.label} stage`}
            fill
            sizes="85vw"
            className="object-cover grayscale contrast-[1.2] brightness-[0.88]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/35 pointer-events-none opacity-80" />
        </div>
      </div>
    </div>
  );
}

function MobileStepNote({
  step,
  index,
}: {
  step: ProcessStep;
  index: number;
}) {
  const rotation = rotations[index % rotations.length];

  return (
    <div className="px-4">
      <div
        className={`bg-brand-paper/95 text-brand-black p-4 rounded-xs shadow-[0_12px_28px_rgba(0,0,0,0.35)] relative border border-[#e8d5b5]/90 ${rotation}`}
      >
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-4 bg-[#f4e7cf]/35 border border-[#f4e7cf]/55 rotate-[2.5deg] opacity-85 pointer-events-none" />
        <span className="font-sans text-[9px] font-bold uppercase tracking-[0.2em] text-brand-rust/80">
          Step 0{index + 1}
        </span>
        <h4 className="font-handwriting text-xl text-brand-black font-semibold mt-1 mb-1.5 leading-none">
          {step.label}
        </h4>
        <p className="font-sans text-[11px] leading-relaxed text-brand-black/80 line-clamp-3">
          {step.desc}
        </p>
      </div>
    </div>
  );
}
