import { motion } from "framer-motion";

export const MovieInfo = () => {
  return (
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
        <a 
          href="https://www.imdb.com/title/tt31850564" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block hover:opacity-80 transition-opacity"
        >
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg"
            alt="IMDB"
            className="h-8 w-auto"
          />
        </a>
        <span className="border border-gray-500 px-2 py-1 rounded">NR</span>
        <span>Summer 2025</span>
      </div>
      <p className="text-lg text-gray-300">
        A groundbreaking film starring RES, coming to theaters Summer 2025.
        Follow the extraordinary journey of Mike Thompson, a music producer
        who changed the industry forever.
      </p>
      <div className="space-y-1">
        <p className="text-sm uppercase tracking-wider text-gray-400">Director</p>
        <p className="text-lg font-semibold text-gray-200">Derick Halliman</p>
      </div>
    </motion.div>
  );
};