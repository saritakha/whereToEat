import React , { Component } from 'react';
import Root from '../../hoc/Root';
import Navbar from '../Navbar/Navbar';

class Home extends Component{ 
    state = {
        LoggedIn: false
    }

    loginHandler = () => {
        <p>Give some logic here</p>
    }

    render(){
        return(
            <Root>
               <Navbar/>
            </Root>
             );
    }
    }

export default Home;