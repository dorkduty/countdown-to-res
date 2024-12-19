import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const Hero = () => {
  console.log("Hero component rendered");

  const scrollToPeachDrop = () => {
    const element = document.getElementById('peach-drop');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

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
      <div className="container mx-auto px-8 py-20 text-white relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-left">
            (RES)ET with RES
          </h1>
          <p className="text-2xl md:text-3xl mb-8 text-gray-200 text-left md:max-w-[50%] max-w-[85%]">
            Join acclaimed singer RES for a show-stopping performance to ring in 2025, and get an exclusive first look at Life of Mike, her highly anticipated feature film debut.
          </p>
          <div className="flex justify-start">
            <Button 
              size="lg" 
              className="bg-purple-600 hover:bg-purple-700 text-white px-8"
              onClick={scrollToPeachDrop}
            >
              Event Details
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};