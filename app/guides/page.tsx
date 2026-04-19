import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Guides — $GTA Vice City Sentinel',
  description: 'GTA 6 guides, walkthroughs, and tips. Coming soon.',
};

export default function GuidesPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <p className="text-xs uppercase tracking-[0.25em] text-accent-pink mb-4">
          Coming Soon
        </p>
        <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
          Guides
        </h1>
        <p className="text-sm text-white/40 leading-relaxed">
          Walkthroughs, tips, and strategies for GTA VI — dropping closer to launch.
        </p>
      </div>
    </div>
  );
}
