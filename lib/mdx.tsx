import { compileMDX } from 'next-mdx-remote/rsc';
import type { PostFrontmatter } from './posts';

const components = {
  h1: (props: React.ComponentProps<'h1'>) => (
    <h1 className="text-3xl font-bold text-white mt-8 mb-4" {...props} />
  ),
  h2: (props: React.ComponentProps<'h2'>) => (
    <h2 className="text-2xl font-bold text-white mt-8 mb-3 pb-2 border-b border-vice-border" {...props} />
  ),
  h3: (props: React.ComponentProps<'h3'>) => (
    <h3 className="text-xl font-semibold text-white mt-6 mb-2" {...props} />
  ),
  p: (props: React.ComponentProps<'p'>) => (
    <p className="text-foreground/90 leading-relaxed mb-5" {...props} />
  ),
  a: (props: React.ComponentProps<'a'>) => (
    <a className="text-vice-teal hover:text-vice-pink underline underline-offset-2 transition-colors" {...props} />
  ),
  blockquote: (props: React.ComponentProps<'blockquote'>) => (
    <blockquote className="border-l-3 border-vice-pink pl-4 italic text-vice-muted my-6" {...props} />
  ),
  ul: (props: React.ComponentProps<'ul'>) => (
    <ul className="list-disc pl-6 mb-5 space-y-2" {...props} />
  ),
  ol: (props: React.ComponentProps<'ol'>) => (
    <ol className="list-decimal pl-6 mb-5 space-y-2" {...props} />
  ),
  li: (props: React.ComponentProps<'li'>) => (
    <li className="text-foreground/90" {...props} />
  ),
  code: (props: React.ComponentProps<'code'>) => (
    <code className="text-vice-pink bg-vice-pink/10 px-1.5 py-0.5 rounded text-sm" {...props} />
  ),
  pre: (props: React.ComponentProps<'pre'>) => (
    <pre className="bg-vice-card border border-vice-border rounded-lg p-4 overflow-x-auto my-6" {...props} />
  ),
  hr: () => <hr className="border-vice-border my-8" />,
  strong: (props: React.ComponentProps<'strong'>) => (
    <strong className="text-white font-semibold" {...props} />
  ),
  img: (props: React.ComponentProps<'img'>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img className="rounded-lg border border-vice-border my-6 w-full" alt={props.alt || ''} {...props} />
  ),
};

export async function renderMDX(source: string) {
  const { content, frontmatter } = await compileMDX<PostFrontmatter>({
    source,
    components,
    options: {
      parseFrontmatter: true,
    },
  });

  return { content, frontmatter };
}
