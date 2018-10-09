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
          <div className={style.item}>
            <div>
              Email:
              <button onClick={this.changeEmail}>Change email</button>
            </div>
            <input
              placeholder={this.state.email}
              onChange={value => this.setState({ email: value.target.value })}
            />
          </div>
          <div className={style.item}>
            <div>
              Password:
              <button onClick={this.changePassword}>Change password</button>
            </div>
            <input
              type="password"
              onChange={value =>
                this.setState({ password: value.target.value })
              }
            />
          </div>
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
      console.log(e);
    }
  }
}

export default Profile;
