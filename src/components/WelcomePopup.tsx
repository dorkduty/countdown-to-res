import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { MusicSubscription } from "./subscription/MusicSubscription";
import { MovieSubscription } from "./subscription/MovieSubscription";

export const WelcomePopup = () => {
  const [open, setOpen] = useState(false);
  const [musicEmail, setMusicEmail] = useState("");
  const [movieEmail, setMovieEmail] = useState("");
  const [pageLoaded, setPageLoaded] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    setPageLoaded(true);
  }, []);

  useEffect(() => {
    if (pageLoaded) {
      const timer = setTimeout(() => {
        setOpen(true);
      }, isMobile ? 5000 : 0);

      return () => clearTimeout(timer);
    }
  }, [isMobile, pageLoaded]);

  const handleSubscribe = async (email: string, type: 'music' | 'movie') => {
    try {
      setIsSubmitting(true);
      console.log(`Subscribing ${type} email:`, email);
      
      const table = type === 'music' ? 'music_downloads' : 'movie_tickets';
      const { error } = await supabase
        .from(table)
        .insert([{ email }]);

      if (error) throw error;

      toast.success(`Thanks for subscribing! Your free ${type === 'music' ? 'music download link' : 'movie ticket'} will be sent shortly.`);
      if (type === 'music') {
        setMusicEmail("");
      } else {
        setMovieEmail("");
      }
      setOpen(false);
    } catch (error) {
      console.error('Error saving subscription:', error);
      toast.error("There was an error saving your subscription. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleMusicSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSubscribe(musicEmail, 'music');
  };

  const handleMovieSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSubscribe(movieEmail, 'movie');
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-2xl p-0 overflow-auto border-0 max-h-[90vh] md:max-h-[95vh] w-[min(350px,100%-32px)] md:w-auto">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2"
        >
          <MusicSubscription
            email={musicEmail}
            setEmail={setMusicEmail}
            onSubmit={handleMusicSubmit}
            isSubmitting={isSubmitting}
          />
          <MovieSubscription
            email={movieEmail}
            setEmail={setMovieEmail}
            onSubmit={handleMovieSubmit}
            isSubmitting={isSubmitting}
          />
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};