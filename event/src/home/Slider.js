import React, { Component } from "react";
import { Link } from "react-router-dom";
const Slider = props => {
  return (
    <div class="container-fluid">
      <hr></hr>
      <div class="row slider-background" >
        <div class="p-3 p-md-5 text-white rounded">
          <div class="col-md-6 px-0 judul">
            <h1 class="display-4 font-italic">Let's explore a thousands of events and opportunities to explore the world.</h1>
            <p class="lead my-3">Try our newly launched product now and get a great experience of attending cool events and activities, meet new people and enjoy the best time of your life.</p>
            <p class="lead mb-0"><a href="#" class="text-white font-weight-bold">Continue reading...</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
