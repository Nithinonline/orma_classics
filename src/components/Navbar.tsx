import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-40 bg-black/70 backdrop-blur-md border-b border-brand-paper/10 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="font-serif text-xl tracking-wider text-brand-paper hover:text-brand-amber transition-colors">
                    ORMA CLASSICS
                </Link>
                <div className="hidden md:flex items-center space-x-10 uppercase text-xs tracking-widest text-brand-gray">
                    <Link href="/story" className="hover:text-brand-paper transition-colors duration-300">Our Story</Link>
                    <Link href="/process" className="hover:text-brand-paper transition-colors duration-300">Process</Link>
                    <Link href="/cameras" className="hover:text-brand-paper transition-colors duration-300">Cameras</Link>
                    <Link href="/process#journey" className="hover:text-brand-paper transition-colors duration-300">Film Journey</Link>
                    <Link href="/#contact" className="hover:text-brand-paper transition-colors duration-300">Contact</Link>
                </div>
                <Link href="/cameras" className="relative hover:opacity-75 transition-opacity text-brand-paper" aria-label="Browse cameras">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M16 11V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V11M5 9H19L20 21H4L5 9Z" />
                    </svg>
                </Link>
            </div>
        </nav>
    );
}
