import React from "react";

const LogInView = ({ onSubmit }) => {
  return (
    <div>
      <h1>Please log in</h1>
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
