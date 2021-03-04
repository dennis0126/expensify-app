import getVisibleExpenses from "./expenses";

// Get total expenses
const getExpenseTotal = (expenses) => {
  return expenses.map((e) => e.amount).reduce((sum, value) => sum + value, 0);
};

export default getExpenseTotal;
