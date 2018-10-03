import React , { Component } from 'react';
import Root from '../../hoc/Root';
import Navbar from '../Navbar/Navbar';
import styles from './Login.css';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';

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
               <form  class= { styles.form }>
                Username: 
                  <FormControl
                    type= 'text'
                    placeholder= 'Enter Username' />
                Password: 
                  <FormControl
                    placeholder= 'Enter Password' />
               </form>    
    </Root>
    )}
    }

export default Home;