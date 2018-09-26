import React , { Component } from 'react';
import logo from './../Img/logo.png';
import Root from '../../hoc/Root';
import Navbar from '../Navbar/Navbar';
import styles from './Home.css';


class Home extends Component{ 

    onClickContinue(){

    }

    render(){
        return(
            <Root>
                <Navbar/>
               <img className= { styles.logo }  src= { logo } alt='logo' width='500' height='500' />
               <button className= { styles.Button} onClick = { this.onClickContinue }>Continue</button>
            </Root>
             );
    }
    }

export default Home;