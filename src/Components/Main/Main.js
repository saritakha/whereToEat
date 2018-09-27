import React  from 'react';
import Navbar from '../Navbar/Navbar';
import Root from '../../hoc/Root';
import styles from './Main.css';

const Main = ( props ) => {
        return(
            <Root>
             <Navbar/>
             <button className='button' >No</button>
               <div className={styles.circle}>
                 <p> Restaurant detail {props.name} </p> 
               </div>
               <button className='button' >Yes</button>
            </Root>
        )
    }

export default Main;