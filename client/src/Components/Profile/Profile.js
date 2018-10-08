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
      password: ""
    };
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className={style.Profile}>
          <h1 className={style.Name}>{this.state.username}</h1>
          Email:
          <button onClick={this.changeEmail}>Change email</button>
          <input
            placeholder={this.state.email}
            onChange={value => this.setState({ email: value.target.value })}
          />
          Password:
          <button onClick={this.changePassword}>Change password</button>
          <input
            type="password"
            onChange={value => this.setState({ password: value.target.value })}
          />
        </div>
      </div>
    );
  }

  async changeEmail() {
    let user = App.auth().currentUser;
    try {
      console.log();
      let res = await user.updateEmail(this.state.email);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  }

  async changePassword() {
    let user = App.auth().currentUser;
    try {
      let res = await user.updatePassword(this.state.password);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  }
}

export default Profile;
