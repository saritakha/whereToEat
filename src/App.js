import React, { Component } from 'react';
import Home from './Components/Home/Home';
import Layout from './Layout/Layout';
import { BrowserRouter , Route } from 'react-router-dom'

class App extends Component {
  // constructor(props){
  //   super(props);
  //   }

  state = {
             food: []
           }

  render() {
    return (
     <BrowserRouter>
      <div>
       <Route exact= {true} path= '/' component= {Home}/>
       <Route path= '/Layout' component= {Layout}/>
      </div>
     </BrowserRouter>
    );
  }
}

export default App;
