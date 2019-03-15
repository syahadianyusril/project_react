import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "unistore/react";
import { withRouter } from "react-router-dom";
import { actions } from "../Store";


class Search extends Component {
  render() {
    return (
      <div class="container-fluid">
          <hr></hr>
          <nav class="navbar">
            <form class="form-inline container">
              <select onChange={this.props.doClick1} name="categori" class="custom-select col-md-4 col-sm-6" id="inputGroupSelect01">
                <option selected>Events Category ....</option>
                <option>Music Concert</option>
                <option>Education</option>
                <option>Health</option>
              </select>
              <input class="form-control col-md-4 col-sm-6" type="text" name="Search" id="search" placeholder="Location" aria-label="Search" onChange={this.props.doSearch}/>
              <input class="form-control col-md-4 col-sm-12" type="date" name="bday" id="datePicker" onChange={this.props.doSearching}/>
            </form>
          </nav>
        
      </div>
      
    );
  }
}
Search.propTypes = {
  title: PropTypes.string.isRequired
}
export default connect(
  "username",
  actions
)(withRouter(Search));
