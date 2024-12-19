import { motion } from "framer-motion";

const castMembers = [
  {
    name: "Miko DeFoor",
    role: "Mike Smith",
    image: "https://m.media-amazon.com/images/M/MV5BNzg1MzM4OTgtZTU5Mi00ZjU4LWI5ZjQtNmY4ZTJlNzk5ZTBkXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg"
  },
  {
    name: "Shareese Ballard",
    role: "Celeste Smith",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
  },
  {
    name: "Derick Halliman",
    role: "Darius",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
  },
  {
    name: "Tiffany Denise",
    role: "Tiffany",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb"
  },
  {
    name: "Tiffany Hobbs",
    role: "Tiffany",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
  },
  {
    name: "Tiffany Denise Hobbs",
    role: "Tiffany",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2"
  },
  {
    name: "Tiffany D. Hobbs",
    role: "Tiffany",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce"
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