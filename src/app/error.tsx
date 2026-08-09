"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen-safe flex flex-col items-center justify-center bg-[#060403] px-6 text-center">
      <p className="font-serif text-sm tracking-[0.35em] uppercase text-brand-paper/80 mb-6">
        Orma Classics
      </p>
      <h1 className="font-serif text-3xl text-brand-paper mb-4">
        Something went wrong
      </h1>
      <p className="font-sans text-sm text-brand-gray max-w-md mb-8">
        The page failed to load on this device. You can try again.
      </p>
      <button
        type="button"
        onClick={reset}
        className="inline-flex justify-center bg-brand-paper text-brand-black font-sans uppercase tracking-[0.18em] text-xs px-8 py-4 hover:bg-brand-amber hover:text-brand-paper transition-colors duration-500 rounded-sm"
      >
        Try again
      </button>
    </div>
  );
}
