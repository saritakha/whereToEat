import React, { Component } from 'react';
import Root from '../hoc/Root';
import Navbar from '../Components/Navbar/Navbar'

class Layout extends Component {
  render() {
    return (
      <Root>
        <Navbar/>
        <p>Search for restaurant</p>
      </Root>
    );
  }
}

export default Layout;
