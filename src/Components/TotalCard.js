import React from 'react';
import { currFormatter } from "../utils";
import { motion } from "framer-motion";

const TotalCard = ({ title, amount }) => {
  return (
    <motion.div 
      className="flex justify-center items-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
    >
      <div
        className="
          w-[21.5rem] md:w-[40rem] 
          p-6 
          rounded-2xl 
          shadow-lg 
          backdrop-blur-md 
          bg-white/20 
          border border-white/30 
          transition-all duration-300
          hover:shadow-2xl
        "
      >
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800 tracking-tight drop-shadow-sm">
            {title}
          </h2>
          <span className="md:text-2xl text-lg font-extrabold bg-gradient-to-r from-emerald-500 to-teal-400 text-transparent bg-clip-text drop-shadow-sm">
            {currFormatter.format(amount)}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default TotalCard;
