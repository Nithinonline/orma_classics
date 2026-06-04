// Updated OurCameras.tsx — links to /cameras/[slug] instead of WhatsApp directly
import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import camerasData from "@/data/cameras.json"; // update path if needed

export default function OurCameras({
  featured = false,
}: {
  featured?: boolean;
}) {
  const includedCameraIds = [
    "yashica-electro-35-gsn",
    "yashica-electro-35-tsn",
  ];
  const cameras = camerasData.cameras.filter((camera) =>
    includedCameraIds.includes(camera.id)
  );
  const visibleCameras = cameras;

  return (
    <section
      id="collection"
      className="py-28 md:py-36 px-6 page-band border-y border-brand-paper/10"
    >
      <div className="max-w-7xl mx-auto">
        <Reveal className="max-w-3xl mb-16">
          <span className="vintage-label">
            {featured ? "Featured Cameras" : "Camera Listing"}
          </span>
          <h2 className="font-serif text-4xl md:text-6xl text-brand-paper leading-[1.15] tracking-tight mt-6 mb-6">
            {featured
              ? "Each one found, restored, and waiting."
              : "Every camera here has already lived one life."}
          </h2>
          <p className="font-sans text-base md:text-lg leading-[1.85] tracking-wide text-brand-gray/90 max-w-xl">
            {featured
              ? "A small selection of cameras we found, restored by hand, and verified on real film."
              : "Every camera here has been found, restored, and shot on real film before it reaches you. Nothing leaves without proof."}
          </p>
          {featured && (
            <Link
              href="/cameras"
              className="mt-8 inline-flex justify-center border border-brand-paper/25 px-7 py-4 font-sans text-xs uppercase tracking-[0.2em] text-brand-paper transition-all duration-300 hover:bg-brand-paper hover:text-brand-black"
            >
              View Full Listing
            </Link>
          )}
        </Reveal>
        <div className="w-26 h-[1px] bg-brand-rust/30 mb-16" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visibleCameras.map((camera, index) => (
            <Reveal
              key={camera.id}
              delay={index * 0.08}
              className="film-frame group relative min-h-[520px] rounded-sm"
            >
              <Image
                src={camera.image}
                alt={`${camera.name} film camera`}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover soft-photo opacity-78 group-hover:opacity-95 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent z-10" />
              <div className="absolute left-8 right-8 bottom-8 z-30">
                <p className="vintage-label mb-3">{camera.status}</p>
                <h3 className="font-serif text-2xl text-brand-paper mb-3">
                  {camera.name}
                </h3>
                <p className="font-sans text-sm leading-relaxed text-brand-paper/80 mb-6">
                  {camera.note}
                </p>
                {/* Links to detail page instead of WhatsApp directly */}
                <Link
                  href={`/cameras/${camera.id}`}
                  className="inline-flex items-center gap-2 px-4 h-11 rounded-sm border border-brand-paper/25 bg-brand-paper/10 text-brand-paper text-xs uppercase tracking-[0.15em] font-sans transition-all duration-300 hover:bg-brand-paper hover:text-brand-black"
                >
                  View Camera
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
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
