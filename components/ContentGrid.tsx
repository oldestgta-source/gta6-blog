import { getAllPosts } from '@/lib/posts';
import PostCard from '@/components/PostCard';
import Link from 'next/link';

const categories = [
  { name: 'News', slug: 'news' },
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
    <section className="py-24 sm:py-32 bg-vice-darker">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-xs text-white/20 uppercase tracking-[0.3em] mb-4">
              All Posts
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Recent
            </h2>
          </div>
          <div className="hidden sm:flex gap-2">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                className="px-3 py-1 text-xs text-white/30 border border-white/5 rounded-full hover:border-white/20 hover:text-white/60 transition-colors"
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
