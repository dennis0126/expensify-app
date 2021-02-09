import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

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
