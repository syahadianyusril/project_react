import React, { Component } from "react";
import "../assets/css/bootstrap.min.css";
import "../assets/css/main.css";
import { Link } from "react-router-dom";
const Navigation = props => {
  return (
    <div class="container-fluid py-3">
      <div class="row flex-nowrap justify-content-between align-items-center">
        <div class="col-4 pt-1">
          <a class="text-muted" href="#">Home</a>
        </div>
        <div class="col-4 text-center">
          <a class="blog-header-logo text-dark" href="#">Events</a>
        </div>
        <div class="col-4 d-flex justify-content-end align-items-center">
          <a class="btn btn-sm btn-outline-secondary" href="#">Sign up</a>
        </div>
      </div>
    </div>
    
  );
};

export default Navigation;
