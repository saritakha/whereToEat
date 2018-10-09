import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import logo from "./../Img/logo.png";
import styles from "./Navbar.css";
import Root from "../../hoc/Root";

class Navbar extends Component {

  render() {
    return (
      <Root>
        <nav className={styles.nav}>
          <img className={styles.logo} src={logo} alt="logo" />
          <NavLink
            className={styles.NavLink}
            to={"/"}
            exact
            activeStyle={{ color: "#FF8C42" }}
          >
            Home
          </NavLink>
          <NavLink
            className={styles.NavLink}
            to={"/profile"}
            exact
            activeStyle={{ color: "#FF8C42" }}
          >
            Profile
          </NavLink>
        </nav>
      </Root>
    );
  }
}

export default Navbar;
