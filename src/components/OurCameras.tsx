// Updated OurCameras.tsx — links to /cameras/[slug] instead of WhatsApp directly
import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import camerasData from "@/data/cameras.json";

export default function OurCameras({
  featured = false,
}: {
  featured?: boolean;
}) {
  const featuredIds = ["yashica-electro-35-gsn", "yashica-electro-35-tsn"];

  const visibleCameras = featured
    ? camerasData.cameras.filter((camera) => featuredIds.includes(camera.id))
    : camerasData.cameras;

  return (
    <section
      id="collection"
      className="py-28 md:py-36 px-6 page-band border-y border-brand-paper/10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <Reveal className="mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-brand-amber font-bold block mb-4">
                {featured ? "Featured Cameras" : "Camera Listing"}
              </span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-paper leading-[1.15] tracking-tight">
                {featured
                  ? "Each one found, restored, and waiting."
                  : "Every camera here has already lived one life."}
              </h2>
            </div>

            {featured && (
              <Link
                href="/cameras"
                className="group/link inline-flex items-center gap-2 font-sans text-xs uppercase tracking-[0.2em] text-brand-amber hover:text-brand-paper transition-all duration-300 border-b border-brand-amber/30 pb-1.5 hover:border-brand-paper shrink-0 self-start md:self-end"
              >
                <span>View Full Listing</span>
                <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-1">
                  →
                </span>
              </Link>
            )}
          </div>
        </Reveal>

        <div className="w-full h-[1px] bg-brand-paper/5 mb-16" />

        {/* Cameras Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {visibleCameras.map((camera, index) => (
            <Reveal
              key={camera.id}
              delay={index * 0.08}
              className="group flex flex-col h-full bg-brand-black/30 border border-brand-paper/5 p-4 rounded-sm hover:border-brand-amber/25 hover:bg-brand-accent/10 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            >
              {/* Boxed Image Frame */}
              <div className="relative aspect-square w-full overflow-hidden border border-brand-paper/10 bg-[#070604] rounded-xs shadow-md mb-6">
                <Image
                  src={camera.image}
                  alt={`${camera.name} film camera`}
                  fill
                  loading="lazy"
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover soft-photo opacity-80 group-hover:opacity-98 group-hover:scale-[1.03] transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Text & Button Content (flexbox layout to align button at bottom) */}
              <div className="flex flex-col flex-grow justify-between">
                <div className="mb-6">
                  <span className="font-sans text-[9px] font-bold uppercase tracking-[0.22em] text-brand-amber block mb-3">
                    {camera.status}
                  </span>
                  <h3 className="font-serif text-2xl text-brand-paper mb-3 group-hover:text-brand-amber transition-colors duration-300">
                    {camera.name}
                  </h3>
                  <p className="font-sans text-xs md:text-sm leading-relaxed text-brand-gray/80">
                    {camera.note}
                  </p>
                </div>

                <Link
                  href={`/cameras/${camera.id}`}
                  className="inline-flex items-center justify-between w-full px-5 py-3.5 border border-brand-paper/20 bg-brand-paper/5 text-brand-paper text-[10px] uppercase tracking-[0.2em] font-sans transition-all duration-300 hover:border-brand-amber hover:bg-brand-amber/5 hover:text-brand-amber rounded-xs"
                >
                  <span>View Camera</span>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
