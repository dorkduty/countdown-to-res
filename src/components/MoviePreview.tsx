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
            <div className="w-full h-full rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
                alt="Life of Mike Movie Poster"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        <CastSection />
      </div>
    </section>
  );
};