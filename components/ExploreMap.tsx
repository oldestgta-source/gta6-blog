const locations = [
  {
    name: 'Vice City',
    subtitle: 'The neon-soaked heart of Leonida',
    image: 'https://www.rockstargames.com/VI/_next/static/media/Vice_City_01.332891cf.jpg',
  },
  {
    name: 'Grassrivers',
    subtitle: 'Swamps, gators, and southern charm',
    image: 'https://www.rockstargames.com/VI/_next/static/media/Grassrivers_01.3abae122.jpg',
  },
  {
    name: 'Port Gellhorn',
    subtitle: 'Industrial coastline and cargo docks',
    image: 'https://www.rockstargames.com/VI/_next/static/media/Port_Gellhorn_01.386c1d6e.jpg',
  },
  {
    name: 'Ambrosia',
    subtitle: 'Luxury resorts and hidden excess',
    image: 'https://www.rockstargames.com/VI/_next/static/media/Ambrosia_01.0c8fad88.jpg',
  },
  {
    name: 'Mount Kalaga',
    subtitle: 'National park wilderness on the edge of civilization',
    image: 'https://www.rockstargames.com/VI/_next/static/media/Mount_Kalaga_National_Park_01.080f7cf3.jpg',
  },
];

export default function ExploreMap() {
  return (
    <section className="py-16 sm:py-24 bg-vice-abyss">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.25em] text-accent-cyan mb-3">
            Visit Leonida
          </p>
          <h2 className="text-3xl sm:text-5xl font-black text-white">
            Explore the Map
          </h2>
        </div>

        {/* Location cards — horizontal scroll on mobile, grid on desktop */}
        <div className="flex gap-4 overflow-x-auto pb-4 sm:pb-0 sm:grid sm:grid-cols-5 sm:overflow-visible gallery-scroll">
          {locations.map((loc) => (
            <div
              key={loc.name}
              className="explore-card group relative flex-shrink-0 w-[260px] sm:w-auto aspect-[3/4] rounded-xl overflow-hidden border border-vice-border cursor-pointer"
            >
              {/* Background image */}
              <img
                src={loc.image}
                alt={loc.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Text */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                  {loc.name}
                </h3>
                <p className="text-[11px] text-white/50 leading-snug">
                  {loc.subtitle}
                </p>
              </div>

              {/* Hover border glow */}
              <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-accent-cyan/30 transition-all duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
