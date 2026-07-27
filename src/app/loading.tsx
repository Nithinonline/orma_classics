export default function Loading() {
  return (
    <div
      className="fixed inset-0 z-[110] flex flex-col items-center justify-center bg-[#060403]"
      role="status"
      aria-label="Loading"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06] bg-noise"
        aria-hidden
      />
      <p className="font-serif text-sm tracking-[0.35em] uppercase text-brand-paper/80 mb-10">
        Orma Classics
      </p>
      <div className="film-roll" aria-hidden>
        <div className="film-roll-edge film-roll-edge-left" />
        <div className="film-roll-strip">
          <div className="film-roll-track">
            {Array.from({ length: 16 }, (_, i) => (
              <div key={i} className="film-roll-frame">
                <span className="film-roll-frame-inner" />
              </div>
            ))}
          </div>
        </div>
        <div className="film-roll-edge film-roll-edge-right" />
      </div>
      <p className="mt-10 font-sans text-[0.62rem] tracking-[0.28em] uppercase text-brand-amber/70">
        Advancing roll…
      </p>
    </div>
  );
}
