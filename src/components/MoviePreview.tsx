import { motion } from "framer-motion";
import { MovieInfo } from "./movie/MovieInfo";
import { CastSection } from "./movie/CastSection";

export const MoviePreview = () => {
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
              className="space-y-2"
            >
              <div className="aspect-video bg-black/40 rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/983dbb92-8396-4656-8439-bc781fbb807f.png"
                  alt="Life of Mike Movie Poster"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm text-gray-400 italic text-center">Featured song "All I Can" by RES</p>
            </motion.div>
          </div>
          <CastSection />
        </div>
      </div>
    </section>
  );
};