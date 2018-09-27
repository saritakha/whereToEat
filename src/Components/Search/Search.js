import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Search.css';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';

class Search extends Component{
    state = {
        query: '',
        redirect: false
    }

    handleInputChange = () => {
        this.setState({
            query: this.search.value
        })
    }

    render(){ 
    return(
       
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
</div>
)
    
    }
}

export default Search;