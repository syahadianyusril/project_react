import React, { Component } from "react";
import { connect} from "unistore/react";
import {actions} from "../Store";
import {withRouter} from "react-router-dom";
import axios from "axios";

const baseUrl = "https://calendarific.com/api/v2/holidays?country=ID&year=2018&api_key=63a8c86587d61b3674d6567b7e2f7be4c239376e";

class Holidays extends Component {
  render() {
    const date = this.props.date;
    const sliceDate = date.slice(0,10);
    return (
            <div class="col-md-4">

                <span>{this.props.free}/{sliceDate}</span>
            </div>
    );
  }
}

export default Holidays;    