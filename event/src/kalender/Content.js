import React, { Component } from "react";
import { Redirect, withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../Store";

class ContentKalender extends Component {
 
  render() {
    return (
      <div class="col-lg-3 col-md-4 col-sm-6">
        <div class="card mb-4 shadow-sm">
          <img class="card-img-top" src={this.props.image} />
          <div class="card-body">
            <p class="card-text">{this.props.title}</p>
            <p class="card-text">Location: {this.props.venue}</p>
            <p class="card-text">Date: {this.props.date}</p>
            <p class="card-text">Time: {this.props.hour}</p>
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
// export default ContentKalender;
export default connect(
  "is_login, listEvents",
  actions
)(withRouter(ContentKalender));
