import React , { Component } from 'react';
import Root from '../../hoc/Root';
import Navbar from '../Navbar/Navbar';
import Search from '../Search/Search';
import styles from './Home.css';

class Home extends Component{ 

    render(){
        return(
            <Root className= { styles.home }>
               <Navbar/>
               <Search/>
            </Root>
             );
    }
    }

export default Home;