import React, { Component } from "react";
import "../assets/css/404.css";

class ContentNotMatch extends Component {
  render() {
    return (
      <div class="container">
        <section id="not-found container">
          <div id="title">Simple Pure CSS3 &bull; 404 Error Page</div>
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
