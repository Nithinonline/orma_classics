export default function FinalCTA() {
  return (
    <section className="py-28 md:py-40 px-6 bg-[#070604] relative border-t border-brand-paper/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(198,138,65,0.10)_0%,transparent_62%)] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-7 relative z-10">
        <div className="flex items-center gap-4">
          <div className="w-8 h-[1px] bg-brand-amber/40" />
          <span className="font-sans text-[12px] tracking-[0.4em] uppercase text-brand-amber/80">
            Ready to Create
          </span>
          <div className="w-8 h-[1px] bg-brand-amber/40" />
        </div>

        <h2 className="font-serif text-4xl md:text-7xl text-brand-paper leading-[1.1] tracking-tight">
          A camera with a past. <br className="hidden md:block" />A story still
          waiting.
        </h2>

        <p className="font-sans text-base md:text-lg leading-[1.85] tracking-wide text-brand-gray/90 max-w-xl">
          Choose the camera that asks you to slow down, notice more, and create
          photographs that feel earned.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-2">
          <a
            href="#collection"
            className="inline-flex justify-center bg-brand-paper text-brand-black font-sans uppercase tracking-[0.2em] text-[10px] px-10 py-5 hover:bg-brand-amber hover:text-brand-paper transition-all duration-500 rounded-sm min-w-[220px]"
          >
            Browse Collection
          </a>
          <a
            href="#journey"
            className="inline-flex justify-center bg-transparent border border-brand-paper/20 text-brand-paper font-sans uppercase tracking-[0.2em] text-[10px] px-10 py-5 hover:bg-brand-paper hover:text-brand-black transition-all duration-500 rounded-sm min-w-[220px]"
          >
            See the Journey
          </a>
        </div>
      </div>
    </section>
  );
}
