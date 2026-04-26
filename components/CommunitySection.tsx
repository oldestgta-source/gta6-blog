const CA = '0xb81377F1Bc45FFb7Ff9F4adf83E4FA3EA3a74A46';

export default function CommunitySection() {
  return (
    <section className="py-16 sm:py-24 bg-vice-deep">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Echo logo */}
        <div className="text-[6rem] sm:text-[8rem] font-black leading-none tracking-tighter select-none mb-6 opacity-10">
          <span className="gradient-text">$Lucia</span>
        </div>

        <p className="text-xs uppercase tracking-[0.25em] text-accent-pink mb-3">
          OG Lucia on Ethereum
        </p>
        <h2 className="text-2xl sm:text-4xl font-black text-white mb-4">
          She&apos;s back to claim her throne on <span className="text-eth-purple">ETH</span>.
        </h2>
        <p className="text-sm text-white/40 max-w-xl mx-auto mb-4 leading-relaxed">
          $Lucia is the original Lucia token on Ethereum — launched over 2 years ago. The OG is back, and with GTA 6 on the horizon, Lucia is ready to change the odds in her favor.
        </p>
        <p className="text-xs text-white/25 max-w-md mx-auto mb-8">
          Funded and driven by the $Lucia community. Every holder helps keep this project alive and growing.
        </p>

        {/* ETH logo + CA display */}
        <div className="flex flex-col items-center gap-4 mb-8">
          <img src="/images/eth-logo.svg" alt="Ethereum" className="w-8 h-12 opacity-40" />
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-white/10 bg-white/[0.03]">
            <span className="text-[10px] uppercase tracking-wider text-eth-purple font-semibold">ETH CA</span>
            <code className="text-xs text-white/50 font-mono break-all select-all">{CA}</code>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`https://etherscan.io/token/${CA}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 bg-eth-purple hover:bg-eth-purple/80 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-eth-purple/25 text-sm"
          >
            View on Etherscan
          </a>
          <a
            href={`https://app.uniswap.org/swap?outputCurrency=${CA}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 bg-accent-pink hover:bg-accent-pink/80 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-accent-pink/25 text-sm"
          >
            Buy $Lucia on Uniswap
          </a>
          <a
            href="https://x.com/luciaethereum"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 border border-vice-border hover:border-eth-purple/50 text-eth-purple font-semibold rounded-lg transition-all text-sm"
          >
            Follow @luciaethereum
          </a>
        </div>
      </div>
    </section>
  );
}
