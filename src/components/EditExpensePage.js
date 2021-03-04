import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { startEditExpense, startRemoveExpense } from "../actions/expenses";

const EditExpensePage = (props) => (
  <div>
    <h1>Edit expense</h1>
    <ExpenseForm
      expense={props.expense}
      onSubmit={(expense) => {
        console.log(expense);
        props.dispatch(startEditExpense(props.expense.id, expense));
        props.history.push("/");
      }}
    />
    <button
      onClick={() => {
        props.dispatch(startRemoveExpense({ id: props.expense.id }));
        props.history.push("/");
      }}
    >
      Remove
    </button>
  </div>
);

const mapStatetoProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id),
  };
};

export default connect(mapStatetoProps)(EditExpensePage);

// export default EditExpensePage;
