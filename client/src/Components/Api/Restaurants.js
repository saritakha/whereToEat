import React, { Component } from "react";
import styles from "./Restaurants.css";
import Navbar from "../Navbar/Navbar";

export default class Restaurants extends Component {
  constructor() {
    super();
    this.state = {
      restaurants: [],
      isLoading: false,
      error: null,
      index: 0,
      location: {
        lat: 60.220803,
        long: 24.805207
      }
    };
  }

  componentDidMount() {
    let self = this;
    navigator.geolocation.watchPosition(
      function(position) {
        self.setState({
          enableHighAccuracy: true,
          location: {
            lat: position.coords.latitude,
            long: position.coords.longitude,
            error: null
          }
        });
      },
      error => this.setState({ error: error.message }),
      { enableHighAccuracy: true, maximumAge: 1000, distanceFilter: 10 }
    );

    this.setState({
      isLoading: true
    });
    fetch(
      "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" +
        self.state.location.lat +
        "," +
        self.state.location.long +
        "&radius=500&type=restaurant&key=AIzaSyDGgNbzA8m2lzd9ijxaGPhmoe-oVTr7nDk"
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Sorry, something went wrong");
        }
      })
      .then(data =>
        this.setState({
          restaurants: data.results,
          isLoading: false
        })
      )
      .catch(error =>
        this.setState({
          error: null,
          isLoading: false
        })
      );
  }

  handleClick = (name, vic) => {
    console.log(name);
    window.open("https://www.google.com/maps/dir//" + name + ", +" + vic);
  };
  AddToFav = name => {
    alert("Added to favourites: " + name);
  };
  CurrentLocDir = (lat, long, name, vic) => {
    console.log("lat: " + lat + " long: " + long);
    window.open(
      "https://www.google.com/maps/dir/?api=1&origin=" +
        lat +
        "," +
        long +
        "&" +
        "destination=" +
        name +
        ", +" +
        vic
    );
  };

  render() {
    const { restaurants, isLoading, error } = this.state;
    const location = this.state.location;
    const restaurant = restaurants[this.state.index];
    console.log(restaurants);
    if (isLoading) {
      return <p>Loading</p>;
    }
    if (error) {
      return <p>{error.message}</p>;
    }

    if (restaurants.length === 0) return <div>loading</div>;
    if (this.state.index === 15)
      this.setState({ index: (this.state.index = 0) });
    return (
      <div>
        <Navbar />
        <button
          className={styles.button}
          onClick={() => this.setState({ index: this.state.index + 1 })}
        >
          No, show me another place
        </button>
        <button
          className={styles.button}
          onClick={() => {
            console.log("lat" + location.lat + "ja long " + location.long);
            this.CurrentLocDir(
              location.lat,
              location.long,
              restaurant.name,
              restaurant.vicinity
            );
          }}
        >
          Get directions from my current location
        </button>
        <button
          className={styles.button}
          onClick={() => {
            this.handleClick(restaurant.name, restaurant.vicinity);
          }}
        >
          Get me directions from anywhere!
        </button>
        <button
          className={styles.button}
          onClick={() => {
            this.AddToFav(restaurant.name);
          }}
        >
          Add to favourites
        </button>

        <div className={styles.circle}>
          <p> {restaurant.name}</p>
          <p>{restaurant.vicinity}</p>
          <p>
            Rating:
            {restaurant.rating}
            /5
          </p>
          <img src={restaurant.icon} alt="Restaurant picture" />
        </div>
      </div>
    );
  }
}
