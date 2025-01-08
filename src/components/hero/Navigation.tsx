import { Menu } from "lucide-react";
import { NavItem } from "./types";

interface NavigationProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  scrollToSection: (id: string) => void;
  handleShopClick: () => void;
}

export const Navigation = ({ isMenuOpen, setIsMenuOpen, scrollToSection, handleShopClick }: NavigationProps) => {
  const navItems: NavItem[] = [
    { text: 'ABOUT', id: 'about' },
    { text: 'MUSIC', id: 'spotify-player' },
    { text: 'FILM', id: 'movie-preview' },
    { text: 'SHOP', action: handleShopClick },
    { text: 'SIGN UP', id: 'newsletter' }
  ];

  return (
    <nav className="w-full fixed top-0 z-30 pt-6">
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
            {navItems.map((item) => (
              <button
                key={item.text}
                onClick={() => item.action ? item.action() : scrollToSection(item.id)}
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
            {navItems.map((item) => (
              <button
                key={item.text}
                onClick={() => item.action ? item.action() : scrollToSection(item.id)}
                className="text-white hover:text-purple-400 transition-colors text-lg tracking-[0.3em]"
              >
                {item.text}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};