import Image from 'next/image';

const locations = [
  { src: '/images/posts/leaks-thread/map-ocean-beach.jpg', name: 'Ocean Beach' },
  { src: '/images/posts/leaks-thread/map-edgewater.jpg', name: 'Edgewater' },
  { src: '/images/posts/leaks-thread/map-highway.jpg', name: 'Highway System' },
  { src: '/images/posts/leaks-thread/map-margaret-pace.jpg', name: 'Margaret Pace' },
  { src: '/images/posts/leaks-thread/map-central-vc.jpg', name: 'Central Vice City' },
  { src: '/images/posts/leaks-thread/map-nightclub.jpg', name: 'Nightclub District' },
  { src: '/images/posts/leaks-thread/map-amphitheater.jpg', name: 'Amphitheater' },
  { src: '/images/posts/leaks-thread/map-courthouse.jpg', name: 'Courthouse' },
  { src: '/images/posts/leaks-thread/map-airport.jpg', name: 'Airport' },
  { src: '/images/posts/leaks-thread/map-loandepot.jpg', name: 'LoanDepot Park' },
  { src: '/images/posts/leaks-thread/map-tennis.jpg', name: 'Tennis Courts' },
  { src: '/images/posts/leaks-thread/map-confirmed.jpg', name: 'Confirmed Map' },
  { src: '/images/posts/leaks-thread/map-speculative.jpg', name: 'Speculative Map' },
];

export default function ViceCityGallery() {
  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-6">
        <h2 className="text-xs font-semibold text-vice-teal uppercase tracking-[0.2em]">
          Vice City
        </h2>
      </div>
      <div className="gallery-scroll flex gap-4 overflow-x-auto px-4 sm:px-6 pb-4">
        {locations.map((loc) => (
          <div
            key={loc.name}
            className="shrink-0 w-72 sm:w-80 relative rounded-xl overflow-hidden border border-vice-border group"
          >
            <div className="aspect-video relative">
              <Image
                src={loc.src}
                alt={loc.name}
                fill
                sizes="320px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              {/* Location name */}
              <div className="absolute bottom-3 left-4">
                <span className="text-sm font-semibold text-white">
                  {loc.name}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
