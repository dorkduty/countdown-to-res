import { Hero } from "@/components/Hero";
import { MoviePreview } from "@/components/MoviePreview";
import { Newsletter } from "@/components/Newsletter";
import { Bio } from "@/components/Bio";
import { SpotifyPlayer } from "@/components/SpotifyPlayer";
import { PeachDrop } from "@/components/PeachDrop";
import { Footer } from "@/components/Footer";
import { FloatingBar } from "@/components/FloatingBar";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <PeachDrop />
      <Bio />
      <SpotifyPlayer />
      <MoviePreview />
      <Newsletter />
      <Footer />
      <FloatingBar />
    </main>
  );
};

export default Index;