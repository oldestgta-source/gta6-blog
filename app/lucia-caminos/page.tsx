import { getPostsByCategory } from '@/lib/posts';
import { proxyImg } from '@/lib/img';
import PostCard from '@/components/PostCard';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lucia Caminos — $Lucia | OG Lucia on Ethereum',
  description:
    'Everything we know about Lucia Caminos — GTA 6\'s first voiced female protagonist. Official details, rumored story beats, screenshots, and community analysis.',
  openGraph: {
    title: 'Lucia Caminos — $Lucia | OG Lucia on Ethereum',
    description:
      'Everything we know about Lucia Caminos — GTA 6\'s first voiced female protagonist.',
    url: 'https://luciaeth.com/lucia-caminos',
  },
};

/* ── image data ─────────────────────────────────────────── */

const officialScreenshots = [
  {
    src: 'https://static.wikia.nocookie.net/gtawiki/images/f/f3/OfficialScreenshots-GTAVI-PromotionalWebsite-LuciaCaminos-SS1.jpg/revision/latest?cb=20250506161813',
    alt: 'Lucia Caminos — official Rockstar screenshot 1',
  },
  {
    src: 'https://static.wikia.nocookie.net/gtawiki/images/4/43/OfficialScreenshots-GTAVI-PromotionalWebsite-LuciaCaminos-SS2.jpg/revision/latest?cb=20250506161814',
    alt: 'Lucia Caminos — official Rockstar screenshot 2',
  },
  {
    src: 'https://static.wikia.nocookie.net/gtawiki/images/9/9c/OfficialScreenshots-GTAVI-PromotionalWebsite-LuciaCaminos-SS3.jpg/revision/latest?cb=20250506161815',
    alt: 'Lucia Caminos — official Rockstar screenshot 3',
  },
  {
    src: 'https://static.wikia.nocookie.net/gtawiki/images/2/23/OfficialScreenshots-GTAVI-PromotionalWebsite-LuciaCaminos-SS4.jpg/revision/latest?cb=20250506161816',
    alt: 'Lucia Caminos — official Rockstar screenshot 4',
  },
  {
    src: 'https://static.wikia.nocookie.net/gtawiki/images/4/4f/OfficialScreenshots-GTAVI-PromotionalWebsite-LuciaCaminos-SS5.jpg/revision/latest?cb=20250506162231',
    alt: 'Lucia Caminos — official Rockstar screenshot 5',
  },
  {
    src: 'https://static.wikia.nocookie.net/gtawiki/images/9/9d/OfficialScreenshots-GTAVI-PromotionalWebsite-LuciaCaminos-SS6.jpg/revision/latest?cb=20250506161818',
    alt: 'Lucia Caminos — official Rockstar screenshot 6',
  },
];

const trailerScreenshots = [
  {
    src: 'https://static.wikia.nocookie.net/gtawiki/images/b/b7/Lucia-GTAVI-Trailer1-Tulip.png/revision/latest?cb=20250924040158',
    alt: 'Lucia holding cash in the passenger seat of a Tulip',
    caption: 'Lucia in a Tulip — Trailer 1',
  },
  {
    src: 'https://static.wikia.nocookie.net/gtawiki/images/4/46/Lucia-GTAVI-ConvenienceStore.png/revision/latest?cb=20250922150211',
    alt: 'Lucia and Jason at a convenience store',
    caption: 'Lucia & Jason at Uncle Jack\'s Liquor',
  },
  {
    src: 'https://static.wikia.nocookie.net/gtawiki/images/5/50/Lucia-GTAVI-Motel.png/revision/latest?cb=20250924035203',
    alt: 'Lucia and Jason at the Starlet Motel',
    caption: 'Lucia & Jason — Starlet Motel',
  },
  {
    src: 'https://static.wikia.nocookie.net/gtawiki/images/d/d8/Lucia-GTAVI-Trailer1withAccomplice.png/revision/latest?cb=20250923005854',
    alt: 'Lucia and Jason preparing to rob a store',
    caption: 'The heist begins',
  },
];

const artwork = [
  {
    src: 'https://static.wikia.nocookie.net/gtawiki/images/0/05/Artwork-Trailer1-original-GTAVI.png/revision/latest?cb=20231205141437',
    alt: 'GTA VI Trailer 1 official artwork featuring Lucia',
    caption: 'Trailer 1 Artwork',
  },
  {
    src: 'https://static.wikia.nocookie.net/gtawiki/images/9/99/Artwork-JasonandLuciaTrailer2-GTAVI.jpg/revision/latest?cb=20250506171603',
    alt: 'Jason and Lucia — Trailer 2 artwork',
    caption: 'Trailer 2 Artwork',
  },
  {
    src: 'https://static.wikia.nocookie.net/gtawiki/images/5/56/Artwork-JasonandLuciaMotel-GTAVI.jpg/revision/latest?cb=20250506171605',
    alt: 'Jason and Lucia at a motel — official artwork',
    caption: 'Motel Artwork',
  },
];

