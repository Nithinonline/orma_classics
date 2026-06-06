import Image from "next/image";
import Reveal from "./Reveal";

const storyCopy = [
  // "It started with curiosity. My father's vintage camera. The weight of it in my hands. Photos that took my breath away.",
  // "That's when we realized these cameras aren't just objects. They're gateways to being present. They're teachers of patience.",
  // "They transform how you see. And they deserve a second life with someone who understands their value.",


"It started with a film camera on a shelf. Our father's. Forgotten, but not gone.",
"Inside: a few old photographs. Simple moments — yet every single frame felt like it meant something.",
"We take thousands of photos now and forget them all. These few made us stop.",
"Film slows you down. Makes you choose. And somehow, that one click means more than a hundred taps ever could.",
"There are cameras like this sitting on shelves everywhere. Waiting. We're just here to find them a new home.",
];

export default function OurStory() {
  return (
    <section
      id="story"
      className="py-28 md:py-36 px-6 page-band border-t border-brand-paper/10"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-14 lg:gap-20 items-stretch">
        <Reveal className="film-frame relative aspect-[4/5] max-w-xl w-full mx-auto">
          <Image
            src="/Images/editorial/fuji-camera-table.jpg"
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
