import React, { Component } from 'react';
import Home from './Components/Home/Home';
import Aux from './hoc/Aux';

class App extends Component {
  render() {
    return (
      <Aux>
        <Home/>
      </Aux>
    );
  }
}

export default App;
