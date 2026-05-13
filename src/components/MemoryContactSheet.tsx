"use client";

import Image from 'next/image';
import { useState } from 'react';

const frames = [
    {
        title: '36 Chances',
        kicker: 'A roll has a limit',
        image: '/Images/HeroSection/ezgif-frame-042.png',
        body: 'Scarcity changes behavior. You wait for the frame that deserves to exist.',
        stat: '36',
    },
    {
        title: 'Slower Hands',
        kicker: 'A camera you operate',
        image: '/Images/story/old-camera.png',
        body: 'Film cameras make your hands part of the memory: wind, focus, meter, breathe, release.',
        stat: '01',
    },
    {
        title: 'Real Artifacts',
        kicker: 'Not just storage',
        image: '/Images/matter/family.png',
        body: 'A photograph can be held, found, framed, gifted, and inherited. That physical life matters.',
        stat: '1:1',
    },
];

export default function MemoryContactSheet() {
    const [active, setActive] = useState(0);
    const selected = frames[active];

    return (
        <section className="relative py-28 px-6 bg-[#090806] overflow-hidden border-t border-brand-paper/10">
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-brand-black to-transparent pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-20 items-center">
                <div className="space-y-8">
                    <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-brand-amber/70">Why It Feels Different</span>
                    <h2 className="font-serif text-4xl md:text-6xl text-brand-paper leading-tight">
                        Fewer Frames. <br /> Deeper Memory.
                    </h2>
                    <p className="font-sans text-brand-gray leading-relaxed text-base md:text-lg max-w-xl">
                        Digital photos are easy to make and easier to forget. Film creates a little friction, and that friction gives the moment value before you even see the result.
                    </p>

                    <div className="grid grid-cols-3 gap-3 max-w-xl">
                        {frames.map((frame, index) => (
                            <button
                                key={frame.title}
                                type="button"
                                onClick={() => setActive(index)}
                                onMouseEnter={() => setActive(index)}
                                className={`relative aspect-[4/5] overflow-hidden rounded-sm border transition-all duration-500 ${
                                    active === index ? 'border-brand-paper scale-[1.02]' : 'border-brand-paper/15 opacity-60 hover:opacity-100'
                                }`}
                                aria-label={`Show ${frame.title}`}
                            >
                                <Image
                                    src={frame.image}
                                    alt=""
                                    fill
                                    sizes="(min-width: 1024px) 11vw, 30vw"
                                    className="object-cover grayscale sepia"
                                />
                                <span className="absolute inset-x-0 bottom-0 bg-black/70 px-2 py-3 font-sans text-[9px] uppercase tracking-widest text-brand-paper">
                                    {frame.title}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                <div className="film-frame min-h-[520px]">
                    <Image
                        key={selected.image}
                        src={selected.image}
                        alt={`${selected.title} film value image`}
                        fill
                        sizes="(min-width: 1024px) 55vw, 100vw"
                        className="object-cover grayscale sepia opacity-80 transition-all duration-700"
                    />
                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
                    <div className="absolute top-8 right-10 z-30 font-serif text-7xl md:text-8xl text-brand-paper/20">
                        {selected.stat}
                    </div>
                    <div className="absolute left-10 right-10 bottom-10 z-30 max-w-xl">
                        <p className="font-sans text-[10px] uppercase tracking-[0.35em] text-brand-amber mb-4">{selected.kicker}</p>
                        <h3 className="font-serif text-4xl md:text-6xl text-brand-paper mb-5">{selected.title}</h3>
                        <p className="font-sans text-brand-paper/75 leading-relaxed text-base md:text-lg">{selected.body}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
