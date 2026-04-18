import { notFound } from 'next/navigation';
import { getPostBySlug, getPostSlugs } from '@/lib/posts';
import { renderMDX } from '@/lib/mdx';
import { generatePostMetadata, generateArticleSchema } from '@/lib/seo';
import ShareButtons from '@/components/ShareButtons';
import TableOfContents from '@/components/TableOfContents';
import NewsletterSignup from '@/components/NewsletterSignup';
import type { Metadata } from 'next';

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return generatePostMetadata(post.frontmatter);
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const { content } = await renderMDX(
    `---\n${Object.entries(post.frontmatter).map(([k, v]) => `${k}: ${JSON.stringify(v)}`).join('\n')}\n---\n\n${post.content}`
  );

  const schema = generateArticleSchema(post.frontmatter);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex gap-12">
          {/* Main content */}
          <div className="flex-1 min-w-0 max-w-3xl mx-auto">
            {/* Post header */}
            <header className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 text-xs font-semibold bg-vice-pink/20 text-vice-pink rounded-full">
                  {post.frontmatter.category.replace(/-/g, ' ').toUpperCase()}
                </span>
                <span className="text-xs text-vice-muted">
                  {new Date(post.frontmatter.date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-4">
                {post.frontmatter.title}
              </h1>

              <p className="text-lg text-vice-muted mb-6">
                {post.frontmatter.excerpt}
              </p>

              <div className="flex items-center justify-between flex-wrap gap-4 pb-6 border-b border-vice-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-vice-card border border-vice-border flex items-center justify-center">
                    <span className="text-sm font-bold gradient-text">
                      {post.frontmatter.author?.charAt(0) || 'A'}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">{post.frontmatter.author}</p>
                    <p className="text-xs text-vice-muted">{post.readingTime}</p>
                  </div>
                </div>
                <ShareButtons title={post.frontmatter.title} slug={post.frontmatter.slug} />
              </div>
            </header>

            {/* Article body */}
            <article className="prose">
              {content}
            </article>

            {/* Tags */}
            {post.frontmatter.tags && post.frontmatter.tags.length > 0 && (
              <div className="mt-10 pt-6 border-t border-vice-border">
                <div className="flex flex-wrap gap-2">
                  {post.frontmatter.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs bg-vice-card border border-vice-border text-vice-muted rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <NewsletterSignup />
          </div>

          {/* Table of contents sidebar */}
          <aside className="hidden xl:block w-64 shrink-0">
            <TableOfContents />
          </aside>
        </div>
      </div>
    </>
  );
}
