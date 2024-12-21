import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { CalendarDays, Clock, MapPin } from "lucide-react";

export const PeachDrop = () => {
  console.log("PeachDrop component rendered");

  return (
    <section id="peach-drop" className="py-20 bg-gradient-to-br from-purple-900 via-black to-black text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            New Year's Eve Peach Festival
          </h2>

          <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 space-y-6">
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-8">
              <div className="flex items-center gap-2">
                <CalendarDays className="w-5 h-5 text-purple-400" />
                <span>December 31, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-pink-400" />
                <span>9:00 PM - 3:00 AM</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-red-400" />
                <span>Underground Atlanta</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="space-y-4 text-lg text-gray-300">
                <p>
                  Join us for Atlanta's iconic New Year's Eve celebration! Mayor Andre Dickens 
                  presents the Southeast's most beloved tradition featuring an incredible lineup:
                </p>
                
                <ul className="list-none space-y-2">
                  <li className="font-semibold text-purple-400">• Big Boi</li>
                  <li className="font-semibold text-pink-400">• Neon Trees</li>
                  <li className="font-semibold text-red-400">• RES</li>
                </ul>

                <p>
                  Be part of the tens of thousands gathering to watch the historic peach drop 
                  at midnight and ring in 2025 in true ATL style!
                </p>
              </div>

              <div className="relative">
                <img 
                  src="https://3a5ae66a6e58ba5f79caf8a72e703216.cdn.bubble.io/f1734640445773x591961549519086640/BIGBOI-FRANNIEANDALI-COLOR-2018-1605-R.jpg?_gl=1*vbof5d*_gcl_au*MTUwODk1MDg1My4xNzM0NDg0NTAx*_ga*MTY2MzU2NjI1LjE3MzQ0ODQ1MDI.*_ga_BFPVR2DEE2*MTczNDYzODEwNC4zLjEuMTczNDY0MDQzOC41OC4wLjA."
                  alt="Big Boi"
                  className="rounded-lg shadow-xl w-full object-cover aspect-[4/3]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
              </div>
            </div>

            <div className="flex justify-center mt-8">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                Get Tickets
              </Button>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};
