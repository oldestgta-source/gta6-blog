import { getAllPosts } from '@/lib/posts';
import PostCard from '@/components/PostCard';
import NewsletterSignup from '@/components/NewsletterSignup';
import Link from 'next/link';

const categories = [
  { name: 'News', slug: 'news', color: 'border-vice-pink text-vice-pink' },
  { name: 'Leaks', slug: 'leaks', color: 'border-amber-400 text-amber-400' },
  { name: 'Deep Dives', slug: 'deep-dive', color: 'border-vice-teal text-vice-teal' },
  { name: 'Guides', slug: 'guides', color: 'border-emerald-400 text-emerald-400' },
  { name: 'Opinion', slug: 'opinion', color: 'border-purple-400 text-purple-400' },
  { name: 'GTA Online 2', slug: 'gta-online-2', color: 'border-blue-400 text-blue-400' },
  { name: 'Comparison', slug: 'comparison', color: 'border-orange-400 text-orange-400' },
];

export default function Home() {
  const posts = getAllPosts();
  const featuredPost = posts[0];
  const recentPosts = posts.slice(1);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* Hero Section */}
      <section className="text-center py-16 sm:py-24">
        <h1 className="text-5xl sm:text-7xl font-black mb-4">
          <span className="gradient-text">$GTA</span>
        </h1>
        <p className="text-xl sm:text-2xl text-vice-muted font-medium mb-2">
          Vice City Sentinel
        </p>
        <p className="text-sm text-vice-muted max-w-lg mx-auto">
          News, leaks, deep dives, and guides — from a curious community who does their homework.
        </p>

        {/* Category pills */}
        <div className="flex flex-wrap justify-center gap-2 mt-8">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              className={`px-4 py-1.5 text-xs font-semibold border rounded-full transition-all hover:bg-white/5 ${cat.color}`}
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="mb-12">
          <h2 className="text-sm font-semibold text-vice-teal uppercase tracking-wider mb-4">
            Latest
          </h2>
          <Link href={`/posts/${featuredPost.frontmatter.slug}`} className="group block">
            <article className="bg-vice-card border border-vice-border rounded-xl overflow-hidden transition-all hover:border-vice-pink/50 hover:shadow-lg hover:shadow-vice-pink/5">
              <div className="md:flex">
                <div className="md:w-1/2 aspect-video md:aspect-auto bg-vice-darker relative overflow-hidden">
                  {featuredPost.frontmatter.image ? (
                    <div
                      className="w-full h-full min-h-[250px] bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                      style={{ backgroundImage: `url(${featuredPost.frontmatter.image})` }}
                    />
                  ) : (
                    <div className="w-full h-full min-h-[250px] flex items-center justify-center">
                      <span className="text-6xl font-black gradient-text opacity-20">$GTA</span>
                    </div>
                  )}
                </div>
                <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
                  <span className="text-xs font-semibold text-vice-pink uppercase tracking-wider mb-2">
                    {featuredPost.frontmatter.category.replace(/-/g, ' ')}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-vice-teal transition-colors">
                    {featuredPost.frontmatter.title}
                  </h3>
                  <p className="text-vice-muted mb-4 line-clamp-3">
                    {featuredPost.frontmatter.excerpt}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-vice-muted">
                    <span>{new Date(featuredPost.frontmatter.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                    <span>&middot;</span>
                    <span>{featuredPost.readingTime}</span>
                  </div>
                </div>
              </div>
            </article>
          </Link>
        </section>
      )}

      {/* Recent Posts Grid */}
      {recentPosts.length > 0 && (
        <section className="mb-12">
          <h2 className="text-sm font-semibold text-vice-teal uppercase tracking-wider mb-4">
            Recent Posts
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      )}

      {/* Empty state */}
      {posts.length === 0 && (
        <section className="text-center py-20">
          <div className="text-6xl font-black gradient-text opacity-20 mb-4">$GTA</div>
          <p className="text-vice-muted text-lg">
            Content incoming. The agents are drafting the first articles now.
          </p>
        </section>
      )}

      {/* Community Takeover Banner */}
      <section className="my-12 bg-gradient-to-r from-vice-card to-vice-card-hover border border-vice-border rounded-xl overflow-hidden">
        <div className="p-8 sm:p-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-2">
                <span className="text-vice-pink">$GTA</span> Community Takeover
              </h3>
              <p className="text-sm text-vice-muted leading-relaxed mb-4">
                This site is built and funded by the $GTA community. Support us by picking up the oldest $GTA coin on pump.fun — every holder helps keep this project alive and growing.
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-3 mb-4">
                <span className="text-xs font-semibold text-vice-teal uppercase tracking-wider">CA:</span>
                <code className="text-xs text-vice-muted bg-vice-darker px-3 py-1.5 rounded-md border border-vice-border break-all select-all">
                  EzL6hy8z79dv674kGipoL8VnEokQ5931iMk6Hj2zcN15
                </code>
              </div>
            </div>
            <div className="flex flex-col gap-3 shrink-0">
              <a
                href="https://pump.fun/coin/EzL6hy8z79dv674kGipoL8VnEokQ5931iMk6Hj2zcN15"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-vice-pink hover:bg-vice-pink/80 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-vice-pink/25 text-sm text-center whitespace-nowrap"
              >
                Buy $GTA on Pump.fun
              </a>
              <a
                href="https://x.com/oldestgta"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-vice-card hover:bg-vice-card-hover border border-vice-border text-vice-teal font-semibold rounded-lg transition-all text-sm text-center whitespace-nowrap hover:border-vice-teal/50"
              >
                Follow @oldestgta
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterSignup />
    </div>
  );
}
