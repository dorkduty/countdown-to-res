import { Instagram, Twitter, Youtube, Facebook } from "lucide-react";
import { motion } from "framer-motion";

export const Footer = () => {
  const socialLinks = [
    {
      icon: Instagram,
      href: "https://instagram.com/the1res",
      label: "Follow RES on Instagram",
    },
    {
      icon: Twitter,
      href: "https://twitter.com/Res",
      label: "Follow RES on Twitter",
    },
    {
      icon: Youtube,
      href: "https://www.youtube.com/theoneres",
      label: "Subscribe to RES on YouTube",
    },
    {
      icon: Facebook,
      href: "https://www.facebook.com/the1Res/",
      label: "Follow RES on Facebook",
    },
  ];

  return (
    <footer className="bg-black text-white py-12 pb-32">
      <div className="container mx-auto px-8">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex items-center space-x-8">
            {socialLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-white/80 hover:text-white transition-colors"
              >
                <link.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} RES. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};