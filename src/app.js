import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { firebase } from "./firebase/firebase";
import { startSetExpenses } from "./actions/expenses";
import { login, logout } from "./actions/auth";
import { history } from "./routers/AppRouter";

import "normalize.css/normalize.css";
import "./styles/style.scss";

const appRoot = document.getElementById("app");

const store = configureStore();

console.log(process.env.FIREBASE_API_KEY);
console.log(process.env.FIREBASE_AUTH_DOMAIN);
console.log(process.env.FIREBASE_DATABASE_URL);
console.log(process.env.FIREBASE_PROJECT_ID);
console.log(process.env.FIREBASE_STORAGE_BUCKET);
console.log(process.env.FIREBASE_MESSAGING_SENDER_ID);
console.log(process.env.FIREBASE_MEASUREMENT_ID);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, appRoot);
    hasRendered = true;
  }
};

ReactDOM.render(<p>Loading ...</p>, appRoot);

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses()).then(() => {
      console.log("here");
      renderApp();
      if (history.location.pathname === "/") {
        history.push("/dashboard");
      }
    });
  } else {
    store.dispatch(logout());
    renderApp();
    history.push("/");
  }
});
