import React, {Component}from 'react';
import Slider from './home/Slider.js'
import ContentHome from './home/Content.js'
import Footer from './component/Footer.js'
import { Redirect } from "react-router-dom";
import { connect } from "unistore/react";
import { withRouter } from "react-router-dom";

class App extends Component {
  render () {
      return (
        <div>
          <Slider/>
          <ContentHome/>
          <Footer/>
        </div>
      );
    }
  }    

export default connect(
  "is_login"
)(withRouter(App));
