import React, { Component } from 'react';
import Home from './Components/Home/Home';
import { BrowserRouter , Route } from 'react-router-dom'
import Restaurants from './Components/Api/Restaurants';
import Login from './Components/Login/Login';
import Main from './Components/Main/Main';

class App extends Component {
  // constructor(props){
  //   super(props);
  // }
  state = {
    response: '',
    food: []
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch("/hello");
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (

      // Test stuff for server
      /*<div className="App">
        <p className="App-intro">{this.state.response}</p>
      </div>*/

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
