import React from "react";
import style from './Login.css';
import { NavLink } from "react-router-dom";

const LogInView = ({ onSubmit }) => {
  return (

    <div>
      <form className={style.form} onSubmit={onSubmit}>
        <label  className={style.label} >
          Email
          <input
            style={{ width: "100%" }}
            name="email"
            type="email"
            placeholder="Email@email.net"
          />
        </label>
   
        <label  className={style.label} >
          Password
          <input
            style={{ width: "100%" }}
            name="password"
            type="password"
            placeholder="Password"
          />
        </label>
        <button type="submit">Log in</button>
        <NavLink
            to={"/signup"}
            exact
        >
          Signup
          </NavLink>
      </form>
    </div>
  );
};

export default LogInView;
