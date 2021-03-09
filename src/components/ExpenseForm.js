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
      <form className="form" onSubmit={this.onFormSubmit}>
        {this.state.error && <p className="form__error">{this.state.error}</p>}
        <input type="text" name="title" className="text-input" autoFocus value={this.state.title} placeholder="Title" onChange={this.onTitleChange} />
        <input type="text" name="amount" className="text-input" value={this.state.amount} placeholder="Amount" onChange={this.onAmountChange} />

        <SingleDatePicker
          date={this.state.createdAt}
          onDateChange={this.onDateChange}
          focused={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={(day) => false}
        />

        <textarea
          className="textarea"
          placeholder="Add a note for your expense (Optional)"
          value={this.state.description}
          onChange={this.onDescriptionChange}
        />
        <div>
          <button className="button">Save Expense</button>
        </div>
      </form>
    );
  }
}

export default ExpenseForm;
