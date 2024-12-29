import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

export const FloatingBar = () => {
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
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-purple-600/95 to-pink-600/95 backdrop-blur-sm border-t border-white/10 p-4 z-50">
      <div className="container mx-auto flex items-center justify-between gap-4 flex-wrap md:flex-nowrap">
        <div className="flex items-center justify-center w-full md:w-auto">
          <img 
            src="/lovable-uploads/983dbb92-8396-4656-8439-bc781fbb807f.png" 
            alt="LIFE OF MIKE" 
            className="h-6 md:h-8 w-auto object-contain"
          />
        </div>
        
        <div className="hidden md:block flex-1 text-white text-sm md:text-base md:mx-4">
          Get the latest updates from RES
        </div>
        
        <form onSubmit={handleSubmit} className="flex gap-2 w-full md:w-auto md:flex-1">
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
      </div>
    </div>
  );
};