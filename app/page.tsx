import { HeroSection } from "@/components/hero-section";
import { PopularDestinations } from "@/components/popular-destinations";
import { BestDealHotels } from "@/components/best-deal-hotels";
import { PhotoGallery } from "@/components/photo-gallery";
import { FeaturedHotels } from "@/components/featured-hotels";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      <PopularDestinations />
      <BestDealHotels />
      <PhotoGallery />
      <FeaturedHotels />
    </div>
  );
}
