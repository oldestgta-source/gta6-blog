'use client';

import Link from 'next/link';
import { useState } from 'react';

const categories = [
  { name: 'News', slug: 'news' },
  { name: 'Leaks', slug: 'leaks' },
  { name: 'Deep Dives', slug: 'deep-dive' },
  { name: 'Guides', slug: 'guides' },
  { name: 'Opinion', slug: 'opinion' },
  { name: 'GTA Online 2', slug: 'gta-online-2' },
  { name: 'Comparison', slug: 'comparison' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-vice-darker/95 backdrop-blur-md border-b border-vice-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl font-black gradient-text tracking-tight">
              GTA 6
            </span>
            <span className="text-sm text-vice-muted font-medium hidden sm:block">
              VICE CITY INTEL
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                className="px-3 py-2 text-sm text-vice-muted hover:text-vice-teal transition-colors rounded-md hover:bg-vice-card"
              >
                {cat.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-vice-muted hover:text-vice-pink transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-vice-border pt-3">
            <div className="flex flex-col gap-1">
              {categories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/category/${cat.slug}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm text-vice-muted hover:text-vice-teal transition-colors rounded-md hover:bg-vice-card"
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
