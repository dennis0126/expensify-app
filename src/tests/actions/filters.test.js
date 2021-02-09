import moment from "moment";
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from "../../actions/filters";

test("Should setup set text filter action object with text value", () => {
  const action = setTextFilter("bill");
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: "bill",
  });
});

test("Should setup set text filter action object without provided text", () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: undefined,
  });
});

test("Should setup sort by date action object", () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: "SORT_BY_DATE",
    sortOrder: "desc",
  });
});

test("Should setup sort by date action object", () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: "SORT_BY_AMOUNT",
    sortOrder: "desc",
  });
});

test("Should setup set start date action object", () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: "SET_START_DATE",
    startDate: moment(0),
  });
});

test("Should setup set end date action object", () => {
  const action = setEndDate(moment(100));
  expect(action).toEqual({
    type: "SET_END_DATE",
    endDate: moment(100),
  });
});
