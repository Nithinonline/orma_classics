"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const processSteps = [
  {
    label: "Discovered",
    image: "/Images/process/Discovered_image.png",
    desc: "Every camera begins as a discovery. We carefully source overlooked mechanical cameras and select those worthy of restoration and reuse.",
  },
  {
    label: "Restored",
    image: "/Images/process/restored_image.png",
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

        {/* Process Steps - Realistic Film Roll */}
        <Reveal className="mb-24 w-full animate-fade-in">
          <div className="overflow-x-auto pb-10 -mx-6 px-6 md:mx-0 md:px-0 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-brand-amber/25">
            <div className="min-w-[1000px] xl:min-w-0 w-full relative">
              {/* Outer Film Strip Ribbon */}
              <div className="relative bg-[#120d0b] border-y-[6px] border-black py-7 shadow-[0_25px_60px_rgba(0,0,0,0.8)] rounded-xs">
                
                {/* Continuous Top Perforations */}
                <div 
                  className="absolute top-2 left-0 right-0 h-4 pointer-events-none opacity-85"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='16'%3E%3Crect x='6' y='0.5' width='12' height='15' rx='2.5' fill='%23030202' stroke='%233a2e2b' stroke-width='1'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'repeat-x'
                  }}
                />

                {/* Continuous Bottom Perforations */}
                <div 
                  className="absolute bottom-2 left-0 right-0 h-4 pointer-events-none opacity-85"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='16'%3E%3Crect x='6' y='0.5' width='12' height='15' rx='2.5' fill='%23030202' stroke='%233a2e2b' stroke-width='1'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'repeat-x'
                  }}
                />

                {/* Grid of Film frames */}
                <div className="grid grid-cols-4 gap-0 relative z-10">
                  {processSteps.map((step, index) => (
                    <div key={step.label} className="group flex flex-col relative">
                      
                      {/* Light table glow behind the active frame */}
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(198,138,65,0.15),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                      {/* Top Edge Film Markings */}
                      <div className="flex justify-between items-center px-6 mt-3 mb-2">
                        <span className="font-mono text-[8.5px] font-bold text-brand-amber/35 tracking-[0.25em] select-none">
                          ORMA PAN 100
                        </span>
                        {/* Fake DX Barcode */}
                        <div className="flex gap-[1.5px] items-center opacity-30 select-none">
                          <div className="w-[1.5px] h-2.5 bg-brand-amber" />
                          <div className="w-[0.5px] h-2.5 bg-brand-amber" />
                          <div className="w-[2.5px] h-2.5 bg-brand-amber" />
                          <div className="w-[0.5px] h-2.5 bg-brand-amber" />
                          <div className="w-[3px] h-2.5 bg-brand-amber" />
                        </div>
                      </div>

                      {/* Image exposure frame */}
                      <div className="px-6 relative z-10">
                        <div className="relative aspect-[4/3] w-full overflow-hidden border-[10px] border-[#0c0908] bg-[#0c0908] shadow-[inset_0_0_20px_rgba(0,0,0,0.95),0_8px_16px_rgba(0,0,0,0.4)] rounded-[1px] transition-all duration-500 group-hover:border-[#050403] group-hover:shadow-[0_0_25px_rgba(198,138,65,0.25)]">
                          <Image
                            src={step.image}
                            alt={`${step.label} stage`}
                            fill
                            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                            className="object-cover grayscale contrast-[1.2] brightness-[0.88] transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:grayscale-0 group-hover:contrast-[1.02] group-hover:brightness-100 group-hover:scale-[1.05]"
                          />
                          {/* Dark vignette overlay inside frame */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/35 pointer-events-none mix-blend-multiply opacity-80" />
                        </div>
                      </div>

                      {/* Bottom Edge Film Markings */}
                      <div className="flex justify-between items-center px-6 mt-3 mb-2 font-mono text-[8.5px] font-bold text-brand-amber/35 select-none">
                        <span>▶ 0{index + 1}</span>
                        <span>0{index + 1}A</span>
                        <span className="hidden sm:inline">SAFETY FILM</span>
                      </div>

                    </div>
                  ))}
                </div>
              </div>

              {/* Tape Tags Row (Outside Film Strip but inside scroll container so they align & scroll together) */}
              <div className="grid grid-cols-4 gap-0 mt-8 relative z-20">
                {processSteps.map((step, index) => {
                  // Alternating rotation angles for organic look
                  const rotations = ["rotate-[-1.2deg]", "rotate-[1.5deg]", "rotate-[-1.5deg]", "rotate-[1.2deg]"];
                  const rotation = rotations[index % rotations.length];

                  return (
                    <div key={`desc-${step.label}`} className="group px-6 flex flex-col justify-start">
                      <div 
                        className={`bg-brand-paper/95 text-brand-black p-5 rounded-xs shadow-[0_12px_28px_rgba(0,0,0,0.35)] relative transition-all duration-[600ms] ease-out group-hover:shadow-[0_20px_40px_rgba(198,138,65,0.25)] group-hover:translate-y-[-4px] flex flex-col justify-between min-h-[160px] border border-[#e8d5b5]/90 ${rotation}`}
                      >
                        {/* Semi-translucent tape piece holding the note */}
                        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-14 h-5.5 bg-[#f4e7cf]/35 border-y border-x border-[#f4e7cf]/55 shadow-[0_2px_4px_rgba(0,0,0,0.05)] rotate-[2.5deg] opacity-85 backdrop-blur-[1.5px] pointer-events-none" />

                        <div>
                          <div className="flex justify-between items-baseline mb-2">
                            <span className="font-sans text-[9px] font-bold uppercase tracking-[0.2em] text-brand-rust/80 select-none">
                              Step 0{index + 1}
                            </span>
                            <span className="font-mono text-[8px] text-brand-black/25 select-none">
                              // QC_APPROVED
                            </span>
                          </div>
                          
                          <h4 className="font-handwriting text-2xl text-brand-black font-semibold mb-2.5 leading-none">
                            {step.label}
                          </h4>
                          
                          <p className="font-sans text-xs leading-relaxed text-brand-black/80 font-normal">
                            {step.desc}
                          </p>
                        </div>

                        {/* Sign-off detail */}
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
                })}
              </div>
            </div>
          </div>
        </Reveal>

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
