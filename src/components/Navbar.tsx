"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const whatsappHref =
  "https://wa.me/918301887465?text=Hi%20Orma%20Classics%2C%20I%20am%20interested%20in%20a%20film%20camera.";

export default function Navbar() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState(() =>
    pathname === "/cameras" ? "collection" : "",
  );

  useEffect(() => {
    if (pathname === "/cameras") {
      return;
    }
    const sections = ["story", "process", "collection", "journey", "contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.4,
      },
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);

      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sections.forEach((id) => {
        const section = document.getElementById(id);

        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, [pathname]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-black/70 backdrop-blur-md border-b border-brand-paper/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          onClick={() => setActiveSection("")}
          className="font-serif text-lg tracking-[0.2em] text-brand-paper hover:text-brand-amber transition-colors duration-500 uppercase"
        >
          Orma Classics
        </Link>

        {/* Navigation */}
        <div className="hidden md:flex items-center space-x-10 uppercase text-xs tracking-widest">
          {/* Story */}
          <Link
            href="/#story"
            className={`relative transition-colors duration-300 ${
              activeSection === "story"
                ? "text-brand-paper"
                : "text-brand-gray hover:text-brand-paper"
            }`}
          >
            Our Story
            <span
              className={`absolute left-0 -bottom-2 h-[1px] bg-brand-paper transition-all duration-500 ${
                activeSection === "story"
                  ? "w-full opacity-100"
                  : "w-0 opacity-0"
              }`}
            />
          </Link>

          {/* Process */}
          <Link
            href="/#process"
            className={`relative transition-colors duration-300 ${
              activeSection === "process"
                ? "text-brand-paper"
                : "text-brand-gray hover:text-brand-paper"
            }`}
          >
            Process
            <span
              className={`absolute left-0 -bottom-2 h-[1px] bg-brand-paper transition-all duration-500 ${
                activeSection === "process"
                  ? "w-full opacity-100"
                  : "w-0 opacity-0"
              }`}
            />
          </Link>

          {/* Cameras */}
          <Link
            href="/cameras"
            onClick={() => setActiveSection("collection")}
            className={`relative transition-colors duration-300 ${
              activeSection === "collection"
                ? "text-brand-paper"
                : "text-brand-gray hover:text-brand-paper"
            }`}
          >
            Cameras
            <span
              className={`absolute left-0 -bottom-2 h-[1px] bg-brand-paper transition-all duration-500 ${
                activeSection === "collection"
                  ? "w-full opacity-100"
                  : "w-0 opacity-0"
              }`}
            />
          </Link>

          {/* Journey */}
          <Link
            href="/#journey"
            className={`relative transition-colors duration-300 ${
              activeSection === "journey"
                ? "text-brand-paper"
                : "text-brand-gray hover:text-brand-paper"
            }`}
          >
            Film Journey
            <span
              className={`absolute left-0 -bottom-2 h-[1px] bg-brand-paper transition-all duration-500 ${
                activeSection === "journey"
                  ? "w-full opacity-100"
                  : "w-0 opacity-0"
              }`}
            />
          </Link>

          {/* Contact */}
          <Link
            href="/#contact"
            className={`relative transition-colors duration-300 ${
              activeSection === "contact"
                ? "text-brand-paper"
                : "text-brand-gray hover:text-brand-paper"
            }`}
          >
            Contact
            <span
              className={`absolute left-0 -bottom-2 h-[1px] bg-brand-paper transition-all duration-500 ${
                activeSection === "contact"
                  ? "w-full opacity-100"
                  : "w-0 opacity-0"
              }`}
            />
          </Link>
        </div>

        {/* WhatsApp */}
        <a
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          aria-label="Connect on WhatsApp"
          className="relative hover:opacity-75 transition-opacity text-brand-paper"
        >
          <svg
            aria-hidden="true"
            width="20"
            height="20"
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
    </nav>
  );
}
