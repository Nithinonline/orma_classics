import Image from 'next/image';
import Reveal from './Reveal';

const whatsappHref = 'https://wa.me/918301887465?text=Hi%20Orma%20Classics%2C%20I%20am%20interested%20in%20a%20film%20camera.';

const cameras = [
    {
        name: 'Lubitel 2',
        status: 'Recovered / tested',
        image: '/Images/editorial/lubitel-2-camera.jpg',
        note: 'A twin-lens camera with a slow, deliberate way of seeing.',
    },
    {
        name: 'Yashica SLR',
        status: 'Verified on film',
        image: '/Images/editorial/yashica-slr.jpg',
        note: 'Built for quiet walks, patient framing, and one meaningful roll.',
    },
    {
        name: 'Yashica Rangefinder',
        status: 'Ready to create',
        image: '/Images/editorial/yashica-rangefinder.jpg',
        note: 'Every listing follows the camera from discovery to your doorstep.',
    },
    {
        name: 'Fuji Compact',
        status: 'Cleaned / checked',
        image: '/Images/editorial/fuji-camera-table.jpg',
        note: 'A warm, pocketable camera for everyday frames and quiet observation.',
    },
    {
        name: 'Loaded 35mm SLR',
        status: 'Film transport tested',
        image: '/Images/editorial/film-loaded-back.jpg',
        note: 'A tactile body for people who want to feel every frame advance.',
    },
];

export default function OurCameras({ featured = false }: { featured?: boolean }) {
    const visibleCameras = featured ? cameras.slice(0, 3) : cameras;

    return (
        <section id="collection" className="py-28 md:py-36 px-6 page-band border-y border-brand-paper/10">
            <div className="max-w-7xl mx-auto">
                <Reveal className="max-w-3xl mb-16">
                    <span className="vintage-label">{featured ? 'Featured Cameras' : 'Camera Listing'}</span>
                    <h2 className="font-serif text-4xl md:text-6xl text-brand-paper leading-tight mt-6 mb-8">
                        {featured ? 'A few cameras ready for their next roll.' : 'Browse the collection. Follow each camera&apos;s journey.'}
                    </h2>
                    <p className="font-sans text-base md:text-lg leading-relaxed text-brand-gray">
                        {featured
                            ? 'A small selection from the cameras we restore, verify, and pass forward.'
                            : 'Browse our collection and follow each camera&apos;s journey from discovery to your doorstep.'}
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
                            <div className="absolute left-8 right-8 bottom-8 z-30">
                                <p className="vintage-label mb-3">{camera.status}</p>
                                <h3 className="font-serif text-3xl text-brand-paper mb-4">{camera.name}</h3>
                                <p className="font-sans text-sm leading-relaxed text-brand-paper/70 mb-6">{camera.note}</p>
                                <a
                                    href={`${whatsappHref}%20I%20want%20to%20know%20more%20about%20${encodeURIComponent(camera.name)}.`}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={`Connect on WhatsApp about ${camera.name}`}
                                    className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-brand-paper/25 bg-brand-paper/10 text-brand-paper transition-all duration-300 hover:bg-brand-paper hover:text-brand-black"
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
                                        <path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 8.7 8.7 0 0 1-3.4-.7L3 21l1.8-5.3a8.2 8.2 0 0 1-.8-3.6 8.5 8.5 0 1 1 17-.6Z" />
                                        <path d="M8.8 9.1c.2-.5.4-.5.7-.5h.5c.2 0 .4.1.5.4l.7 1.6c.1.3 0 .5-.1.6l-.4.5c-.1.1-.2.3 0 .5.4.8 1.1 1.5 2 1.9.2.1.4.1.5-.1l.6-.7c.2-.2.4-.2.6-.1l1.6.8c.3.1.4.3.4.5 0 .5-.3 1.3-.8 1.5-.5.3-1.7.4-3.4-.5-2.1-1.1-3.5-2.9-4-4.4-.4-1.1-.1-1.7.1-2Z" />
                                    </svg>
                                </a>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
