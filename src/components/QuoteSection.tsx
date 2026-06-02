export default function QuoteSection() {
  return (
    <section className="py-40 px-6 relative flex flex-col items-center justify-center text-center bg-brand-black/50">
      <div className="absolute top-0 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-brand-accent to-transparent"></div>

      <div className="max-w-4xl mx-auto flex flex-col items-center gap-10">
        <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-brand-gray/40">
          OUR VISION
        </span>

        <h2 className="font-serif text-4xl md:text-6xl text-brand-white leading-tight">
          Reviving the Art <br /> of Remembering
        </h2>

        <div className="max-w-2xl text-brand-gray font-sans text-base md:text-lg leading-relaxed text-center space-y-6">
          <p>Orma Classics is about more than vintage cameras.</p>
          <p className="text-brand-white/80 italic font-serif text-xl md:text-2xl">
            It&apos;s about intention. It&apos;s about meaning. It&apos;s about
            creating fewer, but more valuable memories.
          </p>
          <p className="font-sans text-[10px] tracking-[0.5em] uppercase pt-4 opacity-50">
            One frame at a time.
          </p>
        </div>
      </div>
    </section>
  );
}
