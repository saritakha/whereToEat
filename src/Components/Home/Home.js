import React , { Component } from 'react';
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
               {/* <button className= { styles.Button} onClick = { this.onClickContinue }>Continue</button> */}
            </Root>
             );
    }
    }

export default Home;