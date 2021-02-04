import React from "react";
import { Link } from "react-router-dom";

const ExpenseListItem = (props) => (
  <div>
    <p>
      <Link to={`/edit/${props.id}`}>{props.title}</Link> - {props.createdAt}
    </p>
    <p>${props.amount}</p>
  </div>
);

export default ExpenseListItem;
