import React, { Component } from "react";
import "../assets/css/login.css";

class ContentSignIn extends Component {
  render() {
    return (
      <div>
        <div class="container-fluid">
          <hr></hr>
          <br></br>
          <br></br>
          <br></br>
          <section id="content">
            <form action="">
              <h1>Login Form</h1>
              <div>
                <input
                  type="text"
                  placeholder="Username"
                  required=""
                  id="username"
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  required=""
                  id="password"
                />
              </div>
              <div>
                <input type="submit" value="Log in"/>
                <a>Login to your Events account</a>
              </div>
            </form>
          </section>
        </div>
      </div>
    );
  }
}
export default ContentSignIn;
