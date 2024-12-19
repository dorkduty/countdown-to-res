import { motion } from "framer-motion";
import { MovieInfo } from "./movie/MovieInfo";
import { CastSection } from "./movie/CastSection";

export const MoviePreview = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-purple-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <MovieInfo />
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="aspect-video rounded-lg overflow-hidden shadow-2xl"
          >
            <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
              <iframe 
                src="https://player.vimeo.com/video/1034563420?h=3f4d4cb099&badge=0&autopause=0&player_id=0&app_id=58479&title=0"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                title="Life of Mike Movie Preview"
              />
            </div>
            <script src="https://player.vimeo.com/api/player.js" async></script>
          </motion.div>
        </div>

        <CastSection />
      </div>
    </section>
  );
};