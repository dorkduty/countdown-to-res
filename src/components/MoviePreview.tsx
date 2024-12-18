import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const MoviePreview = () => {
  return (
    <section className="py-20 bg-[#1A1F2C] text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Life of Mike</h2>
            <p className="text-lg mb-6 text-gray-300">
              A groundbreaking film starring RES, coming to theaters Spring 2024.
              Follow the extraordinary journey of Mike Thompson, a music producer
              who changed the industry forever.
            </p>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
              Watch Trailer
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="aspect-[2/3] bg-gradient-to-br from-purple-600 to-pink-500 rounded-lg shadow-2xl"
          >
            {/* Movie Poster Placeholder */}
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