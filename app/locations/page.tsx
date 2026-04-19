import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Locations — $GTA Vice City Sentinel',
  description:
    'Explore every corner of Leonida in GTA VI — Vice City, Grassrivers, Port Gellhorn, Ambrosia, Mount Kalaga, and the Leonida Keys.',
  openGraph: {
    title: 'GTA VI Locations — $GTA Vice City Sentinel',
    description:
      'A visual tour of every location in the state of Leonida — from the neon streets of Vice City to the wilderness of Mount Kalaga.',
  },
};

const CDN = 'https://www.rockstargames.com/VI/_next/static/media';

interface Location {
  name: string;
  tagline: string;
  description: string;
  images: string[];
}

const locations: Location[] = [
  {
    name: 'Vice City',
    tagline: 'The neon-soaked heart of Leonida',
    description:
      'A sprawling metropolis built on excess, ambition, and sun-bleached corruption. From the glittering high-rises of the waterfront to the strip malls and side streets where the real deals go down, Vice City is where everyone comes to make it — or lose everything trying.',
    images: [
      `${CDN}/Vice_City_01.332891cf.jpg`,
      `${CDN}/Vice_City_02.1c840675.jpg`,
      `${CDN}/Vice_City_03.9b0e117a.jpg`,
      `${CDN}/Vice_City_04.00931b7e.jpg`,
      `${CDN}/Vice_City_05.e8171acb.jpg`,
      `${CDN}/Vice_City_06.34eff5bd.jpg`,
      `${CDN}/Vice_City_07.c1ec0b18.jpg`,
      `${CDN}/Vice_City_08.a5c9c85d.jpg`,
      `${CDN}/Vice_City_09.632112c4.jpg`,
    ],
  },
  {
    name: 'Grassrivers',
    tagline: 'Swamps, gators, and southern charm',
    description:
      'Deep in the interior of Leonida, Grassrivers is a world away from the flash of Vice City. Airboat tours, roadside diners, and overgrown trailer parks line the waterways — but underneath the southern hospitality, the hustle never stops.',
    images: [
      `${CDN}/Grassrivers_01.3abae122.jpg`,
      `${CDN}/Grassrivers_02.9d9c5cbf.jpg`,
      `${CDN}/Grassrivers_03.da407d63.jpg`,
      `${CDN}/Grassrivers_04.375357e4.jpg`,
    ],
  },
  {
    name: 'Port Gellhorn',
    tagline: 'Industrial coastline and cargo docks',
    description:
      'The working side of Leonida. Shipping containers, cranes, and warehouses stretch along the coast — a critical hub for legitimate commerce and the kind of imports that never make it onto a manifest. Where blue-collar meets underworld.',
    images: [
      `${CDN}/Port_Gellhorn_01.386c1d6e.jpg`,
      `${CDN}/Port_Gellhorn_02.fef56516.jpg`,
      `${CDN}/Port_Gellhorn_03.a8b22d6d.jpg`,
      `${CDN}/Port_Gellhorn_04.580f17d9.jpg`,
      `${CDN}/Port_Gellhorn_05.abb2a58f.jpg`,
    ],
  },
  {
    name: 'Ambrosia',
    tagline: 'Luxury resorts and hidden excess',
    description:
      'Gated communities, golf courses, and infinity pools overlooking the ocean. Ambrosia is where Leonida\'s elite retreat to enjoy the spoils — and where some of the state\'s most dangerous players hide behind manicured hedges and private security.',
    images: [
      `${CDN}/Ambrosia_01.0c8fad88.jpg`,
      `${CDN}/Ambrosia_02.ec311051.jpg`,
      `${CDN}/Ambrosia_03.6a1e258e.jpg`,
      `${CDN}/Ambrosia_04.a8d67313.jpg`,
      `${CDN}/Ambrosia_05.6d6703dc.jpg`,
    ],
  },
  {
    name: 'Mount Kalaga National Park',
    tagline: 'Wilderness on the edge of civilization',
    description:
      'Dense forests, rocky trails, and wide-open skies. Mount Kalaga is Leonida\'s untamed frontier — a national park where hikers, survivalists, and people who don\'t want to be found share the same dirt roads. The perfect place to disappear.',
    images: [
      `${CDN}/Mount_Kalaga_National_Park_01.080f7cf3.jpg`,
      `${CDN}/Mount_Kalaga_National_Park_02.ec9a34c4.jpg`,
      `${CDN}/Mount_Kalaga_National_Park_03.a841c296.jpg`,
      `${CDN}/Mount_Kalaga_National_Park_04.e5eec73f.jpg`,
      `${CDN}/Mount_Kalaga_National_Park_05.b28e1836.jpg`,
    ],
  },
  {
    name: 'Leonida Keys',
    tagline: 'Island life at the edge of the map',
    description:
      'A chain of sun-baked islands connected by bridges and bad decisions. The Keys are where smugglers run product, retirees run out the clock, and everyone in between nurses a drink at a waterfront bar. Paradise with a criminal undercurrent.',
    images: [
      `${CDN}/Leonida_Keys_01.1af17390.jpg`,
      `${CDN}/Leonida_Keys_02.fa5d8dc9.jpg`,
      `${CDN}/Leonida_Keys_03.f73a61f6.jpg`,
      `${CDN}/Leonida_Keys_04.ef02d8b3.jpg`,
      `${CDN}/Leonida_Keys_05.cf35e824.jpg`,
    ],
  },
];

