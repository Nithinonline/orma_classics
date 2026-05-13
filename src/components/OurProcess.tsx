import Image from 'next/image';
import Reveal from './Reveal';

const processSteps = [
    'Discovered',
    'Restored',
    'Verified',
    'Ready to Create',
];

const processCopy = "Each camera begins as forgotten. We find it, we understand its history, we see its potential. Then we restore it carefully, bringing back its function and soul. We verify it works beautifully by using it ourselves, shooting real film, developing the photos, and sharing them with you so you can see exactly what this camera can do. Finally, it's ready to create memories in your hands.";

export default function OurProcess() {
    return (
        <section id="process" className="relative py-28 md:py-36 px-6 bg-brand-black overflow-hidden border-t border-brand-paper/10">
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(198,138,65,0.08),transparent_42%,rgba(142,78,47,0.08))] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-14 lg:gap-20 items-center">
                    <Reveal>
                        <span className="vintage-label">Our Process</span>
                        <h2 className="font-serif text-4xl md:text-6xl text-brand-paper leading-tight mt-6 mb-8">
                            Bringing Cameras Back to Life
                        </h2>
                        <p className="font-serif text-2xl md:text-3xl italic text-brand-paper/85 mb-10">
                            Discovered. Restored. Verified. Ready to Create.
                        </p>
                        <p className="font-sans text-base md:text-lg leading-relaxed text-brand-gray max-w-2xl">
                            {processCopy}
                        </p>
                    </Reveal>

                    <Reveal delay={0.12} className="film-frame relative min-h-[540px]">
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
                                <div key={step} className="border border-brand-paper/18 bg-black/45 p-4 rounded-sm">
                                    <span className="font-serif text-3xl text-brand-amber/70">0{index + 1}</span>
                                    <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-brand-paper mt-3">{step}</p>
                                </div>
                            ))}
                        </div>
                    </Reveal>
                </div>

                <Reveal delay={0.16} className="mt-16 grid grid-cols-1 md:grid-cols-[0.78fr_1.22fr] gap-6 md:gap-8 items-stretch">
                    <div className="border border-brand-paper/12 bg-black/30 p-7 md:p-8 rounded-sm">
                        <span className="vintage-label mb-6">Proof, not promises</span>
                        <p className="font-serif text-2xl md:text-3xl text-brand-paper leading-snug">
                            We shoot real rolls, inspect the negatives, and show what the camera can actually make.
                        </p>
                    </div>
                    <div className="film-frame relative min-h-[320px]">
                        <Image
                            src="/Images/editorial/contact-sheet.jpg"
                            alt="Contact sheet of developed film negatives"
                            fill
                            sizes="(min-width: 768px) 60vw, 100vw"
                            className="object-cover soft-photo opacity-88"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent z-10"></div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
