import Link from 'next/link';

const showcaseImages = [
  {
    src: 'https://static.wikia.nocookie.net/gtawiki/images/f/f3/OfficialScreenshots-GTAVI-PromotionalWebsite-LuciaCaminos-SS1.jpg/revision/latest?cb=20250506161813',
    alt: 'Lucia Caminos — official screenshot',
    span: 'col-span-2 row-span-2',
  },
  {
    src: 'https://static.wikia.nocookie.net/gtawiki/images/4/43/OfficialScreenshots-GTAVI-PromotionalWebsite-LuciaCaminos-SS2.jpg/revision/latest?cb=20250506161814',
    alt: 'Lucia Caminos — official screenshot 2',
    span: '',
  },
  {
    src: 'https://static.wikia.nocookie.net/gtawiki/images/b/b7/Lucia-GTAVI-Trailer1-Tulip.png/revision/latest?cb=20250924040158',
    alt: 'Lucia in a Tulip',
    span: '',
  },
  {
    src: 'https://static.wikia.nocookie.net/gtawiki/images/9/9c/OfficialScreenshots-GTAVI-PromotionalWebsite-LuciaCaminos-SS3.jpg/revision/latest?cb=20250506161815',
    alt: 'Lucia Caminos — official screenshot 3',
    span: '',
  },
  {
    src: 'https://static.wikia.nocookie.net/gtawiki/images/5/50/Lucia-GTAVI-Motel.png/revision/latest?cb=20250924035203',
    alt: 'Lucia and Jason at the Starlet Motel',
    span: '',
  },
];

export default function LuciaShowcase() {
  return (
    <section className="w-full bg-vice-abyss py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-eth-purple mb-2">
              The Protagonist
            </p>
            <h2 className="text-3xl sm:text-5xl font-black text-white">
              Lucia Caminos
            </h2>
            <p className="text-sm text-white/40 mt-2 max-w-lg">
              Fresh out of prison and ready to change the odds in her favor. Meet the first voiced female protagonist in GTA history.
            </p>
          </div>
          <Link
            href="/lucia-caminos"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-eth-purple border border-eth-purple/30 rounded-lg hover:bg-eth-purple/10 transition-all"
          >
            Full Profile
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 auto-rows-[140px] sm:auto-rows-[180px]">
          {showcaseImages.map((img, i) => (
            <div
              key={i}
              className={`relative rounded-lg overflow-hidden border border-vice-border group ${
                i === 0 ? 'col-span-2 row-span-2' : ''
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Quote + Mobile CTA */}
        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-white/40 italic text-sm max-w-md">
            &ldquo;The only thing that matters is who you know and what you got.&rdquo;
            <span className="not-italic text-white/20"> — Lucia</span>
          </p>
          <Link
            href="/lucia-caminos"
            className="sm:hidden inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-eth-purple border border-eth-purple/30 rounded-lg hover:bg-eth-purple/10 transition-all"
          >
            Full Profile →
          </Link>
        </div>
      </div>
    </section>
  );
}
