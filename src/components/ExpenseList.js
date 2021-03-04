import React from "react";
import { connect } from "react-redux";
import ExpensesSummary from "./ExpensesSummary";
import ExpenseListItem from "./ExpenseListItem";
import getVisibleExpenses from "../selectors/expenses";

const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    <ExpensesSummary />
    {/* <p>Number of expenses: {props.expenses.length}</p>
    <p>Total amount: {props.totalExpenseAmount}</p> */}
    {props.expenses.map((expense) => (
      <ExpenseListItem {...expense} key={expense.id} />
    ))}
  </div>
);

const mapStatetoProps = (state) => {
  return {
    expenses: getVisibleExpenses(state.expenses, state.filters),
  };
};

export default connect(mapStatetoProps)(ExpenseList);
