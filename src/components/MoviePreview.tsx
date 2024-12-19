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
            <div className="flex items-center gap-4 text-sm">
              <span className="border border-gray-500 px-2 py-1 rounded">NR</span>
              <span>Summer 2025</span>
            </div>
            <p className="text-lg text-gray-300">
              A groundbreaking film starring RES, coming to theaters Summer 2025.
              Follow the extraordinary journey of Mike Thompson, a music producer
              who changed the industry forever.
            </p>
            <p className="text-lg text-gray-300">
              Directed by Derick Halliman
            </p>
            <a 
              href="https://www.imdb.com/title/tt31850564" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block hover:opacity-80 transition-opacity"
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg"
                alt="IMDB"
                className="h-12 w-auto"
              />
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

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            Starring
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "RES",
                role: "Mike Thompson",
                image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb"
              },
              {
                name: "Sarah Chen",
                role: "Lisa Reynolds",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
              },
              {
                name: "Marcus Wright",
                role: "David Carter",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
              }
            ].map((actor, index) => (
              <motion.div
                key={actor.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden shadow-xl">
                  <img
                    src={actor.image}
                    alt={actor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{actor.name}</h4>
                <p className="text-gray-400">{actor.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};