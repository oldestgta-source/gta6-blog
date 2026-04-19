import { getFeed } from '@/lib/feed';
import FeedCard from '@/components/FeedCard';

export default function ContentGrid() {
  const feed = getFeed();
  if (feed.length === 0) return null;

  return (
    <section className="py-24 sm:py-32 bg-vice-darker">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-xs text-white/20 uppercase tracking-[0.3em] mb-4">
              Curated
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              GTA 6 Newsfeed
            </h2>
          </div>
          <p className="hidden sm:block text-xs text-white/20 max-w-xs text-right leading-relaxed">
            The latest from Insider Gaming, GameSpot, Kotaku, GamesRadar, and more — curated by the $GTA community.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {feed.map((item) => (
            <FeedCard key={item.url} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
