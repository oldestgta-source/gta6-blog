import Link from 'next/link';

const footerLinks = [
  {
    title: 'Content',
    links: [
      { name: 'News', href: '/category/news' },
      { name: 'Leaks', href: '/leaks' },
      { name: 'Deep Dives', href: '/category/deep-dive' },
      { name: 'Guides', href: '/category/guides' },
    ],
  },
  {
    title: 'More',
    links: [
      { name: 'Opinion', href: '/category/opinion' },
      { name: 'GTA Online 2', href: '/category/gta-online-2' },
      { name: 'Comparisons', href: '/category/comparison' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-vice-border bg-vice-darker mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <span className="text-xl font-black gradient-text">$GTA</span>
            <p className="mt-2 text-sm text-vice-muted leading-relaxed">
              Vice City Sentinel — your community-driven source for GTA 6 news, leaks, deep dives, and guides.
              A curious community that does its homework.
            </p>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-vice-teal uppercase tracking-wider mb-3">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
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
          ))}

          {/* Community */}
          <div>
            <h3 className="text-sm font-semibold text-vice-teal uppercase tracking-wider mb-3">
              Community
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://x.com/oldestgta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-vice-muted hover:text-vice-pink transition-colors"
                >
                  Twitter / X
                </a>
              </li>
              <li>
                <a
                  href="https://pump.fun/coin/EzL6hy8z79dv674kGipoL8VnEokQ5931iMk6Hj2zcN15"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-vice-muted hover:text-vice-pink transition-colors"
                >
                  Support $GTA on Pump.fun
                </a>
              </li>
            </ul>
            <p className="mt-3 text-xs text-vice-muted leading-relaxed">
              This site is funded by the <span className="text-vice-pink font-semibold">$GTA Community Takeover</span>. Support us by picking up the oldest $GTA coin on pump.fun.
            </p>
          </div>
        </div>

        {/* CA */}
        <div className="mt-8 pt-6 border-t border-vice-border">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 mb-4">
            <span className="text-xs font-semibold text-vice-teal uppercase tracking-wider">CA:</span>
            <code className="text-xs text-vice-muted bg-vice-card px-3 py-1 rounded-md border border-vice-border break-all select-all">
              EzL6hy8z79dv674kGipoL8VnEokQ5931iMk6Hj2zcN15
            </code>
          </div>
        </div>

        <div className="pt-4 border-t border-vice-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-vice-muted">
            &copy; {new Date().getFullYear()} $GTA Community Takeover. Not affiliated with Rockstar Games or Take-Two Interactive.
          </p>
          <p className="text-xs text-vice-muted">
            Built with Next.js &middot; Deployed on Vercel
          </p>
        </div>
      </div>
    </footer>
  );
}
