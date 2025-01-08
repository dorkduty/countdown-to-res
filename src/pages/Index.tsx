import { Hero } from "@/components/Hero";
import { MoviePreview } from "@/components/MoviePreview";
import { Newsletter } from "@/components/Newsletter";
import { Bio } from "@/components/Bio";
import { SpotifyPlayer } from "@/components/SpotifyPlayer";
import { Footer } from "@/components/Footer";
import { FloatingBar } from "@/components/FloatingBar";
import { WelcomePopup } from "@/components/WelcomePopup";
import { NewMerchButton } from "@/components/NewMerchButton";
import { useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) {
      window.scrollTo(0, 75);
    }
  }, [isMobile]);

  return (
    <main className="min-h-screen">
      <WelcomePopup />
      <NewMerchButton />
      <Hero />
      <Bio />
      <SpotifyPlayer />
      <MoviePreview />
      <Newsletter />
      <Footer />
      {/* Floating bar hidden but kept in code for future use */}
      {/* <FloatingBar /> */}
    </main>
  );
};

export default Index;