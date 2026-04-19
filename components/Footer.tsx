import Link from 'next/link';
import NewsletterSignup from '@/components/NewsletterSignup';

export default function Footer() {
  return (
    <footer className="bg-vice-abyss">
      {/* Newsletter */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 py-16 border-b border-white/5">
        <NewsletterSignup />
      </div>

      {/* Links + Legal */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-4">
            <span className="text-lg font-black gradient-text">$GTA</span>
            <span className="text-xs text-white/15">Vice City Sentinel</span>
          </div>

          {/* Minimal link row */}
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/leaks" className="text-xs text-white/20 hover:text-white/50 transition-colors">Leaks</Link>
            <Link href="/blogs" className="text-xs text-white/20 hover:text-white/50 transition-colors">Blogs</Link>
            <Link href="/characters" className="text-xs text-white/20 hover:text-white/50 transition-colors">Characters</Link>
            <Link href="/locations" className="text-xs text-white/20 hover:text-white/50 transition-colors">Locations</Link>
            <Link href="/guides" className="text-xs text-white/20 hover:text-white/50 transition-colors">Guides</Link>
            <Link href="/gtavi-online" className="text-xs text-white/20 hover:text-white/50 transition-colors">GTAVI Online</Link>
            <a href="https://x.com/oldestgta" target="_blank" rel="noopener noreferrer" className="text-xs text-white/20 hover:text-white/50 transition-colors">Twitter / X</a>
            <a href="https://pump.fun/coin/EzL6hy8z79dv674kGipoL8VnEokQ5931iMk6Hj2zcN15" target="_blank" rel="noopener noreferrer" className="text-xs text-white/20 hover:text-white/50 transition-colors">Pump.fun</a>
          </div>
        </div>

        {/* Bottom legal */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-white/10">
            &copy; {new Date().getFullYear()} $GTA Community Takeover. Not affiliated with Rockstar Games or Take-Two Interactive.
          </p>
          <code className="text-[10px] text-white/10 font-mono">
            CA: EzL6hy8z79dv674kGipoL8VnEokQ5931iMk6Hj2zcN15
          </code>
        </div>
      </div>
    </footer>
  );
}
