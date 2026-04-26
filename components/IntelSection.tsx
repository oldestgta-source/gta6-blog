import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';

export default function IntelSection() {
  const posts = getAllPosts();
  const recentPosts = posts.slice(0, 3);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      {/* Section label */}
      <p className="text-xs uppercase tracking-[0.25em] text-accent-cyan mb-8">
        Latest Intel
      </p>

      {/* Featured leaks thread card */}
      <Link href="/leaks" className="group block mb-12">
        <div className="relative bg-vice-card border border-vice-border rounded-xl overflow-hidden transition-all duration-500 hover:border-accent-pink/30 hover:shadow-2xl hover:shadow-accent-pink/5">
          <div className="md:flex">
            <div className="md:w-1/2 aspect-video md:aspect-auto bg-vice-darker relative overflow-hidden min-h-[280px]">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-pink/20 via-transparent to-accent-cyan/10 flex items-center justify-center">
                <span className="text-7xl font-black gradient-text opacity-30 group-hover:opacity-50 transition-opacity">
                  VI
                </span>
              </div>
            </div>
            <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
              <span className="text-[10px] uppercase tracking-[0.2em] text-accent-pink font-semibold mb-3">
                Featured &middot; Leaks Thread
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-accent-cyan transition-colors">
                GTA 6 Complete Leaks &amp; Intel Thread
              </h3>
              <p className="text-sm text-white/50 leading-relaxed mb-4">
                Everything confirmed, leaked, and rumored about GTA VI — sourced from The GTA VI Document v1.6, Rockstar announcements, and credible community intel.
              </p>
              <span className="text-xs text-accent-cyan group-hover:text-accent-pink transition-colors">
                Read the full thread &rarr;
              </span>
            </div>
          </div>
        </div>
      </Link>

      {/* Recent posts row */}
      {recentPosts.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-vice-border/50 rounded-xl overflow-hidden">
          {recentPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/posts/${post.frontmatter.slug}`}
              className="group bg-vice-card hover:bg-vice-card-hover p-6 transition-all duration-300"
            >
              <span className="text-[10px] uppercase tracking-[0.2em] text-accent-pink font-semibold">
                {post.frontmatter.category.replace(/-/g, ' ')}
              </span>
              <h4 className="text-base font-bold text-white mt-2 mb-2 group-hover:text-accent-cyan transition-colors line-clamp-2">
                {post.frontmatter.title}
              </h4>
              <p className="text-xs text-white/40 line-clamp-2">
                {post.frontmatter.excerpt}
              </p>
              <span className="text-[10px] text-white/25 mt-3 block">
                {new Date(post.frontmatter.date).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
