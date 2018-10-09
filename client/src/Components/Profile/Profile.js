import React, { Component } from "react";
import Root from "../../hoc/Root";
import Navbar from "../Navbar/Navbar";
import style from "./Profile.css";
import App from "../../base";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: App.auth().currentUser.email,
      password: "",
      favourites:[]
    };
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
  }
  componentDidMount(){
    let messagesRef = App.database().ref('favourites');
    messagesRef.on('child_added', snapshot => {
      let message = { text: snapshot.val(), id: snapshot.key };
      this.setState({
        favourites: [...this.state.favourites, message],
      });
      console.log(this.state.favourites);
    })
  }
  render() {
    const favourites = this.state.favourites.map;
    console.log("faves " + favourites);
    return (
      <div>
        <Navbar />
        <div className={style.Profile}>
          <h1 className={style.Name}>{this.state.username}</h1>
          <h1 className={style.header}>Edit your information</h1>
          <div className={style.item}>
            <div>
              Email:
              <button onClick={this.changeEmail} className={style.button}>Change email</button>
            </div>
            <input
              className= { style.input }
              placeholder={this.state.email}
              onChange={value => this.setState({ email: value.target.value })}
            />
          </div>
          <div className={style.item}>
            <div>
              Password:
              <button onClick={this.changePassword} className={style.button}>Change password</button>
            </div>
            <input
              className= { style.input }
              type="password"
              onChange={value =>
                this.setState({ password: value.target.value })
              }
            />
          </div>
          <ul>
            <div>Favourites: {this.state.favourites.map(message =>
              <li key={message.id}>{message.text}
              </li>
            )}
          </div>
        </ul>
      </div>
    </div>
  );
}

async changeEmail() {
  let user = App.auth().currentUser;
  try {
    console.log();
    let res = await user.updateEmail(this.state.email);
    alert("Updated email to " + this.state.email);
    console.log(res);
  } catch (e) {
    alert("Unable to update email: " + e.message);
    console.log(e);
  }
}

async changePassword() {
  let user = App.auth().currentUser;
  try {
    let res = await user.updatePassword(this.state.password);
    alert("Updated password to " + this.state.password);
    console.log(res);
  } catch (e) {
    alert("Unable to update password: " + e.message);
    console.log(e);
  }
}
}

export default Profile;
