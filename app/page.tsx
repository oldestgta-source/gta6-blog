import HeroSection from '@/components/HeroSection';
import LuciaShowcase from '@/components/LuciaShowcase';
import IntelSection from '@/components/IntelSection';
import ExploreMap from '@/components/ExploreMap';
import ContentGrid from '@/components/ContentGrid';
import CommunitySection from '@/components/CommunitySection';
import FadeObserver from '@/components/FadeObserver';

export default function Home() {
  return (
    <>
      <FadeObserver />

      {/* Hero — full viewport with trailers */}
      <HeroSection />

      {/* Lucia Showcase */}
      <div className="fade-section">
        <LuciaShowcase />
      </div>

      {/* Latest Intel */}
      <div className="fade-section">
        <IntelSection />
      </div>

      {/* Explore the Map — 5 Leonida locations */}
      <div className="fade-section">
        <ExploreMap />
      </div>

      {/* Curated Newsfeed */}
      <div className="fade-section">
        <ContentGrid />
      </div>

      {/* Community */}
      <div className="fade-section">
        <CommunitySection />
      </div>
    </>
  );
}
