export default function FinalCTA() {
    return (
        <section className="py-28 md:py-40 px-6 bg-[#070604] relative border-t border-brand-paper/10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(198,138,65,0.10)_0%,transparent_62%)] pointer-events-none"></div>

            <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-10 relative z-10">
                <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-brand-amber/80">Ready to Create</span>
                <h2 className="font-serif text-5xl md:text-8xl text-brand-paper leading-tight">
                    A camera with a past. A story still waiting.
                </h2>

                <p className="font-sans text-brand-gray text-base md:text-xl max-w-2xl leading-relaxed">
                    Choose the camera that asks you to slow down, notice more, and create photographs that feel earned.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                    <a href="#collection" className="inline-flex justify-center bg-brand-paper text-brand-black font-sans uppercase tracking-[0.2em] text-[10px] px-10 py-5 hover:bg-brand-amber transition-all duration-500 rounded-sm min-w-[220px]">
                        Browse Collection
                    </a>
                    <a href="#journey" className="inline-flex justify-center bg-transparent border border-brand-paper/20 text-brand-paper font-sans uppercase tracking-[0.2em] text-[10px] px-10 py-5 hover:bg-brand-paper hover:text-brand-black transition-all duration-500 rounded-sm min-w-[220px]">
                        See the Journey
                    </a>
                </div>
            </div>
        </section>
    );
}
