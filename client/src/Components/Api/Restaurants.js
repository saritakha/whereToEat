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
        lat: 0,
        long: 0
      }
    };
  }

  componentDidMount() {
    let self = this;
    navigator.geolocation.watchPosition(function(position) {
      self.setState({
        enableHighAccuracy: true,
        location: {
          lat: position.coords.latitude,
          long: position.coords.longitude,
          error:null
        }
      });
    },
    (error) => this.setState({ error: error.message }),
    { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, distanceFilter: 10 }
  );

  this.setState({
    isLoading: true
  });
  fetch(
    "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=60.21749913,24.8064967&radius=500&type=restaurant&key=AIzaSyDGgNbzA8m2lzd9ijxaGPhmoe-oVTr7nDk"
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
  window.location.href =
  "https://www.google.com/maps/dir//" + name + ", +" + vic;
};
AddToFav = () => {
  alert("Added to favourites!");
};
CurrentLocDir = (lat,long,name,vic) => {
  console.log("lat: " + lat + " long: " + long);
  window.location.href ="https://www.google.com/maps/dir/?api=1&origin=" + lat + "," +long + "&" + "destination=" + name + ", +" + vic
};

render() {
  const { restaurants, isLoading, error, location } = this.state;
  const restaurant = restaurants[this.state.index];
  console.log(restaurants);
  if (isLoading) {
    return <p>Loading</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }

  if (restaurants.length === 0) return <div>loading</div>;
  return (
    <div>
      <Navbar />

      <button
        className="button"
        onClick={() => this.setState({ index: this.state.index + 1 })}
        >
          No, show me another place
        </button>
        <button
          onClick={() => {
            console.log("lat" + location.lat + "ja long " + location.long);
            this.CurrentLocDir(location.lat, location.long, restaurant.name, restaurant.vicinity);
          }}
          >
            Get directions from my current location
          </button>
          <button
            className="button"
            onClick={() => {
              this.handleClick(restaurant.name, restaurant.vicinity);
            }}
            >
              Get me directions from anywhere!
            </button>
            <button
              className="button"
              onClick={() => {
                this.AddToFav();
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
