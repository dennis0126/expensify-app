import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import getVisibleExpenses from "../selectors/expenses";

const ExpenseList = (props) => (
  <div>
    <div className="content-container">
      <div className="list-header">
        <div className="show-for-desktop">Expense</div>
        <div className="show-for-desktop">Amount</div>
        <div className="show-for-mobile">Expenses</div>
      </div>
      <div className="list-body">
        {props.expenses.length > 0 ? (
          props.expenses.map((expense) => <ExpenseListItem {...expense} key={expense.id} />)
        ) : (
          <div className="list-item list-item--message">No expenses</div>
        )}
      </div>
    </div>
  </div>
);

const mapStatetoProps = (state) => {
  return {
    expenses: getVisibleExpenses(state.expenses, state.filters),
  };
};

export default connect(mapStatetoProps)(ExpenseList);
