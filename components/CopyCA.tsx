'use client';

import { useState } from 'react';

const CA = 'EzL6hy8z79dv674kGipoL8VnEokQ5931iMk6Hj2zcN15';

export default function CopyCA() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(CA);
    } catch {
      // fallback
      const el = document.createElement('textarea');
      el.value = CA;
      el.style.position = 'fixed';
      el.style.opacity = '0';
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="group flex items-center gap-3 bg-vice-darker border border-vice-border rounded-lg px-4 py-3 hover:border-vice-teal/50 transition-colors w-full sm:w-auto cursor-pointer"
      title="Click to copy"
    >
      <span className="text-xs font-semibold text-vice-teal uppercase tracking-wider shrink-0">CA:</span>
      <code className="text-xs text-vice-muted font-mono break-all select-all">
        {CA}
      </code>
      <span className="text-xs text-vice-muted/60 shrink-0 ml-auto">
        {copied ? (
          <span className="text-emerald-400 font-medium">Copied</span>
        ) : (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-40 group-hover:opacity-80 transition-opacity">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>
        )}
      </span>
    </button>
  );
}
