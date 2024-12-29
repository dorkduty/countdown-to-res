import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CastMember } from "./CastMember";
import { castMembers } from "@/data/castMembers";

export const CastCarousel = () => {
  return (
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
            <CastMember {...actor} index={index} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="h-8 w-8 md:h-10 md:w-10 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 border-none text-white hover:opacity-80 transition-opacity" />
      <CarouselNext className="h-8 w-8 md:h-10 md:w-10 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 border-none text-white hover:opacity-80 transition-opacity" />
    </Carousel>
  );
};