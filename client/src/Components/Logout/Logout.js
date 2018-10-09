import React,{Component} from "react";
import Login from '../Logging';
import app from "../../base";

class logout extends Component {
  
    handleLogout = async event => {
      event.preventDefault();
      try {
        await app
        .auth().signOut();
        this.props.history.push("/login");
      } catch (error) {
        alert(error);
      }
    };
    render(){
        return(
            <Login/>
        )
    }
  }
    


  export default logout;