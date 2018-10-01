


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
     <FormGroup className= { styles.form} >
  <InputGroup>
    <FormControl
        placeholder= 'Input your location here.....'
        ref= {input => this.search = input}
        onChange= { this.handleInputChange }
    />
  <InputGroup.Addon>
   <NavLink  to= {'/Main'}><Glyphicon glyph="search"></Glyphicon></NavLink>
  </InputGroup.Addon>
</InputGroup>
</FormGroup>
         

      <button>
        <a href="https://www.google.com/maps/dir/?api=1&origin=60.1689709,24.9556654&destination=60.206647,24.828305">
          Get directions
        </a>
      </button>

    </div>
  );
};


export default Search;
