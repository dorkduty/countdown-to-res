import { motion } from "framer-motion";

const castMembers = [
  {
    name: "Roberto Sanchez",
    role: "Detective Martinez",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
  },
  {
    name: "Jeff Cole",
    role: "Detective Johnson",
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b"
  },
  {
    name: "Njema Williams",
    role: "Officer Thompson",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901"
  },
  {
    name: "Toni Belafonte",
    role: "Sarah",
    image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1"
  },
  {
    name: "Miko DeFoor",
    role: "Mike",
    image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f"
  },
  {
    name: "Jason Gilmore",
    role: "Detective Williams",
    image: "https://images.unsplash.com/photo-1438565434616-3ef039228b15"
  },
  {
    name: "Charlotte Haynes Hazzard",
    role: "Detective Morris",
    image: "https://images.unsplash.com/photo-1501286353178-1ec881214838"
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