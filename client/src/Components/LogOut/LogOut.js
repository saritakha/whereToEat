import app from '../../base';
import React ,{Component}  from 'react';
import { Redirect } from 'react-router-dom'

class Logout extends Component{
    render(){ 
        return (   
    app.auth().signOut()
    .then(  this.props.history.push("/Login"))
        );
    }

}

export default Logout;

