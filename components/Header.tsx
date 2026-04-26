'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const navLinks = [
  { name: 'Leaks', href: '/leaks' },
  { name: 'Blogs', href: '/blogs' },
  { name: 'News', href: '/category/news' },
  { name: 'Guides', href: '/category/guides' },
  { name: 'Deep Dives', href: '/category/deep-dive' },
  { name: 'Opinion', href: '/category/opinion' },
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-vice-darker/90 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 z-50">
            <img src="/images/eth-logo.svg" alt="Ethereum" className="w-5 h-8" />
            <span className="text-xl font-black gradient-text tracking-tight">$Lucia</span>
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="z-50 p-2 text-white/60 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Full-screen overlay menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-vice-abyss/98 flex items-center justify-center">
          <nav className="flex flex-col items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-3xl sm:text-5xl font-black text-white/70 hover:text-accent-pink transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-6 pt-6 border-t border-white/10 flex gap-6">
              <a
                href="https://x.com/luciaethereum"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/40 hover:text-accent-cyan transition-colors"
              >
                Twitter / X
              </a>
              <a
                href="https://etherscan.io/token/0xb81377F1Bc45FFb7Ff9F4adf83E4FA3EA3a74A46"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/40 hover:text-accent-cyan transition-colors"
              >
                $Lucia on Etherscan
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
