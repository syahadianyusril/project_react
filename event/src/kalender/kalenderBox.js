import React, { Component } from "react";

class MonthSearch extends Component {
  render() {
    return (
      <div class="container-fluid">
          <hr></hr>
          <nav class="navbar">
            <form class="form-inline container">
              <select name="bulan" class="custom-select col-md-4 col-sm-6" id="inputGroupSelect01" 
              onChange={e => this.props.search(e)}
                value={this.props.bulan}>
                <option value="1">Januari</option>
                <option value="2">Februari</option>
                <option value="3">Maret</option>
                <option value="4">April</option>
                <option value="5">Mei</option>
                <option value="6">Juni</option>
                <option value="7">Juli</option>
                <option value="8">Agustus</option>
                <option value="9">September</option>
                <option value="10">Oktober</option>
                <option value="11">November</option>
                <option value="12">Desember</option>
              </select>
            </form>
          </nav>
        
      </div>
      
    );
  }
}
export default MonthSearch;
