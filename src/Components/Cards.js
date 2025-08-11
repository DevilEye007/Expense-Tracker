import React from 'react';
import { currFormatter } from "../utils";
import { motion, AnimatePresence } from "framer-motion";
import CountUp from 'react-countup';

const Cards = ({ title, amount, maxAmount, onAddExpenseClick, onViewExpenseClick }) => {

  // Gradient progress bar colors based on ratio
  const progressBarChanger = (amount, maxAmount) => {
    const ratio = amount / maxAmount;
    if (ratio <= 0.5 && ratio > 0.0) return `bg-gradient-to-r from-lime-400 to-green-500`;
    if (ratio <= 0.75 && ratio > 0.50) return `bg-gradient-to-r from-yellow-400 to-amber-500`;
    if (ratio > 0.75) return `bg-gradient-to-r from-red-500 to-pink-500`;
    return `bg-gradient-to-r from-gray-300 to-gray-400`;
  };

  // Card background based on spending
  const overSpendWarningColor = () => {
    return amount >= maxAmount
      ? `bg-red-50/80 backdrop-blur-xl`
      : `bg-white/70 backdrop-blur-xl`;
  };

  return (
    <motion.div
      className="flex justify-center items-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 250, damping: 20 }}
    >
      <div
        className={`w-[21.5rem] md:w-[40rem] p-6 ${overSpendWarningColor()} 
        border border-white/20 rounded-2xl shadow-lg transition-all duration-300`}
      >

        {/* Title & Amount */}
        <div className='flex flex-row justify-between items-center mb-3'>
          <div className='text-xl md:text-2xl font-bold text-gray-800'>{title}</div>
          <div className='md:text-xl font-medium text-gray-700 flex items-baseline space-x-1'>
            <CountUp
              end={amount}
              duration={1}
              separator=","
              decimals={0}
              formattingFn={(val) => currFormatter.format(val)}
            />
            <span className="text-gray-500">
              / {currFormatter.format(maxAmount)}
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="relative pt-1 mb-4">
          <div className="overflow-hidden h-3 rounded-full bg-gray-200">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${(amount / maxAmount) * 100}%` }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className={`h-full ${progressBarChanger(amount, maxAmount)} rounded-full`}
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className='flex justify-end space-x-3'>
          <motion.button
            onClick={onAddExpenseClick}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold text-sm md:text-base rounded-lg px-3 py-1.5 shadow-md hover:shadow-lg transition-all duration-300"
          >
            Add Expense
          </motion.button>
          <motion.button
            onClick={onViewExpenseClick}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-r from-gray-800 to-gray-900 text-white font-semibold text-sm md:text-base rounded-lg px-3 py-1.5 shadow-md hover:shadow-lg transition-all duration-300"
          >
            View/Delete Expenses
          </motion.button>
        </div>

      </div>
    </motion.div>
  );
};

export default Cards;
