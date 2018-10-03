


import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Search.css';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';

const Search = () => {
  navigator.geolocation.watchPosition(function(position) {
    console.log(position);
  });
  return (
    <div>
     <FormGroup className= { styles.form } >
       <InputGroup>
        <FormControl
         placeholder= 'Input your location here.....'
         ref= {input => this.search = input}
         onChange= { this.handleInputChange }
      />
     <InputGroup.Addon>
     <NavLink  to= {'/Restaurants'}><Glyphicon glyph="search"></Glyphicon></NavLink>
  </InputGroup.Addon>
</InputGroup>
</FormGroup>
    </div>
  );
};


export default Search;
