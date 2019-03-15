import React, { Component } from "react";
import "../assets/css/bootstrap.min.css";
import "../assets/css/main.css";
import { Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../Store";
import { withRouter } from "react-router-dom";

const Navigation = props => {
  if (!props.is_login) {
    return (
      <div class="container-fluid py-3">
        <div class="row flex-nowrap justify-content-between align-items-center">
          <div class="col-4">
            <Link to="/" className="btn btn-sm btn-outline-secondary">Home</Link>- 
            <Link to="/kalendar" className="btn btn-sm btn-outline-secondary">Event</Link>
          </div>
          <div class="col-4 text-center">
            <Link to="/" className="blog-header-logo text-dark">Events</Link>
          </div>
          <div class="col-4 d-flex justify-content-end align-items-center">
            {/* <Link to="/profil" className="btn btn-sm btn-outline-secondary">Profile</Link> -  */}
            <Link to="/signin" className="btn btn-sm btn-outline-secondary">Sign In</Link>
            <Link to="/signin" className="btn btn-sm btn-outline-secondary">Sign Up</Link>
          </div>
        </div>
      </div>
    );
  } else {
      return (
        <div class="container-fluid py-3">
          <div class="row flex-nowrap justify-content-between align-items-center">
            <div class="col-4">
              <Link to="/" className="btn btn-sm btn-outline-secondary">Home</Link>- 
              <Link to="/kalendar" className="btn btn-sm btn-outline-secondary">Event</Link>
            </div>
            <div class="col-4 text-center">
              <Link to="/" className="blog-header-logo text-dark">Events</Link>
            </div>
            <div class="col-4 d-flex justify-content-end align-items-center">
              <Link to="/profil" className="btn btn-sm btn-outline-secondary">Profile</Link> - 
              <Link to="/" className="btn btn-sm btn-outline-secondary" onClick={() => props.postSignout()}>Log Out</Link>
            </div>
          </div>
        </div>
      );

  }
};

// export default Navigation;
export default connect (
  "is_login",
  actions
) (withRouter(Navigation));
