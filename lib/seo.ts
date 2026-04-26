import type { Metadata } from 'next';
import type { PostFrontmatter } from './posts';

const SITE_URL = 'https://luciaeth.com';
const SITE_NAME = '$Lucia | OG Lucia on Ethereum';
const DEFAULT_DESCRIPTION = 'The OG $Lucia token on Ethereum — back to claim her throne. GTA 6 news, Lucia character deep dives, and community coverage powered by the original Lucia token on ETH.';

export function generateSiteMetadata(): Metadata {
  return {
    title: {
      default: SITE_NAME,
      template: `%s | ${SITE_NAME}`,
    },
    description: DEFAULT_DESCRIPTION,
    metadataBase: new URL(SITE_URL),
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: SITE_URL,
      siteName: SITE_NAME,
      title: SITE_NAME,
      description: DEFAULT_DESCRIPTION,
    },
    twitter: {
      card: 'summary_large_image',
      title: SITE_NAME,
      description: DEFAULT_DESCRIPTION,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export function generatePostMetadata(frontmatter: PostFrontmatter): Metadata {
  const url = `${SITE_URL}/posts/${frontmatter.slug}`;

  return {
    title: frontmatter.title,
    description: frontmatter.excerpt,
    openGraph: {
      type: 'article',
      url,
      title: frontmatter.title,
      description: frontmatter.excerpt,
      publishedTime: frontmatter.date,
      authors: [frontmatter.author],
      tags: frontmatter.tags,
      images: frontmatter.image
        ? [
            {
              url: `${SITE_URL}${frontmatter.image}`,
              width: 1200,
              height: 630,
              alt: frontmatter.imageAlt,
            },
          ]
        : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: frontmatter.title,
      description: frontmatter.excerpt,
      images: frontmatter.image ? [`${SITE_URL}${frontmatter.image}`] : [],
    },
  };
}

export function generateCategoryMetadata(category: string): Metadata {
  const title = `${category.charAt(0).toUpperCase() + category.slice(1).replace(/-/g, ' ')} — $Lucia`;
  const description = `Browse all GTA 6 & Lucia ${category.replace(/-/g, ' ')} articles, analysis, and coverage.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/category/${category}`,
    },
  };
}

export function generateArticleSchema(frontmatter: PostFrontmatter) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: frontmatter.title,
    description: frontmatter.excerpt,
    image: frontmatter.image ? `${SITE_URL}${frontmatter.image}` : undefined,
    datePublished: frontmatter.date,
    author: {
      '@type': 'Person',
      name: frontmatter.author,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}
