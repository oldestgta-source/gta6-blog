import { getAllPosts, getPostBySlug } from '@/lib/posts';
import Link from 'next/link';

export default function IntelSection() {
  const leaksPost = getPostBySlug('gta-6-leaked-footage-comprehensive-breakdown');
  const allPosts = getAllPosts();
  // Get latest posts excluding the leaks thread
  const recentPosts = allPosts
    .filter((p) => p.slug \!== 'gta-6-leaked-footage-comprehensive-breakdown')
    .slice(0, 3);

  return (
    <section className="relative py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-xs font-semibold text-vice-teal uppercase tracking-[0.2em] mb-8">
          Latest Intel
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Featured: Leaks thread */}
          {leaksPost && (
            <Link href="/leaks" className="lg:col-span-3 group block">
              <article className="h-full bg-vice-card border border-vice-border rounded-xl p-6 sm:p-8 flex flex-col justify-between transition-all hover:border-vice-pink/40 hover:shadow-lg hover:shadow-vice-pink/5">
                <div>
                  <span className="inline-block text-xs font-semibold text-amber-400 uppercase tracking-wider mb-3">
                    Leaks Thread
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-vice-teal transition-colors leading-tight">
                    {leaksPost.frontmatter.title}
                  </h3>
                  <p className="text-vice-muted leading-relaxed line-clamp-3 mb-6">
                    {leaksPost.frontmatter.excerpt}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-xs text-vice-muted bg-vice-darker px-3 py-1 rounded-full">
                    {leaksPost.readingTime}
                  </span>
                  <span className="text-sm font-semibold text-vice-pink group-hover:translate-x-1 transition-transform">
                    Read the Full Thread →
                  </span>
                </div>
              </article>
            </Link>
          )}

          {/* Recent posts stack */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {recentPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/posts/${post.slug}`}
                className="group block"
              >
                <article className="bg-vice-card border border-vice-border rounded-xl p-5 transition-all hover:border-vice-teal/30">
                  <span className="text-[10px] font-semibold text-vice-pink uppercase tracking-wider">
                    {post.frontmatter.category.replace(/-/g, ' ')}
                  </span>
                  <h4 className="text-sm font-bold text-white mt-1.5 mb-2 group-hover:text-vice-teal transition-colors line-clamp-2 leading-snug">
                    {post.frontmatter.title}
                  </h4>
                  <span className="text-xs text-vice-muted">
                    {new Date(post.frontmatter.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </span>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
