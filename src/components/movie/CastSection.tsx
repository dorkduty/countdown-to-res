import { motion } from "framer-motion";

const castMembers = [
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {castMembers.map((actor, index) => (
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
  );
};