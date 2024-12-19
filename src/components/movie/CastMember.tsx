import { motion } from "framer-motion";

interface CastMemberProps {
  name: string;
  role: string;
  image: string;
  index: number;
}

export const CastMember = ({ name, role, image, index }: CastMemberProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="text-center"
    >
      <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-4 rounded-full overflow-hidden shadow-xl">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <h4 className="text-lg md:text-xl font-bold text-white mb-2">{name}</h4>
      <p className="text-sm md:text-base text-gray-400">{role}</p>
    </motion.div>
  );
};