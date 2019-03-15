import React, { Component } from "react";
import "../assets/css/404.css";

class ContentNotMatch extends Component {
  render() {
    return (
      <div class="container-fluid">
        <section id="not-found container">
          <div id="title">404</div>
          <div class="circles">
            <p>404<br></br>
             <small>PAGE NOT FOUND</small>
            </p>
            <span class="circle big"></span>
            <span class="circle med"></span>
            <span class="circle small"></span>
          </div>
        </section>
      </div>
    );
  }
}
export default ContentNotMatch;
