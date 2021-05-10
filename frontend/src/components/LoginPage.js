import React from "react";
import { connect } from "react-redux";
import { startLogin, startLoginAnonymous } from "../actions/auth";

const LoginPage = (props) => (
  <div className="box-layout">
    <div className="box-layout__background"></div>
    <div className="box-layout__box">
      <h1 className="box-layout__title">Expensify</h1>
      <p>Get your expenses under control</p>
      <form className="login-form">
        <input className="login-form__input" type="text" name="username" placeholder="username"></input>
        <input className="login-form__input" type="password" name="password" placeholder="password"></input>
        <button className="login-form__button button">Login</button>
      </form>
      <div className="login-form__border"></div>
      <button className="login-form__button button" onClick={props.startLogin}>
        Google Login
      </button>
      <button className="login-form__button button" onClick={props.startLoginAnonymous}>
        Anonymous Login
      </button>
    </div>
  </div>
);

const mapDispatchtoProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin()),
  startLoginAnonymous: () => dispatch(startLoginAnonymous()),
});

export default connect(undefined, mapDispatchtoProps)(LoginPage);
