import { Hero } from "@/components/Hero";
import { MoviePreview } from "@/components/MoviePreview";
import { Bio } from "@/components/Bio";
import { SpotifyPlayer } from "@/components/SpotifyPlayer";
import { PeachDrop } from "@/components/PeachDrop";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <PeachDrop />
      <Bio />
      <SpotifyPlayer />
      <MoviePreview />
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 text-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8"
            onClick={() => window.open('https://mountainparkmedia2.bubbleapps.io/version-test/life-of-mike?ticket=free', '_blank')}
          >
            Get Your Free Ticket
          </Button>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Index;