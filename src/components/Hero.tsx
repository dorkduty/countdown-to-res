import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const Hero = () => {
  console.log("Hero component rendered"); // Adding console log to track component rendering

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Image Background */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1467810563316-b5476525c0f9"
          alt="New Year's fireworks celebration"
          className="absolute top-0 left-0 min-w-full min-h-full w-auto h-auto object-cover"
          style={{ zIndex: 0 }}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black opacity-40" style={{ zIndex: 1 }}></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 text-white text-center relative z-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-bold mb-6"
        >
          (RES)ET with RES
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-2xl md:text-3xl mb-8"
        >
          Join us for an unforgettable New Year's Eve celebration as RES takes the stage for a spectacular performance to welcome 2024
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