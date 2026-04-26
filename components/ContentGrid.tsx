import { getFeed } from '@/lib/feed';
import FeedCard from '@/components/FeedCard';
import Link from 'next/link';

export default function ContentGrid() {
  const items = getFeed(6);

  if (items.length === 0) return null;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <div className="flex items-center justify-between mb-8">
        <p className="text-xs uppercase tracking-[0.25em] text-accent-cyan">
          Curated Newsfeed
        </p>
        <Link
          href="/blogs"
          className="text-xs text-white/30 hover:text-accent-pink transition-colors"
        >
          View all &rarr;
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <FeedCard key={item.url} item={item} />
        ))}
      </div>
    </section>
  );
}
