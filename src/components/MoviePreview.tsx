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
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/IwXamRdHSog?si=xeyKzUnqM41CWyVe?rel=0" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
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
