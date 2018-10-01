import React, { Component } from 'react';
import Main from '../Main/Main';

import styles from './Restaurants.css';
export default class Restaurants extends Component{
  constructor(){
    super();
    this.state={
      restaurants: [],
      isLoading: false,
      error: null,
      index: 0
    }
  }

  componentDidMount(){
    this.setState({
      isLoading: true
    })
    fetch('https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=60.21749913,24.8064967&radius=500&type=restaurant&key=AIzaSyDGgNbzA8m2lzd9ijxaGPhmoe-oVTr7nDk')
    .then(response => {
      if(response.ok){
        return response.json()
      }else{
        throw new Error('Sorry, something went wrong')
      }
    })
    .then(data => this.setState({
      restaurants: data.results,
      isLoading: false
    }))
    .catch(error => this.setState({
      error: null,
      isLoading: false
    }))
  }


  handleClick = (name, vic) => {
    console.log(name);
    window.location.href = "https://www.google.com/maps/dir/?api=1&origin=60.21749913,24.8064967&destination="+name+", +"+vic;
  }
  AddToFav = () => {
    alert("Added to favourites!");
  }
  test = () => {
    alert("Added to favourites!");
  }
  render(){
    const {restaurants, isLoading, error} = this.state;
    const restaurant = restaurants[this.state.index]
    console.log(restaurants);
    if(isLoading){
      return <p>Loading</p>
    }
    if(error){
      return <p>{error.message}</p>
    }

    if(restaurants.length===0) return <div>loading</div>
    return(
      <div>
        <button className='button' onClick={() => this.setState({index:this.state.index+1})}>No, show me another place</button>
        <button className='button' onClick={() => {this.handleClick(restaurant.name, restaurant.vicinity)}}>Get me directions!</button>
        <button className='button' onClick={() => {this.AddToFav()}}>Add to favourites</button>
        <ul>
          <li><Main name= {restaurant.name}/></li>
          <li>{restaurant.vicinity}</li>
          <li>{restaurant.rating}/5</li>
          <li><img src={restaurant.icon} alt="Restaurant picture"/></li>
        </ul>
      </div>
    )
  }
}
