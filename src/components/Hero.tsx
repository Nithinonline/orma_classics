import Image from "next/image";
import Reveal from "./Reveal";

const heroCopy =
  "In a world of endless digital images, there's magic in waiting for the perfect shot. It slows you down. It teaches you to be present. It makes you notice the world differently. You develop intention with every frame. We collect forgotten cameras, restore them with care, and pass them forward so you can experience that magic too.";

export default function Hero() {
  return (
    <section className="relative min-h-screen-safe bg-brand-black film-vignette">
      <Image
        src="/Images/editorial/film-loaded-back.webp"
        alt="Film loaded inside a vintage camera"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_35%] md:object-center opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/72 to-black/12"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/45"></div>

      <div className="relative z-10 min-h-screen-safe max-w-7xl mx-auto px-6 pt-28 pb-10 md:pt-36 md:pb-16 flex items-center md:items-end">
        <Reveal eager className="max-w-4xl w-full">
          <p className="vintage-label mb-4 md:mb-6">Restored Film Cameras</p>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl leading-[1.05] tracking-tight text-brand-paper mb-5 md:mb-8 max-w-6xl">
            Every film camera <br className="hidden lg:block" />
            has a story. <br className="hidden lg:block" />
            We bring them <br className="hidden lg:block" />
            back to life.
          </h1>
          <p className="font-sans text-sm sm:text-base md:text-lg leading-[1.75] md:leading-[1.8] tracking-wide text-brand-paper/80 max-w-xl mb-7 md:mb-10">
            {heroCopy}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="#process"
              className="inline-flex justify-center bg-brand-paper text-brand-black font-sans uppercase tracking-[0.18em] text-xs px-8 py-4 md:py-5 hover:bg-brand-amber hover:text-brand-paper transition-colors duration-500 rounded-sm"
            >
              See Our Process
            </a>
            <a
              href="#collection"
              className="inline-flex justify-center border border-brand-paper/30 text-brand-paper font-sans uppercase tracking-[0.18em] text-xs px-8 py-4 md:py-5 hover:bg-brand-paper hover:text-brand-black transition-all duration-500 rounded-sm"
            >
              Browse Cameras
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
