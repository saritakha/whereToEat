import React from 'react';
import styles from './Search.css';

const Search = () => {
    return(
        <form className= {styles.form}>
          <label>
             Search for restaurant
               <input type="text" name="name" />
          </label>
         <input type="submit" value="Submit" />
        </form>
    )
}

export default Search;