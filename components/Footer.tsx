import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-vice-abyss">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Single row links */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-6">
          <Link href="/lucia-caminos" className="text-xs text-white/30 hover:text-accent-cyan transition-colors">
            Lucia Caminos
          </Link>
          <Link href="/leaks" className="text-xs text-white/30 hover:text-accent-cyan transition-colors">
            Leaks
          </Link>
          <Link href="/blogs" className="text-xs text-white/30 hover:text-accent-cyan transition-colors">
            Blogs
          </Link>
<Link href="/category/guides" className="text-xs text-white/30 hover:text-accent-cyan transition-colors">
            Guides
          </Link>
          <a
            href="https://x.com/luciaethereum"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-white/30 hover:text-accent-cyan transition-colors"
          >
            @luciaethereum
          </a>
          <a
            href="https://etherscan.io/token/0xb81377F1Bc45FFb7Ff9F4adf83E4FA3EA3a74A46"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-white/30 hover:text-accent-cyan transition-colors"
          >
            $Lucia on Ethereum
          </a>
        </div>

        {/* Legal bar */}
        <div className="text-center">
          <p className="text-[10px] text-white/15">
            &copy; {new Date().getFullYear()} $Lucia Community. The OG Lucia on Ethereum. Not affiliated with Rockstar Games or Take-Two Interactive.
          </p>
        </div>
      </div>
    </footer>
  );
}
