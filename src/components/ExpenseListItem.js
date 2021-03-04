import React from "react";
import { Link } from "react-router-dom";
import numeral from "numeral";
import moment from "moment";

const ExpenseListItem = (props) => (
  <div>
    <p>
      <Link to={`/edit/${props.id}`}>{props.title}</Link> - {moment(props.createdAt).format("Do MMM, YYYY")}
    </p>
    <p>{numeral(props.amount).format("$0,0")}</p>
  </div>
);

export default ExpenseListItem;
