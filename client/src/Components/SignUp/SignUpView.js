import React from "react";
import styles from '../Forms/Forms.css';

const SignUpView = ({ onSubmit }) => {
  return (
    <div>
      <div className= { styles.form }>
        <h1 className= { styles.header }>Sign up</h1>
        <form onSubmit={onSubmit}>
          <label>
            Email
            <input
              style={{ width: "100%" }}
              name="email"
              type="email"
              placeholder="Email"
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
          <button type="submit" className= { styles.submit }>Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUpView;
