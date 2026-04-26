import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Official Trailers — $Lucia | OG Lucia on Ethereum',
  description:
    'Watch every official Grand Theft Auto VI trailer — from the first reveal to the latest gameplay footage.',
};

const trailers = [
  {
    label: 'Official Trailer 2',
    embedUrl:
      'https://www.youtube.com/embed/VQRLujxTm3c?rel=0&modestbranding=1&color=white',
    title: 'Grand Theft Auto VI Trailer 2',
  },
  {
    label: 'Official Trailer 1',
    embedUrl:
      'https://www.youtube.com/embed/QdBZY2fkU-0?rel=0&modestbranding=1&color=white',
    title: 'Grand Theft Auto VI Trailer 1',
  },
];

export default function TrailersPage() {
  return (
    <section className="min-h-screen bg-vice-abyss pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <p className="text-xs uppercase tracking-[0.25em] text-eth-purple mb-2">
          Watch
        </p>
        <h1 className="text-4xl sm:text-6xl font-black text-white mb-4">
          Official Trailers
        </h1>
        <p className="text-sm text-white/40 max-w-lg mb-16">
          Every official Grand Theft Auto VI trailer released by Rockstar Games,
          in one place.
        </p>

        {/* Trailers */}
        <div className="space-y-16">
          {trailers.map((t) => (
            <div key={t.title}>
              <p className="text-xs uppercase tracking-[0.25em] text-white/30 text-center mb-4">
                {t.label}
              </p>
              <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-white/5">
                <iframe
                  src={t.embedUrl}
                  title={t.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
