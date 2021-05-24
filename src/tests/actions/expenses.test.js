import { addExpense, editExpense, removeExpense, setExpenses } from "../../actions/expenses";

import expenses from "../fixtures/expenses";
// import database from "../../firebase/firebase";

// beforeEach((done) => {
//   const expensesData = {};
//   expenses.forEach(({ id, title, description, amount, createdAt }) => {
//     expensesData[id] = { title, description, amount, createdAt };
//   });
//   console.log(process.env.FIREBASE_DATABASE_URL);
//   database
//     .ref("expenses")
//     .set(expensesData)
//     .then(() => {
//       done();
//     });
// });

test("Should setup remove expense action object", () => {
  const action = removeExpense({ id: "123abc" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc",
  });
});

test("Should setup edit expense action object", () => {
  const action = editExpense("123abc", { title: "Lunch", amount: 88, createdAt: 42, description: "KFC" });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123abc",
    updates: {
      title: "Lunch",
      amount: 88,
      createdAt: 42,
      description: "KFC",
    },
  });
});

test("Should setup add expense action object with provided value", () => {
  const action = addExpense({ title: "Lunch", amount: 88, createdAt: 42, description: "KFC" });
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: { id: expect.any(String), title: "Lunch", amount: 88, createdAt: 42, description: "KFC" },
  });
});

test("Should setup add expense action object without provided value", () => {
  const action = addExpense();
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: { id: expect.any(String), title: "", amount: 0, createdAt: 0, description: "" },
  });
});

test("Should setup set expenses action object with data", () => {
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type: "SET_EXPENSES",
    expenses,
  });
});
