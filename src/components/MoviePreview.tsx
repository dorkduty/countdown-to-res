import { motion } from "framer-motion";
import { MovieInfo } from "./movie/MovieInfo";
import { CastSection } from "./movie/CastSection";
import { Button } from "./ui/button";

export const MoviePreview = () => {
  const handleGetTickets = () => {
    window.open('https://mountainparkmedia.com/life-of-mike?ticket=free', '_blank');
  };

  return (
    <section id="movie-preview" className="py-20 bg-gradient-to-b from-black to-purple-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <MovieInfo />
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col"
            >
              <div className="aspect-video relative">
                <iframe 
                  src="https://player.vimeo.com/video/1041241030?h=1a111058d8&badge=0&autopause=0&player_id=0&app_id=58479" 
                  style={{position:'absolute', top:0, left:0, width:'100%', height:'100%'}} 
                  frameBorder="0" 
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                  title="Life Of Mike | Official Trailer | Summer 2025"
                />
              </div>
              <p className="text-sm text-gray-400 italic text-center">Featured song "All I Can" by RES</p>
            </motion.div>
          </div>
          <CastSection />
          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8"
              onClick={handleGetTickets}
            >
              Get Your Free Ticket
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};