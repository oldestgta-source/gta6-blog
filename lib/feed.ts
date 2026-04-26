import fs from 'fs';
import path from 'path';

export interface FeedItem {
  title: string;
  url: string;
  source: string;
  date: string;
  excerpt: string;
  category: string;
  image?: string;
  tag?: string;
}

export function getFeed(limit?: number): FeedItem[] {
  const feedPath = path.join(process.cwd(), 'content/feed/feed.json');
  if (!fs.existsSync(feedPath)) return [];

  const raw = fs.readFileSync(feedPath, 'utf-8');
  const items: FeedItem[] = JSON.parse(raw);

  // Sort by date descending
  items.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return limit ? items.slice(0, limit) : items;
}
