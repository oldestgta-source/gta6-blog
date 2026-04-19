import { getFeed } from '@/lib/feed';
import FeedCard from '@/components/FeedCard';
import { generatePageMeta } from '@/lib/seo';

export const metadata = generatePageMeta({
  title: 'GTA 6 Blogs & News | $GTA',
  description: 'Curated GTA 6 news, articles, and analysis from Insider Gaming, GameSpot, Kotaku, GamesRadar, and more — handpicked by the $GTA community.',
});

export default function BlogsPage() {
  const feed = getFeed();

  // Get unique sources for filter display
  const sources = [...new Set(feed.map((item) => item.source))];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="mb-12">
          <p className="text-xs text-white/20 uppercase tracking-[0.3em] mb-4">
            Curated by the $GTA Community
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4">
            GTA 6 Blogs
          </h1>
          <p className="text-base text-white/30 max-w-2xl leading-relaxed">
            The best GTA 6 coverage from across the web — articles, analysis, and breaking news handpicked from trusted sources.
          </p>
          <div className="flex flex-wrap gap-2 mt-6">
            {sources.map((source) => (
              <span
                key={source}
                className="text-[10px] text-white/30 border border-white/10 rounded-full px-3 py-1 uppercase tracking-wider"
              >
                {source}
              </span>
            ))}
          </div>
        </div>

        {/* Feed grid */}
        {feed.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {feed.map((item) => (
              <FeedCard key={item.url} item={item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-white/20 text-lg">Feed coming soon.</p>
          </div>
        )}
      </div>
    </div>
  );
}
