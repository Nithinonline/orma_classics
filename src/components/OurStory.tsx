import Image from 'next/image';
import Reveal from './Reveal';

const storyCopy = [
    "It began with an old camera we found tucked away on a shelf at home — a film camera that had belonged to one of our fathers, untouched for years, quietly carrying time within it.",
    "Alongside it were a few photographs taken long ago. Simple moments, yet they felt different. Every frame carried intention, care, and a reason to exist.",
    "Unlike the thousands of digital photos we take and forget, these felt remembered before they were even developed. Holding them created an emotional connection we didn’t expect.",
    "That experience changed the way we saw film cameras. They are not just vintage objects — they teach patience, presence, and the beauty of slowing down.",
    "Over time, we realized how many of these cameras now sit forgotten on shelves, their stories left unfinished. But we believe they still deserve a second life with someone who understands their value.",
];

export default function OurStory() {
    return (
        <section id="story" className="py-28 md:py-36 px-6 page-band border-t border-brand-paper/10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-14 lg:gap-20 items-center">
                <Reveal className="film-frame relative aspect-[4/5] max-w-xl w-full mx-auto">
                    <Image
                        src="/Images/editorial/fuji-camera-table.jpg"
                        alt="Vintage camera resting on a wooden table"
                        fill
                        sizes="(min-width: 1024px) 45vw, 100vw"
                        className="object-cover soft-photo opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent z-20"></div>
                    <p className="absolute left-10 bottom-10 z-30 font-sans text-[10px] uppercase tracking-[0.35em] text-brand-paper/70">
                        The first camera changed everything
                    </p>
                </Reveal>

                <Reveal delay={0.12}>
                    <span className="vintage-label">Our Story</span>
                    <h2 className="font-handwriting text-4xl md:text-6xl text-brand-paper leading-[1.15] mt-6 mb-4">
                        <span className="text-brand-rust/60 text-6xl md:text-8xl leading-none">&ldquo;</span>
                        Curiosity became care.
                        <br className="hidden md:block" />
                        Care became a second life.
                    </h2>
                    <div className="w-12 h-[1px] bg-brand-rust/40 mb-8" />
                    <div className="space-y-4 font-sans italic text-brand-gray/90 leading-[1.9] text-sm md:text-xl tracking-wide max-w-xl">
                        {storyCopy.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                        ))}
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
