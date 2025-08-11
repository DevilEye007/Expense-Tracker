import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Cards from "./Components/Cards";
import AddBudgetModel from "./Components/AddBudgetModel";
import AddExpenseModel from "./Components/AddExpenseModel";
import ViewExpenseModel from "./Components/ViewExpenseModel";
import Footer from "./Components/Footer";
import { useExpenseTracker } from "./Contexts/ExpenseTrackerContext";
import TotalExpense from "./Components/TotalExpense";
import { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";

// ✅ Add your background video file in public folder, e.g., /public/bg.mp4

function App() {
  const [showAddBudgetModel, setShowAddBudgetModel] = useState(false);
  const [showAddExpenseModel, setShowAddExpenseModel] = useState(false);
  const [viewExpenseModelForABudgetId, setViewExpenseModelForABudgetId] = useState();
  const [addExpenseForABudgetId, setAddExpenseForABudgetId] = useState();
  const { budgets, allExpensesForABudget } = useExpenseTracker();

  const openAddExpenseModal = (budgetId) => {
    setShowAddExpenseModel(true);
    setAddExpenseForABudgetId(budgetId);
  };

  return (
    <div className="App relative min-h-screen text-gray-800 pb-10 overflow-hidden">
      {/* 🎥 Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="/Expense.mp4" type="video/mp4" />
      </video>

      {/* 🔳 Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 -z-10"></div>

      {/* Toaster notifications */}
      <Toaster position="bottom-right" reverseOrder={false} />

      <Navbar />

      {/* Header */}
      <motion.div
        className="flex flex-col md:flex-row justify-between items-center mx-6 md:mx-20 xl:mx-[16.5rem] 2xl:mx-[35rem] my-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="text-[1.5rem] md:text-[2.5rem] font-bold tracking-tight bg-gradient-to-r from-teal-300 via-emerald-300 to-orange-200 bg-clip-text text-transparent drop-shadow-sm">
          Your Expenses
        </h1>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <motion.button
            className="bg-gradient-to-r from-orange-400 to-amber-500 text-white font-semibold text-sm md:text-base rounded-lg px-4 py-2 shadow-md hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowAddBudgetModel(true)}
          >
            Add Budget
          </motion.button>
        </div>
      </motion.div>

      {/* Cards */}
      <div className="space-y-6">
        {budgets.map((budget, index) => {
          const expenseForABudget = allExpensesForABudget(budget.id).reduce(
            (total, expense) => total + expense.amount,
            0
          );
          return (
            <motion.div
              key={budget.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Cards
                title={budget.budgetName?.budgetName}
                amount={expenseForABudget}
                maxAmount={budget.budgetName?.max}
                onAddExpenseClick={() => openAddExpenseModal(budget.id)}
                onViewExpenseClick={() =>
                  setViewExpenseModelForABudgetId(budget.id)
                }
              />
            </motion.div>
          );
        })}
        {/* <Footer/> */}
      </div>

      {/* Total Expenses */}
      <motion.div
        className="mt-10"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <TotalExpense />
      </motion.div>

      {/* Modals */}
      <AddBudgetModel
        show={showAddBudgetModel}
        onClose={() => setShowAddBudgetModel(false)}
      />
      <AddExpenseModel
        show={showAddExpenseModel}
        defaultBudgetId={addExpenseForABudgetId}
        onClose={() => setShowAddExpenseModel(false)}
      />
      <ViewExpenseModel
        budgetId={viewExpenseModelForABudgetId}
        onClose={setViewExpenseModelForABudgetId}
      />
    </div>
  );
}

export default App;
