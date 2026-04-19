import fs from 'fs';
import path from 'path';

export interface FeedItem {
  title: string;
  url: string;
  source: string;
  date: string;
  tag: string;
  image?: string;
}

const feedPath = path.join(process.cwd(), 'content/feed/feed.json');

export function getFeed(): FeedItem[] {
  if (!fs.existsSync(feedPath)) return [];
  const raw = fs.readFileSync(feedPath, 'utf8');
  const items: FeedItem[] = JSON.parse(raw);
  return items.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
