import { Hero } from "@/components/Hero";
import { MoviePreview } from "@/components/MoviePreview";
import { Newsletter } from "@/components/Newsletter";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <MoviePreview />
      <Newsletter />
    </main>
  );
};

export default Index;