import { fetchPumpStats } from '@/lib/pump';

export default async function StatsRow() {
  const stats = await fetchPumpStats();

  const items = [
    { label: 'Holders', value: stats.holders },
    { label: 'Market Cap', value: stats.marketCap },
    { label: 'Community Age', value: stats.communityAge },
  ];

  return (
    <div className="grid grid-cols-3 gap-4 sm:gap-6 w-full max-w-2xl">
      {items.map((item) => (
        <div
          key={item.label}
          className="stat-card bg-vice-darker border border-vice-border rounded-xl p-4 sm:p-6 text-center"
        >
          <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
            {item.value}
          </div>
          <div className="text-xs text-vice-muted uppercase tracking-wider">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
}
