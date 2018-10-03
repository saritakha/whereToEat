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
        name: "Moomin",
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
            <h1 className={style.Name}>{this.state.person.name}</h1>
            <p className={style.Bio}>{this.state.person.biography}</p>
            <form class={style.form}>
              Password:
              <FormControl placeholder="*******" />
            </form>
            <img src={this.state.image} />
            <div className={style.Quote}>
              <blockquote>
                &ldquo; {this.state.quote.content} &rdquo;
              </blockquote>
              <div className={style.byline}>
                &mdash; {this.state.quote.source}
              </div>
            </div>
          </div>
        </div>
      </Root>
    );
  }
}

export default Profile;
