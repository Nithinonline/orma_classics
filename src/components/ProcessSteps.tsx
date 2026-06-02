"use client";
import { useState, useEffect } from 'react';
import Reveal from './Reveal';

const journey = [
    {
        title: 'Loading the Film',
        image: '/Images/editorial/loading-film-hands.jpg',
        text: 'You thread the film in by hand. No auto-load, no shortcuts. Just you and the camera, beginning together.',
    },
    {
        title: 'Shooting',
        image: '/Images/editorial/lubitel-2-camera.jpg',
        text: 'You have 36 frames. Maybe fewer. Each one costs something — so each one means something.',
    },
    {
        title: 'Developing',
        image: '/Images/editorial/red-negative-close.jpg',
        text: 'In the dark, chemistry does what light began. You wait. Then you see. There is nothing quite like it.',
    },
    {
        title: 'Printing',
        image: '/Images/editorial/darkroom-prints.jpg',
        text: 'You hold the photograph. Not a file. Not a screen. A thing that exists in the world, made by your hands.',
    },
];

// Image preloading removed to reduce memory usage in hero-like sections

export default function ProcessSteps() {
    const [active, setActive] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const activeStep = journey[active];

    // preloading removed

    const handleStepChange = (index: number) => {
        if (index !== active) {
            setIsTransitioning(true);
            setTimeout(() => {
                setActive(index);
                setIsTransitioning(false);
            }, 400);
        }
    };

    return (
        <section id="journey" className="py-28 md:py-36 px-6 bg-brand-black relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(198,138,65,0.08),transparent_35%,rgba(244,231,207,0.04)_70%,transparent)] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
            <Reveal className="text-center max-w-3xl mx-auto mb-16">
                <span className="vintage-label">The Film Photography Journey</span>
                <h2 className="font-serif text-4xl md:text-6xl text-brand-paper leading-[1.1] tracking-tight mt-6 mb-6">
                    The care is the point.
                </h2>
                <p className="font-sans text-base md:text-lg leading-[1.85] tracking-wide text-brand-gray/90 max-w-xl mx-auto">
                    Film photography is slow on purpose. Every step asks something of you — and gives something back.
                </p>
            </Reveal>

                <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-16 items-stretch">
                    <Reveal className="film-frame relative min-h-[520px]">
                        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-neutral-800/30 to-transparent"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10"></div>
                        <div className="absolute left-10 right-10 bottom-10 z-30">
                            <p className="font-sans italic text-[10px] uppercase tracking-[0.35em] text-brand-amber/80 mb-4">
                                Step 0{active + 1} of 0{journey.length}
                            </p>
                            <h3 className="font-handwriting text-3xl md:text-4xl text-brand-paper mb-4">{activeStep.title}</h3>
                            <p className="font-sans italic text-sm md:text-base leading-[1.85] text-brand-paper/85">{activeStep.text}</p>
                        </div>
                    </Reveal>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {journey.map((step, index) => {
                            const selected = index === active;

                            return (
                                <Reveal
                                    key={step.title}
                                    delay={index * 0.06}
                                >
                                <button
                                    type="button"
                                    onClick={() => handleStepChange(index)}
                                    onMouseEnter={() => handleStepChange(index)}
                                    aria-pressed={selected}
                                    className={`text-left border p-6 rounded-sm min-h-[220px] transition-all duration-500 ${
                                        selected
                                        ? 'bg-brand-rust/15 text-brand-paper border-brand-rust/60'
                                        : 'bg-black/35 text-brand-gray border-brand-paper/12 hover:border-brand-rust/70 hover:bg-brand-rust/10'                                    }`}
                                >
                                    <span className={`font-serif text-3xl ${selected ? 'text-brand-rust' : 'text-brand-paper/25'}`}>
                                        0{index + 1}
                                    </span>
                                    <h3 className={`font-sans text-xs uppercase tracking-[0.22em] mt-5 mb-3 ${selected ? 'text-brand-paper' : 'text-brand-paper'}`}>
                                        {step.title}
                                    </h3>
                                    <p className={`font-sans text-sm leading-relaxed ${selected ? 'text-brand-paper/70' : 'text-brand-gray/75'}`}>
                                        {step.text}
                                    </p>
                                </button>
                                </Reveal>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
