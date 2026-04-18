import Link from 'next/link';

const footerLinks = [
  {
    title: 'Content',
    links: [
      { name: 'News', href: '/category/news' },
      { name: 'Leaks', href: '/category/leaks' },
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <span className="text-xl font-black gradient-text">GTA 6</span>
            <p className="mt-2 text-sm text-vice-muted leading-relaxed">
              Vice City Intel — your source for GTA 6 news, leaks, deep dives, and guides.
              An informed fan site that does its homework.
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
        </div>

        <div className="mt-10 pt-6 border-t border-vice-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-vice-muted">
            &copy; {new Date().getFullYear()} GTA 6 Blog. Fan site — not affiliated with Rockstar Games or Take-Two Interactive.
          </p>
          <p className="text-xs text-vice-muted">
            Built with Next.js &middot; Deployed on Vercel
          </p>
        </div>
      </div>
    </footer>
  );
}
