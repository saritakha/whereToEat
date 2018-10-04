import React , { Component } from 'react';
import Root from '../../hoc/Root';
import Navbar from '../Navbar/Navbar';
import { NavLink } from 'react-router-dom';
import styles from './Login.css';
import {  FormControl, Glyphicon, FormGroup, InputGroup } from 'react-bootstrap';

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
               <form className= { styles.form }>
                Username: 
                  <FormControl
                    type= 'text'
                    placeholder= 'Enter Username' />
                Password: 
                  <FormControl 
                    type= 'password'
                    placeholder= 'Enter Password' />
                 <button><NavLink  to= {'/'}>Login</NavLink></button>   
               </form>    
    </Root>
    )}
    }

export default Home;