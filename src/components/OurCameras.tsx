import Image from 'next/image';
import Reveal from './Reveal';
import camerasData from '../data/cameras.json';

type Camera = {
    name: string;
    status: string;
    image: string;
    note: string;
};

const whatsappHref = 'https://wa.me/918301887465?text=Hi%20Orma%20Classics%2C%20I%20am%20interested%20in%20a%20film%20camera.';

const cameras: Camera[] = camerasData.cameras;

export default function OurCameras({ featured = false }: { featured?: boolean }) {
    const visibleCameras = featured ? cameras.slice(0, 3) : cameras;

    return (
        <section id="collection" className="py-28 md:py-36 px-6 page-band border-y border-brand-paper/10">
            <div className="max-w-7xl mx-auto">
                <Reveal className="max-w-3xl mb-16">
                    <span className="vintage-label">{featured ? 'Featured Cameras' : 'Camera Listing'}</span>
                    <h2 className="font-serif text-4xl md:text-6xl text-brand-paper leading-tight mt-6 mb-8">
                        {featured ? 'Restored Classics' : 'Browse the collection. Follow each cameras journey.'}
                    </h2>
                    <p className="font-sans text-base md:text-lg leading-relaxed text-brand-gray">
                        {featured
                            ? 'Film cameras brought back with care, ready to create new memories. Each piece is carefully restored, tested, and prepared for its next story.'
                            : 'Browse our collection and follow each cameras journey from discovery to your doorstep.'}
                    </p>
                    {featured && (
                        <a href="/cameras" className="mt-8 inline-flex justify-center border border-brand-paper/25 px-7 py-4 font-sans text-xs uppercase tracking-[0.2em] text-brand-paper transition-all duration-300 hover:bg-brand-paper hover:text-brand-black">
                            View Full Listing
                        </a>
                    )}
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {visibleCameras.map((camera, index) => (
                        <Reveal key={camera.name} delay={index * 0.08} className="film-frame group relative min-h-[520px] rounded-sm">
                            <Image
                                src={camera.image}
                                alt={`${camera.name} film camera`}
                                fill
                                sizes="(min-width: 768px) 33vw, 100vw"
                                className="object-cover soft-photo opacity-78 group-hover:opacity-95 group-hover:scale-105 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent z-10"></div>
                            <a
                                href={`${whatsappHref}%20I%20want%20to%20know%20more%20about%20${encodeURIComponent(camera.name)}.`}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={`Buy ${camera.name}`}
                                className="absolute top-8 right-8 z-30 inline-flex h-11 w-11 items-center justify-center rounded-sm border border-brand-paper/25 bg-brand-paper/10 text-brand-paper transition-all duration-300 hover:bg-brand-paper hover:text-brand-black"
                            >
                                <svg
                                    aria-hidden="true"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.7"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <circle cx="9" cy="21" r="1" />
                                    <circle cx="20" cy="21" r="1" />
                                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                                </svg>
                            </a>
                            <div className="absolute left-8 right-8 bottom-8 z-30">
                                <p className="vintage-label mb-3">{camera.status}</p>
                                <h3 className="font-serif text-3xl text-brand-paper mb-4">{camera.name}</h3>
                                <p className="font-sans text-sm leading-relaxed text-brand-paper/70 mb-6">{camera.note}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
