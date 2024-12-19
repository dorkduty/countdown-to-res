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
          
          <div className="space-y-6">
            {/* They Say Vision */}
            <div className="w-full">
              <iframe
                src="https://open.spotify.com/embed/track/2Gy7qnDwt8Z3MNxqat4CsK"
                width="100%"
                height="152"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="rounded-lg"
              ></iframe>
            </div>
            
            {/* Ice King */}
            <div className="w-full">
              <iframe
                src="https://open.spotify.com/embed/track/0kYUrMBQDWQw2dDhZjHu3q"
                width="100%"
                height="152"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="rounded-lg"
              ></iframe>
            </div>
            
            {/* Golden Boys */}
            <div className="w-full">
              <iframe
                src="https://open.spotify.com/embed/track/6rqhFgbbKwnb9MLmUQDhG6"
                width="100%"
                height="152"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};