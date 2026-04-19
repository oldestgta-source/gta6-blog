import StatsRow from '@/components/StatsRow';
import CopyCA from '@/components/CopyCA';

export default function CommunitySection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center grain overflow-hidden">
      {/* Deep dark background */}
      <div className="absolute inset-0 bg-vice-abyss" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(255,45,149,0.04)_0%,transparent_70%)]" />

      <div className="relative z-10 w-full max-w-[1000px] mx-auto px-6 sm:px-8 py-24 flex flex-col items-center text-center gap-12">
        {/* Logo echo — like Rockstar's closing GTA VI logo */}
        <div className="text-6xl sm:text-8xl font-black gradient-text opacity-80">
          $GTA
        </div>

        <h2 className="text-2xl sm:text-4xl font-black text-white leading-tight">
          Built by the Community
        </h2>

        <p className="text-base text-white/30 max-w-lg leading-relaxed">
          This site is funded and driven by holders of the oldest $GTA coin on Pump.fun.
          Every holder keeps the lights on. Not affiliated with Rockstar — just a community that cares about the game.
        </p>

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
            className="px-8 py-3.5 bg-accent-pink hover:bg-accent-pink/80 text-white font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-accent-pink/20 text-sm text-center whitespace-nowrap"
          >
            Buy $GTA on Pump.fun
          </a>
          <a
            href="https://x.com/oldestgta"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 border border-white/10 hover:border-accent-cyan/40 text-accent-cyan font-semibold rounded-full transition-all text-sm text-center whitespace-nowrap"
          >
            Follow @oldestgta
          </a>
        </div>

        {/* DexScreener Chart */}
        <div className="w-full max-w-[900px] mt-4">
          <p className="text-xs uppercase tracking-[0.25em] text-accent-cyan mb-4">
            Live Chart
          </p>
          <div className="rounded-xl overflow-hidden border border-accent-pink/30">
            <iframe
              src="https://dexscreener.com/solana/dtbjgzzycknxerkppydes3anmxf1rw7uenkrcnd4vuyb?embed=1&theme=dark&info=0"
              className="w-full"
              style={{ height: '500px', border: 'none' }}
              title="$GTA DexScreener Chart"
              loading="lazy"
            />
          </div>
          <p className="text-[10px] text-white/15 mt-2">
            Monitor $GTA market performance on Solana.
          </p>
        </div>

        {/* Disclaimer */}
        <p className="text-[11px] text-white/15 max-w-md leading-relaxed">
          Fan site, not affiliated with Rockstar Games or Take-Two Interactive. $GTA is a community token — not investment advice.
        </p>
      </div>
    </section>
  );
}
