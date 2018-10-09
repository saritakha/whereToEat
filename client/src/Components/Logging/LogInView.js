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
              className= { styles.input }
              name="email"
              type="email"
              placeholder="Email@email.net"
            />
          </label>
          <label>
            Password
            <input
              className= { styles.input }
              name="password"
              type="password"
              placeholder="Password"
            />
          </label>
          <button type="submit" className= { styles.login }>Log in</button>
          <NavLink
              className= { styles.signup }
              to={"/signup"}
              exact
          >
            Sign Up
          </NavLink>
        </form>
      </div>
    </div>
  );
};

export default LogInView;
