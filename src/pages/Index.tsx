import { Hero } from "@/components/Hero";
import { MoviePreview } from "@/components/MoviePreview";
import { Newsletter } from "@/components/Newsletter";
import { Bio } from "@/components/Bio";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Bio />
      <MoviePreview />
      <Newsletter />
    </main>
  );
};

export default Index;