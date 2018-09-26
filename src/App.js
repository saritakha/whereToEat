import React, { Component } from 'react';
import Home from './Components/Home/Home';
import Layout from './Layout/Layout';
import Aux from './hoc/Aux';

class App extends Component {
  render() {
    return (
      <Aux>
        <Home/>
        <Layout/>
      </Aux>
    );
  }
}

export default App;
