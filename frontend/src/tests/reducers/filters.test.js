import filtersReducer from "../../reducers/filters";
import moment from "moment";

test("Should setup default filter value", () => {
  const state = filtersReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    sortOrder: "desc",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month"),
  });
});

test("Should set text filter", () => {
  const state = filtersReducer(undefined, { type: "SET_TEXT_FILTER", text: "bill" });
  expect(state.text).toBe("bill");
});

test("Should set sortBy to amount", () => {
  const state = filtersReducer(undefined, { type: "SORT_BY_AMOUNT" });
  expect(state.sortBy).toBe("amount");
});

test("Should set sortBy to date", () => {
  const currentState = {
    text: "",
    sortBy: "amount",
    sortOrder: "desc",
    startDate: undefined,
    endDate: undefined,
  };
  const state = filtersReducer({ currentState }, { type: "SORT_BY_DATE" });
  expect(state.sortBy).toBe("date");
});

test("Should set startDate filter", () => {
  const state = filtersReducer(undefined, { type: "SET_START_DATE", startDate: moment(3600) });
  expect(state.startDate).toEqual(moment(3600));
});

test("Should set endDate filter", () => {
  const state = filtersReducer(undefined, { type: "SET_END_DATE", endDate: moment(8400) });
  expect(state.endDate).toEqual(moment(8400));
});
