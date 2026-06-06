import Image from "next/image";
import Reveal from "./Reveal";

const whatsappHref =
  "https://wa.me/918301887465?text=Hi%20Orma%20Classics%2C%20I%20would%20like%20to%20connect%20about%20a%20restored%20film%20camera.";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-28 md:py-36 px-6 page-band border-t border-brand-paper/10"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-12 lg:gap-18 items-center">
        <Reveal className="space-y-8">
          <span className="vintage-label">Contact</span>
          <h2 className="font-serif text-4xl md:text-6xl text-brand-paper leading-tight">
            Ask about a camera. Start with a conversation.
          </h2>
          <p className="font-sans text-base md:text-lg leading-relaxed text-brand-gray max-w-2xl">
            Whether you want to buy a listed camera, ask about availability, or
            understand which film camera suits you, message us directly. We will
            guide you like a person, not a checkout flow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex justify-center bg-brand-paper px-8 py-5 font-sans text-xs uppercase tracking-[0.2em] text-brand-black transition-colors duration-300 hover:bg-brand-amber"
            >
              Connect on WhatsApp
            </a>
            <a
              href="#collection"
              className="inline-flex justify-center border border-brand-paper/25 px-8 py-5 font-sans text-xs uppercase tracking-[0.2em] text-brand-paper transition-all duration-300 hover:bg-brand-paper hover:text-brand-black"
            >
              View Cameras
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.12} className="film-frame relative min-h-[460px]">
          <Image
            src="/Images/editorial/darkroom-prints.webp"
            alt="Darkroom prints hanging after development"
            fill
            loading="lazy"
            sizes="(min-width: 1024px) 48vw, 100vw"
            className="object-cover soft-photo opacity-88"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent z-10"></div>
          <p className="absolute left-8 right-8 bottom-8 z-30 italic font-serif text-2xl text-brand-paper">
            The right camera should feel like it already has a place in your
            hands.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
