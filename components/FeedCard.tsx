import type { FeedItem } from '@/lib/feed';

const sourceColors: Record<string, string> = {
  'Screen Rant': 'bg-red-500/20 text-red-400',
  'Tech Times': 'bg-cyan-500/20 text-cyan-400',
  'GAMINGbible': 'bg-orange-500/20 text-orange-400',
  'WCCFTech': 'bg-blue-500/20 text-blue-400',
  'Insider Gaming': 'bg-purple-500/20 text-purple-400',
  'GameSpot': 'bg-yellow-500/20 text-yellow-400',
  'Rockstar Newswire': 'bg-amber-500/20 text-amber-400',
  'GTABase': 'bg-green-500/20 text-green-400',
  'GrandTheft.gg': 'bg-pink-500/20 text-pink-400',
  'The Hake': 'bg-teal-500/20 text-teal-400',
};

export default function FeedCard({ item }: { item: FeedItem }) {
  const colorClass = sourceColors[item.source] || 'bg-white/10 text-white/60';
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-vice-card border border-vice-border rounded-xl p-5 transition-all duration-300 hover:border-accent-cyan/30 hover:bg-vice-card-hover"
    >
      <div className="flex items-center gap-2 mb-3">
        <span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full ${colorClass}`}>
          {item.source}
        </span>
        <span className="text-[10px] text-white/25">
          {new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
        </span>
      </div>
      <h3 className="text-sm font-bold text-white mb-2 group-hover:text-accent-cyan transition-colors line-clamp-2">
        {item.title}
      </h3>
      <p className="text-xs text-white/40 line-clamp-2 leading-relaxed">
        {item.excerpt}
      </p>
      <span className="text-[10px] text-accent-cyan/60 mt-3 block group-hover:text-accent-pink transition-colors">
        Read on {item.source} &rarr;
      </span>
    </a>
  );
}
