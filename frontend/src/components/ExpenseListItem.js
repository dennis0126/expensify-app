import React from "react";
import { Link } from "react-router-dom";
import numeral from "numeral";
import moment from "moment";

const ExpenseListItem = (props) => (
  <div className="list-item">
    <div>
      <div>
        <Link className="list-item__title" to={`/edit/${props.id}`}>
          {props.title}
        </Link>
      </div>
      <span className="list-item__subtitle">{moment(props.createdAt).format("Do MMM, YYYY")}</span>
    </div>
    <div>
      <h3 className="list-item__data">{numeral(props.amount).format("$0,0")}</h3>
    </div>
  </div>
);

export default ExpenseListItem;
