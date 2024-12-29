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
      <DialogContent className="max-w-4xl p-0 overflow-hidden">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2"
        >
          {/* Left Column - Music */}
          <div className="p-8 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400">
            <div className="flex flex-col items-center space-y-6">
              <img
                src="/lovable-uploads/d84f923a-ca41-49c5-8f7d-78afa0bd5312.png"
                alt="RES Album Cover"
                className="w-64 h-64 object-cover rounded-lg shadow-lg"
              />
              <h3 className="text-2xl font-bold text-white text-center">
                Enter your email for free music download
              </h3>
              <form onSubmit={handleMusicSubmit} className="w-full space-y-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={musicEmail}
                  onChange={(e) => setMusicEmail(e.target.value)}
                  className="bg-white/90"
                  required
                />
                <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600">
                  Download
                </Button>
              </form>
            </div>
          </div>

          {/* Right Column - Movie */}
          <div className="p-8 bg-black">
            <div className="flex flex-col items-center space-y-6">
              <div className="w-64 h-64 bg-gray-800 rounded-lg shadow-lg flex items-center justify-center">
                <span className="text-gray-500 text-lg">Movie Poster Coming Soon</span>
              </div>
              <h3 className="text-2xl font-bold text-white text-center">
                Life of Mike starring RES coming summer 2025
              </h3>
              <p className="text-white text-center">
                Enter your email to claim a free movie ticket
              </p>
              <form onSubmit={handleMovieSubmit} className="w-full space-y-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={movieEmail}
                  onChange={(e) => setMovieEmail(e.target.value)}
                  className="bg-white/90"
                  required
                />
                <Button type="submit" className="w-full">
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