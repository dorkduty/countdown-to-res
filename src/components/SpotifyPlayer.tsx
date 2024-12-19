import { motion } from "framer-motion";

export const SpotifyPlayer = () => {
  console.log("SpotifyPlayer component rendered");

  return (
    <section className="py-20 bg-black">
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
          
          <div className="w-full">
            <iframe 
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/artist/56YiNz2C704YPpRtPvMBg7?utm_source=generator" 
              width="100%" 
              height="352" 
              frameBorder="0" 
              allowFullScreen 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy"
              className="rounded-lg"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
};