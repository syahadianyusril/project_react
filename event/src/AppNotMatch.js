import React, {Component}from 'react';
import { connect } from "unistore/react";
import { withRouter } from "react-router-dom";
import ContentNotMatch from './nomatch/Content.js';

class AppNotMatch extends Component {
  render () {
      return (
        <div>
            <ContentNotMatch/>
        </div>
      );
    }
  }    

export default connect(
  "is_login"
)(withRouter(AppNotMatch));
