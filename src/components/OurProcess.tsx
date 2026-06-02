import Image from "next/image";
import Reveal from "./Reveal";

const processSteps = [
  {
    label: "Discovered",
    image: "/Images/editorial/lubitel-2-camera.jpg",
  },
  {
    label: "Restored",
    image: "/Images/editorial/red-darkroom-room.jpg",
  },
  {
    label: "Verified",
    image: "/Images/editorial/contact-sheet.jpg",
  },
  {
    label: "Ready to Create",
    image: "/Images/editorial/loading-film-hands.jpg",
  },
];

const processCopy =
  "Each camera begins as forgotten. We find it, we understand its history, we see its potential. Then we restore it carefully, bringing back its function and soul. We verify it works beautifully by using it ourselves, shooting real film, developing the photos, and sharing them with you so you can see exactly what this camera can do. Finally, it's ready to create memories in your hands.";

export default function OurProcess() {
  return (
    <section
      id="process"
      className="relative py-28 md:py-36 px-6 bg-brand-black overflow-hidden border-t border-brand-paper/10"
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(198,138,65,0.08),transparent_42%,rgba(142,78,47,0.08))] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-14 lg:gap-20 items-center">
          <Reveal>
            <span className="vintage-label">Our Process</span>
            <h2 className="font-serif text-4xl md:text-6xl text-brand-paper leading-[1.1] tracking-tight mt-6 mb-6">
              Bringing Cameras
              <br className="hidden md:block" />
              Back to Life.
            </h2>
            <p className="font-handwriting text-2xl md:text-3xl text-brand-rust/80 mb-10 tracking-wide">
              Discovered. Restored. Verified. Ready to Create.
            </p>
            <p className="font-sans text-base md:text-lg leading-[1.85] text-brand-gray/90 tracking-wide max-w-xl">
              {processCopy}
            </p>
          </Reveal>

          <Reveal delay={0.12} className="film-frame relative min-h-[500px]">
            <Image
              src="/Images/editorial/red-darkroom-room.jpg"
              alt="Red-lit darkroom where film is restored and verified"
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover opacity-82"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10"></div>
            <div className="absolute inset-x-8 bottom-8 z-30 grid grid-cols-2 gap-3">
              {processSteps.map((step, index) => (
                <div
                  key={step.label}
                  className="relative border border-brand-paper/18 rounded-sm overflow-hidden min-h-[100px]"
                >
                  {/* Background image */}
                  <Image
                    src={step.image}
                    alt={step.label}
                    fill
                    sizes="20vw"
                    className="object-cover opacity-30 soft-photo"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/55" />

                  {/* Content */}
                  <div className="relative z-10 p-4">
                    <span className="font-serif text-2xl text-brand-amber/70">
                      0{index + 1}
                    </span>
                    <p className="font-sans text-[11px] uppercase tracking-[0.22em] text-brand-paper/80 mt-2">
                      {step.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal
          delay={0.16}
          className="mt-18 grid grid-cols-1 md:grid-cols-[0.78fr_1.22fr] gap-6 md:gap-8 items-stretch"
        >
          <div className="border border-brand-paper/12 bg-black/30 p-7 md:p-11 rounded-sm">
            <span className="vintage-label mb-6">Proof, not promises</span>
            <p className="font-serif text-2xl md:text-3xl text-brand-paper leading-[1.2] tracking-tight">
              We shoot real rolls, inspect the negatives, and show what the
              camera can actually make.
            </p>
          </div>
          <div className="film-frame relative min-h-[320px]">
            <Image
              src="/Images/editorial/contact-sheet.jpg"
              alt="Contact sheet of developed film negatives"
              fill
              sizes="(min-width: 768px) 60vw, 100vw"
              className="object-cover soft-photo opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent z-10"></div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