/* ── known details ──────────────────────────────────────── */

const knownDetails: { label: string; value: string; link?: string; linkText?: string }[] = [
  {
    label: 'Full Name',
    value: 'Lucia Caminos',
  },
  {
    label: 'Nickname',
    value: '"LuLu" (used by Jason)',
  },
  {
    label: 'Gender',
    value: 'Female',
  },
  {
    label: 'Nationality',
    value: 'Hispanic descent (exact nationality unspecified)',
  },
  {
    label: 'Former Home',
    value: 'Liberty City, Liberty',
  },
  {
    label: 'Current Home',
    value: 'Stilt house in Key Lento, Leonida',
  },
  {
    label: 'Partner',
    value: 'Jason Duval',
  },
  {
    label: 'Status',
    value: 'Incarcerated (at start of game)',
  },
  {
    label: 'Vehicle',
    value: 'Red Tulip',
  },
  {
    label: 'Voice Actress',
    value: 'Rumored to be Manni L. Perez',
    link: 'https://www.imdb.com/name/nm7398738/',
    linkText: 'View on IMDb',
  },
];

const rumoredDetails = [
  'Lucia\'s father taught her to fight from a young age — her criminal path stems from fighting for her family.',
  'She served time at Leonida Penitentiary in Vice-Dale County for an unspecified crime.',
  'A correctional social worker named Stefanie was assigned to her case.',
  'Lucia wants the good life her mother dreamed of since their days in Liberty City.',
  'Her relationship with Jason could be her way out — or her downfall.',
  'The duo is heavily inspired by real-life outlaws Bonnie and Clyde.',
  'Lucia is the first fully voiced female protagonist in GTA history (the eighth female protagonist overall).',
  'Her character draws parallels to Sadie Adler from Red Dead Redemption 2 — a female outlaw proficient with firearms.',
  'The story appears to follow a Bonnie-and-Clyde arc across the State of Leonida.',
  'Cal Hampton, Boobie Ike, and Dre\'Quan Priest are among the central characters connected to Lucia\'s story.',
];

/* ── page ────────────────────────────────────────────────── */

