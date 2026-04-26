import { getFeed } from '@/lib/feed';
import FeedCard from '@/components/FeedCard';

export const metadata = {
  title: 'Blogs — $Lucia | OG Lucia on Ethereum',
  description: 'Curated GTA 6 articles from the best gaming publications.',
};

export default function BlogsPage() {
  const items = getFeed();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-10">
        <p className="text-xs uppercase tracking-[0.25em] text-eth-purple mb-2">
          Curated Newsfeed
        </p>
        <h1 className="text-3xl sm:text-5xl font-black text-white mb-3">
          Blogs
        </h1>
        <p className="text-sm text-white/40 max-w-xl">
          The best GTA 6 &amp; Lucia coverage from across the web — curated by the $Lucia community.
        </p>
      </div>

      {items.length === 0 ? (
        <p className="text-white/30 text-center py-20">No articles yet. Check back soon.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item) => (
            <FeedCard key={item.url} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
