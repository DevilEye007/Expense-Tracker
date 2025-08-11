import React from 'react';
import { useExpenseTracker } from '../Contexts/ExpenseTrackerContext';
import { currFormatter } from "../utils";
import { motion } from "framer-motion";

const TotalExpense = () => {
  const { budgets, expenses } = useExpenseTracker();

  const amount = expenses.reduce((total, expense) => total + expense.amount, 0);
  const max = budgets.reduce((total, budget) => total + budget.budgetName?.max, 0);

  if (max === 0) return null;

  const ratio = amount / max;

  const progressGradient = () => {
    if (ratio <= 0.5) return "from-emerald-400 to-emerald-600";
    if (ratio <= 0.75) return "from-amber-400 to-amber-600";
    return "from-red-400 to-red-600";
  };

  return (
    <motion.div
      className="flex justify-center items-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
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
          hover:scale-[1.02]
        "
      >
        {/* Title & Amount */}
        <div className="flex flex-row justify-between items-center mb-4">
          <div className="text-2xl font-bold text-white drop-shadow-sm">
            Total Expenses
          </div>
          <div className="md:text-2xl text-lg font-extrabold bg-gradient-to-r from-emerald-500 to-teal-400 text-transparent bg-clip-text drop-shadow-sm">
            {currFormatter.format(amount)} / {currFormatter.format(max)}
          </div>
        </div>

        {/* Animated Progress Bar */}
        <div className="relative pt-1">
          <div className="overflow-hidden h-3 rounded-full bg-gray-200">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${ratio * 100}%` }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className={`h-full bg-gradient-to-r ${progressGradient()} rounded-full`}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TotalExpense;
