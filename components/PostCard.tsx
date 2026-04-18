import Link from 'next/link';
import type { Post } from '@/lib/posts';

const categoryColors: Record<string, string> = {
  news: 'bg-vice-pink/20 text-vice-pink',
  leaks: 'bg-amber-500/20 text-amber-400',
  'deep-dive': 'bg-vice-teal/20 text-vice-teal',
  guides: 'bg-emerald-500/20 text-emerald-400',
  opinion: 'bg-purple-500/20 text-purple-400',
  'gta-online-2': 'bg-blue-500/20 text-blue-400',
  comparison: 'bg-orange-500/20 text-orange-400',
};

export default function PostCard({ post }: { post: Post }) {
  const { frontmatter } = post;
  const colorClass = categoryColors[frontmatter.category] || 'bg-vice-teal/20 text-vice-teal';

  return (
    <Link href={`/posts/${frontmatter.slug}`} className="group block">
      <article className="bg-vice-card border border-vice-border rounded-xl overflow-hidden transition-all duration-300 hover:border-vice-pink/50 hover:shadow-lg hover:shadow-vice-pink/5 hover:-translate-y-1">
        {/* Image placeholder */}
        <div className="aspect-video bg-vice-darker relative overflow-hidden">
          {frontmatter.image ? (
            <div
              className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url(${frontmatter.image})` }}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-4xl font-black gradient-text opacity-30">GTA VI</span>
            </div>
          )}
          {/* Category badge */}
          <span className={`absolute top-3 left-3 px-2.5 py-1 text-xs font-semibold rounded-full ${colorClass}`}>
            {frontmatter.category.replace(/-/g, ' ').toUpperCase()}
          </span>
        </div>

        {/* Content */}
        <div className="p-5">
          <h2 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-vice-teal transition-colors">
            {frontmatter.title}
          </h2>
          <p className="text-sm text-vice-muted line-clamp-2 mb-4">
            {frontmatter.excerpt}
          </p>
          <div className="flex items-center justify-between text-xs text-vice-muted">
            <span>{new Date(frontmatter.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
            <span>{post.readingTime}</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
