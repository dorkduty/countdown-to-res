import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="min-h-screen hero-gradient flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-4 py-20 text-white text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-bold mb-6"
        >
          RES
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-2xl md:text-3xl mb-8"
        >
          New Year's Eve 2024
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-100">
            Get Tickets
          </Button>
        </motion.div>
      </div>
    </section>
  );
};