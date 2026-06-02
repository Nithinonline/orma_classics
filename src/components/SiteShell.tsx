import type { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen bg-[#050403] text-brand-white">
      <div className="pointer-events-none fixed inset-0 z-[100] opacity-20 mix-blend-overlay">
        <div className="absolute inset-0 bg-noise"></div>
      </div>
      <div className="pointer-events-none fixed inset-0 z-[1] bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.62)_78%,rgba(0,0,0,0.94)_100%)]"></div>

      <Navbar />

      <main className="relative z-10 w-full flex flex-col">{children}</main>

      <Footer />
    </div>
  );
}
