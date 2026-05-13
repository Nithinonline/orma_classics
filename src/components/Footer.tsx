import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-brand-black border-t border-brand-accent pt-20 pb-10 px-6 relative">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-20">

                <div className="col-span-1 md:col-span-2 flex flex-col justify-between">
                    <div>
                        <h3 className="font-serif text-2xl text-brand-white mb-6 tracking-wide">ORMA CLASSICS</h3>
                        <p className="font-sans text-brand-gray text-sm md:w-3/4 leading-relaxed">
                            Collecting forgotten cameras, restoring them with care, and passing them forward for people who understand their value.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <h4 className="font-sans text-[10px] tracking-widest uppercase text-brand-gray/50 mb-4">Nav</h4>
                    <Link href="/story" className="font-sans text-xs uppercase tracking-widest text-brand-gray hover:text-brand-white transition-colors">Our Story</Link>
                    <Link href="/cameras" className="font-sans text-xs uppercase tracking-widest text-brand-gray hover:text-brand-white transition-colors">Collection</Link>
                    <Link href="/process" className="font-sans text-xs uppercase tracking-widest text-brand-gray hover:text-brand-white transition-colors">The Process</Link>
                    <Link href="/process#journey" className="font-sans text-xs uppercase tracking-widest text-brand-gray hover:text-brand-white transition-colors">Film Journey</Link>
                    <Link href="/#contact" className="font-sans text-xs uppercase tracking-widest text-brand-gray hover:text-brand-white transition-colors">Contact</Link>
                </div>

                <div className="flex flex-col gap-4">
                    <h4 className="font-sans text-[10px] tracking-widest uppercase text-brand-gray/50 mb-4">Social</h4>
                    <a href="https://www.instagram.com/" className="font-sans text-xs uppercase tracking-widest text-brand-gray hover:text-brand-white transition-colors">Instagram</a>
                    <a href="https://x.com/" className="font-sans text-xs uppercase tracking-widest text-brand-gray hover:text-brand-white transition-colors">Twitter / X</a>
                    <a href="https://www.pinterest.com/" className="font-sans text-xs uppercase tracking-widest text-brand-gray hover:text-brand-white transition-colors">Pinterest</a>
                </div>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center border-t border-brand-accent pt-8 gap-4">
                <p className="font-sans text-[10px] uppercase tracking-widest text-brand-gray/40">
                    &copy; {new Date().getFullYear()} Orma Classics. All Rights Reserved.
                </p>
                <div className="flex gap-6 font-sans text-[10px] uppercase tracking-widest text-brand-gray/40">
                    <Link href="#" className="hover:text-brand-gray transition-colors">Privacy Policy</Link>
                    <Link href="#" className="hover:text-brand-gray transition-colors">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
}
