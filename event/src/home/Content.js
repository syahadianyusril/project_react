import React, { Component } from "react";
import PropTypes from "prop-types";

const ContentHome = props => {

    return (
          <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
              <img class="card-img-top" src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail" alt="Card image cap"/>
              <div class="card-body">
                <p class="card-text">{props.title}</p>
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

ContentHome.propTypes = {
  title : PropTypes.string.isRequired,
  image: PropTypes.string,
  category: PropTypes.string,
  date: PropTypes.string,
  venueName: PropTypes.string,
  venueAddress: PropTypes.string,
  url: PropTypes.string
};

export default ContentHome;
