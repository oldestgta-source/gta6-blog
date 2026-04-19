import CountdownTimer from '@/components/CountdownTimer';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden grain">
      {/* Background layers */}
      <div className="absolute inset-0 hero-glow" />
      
      {/* Subtle radial highlight */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,45,149,0.06)_0%,transparent_60%)]" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 flex flex-col items-center gap-8">
        {/* Main logo — oversized like Rockstar */}
        <h1 className="text-8xl sm:text-[10rem] lg:text-[12rem] font-black tracking-tighter leading-none">
          <span className="gradient-text">$GTA</span>
        </h1>

        <p className="text-sm sm:text-base text-white/30 uppercase tracking-[0.3em] font-medium">
          Vice City Sentinel
        </p>

        {/* Release date — large, warm gradient text like Rockstar's */}
        <div className="mt-4 flex flex-col items-center gap-3">
          <p className="text-xs text-white/20 uppercase tracking-[0.25em]">GTA VI Releases</p>
          <p className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase release-date-text leading-tight text-center">
            November 19<br />2026
          </p>
        </div>

        {/* Countdown */}
        <CountdownTimer />

        {/* Trailer CTA */}
        <a
          href="https://www.youtube.com/watch?v=QdBZY2fkU-0"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 mt-4 px-6 py-3 border border-white/10 rounded-full hover:border-white/30 transition-all"
        >
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
            <svg width="14" height="16" viewBox="0 0 14 16" fill="white">
              <path d="M0 0L14 8L0 16V0Z" />
            </svg>
          </div>
          <span className="text-sm text-white/60 group-hover:text-white transition-colors font-medium">
            Watch Trailer 2
          </span>
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 scroll-indicator">
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/20 to-white/5" />
      </div>
    </section>
  );
}
