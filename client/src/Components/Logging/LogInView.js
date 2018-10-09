import React from "react";
import styles from '../Forms/Forms.css';
import { NavLink } from "react-router-dom";

const LogInView = ({ onSubmit }) => {
  return (
    <div>
      <div className= { styles.form }>
        <h1 className= { styles.header }>Please log in or sign up</h1>
        <form onSubmit={onSubmit}>
          <label>
            Email
            <input
              style={{ width: "100%" }}
              name="email"
              type="email"
              placeholder="Email@email.net"
            />
          </label>
          <label>
            Password
            <input
              style={{ width: "100%" }}
              name="password"
              type="password"
              placeholder="Password"
            />
          </label>
          <button type="submit" className= { styles.submit }>Log in</button>
          <NavLink
              to={"/signup"}
              exact
          >
            Signup
            </NavLink>
        </form>
      </div>
    </div>
  );
};

export default LogInView;
