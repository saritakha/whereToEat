import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './../Img/logo.png';
import styles from './Navbar.css';
import Root from '../../hoc/Root';

const Navbar = () => {
    return(
    <Root>
        <nav className= { styles.nav }>
          <img className= { styles.logo }src= { logo } alt='logo'  />
             <NavLink className= { styles.NavLink} to= {'/'}>Home</NavLink>
             <NavLink  className= { styles.NavLink} to= {'/Login'}>Login</NavLink>
         </nav>
    </Root>
    );
}

export default Navbar;