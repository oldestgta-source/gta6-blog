import { getPostsByCategory, getAllCategories } from '@/lib/posts';
import { generateCategoryMetadata } from '@/lib/seo';
import PostCard from '@/components/PostCard';
import Link from 'next/link';
import type { Metadata } from 'next';

interface CategoryPageProps {
  params: Promise<{ cat: string }>;
}

const categoryDescriptions: Record<string, string> = {
  news: 'Breaking Rockstar announcements, trailer drops, and release date updates.',
  leaks: 'Reddit leaks, datamine findings, and screenshot analysis.',
  'deep-dive': 'Map breakdowns, character analysis, physics comparisons, and economy predictions.',
  guides: 'Walkthroughs, tips, money-making strategies, and gameplay guides.',
  opinion: 'Editorial takes, hot takes, and community debate coverage.',
  'gta-online-2': 'Online mode speculation, heist system breakdowns, and economy analysis.',
  comparison: 'GTA 6 vs GTA 5, vs RDR2, vs real Miami and Vice City.',
};

export async function generateStaticParams() {
  return getAllCategories().map((cat) => ({ cat }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { cat } = await params;
  return generateCategoryMetadata(cat);
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { cat } = await params;
  const posts = getPostsByCategory(cat);
  const displayName = cat.charAt(0).toUpperCase() + cat.slice(1).replace(/-/g, ' ');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* Category header */}
      <header className="mb-10">
        <Link href="/" className="text-sm text-vice-muted hover:text-vice-teal transition-colors mb-4 inline-block">
          &larr; Back to Home
        </Link>
        <h1 className="text-4xl sm:text-5xl font-black text-white mb-3">
          {displayName}
        </h1>
        <p className="text-vice-muted max-w-2xl">
          {categoryDescriptions[cat] || `Browse all ${displayName.toLowerCase()} articles.`}
        </p>
      </header>

      {/* Posts grid */}
      {posts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <div className="text-4xl font-black gradient-text opacity-20 mb-4">
            {displayName}
          </div>
          <p className="text-vice-muted">
            No articles in this category yet. Our agents are working on it.
          </p>
          <Link href="/" className="inline-block mt-6 px-6 py-2 text-sm bg-vice-card border border-vice-border rounded-lg text-vice-teal hover:border-vice-teal/50 transition-all">
            Browse All Posts
          </Link>
        </div>
      )}
    </div>
  );
}
