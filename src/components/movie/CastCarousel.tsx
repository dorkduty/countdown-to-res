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
    <div className="w-full max-w-[90vw] mx-auto">
      <div className="flex justify-end gap-2 mb-4 md:hidden">
        <CarouselPrevious className="h-8 w-8 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 border-none text-white hover:opacity-80 transition-opacity relative static translate-y-0" />
        <CarouselNext className="h-8 w-8 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 border-none text-white hover:opacity-80 transition-opacity relative static translate-y-0" />
      </div>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {castMembers.map((actor, index) => (
            <CarouselItem key={actor.name} className="pl-2 md:pl-4 basis-[180px] md:basis-[220px]">
              <CastMember {...actor} index={index} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden md:block">
          <CarouselPrevious className="h-10 w-10 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 border-none text-white hover:opacity-80 transition-opacity" />
          <CarouselNext className="h-10 w-10 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 border-none text-white hover:opacity-80 transition-opacity" />
        </div>
      </Carousel>
    </div>
  );
};