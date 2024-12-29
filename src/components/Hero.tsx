import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { useState } from "react";

export const Hero = () => {
  console.log("Hero component rendered");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <section className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden">
      {/* Navigation - hidden for now */}
      <nav className="w-full fixed top-0 z-30 pt-6 hidden">
        <div className="max-w-screen-xl mx-auto px-4">
          {/* Mobile Menu Button */}
          <div className="md:hidden flex justify-end py-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-purple-400 transition-colors"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
          
          {/* Mobile Menu */}
          <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden py-4`}>
            <div className="flex flex-col space-y-4">
              {[
                { text: 'ABOUT', id: 'about' },
                { text: 'NYE', id: 'peach-drop' },
                { text: 'MUSIC', id: 'spotify-player' },
                { text: 'FILM', id: 'movie-preview' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-white hover:text-purple-400 transition-colors text-left tracking-widest"
                >
                  {item.text}
                </button>
              ))}
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex justify-center py-4">
            <div className="flex space-x-12">
              {[
                { text: 'ABOUT', id: 'about' },
                { text: 'NYE', id: 'peach-drop' },
                { text: 'MUSIC', id: 'spotify-player' },
                { text: 'FILM', id: 'movie-preview' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-white hover:text-purple-400 transition-colors text-lg tracking-[0.3em]"
                >
                  {item.text}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Image Background */}
      <div className="absolute inset-0 w-full h-full">
        <picture>
          <source
            media="(min-width: 768px)"
            srcSet="/lovable-uploads/cc06fe20-a9e2-4d30-bbe4-91b50f03f583.png"
          />
          <img
            src="/lovable-uploads/af5a2352-690a-4a57-9036-e34c78f1159e.png"
            alt="RES artist promotional image"
            className="absolute top-0 left-0 min-w-full min-h-full w-auto h-auto object-cover md:object-center object-[40%] sm:object-[40%]"
            style={{ zIndex: 0 }}
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40" style={{ zIndex: 1 }}></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-8 py-8 md:py-20 text-white relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="text-2xl sm:text-4xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-left">
            (RES)ET with RES
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 text-left md:max-w-[50%] max-w-[85%]">
            Ring in 2025 with acclaimed singer RES at the Atlanta Peach Drop, and get an exclusive first look at "Life of Mike," her feature film debut!
          </p>
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap gap-4">
              <Button
                variant="default"
                onClick={() => scrollToSection('spotify-player')}
                className="bg-pink-400 hover:bg-pink-500"
              >
                "How I Do (Reset) Album"
              </Button>
              <Button
                variant="default"
                onClick={() => scrollToSection('movie-preview')}
                className="bg-red-400 hover:bg-red-500"
              >
                "Life of Mike" Trailer
              </Button>
              <Button
                variant="default"
                onClick={() => scrollToSection('peach-drop')}
                className="bg-purple-400 hover:bg-purple-500"
              >
                ATL Peach Drop
              </Button>
            </div>
            <Button 
              size="lg" 
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 w-fit hidden"
              onClick={() => scrollToSection('peach-drop')}
            >
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
