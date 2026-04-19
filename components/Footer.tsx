import Link from 'next/link';
import NewsletterSignup from '@/components/NewsletterSignup';

const contentLinks = [
  { name: 'News', href: '/category/news' },
  { name: 'Leaks', href: '/leaks' },
  { name: 'Deep Dives', href: '/category/deep-dive' },
  { name: 'Guides', href: '/category/guides' },
  { name: 'Opinion', href: '/category/opinion' },
  { name: 'GTA Online 2', href: '/category/gta-online-2' },
  { name: 'Comparisons', href: '/category/comparison' },
];

const communityLinks = [
  { name: 'Twitter / X', href: 'https://x.com/oldestgta', external: true },
  { name: 'Buy $GTA on Pump.fun', href: 'https://pump.fun/coin/EzL6hy8z79dv674kGipoL8VnEokQ5931iMk6Hj2zcN15', external: true },
];

export default function Footer() {
  return (
    <footer className="border-t border-vice-border bg-vice-darker">
      {/* Newsletter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 border-b border-vice-border">
        <NewsletterSignup />
      </div>

      {/* Links grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <span className="text-xl font-black gradient-text">$GTA</span>
            <p className="mt-2 text-sm text-vice-muted leading-relaxed">
              Vice City Sentinel — your community-driven source for GTA 6 news, leaks, deep dives, and guides.
            </p>
          </div>

          {/* Content */}
          <div>
            <h3 className="text-xs font-semibold text-vice-teal uppercase tracking-[0.2em] mb-3">
              Content
            </h3>
            <ul className="space-y-2">
              {contentLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-vice-muted hover:text-vice-pink transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-xs font-semibold text-vice-teal uppercase tracking-[0.2em] mb-3">
              Community
            </h3>
            <ul className="space-y-2">
              {communityLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-vice-muted hover:text-vice-pink transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-xs text-vice-muted/60 leading-relaxed">
              Funded by the <span className="text-vice-pink font-semibold">$GTA Community Takeover</span>.
            </p>
          </div>

          {/* CA */}
          <div>
            <h3 className="text-xs font-semibold text-vice-teal uppercase tracking-[0.2em] mb-3">
              Contract Address
            </h3>
            <code className="block text-xs text-vice-muted bg-vice-card px-3 py-2 rounded-md border border-vice-border break-all select-all leading-relaxed">
              EzL6hy8z79dv674kGipoL8VnEokQ5931iMk6Hj2zcN15
            </code>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-vice-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-vice-muted/60">
            &copy; {new Date().getFullYear()} $GTA Community Takeover. Not affiliated with Rockstar Games or Take-Two Interactive.
          </p>
          <p className="text-xs text-vice-muted/60">
            Built with Next.js &middot; Deployed on Vercel
          </p>
        </div>
      </div>
    </footer>
  );
}
