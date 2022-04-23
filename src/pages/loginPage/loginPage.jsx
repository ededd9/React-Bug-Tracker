import React from "react";
import "./loginPage.css";
function LoginPage() {
  return (
    <>
      <div className="login-container">
        <h1 className="logo-name">Ticket Tracker</h1>
        <form className="loginIn-form">
          <div className="login-input-control">
            <label>Username</label>
            <input
              className="loginInput"
              type="text"
              placeholder="Enter your username..."
            ></input>
            <label>Password</label>
            <input
              className="loginInput"
              type="password"
              placeholder="Enter your password..."
            ></input>
          </div>
          <button className="loginButton" type="submit">
            Login
          </button>
        </form>
        <div className="signUp-control">
          <label className="signUp-label">
            Don't have an account? Sign up below.
          </label>
          <button className="loginIn-register-button">Sign up</button>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
