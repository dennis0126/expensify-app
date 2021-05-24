import moment from "moment";

// Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, sortOrder, startDate, endDate }) => {
  return expenses
    .filter((expense) => {
      const createdAtMoment = moment(expense.createdAt);

      const textMatch = expense.title.toLowerCase().includes(text.toLowerCase()) || expense.description.toLowerCase().includes(text.toLowerCase());
      const startDateMatch = !startDate ? true : startDate.isSameOrBefore(createdAtMoment, "day");
      const endDateMatch = !endDate ? true : endDate.isSameOrAfter(createdAtMoment, "day");
      return textMatch && startDateMatch && endDateMatch;
    })
    .sort((expenseA, expenseB) => {
      switch (sortBy) {
        case "amount":
          return sortOrder === "asc" ? expenseA.amount - expenseB.amount : expenseB.amount - expenseA.amount;
        case "date":
          return sortOrder === "asc" ? expenseA.createdAt - expenseB.createdAt : expenseB.createdAt - expenseA.createdAt;
        default:
          return 0;
      }
    });
};

export default getVisibleExpenses;
