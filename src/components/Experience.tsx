export default function Experience() {
  const points = [
    {
      title: "You slow down.",
      desc: "The physical limit of 36 frames makes every shutter press a conscious decision.",
    },
    {
      title: "You think.",
      desc: "Considering light, shadows, and composition before the moment passes.",
    },
    {
      title: "You wait.",
      desc: "The delay between capture and result is part of the magic.",
    },
  ];

  return (
    <section className="py-32 px-6 bg-brand-black/95 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <div className="mb-24 flex flex-col items-center gap-6">
          <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-brand-gray/40">
            The Experience
          </span>
          <h2 className="font-serif text-5xl md:text-7xl text-brand-white leading-tight">
            More Than Just <br /> a Camera
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-16 text-brand-gray font-sans leading-relaxed text-lg md:text-xl">
          <p>When you shoot on film, something changes.</p>
          <p className="font-serif italic text-2xl md:text-3xl text-brand-white/80">
            You don&apos;t take photos the same way anymore.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12">
            {points.map((p, i) => (
              <div key={i} className="flex flex-col gap-4 items-center">
                <h3 className="text-brand-white font-serif italic text-xl">
                  {p.title}
                </h3>
                <p className="text-xs tracking-widest leading-loose uppercase text-brand-gray/60">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>

          <p className="pt-12 text-brand-white/90">
            And when you finally see the photograph - <br />
            <span className="text-3xl md:text-5xl font-serif mt-4 block">
              it feels earned.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