export default function LocationsPage() {
  return (
    <main className="min-h-screen pt-24 pb-20">
      {/* Header */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 mb-16">
        <p className="text-xs uppercase tracking-[0.25em] text-accent-cyan mb-4">
          Visit Leonida
        </p>
        <h1 className="text-4xl sm:text-6xl font-black text-white mb-4">
          Locations
        </h1>
        <p className="text-sm sm:text-base text-white/40 max-w-xl leading-relaxed">
          Every corner of the state of Leonida — from the neon-lit streets of
          Vice City to the untamed wilderness of Mount Kalaga.
        </p>
      </div>

      {/* Locations */}
      <div className="space-y-24 sm:space-y-32">
        {locations.map((loc, i) => (
          <section key={loc.name} className="max-w-[1400px] mx-auto px-6 sm:px-8">
            {/* Location header */}
            <div className="mb-8">
              <p className="text-[10px] uppercase tracking-[0.2em] text-accent-pink mb-2">
                {String(i + 1).padStart(2, '0')} / {String(locations.length).padStart(2, '0')}
              </p>
              <h2 className="text-3xl sm:text-5xl font-black text-white mb-2">
                {loc.name}
              </h2>
              <p className="text-sm text-accent-cyan italic mb-3">
                {loc.tagline}
              </p>
              <p className="text-sm text-white/40 max-w-2xl leading-relaxed">
                {loc.description}
              </p>
            </div>

            {/* Image gallery — hero + grid */}
            <div className="grid grid-cols-1 gap-3">
              {/* Hero image */}
              <div className="relative aspect-[21/9] rounded-xl overflow-hidden">
                <img
                  src={loc.images[0]}
                  alt={loc.name}
                  className="w-full h-full object-cover"
                  loading={i === 0 ? 'eager' : 'lazy'}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Thumbnail grid */}
              {loc.images.length > 1 && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {loc.images.slice(1).map((img, j) => (
                    <div
                      key={j}
                      className="group relative aspect-[4/3] rounded-lg overflow-hidden border border-white/5 hover:border-accent-cyan/20 transition-all duration-500"
                    >
                      <img
                        src={img}
                        alt={`${loc.name} ${j + 2}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        ))}
      </div>

      {/* Source attribution */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 mt-20">
        <p className="text-[10px] text-white/15 text-center">
          Location images sourced from{' '}
          <a
            href="https://www.rockstargames.com/VI"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white/30 transition-colors"
          >
            rockstargames.com/VI
          </a>
          . All rights belong to Rockstar Games.
        </p>
      </div>
    </main>
  );
}
