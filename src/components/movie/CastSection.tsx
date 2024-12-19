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
