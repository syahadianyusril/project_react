import React, { Component } from "react";
import "../assets/css/login.css";
import { connect } from "unistore/react";
import { actions } from "../Store";
import { withRouter } from "react-router-dom";

class ContentSignIn extends Component {
  doLogin = () => {
    this.props.postLogin().then(() => {
      console.log("login status di Signin", this.props.is_login)
        this.props.history.replace("/profil");
    });
  };

  render() {
    return (
      <div>
        <div class="container-fluid">
          <hr></hr>
          <br></br>
          <br></br>
          <br></br>
          <section id="content">
            <form action="" onSubmit={e => e.preventDefault()}>
              <h1>Login Form</h1>
              <div>
                <input
                  type="text"
                  placeholder="Username"
                  required=""
                  id="username"
                  onChange={e => this.props.setField(e)}
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  required=""
                  id="password"
                  onChange={e => this.props.setField(e)}
                />
              </div>
              <div>
                <input type="submit" value="Log in" onClick={() => this.doLogin()}/>
                <a>Login to your Events account</a>
              </div>
            </form>
          </section>
        </div>
      </div>
    );
  }
}
// export default ContentSignIn;
export default connect (
  "is_login, email, full_name",
  actions
) (withRouter(ContentSignIn))
