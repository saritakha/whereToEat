import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Restaurants from "./Components/Api/Restaurants";
import Profile from "./Components/Profile/Profile";
import app from "./base";
import LogIn from "./Components/Logging";
import SignUp from "./Components/SignUp";
import PrivateRoute from "./PrivateRoute";

class App extends Component {
  state = {
    response: "",
    food: [],
    loading: true,
    authenticated: false,
    user:{},
  };

  componentDidMount() {
   app.auth().onAuthStateChanged(user => {
    if (user) {
      alert("Logged in as " + user.email)

      this.setState({
        authenticated: true,
        currentUser: user,
        loading: false
      });
    } else {
      this.setState({
        authenticated: false,
        currentUser: null,
        loading: false
      });
    }
  });
}
callApi = async () => {
  const response = await fetch("/hello");
  const body = await response.json();
  if (response.status !== 200) throw Error(body.message);
  return body;
};

render() {
  const { authenticated, loading} = this.state;
  if (loading) {
    return <p>Loading..</p>;
  }

  return (
    <BrowserRouter>
      <div>
        <Route path="/Profile" component={Profile} />
        <PrivateRoute exact path="/" component={Restaurants} authenticated={this.state.authenticated}/>
        <Route exact path="/login" component={LogIn} />
        <Route exact path="/signup" component={SignUp} />
      </div>
    </BrowserRouter>
  );
}
}

export default App;
