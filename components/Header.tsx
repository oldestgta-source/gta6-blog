'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const categories = [
  { name: 'Leaks', href: '/leaks' },
  { name: 'Blogs', href: '/blogs' },
  { name: 'Characters', href: '/characters' },
  { name: 'Locations', href: '/locations' },
  { name: 'Guides', href: '/guides' },
  { name: 'Opinion', href: '/category/opinion' },
  { name: 'GTAVI Online', href: '/gtavi-online' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || menuOpen
            ? 'bg-vice-abyss/90 backdrop-blur-md border-b border-white/5'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="group">
              <span className="text-xl font-black gradient-text tracking-tight">
                $GTA
              </span>
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 text-white/70 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <>
                    <line x1="4" y1="7" x2="20" y2="7" strokeWidth={2} strokeLinecap="round" />
                    <line x1="4" y1="17" x2="20" y2="17" strokeWidth={2} strokeLinecap="round" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen overlay menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-vice-abyss/98 backdrop-blur-xl flex items-center justify-center">
          <nav className="flex flex-col items-center gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                onClick={() => setMenuOpen(false)}
                className="text-3xl sm:text-4xl font-bold text-white/60 hover:text-white transition-colors duration-200"
              >
                {cat.name}
              </Link>
            ))}
            <div className="mt-6 pt-6 border-t border-white/10 flex gap-6">
              <a
                href="https://x.com/oldestgta"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/40 hover:text-vice-teal transition-colors"
              >
                Twitter / X
              </a>
              <a
                href="https://pump.fun/coin/EzL6hy8z79dv674kGipoL8VnEokQ5931iMk6Hj2zcN15"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/40 hover:text-vice-pink transition-colors"
              >
                $GTA on Pump.fun
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
