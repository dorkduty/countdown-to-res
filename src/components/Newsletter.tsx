import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const Newsletter = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleClick = async () => {
    setIsSubmitting(true);
    try {
      window.open('https://mountainparkmedia.com/life-of-mike?ticket=free', '_blank');
    } catch (error) {
      console.error('Error:', error);
      toast.error("There was an error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
            onClick={handleClick}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Loading..." : "Get Your Free Ticket"}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
