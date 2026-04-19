import Image from 'next/image';

const locations = [
  { src: '/images/posts/leaks-thread/map-ocean-beach.jpg', name: 'Ocean Beach', subtitle: 'Beachfront District' },
  { src: '/images/posts/leaks-thread/map-central-vc.jpg', name: 'Central Vice City', subtitle: 'Downtown Core' },
  { src: '/images/posts/leaks-thread/map-edgewater.jpg', name: 'Edgewater', subtitle: 'Waterfront Area' },
  { src: '/images/posts/leaks-thread/map-highway.jpg', name: 'Highway System', subtitle: 'Infrastructure' },
  { src: '/images/posts/leaks-thread/map-nightclub.jpg', name: 'Nightclub District', subtitle: 'Entertainment Zone' },
  { src: '/images/posts/leaks-thread/map-airport.jpg', name: 'Vice City Airport', subtitle: 'International Hub' },
];

export default function ViceCityGallery() {
  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8">
        <p className="text-xs text-white/20 uppercase tracking-[0.3em] mb-4">
          Vice City, Leonida
        </p>
        <h2 className="text-3xl sm:text-5xl font-black text-white mb-12 leading-tight">
          Explore the Map
        </h2>

        {/* Asymmetric grid — 2 large + 4 small, like Rockstar's layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {locations.map((loc, i) => (
            <div
              key={loc.name}
              className={`explore-card relative overflow-hidden rounded-xl cursor-pointer group ${
                i < 2 ? 'lg:col-span-1 lg:row-span-2' : ''
              }`}
            >
              <div className={`relative ${i < 2 ? 'aspect-[3/4]' : 'aspect-video'}`}>
                <Image
                  src={loc.src}
                  alt={loc.name}
                  fill
                  sizes={i < 2 ? '(max-width: 1024px) 100vw, 33vw' : '(max-width: 1024px) 50vw, 33vw'}
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                {/* Text */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-[10px] text-white/40 uppercase tracking-[0.2em] mb-1">
                    {loc.subtitle}
                  </p>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-vice-teal transition-colors">
                    {loc.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
