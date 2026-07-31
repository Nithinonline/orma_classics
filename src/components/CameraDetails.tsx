// src/components/CameraDetails.tsx
// Drop-in replacement — uses only Tailwind + CSS animations, no extra libs needed

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import camerasData from "@/data/cameras.json";

type Camera = {
  id: string;
  name: string;
  status: string;
  image: string;
  images?: string[]; // optional array of additional photos
  coverImage?: number; // 1-based index into images for the details hero
  note: string;
  type: string;
  origin: string;
  film: string;
  lens: string;
  shutter: string;
  story: string;
  testFilm?: string;
  price: string;
  available: boolean;
};

function closeLookImages(camera: Camera): string[] {
  if (camera.images && camera.images.length > 0) return camera.images;
  return [camera.image];
}

function closeLookHero(camera: Camera): string {
  const images = closeLookImages(camera);
  const coverIndex =
    typeof camera.coverImage === "number" ? camera.coverImage - 1 : 0;
  if (coverIndex >= 0 && coverIndex < images.length) return images[coverIndex];
  return images[0];
}

type Props = {
  params: Promise<{ id: string }>;
};

const whatsappBase =
  "https://wa.me/917994080742?text=Hi%20Orma%20Classics%2C%20I%20am%20interested%20in%20a%20film%20camera.%20I%20want%20to%20know%20more%20about%20";

