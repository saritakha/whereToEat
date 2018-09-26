import React from 'react';
import logo from './../Img/logo.png';
import Root from '../../hoc/Root';
import styles from './Home.css';


const Home = ( props ) => { 
    return(
     <Root>
        <img className= { styles.logo }  src= { logo } alt='logo' width='500' height='500' />
        <button className= { styles.Button} onclick = { props.click }>Continue</button>
     </Root>
    );
    }

export default Home;