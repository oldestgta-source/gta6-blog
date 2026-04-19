import { getAllPosts, getPostBySlug } from '@/lib/posts';
import Link from 'next/link';
import Image from 'next/image';

export default function IntelSection() {
  const leaksPost = getPostBySlug('gta-6-leaked-footage-comprehensive-breakdown');
  const allPosts = getAllPosts();
  const recentPosts = allPosts
    .filter((p) => p.slug !== 'gta-6-leaked-footage-comprehensive-breakdown')
    .slice(0, 3);

  return (
    <section className="relative py-24 sm:py-32">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8">
        {/* Section label */}
        <p className="text-xs text-white/20 uppercase tracking-[0.3em] mb-12">
          Latest Intel
        </p>

        {/* Featured leaks thread — cinematic card */}
        {leaksPost && (
          <Link href="/leaks" className="group block mb-16">
            <article className="relative overflow-hidden rounded-2xl border border-white/5 bg-vice-card hover:border-vice-pink/30 transition-all duration-500">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Image side */}
                <div className="relative aspect-[16/10] lg:aspect-auto overflow-hidden">
                  {leaksPost.frontmatter.image ? (
                    <Image
                      src={leaksPost.frontmatter.image}
                      alt={leaksPost.frontmatter.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-vice-pink/10 to-vice-teal/10 flex items-center justify-center">
                      <span className="text-8xl font-black gradient-text opacity-10">$GTA</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-vice-card/80 hidden lg:block" />
                </div>

                {/* Text side */}
                <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
                  <span className="text-xs font-semibold text-amber-400 uppercase tracking-[0.2em] mb-4">
                    Leaks Thread
                  </span>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4 group-hover:text-vice-teal transition-colors duration-300">
                    {leaksPost.frontmatter.title}
                  </h2>
                  <p className="text-white/40 leading-relaxed mb-8 line-clamp-3 text-base">
                    {leaksPost.frontmatter.excerpt}
                  </p>
                  <div className="flex items-center gap-6">
                    <span className="text-xs text-white/20 bg-white/5 px-4 py-1.5 rounded-full">
                      {leaksPost.readingTime}
                    </span>
                    <span className="text-sm font-semibold text-vice-pink group-hover:translate-x-2 transition-transform duration-300">
                      Read the Full Thread &rarr;
                    </span>
                  </div>
                </div>
              </div>
            </article>
          </Link>
        )}

        {/* Recent posts — asymmetric grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden">
          {recentPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/posts/${post.slug}`}
              className="group block bg-vice-abyss p-8 hover:bg-vice-card transition-colors duration-300"
            >
              <span className="text-[10px] font-semibold text-vice-pink uppercase tracking-[0.2em]">
                {post.frontmatter.category.replace(/-/g, ' ')}
              </span>
              <h3 className="text-lg font-bold text-white mt-3 mb-3 group-hover:text-vice-teal transition-colors line-clamp-2 leading-snug">
                {post.frontmatter.title}
              </h3>
              <p className="text-sm text-white/30 line-clamp-2 mb-4">
                {post.frontmatter.excerpt}
              </p>
              <span className="text-xs text-white/20">
                {new Date(post.frontmatter.date).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
