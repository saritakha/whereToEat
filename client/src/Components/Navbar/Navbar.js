import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './../Img/logo.png';
import styles from './Navbar.css';
import Root from '../../hoc/Root';

const Navbar = () => {
    return(
    <Root>
      <nav className= { styles.nav }>
        <img className= { styles.logo } src= { logo } alt='logo'  />
        <NavLink
          className= { styles.NavLink}
          to= {'/'} exact
          activeStyle= {{color:'green'}}>
          Home
        </NavLink>
        <NavLink
          className= { styles.NavLink}
          to= {'/Login'} exact
          activeStyle= {{color:'green'}}>Login
        </NavLink>
        <NavLink
          className= { styles.NavLink}
          to= {'/signup'} exact
          activeStyle= {{color:'green'}}>Sign up
        </NavLink>
        <NavLink
          className= { styles.NavLink}
          to= {'/profile'} exact
          activeStyle= {{color:'green'}}>Profile
        </NavLink>
         </nav>
    </Root>
    );
}

export default Navbar;
