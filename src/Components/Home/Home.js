import React from 'react';
import logo from './../Img/logo.png';
import Aux from '../../hoc/Aux';


const Home = (props) => { 
    return(
     <Aux>
        <img src={logo} alt='logo' width='500' height='500' />
        <button onclick = {props.click}>Continue</button>
     </Aux>
    );
    }

export default Home;