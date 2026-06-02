"use client";
import { useState, useEffect } from 'react';
import Reveal from './Reveal';

const journey = [
    {
        title: 'Loading the Film',
        image: '/Images/editorial/loading-film-hands.jpg',
        text: "You thread film into your camera. It's tactile, intentional, real.",
    },
    {
        title: 'Shooting',
        image: '/Images/editorial/lubitel-2-camera.jpg',
        text: 'You compose. You wait for the perfect moment. One frame at a time, each shot matters.',
    },
    {
        title: 'Developing',
        image: '/Images/editorial/red-negative-close.jpg',
        text: 'You watch your images emerge in the darkroom. Magic happens in chemistry and light. Your vision becomes real.',
    },
    {
        title: 'Printing',
        image: '/Images/editorial/darkroom-prints.jpg',
        text: "You hold your photograph in your hands. It's tangible. It's permanent. It's yours.",
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
                <Reveal className="text-center max-w-4xl mx-auto mb-16">
                    <span className="vintage-label">The Film Photography Journey</span>
                    <h2 className="font-serif text-4xl md:text-6xl text-brand-paper leading-tight mt-6 mb-8">
                        The care is the point.
                    </h2>
                    <p className="font-sans text-base md:text-lg leading-relaxed text-brand-gray">
                        After all this time, all this care, you&apos;ve created something meaningful. You&apos;ve achieved something real.
                    </p>
                </Reveal>

                <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-16 items-stretch">
                    <Reveal className="film-frame relative min-h-[520px]">
                        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-neutral-800/30 to-transparent"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10"></div>
                        <div className="absolute left-10 right-10 bottom-10 z-30">
                            <p className="font-sans text-[10px] uppercase tracking-[0.35em] text-brand-amber mb-4">
                                Frame 0{active + 1}
                            </p>
                            <h3 className="font-serif text-4xl md:text-5xl text-brand-paper mb-5">{activeStep.title}</h3>
                            <p className="font-sans text-base md:text-lg leading-relaxed text-brand-paper/75">{activeStep.text}</p>
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
                                            ? 'bg-brand-paper text-brand-black border-brand-paper'
                                            : 'bg-black/35 text-brand-gray border-brand-paper/12 hover:border-brand-amber/70 hover:bg-brand-amber/10'
                                    }`}
                                >
                                    <span className={`font-serif text-4xl ${selected ? 'text-brand-rust' : 'text-brand-paper/28'}`}>
                                        0{index + 1}
                                    </span>
                                    <h3 className={`font-sans text-sm uppercase tracking-[0.22em] mt-8 mb-4 ${selected ? 'text-brand-black' : 'text-brand-paper'}`}>
                                        {step.title}
                                    </h3>
                                    <p className={`font-sans text-sm leading-relaxed ${selected ? 'text-brand-black/70' : 'text-brand-gray/75'}`}>
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
