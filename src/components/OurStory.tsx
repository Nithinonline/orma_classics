import Image from "next/image";
import Reveal from "./Reveal";

const storyCopy = [
  "It started with a camera on a shelf. Our father's. Forgotten, but never gone.",
  "Inside — a handful of old photographs. Nothing extraordinary. Just simple moments that somehow felt like everything.",
  "We take thousands of photos now. And remember none of them.",
  "Film makes you slow down. Choose. Wait. One click meant more than a hundred taps ever could.",
  "There are cameras like this on shelves everywhere — waiting. We're just here to give them a new home.",
];

export default function OurStory() {
  return (
    <section
      id="story"
      className="pt-28 md:pt-36 pb-12 md:pb-16 px-6 page-band border-t border-brand-paper/10"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-14 lg:gap-20 items-stretch">
        <Reveal className="film-frame relative aspect-[4/5] max-w-xl w-full mx-auto">
          <Image
            src="/Images/editorial/fuji-camera-table.webp"
            alt="Vintage camera resting on a wooden table"
            fill
            loading="lazy"
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover soft-photo opacity-90"
          />

          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent z-20"></div>

          <p className="absolute left-10 bottom-10 z-30 font-sans text-[10px] uppercase tracking-[0.35em] text-brand-paper/70">
            The first camera changed everything
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <span className="vintage-label">Our Story</span>
          <h2 className="font-handwriting text-4xl md:text-6xl text-brand-paper leading-[1.15] mt-6 mb-8">
            <span className="text-brand-rust/60 text-6xl md:text-8xl leading-none">
              &ldquo;
            </span>
            Curiosity became care. <br className="hidden md:block" />
            Care became a second life.
            <div className="w-12 h-[1px] bg-brand-rust/40 mt-4 mb-8" />
          </h2>

          <div className="space-y-2 font-sans italic text-brand-gray/90 leading-[1.9] text-sm md:text-xl tracking-wide max-w-xl">
            {storyCopy.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
