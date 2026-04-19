export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center grain hero-glow overflow-hidden">
      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-7xl sm:text-9xl font-black tracking-tight mb-4">
          <span className="gradient-text">$GTA</span>
        </h1>
        <p className="text-lg sm:text-xl text-vice-muted font-medium uppercase tracking-[0.25em] mb-6">
          Vice City Sentinel
        </p>
        <p className="text-sm sm:text-base text-vice-muted/70 max-w-md mx-auto leading-relaxed">
          News, leaks, deep dives, and guides — from a curious community who does their homework.
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 scroll-indicator">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-vice-muted/40"
        >
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
