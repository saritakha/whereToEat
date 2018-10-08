import React, { Component } from "react";
import Root from "../../hoc/Root";
import Navbar from "../Navbar/Navbar";
import style from "./Profile.css";
import { FormGroup, FormControl, InputGroup, Glyphicon } from "react-bootstrap";
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        username: "Moomin",
        password: "******",
        biography: "5 year old programmer living in Helsinki."
      },
      image: "https://kawaiiface.net/wp-content/uploads/2015/07/moomin.jpg",
      quote: {
        content: "You'll have to admit that it's fun to be lazy.",
        source: "The Exploits of Moominpappa"
      }
    };
  }

  render() {
    return (
      <Root>
        <Navbar />
        <div className={style.App}>
          <div className={style.Profile}>
            <h1 className={style.Name}>{this.state.person.username}</h1>
            <form class={style.form}>
              Username:
              <button>Change username</button>
              <FormControl placeholder={this.state.person.username} />{" "}
              Biography:
              <button>Change biography</button>
              <FormControl placeholder={this.state.person.biography} />
              Password:
              <button>Change password</button>
              <FormControl placeholder={this.state.person.password} />
              Profile picture:
              <button className={style.Button}>Change profile picture</button>
              <img src={this.state.image} />
            </form>
          </div>
        </div>
      </Root>
    );
  }
}

export default Profile;
