import React , { Component } from 'react';
import Root from '../../hoc/Root';
import Navbar from '../Navbar/Navbar';
import styles from './Login.css';
import {  FormControl } from 'react-bootstrap';

class Home extends Component{ 
    constructor(props) {
    super(props)
    this.authWithEmailPassword = this.authWithEmailPassword.bind(this)
 }   
  state = {
        LoggedIn: false
    }

    authWithEmailPassword(e) {
     e.preventDefault();
     console.table([{
         email: this.emailInput.value,
         password: this.PasswordInput.value
     }])
    }

    loginHandler = () => {
        <p>Give some logic here</p>
    }

    render(){
        return(
            <Root>
              <Navbar/>
               <form className= { styles.form }
                onSubmit= {(e) => { this.authWithEmailPassword(e)}}
                ref={(form) => { this.loginForm = form }}>
                Email: 
                  <FormControl
                    type= 'email'
                    name= 'email'
                    placeholder= 'Enter Username'
                    ref= {(input) => { this.emailInput = input }} />
                Password: 
                  <FormControl 
                    type= 'password'
                    name= 'password'
                    placeholder= 'Enter Password'
                    ref= {(input) => { this.PasswordInput = input }}  />
                 <input type= 'submit' />    
                 <button>Signup</button>   
               </form>    
    </Root>
    )}
    }

export default Home;