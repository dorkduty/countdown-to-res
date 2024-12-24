import { motion } from "framer-motion";
import { Button } from "./ui/button";

export const Bio = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-purple-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            Meet RES
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300">
                RES, the Philadelphia-born singer-songwriter, burst onto the music scene with her 
                groundbreaking debut album "How I Do" in 2001. Her unique blend of rock, soul, and 
                electronic music, coupled with her distinctive voice, earned her critical acclaim 
                and a dedicated following.
              </p>
              <p className="text-lg text-gray-300">
                Now, RES is expanding her artistic horizons with her feature film debut in "Life of Mike," 
                while continuing to create innovative music that pushes boundaries and defies genre 
                conventions.
              </p>
              <div className="flex justify-center md:justify-start">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                  onClick={() => scrollToSection('spotify-player')}
                >
                  Stream Now
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="/lovable-uploads/d7bd065c-e695-4dcb-a5d4-0810ebac51ac.png"
                alt="RES portrait"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};