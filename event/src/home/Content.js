import React, { Component } from "react";
import PropTypes from "prop-types";
import { Redirect, withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../Store";

class ContentHome extends Component {
  componentDidMount = () => {
    this.props.getEvents();
  };
  handleClick = e => {
    this.props.history.replace("/readmore");
  };
  render() {
    return (
      <div class="col-lg-3 col-md-4 col-sm-6">
        <div class="card mb-3 shadow-sm">
          {/* <img class="card-img-top" src={this.props.image}/> */}
          <div class="card-body">
            <p class="card-text">{this.props.title}</p>
            <p class="card-text">Location: {this.props.venue}</p>
            <p class="card-text">Date: {this.props.date}</p>
            <p class="card-text">Time: {this.props.hour}</p>

            {/* <a class="card-text" href="#" onClick={this.handleClick}>Read more ..  </a><br/> */}

            {/* <a class="card-text" href={this.props.join}>Join here </a> */}
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary">
                  <a href={this.props.join}> Join here </a>{" "}
                </button>
              </div>
              <br />
            </div>
            <small class="text-muted">Posted at {this.props.created}</small>
          </div>
        </div>
      </div>
    );
  }
}

ContentHome.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  category: PropTypes.string,
  date: PropTypes.string,
  venueName: PropTypes.string,
  venueAddress: PropTypes.string,
  url: PropTypes.string
};

// export default ContentHome;
export default connect(
  "is_login, listEvents",
  actions
)(withRouter(ContentHome));
