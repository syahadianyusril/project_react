import React, {Component}from 'react';
import { connect } from "unistore/react";
import { withRouter } from "react-router-dom";
import ContentProfil from './profil/Profil.js';

class AppProfil extends Component {
  render () {
      return (
        <div>
          <ContentProfil/>
        </div>
      );
    }
  }    

export default connect(
  "is_login"
)(withRouter(AppProfil));