export default async function CameraDetailPage({ params }: Props) {
  const { id } = await params;

  const cameras = camerasData.cameras as Camera[];
  const cameraIndex = cameras.findIndex((c) => c.id === id);
  const camera = cameras[cameraIndex] as Camera | undefined;

  if (!camera) notFound();

  const whatsappHref = `${whatsappBase}${encodeURIComponent(camera.name)}.`;

  // Prev / Next navigation
  const prevCamera = cameraIndex > 0 ? cameras[cameraIndex - 1] : null;
  const nextCamera =
    cameraIndex < cameras.length - 1 ? cameras[cameraIndex + 1] : null;

  const specs = [
    { label: "Type", value: camera.type },
    { label: "Origin", value: camera.origin },
    { label: "Film Format", value: camera.film },
    { label: "Lens", value: camera.lens },
    { label: "Shutter", value: camera.shutter },
    ...(camera.testFilm
      ? [{ label: "Test Film", value: camera.testFilm }]
      : []),
    { label: "Price", value: camera.price },
    { label: "Availability", value: camera.available ? "Available" : "Sold" },
  ];

  // Journey steps derived from status
  const journey = [
    { step: "01", label: "Discovered", done: true },
    {
      step: "02",
      label: "Restored",
      done: [
        "Restored",
        "Verified on film",
        "Recovered / tested",
        "Film transport tested",
        "Ready to create",
        "Cleaned / checked",
      ].includes(camera.status),
    },
    {
      step: "03",
      label: "Verified on film",
      done: ["Verified on film", "Ready to create"].includes(camera.status),
    },
    {
      step: "04",
      label: "Ready to create",
      done: camera.status === "Ready to create",
    },
  ];

  // Details page uses only close-look product photos
  const galleryImages = closeLookImages(camera);
  const heroImage = closeLookHero(camera);
  const hasMultipleImages = galleryImages.length > 1;

  // Dynamically build the CSS rules that wire each radio input to its slide + thumbnail.
  // Reset all slides/thumbs first so the default .gallery-slide-0 rule does not stack.
  const galleryCss = galleryImages
    .map(
      (_, i) => `
        #gallery-img-${i}:checked ~ .gallery-main .gallery-slide {
          opacity: 0;
          z-index: 0;
        }
        #gallery-img-${i}:checked ~ .gallery-main .gallery-slide-${i} {
          opacity: 1;
          z-index: 2;
        }
        #gallery-img-${i}:checked ~ .gallery-main .gallery-thumbs .gallery-thumb {
          border-color: transparent;
          opacity: 0.5;
        }
        #gallery-img-${i}:checked ~ .gallery-main .gallery-thumbs .gallery-thumb-${i} {
          border-color: var(--color-brand-rust, #b5642f);
          opacity: 1;
        }
      `,
    )
    .join("\n");

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes scaleX {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        .anim-fade-up   { animation: fadeUp 0.9s cubic-bezier(.22,1,.36,1) both; }
        .anim-fade-in   { animation: fadeIn 1.2s ease both; }
        .anim-scale-x   { animation: scaleX 0.8s cubic-bezier(.22,1,.36,1) both; transform-origin: left; }
        .delay-1 { animation-delay: 0.15s; }
        .delay-2 { animation-delay: 0.3s;  }
        .delay-3 { animation-delay: 0.45s; }
        .delay-4 { animation-delay: 0.6s;  }
        .delay-5 { animation-delay: 0.75s; }
        .delay-6 { animation-delay: 0.9s;  }
        .grain::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Ccircle cx='12' cy='28' r='0.8' fill='%23fff' opacity='0.55'/%3E%3Ccircle cx='48' cy='8' r='0.6' fill='%23fff' opacity='0.4'/%3E%3Ccircle cx='92' cy='44' r='0.7' fill='%23fff' opacity='0.5'/%3E%3Ccircle cx='130' cy='18' r='0.5' fill='%23fff' opacity='0.35'/%3E%3Ccircle cx='24' cy='76' r='0.6' fill='%23fff' opacity='0.45'/%3E%3Ccircle cx='68' cy='98' r='0.8' fill='%23fff' opacity='0.5'/%3E%3Ccircle cx='110' cy='72' r='0.5' fill='%23fff' opacity='0.4'/%3E%3Ccircle cx='148' cy='108' r='0.7' fill='%23fff' opacity='0.45'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 160px 160px;
          opacity: 0.35;
          pointer-events: none;
          z-index: 20;
        }

        /* ── CSS-only gallery carousel (no JS/useState needed) ── */
        .gallery-radio { position: absolute; opacity: 0; pointer-events: none; }
        .gallery-slide {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 0.5s ease;
        }
        .gallery-slide-0 { opacity: 1; z-index: 2; } /* default visible slide */
        .gallery-thumb {
          transition: opacity 0.3s ease, border-color 0.3s ease;
        }
        .gallery-thumb-0 {
          border-color: var(--color-brand-rust, #b5642f);
          opacity: 1;
        }
        ${galleryCss}        
         `}</style>

      <main className="min-h-screen-safe bg-brand-black text-brand-paper overflow-x-hidden">
        {/* ── Hero ── */}
        <section className="relative h-screen-safe w-full overflow-x-hidden grain">
          <Image
            src={heroImage}
            alt={`${camera.name}`}
            fill
            priority
            sizes="100vw"
            className="object-cover anim-fade-in"
            style={{ animationDuration: "1.8s" }}
          />
          {/* layered gradients for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/50 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black/40 to-transparent z-10" />

          {/* Back link */}
          <div className="absolute top-15 left-6 md:left-12 z-30 anim-fade-up">
            <Link
              href="/cameras"
              className="inline-flex items-center gap-2 font-sans text-[10px] uppercase tracking-[0.25em] text-brand-paper/50 hover:text-brand-paper transition-colors duration-300"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 12H5M12 5l-7 7 7 7" />
              </svg>
              All Cameras
            </Link>
          </div>

          {/* Camera number */}
          <div className="absolute top-8 right-6 md:right-12 z-30 anim-fade-up delay-1">
            <span className="font-serif text-[72px] md:text-[120px] leading-none text-brand-paper/5 select-none">
              {String(cameraIndex + 1).padStart(2, "0")}
            </span>
          </div>

          {/* Hero text */}
          <div className="absolute bottom-0 left-0 right-0 z-20 px-6 md:px-16 pb-20 md:pb-28">
            <div className="max-w-5xl">
              <div className="anim-fade-up delay-1">
                <span className="vintage-label">{camera.status}</span>
              </div>
              <h1 className="font-serif text-6xl md:text-8xl lg:text-[100px] text-brand-paper leading-[0.95] tracking-tight mt-5 mb-6 anim-fade-up delay-2">
                {camera.name}
              </h1>
              <div className="w-16 h-[1px] bg-brand-rust/60 mb-6 anim-scale-x delay-3" />
              <p className="font-sans text-base md:text-lg text-brand-paper/70 leading-relaxed max-w-lg anim-fade-up delay-4">
                {camera.note}
              </p>
            </div>
          </div>

          {/* Scroll hint */}
          <div className="absolute bottom-8 right-6 md:right-12 z-30 flex flex-col items-center gap-2 anim-fade-up delay-6">
            <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-brand-paper/30 [writing-mode:vertical-rl]">
              Scroll
            </span>
            <div className="w-[1px] h-10 bg-brand-paper/20" />
          </div>
        </section>

        {/* ── Journey tracker ── */}
        <section className="border-y border-brand-paper/10 px-5 sm:px-6 md:px-16 py-6 md:py-8">
          <div className="max-w-6xl md:px-12 mx-auto">
            {/* Mobile: vertical timeline */}
            <ol className="flex flex-col sm:hidden" aria-label="Camera journey">
              {journey.map((step, i) => (
                <li key={step.step} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-8 h-8 rounded-full border-2 flex items-center justify-center shrink-0 ${
                        step.done
                          ? "border-brand-rust bg-brand-rust/25"
                          : "border-brand-paper/35 bg-transparent"
                      }`}
                    >
                      {step.done ? (
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-brand-rust"
                          aria-hidden
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      ) : (
                        <span className="w-2 h-2 rounded-full bg-brand-paper/40" />
                      )}
                    </div>
                    {i < journey.length - 1 && (
                      <div
                        className={`w-[2px] flex-1 min-h-5 my-1 ${
                          step.done ? "bg-brand-rust/50" : "bg-brand-paper/20"
                        }`}
                      />
                    )}
                  </div>
                  <span
                    className={`pt-1.5 font-sans text-[11px] uppercase tracking-[0.16em] leading-snug ${
                      step.done ? "text-brand-paper/90" : "text-brand-paper/45"
                    }`}
                  >
                    {step.label}
                  </span>
                </li>
              ))}
            </ol>

            {/* sm+: horizontal stepper */}
            <ol
              className="hidden sm:flex items-start gap-0"
              aria-label="Camera journey"
            >
              {journey.map((step, i) => (
                <li key={step.step} className="flex items-start flex-1 min-w-0">
                  <div className="flex flex-col items-center gap-2.5 shrink-0 max-w-full">
                    <div
                      className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${
                        step.done
                          ? "border-brand-rust bg-brand-rust/25"
                          : "border-brand-paper/35 bg-transparent"
                      }`}
                    >
                      {step.done ? (
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-brand-rust"
                          aria-hidden
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      ) : (
                        <span className="w-2 h-2 rounded-full bg-brand-paper/40" />
                      )}
                    </div>
                    <span
                      className={`font-sans text-[10px] md:text-[11px] uppercase tracking-[0.14em] md:tracking-[0.18em] text-center leading-snug px-1 ${
                        step.done
                          ? "text-brand-paper/90"
                          : "text-brand-paper/45"
                      }`}
                    >
                      {step.label}
                    </span>
                  </div>
                  {i < journey.length - 1 && (
                    <div
                      className={`flex-1 h-[2px] mx-2 md:mx-3 mt-4 min-w-3 ${
                        step.done ? "bg-brand-rust/55" : "bg-brand-paper/20"
                      }`}
                    />
                  )}
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── Story + Specs ── */}
        <section className="max-w-6xl mx-auto px-6 md:px-12 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-16 md:gap-24">
            {/* Story */}
            <div>
              <span className="vintage-label block mb-5">The Story</span>
              <div className="w-10 h-[1px] bg-brand-rust/40 mb-8" />
              <p className="font-sans italic text-lg md:text-xl leading-[1.95] tracking-wide text-brand-paper/80">
                {camera.story}
              </p>
            </div>

            {/* Specs — sticky sidebar */}
            <div className="md:sticky md:top-28 md:self-start">
              <span className="vintage-label block mb-5">Specifications</span>
              <div className="w-10 h-[1px] bg-brand-rust/40 mb-8" />
              <dl className="space-y-0">
                {specs.map((spec, i) => (
                  <div
                    key={spec.label}
                    className={`flex flex-col gap-1 py-4 ${i < specs.length - 1 ? "border-b border-brand-paper/8" : ""}`}
                  >
                    <dt className="font-sans text-[10px] uppercase tracking-[0.22em] text-brand-paper/35">
                      {spec.label}
                    </dt>
                    <dd
                      className={`font-sans text-sm leading-relaxed ${spec.label === "Availability" ? (camera.available ? "text-emerald-500/80" : "text-brand-rust/80") : "text-brand-paper/85"}`}
                    >
                      {spec.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* ── Gallery: full, sharp view of the camera ── */}
        <section className="border-b border-brand-paper/10 px-6 md:px-16 py-12 md:py-16">
          <div className="max-w-6xl mx-auto">
            <span className="vintage-label block mb-5">A Closer Look</span>
            <div className="w-10 h-[1px] bg-brand-rust/40 mb-6" />

            {/* hidden radio inputs — drive which slide/thumbnail is active, no JS needed */}
            {galleryImages.map((_, i) => (
              <input
                key={`radio-${i}`}
                type="radio"
                name="gallery"
                id={`gallery-img-${i}`}
                defaultChecked={i === 0}
                className="gallery-radio"
              />
            ))}

            <div className="gallery-main relative w-full h-[320px] sm:h-[480px] md:h-[680px] lg:h-[600px] rounded-lg overflow-hidden bg-black/40 border border-brand-paper/10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
              {galleryImages.map((img, i) => (
                <div
                  key={img}
                  className={`gallery-slide gallery-slide-${i} group`}
                >
                  <Image
                    src={img}
                    alt={`${camera.name} — photo ${i + 1}`}
                    fill
                    sizes="(min-width: 768px) 90vw, 100vw"
                    className="object-contain transition-transform duration-700 ease-out group-hover:scale-105"
                    priority={i === 0}
                  />
                </div>
              ))}

              {/* viewfinder-style corner brackets — smaller & closer to edge on mobile */}
              <div className="hidden sm:block absolute top-5 left-5 w-8 h-8 border-t-2 border-l-2 border-brand-paper/40 z-20 pointer-events-none" />
              <div className="hidden sm:block absolute top-5 right-5 w-8 h-8 border-t-2 border-r-2 border-brand-paper/40 z-20 pointer-events-none" />
              <div className="hidden sm:block absolute bottom-5 left-5 w-8 h-8 border-b-2 border-l-2 border-brand-paper/40 z-20 pointer-events-none" />
              <div className="hidden sm:block absolute bottom-5 right-5 w-8 h-8 border-b-2 border-r-2 border-brand-paper/40 z-20 pointer-events-none" />
              {hasMultipleImages && (
                <>
                  {/* gradient so thumbnails stay legible over any photo */}
                  <div className="absolute inset-x-0 bottom-0 h-20 sm:h-32 bg-gradient-to-t from-black/70 to-transparent z-10 pointer-events-none" />

                  {/* photo count badge */}
                  <span className="absolute top-4 right-4 sm:top-6 z-20 font-sans text-[8px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-brand-paper/70 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full">
                    {galleryImages.length} Photos
                  </span>

                  {/* thumbnail previews — overlaid, centered at bottom of the main image */}
                  <div className="gallery-thumbs absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 sm:gap-2 max-w-[92%] sm:max-w-[90%] overflow-x-auto px-2">
                    {galleryImages.map((img, i) => (
                      <label
                        key={img}
                        htmlFor={`gallery-img-${i}`}
                        className={`gallery-thumb gallery-thumb-${i} relative shrink-0 w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-sm overflow-hidden block border-2 border-transparent opacity-50 cursor-pointer transition-all duration-300 hover:opacity-80`}
                      >
                        <Image
                          src={img}
                          alt={`${camera.name} thumbnail ${i + 1}`}
                          fill
                          sizes="64px"
                          className="object-cover"
                        />
                      </label>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </section>

        {/* ── CTA band ── */}
        <section className="border-t border-brand-paper/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-paper/[0.03] via-transparent to-brand-rust/[0.04] pointer-events-none" />

          <div className="max-w-6xl mx-auto px-6 md:px-12 py-20 md:py-20 relative z-10">
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-12">
              <div className="max-w-xl">
                <p className="font-serif text-4xl md:text-5xl text-brand-paper mb-5 leading-[1.1]">
                  This camera is waiting
                  <br /> for someone like you.
                </p>
                <p className="font-sans text-sm text-brand-paper/45 tracking-wide leading-relaxed max-w-sm">
                  No checkout. No cart. Just a conversation about whether this
                  camera is right for you.
                </p>
              </div>

              <div className="flex flex-col items-start md:items-end gap-4">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-5 border border-brand-paper/25 font-sans text-xs uppercase tracking-[0.2em] text-brand-paper transition-all duration-300 hover:bg-brand-paper hover:text-brand-black"
                >
                  <svg
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
                  Connect on WhatsApp
                </a>
                <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-brand-paper/25">
                  We respond in person.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Prev / Next navigation ── */}
        {(prevCamera || nextCamera) && (
          <section className="border-t border-brand-paper/10">
            <div className="grid grid-cols-2 divide-x divide-brand-paper/10">
              {prevCamera ? (
                <Link
                  href={`/cameras/${prevCamera.id}`}
                  className="group relative overflow-hidden min-h-[220px] flex flex-col justify-end p-8 md:p-10"
                >
                  <Image
                    src={closeLookHero(prevCamera)}
                    alt={prevCamera.name}
                    fill
                    loading="lazy"
                    sizes="50vw"
                    className="object-cover opacity-25 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 to-transparent" />
                  <div className="relative z-10">
                    <span className="font-sans text-[9px] uppercase tracking-[0.25em] text-brand-paper/35 block mb-2">
                      ← Previous
                    </span>
                    <p className="font-serif text-xl md:text-2xl text-brand-paper group-hover:text-brand-paper/80 transition-colors">
                      {prevCamera.name}
                    </p>
                  </div>
                </Link>
              ) : (
                <div />
              )}

              {nextCamera ? (
                <Link
                  href={`/cameras/${nextCamera.id}`}
                  className="group relative overflow-hidden min-h-[220px] flex flex-col justify-end items-end text-right p-8 md:p-10"
                >
                  <Image
                    src={closeLookHero(nextCamera)}
                    alt={nextCamera.name}
                    fill
                    loading="lazy"
                    sizes="50vw"
                    className="object-cover opacity-25 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 to-transparent" />
                  <div className="relative z-10">
                    <span className="font-sans text-[9px] uppercase tracking-[0.25em] text-brand-paper/35 block mb-2">
                      Next →
                    </span>
                    <p className="font-serif text-xl md:text-2xl text-brand-paper group-hover:text-brand-paper/80 transition-colors">
                      {nextCamera.name}
                    </p>
                  </div>
                </Link>
              ) : (
                <div />
              )}
            </div>
          </section>
        )}
      </main>
    </>
  );
}
