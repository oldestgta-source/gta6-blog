import { FeedItem } from '@/lib/feed';

const sourceColors: Record<string, string> = {
  'Insider Gaming': 'text-amber-400 border-amber-400/20',
  'GameSpot': 'text-red-400 border-red-400/20',
  'Kotaku': 'text-orange-400 border-orange-400/20',
  'GamesRadar': 'text-purple-400 border-purple-400/20',
  'PC Gamer': 'text-emerald-400 border-emerald-400/20',
  'IGN': 'text-red-500 border-red-500/20',
};

function getSourceStyle(source: string) {
  return sourceColors[source] || 'text-vice-teal border-vice-teal/20';
}

export default function FeedCard({ item }: { item: FeedItem }) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <article className="h-full bg-vice-abyss border border-white/5 rounded-xl overflow-hidden hover:border-white/10 transition-all duration-300 flex flex-col">
        {/* Cover image */}
        {item.image && (
          <div className="relative aspect-[16/9] overflow-hidden">
            <img
              src={item.image}
              alt=""
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-vice-abyss via-transparent to-transparent" />
          </div>
        )}

        {/* Content */}
        <div className="p-5 flex flex-col justify-between flex-1 gap-4">
          <div>
            {/* Source + tag */}
            <div className="flex items-center gap-2 mb-3">
              <span className={`text-[10px] font-semibold uppercase tracking-[0.15em] px-2 py-0.5 border rounded-full ${getSourceStyle(item.source)}`}>
                {item.source}
              </span>
              <span className="text-[10px] text-white/15 uppercase tracking-wider">
                {item.tag}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-base font-bold text-white leading-snug group-hover:text-vice-teal transition-colors line-clamp-3">
              {item.title}
            </h3>
          </div>

          {/* Date + external indicator */}
          <div className="flex items-center justify-between">
            <span className="text-xs text-white/20">
              {new Date(item.date).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              })}
            </span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/15 group-hover:text-vice-teal transition-colors">
              <path d="M7 17L17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </div>
        </div>
      </article>
    </a>
  );
}
