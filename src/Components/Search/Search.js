import React from "react";
import styles from "./Search.css";

const Search = () => {
  navigator.geolocation.watchPosition(function(position) {
    console.log(position);
  });
  return (
    <div>
      <form className={styles.form}>
        <label>
          Search for restaurant
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <button>
        <a href="http://maps.google.com/maps?daddr=60.18009011393016,24.911799430847168">
          Map
        </a>
      </button>
    </div>
  );
};

export default Search;
