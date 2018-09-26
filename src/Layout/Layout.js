import React, { Component } from 'react';
import Aux from '../hoc/Aux';
import Navbar from '../Components/Navbar/Navbar'

class Layout extends Component {
  render() {
    return (
      <Aux>
        <Navbar/>
        <p>Login</p>
        <p>Search for restaurant</p>
      </Aux>
    );
  }
}

export default Layout;
