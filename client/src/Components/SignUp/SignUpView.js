import React from "react";
import Navbar from "../Navbar/Navbar";
import styles from '../Forms/Forms.css';

const SignUpView = ({ onSubmit }) => {
  return (
    <div>
      <div className= { styles.form }>
        <h1 className= { styles.header }>Sign Up</h1>
        <form onSubmit={onSubmit}>
          <label>
            Email
            <input
              className= { styles.input }
              name="email"
              type="email"
              placeholder="Email"
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
          <button type="submit" className= { styles.signup }>Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUpView;
