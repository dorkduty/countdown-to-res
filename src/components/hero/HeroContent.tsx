import { motion } from "framer-motion";

export const HeroContent = () => {
  return (
    <div className="container mx-auto px-8 py-8 md:py-20 text-white relative z-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl"
      >
        <h1 className="text-xl sm:text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-left uppercase">
          The official RES website
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 text-left md:max-w-[50%] max-w-[66%]">
          Welcome to the official RES website. Today, RES is expanding her artistic horizons with her feature film debut in "Life of Mike," while continuing to create innovative music that pushes boundaries and defies genre conventions.
        </p>
      </motion.div>
    </div>
  );
};