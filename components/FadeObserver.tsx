'use client';

import { useEffect } from 'react';

export default function FadeObserver() {
  useEffect(() => {
    const sections = document.querySelectorAll('.fade-section');
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
