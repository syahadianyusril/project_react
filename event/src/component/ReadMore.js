import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "unistore/react";
import { actions } from  "../Store";

import {Redirect, withRouter} from "react-router-dom";


class ReadMore extends Component {
    componentDidMount = () => {
        this.props.getEvents()
      };
    render () {
        const {listEvents} = this.props;
        
    return (
          <div class="col-md-3">
            <div class="card mb-3 shadow-sm">
              <img class="card-img-top" src={this.props.image}/>
              <div class="card-body">
                <p class="card-text">{this.props.title}</p>
                <p class="card-text">Location: {this.props.venue}</p>
                <p class="card-text">Date: {this.props.time}</p>
                <a class="card-text" href="#">Description: {this.props.desc}</a><br/>
                <a class="card-text" href={this.props.join}>Join here </a>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                    <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                  </div>
                  <small class="text-muted">9 mins</small>
                </div>
              </div>
            </div>       
        </div>
    );

    }
  }

ReadMore.propTypes = {
  title : PropTypes.string.isRequired,
  image: PropTypes.string,
  category: PropTypes.string,
  date: PropTypes.string,
  venueName: PropTypes.string,
  venueAddress: PropTypes.string,
  url: PropTypes.string
};

// export default ReadMore;
export default connect(
    "is_login, listEvents",
    actions
  )(withRouter(ReadMore));
