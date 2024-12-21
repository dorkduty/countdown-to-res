import { motion } from "framer-motion";

export const Bio = () => {
  console.log("Bio component rendered");

  return (
    <section id="about" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src="https://3a5ae66a6e58ba5f79caf8a72e703216.cdn.bubble.io/f1734644539639x543230705679802240/2A229279-9A7E-4F8D-B965-3C1F51B218A1_1_201_a.jpeg?_gl=1*1y9blj*_gcl_au*NzIzNTgyNTUzLjE3MzQ2NDI2NzQ.*_ga*MTY2MzU2NjI1LjE3MzQ0ODQ1MDI.*_ga_BFPVR2DEE2*MTczNDYzODEwNC4zLjEuMTczNDY0NDUyOC41Ny4wLjA."
                alt="RES"
                className="rounded-lg shadow-2xl w-full"
              />
            </motion.div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                Meet RES
              </h2>
              
              <div className="space-y-6 text-lg text-gray-300">
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
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
