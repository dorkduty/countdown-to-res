import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const Hero = () => {
  console.log("Hero component rendered");

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Image Background */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/lovable-uploads/cc06fe20-a9e2-4d30-bbe4-91b50f03f583.png"
          alt="RES artist promotional image"
          className="absolute top-0 left-0 min-w-full min-h-full w-auto h-auto object-cover"
          style={{ zIndex: 0 }}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40" style={{ zIndex: 1 }}></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 text-white text-center relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            (RES)ET with RES
          </h1>
          <p className="text-2xl md:text-3xl mb-8 text-gray-200">
            Join us for an unforgettable New Year's Eve celebration as RES takes the stage 
            for a spectacular performance to welcome 2024
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8">
              Get Tickets
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};