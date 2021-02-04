import React from "react";
import moment from "moment";
import "react-dates/initialize";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

class ExpenseForm extends React.Component {
  state = {
    title: this.props.expense ? this.props.expense.title : "",
    amount: this.props.expense ? this.props.expense.amount.toString() : "",
    description: this.props.expense ? this.props.expense.description : "",
    createdAt: this.props.expense ? moment(this.props.expense.createdAt) : moment(),
    calendarFocused: false,
    error: undefined,
  };
  onTitleChange = (e) => {
    this.setState((prevState) => ({
      title: e.target.value,
    }));
  };
  onAmountChange = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d+(\.\d{0,2})?$/)) {
      this.setState((prevState) => ({
        amount,
      }));
    }
  };
  onDescriptionChange = (e) => {
    this.setState((prevState) => ({
      description: e.target.value,
    }));
  };
  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState((prevState) => ({ createdAt }));
    }
  };
  onFocusChange = ({ focused }) => {
    this.setState((prevState) => ({ calendarFocused: focused }));
  };
  onFormSubmit = (e) => {
    e.preventDefault();
    if (!this.state.title) {
      return this.setState((prevState) => ({ error: "Please provide a title" }));
    }
    if (!this.state.amount) {
      return this.setState((prevState) => ({ error: "Please provide an amount" }));
    }
    this.setState((prevState) => ({ error: undefined }));
    this.props.onSubmit({
      title: this.state.title,
      description: this.state.description,
      amount: parseFloat(this.state.amount),
      createdAt: this.state.createdAt.valueOf(),
    });
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        Title: <input type="text" name="title" autoFocus value={this.state.title} onChange={this.onTitleChange} />
        Amount: <input type="text" name="amount" value={this.state.amount} onChange={this.onAmountChange} />
        Date:
        <SingleDatePicker
          date={this.state.createdAt}
          onDateChange={this.onDateChange}
          focused={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={(day) => false}
        />
        Description:{" "}
        <textarea placeholder="Add a note for your expense (Optional)" value={this.state.description} onChange={this.onDescriptionChange} />
        <button>Submit</button>
        {this.state.error && <p>{this.state.error}</p>}
      </form>
    );
  }
}

export default ExpenseForm;
