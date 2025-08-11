import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaWhatsapp, FaLinkedin, FaRegCopyright } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      icon: <FaGithub className="text-lg md:text-xl" />,
      url: "https://github.com/DevilEye007",
      name: "GitHub"
    },
    {
      icon: <FaLinkedin className="text-lg md:text-xl" />,
      url: "https://www.linkedin.com/in/faizan-sultan-302b1b24b",
      name: "LinkedIn"
    },
    {
      icon: <FaWhatsapp className="text-lg md:text-xl text-green-400 hover:text-green-300" />,
      url: "https://wa.me/923107889209",
      name: "WhatsApp"
    },
  ];

  return (
    <motion.footer 
      className="w-full fixed bottom-0 left-0 right-0 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="
        backdrop-blur-md 
        bg-white/20 
        border-t border-white/30
        py-4 md:py-6
      ">
        <div className="container mx-auto px-4">
          {/* Mobile Layout (stacked) */}
          <div className="md:hidden flex flex-col items-center space-y-4">
            {/* Social Links - Center aligned for mobile */}
            <div className="flex space-x-6">
              {socialLinks.map((link, index) => (
                <motion.div 
                  key={index}
                  className="relative group"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <motion.a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      text-white/70 
                      hover:text-white 
                      transition-colors 
                      duration-300
                    "
                    aria-label={link.name}
                  >
                    {link.icon}
                  </motion.a>
                  <motion.span 
                    className="
                      absolute -top-8 left-1/2 transform -translate-x-1/2
                      bg-white/90 text-black text-xs font-medium
                      px-2 py-1 rounded whitespace-nowrap
                      pointer-events-none
                    "
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ 
                      opacity: 0,
                      y: 10,
                      transition: { duration: 0.2 }
                    }}
                    whileHover={{
                      opacity: 1,
                      y: 0,
                      transition: { delay: 0.3 }
                    }}
                  >
                    {link.name}
                  </motion.span>
                </motion.div>
              ))}
            </div>

            {/* Copyright - Smaller text for mobile */}
            <div className="flex items-center text-white/80 text-xs">
              <FaRegCopyright className="mr-1" />
              <span>
                {currentYear} Faizan Sultan. All rights reserved.
              </span>
            </div>

            {/* Mobile Links - Smaller and compact */}
            <div className="flex space-x-4">
              {[
                { name: "Privacy", url: "/privacy" },
                { name: "Terms", url: "/terms" },
                { name: "Contact", url: "/contact" }
              ].map((link, index) => (
                <motion.div 
                  key={index}
                  className="relative group"
                  whileHover={{ y: -2 }}
                >
                  <motion.a 
                    href={link.url} 
                    className="
                      text-white/70 hover:text-white 
                      text-xs transition-colors duration-300
                    "
                  >
                    {link.name}
                  </motion.a>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Desktop Layout (horizontal) */}
          <div className="hidden md:flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <div className="flex items-center text-white/80 mb-4 md:mb-0">
              <FaRegCopyright className="mr-1" />
              <span className="text-sm md:text-base">
                {currentYear} Faizan Sultan. All rights reserved.
              </span>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6">
              {socialLinks.map((link, index) => (
                <motion.div 
                  key={index}
                  className="relative group"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <motion.a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      text-white/70 
                      hover:text-white 
                      transition-colors 
                      duration-300
                    "
                    aria-label={link.name}
                  >
                    {link.icon}
                  </motion.a>
                  <motion.span 
                    className="
                      absolute -top-8 left-1/2 transform -translate-x-1/2
                      bg-white/90 text-black text-xs font-medium
                      px-2 py-1 rounded whitespace-nowrap
                      pointer-events-none
                    "
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ 
                      opacity: 0,
                      y: 10,
                      transition: { duration: 0.2 }
                    }}
                    whileHover={{
                      opacity: 1,
                      y: 0,
                      transition: { delay: 0.3 }
                    }}
                  >
                    {link.name}
                  </motion.span>
                </motion.div>
              ))}
            </div>

            {/* Additional Links */}
            <div className="flex space-x-6 mt-4 md:mt-0">
              {[
                { name: "Privacy Policy", url: "/privacy" },
                { name: "Terms of Service", url: "/terms" },
                { name: "Contact", url: "/contact" }
              ].map((link, index) => (
                <motion.div 
                  key={index}
                  className="relative group"
                  whileHover={{ y: -2 }}
                >
                  <motion.a 
                    href={link.url} 
                    className="
                      text-white/70 hover:text-white 
                      text-sm transition-colors duration-300
                    "
                  >
                    {link.name}
                  </motion.a>
                  <motion.span 
                    className="
                      absolute -top-8 left-1/2 transform -translate-x-1/2
                      bg-white/90 text-black text-xs font-medium
                      px-2 py-1 rounded whitespace-nowrap
                      pointer-events-none
                    "
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ 
                      opacity: 0,
                      y: 10,
                      transition: { duration: 0.2 }
                    }}
                    whileHover={{
                      opacity: 1,
                      y: 0,
                      transition: { delay: 0.3 }
                    }}
                  >
                    {link.name}
                  </motion.span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;