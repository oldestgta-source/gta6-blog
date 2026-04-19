import StatsRow from '@/components/StatsRow';
import CopyCA from '@/components/CopyCA';

export default function CommunitySection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-vice-abyss grain">
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 py-20 flex flex-col items-center text-center gap-10">
        {/* Headline */}
        <div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4">
            Built by the <span className="text-vice-pink">$GTA</span> community
          </h2>
          <p className="text-base sm:text-lg text-vice-muted/80 max-w-2xl mx-auto leading-relaxed">
            This site is funded and driven by holders of the oldest $GTA coin on Pump.fun.
            Every holder keeps the lights on. Not affiliated with Rockstar — just a community that cares about the game.
          </p>
        </div>

        {/* Stats */}
        <StatsRow />

        {/* CA */}
        <CopyCA />

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://pump.fun/coin/EzL6hy8z79dv674kGipoL8VnEokQ5931iMk6Hj2zcN15"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 bg-accent-pink hover:bg-accent-pink/80 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-accent-pink/25 text-sm text-center whitespace-nowrap"
          >
            Buy $GTA on Pump.fun
          </a>
          <a
            href="https://x.com/oldestgta"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 bg-transparent border border-vice-border hover:border-accent-cyan/50 text-accent-cyan font-semibold rounded-lg transition-all text-sm text-center whitespace-nowrap"
          >
            Follow @oldestgta
          </a>
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-vice-muted/50 max-w-lg leading-relaxed">
          Fan site, not affiliated with Rockstar Games or Take-Two Interactive. $GTA is a community token — not investment advice.
        </p>
      </div>
    </section>
  );
}
