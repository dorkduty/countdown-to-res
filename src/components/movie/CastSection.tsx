import { motion } from "framer-motion";

const castMembers = [
  {
    name: "Roberto Sanchez",
    role: "Detective Martinez",
    image: "https://m.media-amazon.com/images/M/MV5BNzg1MzM4OTgtZTU5Mi00ZjU4LWI5ZjQtNmY4ZTJlNzk5ZTBkXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg"
  },
  {
    name: "Jeff Cole",
    role: "Detective Johnson",
    image: "https://m.media-amazon.com/images/M/MV5BNzg1MzM4OTgtZTU5Mi00ZjU4LWI5ZjQtNmY4ZTJlNzk5ZTBkXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg"
  },
  {
    name: "Njema Williams",
    role: "Officer Thompson",
    image: "https://m.media-amazon.com/images/M/MV5BNzg1MzM4OTgtZTU5Mi00ZjU4LWI5ZjQtNmY4ZTJlNzk5ZTBkXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg"
  },
  {
    name: "Toni Belafonte",
    role: "Sarah",
    image: "https://m.media-amazon.com/images/M/MV5BNzg1MzM4OTgtZTU5Mi00ZjU4LWI5ZjQtNmY4ZTJlNzk5ZTBkXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg"
  },
  {
    name: "Miko DeFoor",
    role: "Mike",
    image: "https://m.media-amazon.com/images/M/MV5BNzg1MzM4OTgtZTU5Mi00ZjU4LWI5ZjQtNmY4ZTJlNzk5ZTBkXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg"
  },
  {
    name: "Jason Gilmore",
    role: "Detective Williams",
    image: "https://m.media-amazon.com/images/M/MV5BNzg1MzM4OTgtZTU5Mi00ZjU4LWI5ZjQtNmY4ZTJlNzk5ZTBkXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg"
  },
  {
    name: "Charlotte Haynes Hazzard",
    role: "Detective Morris",
    image: "https://m.media-amazon.com/images/M/MV5BNzg1MzM4OTgtZTU5Mi00ZjU4LWI5ZjQtNmY4ZTJlNzk5ZTBkXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg"
  }
];

export const CastSection = () => {
  return (
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
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {castMembers.map((actor, index) => (
          <motion.div
            key={actor.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="text-center"
          >
            <div className="relative w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden shadow-xl">
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
  );
};