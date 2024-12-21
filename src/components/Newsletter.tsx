import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const Newsletter = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            Claim Free Movie Tickets
          </h2>
          <p className="text-lg mb-8 text-gray-300 max-w-2xl mx-auto">
            Be the first to see Life of Mike when it arrives in theaters in 2025.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8"
            onClick={() => window.open('https://mountainparkmedia2.bubbleapps.io/version-test/life-of-mike?ticket=free', '_blank')}
          >
            Get Your Free Ticket
          </Button>
        </motion.div>
      </div>
    </section>
  );
};