import React, {Component}from 'react';
import { connect } from "unistore/react";
import { withRouter } from "react-router-dom";
import ContentSignIn from './signin/Signin.js';

class AppSignIn extends Component {
  render () {
      return (
        <div>
          <ContentSignIn/>
        </div>
      );
    }
  }    

export default connect(
  "is_login"
)(withRouter(AppSignIn));
