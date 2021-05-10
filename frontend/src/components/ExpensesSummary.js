import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import getVisibleExpenses from "../selectors/expenses";
import getExpenseTotal from "../selectors/expenses-total";
import numeral from "numeral";

const ExpensesSummary = (props) => (
  <div className="page-header">
    <div className="content-container">
      <h1 className="page-header__title">
        Viewing <span className="page-header__title--bold">{props.expenses.length}</span> {props.expenses.length === 1 ? "expense" : "expenses"}{" "}
        totalling <span className="page-header__title--bold">{numeral(props.totalExpenseAmount).format("$0,0")}</span>
      </h1>
      <div className="page-header__action">
        <Link to="/create" className="button">
          Add Expense
        </Link>
      </div>
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: getVisibleExpenses(state.expenses, state.filters),
    totalExpenseAmount: getExpenseTotal(getVisibleExpenses(state.expenses, state.filters)),
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
