import { useState, useEffect } from "react";
import { Navigation } from "./hero/Navigation";
import { HeroContent } from "./hero/HeroContent";
import { BackgroundImage } from "./hero/BackgroundImage";

export const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    console.log("Scrolling to section:", id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    } else {
      console.warn(`Element with id ${id} not found`);
    }
  };

  const handleShopClick = () => {
    window.open('https://www.mckieresmusic.com/', '_blank');
  };

  // Add effect to ensure newsletter section exists
  useEffect(() => {
    const newsletterSection = document.getElementById('newsletter');
    if (!newsletterSection) {
      console.error('Newsletter section not found in the DOM');
    }
  }, []);

  return (
    <section className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden">
      <Navigation 
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollToSection={scrollToSection}
        handleShopClick={handleShopClick}
      />
      <BackgroundImage />
      <HeroContent />
    </section>
  );
};