import React, { Component } from 'react';

export default class Restaurants extends Component{
  constructor(){
    super();
    this.state={
      restaurants: [],
      isLoading: false,
      error: null,
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

  render(){
    const {restaurants, isLoading, error} = this.state;

    if(isLoading){
      return <p>Loading</p>
    }
    if(error){
      return <p>{error.message}</p>
    }

    return(
      <div>
        {restaurants.map(data =>
          <ul key={data.name}>
            <li>{data.name}</li>
            <li>{data.vicinity}</li>
            <li>{data.rating}/5</li>
            <li><img src={data.icon} alt="Restaurant picture"/></li>

          </ul>
        )}
      </div>
    )
  }
}
