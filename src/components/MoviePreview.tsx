import { motion } from "framer-motion";

export const MoviePreview = () => {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            Life of Mike
          </h2>
          
          <div className="aspect-video w-full max-w-4xl mx-auto mb-2">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/IwXamRdHSog?si=xeyKzUnqM41CWyVe"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full rounded-lg"
            />
          </div>
          <p className="text-center text-gray-400 text-sm mb-8">Featured song "All I Can" by RES</p>
        </motion.div>
      </div>
    </section>
  );
};
