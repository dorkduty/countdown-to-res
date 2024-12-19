import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const castMembers = [
  {
    name: "Roberto Sanchez",
    role: "Detective Martinez",
    image: "/lovable-uploads/41a868d7-dd88-4d41-9929-f49e032ce64d.png"
  },
  {
    name: "Jeff Cole",
    role: "Detective Johnson",
    image: "/lovable-uploads/e581e58d-a588-4b85-bec0-a328494abd3b.png"
  },
  {
    name: "Njema Williams",
    role: "Officer Thompson",
    image: "/lovable-uploads/3750ced3-77ee-4c9e-a29a-7789f183f03f.png"
  },
  {
    name: "Toni Belafonte",
    role: "Sarah",
    image: "/lovable-uploads/3df10637-d724-4fcb-a53a-325fad440721.png"
  },
  {
    name: "Miko DeFoor",
    role: "Mike",
    image: "/lovable-uploads/dfb2f6a7-28f0-49d2-8fda-6a6cde89c9a0.png"
  },
  {
    name: "Jason Gilmore",
    role: "Detective Williams",
    image: "/lovable-uploads/8fe5b522-da89-45f5-b0ca-d23472772227.png"
  },
  {
    name: "Charlotte Haynes Hazzard",
    role: "Detective Morris",
    image: "/lovable-uploads/3f337eb6-0073-4610-aeec-f5e043f10453.png"
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
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-[90vw] mx-auto"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {castMembers.map((actor, index) => (
            <CarouselItem key={actor.name} className="pl-2 md:pl-4 basis-[180px] md:basis-[220px]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-4 rounded-full overflow-hidden shadow-xl">
                  <img
                    src={actor.image}
                    alt={actor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-lg md:text-xl font-bold text-white mb-2">{actor.name}</h4>
                <p className="text-sm md:text-base text-gray-400">{actor.role}</p>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex h-10 w-10 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 border-none text-white hover:opacity-80 transition-opacity" />
        <CarouselNext className="hidden md:flex h-10 w-10 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 border-none text-white hover:opacity-80 transition-opacity" />
      </Carousel>
    </motion.div>
  );
};
