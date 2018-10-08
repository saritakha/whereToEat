import React from "react";
import Navbar from "../Navbar/Navbar";
const LogInView = ({ onSubmit }) => {
  return (

    <div>
      <Navbar />
      <h1>Please log in first or sign up in the top right</h1>
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
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default LogInView;
