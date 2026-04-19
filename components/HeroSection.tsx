import CountdownTimer from '@/components/CountdownTimer';

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center overflow-hidden grain">
      {/* Background layers */}
      <div className="absolute inset-0 hero-glow" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,45,149,0.06)_0%,transparent_60%)]" />

      {/* Top section — logo, date, countdown */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6 gap-8">
        <h1 className="text-8xl sm:text-[10rem] lg:text-[12rem] font-black tracking-tighter leading-none">
          <span className="gradient-text">$GTA</span>
        </h1>

        <p className="text-sm sm:text-base text-white/30 uppercase tracking-[0.3em] font-medium">
          Vice City Sentinel
        </p>

        <div className="mt-4 flex flex-col items-center gap-3">
          <p className="text-xs text-white/20 uppercase tracking-[0.25em]">GTA VI Releases</p>
          <p className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase release-date-text leading-tight text-center">
            November 19<br />2026
          </p>
        </div>

        <CountdownTimer />

        {/* Scroll indicator */}
        <div className="mt-8 scroll-indicator">
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/20 to-white/5" />
        </div>
      </div>

      {/* Trailer embed section */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 sm:px-8 pb-24 sm:pb-32">
        <p className="text-xs text-white/20 uppercase tracking-[0.3em] mb-6 text-center">
          Official Trailer 2
        </p>
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/5 shadow-2xl shadow-black/50">
          <iframe
            src="https://www.youtube.com/embed/QdBZY2fkU-0?rel=0&modestbranding=1&color=white"
            title="Grand Theft Auto VI — Trailer 2"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
