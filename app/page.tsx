import HeroSection from '@/components/HeroSection';
import ViceCityGallery from '@/components/ViceCityGallery';
import ContentGrid from '@/components/ContentGrid';
import CommunitySection from '@/components/CommunitySection';
import FadeObserver from '@/components/FadeObserver';

export default function Home() {
  return (
    <>
      <FadeObserver />
      <HeroSection />

      <div className="fade-section">
        <ViceCityGallery />
      </div>

      <div className="fade-section">
        <ContentGrid />
      </div>

      <div className="fade-section">
        <CommunitySection />
      </div>
    </>
  );
}
