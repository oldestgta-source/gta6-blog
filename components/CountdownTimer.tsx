'use client';

import { useState, useEffect } from 'react';

const RELEASE = new Date('2026-11-19T00:00:00');

function getTimeLeft() {
  const now = new Date();
  const diff = RELEASE.getTime() - now.getTime();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function CountdownTimer() {
  const [time, setTime] = useState(getTimeLeft);

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const blocks = [
    { value: time.days, label: 'Days' },
    { value: time.hours, label: 'Hours' },
    { value: time.minutes, label: 'Min' },
    { value: time.seconds, label: 'Sec' },
  ];

  return (
    <div className="flex gap-4 sm:gap-6">
      {blocks.map((b) => (
        <div key={b.label} className="flex flex-col items-center">
          <span className="text-2xl sm:text-4xl font-bold text-white tabular-nums">
            {String(b.value).padStart(2, '0')}
          </span>
          <span className="text-[10px] text-white/25 uppercase tracking-widest mt-1">
            {b.label}
          </span>
        </div>
      ))}
    </div>
  );
}
