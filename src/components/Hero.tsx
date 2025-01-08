import { useState, useEffect } from "react";
import { Navigation } from "./hero/Navigation";
import { HeroContent } from "./hero/HeroContent";
import { BackgroundImage } from "./hero/BackgroundImage";

export const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    console.log("Attempting to scroll to section:", id);
    const element = document.getElementById(id);
    if (element) {
      console.log("Element found, scrolling to:", id);
      const yOffset = -100; // Offset to account for fixed header
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setIsMenuOpen(false);
    } else {
      console.warn(`Element with id ${id} not found`);
    }
  };

  const handleShopClick = () => {
    window.open('https://www.mckieresmusic.com/', '_blank');
  };

  // Add effect to ensure newsletter section exists and log its presence
  useEffect(() => {
    const newsletterSection = document.getElementById('newsletter');
    if (newsletterSection) {
      console.log('Newsletter section found in DOM');
    } else {
      console.error('Newsletter section not found in DOM');
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