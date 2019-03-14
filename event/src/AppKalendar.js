import React, {Component}from 'react';
import { connect } from "unistore/react";
import { withRouter } from "react-router-dom";
import Search from './kalender/Search';
import ContentKalender from './kalender/Content';
import Footer from './component/Footer';

class AppKalendar extends Component {
  render () {
      return (
        <div>
            <Search/>
            <ContentKalender/>
            <Footer/>
        </div>
      );
    }
  }    

export default connect(
  "is_login"
)(withRouter(AppKalendar));
