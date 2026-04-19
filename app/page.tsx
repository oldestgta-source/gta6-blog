import HeroSection from '@/components/HeroSection';
import IntelSection from '@/components/IntelSection';
import ViceCityGallery from '@/components/ViceCityGallery';
import ContentGrid from '@/components/ContentGrid';
import CommunitySection from '@/components/CommunitySection';
import FadeObserver from '@/components/FadeObserver';

export default function Home() {
  return (
    <>
      <FadeObserver />

      {/* Section 1: Hero */}
      <HeroSection />

      {/* Section 2: Intel */}
      <div className="fade-section">
        <IntelSection />
      </div>

      {/* Section 3: Vice City Gallery */}
      <div className="fade-section">
        <ViceCityGallery />
      </div>

      {/* Section 4: Content Grid */}
      <div className="fade-section">
        <ContentGrid />
      </div>

      {/* Section 5: Community Takeover */}
      <div className="fade-section">
        <CommunitySection />
      </div>
    </>
  );
}
