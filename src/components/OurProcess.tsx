"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import {
  DesktopProcessFilm,
  MobileProcessFilm,
  type ProcessStep,
} from "./ProcessFilm";

const processSteps: ProcessStep[] = [
  {
    label: "Discovered",
    image: "/Images/process/Discovered_image.webp",
    desc: "Every camera begins as a discovery. We carefully source overlooked mechanical cameras and select those worthy of restoration and reuse.",
  },
  {
    label: "Restored",
    image: "/Images/process/restored_image.webp",
    desc: "Every camera is disassembled, cleaned, and carefully restored, replacing worn gears while preserving its historical character.",
  },
  {
    label: "Verified",
    image: "/Images/editorial/contact-sheet.webp",
    desc: "We shoot a test roll of real film, develop the negatives, and inspect them frame-by-frame to ensure beautiful, sharp shots.",
  },
  {
    label: "Ready to Create",
    image: "/Images/editorial/Holding-camera.webp",
    desc: "Cleaned, verified, and certified. Your camera arrives packaged up and ready to create new memories in your hands.",
  },
];

export default function OurProcess() {
  return (
    <section
      id="process"
      className="relative pt-12 md:pt-16 pb-28 md:pb-36 px-6 bg-brand-black md:overflow-x-hidden border-t border-brand-paper/10"
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(198,138,65,0.08),transparent_42%,rgba(142,78,47,0.08))] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <Reveal className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-amber" />
            <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-brand-paper/80 font-bold">
              How We Work
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-brand-amber" />
          </div>

          <h2 className="font-serif text-5xl md:text-7xl text-brand-paper leading-[1.05] tracking-tight mb-6">
            Bringing Cameras
            <br />
            <span className="font-handwriting text-brand-amber text-4xl md:text-6xl tracking-normal inline-block mt-3 normal-case font-normal">
              Back to Life
            </span>
          </h2>

          <p className="font-sans text-base md:text-[17px] leading-[1.8] text-brand-gray/95 tracking-wide max-w-xl mx-auto">
            Each vintage camera is a mechanical masterpiece. We honor its
            history by putting meticulous care and craftsmanship into every step
            of its journey back to you.
          </p>
        </Reveal>

        {/* Mobile: swipe film horizontally, page scrolls vertically as usual */}
        <div className="md:hidden mb-16">
          <MobileProcessFilm steps={processSteps} />
        </div>

        {/* Desktop / tablet: original film strip layout */}
        <div className="hidden md:block mb-24">
          <Reveal className="w-full">
            <DesktopProcessFilm steps={processSteps} />
          </Reveal>
        </div>

        {/* Proof not promises Banner */}
        <Reveal delay={0.2}>
          <div className="relative border border-dashed border-brand-paper/20 bg-gradient-to-br from-brand-accent/40 to-brand-black/60 p-8 md:p-14 rounded-sm overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12 group">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-rust/8 rounded-full blur-3xl -z-10 pointer-events-none" />

            <div className="max-w-2xl relative z-10">
              <div className="inline-flex items-center gap-2 border border-brand-amber/20 bg-brand-amber/5 px-2.5 py-1 rounded-sm mb-5">
                <span className="w-1 h-1 rounded-full bg-brand-amber animate-pulse" />
                <span className="font-sans text-[9px] uppercase tracking-[0.25em] text-brand-amber font-bold">
                  100% Film Tested & Verified
                </span>
              </div>

              <h3 className="font-serif text-3xl md:text-5xl text-brand-paper tracking-tight mb-5 leading-tight">
                Proof, Not Promises.
              </h3>

              <p className="font-sans text-sm md:text-base leading-relaxed text-brand-gray/80 max-w-xl">
                We don&apos;t just guess if our vintage cameras work. We verify
                each one under real conditions by shooting a full roll of film,
                developing it, and inspecting the negative frames. To prove it,
                we include the actual developed negative strip or test print
                inside your camera package.
              </p>
            </div>

            <div className="relative flex-shrink-0 w-full md:w-[400px] h-[280px] select-none pointer-events-none mt-6 lg:mt-0">
              <div className="absolute left-6 top-8 w-[230px] h-[160px] -rotate-6 rounded-xs overflow-hidden border-4 border-brand-paper/5 bg-brand-black shadow-xl opacity-40 transition-transform duration-700 group-hover:-rotate-12 group-hover:translate-x-[-8px]">
                <Image
                  src="/Images/editorial/darkroom-prints.webp"
                  alt="Darkroom prints verification"
                  fill
                  sizes="230px"
                  className="object-cover soft-photo"
                />
              </div>

              <div className="absolute right-6 top-4 w-[240px] h-[210px] rotate-3 rounded-xs border-[6px] border-brand-paper/95 bg-brand-paper shadow-2xl transition-transform duration-700 group-hover:rotate-6 group-hover:translate-y-[-4px]">
                <div className="relative w-full h-[155px] overflow-hidden bg-brand-black">
                  <Image
                    src="/Images/editorial/contact-sheet.webp"
                    alt="Developed film contact sheet verification"
                    fill
                    sizes="240px"
                    className="object-cover soft-photo"
                  />
                  <div className="absolute inset-0 bg-brand-amber/10" />
                </div>
                <div className="p-2.5 bg-brand-paper text-brand-black flex justify-between items-center">
                  <div>
                    <p className="font-handwriting text-sm leading-none text-brand-black/90">
                      Test negative approved
                    </p>
                    <p className="font-sans text-[7px] uppercase tracking-widest text-brand-gray/80 mt-1">
                      QC Roll #218-A
                    </p>
                  </div>
                  <span className="font-sans text-[8px] uppercase tracking-wider border border-[#2d5a27]/30 text-[#2d5a27] px-1.5 py-0.5 rounded-sm font-bold bg-[#2d5a27]/5">
                    PASSED
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
