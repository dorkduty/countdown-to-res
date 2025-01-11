import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Download } from "lucide-react";

export const SpotifyPlayer = () => {
  return (
    <section id="spotify-player" className="py-6 bg-gradient-to-b from-purple-900 to-black text-white">
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
              src="https://open.spotify.com/embed/album/7rkWZxLgc5zy7sIr6VAwOj?utm_source=generator"
              width="100%"
              height="450"
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
              onClick={() => window.open('https://audiomack.com/res-2/album/reset#google_vignette', '_blank')}
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