import React, { Component } from 'react';
import Aux from './hoc/Aux';

class Layout extends Component {
  render() {
    return (
      <Aux>
       <p>Navbar</p>
       <p>Login</p>
       <p>Search for restaurant</p>
      </Aux>
    );
  }
}

export default Layout;
