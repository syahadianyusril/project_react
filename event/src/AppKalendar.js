import React, { Component } from "react";
import { connect } from "unistore/react";
import { withRouter } from "react-router-dom";
import Search from "./kalender/Search";
import ContentKalender from "./kalender/Content";
import Footer from "./component/Footer";
import { actions } from "./Store";
import HolidayEvent from "./kalender/Getcalender";

class AppKalendar extends Component {
  state = {
    listEvents: []
  };

  componentDidMount = () => {
    this.props.getEvents().then(() => {
      console.log("ini hasil events", this);
      // this.setState({
      //   listEvents: this.props.listEvents
      // });
    });
  };

  handleInputChange = e => {
    const value = e.target.value;
    this.props.searchEvents(value);
  };

  handleInputChange1 = e => {
    const value = e.target.value;
    console.log("oioioioioio", value)
    this.props.searchEventDate(value)
    // this.props.dateCari = (value)
  };

  handleClick1 = e => {
    console.log(e.target.value);
    if (e.target.value == "Music Concert") {
      this.props.searchCategory("music");
    }
    else if (e.target.value == "Education") {
      this.props.searchCategory("education");
    }
    else if (e.target.value == "Health") {
      this.props.searchCategory("health");
    }
  };

  render() {
    // const listEvents = this.props.listEvents
    console.log("appKal", this.props.listEvents);
    const { listEvents } = this.props;
    return (
      <div>
        <HolidayEvent />
        <Search
          doSearch={this.handleInputChange}
          doClick1={this.handleClick1}
          doSearching={this.handleInputChange1}
          
        />

        <div class="container-fluid">
          <div class="container-fluid">
            <hr />

            <div class="row">
              {listEvents.map((item, key) => {
                var created = item.created;
                var created1 = created.slice(0, 10);
                var time = item.start_time;
                var date = time.slice(0, 10);
                var hour = time.slice(11, 19);
                // if (this.props.dateCari === "") {
                    return (
                      <ContentKalender
                        key={key}
                        title={item.title}
                        join={item.url}
                        venue={item.city_name}
                        date={date}
                        hour={hour}
                        desc={item.description}
                        created={created1}
                        // image={item.image.medium.url}
                    /> );
                  // } else if (this.props.dateCari === item.date ) {
                  //   return (
                  //     <ContentKalender
                  //       key={key}
                  //       title={item.title}
                  //       join={item.url}
                  //       venue={item.city_name}
                  //       date={date}
                  //       hour={hour}
                  //       desc={item.description}
                  //       created={created1}
                  //       // image={item.image.medium.url}
                  //     /> );
                    // }
                  // );
              })}
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default connect(
  "is_login, listEvents, dateCari",
  actions
)(withRouter(AppKalendar));
