import { getAllPosts } from '@/lib/posts';
import PostCard from '@/components/PostCard';
import Link from 'next/link';

const categories = [
  { name: 'News', slug: 'news' },
  { name: 'Leaks', slug: 'leaks' },
  { name: 'Deep Dives', slug: 'deep-dive' },
  { name: 'Guides', slug: 'guides' },
  { name: 'Opinion', slug: 'opinion' },
  { name: 'GTA Online 2', slug: 'gta-online-2' },
  { name: 'Comparison', slug: 'comparison' },
];

export default function ContentGrid() {
  const posts = getAllPosts();

  if (posts.length === 0) return null;

  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-xs font-semibold text-vice-teal uppercase tracking-[0.2em] mb-6">
          Recent
        </h2>

        {/* Category pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              className="px-3 py-1 text-xs font-medium text-vice-muted border border-vice-border rounded-full hover:border-vice-teal/40 hover:text-vice-teal transition-colors"
            >
              {cat.name}
            </Link>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
