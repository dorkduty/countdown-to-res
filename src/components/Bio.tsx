import { motion } from "framer-motion";

export const Bio = () => {
  console.log("Bio component rendered");

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gradient">Meet RES</h2>
          
          <div className="space-y-6 text-lg text-gray-700">
            <p>
              Res is a genre-defying artist and Philadelphia native who has captivated audiences 
              for over two decades with her unique blend of soul, rock, and alternative R&B. 
              Her groundbreaking debut album, How I Do, celebrates its 20th anniversary, marking 
              a milestone in her career. The album features timeless tracks like "Golden Boys" 
              and "They-Say Vision," which continue to resonate with listeners worldwide.
            </p>
            
            <p>
              Known for her powerful vocals, introspective songwriting, and dynamic stage presence, 
              Res has consistently pushed musical boundaries. Beyond her solo work, she has 
              collaborated with prominent artists and brought her versatility to DJing and live 
              performances. Res remains a beloved figure in the music scene, seamlessly blending 
              her Philly roots with a modern artistic vision.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};