'use client';

import { useState } from 'react';

const CA = '0xb81377F1Bc45FFb7Ff9F4adf83E4FA3EA3a74A46';

export default function CopyCA() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(CA);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* fallback */
      const el = document.createElement('textarea');
      el.value = CA;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      onClick={copy}
      className="group flex items-center gap-2 mx-auto px-4 py-2 rounded-full border border-white/10 hover:border-accent-pink/40 transition-all duration-300 bg-white/[0.03] hover:bg-white/[0.06] cursor-pointer"
    >
      <span className="text-[10px] sm:text-xs text-white/40 uppercase tracking-wider">ETH CA</span>
      <code className="text-[10px] sm:text-xs text-white/60 font-mono">
        {CA.slice(0, 6)}...{CA.slice(-4)}
      </code>
      <span className="text-[10px] sm:text-xs text-accent-pink font-medium">
        {copied ? 'Copied!' : 'Tap to copy'}
      </span>
    </button>
  );
}
