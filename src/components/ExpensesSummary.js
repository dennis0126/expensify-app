import React from "react";
import { connect } from "react-redux";
import getVisibleExpenses from "../selectors/expenses";
import getExpenseTotal from "../selectors/expenses-total";
import numeral from "numeral";

const ExpensesSummary = (props) => (
  <div>
    <h3>
      Viewing {props.expenses.length} {props.expenses.length === 1 ? "expense" : "expenses"} totalling{" "}
      {numeral(props.totalExpenseAmount).format("$0,0")}
    </h3>
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: getVisibleExpenses(state.expenses, state.filters),
    totalExpenseAmount: getExpenseTotal(getVisibleExpenses(state.expenses, state.filters)),
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
