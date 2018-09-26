import React from 'react';
import logo from './../Img/logo.png';
import Aux from '../../hoc/Aux';
import styles from './Home.css';


const Home = ( props ) => { 
    return(
     <Aux>
        <img className= { styles.logo }  src= { logo } alt='logo' width='500' height='500' />
        <button className= { styles.Button} onclick = { props.click }>Continue</button>
     </Aux>
    );
    }

export default Home;