export default function LuciaCaminosPage() {
  const luciaPosts = getPostsByCategory('lucia-caminos');
  const p = (src: string) => proxyImg(src);

  return (
    <div className="min-h-screen">
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-pink/10 via-eth-purple/5 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-16 relative">
          <p className="text-xs uppercase tracking-[0.25em] text-eth-purple mb-3">
            The Protagonist
          </p>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black text-white mb-4 leading-[0.9]">
            Lucia<br />
            <span className="gradient-text">Caminos</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/50 max-w-2xl leading-relaxed mt-6 italic">
            &ldquo;The only thing that matters is who you know and what you got.&rdquo;
          </p>
          <p className="text-sm text-white/30 mt-2">— Lucia Caminos</p>
        </div>
      </section>

      {/* ── HERO IMAGE (full-width official screenshot) ── */}
      <section className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-vice-border">
            <img
              src={p(officialScreenshots[0].src)}
              alt={officialScreenshots[0].alt}
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-vice-dark/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6">
              <span className="text-[10px] uppercase tracking-widest text-white/40">
                Official Rockstar Screenshot
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── BIO ──────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Story */}
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-eth-purple mb-3">
              Her Story
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">
              Fresh out of prison.
            </h2>
            <div className="space-y-4 text-white/60 leading-relaxed">
              <p>
                Lucia&rsquo;s father taught her to fight as soon as she could walk. Life has been coming at her swinging ever since. Fighting for her family landed her in the Leonida Penitentiary. Sheer luck got her out.
              </p>
              <p>
                Lucia&rsquo;s learned her lesson — only smart moves from here. More than anything, Lucia wants the good life her mom has dreamed of since their days in Liberty City — but instead of half-baked fantasies, Lucia is prepared to take matters into her own hands.
              </p>
              <p>
                A life with Jason could be her way out. Fresh out of prison and ready to change the odds in her favor, Lucia&rsquo;s committed to her plan — no matter what it takes.
              </p>
              <p className="text-[10px] uppercase tracking-widest text-white/30 pt-2">
                — Source: Official Rockstar Games GTA VI Website
              </p>
            </div>
          </div>

          {/* Known Details */}
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-eth-purple mb-3">
              Confirmed Details
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">
              What we know.
            </h2>
            <div className="space-y-0">
              {knownDetails.map((detail) => (
                <div
                  key={detail.label}
                  className="flex items-start gap-4 py-3 border-b border-vice-border/50"
                >
                  <span className="text-xs uppercase tracking-wider text-eth-purple font-semibold min-w-[120px] sm:min-w-[140px] pt-0.5">
                    {detail.label}
                  </span>
                  <span className="text-sm text-white/70">
                    {detail.value}
                    {detail.link && (
                      <a
                        href={detail.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-2 text-eth-purple hover:text-accent-pink transition-colors underline underline-offset-2"
                      >
                        {detail.linkText || 'Link'}
                      </a>
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── OFFICIAL SCREENSHOTS GALLERY ─────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <p className="text-xs uppercase tracking-[0.25em] text-eth-purple mb-3">
          Official Gallery
        </p>
        <h2 className="text-3xl sm:text-4xl font-black text-white mb-8">
          Rockstar Official Screenshots
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {officialScreenshots.map((img, i) => (
            <a
              key={i}
              href={img.src}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-video rounded-lg overflow-hidden border border-vice-border hover:border-eth-purple/50 transition-all duration-300"
            >
              <img
                src={p(img.src)}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[10px] text-white/60 bg-black/50 px-2 py-1 rounded">
                  View Full Size
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ── TRAILER SCREENSHOTS ──────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <p className="text-xs uppercase tracking-[0.25em] text-eth-purple mb-3">
          From the Trailers
        </p>
        <h2 className="text-3xl sm:text-4xl font-black text-white mb-8">
          Trailer Screenshots
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {trailerScreenshots.map((img, i) => (
            <a
              key={i}
              href={img.src}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-video rounded-lg overflow-hidden border border-vice-border hover:border-accent-pink/50 transition-all duration-300"
            >
              <img
                src={p(img.src)}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <p className="absolute bottom-3 left-3 text-xs text-white/70 font-medium">
                {img.caption}
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* ── ARTWORK ──────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <p className="text-xs uppercase tracking-[0.25em] text-eth-purple mb-3">
          Official Art
        </p>
        <h2 className="text-3xl sm:text-4xl font-black text-white mb-8">
          Artwork
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {artwork.map((img, i) => (
            <a
              key={i}
              href={img.src}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-video rounded-lg overflow-hidden border border-vice-border hover:border-accent-pink/50 transition-all duration-300"
            >
              <img
                src={p(img.src)}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <p className="absolute bottom-3 left-3 text-xs text-white/70 font-medium">
                {img.caption}
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* ── RUMORS & SPECULATION ─────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.25em] text-accent-pink mb-3">
            Unconfirmed
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
            Rumors &amp; Speculation
          </h2>
          <p className="text-sm text-white/30 mb-8">
            Based on trailer analysis, leaked data, and community research. Take these with a grain of salt until Rockstar confirms.
          </p>
          <div className="space-y-4">
            {rumoredDetails.map((detail, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 bg-vice-card/50 border border-vice-border rounded-lg"
              >
                <span className="text-accent-pink text-sm font-bold mt-0.5 min-w-[24px]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-sm text-white/60 leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GTA VI QUOTE ─────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="relative p-8 sm:p-12 rounded-2xl border border-vice-border bg-vice-card/30 overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-accent-pink via-eth-purple to-transparent" />
          <blockquote className="text-xl sm:text-2xl md:text-3xl font-black text-white/80 italic leading-snug max-w-3xl">
            &ldquo;Fresh out of prison and ready to change the odds in her favor, Lucia&rsquo;s committed to her plan — no matter what it takes.&rdquo;
          </blockquote>
          <p className="text-sm text-white/30 mt-4">
            — Rockstar Games, Official GTA VI Character Description
          </p>
        </div>
      </section>

      {/* ── RELATED POSTS (MDX feed) ─────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <p className="text-xs uppercase tracking-[0.25em] text-eth-purple mb-3">
          Deep Dives
        </p>
        <h2 className="text-3xl sm:text-4xl font-black text-white mb-8">
          Lucia Articles &amp; Analysis
        </h2>

        {luciaPosts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {luciaPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 border border-vice-border/50 rounded-xl bg-vice-card/20">
            <p className="text-white/30 mb-4">
              Lucia-focused articles coming soon.
            </p>
            <Link
              href="/blogs"
              className="inline-block px-6 py-2 text-sm bg-vice-card border border-vice-border rounded-lg text-eth-purple hover:border-eth-purple/50 transition-all"
            >
              Browse All Posts
            </Link>
          </div>
        )}
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 pb-24">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://etherscan.io/token/0xb81377F1Bc45FFb7Ff9F4adf83E4FA3EA3a74A46"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-eth-purple/20 border border-eth-purple/40 rounded-lg text-eth-purple hover:bg-eth-purple/30 transition-all text-sm font-semibold"
          >
            $Lucia on Etherscan
          </a>
          <a
            href="https://x.com/luciaethereum"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-vice-card border border-vice-border rounded-lg text-white/60 hover:text-white hover:border-white/20 transition-all text-sm font-semibold"
          >
            Follow @luciaethereum
          </a>
        </div>
      </section>
    </div>
  );
}
