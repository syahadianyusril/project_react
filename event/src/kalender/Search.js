import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <div class="container-fluid">
          <hr></hr>
          <nav class="navbar">
            <form class="form-inline container">
              <select class="custom-select col-md-4 col-sm-6" id="inputGroupSelect01">
                <option selected>Events Category ....</option>
                <option value="103">Music Concert</option>
                <option value="101">Conference</option>
                <option value="102">Technology</option>
              </select>
              <input class="form-control col-md-4 col-sm-6" type="search" placeholder="Location" aria-label="Search"/>
              <input class="form-control col-md-4 col-sm-12" type="date" name="bday" id="datePicker"/>
              <button class="btn btn-outline-success col-md-12" type="submit" id="datebtn">Search</button>
            </form>
          </nav>
        
      </div>
      
    );
  }
}
export default Search;
