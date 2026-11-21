import AnnouncementBar from "@/components/layout/AnnouncementBar";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import BrandStory from "@/components/home/BrandStory";
import CollectionHighlights from "@/components/home/CollectionHighlights";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import HeroSection from "@/components/home/HeroSection";

export default function HomePage() {
  return (
    <>
      <div className="site-chrome" id="top">
        <AnnouncementBar />
        <SiteHeader />
      </div>
      <main id="conteudo">
        <HeroSection />
        <CollectionHighlights />
        <FeaturedProducts />
        <BrandStory />
      </main>
      <SiteFooter />
    </>
  );
}
