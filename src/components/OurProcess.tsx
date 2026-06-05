"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const processSteps = [
  {
    label: "Discovered",
    image: "/Images/editorial/lubitel-2-camera.jpg",
    desc: "We search vintage shops, auctions, and estate collections to find forgotten mechanical cameras with potential.",
  },
  {
    label: "Restored",
    image: "/Images/editorial/red-darkroom-room.jpg",
    desc: "Every camera is disassembled, cleaned, and carefully restored, replacing worn gears while preserving its historical character.",
  },
  {
    label: "Verified",
    image: "/Images/editorial/contact-sheet.jpg",
    desc: "We shoot a test roll of real film, develop the negatives, and inspect them frame-by-frame to ensure beautiful, sharp shots.",
  },
  {
    label: "Ready to Create",
    image: "/Images/editorial/Holding-camera.jpg",
    desc: "Cleaned, verified, and certified. Your camera arrives packaged up and ready to create new memories in your hands.",
  },
];

export default function OurProcess() {
  return (
    <section
      id="process"
      className="relative py-28 md:py-36 px-6 bg-brand-black overflow-hidden border-t border-brand-paper/10"
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(198,138,65,0.08),transparent_42%,rgba(142,78,47,0.08))] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <Reveal className="text-center max-w-3xl mx-auto mb-24">
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
            Each vintage camera is a mechanical masterpiece. We honor its history by putting meticulous care and craftsmanship into every step of its journey back to you.
          </p>
        </Reveal>

        {/* Process Steps Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-24">
          {processSteps.map((step, index) => (
            <Reveal key={step.label} delay={index * 0.08} className="h-full">
              <motion.div
                initial="initial"
                whileHover="hover"
                className="group h-full flex flex-col border border-brand-paper/10 bg-brand-accent/20 rounded-sm overflow-hidden transition-all duration-500 hover:border-brand-amber/25 hover:bg-brand-accent/40 hover:shadow-[0_12px_40px_rgba(142,78,47,0.08)]"
              >
                {/* Top Film Sprocket Holes */}
                <div className="flex justify-around items-center h-4 bg-brand-black border-b border-brand-paper/10 px-2 select-none">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="w-2.5 h-2 bg-[#090706] rounded-[1px] border border-brand-paper/10" />
                  ))}
                </div>

                {/* Image Wrapper */}
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <div className="w-full h-full relative overflow-hidden">
                    <Image
                      src={step.image}
                      alt={`${step.label} stage`}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover soft-photo opacity-80 group-hover:opacity-100 group-hover:scale-[1.05] group-hover:sepia-0 group-hover:saturate-100 transition-all duration-700 ease-out"
                    />
                  </div>
                  {/* Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/50 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Bottom Film Sprocket Holes */}
                <div className="flex justify-around items-center h-4 bg-brand-black border-t border-brand-paper/10 px-2 select-none">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="w-2.5 h-2 bg-[#090706] rounded-[1px] border border-brand-paper/10" />
                  ))}
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-baseline mb-4">
                      <span className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-brand-amber/80">
                        {step.label}
                      </span>
                      <span className="font-serif italic text-2xl text-brand-paper/15 group-hover:text-brand-amber/30 transition-colors duration-500 font-bold leading-none">
                        0{index + 1}
                      </span>
                    </div>
                    <p className="font-sans text-sm md:text-[14px] leading-relaxed text-brand-gray/80 group-hover:text-brand-paper/95 transition-colors duration-300">
                      {step.desc}
                    </p>
                  </div>

                  {/* Interactive Reveal Link */}
                  <div className="mt-6 pt-4 border-t border-brand-paper/5 flex items-center justify-between">
                    <span className="font-sans text-[9px] uppercase tracking-widest font-bold text-brand-gray/60 group-hover:text-brand-amber transition-colors duration-300">
                      Step details
                    </span>
                    <motion.span
                      variants={{
                        initial: { x: 0 },
                        hover: { x: 5 }
                      }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="text-brand-amber text-xs font-bold"
                    >
                      →
                    </motion.span>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* Proof not promises Banner */}
        <Reveal delay={0.2}>
          <div className="relative border border-dashed border-brand-paper/20 bg-gradient-to-br from-brand-accent/40 to-brand-black/60 p-8 md:p-14 rounded-sm overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12 group">
            {/* Background lighting */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-rust/8 rounded-full blur-3xl -z-10 pointer-events-none" />
            
            <div className="max-w-2xl relative z-10">
              <div className="inline-flex items-center gap-2 border border-brand-amber/20 bg-brand-amber/5 px-2.5 py-1 rounded-sm mb-5">
                <span className="w-1 h-1 rounded-full bg-brand-amber animate-pulse" />
                <span className="font-sans text-[9px] uppercase tracking-[0.25em] text-brand-amber font-bold">
                  100% Film Tested & Certified
                </span>
              </div>
              
              <h3 className="font-serif text-3xl md:text-5xl text-brand-paper tracking-tight mb-5 leading-tight">
                Proof, Not Promises.
              </h3>
              
              <p className="font-sans text-sm md:text-base leading-relaxed text-brand-gray/80 max-w-xl">
                We don&apos;t just guess if our vintage cameras work. We verify each one under real conditions by shooting a full roll of film, developing it, and inspecting the negative frames. To prove it, we include the actual developed negative strip or test print inside your camera package.
              </p>
            </div>

            {/* Polaroid visual stack */}
            <div className="relative flex-shrink-0 w-full md:w-[400px] h-[280px] select-none pointer-events-none mt-6 lg:mt-0">
              {/* Background Photo */}
              <div className="absolute left-6 top-8 w-[230px] h-[160px] -rotate-6 rounded-xs overflow-hidden border-4 border-brand-paper/5 bg-brand-black shadow-xl opacity-40 transition-transform duration-700 group-hover:-rotate-12 group-hover:translate-x-[-8px]">
                <Image
                  src="/Images/editorial/darkroom-prints.jpg"
                  alt="Darkroom prints verification"
                  fill
                  sizes="230px"
                  className="object-cover soft-photo"
                />
              </div>

              {/* Foreground Photo (Polaroid) */}
              <div className="absolute right-6 top-4 w-[240px] h-[210px] rotate-3 rounded-xs border-[6px] border-brand-paper/95 bg-brand-paper shadow-2xl transition-transform duration-700 group-hover:rotate-6 group-hover:translate-y-[-4px]">
                <div className="relative w-full h-[155px] overflow-hidden bg-brand-black">
                  <Image
                    src="/Images/editorial/contact-sheet.jpg"
                    alt="Developed film contact sheet verification"
                    fill
                    sizes="240px"
                    className="object-cover soft-photo"
                  />
                  <div className="absolute inset-0 bg-brand-amber/5 mix-blend-overlay" />
                </div>
                {/* Polaroid bottom area */}
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
