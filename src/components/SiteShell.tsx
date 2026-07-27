import type { ReactNode } from "react";
import FilmLoader from "./FilmLoader";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen-safe bg-[#050403] text-brand-white">
      <FilmLoader />

      {/* Soft grain without mix-blend / SVG turbulence — those freeze iOS Safari.
          Keep below nav (z-40) so chrome isn't painted under a full-screen layer. */}
      <div
        className="pointer-events-none fixed inset-0 z-[30] opacity-[0.045] bg-noise"
        aria-hidden
      />
      <div
        className="pointer-events-none fixed inset-0 z-[1] bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.62)_78%,rgba(0,0,0,0.94)_100%)]"
        aria-hidden
      />

      <Navbar />

      <main className="relative z-10 w-full flex flex-col">{children}</main>

      <Footer />
    </div>
  );
}
