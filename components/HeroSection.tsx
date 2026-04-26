import CountdownTimer from '@/components/CountdownTimer';
import CopyCA from '@/components/CopyCA';

export default function HeroSection() {
  return (
    <section className="relative">
      {/* Main hero viewport */}
      <div className="hero-glow grain min-h-screen flex flex-col items-center justify-center text-center px-4 relative">
        {/* ETH logo */}
        <div className="mb-4">
          <img src="/images/eth-logo.svg" alt="Ethereum" className="w-16 h-24 sm:w-20 sm:h-32 mx-auto opacity-60" />
        </div>

        {/* Oversized logo */}
        <h1 className="text-[7rem] sm:text-[10rem] md:text-[13rem] font-black leading-none tracking-tighter select-none">
          <span className="gradient-text">$Lucia</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-white/30 mt-2 mb-4">
          The OG Lucia Token on Ethereum
        </p>

        {/* Lucia tagline */}
        <p className="text-sm sm:text-base text-white/50 max-w-lg mx-auto mb-6 leading-relaxed italic">
          &ldquo;Fresh out of prison and ready to change the odds in her favor&rdquo;
        </p>

        {/* Token age badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-eth-purple/30 bg-eth-purple/5 mb-6">
          <span className="text-[10px] sm:text-xs text-eth-purple font-semibold uppercase tracking-wider">Launched 2+ Years Ago</span>
          <span className="text-[10px] text-white/30">|</span>
          <span className="text-[10px] sm:text-xs text-white/40">The OG $Lucia on ETH</span>
        </div>

        {/* Release date */}
        <p className="text-2xl sm:text-4xl font-black release-date-text mb-6">
          November 19, 2026
        </p>

        {/* Countdown */}
        <div className="mb-5">
          <CountdownTimer />
        </div>

        {/* CA copy */}
        <div className="mb-10">
          <CopyCA />
        </div>

        {/* Scroll indicator */}
        <div className="scroll-indicator text-white/30 text-2xl">
          &#8595;
        </div>
      </div>

    </section>
  );
}
