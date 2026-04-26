import { NextRequest, NextResponse } from 'next/server';

/**
 * Image proxy route — fetches external images server-side
 * to bypass CDN hotlink protection.
 *
 * Usage: /api/img?url=<encoded-url>
 *
 * Only allows images from approved domains.
 */

const ALLOWED_HOSTS = [
  'static.wikia.nocookie.net',
  'media-rockstargames-com.akamaized.net',
  'media.rockstargames.com',
];

export async function GET(request: NextRequest) {
  const url = request.nextUrl.searchParams.get('url');

  if (!url) {
    return NextResponse.json({ error: 'Missing url param' }, { status: 400 });
  }

  let parsed: URL;
  try {
    parsed = new URL(url);
  } catch {
    return NextResponse.json({ error: 'Invalid url' }, { status: 400 });
  }

  if (!ALLOWED_HOSTS.includes(parsed.hostname)) {
    return NextResponse.json({ error: 'Domain not allowed' }, { status: 403 });
  }

  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; LuciaETH/1.0)',
        Referer: parsed.origin + '/',
      },
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: `Upstream returned ${res.status}` },
        { status: 502 },
      );
    }

    const contentType = res.headers.get('content-type') || 'image/jpeg';
    const buffer = await res.arrayBuffer();

    return new NextResponse(buffer, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=86400, s-maxage=604800',
      },
    });
  } catch (err) {
    return NextResponse.json(
      { error: 'Failed to fetch image' },
      { status: 502 },
    );
  }
}
