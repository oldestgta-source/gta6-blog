'use client';

import { useState, useEffect } from 'react';

const TARGET = new Date('2026-11-19T00:00:00-05:00').getTime();

export default function CountdownTimer() {
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const diff = Math.max(0, TARGET - now);
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);

  const blocks = [
    { label: 'Days', value: days },
    { label: 'Hours', value: hours },
    { label: 'Min', value: minutes },
    { label: 'Sec', value: seconds },
  ];

  return (
    <div className="flex gap-3 sm:gap-5 justify-center">
      {blocks.map((b) => (
        <div key={b.label} className="flex flex-col items-center">
          <span className="text-3xl sm:text-5xl font-black text-white tabular-nums tracking-tight">
            {String(b.value).padStart(2, '0')}
          </span>
          <span className="text-[10px] sm:text-xs uppercase tracking-widest text-white/40 mt-1">
            {b.label}
          </span>
        </div>
      ))}
    </div>
  );
}
