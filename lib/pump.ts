const COIN_ADDRESS = 'EzL6hy8z79dv674kGipoL8VnEokQ5931iMk6Hj2zcN15';
const PUMP_API = `https://frontend-api-v3.pump.fun/coins/${COIN_ADDRESS}`;

export interface PumpStats {
  holders: string;
  marketCap: string;
  communityAge: string;
}

// Coin created ~April 2024, taken over by GTA fans in 2026
const COIN_LAUNCH = new Date('2024-04-01');

function daysSinceLaunch(): string {
  const now = new Date();
  const diff = Math.floor((now.getTime() - COIN_LAUNCH.getTime()) / (1000 * 60 * 60 * 24));
  return `${diff.toLocaleString()} days`;
}

export async function fetchPumpStats(): Promise<PumpStats> {
  const fallback: PumpStats = {
    holders: '—',
    marketCap: '—',
    communityAge: daysSinceLaunch(),
  };

  try {
    const res = await fetch(PUMP_API, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) return fallback;

    const data = await res.json();

    return {
      holders: data.holder_count
        ? Number(data.holder_count).toLocaleString()
        : '—',
      marketCap: data.usd_market_cap
        ? `$${Number(data.usd_market_cap).toLocaleString(undefined, { maximumFractionDigits: 0 })}`
        : '—',
      communityAge: daysSinceLaunch(),
    };
  } catch {
    return fallback;
  }
}
