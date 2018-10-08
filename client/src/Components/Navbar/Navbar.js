import React , {Component} from 'react';
import { NavLink } from 'react-router-dom';
import logo from './../Img/logo.png';
import styles from './Navbar.css';
import Root from '../../hoc/Root';
import app from '../../base';



class Navbar extends Component{ 

  logout = () => {
    app.auth().signOut().then(alert('logged out')).catch(err=> console.log(err))  }
  

    render () { 
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
          to= {'/profile'} exact
          activeStyle= {{color:'green'}}>Profile
        </NavLink>
        <button onClick={this.logout.bind(this)}>LogOut</button>
        <NavLink
          className= { styles.NavLink}
          to= {'/logout'} exact
          activeStyle= {{color:'green'}}>Logout
        </NavLink>
         </nav>
    </Root>
    );
}}

export default Navbar;
