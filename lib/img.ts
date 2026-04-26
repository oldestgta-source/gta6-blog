/**
 * Wraps an external image URL through our /api/img proxy
 * to bypass CDN hotlink protection.
 */
export function proxyImg(src: string): string {
  return `/api/img?url=${encodeURIComponent(src)}`;
}
