import Image from 'next/image';

export default function WhyFilmMatters() {
    return (
        <section id="archive" className="relative py-32 px-6 bg-brand-black border-t border-brand-accent/50">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-center">

                <div className="w-full md:w-1/2 flex flex-col gap-8">
                    <h2 className="font-serif text-5xl md:text-6xl text-brand-white leading-tight">
                        WHY FILM <br /> STILL MATTERS
                    </h2>

                    <div className="space-y-12 text-brand-gray font-sans leading-relaxed">
                        <div className="space-y-3">
                            <h3 className="text-brand-white text-sm uppercase tracking-widest font-semibold flex items-center gap-4">
                                <span className="w-4 h-[1px] bg-brand-accent"></span>
                                Slowing Down
                            </h3>
                            <p className="text-sm md:text-base pl-8 text-brand-gray/80">
                                Film makes you pause. It asks you to wait, observe, and choose your moment.
                            </p>
                        </div>

                        <div className="space-y-3">
                            <h3 className="text-brand-white text-sm uppercase tracking-widest font-semibold flex items-center gap-4">
                                <span className="w-4 h-[1px] bg-brand-accent"></span>
                                Imperfection is Real
                            </h3>
                            <p className="text-sm md:text-base pl-8 text-brand-gray/80">
                                Grain, light leaks, soft focus - these aren&apos;t flaws. They&apos;re what make each photo human.
                            </p>
                        </div>

                        <div className="space-y-3">
                            <h3 className="text-brand-white text-sm uppercase tracking-widest font-semibold flex items-center gap-4">
                                <span className="w-4 h-[1px] bg-brand-accent"></span>
                                Memories You Can Feel
                            </h3>
                            <p className="text-sm md:text-base pl-8 text-brand-gray/80">
                                Not just stored somewhere, but something you can hold, revisit, and pass on.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-1/2 relative space-y-4 md:space-y-0 md:h-[600px]">
                    <div className="relative md:absolute top-0 right-10 w-full md:w-[70%] aspect-[4/3] bg-brand-accent border border-brand-white/5 overflow-hidden group">
                        <Image
                            src="/Images/matter/couple.png"
                            alt="Analog photography couple"
                            fill
                            className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 grayscale contrast-125"
                        />
                    </div>

                    <div className="relative md:absolute bottom-0 right-0 w-[80%] md:w-[60%] aspect-square bg-brand-accent border border-brand-white/10 z-10 shadow-2xl overflow-hidden group">
                        <Image
                            src="/Images/matter/family.png"
                            alt="Analog photography family"
                            fill
                            className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 grayscale contrast-125"
                        />
                    </div>

                    <div className="hidden md:flex absolute bottom-20 left-0 w-32 h-32 bg-brand-accent/50 border border-brand-white/10 items-center justify-center backdrop-blur-md z-20">
                        <span className="text-brand-gray/50 text-[10px] tracking-widest uppercase text-center">Film<br />Artifact</span>
                    </div>
                </div>

            </div>
        </section>
    );
}
