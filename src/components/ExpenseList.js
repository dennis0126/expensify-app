import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses";

const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    <p>Number of expenses: {props.expenses.length}</p>
    {props.expenses.map((expense) => (
      <ExpenseListItem {...expense} key={expense.id} />
    ))}
  </div>
);

const mapStatetoProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters),
  };
};

export default connect(mapStatetoProps)(ExpenseList);
