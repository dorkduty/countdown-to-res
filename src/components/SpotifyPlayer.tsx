import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Download } from "lucide-react";

export const SpotifyPlayer = () => {
  return (
    <section id="spotify-player" className="py-12 bg-gradient-to-b from-purple-900 to-black text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            Listen to RES
          </h2>
          
          <div className="aspect-video">
            <iframe
              style={{ borderRadius: '12px' }}
              src="https://open.spotify.com/embed/artist/56YiNz2C704YPpRtPvMBg7?utm_source=generator"
              width="100%"
              height="352"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>

          <div className="flex justify-center mt-[15px]">
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8"
              onClick={() => window.open('https://www.dropbox.com/scl/fi/ouz4t72qsvwm8099zs3n6/Reset-by-Res.zip?rlkey=059mtezobcne4oxv1n2me078z&st=e9oad4a4&dl=0', '_blank')}
            >
              <Download className="mr-2 h-4 w-4" />
              Download
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};