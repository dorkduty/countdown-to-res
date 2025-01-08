import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('subscribers')
        .insert([
          { 
            email,
            subscription_type: 'movie',
            created_at: new Date().toISOString()
          }
        ]);

      if (error) throw error;

      toast.success("Thanks for subscribing!");
      setEmail("");
    } catch (error) {
      console.error('Error saving subscription:', error);
      toast.error("There was an error saving your subscription. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="newsletter" 
      className="py-32 relative" // Changed from py-20 to py-32 for more vertical padding
      style={{
        backgroundImage: "url('https://3a5ae66a6e58ba5f79caf8a72e703216.cdn.bubble.io/f1736366248178x529973525327565900/RES-peach-drop')",
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-black/40" /> {/* Reduced opacity from 70% to 40% */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            Sign Up
          </h2>
          <p className="text-lg mb-8 text-gray-300 max-w-2xl mx-auto">
            Follow and subscribe to be one of the first to know the latest news on RES.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isSubmitting}
              className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-gray-300"
            />
            <Button 
              type="submit" 
              className="bg-white text-purple-600 hover:bg-white/90 whitespace-nowrap"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};