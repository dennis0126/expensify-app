import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

test("Should set default state", () => {
  const state = expensesReducer(undefined, "@@INIT");
  expect(state).toEqual([]);
});

test("Should add an expense", () => {
  const newExpense = {
    id: "4",
    title: "Gas bill",
    description: "Towngas",
    amount: 650,
    createdAt: 18,
  };
  const state = expensesReducer(expenses, { type: "ADD_EXPENSE", expense: newExpense });
  expect(state).toEqual([...expenses, newExpense]);
});

test("Should edit an expense", () => {
  const updates = {
    title: "Dinner",
    description: "KFC",
    amount: 120,
    createdAt: 180,
  };
  const state = expensesReducer(expenses, { type: "EDIT_EXPENSE", id: "1", updates });
  expect(state).toEqual([{ ...expenses[0], ...updates }, expenses[1], expenses[2]]);
});

test("Should not edit an expense if expense not found", () => {
  const updates = {
    title: "Dinner",
    description: "KFC",
    amount: 120,
    createdAt: 180,
  };
  const state = expensesReducer(expenses, { type: "EDIT_EXPENSE", id: "-1", updates });
  expect(state).toEqual(expenses);
});

test("Should remove expense from id", () => {
  const state = expensesReducer(expenses, { type: "REMOVE_EXPENSE", id: expenses[1].id });
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("Should not remove expense if id not found", () => {
  const state = expensesReducer(expenses, { type: "REMOVE_EXPENSE", id: "01" });
  expect(state).toEqual(expenses);
});
