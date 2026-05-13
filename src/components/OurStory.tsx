import Image from 'next/image';
import Reveal from './Reveal';

const storyCopy = [
    "It started with curiosity. My father's vintage camera. The weight of it in my hands. Photos that took my breath away.",
    "That's when we realized these cameras aren't just objects. They're gateways to being present. They're teachers of patience.",
    "They transform how you see. And they deserve a second life with someone who understands their value.",
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent z-10"></div>
                    <p className="absolute left-10 bottom-10 z-30 font-sans text-[10px] uppercase tracking-[0.35em] text-brand-paper/70">
                        The first camera changed everything
                    </p>
                </Reveal>

                <Reveal delay={0.12}>
                    <span className="vintage-label">Our Story</span>
                    <h2 className="font-serif text-4xl md:text-6xl text-brand-paper leading-tight mt-6 mb-10">
                        Curiosity became care. Care became a second life.
                    </h2>
                    <div className="space-y-7 text-brand-gray font-sans leading-relaxed text-base md:text-lg max-w-2xl">
                        {storyCopy.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                        ))}
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
