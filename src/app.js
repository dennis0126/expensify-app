import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";

import "normalize.css/normalize.css";
import "./styles/style.scss";

const appRoot = document.getElementById("app");

const store = configureStore();

import { addExpense } from "./actions/expenses";
import { setTextFilter, sortByAmount } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";

store.dispatch(addExpense({ title: "Water bill", amount: 500, createdAt: 1 }));
store.dispatch(addExpense({ title: "Gas bill", amount: 400, createdAt: 5 }));
store.dispatch(addExpense({ title: "Rent", amount: 1300, createdAt: 3 }));
// store.dispatch(setTextFilter("Gas"));
store.dispatch(sortByAmount());

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, appRoot);
