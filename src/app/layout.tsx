import type { Metadata } from "next";
import { Noto_Serif, Inter, Caveat, Kalam } from "next/font/google";
import "./globals.css";

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});



export const metadata: Metadata = {
  title: "Orma Classics | Restored Film Cameras",
  description: "Forgotten film cameras restored with care, verified on real film, and passed forward for people who value patience, presence, and tangible memory.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        suppressHydrationWarning
        className={`${notoSerif.variable} ${inter.variable} ${caveat.variable} antialiased bg-black text-white font-sans min-h-screen flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}