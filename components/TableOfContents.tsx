'use client';

import { useEffect, useState } from 'react';

interface TocItem {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents() {
  const [headings, setHeadings] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const article = document.querySelector('article');
    if (!article) return;

    const elements = article.querySelectorAll('h2, h3');
    const items: TocItem[] = Array.from(elements).map((el) => {
      if (!el.id) {
        el.id = el.textContent?.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || '';
      }
      return {
        id: el.id,
        text: el.textContent || '',
        level: parseInt(el.tagName[1]),
      };
    });
    setHeadings(items);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-80px 0px -80% 0px' }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  if (headings.length === 0) return null;

  return (
    <nav className="hidden xl:block sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto">
      <h4 className="text-xs font-semibold text-vice-teal uppercase tracking-wider mb-3">
        On This Page
      </h4>
      <ul className="space-y-1.5 border-l border-vice-border">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              className={`block text-sm py-0.5 transition-colors border-l-2 -ml-px ${
                heading.level === 3 ? 'pl-6' : 'pl-3'
              } ${
                activeId === heading.id
                  ? 'text-vice-pink border-vice-pink'
                  : 'text-vice-muted hover:text-vice-teal border-transparent'
              }`}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
