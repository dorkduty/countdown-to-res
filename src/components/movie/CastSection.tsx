import { motion } from "framer-motion";

const castMembers = [
  {
    name: "Roberto Sanchez",
    role: "Detective Martinez",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces"
  },
  {
    name: "Jeff Cole",
    role: "Detective Johnson",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=faces"
  },
  {
    name: "Njema Williams",
    role: "Officer Thompson",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=faces"
  },
  {
    name: "Toni Belafonte",
    role: "Sarah",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=faces"
  },
  {
    name: "Miko DeFoor",
    role: "Mike",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces"
  },
  {
    name: "Jason Gilmore",
    role: "Detective Williams",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=faces"
  },
  {
    name: "Charlotte Haynes Hazzard",
    role: "Detective Morris",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=faces"
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