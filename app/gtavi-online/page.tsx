import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GTAVI Online — $GTA Vice City Sentinel',
  description: 'GTAVI Online coverage, news, and guides. Coming soon.',
};

export default function GTAVIOnlinePage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <p className="text-xs uppercase tracking-[0.25em] text-accent-pink mb-4">
          Coming Soon
        </p>
        <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
          GTAVI Online
        </h1>
        <p className="text-sm text-white/40 leading-relaxed">
          Everything about GTA VI's online multiplayer — news, guides, and community intel. Stay tuned.
        </p>
      </div>
    </div>
  );
}
