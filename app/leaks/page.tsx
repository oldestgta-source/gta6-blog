import { getPostBySlug } from '@/lib/posts';
import { renderMDX } from '@/lib/mdx';
import TableOfContents from '@/components/TableOfContents';
import ShareButtons from '@/components/ShareButtons';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GTA 6 Leaks Thread — Every Detail From the September 2022 Footage | $Lucia',
  description:
    'The definitive thread covering every GTA 6 leak — 90 video clips, characters, weapons, mechanics, vehicles, locations, maps, development builds, and every subsequent leak.',
  openGraph: {
    title: 'GTA 6 Leaks Thread — Complete Breakdown',
    description:
      'A comprehensive thread documenting every detail uncovered from the GTA VI leaks, sourced from The GTA VI Document v1.6.',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GTA 6 Leaks Thread — Complete Breakdown',
    description:
      'Every detail from the September 2022 GTA 6 leak — characters, weapons, vehicles, locations, maps, and more.',
  },
};

export default async function LeaksThreadPage() {
  const post = getPostBySlug('gta-6-leaked-footage-comprehensive-breakdown');

  if (!post) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 text-center">
        <h1 className="text-4xl font-black text-white mb-4">Leaks Thread</h1>
        <p className="text-vice-muted">Thread content is being compiled. Check back soon.</p>
      </div>
    );
  }

  const { content } = await renderMDX(
    `---\n${Object.entries(post.frontmatter)
      .map(([k, v]) => `${k}: ${JSON.stringify(v)}`)
      .join('\n')}\n---\n\n${post.content}`
  );

  return (
    <div className="relative">
      {/* Thread hero */}
      <div className="relative border-b border-vice-border bg-gradient-to-b from-vice-card/60 to-vice-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="flex items-center gap-3 mb-5">
            <span className="px-3 py-1 text-xs font-bold bg-vice-pink/20 text-vice-pink rounded-full uppercase tracking-wider">
              Leaks
            </span>
            <span className="px-3 py-1 text-xs font-bold bg-vice-teal/15 text-vice-teal rounded-full uppercase tracking-wider">
              Comprehensive Thread
            </span>
            <span className="text-xs text-vice-muted">
              Updated{' '}
              {new Date(post.frontmatter.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-5 max-w-4xl">
            The Complete GTA 6 Leak Breakdown
          </h1>

          <p className="text-lg sm:text-xl text-vice-muted max-w-3xl mb-8 leading-relaxed">
            {post.frontmatter.excerpt}
          </p>

          <div className="flex items-center flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-vice-card border border-vice-border flex items-center justify-center">
                <span className="text-sm font-bold gradient-text">V</span>
              </div>
              <div>
                <p className="text-sm font-medium text-white">{post.frontmatter.author}</p>
                <p className="text-xs text-vice-muted">{post.readingTime}</p>
              </div>
            </div>
            <ShareButtons title={post.frontmatter.title} slug="leaks" />
          </div>
        </div>

        {/* Thread jump-nav — quick links to key sections */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-6 overflow-x-auto">
          <div className="flex gap-2 min-w-max">
            {[
              { label: 'Characters', id: 'characters' },
              { label: 'Weapons', id: 'weapons' },
              { label: 'Mechanics', id: 'new-mechanics' },
              { label: 'Vehicles', id: 'vehicles' },
              { label: 'Locations', id: 'locations' },
              { label: 'Maps', id: 'gta-vi-maps' },
              { label: 'Dev Builds', id: 'development-builds' },
              { label: 'Events', id: 'interesting-world-events--full-catalog' },
              { label: 'Dec 2023', id: 'december-2023-leaks' },
              { label: 'Jan 2025', id: 'january-1st-2025-leak' },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="px-3 py-1.5 text-xs font-medium bg-vice-card border border-vice-border text-vice-muted rounded-full hover:text-vice-teal hover:border-vice-teal/40 transition-all whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Thread body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex gap-12">
          {/* Main thread content */}
          <div className="flex-1 min-w-0 max-w-4xl">
            <article className="prose thread-prose">{content}</article>

            {/* Tags */}
            {post.frontmatter.tags && post.frontmatter.tags.length > 0 && (
              <div className="mt-12 pt-6 border-t border-vice-border">
                <div className="flex flex-wrap gap-2">
                  {post.frontmatter.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs bg-vice-card border border-vice-border text-vice-muted rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Source attribution */}
            <div className="mt-10 p-6 bg-vice-card/50 border border-vice-border rounded-xl">
              <p className="text-sm text-vice-muted leading-relaxed">
                <strong className="text-white">Source:</strong> The GTA VI Document v1.6, compiled
                by the r/GTA6 Discord and GTAForums communities. This thread is maintained for
                archival and community reference purposes. Rockstar Games has not officially
                confirmed most of these details.
              </p>
            </div>
          </div>

          {/* Sticky table of contents sidebar */}
          <aside className="hidden xl:block w-64 shrink-0">
            <TableOfContents />
          </aside>
        </div>
      </div>
    </div>
  );
}
