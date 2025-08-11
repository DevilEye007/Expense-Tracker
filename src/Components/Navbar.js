import React from 'react';
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="bg-slate-900/90 backdrop-blur-xl text-gray-100 shadow-xl sticky top-0 z-50"
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between py-4">

        {/* Text Logo */}
        <motion.h1
          className="text-3xl md:text-4xl font-extrabold cursor-pointer select-none 
                     bg-gradient-to-r from-teal-300 via-emerald-300 to-orange-200
                     bg-clip-text text-transparent drop-shadow-lg"
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{ scale: 0.95 }}
        >
          Map My Expense
        </motion.h1>

        {/* GitHub Button */}
        <motion.a
          href="https://github.com/DevilEye007/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            scale: 1.1,
            backgroundPosition: "right center",
            transition: { duration: 0.3 },
          }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-3 bg-gradient-to-r from-orange-400 to-amber-500
                     text-white font-semibold py-2 px-6 rounded-xl bg-left transition-all duration-300"
        >
          Github <FaGithub className="text-2xl" />
        </motion.a>
      </div>
    </motion.header>
  );
};

export default Navbar;
