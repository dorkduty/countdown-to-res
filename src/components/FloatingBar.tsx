import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";

export const FloatingBar = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thanks for subscribing!");
    setEmail("");
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-purple-600/95 to-pink-600/95 backdrop-blur-sm border-t border-white/10 p-4 z-50">
      <div className="container mx-auto flex items-center justify-between gap-4 flex-wrap md:flex-nowrap">
        <div className="flex items-center gap-4">
          <span className="text-white font-semibold">Starring RES</span>
        </div>
        
        <div className="flex-1 text-white text-sm md:text-base md:mx-4">
          Get the latest updates from RES
        </div>
        
        <form onSubmit={handleSubmit} className="flex gap-2 flex-1">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-gray-300"
          />
          <Button 
            type="submit" 
            className="bg-white text-purple-600 hover:bg-white/90"
          >
            Subscribe
          </Button>
        </form>
      </div>
    </div>
  );
};