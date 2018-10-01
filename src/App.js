import React, { Component } from 'react';
import Home from './Components/Home/Home';
import { BrowserRouter , Route } from 'react-router-dom'
import Restaurants from './Components/Api/Restaurants';
import Login from './Components/Login/Login';
import Main from './Components/Main/Main';

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
         <Route exact= {true} path= '/' component= { Home }/>
         <Route path= '/Restaurants' component= { Restaurants }/>
         <Route path= '/Login' component= { Login }/>
         <Route path= '/Main' component= { Main }/>
      </div>
     </BrowserRouter>
    );
  }
}

export default App;
