import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const WelcomePopup = () => {
  const [open, setOpen] = useState(true);
  const [musicEmail, setMusicEmail] = useState("");
  const [movieEmail, setMovieEmail] = useState("");

  const handleMusicSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Music email submitted:", musicEmail);
    // Add email submission logic here
  };

  const handleMovieSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Movie email submitted:", movieEmail);
    // Add email submission logic here
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-2xl p-0 overflow-hidden rounded-none border-0">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2"
        >
          {/* Left Column - Music */}
          <div className="p-6 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400">
            <div className="flex flex-col items-center space-y-4">
              <img
                src="/lovable-uploads/d84f923a-ca41-49c5-8f7d-78afa0bd5312.png"
                alt="RES Album Cover"
                className="w-48 h-48 object-cover rounded-lg shadow-lg"
              />
              <div className="space-y-2 text-center">
                <h3 className="text-xl font-bold text-white">
                  How I Do (RESET)
                </h3>
              </div>
              <form onSubmit={handleMusicSubmit} className="w-full space-y-3">
                <Input
                  type="email"
                  placeholder="Enter email for free music download"
                  value={musicEmail}
                  onChange={(e) => setMusicEmail(e.target.value)}
                  className="bg-white/90 text-sm"
                  required
                />
                <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-sm">
                  Download
                </Button>
              </form>
            </div>
          </div>

          {/* Right Column - Movie */}
          <div className="p-6 bg-primary">
            <div className="flex flex-col items-center space-y-4">
              <img
                src="/lovable-uploads/e814f938-0883-488c-8a78-698a8364ffeb.png"
                alt="Life of Mike Movie Poster"
                className="w-48 h-48 object-cover rounded-lg shadow-lg"
              />
              <div className="space-y-2 text-center">
                <h3 className="text-xl font-bold text-white">
                  "Life of Mike" starring RES
                </h3>
              </div>
              <form onSubmit={handleMovieSubmit} className="w-full space-y-3">
                <Input
                  type="email"
                  placeholder="Enter your email for free movie ticket"
                  value={movieEmail}
                  onChange={(e) => setMovieEmail(e.target.value)}
                  className="bg-white/90 text-sm"
                  required
                />
                <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90 text-sm">
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};