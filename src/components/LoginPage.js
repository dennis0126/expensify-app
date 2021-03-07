import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";

const LoginPage = (props) => (
  <div>
    <form>
      <input type="text" name="username" placeholder="username"></input>
      <input type="password" name="password" placeholder="password"></input>
      <button>Login</button>
    </form>
    <button onClick={props.startLogin}>Google Login</button>
  </div>
);

const mapDispatchtoProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin()),
});

export default connect(undefined, mapDispatchtoProps)(LoginPage);
