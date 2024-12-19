import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const MoviePreview = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-purple-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              Life of Mike
            </h2>
            <p className="text-lg text-gray-300">
              A groundbreaking film starring RES, coming to theaters Spring 2024.
              Follow the extraordinary journey of Mike Thompson, a music producer
              who changed the industry forever.
            </p>
            <a 
              href="https://www.imdb.com/title/tt31850564" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button 
                variant="default"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                IMDB
              </Button>
            </a>
          </motion.div>
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
      </div>
    </section>
  );
};