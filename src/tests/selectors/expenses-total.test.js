import getExpenseTotal from "../../selectors/expenses-total";
import expenses from "../fixtures/expenses";

test("Should return 0 if no expenses", () => {
  const res = getExpenseTotal([]);
  expect(res).toBe(0);
});

test("Should correctly add up a single expense", () => {
  const res = getExpenseTotal([expenses[0]]);
  expect(res).toBe(80);
});

test("Should correctly add up multiple expenses", () => {
  const res = getExpenseTotal(expenses);
  expect(res).toBe(14780);
});
