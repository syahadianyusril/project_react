import React, { Component } from "react";
import { connect} from "unistore/react";
import {actions} from "../Store";
import {withRouter} from "react-router-dom";
import axios from "axios";
import Holidays from "./kalender";
import MonthSearch from "./kalenderBox"

const baseUrl = "https://calendarific.com/api/v2/holidays?country=ID&year=2019&api_key=63a8c86587d61b3674d6567b7e2f7be4c239376e";

class HolidayEvent extends Component {
  constructor (props){    
    super(props);
    this.state = {
        listHolidays: [],
        bulan: 1
          
};
}

componentDidMount = () => {
    const self = this;
    axios 
    .get(baseUrl)
    .then(function(response){
        self.setState({listHolidays: response.data.response.holidays});
        console.log("ceeeekkkk", response.data.holidays);
    })
    .catch(function(error){
        console.log("salah",error);
    })
}

onMonthChange = e => {
    this.setState({
      bulan: e.target.value
    });
  };

filterMonth = (listHolidays) => {
    return listHolidays.date.datetime.month === parseInt(this.state.bulan)
}



  render() {
    const {listHolidays} = this.state;
    const filtered = listHolidays.filter(this.filterMonth)
    return (
      <div class="container-fluid">
          <hr />
          <MonthSearch search ={this.onMonthChange} />
          <div class="row">
          {filtered.map((event, key) => {   
                            // const content = event[key].city_name
                            return <Holidays key={key} free={event.name} date={event.date.iso}/>;
                    })}
        </div>
      </div>
    );
  }
}

export default HolidayEvent;